# 02_DevOps_Fundamentals_2.md

# Accenture Placement Preparation — DevOps Fundamentals: Part 2

## Purpose

This sequel extends Part 1 into the areas most likely to create **conceptual traps and interview follow-ups**:

- Git and branching
- CI/CD pipeline internals
- artifacts
- Docker Compose
- environment/configuration management
- health checks
- deployment failures and rollback
- CI/CD security
- infrastructure workflow
- reliability basics
- practical scenario questions

This is still **fresher placement level**. Advanced Kubernetes/SRE internals are intentionally excluded.

---

# 1. Priority

### ⭐⭐⭐⭐ High

Part 1 covered the basic vocabulary. This part focuses on **how the pieces work together**.

For your preparation, prioritize in this order:

1. CI/CD pipeline reasoning
2. Git fundamentals
3. Docker/Compose
4. Deployment and rollback
5. Secrets/security
6. Infrastructure as Code workflow
7. Health checks and monitoring
8. Reliability concepts
9. Advanced tooling only if time remains

---

# 2. Git Fundamentals

## One-line definition

Git is a distributed version-control system used to track changes to source code and collaborate safely.

Basic workflow:

```text
Working Directory
       ↓
git add
       ↓
Staging Area
       ↓
git commit
       ↓
Local Repository
       ↓
git push
       ↓
Remote Repository
```

---

# 3. Working Directory vs Staging Area vs Repository

### Working directory

Files currently being edited.

### Staging area

Changes selected for the next commit.

### Repository

Committed history.

Memory:

```text
Edit → Stage → Commit → Push
```

---

# 4. Commit

A commit records a snapshot of changes in Git history.

A good commit should represent a logical change.

Bad:

```text
fixed everything
```

Better:

```text
fix authentication token validation
```

The exact message style varies by team; the important concept is that commits create traceable history.

---

# 5. Branch

A branch allows development to proceed independently from another line of development.

Example:

```text
main
  |
  +---- feature/auth
  |
  +---- feature/payment
```

Common purpose:

- feature development
- bug fixes
- experiments
- release management

---

# 6. Merge

Merge combines histories from branches.

Example:

```text
main
  \
   feature
      \
       merge → main
```

Potential result:

- no conflict
- fast-forward
- merge commit
- conflict requiring manual resolution

---

# 7. Merge Conflict

A conflict occurs when Git cannot automatically determine how competing changes should be combined.

Example:

```text
main:
x = 10

feature:
x = 20
```

If both changed the same relevant lines, Git may require human resolution.

Correct workflow:

```text
Identify conflict
 ↓
Understand both changes
 ↓
Edit file
 ↓
Test
 ↓
Stage
 ↓
Commit/continue merge
```

### Trap

A merge conflict is not automatically a programming bug.

It is primarily a source-control integration problem.

---

# 8. Pull Request

A Pull Request (PR) is a collaboration/review mechanism for proposing changes before integrating them.

Typical flow:

```text
Feature branch
     ↓
Push
     ↓
Pull Request
     ↓
CI checks
     ↓
Code review
     ↓
Merge
```

A PR is not itself the same thing as a Git commit or branch.

---

# 9. CI Trigger

A pipeline can be triggered by:

- push
- pull request
- tag
- scheduled event
- manual dispatch
- external event

Do not assume every pipeline runs on every push.

The workflow configuration determines the trigger.

---

# 10. Build Artifact

An artifact is an output produced by a build process that can be stored or passed to later stages.

Examples:

```text
compiled binary
.zip package
.jar
npm build output
Docker image
test report
```

Concept:

```text
Source
 ↓
Build
 ↓
Artifact
 ↓
Test/Release/Deploy
```

---

# 11. Artifact vs Source Code

Source code:

```text
Human-maintained input
```

Artifact:

```text
Generated output
```

Example:

```text
TypeScript source
      ↓
Compilation
      ↓
JavaScript/build artifact
```

### Interview trap

A Docker image is also a type of deployable build artifact, although teams may use more specific terminology for different artifact types.

---

# 12. Artifact Repository vs Git Repository

### Git repository

Primarily stores source code and version history.

### Artifact repository/registry

Stores generated packages/images/artifacts.

Example:

```text
GitHub repository
    ↓
Source code

Container Registry
    ↓
Docker images
```

---

# 13. Build Once, Deploy Many

A strong CI/CD principle is:

> Build a release artifact once and promote the same artifact across environments.

Example:

```text
Commit
 ↓
Build image:v1.4
 ↓
Test
 ↓
Deploy staging
 ↓
Validate
 ↓
Deploy production
```

Avoid rebuilding separately for production if that could produce a different artifact.

### Why?

It reduces the chance that:

```text
staging artifact ≠ production artifact
```

---

# 14. Environment Configuration

Different environments may need different configuration:

```text
Development
Staging
Production
```

Examples:

- database URL
- API endpoint
- feature flags
- log level
- credentials

The application code should not need to be rewritten just because the environment changes.

---

# 15. Configuration vs Secret

Configuration:

```text
LOG_LEVEL=info
PORT=3000
```

Secret:

```text
DATABASE_PASSWORD=...
API_SECRET=...
```

Both require careful management, but secrets require stronger protection.

---

# 16. Twelve-Factor Configuration Principle

A useful modern application principle is to keep deploy-specific configuration outside the codebase where practical.

Example:

```text
Same application artifact
        ↓
Different environment configuration
        ↓
Dev / Staging / Production
```

---

# 17. Docker Compose

Docker Compose is used to define and run multi-container applications.

Example architecture:

```text
frontend
   ↓
backend
   ↓
postgres
   ↓
redis
```

A Compose file can define:

- services
- networks
- volumes
- environment variables
- ports
- dependencies

---

# 18. Why Docker Compose?

Without Compose:

```text
docker run ...
docker run ...
docker network ...
docker volume ...
```

With Compose:

```text
docker compose up
```

The configuration describes the application stack.

### Important

Docker Compose is excellent for local development and smaller multi-container environments.

It is not a universal replacement for Kubernetes.

---

# 19. Compose Service Communication

Suppose:

```text
services:
  backend:
  postgres:
```

The backend can commonly reach PostgreSQL using the service name:

```text
postgres
```

rather than relying on a hard-coded container IP.

Concept:

```text
backend
   ↓
postgres:5432
```

---

# 20. Ports

Suppose:

```yaml
ports:
  - "8080:3000"
```

Interpretation:

```text
Host port 8080
       ↓
Container port 3000
```

Therefore:

```text
localhost:8080
```

reaches the container's port 3000.

### Trap

The two numbers are not interchangeable.

---

# 21. Expose vs Publish

In Docker terminology:

### EXPOSE

Documents the port an application is intended to use.

### Published port

Actually maps a host port to a container port.

Example:

```yaml
ports:
  - "8080:3000"
```

This publishes the port.

### Trap

`EXPOSE 3000` alone does not mean the host can necessarily access the container through port 3000.

---

# 22. Health Checks

A health check tests whether a service is actually functioning.

Example:

```text
GET /health
```

Expected:

```text
HTTP 200
```

Health checks help distinguish:

```text
Process exists
```

from:

```text
Application is ready to serve traffic
```

---

# 23. Liveness vs Readiness

### Liveness

Question:

> Is the application alive?

If liveness fails, restarting may be appropriate.

### Readiness

Question:

> Is the application ready to receive traffic?

If readiness fails, traffic should generally be withheld while the application recovers.

Memory:

```text
Liveness = alive?
Readiness = ready?
```

---

# 24. Startup Problems

A common deployment mistake is assuming:

```text
Process started
=
Application ready
```

Not necessarily.

An application may still be:

- loading configuration
- connecting to a database
- warming caches
- running migrations
- initializing dependencies

Therefore startup/readiness handling matters.

---

# 25. Deployment Verification

A deployment should not be considered healthy merely because the command completed successfully.

Useful checks:

```text
Deployment status
 ↓
Health checks
 ↓
Error rate
 ↓
Latency
 ↓
Logs
 ↓
Metrics
 ↓
User-facing behavior
```

---

# 26. Rollback

Rollback means returning to a previous known-good version.

Example:

```text
v1.2 → production
       ↓
problem
       ↓
rollback
       ↓
v1.1
```

Rollback is a **mitigation**, not necessarily the final root-cause fix.

---

# 27. Rollback vs Fix Forward

### Rollback

Return to an earlier version.

Useful when:

- impact is high
- previous version is known to work
- immediate mitigation is required

### Fix forward

Deploy a new version that corrects the issue.

Useful when:

- the issue is understood
- rollback is difficult
- data/schema changes make rollback unsafe

Real organizations may use either or both.

---

# 28. Database Migration Trap

Application rollback can be complicated if a new version changed the database schema.

Example:

```text
v1
DB schema A

v2
DB schema B
```

If you deploy v2 and modify the database incompatibly, simply running the v1 application may not work.

### Lesson

Application deployment and database migration strategy must be considered together.

---

# 29. Zero-Downtime Deployment

The goal is to release a new version without making the service unavailable to users.

Techniques may include:

- rolling deployments
- blue-green deployment
- canary deployment
- load balancing
- graceful shutdown
- health checks

No strategy mathematically guarantees zero downtime in every failure scenario.

---

# 30. Graceful Shutdown

When an application receives a termination signal, it should ideally:

```text
Stop accepting new work
        ↓
Finish/close active work where possible
        ↓
Close connections
        ↓
Exit
```

This helps avoid:

- dropped requests
- corrupted operations
- connection leaks

---

# 31. CI/CD Security

A CI/CD pipeline has significant privileges.

Potential risks:

- leaked secrets
- compromised dependencies
- malicious pull requests
- poisoned build artifacts
- excessive cloud permissions
- compromised runners

---

# 32. Least Privilege in CI/CD

A CI job should receive only the permissions it needs.

Bad:

```text
Every build job = administrator
```

Better:

```text
Test job
→ test permissions

Deployment job
→ deployment permissions
```

This limits blast radius.

---

# 33. Dependency Security

Applications depend on third-party packages.

Pipeline checks may include:

```text
Dependency vulnerability scan
       ↓
Container image scan
       ↓
Static analysis
       ↓
Secret scanning
```

These controls should complement, not replace, secure development practices.

---

# 34. Secret Scanning

Secret scanning attempts to detect credentials accidentally committed to source control.

Examples:

- API keys
- cloud credentials
- private tokens

If a real secret is exposed:

**Do not merely delete the file.**

Treat the credential as potentially compromised and rotate/revoke it.

---

# 35. Immutable Infrastructure — Basic Concept

Immutable infrastructure means replacing infrastructure instances rather than modifying them extensively in place.

Concept:

```text
Old server
   ↓
New image/configuration
   ↓
New server
   ↓
Traffic moves
   ↓
Old server removed
```

Benefits can include:

- consistency
- repeatability
- simpler rollback
- reduced configuration drift

---

# 36. Configuration Drift

Configuration drift occurs when actual infrastructure gradually differs from the intended configuration.

Example:

Terraform says:

```text
Port 443 allowed
```

Someone manually changes the cloud firewall:

```text
Port 8080 also allowed
```

Now:

```text
Declared configuration ≠ actual infrastructure
```

IaC and controlled changes help reduce drift.

---

# 37. Deployment Pipeline Example

A realistic simplified backend pipeline:

```text
Developer
   ↓
Git Push
   ↓
Pull Request
   ↓
Code Review
   ↓
CI
 ┌───────────────┐
 │ Install       │
 │ Lint          │
 │ Typecheck     │
 │ Test          │
 │ Build         │
 └───────────────┘
   ↓
Docker Build
   ↓
Image Scan
   ↓
Push to Registry
   ↓
Deploy Staging
   ↓
Health Check
   ↓
Integration Tests
   ↓
Production Approval
   ↓
Deploy Production
   ↓
Monitor
```

This is the kind of architecture you should be able to explain in an interview.

---

# 38. What Happens When Production Deployment Fails?

Use this mental model:

```text
Detect
 ↓
Assess
 ↓
Mitigate
 ↓
Investigate
 ↓
Recover
 ↓
Verify
 ↓
Prevent recurrence
```

### Example

```text
New release
 ↓
Error rate ↑
 ↓
Stop rollout
 ↓
Check logs/metrics
 ↓
Rollback if appropriate
 ↓
Verify recovery
 ↓
Root-cause analysis
 ↓
Fix
 ↓
Improve pipeline
```

---

# 39. Common Failure Categories

## Build failure

Examples:

- dependency installation failure
- compilation error
- test failure

## Image failure

Examples:

- invalid Dockerfile
- missing file
- wrong base image
- registry authentication failure

## Deployment failure

Examples:

- insufficient permissions
- unavailable resources
- invalid configuration
- scheduling problem

## Application failure

Examples:

- runtime exception
- database failure
- incorrect business logic

## Infrastructure failure

Examples:

- network outage
- instance failure
- storage issue
- DNS problem

### Interview trick

Always identify **which layer failed** before proposing a fix.

---

# 40. 30 Practice Questions

## Easy — Q1–Q10

### Q1

Which Git area contains changes selected for the next commit?

A. Working directory  
B. Staging area  
C. Remote repository  
D. Container registry

**Answer: B**

---

### Q2

Which command normally records staged changes in Git history?

A. git commit  
B. git push  
C. git fetch  
D. git clone

**Answer: A**

---

### Q3

What does `git push` generally do?

A. Deletes local commits  
B. Sends local commits to a remote repository  
C. Creates a Docker image  
D. Starts Kubernetes

**Answer: B**

---

### Q4

Which file is commonly used to define a Docker Compose application?

A. compose.yaml  
B. package-lock.json  
C. terraform.state  
D. index.html

**Answer: A**

---

### Q5

In:

```text
8080:3000
```

which is commonly the host port?

A. 3000  
B. 8080  
C. Both  
D. Neither

**Answer: B**

---

### Q6

Which is primarily a container registry?

A. Docker Hub  
B. Grafana  
C. Jenkins  
D. Terraform

**Answer: A**

---

### Q7

What does a health check primarily help determine?

A. Whether an application is functioning as expected  
B. Whether Git has branches  
C. Whether code is beautiful  
D. Whether a Dockerfile has comments

**Answer: A**

---

### Q8

Which concept means giving a system only the permissions it needs?

A. High availability  
B. Least privilege  
C. Horizontal scaling  
D. Blue-green deployment

**Answer: B**

---

### Q9

What is rollback?

A. Deleting Git history  
B. Returning a deployment to a previous version  
C. Building a new Docker image  
D. Increasing CPU

**Answer: B**

---

### Q10

Which is primarily a source-control repository?

A. Git repository  
B. Container registry  
C. Prometheus  
D. Grafana

**Answer: A**

---

# Medium — Q11–Q20

### Q11

A developer changes source code but has not run `git add`.

Where is the change?

A. Staging area  
B. Working directory  
C. Remote repository  
D. Container registry

**Answer: B**

---

### Q12

A pull request triggers automated tests before merging.

What DevOps principle does this support?

A. Continuous integration  
B. Manual deployment  
C. Vertical scaling  
D. Database normalization

**Answer: A**

---

### Q13

A Docker Compose file contains:

```yaml
ports:
  - "9000:3000"
```

A browser accesses:

```text
localhost:9000
```

Which application port receives the traffic?

A. 9000  
B. 3000  
C. 80  
D. 443

**Answer: B**

---

### Q14

Why are service names useful in Docker Compose?

A. They can provide stable names for service-to-service communication within the Compose network  
B. They replace Git  
C. They encrypt containers automatically  
D. They create virtual machines

**Answer: A**

---

### Q15

A CI job builds an artifact and another deployment stage uses exactly that artifact.

What principle does this support?

A. Build once, deploy many  
B. Manual configuration drift  
C. Random deployment  
D. Source deletion

**Answer: A**

---

### Q16

A service process is running, but it cannot serve traffic because it is still initializing.

Which concept is especially relevant?

A. Readiness  
B. Git branching  
C. Artifact storage  
D. Vertical scaling

**Answer: A**

---

### Q17

A pipeline has cloud administrator permissions even though it only needs to upload an application artifact.

What principle is violated?

A. Least privilege  
B. Canary deployment  
C. Continuous delivery  
D. Caching

**Answer: A**

---

### Q18

A production deployment increases error rates. The previous release is known to work.

What is a possible immediate mitigation?

A. Rollback  
B. Delete all monitoring  
C. Remove Git  
D. Increase log deletion

**Answer: A**

---

### Q19

Terraform configuration says one security rule exists, but someone manually added another rule in the cloud console.

What problem can this create?

A. Configuration drift  
B. Compilation  
C. Recursion  
D. DNS caching

**Answer: A**

---

### Q20

Why can rebuilding an application separately for production be risky?

A. The resulting artifact may differ from what was tested  
B. Git cannot store source code  
C. Docker cannot build twice  
D. Kubernetes prohibits builds

**Answer: A**

---

# Tricky — Q21–Q30

### Q21

A pipeline successfully executes:

```text
build → test → package
```

but production deployment fails because the registry denies image access.

Which stage should you investigate first?

A. Registry authentication/authorization  
B. Unit-test algorithm  
C. Git branch naming  
D. Grafana dashboard colors

**Answer: A**

---

### Q22

A Pod/process is alive but fails its readiness check.

What is the most appropriate interpretation?

A. It may be alive but not ready to receive traffic  
B. It definitely needs to be deleted  
C. The source repository is broken  
D. The Docker image cannot exist

**Answer: A**

---

### Q23

A developer exposes a database container directly to the public internet because the backend needs database access.

What is the main concern?

A. The database has unnecessary network exposure  
B. Docker cannot use databases  
C. CI cannot run  
D. Git branches disappear

**Answer: A**

---

### Q24

A team rolls back application code after a deployment, but the new deployment already performed an incompatible database migration.

What is the major concern?

A. The old application may not work with the changed schema  
B. Git will delete the migration  
C. Docker automatically reverses database changes  
D. Grafana will repair the schema

**Answer: A**

---

### Q25

A developer says:

> "The deployment command returned success, so production is healthy."

What is wrong with this reasoning?

A. Deployment completion does not prove application health  
B. Deployments can never succeed  
C. Logs are unnecessary  
D. Git determines application health

**Answer: A**

---

### Q26

A team wants to test version 2 on a small percentage of production traffic while version 1 serves the rest.

Which strategy fits?

A. Canary  
B. Full replacement  
C. Database backup  
D. Git reset

**Answer: A**

---

### Q27

A CI pipeline can access production credentials from every pull-request build.

What is a major security concern?

A. A compromised or malicious PR could potentially abuse production credentials  
B. PRs cannot contain code  
C. Git automatically encrypts all secrets everywhere  
D. Docker prevents credential abuse

**Answer: A**

---

### Q28

A developer deletes an exposed cloud key from the current source tree.

What should happen next?

A. Treat it as potentially compromised and rotate/revoke it  
B. Assume it is safe  
C. Rename the variable  
D. Restart Jenkins

**Answer: A**

---

### Q29

A service repeatedly restarts because a liveness check fails, but the actual problem is a slow startup.

What might be wrong?

A. Health-check timing/configuration may be inappropriate for the startup behavior  
B. Git is corrupt  
C. Terraform cannot manage infrastructure  
D. Docker images cannot start slowly

**Answer: A**

---

### Q30

A team has:

```text
Code
 ↓
Build
 ↓
Test
 ↓
Image v5
 ↓
Staging
 ↓
Production
```

Someone proposes rebuilding the image before production.

What is the primary concern?

A. Production may receive a different artifact than the one tested in staging  
B. Docker images cannot be rebuilt  
C. Staging cannot use containers  
D. Git will delete v5

**Answer: A**

---

# 41. Scenario-Based Interview Questions

## Scenario A — Docker Compose Backend Cannot Reach PostgreSQL

Architecture:

```text
backend
postgres
```

Backend tries:

```text
localhost:5432
```

but PostgreSQL is another Compose service.

### Likely conceptual issue

Inside the backend container:

```text
localhost
```

means the backend container itself, not the PostgreSQL container.

The backend should generally use the Compose service name:

```text
postgres:5432
```

assuming the service is named `postgres` and listens on 5432.

### Key lesson

**Container localhost ≠ host localhost ≠ another container**

---

# 42. Scenario B — Production Error After Deployment

```text
Deploy v2
 ↓
HTTP 500 ↑
 ↓
Latency ↑
```

What should you do?

### Strong answer

1. Assess impact.
2. Stop further rollout if appropriate.
3. Check metrics, logs and traces.
4. Compare with the deployment.
5. Roll back if immediate mitigation is required and rollback is safe.
6. Verify recovery.
7. Investigate root cause.
8. Fix and improve prevention.

### Weak answer

> "Restart the server."

Restarting may hide symptoms without solving the underlying issue.

---

# 43. Scenario C — Pipeline Security

Pipeline:

```text
PR
 ↓
Build
 ↓
Deploy
```

Every PR can deploy to production.

### Problem

The trust boundary is too broad.

A malicious or compromised PR could potentially execute deployment actions.

### Better architecture

```text
PR
 ↓
CI checks
 ↓
Review
 ↓
Protected branch
 ↓
Controlled deployment
```

Use:

- protected branches
- scoped credentials
- approvals
- environment protection
- secret isolation

---

# 44. Scenario D — Configuration Drift

Terraform manages an EC2 security group.

An engineer manually changes the security group in the cloud console.

Later:

```text
terraform plan
```

shows an unexpected change.

### Why?

Actual infrastructure differs from Terraform's declared configuration/state expectations.

### Correct response

Investigate the difference before applying blindly.

---

# 45. Interview Follow-Ups

## Q1. What happens from git push to production?

A strong fresher-level answer:

> A code push can trigger CI. The pipeline checks out the code, installs dependencies, runs linting/tests/type checks, builds the application and produces a deployable artifact such as a Docker image. After validation, the image can be pushed to a registry and promoted through staging to production, followed by health checks and monitoring.

### Follow-up

**Why not build again for production?**

To avoid deploying an artifact different from the one that was tested.

---

## Q2. Why use Docker Compose?

> Docker Compose lets us define multiple related containers, networks, volumes and configuration declaratively and start the complete application stack together. It is especially useful for local development and testing.

---

## Q3. What is a health check?

> A health check is a mechanism for determining whether a service is functioning or ready to handle traffic. It can prevent unhealthy instances from receiving requests and can help orchestration systems recover failed workloads.

---

## Q4. What is configuration drift?

> Configuration drift occurs when actual infrastructure or system configuration diverges from the intended configuration. Infrastructure as Code and controlled changes help detect and reduce this problem.

---

## Q5. What is rollback?

> Rollback means returning a deployment to a previous known-good version to reduce impact after a problematic release. It is usually a mitigation step; the underlying root cause still needs investigation.

---

# 46. Accenture-Style Traps

Be especially careful with questions that say:

### "Which is MOST appropriate?"

Several options may sound technically possible. Choose the one that directly addresses the stated problem.

### "What happens FIRST?"

Follow the operational sequence.

### "Which statement is TRUE?"

Watch for absolute words:

- always
- never
- guaranteed
- automatically
- only

These are often traps.

### "The deployment succeeded..."

Do not automatically assume:

```text
application healthy
```

### "Container is running..."

Do not automatically assume:

```text
application ready
```

### "Secret was deleted..."

Do not assume:

```text
secret safe
```

### "Terraform plan..."

Do not assume:

```text
infrastructure changed
```

---

# 47. Rapid Revision — Part 2

1. Git tracks source history.
2. Working directory = current edits.
3. Staging = selected next-commit changes.
4. Commit = recorded snapshot.
5. Push = send commits to remote.
6. Branch = independent development line.
7. PR = review/integration mechanism.
8. Merge conflicts require human resolution.
9. Artifact = generated build output.
10. Registry stores deployable artifacts/images.
11. Build once, deploy many reduces artifact differences.
12. Environment configuration varies by deployment environment.
13. Secrets need stronger protection than ordinary configuration.
14. Compose defines multi-container applications.
15. `8080:3000` usually means host 8080 → container 3000.
16. Container localhost refers to that container.
17. Compose service names help service discovery.
18. `EXPOSE` documents a port; publishing maps a host port.
19. Liveness = alive.
20. Readiness = ready for traffic.
21. Deployment completion does not prove application health.
22. Rollback = return to known-good version.
23. Fix-forward = deploy a correction.
24. Database migrations can make rollback complicated.
25. Least privilege limits permissions.
26. CI/CD pipelines are security-sensitive.
27. Secret exposure requires rotation/revocation.
28. Configuration drift = actual ≠ intended configuration.
29. Graceful shutdown reduces dropped work.
30. Always identify the failed layer before fixing it.

---

# 48. Memory Hooks

### Git

**Edit → Stage → Commit → Push**

### CI/CD

**Validate → Package → Promote → Deploy → Verify**

### Docker Compose

**Services → Network → Volumes → Config**

### Health

**Alive? → Ready? → Healthy?**

### Incident

**Detect → Assess → Mitigate → Investigate → Recover → Prevent**

### Security

**Minimum permissions + protected secrets + controlled deployment**

---

# 49. Completion Checklist

- [ ] I understand Git working tree/staging/commit.
- [ ] I understand branches and merge conflicts.
- [ ] I understand PR + CI flow.
- [ ] I understand artifacts.
- [ ] I understand build-once/deploy-many.
- [ ] I understand configuration vs secrets.
- [ ] I understand Docker Compose.
- [ ] I can interpret Docker port mappings.
- [ ] I understand container localhost.
- [ ] I understand liveness vs readiness.
- [ ] I understand rollback.
- [ ] I understand rollback/database-migration risks.
- [ ] I understand CI/CD security.
- [ ] I understand least privilege.
- [ ] I understand configuration drift.
- [ ] I can describe a production incident response.
- [ ] I can explain a complete CI/CD pipeline using my own projects.

---

# 50. What To Do After This File

Do **not** immediately study another huge DevOps document.

At this point, your DevOps preparation should move to:

```text
Theory
  ↓
MCQs
  ↓
Scenario questions
  ↓
Interview explanation
```

If you can answer these 60 questions from Parts 1 and 2 with high accuracy, stop DevOps theory temporarily and move to a higher-return assessment topic.

---

# 51. Suggested Future Topics — Placement ROI

Based on your limited preparation window, this is the recommended sequence after DevOps:

## 🔴 Very High Return

### 1. Networking + Network Security
**Priority: ⭐⭐⭐⭐⭐**

Focus:

- OSI/TCP-IP
- TCP vs UDP
- DNS
- DHCP
- ARP
- NAT
- HTTP/HTTPS
- TLS
- ports
- routing/switching
- VPN
- firewall
- IDS/IPS
- common attacks
- authentication/authorization

You already have dedicated networking material, so revise rather than rebuilding everything.

### 2. Cloud Fundamentals
**Priority: ⭐⭐⭐⭐⭐**

Focus:

- IaaS/PaaS/SaaS
- public/private/hybrid
- virtualization
- containers
- regions/AZs
- object/block/file storage
- IAM
- scalability
- elasticity
- availability
- fault tolerance
- shared responsibility
- serverless

### 3. OOP
**Priority: ⭐⭐⭐⭐⭐**

Focus:

- inheritance
- polymorphism
- abstraction
- encapsulation
- overloading
- overriding
- interface
- abstract class
- composition
- association/aggregation
- static vs instance
- access modifiers

### 4. DBMS
**Priority: ⭐⭐⭐⭐⭐**

Focus:

- keys
- constraints
- normalization
- functional dependency
- ACID
- transactions
- isolation
- deadlock
- indexes
- B/B+ tree
- joins
- anomalies

### 5. Operating Systems
**Priority: ⭐⭐⭐⭐⭐**

Focus:

- process/thread
- PCB
- scheduling
- context switching
- synchronization
- mutex/semaphore
- deadlock
- virtual memory
- paging
- page faults
- TLB
- fragmentation

---

## 🟠 High Return

### 6. SQL
**Priority: ⭐⭐⭐⭐**

Especially:

- joins
- GROUP BY/HAVING
- subqueries
- EXISTS vs IN
- NULL
- window functions
- top-N
- duplicates
- aggregation

### 7. MS Office / Common Applications
**Priority: ⭐⭐⭐⭐**

Do not underestimate this if your specific assessment invitation includes it.

### 8. Programming Fundamentals
**Priority: ⭐⭐⭐⭐**

Pseudocode itself is skipped because you are preparing it separately.

Focus on:

- data types
- operators
- arrays
- strings
- functions
- complexity
- errors
- basic language behavior

### 9. Computer Architecture / CPU / Memory
**Priority: ⭐⭐⭐**

High-yield only:

- CPU
- registers
- cache
- RAM
- virtual memory
- fetch-decode-execute
- cores
- interrupts
- storage hierarchy

---

## 🟡 If Time Remains

### 10. Web/API Fundamentals
### 11. Data Structures Fundamentals
### 12. Linux/System Basics
### 13. Software Engineering
### 14. Compiler Basics

---

# 52. Final Recommendation

After completing DevOps Parts 1 and 2:

**Do not make Part 3 unless your quiz reveals a specific DevOps weakness.**

Your next high-return topic should be:

> **Networking + Network Security**

Then:

> **Cloud → OOP → DBMS → OS → SQL**

This sequence is more aligned with your current assessment preparation than continuing to consume DevOps theory.

---

# 53. Source Notes

The evidence framework follows the distinction between official assessment information, candidate reports, repeated reported patterns and Accenture-style practice.

Accenture official careers/assessment information:
https://www.accenture.com/in-en/careers/explore-careers/area-of-interest/journey-to-accenture

Current third-party assessment pattern:
https://prepinsta.com/accenture/technical-assessment/

Accenture-oriented interview preparation:
https://www.placementpreparation.io/accenture/interview-questions/

**Evidence warning:** Public candidate reports describe different hiring tracks and assessment versions. Questions in this file are original practice questions or carefully generalized patterns. They are **not claimed to be official Accenture PYQs**.
