# 01_DevOps_Fundamentals_1.md

# Accenture Placement Preparation — DevOps Fundamentals

## Objective

Prepare DevOps fundamentals for:

1. Accenture technical assessment MCQs
2. Accenture technical interview
3. Fresher-level DevOps/backend interview follow-ups

This file deliberately focuses on **high-ROI fundamentals**, not deep Kubernetes, advanced SRE, service mesh, or advanced infrastructure engineering.

---

# 1. Priority

## Overall priority: ⭐⭐⭐⭐ HIGH

DevOps is not the safest topic to treat as the single core of the Accenture assessment because current public reports show that assessment structure varies by hiring track. However, DevOps/cloud concepts are repeatedly present in Accenture preparation and interview material, and they are especially relevant to your Backend/DevOps career target.

Accenture officially states that technical assessments are designed around applying technical knowledge to job-relevant, real-world scenarios. citeturn0search6

A 2026 third-party Accenture assessment report specifically lists **Network Security and Cloud** as a technical-assessment section; DevOps is not separately guaranteed as a section there. citeturn0search2

Recent Accenture-oriented interview sources repeatedly cover Jenkins, Docker, CI/CD, Kubernetes and cloud concepts. citeturn0search1turn0search0

### Important distinction

**Assessment priority:** Medium–High  
**Interview priority:** High  
**Career relevance for you:** Very High

Do not spend more time on DevOps than Networking/Security/Cloud while preparing for the assessment.

---

# 2. What Is DevOps?

## One-line definition

**DevOps is a set of practices, culture and automation approaches that bring development and operations together to deliver software faster and more reliably.**

It is not:

- just Docker
- just Jenkins
- just Kubernetes
- just cloud
- just automation

The central idea is:

```text
Code
  ↓
Build
  ↓
Test
  ↓
Package
  ↓
Deploy
  ↓
Operate
  ↓
Monitor
  ↓
Feedback
  ↓
Code
```

---

# 3. Why DevOps Exists

Traditional software delivery can have a problem:

```text
Developer
    ↓
"Works on my machine"
    ↓
Operations
    ↓
Deployment problem
    ↓
Debugging
    ↓
Delay
```

DevOps tries to reduce this friction using:

- automation
- repeatable environments
- CI/CD
- version control
- infrastructure as code
- containers
- monitoring
- rapid feedback
- collaboration

---

# 4. DevOps Lifecycle

A useful simplified lifecycle is:

```text
PLAN
 ↓
CODE
 ↓
BUILD
 ↓
TEST
 ↓
RELEASE
 ↓
DEPLOY
 ↓
OPERATE
 ↓
MONITOR
 ↺
```

### Important

This is a conceptual lifecycle, not one mandatory universal sequence.

Different organizations implement DevOps differently.

---

# 5. Continuous Integration (CI)

## Definition

Continuous Integration means developers frequently integrate code changes into a shared repository and automated builds/tests validate those changes.

Typical flow:

```text
Developer pushes code
        ↓
CI trigger
        ↓
Build
        ↓
Automated tests
        ↓
Quality checks
        ↓
Feedback
```

### Why?

To discover integration problems early.

### Example

You push a TypeScript backend change to GitHub.

GitHub Actions:

```text
checkout
→ npm ci
→ typecheck
→ test
→ build
```

If tests fail, the team gets feedback immediately.

---

# 6. Continuous Delivery

Continuous Delivery means the software is kept in a releasable state through an automated delivery process.

Typical:

```text
Commit
 ↓
Build
 ↓
Test
 ↓
Package
 ↓
Ready for deployment
```

Deployment to production may still require a manual approval.

---

# 7. Continuous Deployment

Continuous Deployment automatically deploys validated changes to production.

```text
Commit
 ↓
Build
 ↓
Test
 ↓
Deploy
 ↓
Production
```

No manual production approval is required for every change.

---

# 8. CI vs Continuous Delivery vs Continuous Deployment

| Concept | Main idea |
|---|---|
| CI | Frequently integrate and validate code |
| Continuous Delivery | Keep software ready to release |
| Continuous Deployment | Automatically release validated changes to production |

### Memory hook

**CI = Integrate**

**Delivery = Ready**

**Deployment = Automatically release**

---

# 9. CI/CD Pipeline

A basic pipeline:

```text
Git Push
   ↓
Build
   ↓
Unit Tests
   ↓
Static Checks
   ↓
Package
   ↓
Container Image
   ↓
Registry
   ↓
Deploy
   ↓
Monitor
```

A pipeline should provide:

- repeatability
- automation
- traceability
- fast feedback
- controlled deployment

---

# 10. Pipeline Failure

Suppose:

```text
Build → PASS
Test → PASS
Docker Build → FAIL
```

Do not call this a deployment failure.

The deployment stage was never reached.

### Mental model

Find the **first failed stage**.

This is a useful troubleshooting principle.

---

# 11. Jenkins

## Definition

Jenkins is an automation server commonly used to implement CI/CD pipelines.

It can:

- trigger builds
- run tests
- execute scripts
- build Docker images
- deploy applications
- integrate with source-control systems

Example:

```text
GitHub
   ↓
Jenkins
   ↓
npm test
   ↓
Docker build
   ↓
Docker push
   ↓
Deploy
```

---

# 12. GitHub Actions

GitHub Actions is a CI/CD automation platform integrated into GitHub.

A workflow can run when:

- code is pushed
- a pull request is opened
- a schedule triggers it
- a manual workflow is started

Example:

```yaml
name: CI

on:
  push:

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm test
```

### Jenkins vs GitHub Actions

| Jenkins | GitHub Actions |
|---|---|
| Automation server | GitHub-native automation |
| Highly extensible | Strong GitHub integration |
| Can be self-hosted | Hosted/self-hosted runners |
| Requires more administration in many setups | Usually simpler for GitHub projects |

Neither is universally "better."

---

# 13. Docker

## Definition

Docker packages an application and its dependencies into a container image that can run consistently across environments.

Example:

```text
Application
+
Dependencies
+
Runtime
        ↓
Docker Image
        ↓
Container
```

---

# 14. Image vs Container

This is a mandatory distinction.

### Image

A packaged, immutable template used to create containers.

### Container

A running instance of an image.

Analogy:

```text
Class → Object

Image → Container
```

Not perfectly identical, but useful for memory.

---

# 15. Dockerfile

A Dockerfile describes how to build an image.

Example:

```dockerfile
FROM node:22

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Important instructions:

| Instruction | Purpose |
|---|---|
| FROM | Base image |
| WORKDIR | Working directory |
| COPY | Copy files |
| RUN | Execute build-time command |
| EXPOSE | Documents intended port |
| CMD | Default command |
| ENTRYPOINT | Defines executable entrypoint |

---

# 16. Docker Image Layers

Docker images are built in layers.

A change to an earlier layer can invalidate subsequent cache layers.

Therefore Dockerfile ordering matters.

Good pattern:

```dockerfile
COPY package*.json ./
RUN npm ci

COPY . .
```

This can preserve dependency-install cache when application source changes but dependency files do not.

---

# 17. Multi-Stage Builds

Multi-stage builds use multiple build stages to create a smaller final image.

Concept:

```text
Build Stage
    ↓
Compile
    ↓
Artifacts
    ↓
Runtime Stage
```

The final image does not need all build tools.

Benefits:

- smaller image
- reduced attack surface
- cleaner runtime
- less unnecessary tooling

---

# 18. Container vs Virtual Machine

| Container | VM |
|---|---|
| Shares host kernel | Has guest OS/kernel |
| Usually lightweight | Heavier |
| Starts quickly | Usually slower |
| Lower overhead | Higher overhead |
| Process isolation | Full OS-level virtualization |

Concept:

```text
VM

Hardware
 ↓
Hypervisor
 ↓
Guest OS
 ↓
App
```

Container:

```text
Hardware
 ↓
Host OS
 ↓
Container Runtime
 ↓
Containers
```

### Trap

Containers are **not** simply tiny VMs.

---

# 19. Docker Registry

A container registry stores container images.

Examples:

- Docker Hub
- Amazon ECR
- GitHub Container Registry

Flow:

```text
Docker Build
     ↓
Image
     ↓
Registry
     ↓
Server pulls image
     ↓
Container starts
```

---

# 20. Docker Volume

Containers are often treated as ephemeral.

If important data exists only inside a container's writable layer, deleting the container can lose that data.

Volumes provide persistent storage outside the container lifecycle.

```text
Container
    ↓
Volume
    ↓
Persistent data
```

Typical use:

- database data
- application uploads
- persistent files

---

# 21. Docker Networking

Containers may communicate through Docker networks.

For example:

```text
frontend
   ↓
backend
   ↓
database
```

A user-defined Docker network can allow services to communicate by service/container name.

Do not expose the database publicly merely because another container needs access to it.

---

# 22. Kubernetes

## Definition

Kubernetes is a container orchestration platform.

It helps manage containerized workloads across machines.

It can provide:

- scheduling
- scaling
- service discovery
- rolling deployments
- self-healing
- desired-state management

---

# 23. Why Kubernetes Exists

Running one container manually is easy:

```text
docker run app
```

Now imagine:

```text
50 application instances
10 machines
rolling updates
failed instances
traffic distribution
scaling
service discovery
```

Manual management becomes painful.

Kubernetes automates much of this operational work.

---

# 24. Pod

A Pod is the smallest deployable unit in Kubernetes.

A Pod can contain one or more containers sharing network and storage context.

Most common simple deployment:

```text
Pod
 └── Application Container
```

Do not say:

> Kubernetes runs containers directly.

More precise:

> Kubernetes schedules and manages Pods, which contain one or more containers.

---

# 25. Deployment

A Deployment manages replicated application Pods and supports controlled updates.

Concept:

```text
Deployment
    ↓
ReplicaSet
    ↓
Pods
```

Example:

```text
Deployment: backend
replicas: 3

Pod 1
Pod 2
Pod 3
```

---

# 26. Kubernetes Service

Pods can be replaced, so their individual IP addresses are not a stable application endpoint.

A Service provides a stable network abstraction for accessing Pods.

```text
Client
  ↓
Service
  ↓
Pod
Pod
Pod
```

---

# 27. Ingress

Ingress provides HTTP/HTTPS routing into Kubernetes services.

Example:

```text
api.example.com
       ↓
    Ingress
       ↓
 backend-service
       ↓
      Pods
```

Ingress can route based on:

- host
- path

---

# 28. Kubernetes Scaling

### Horizontal scaling

Increase the number of Pod replicas.

```text
3 Pods → 6 Pods
```

### Vertical scaling

Increase resources assigned to workloads.

```text
500Mi RAM → 1Gi RAM
```

### Horizontal Pod Autoscaler

HPA can automatically adjust Pod replica count based on configured metrics.

---

# 29. Kubernetes Self-Healing

Suppose:

```text
Pod 1
Pod 2
Pod 3
```

Pod 2 crashes.

A controller can create another Pod to restore the desired state.

```text
Desired = 3
Actual = 2
       ↓
Kubernetes creates another Pod
       ↓
Actual = 3
```

---

# 30. Terraform / Infrastructure as Code

## Definition

Infrastructure as Code (IaC) means infrastructure is defined and managed through machine-readable configuration rather than manually creating every resource.

Terraform is a popular IaC tool.

Instead of:

```text
AWS Console
→ click EC2
→ click security group
→ click subnet
→ click ...
```

you define infrastructure as code.

Benefits:

- repeatability
- version control
- automation
- reviewability
- consistency

---

# 31. Terraform Plan vs Apply

### `terraform plan`

Shows what Terraform intends to change.

Think:

> preview

### `terraform apply`

Applies the proposed infrastructure changes.

Think:

> execute

### Trap

`terraform plan` does not normally create the infrastructure.

---

# 32. Terraform State

Terraform maintains state describing resources it manages.

Conceptually:

```text
Configuration
      +
Terraform State
      +
Real Infrastructure
      ↓
Terraform determines required changes
```

State is important for tracking resource identity and differences.

Protect state carefully because it may contain sensitive information depending on configuration/provider.

---

# 33. Monitoring vs Logging

### Monitoring

Measures system health and behavior through metrics/alerts.

Examples:

- CPU usage
- memory usage
- request rate
- latency
- error rate

### Logging

Records events/messages.

Examples:

```text
User login failed
Database connection timeout
Request received
```

### Memory hook

**Metrics tell you WHAT is happening.**

**Logs help tell you WHAT HAPPENED.**

---

# 34. Prometheus

Prometheus is a monitoring/metrics system commonly used for collecting and querying time-series metrics.

Typical:

```text
Application
    ↓
Metrics endpoint
    ↓
Prometheus
    ↓
Queries/Alerts
```

---

# 35. Grafana

Grafana is commonly used to visualize metrics and other observability data through dashboards.

Typical:

```text
Prometheus
    ↓
Grafana
    ↓
Dashboard
```

### Trap

Prometheus and Grafana are not the same thing.

---

# 36. Observability

Three commonly discussed signals:

```text
Metrics
Logs
Traces
```

### Metrics

Numerical measurements over time.

### Logs

Discrete event records.

### Traces

Track a request as it travels across services.

Example:

```text
Client
 ↓
API Gateway
 ↓
Backend
 ↓
Redis
 ↓
PostgreSQL
```

A distributed trace can help identify where latency occurred.

---

# 37. Deployment Strategies

## Rolling deployment

Gradually replace old instances with new ones.

```text
Old Old Old
 ↓
New Old Old
 ↓
New New Old
 ↓
New New New
```

Advantages:

- gradual replacement
- usually no need for a complete duplicate environment

---

## Blue-Green deployment

Two environments:

```text
Blue = current
Green = new
```

Traffic initially goes to Blue.

After validation:

```text
Traffic
   ↓
Green
```

Rollback can switch traffic back to Blue if it is still available.

---

## Canary deployment

Release to a small percentage of users first.

```text
95% → old
5%  → new
```

If healthy:

```text
80% → old
20% → new
```

Eventually:

```text
0% → old
100% → new
```

### Comparison

| Strategy | Main idea |
|---|---|
| Rolling | Gradually replace instances |
| Blue-Green | Switch traffic between two environments |
| Canary | Gradually expose a subset of users |

---

# 38. Secrets Management

Never put secrets directly into source code.

Bad:

```javascript
const password = "myProductionPassword";
```

Better approaches include:

- environment variables
- CI/CD secret stores
- cloud secret managers
- Kubernetes Secrets with appropriate security controls
- IAM roles where applicable

### Important

A secret stored in an environment variable is not automatically secure.

You still need:

- access control
- rotation
- limited permissions
- careful logging
- secure storage

---

# 39. DevSecOps

DevSecOps means integrating security into the development and operations lifecycle instead of treating security as a final step.

Example pipeline:

```text
Code
 ↓
Build
 ↓
Unit Tests
 ↓
Dependency Scan
 ↓
Container Scan
 ↓
IaC Security Scan
 ↓
Deploy
 ↓
Monitor
```

---

# 40. Infrastructure as Code vs Configuration Management

Simplified distinction:

### IaC

Defines infrastructure resources.

Example:

```text
VPC
EC2
Load Balancer
Database
```

### Configuration management

Manages software/system configuration on machines.

Example:

```text
Install Nginx
Create user
Configure service
```

Tools can overlap in real-world ecosystems, so don't treat the boundary as absolute.

---

# 41. High-ROI DevOps Traps

1. Image ≠ container
2. Container ≠ VM
3. CI ≠ CD
4. Delivery ≠ Deployment
5. Docker ≠ Kubernetes
6. Jenkins ≠ Docker
7. Prometheus ≠ Grafana
8. Monitoring ≠ logging
9. Metrics ≠ logs
10. `terraform plan` ≠ `terraform apply`
11. Pod ≠ container
12. Service ≠ Pod
13. Deployment ≠ Service
14. Scaling out ≠ scaling up
15. Secrets should not be hard-coded
16. Kubernetes is not a replacement for Docker in every architecture
17. A running Pod does not guarantee a healthy application
18. A successful build does not guarantee a successful deployment
19. A successful deployment does not guarantee a healthy production service
20. Automation without observability is dangerous

---

# 42. Accenture-Style Question Patterns

Current Accenture-oriented sources repeatedly emphasize questions around:

- Jenkins/Docker
- CI/CD
- Kubernetes
- cloud
- containerization
- deployment
- troubleshooting

These are reported practice/interview patterns, not guaranteed official PYQs. citeturn0search1turn0search0

The assessment itself should not be assumed to have a dedicated DevOps section in every track. One current 2026 pattern instead groups the technical section as Common Applications/MS Office, Pseudocode, and Network Security/Cloud. citeturn0search2

---

# 43. Practice Questions — Easy

## Q1

Which practice is most directly associated with Continuous Integration?

A. Manually deploying once per month  
B. Frequently integrating code and automatically validating changes  
C. Buying additional servers  
D. Writing documentation only

**Answer: B**

**Trap:** CI is about frequent integration + automated validation.

---

## Q2

A Docker image is best described as:

A. A running process  
B. A packaged template used to create containers  
C. A virtual machine  
D. A Kubernetes cluster

**Answer: B**

---

## Q3

A running instance of a Docker image is a:

A. Registry  
B. Container  
C. Dockerfile  
D. Pod

**Answer: B**

---

## Q4

Which tool is primarily associated with infrastructure as code?

A. Terraform  
B. Grafana  
C. Prometheus  
D. Docker Hub

**Answer: A**

---

## Q5

Which tool is primarily associated with metrics collection?

A. Grafana  
B. Prometheus  
C. Git  
D. Jenkins

**Answer: B**

---

## Q6

Which tool is primarily used for dashboards and visualization?

A. Grafana  
B. Docker  
C. Terraform  
D. Git

**Answer: A**

---

## Q7

Which Kubernetes object provides a stable network abstraction for Pods?

A. Service  
B. Deployment  
C. ConfigMap  
D. Namespace

**Answer: A**

---

## Q8

Which command is primarily used to preview Terraform changes?

A. terraform destroy  
B. terraform apply  
C. terraform plan  
D. terraform init

**Answer: C**

---

## Q9

Which deployment strategy exposes a new version to a small percentage of users first?

A. Blue-Green  
B. Canary  
C. Big Bang  
D. Rebuild

**Answer: B**

---

## Q10

Which should generally NOT be committed directly to source control?

A. README  
B. Dockerfile  
C. API secret  
D. Unit test

**Answer: C**

---

# 44. Practice Questions — Medium

## Q11

A developer pushes code. The pipeline builds the application, runs tests, and produces an artifact, but production deployment requires manual approval.

What does this most closely represent?

A. Continuous Integration only  
B. Continuous Delivery  
C. Continuous Deployment  
D. Manual deployment only

**Answer: B**

**Trap:** Continuous Deployment would automatically deploy to production.

---

## Q12

A Docker container is deleted and important application data disappears. What is the most likely architectural mistake?

A. Too many Docker networks  
B. Persistent data was kept only in the container's writable layer  
C. The Docker image was too small  
D. Kubernetes was not installed

**Answer: B**

---

## Q13

A Kubernetes Deployment specifies three replicas, but only two Pods are currently running because one Pod crashed. What should Kubernetes generally attempt to do?

A. Permanently accept two replicas  
B. Restore the desired replica count  
C. Delete the Deployment  
D. Stop all Pods

**Answer: B**

---

## Q14

A team wants to visualize CPU usage collected by Prometheus.

Which tool is most appropriate?

A. Grafana  
B. Terraform  
C. Dockerfile  
D. Jenkins

**Answer: A**

---

## Q15

A company wants to test a new release on 5% of traffic before increasing exposure.

Which strategy fits best?

A. Canary  
B. Blue-Green  
C. Rolling only  
D. Reinstall

**Answer: A**

---

## Q16

A Dockerfile installs dependencies after copying the entire application source. Every source-code change causes dependencies to be installed again.

What improvement is likely to help Docker layer caching?

A. Remove WORKDIR  
B. Copy dependency manifests first and install dependencies before copying source  
C. Remove the base image  
D. Replace Docker with Terraform

**Answer: B**

---

## Q17

A pipeline's tests fail.

What is the most appropriate first action?

A. Deploy anyway  
B. Ignore the failure  
C. Investigate the failed test before progressing  
D. Delete the repository

**Answer: C**

---

## Q18

Which statement is most accurate?

A. Kubernetes is a container image registry  
B. Docker and Kubernetes perform exactly the same function  
C. Kubernetes orchestrates containerized workloads  
D. Terraform runs application containers

**Answer: C**

---

## Q19

A developer wants infrastructure changes reviewed through pull requests and version control.

Which approach is most appropriate?

A. Manual console-only changes  
B. Infrastructure as Code  
C. Editing production directly  
D. Removing state

**Answer: B**

---

## Q20

A production application has high error rates. Which combination gives complementary information?

A. Metrics + logs + traces  
B. README + Dockerfile  
C. Git + HTML  
D. Terraform + Markdown only

**Answer: A**

---

# 45. Practice Questions — Tricky

## Q21

A Kubernetes Pod is in the `Running` phase, but users receive HTTP 503 responses.

Which conclusion is safest?

A. The application is definitely healthy  
B. Kubernetes is definitely broken  
C. Running does not guarantee that the application is ready to serve traffic  
D. The container image must be missing

**Answer: C**

**Key concept:** Pod phase and application readiness are different concepts.

---

## Q22

A company uses Blue-Green deployment. The new environment fails validation immediately before traffic switching.

What is a major advantage of the strategy?

A. It guarantees zero bugs  
B. Existing production environment can remain serving traffic while the new environment is validated  
C. It requires no infrastructure  
D. It eliminates monitoring

**Answer: B**

---

## Q23

A CI pipeline successfully builds a Docker image, but deployment fails because the target environment cannot pull the image.

Where should you investigate first?

A. Source-code syntax only  
B. Registry access, image name/tag, credentials and network access  
C. CPU instruction set  
D. Git commit message

**Answer: B**

---

## Q24

A team stores an AWS access key in a public Git repository and later deletes the file.

What should they assume?

A. The secret is automatically safe  
B. The Git repository can never expose it again  
C. The credential should be treated as compromised and rotated/revoked  
D. Only the filename matters

**Answer: C**

---

## Q25

A Terraform plan shows an infrastructure change the team did not expect.

What is the best immediate approach?

A. Apply it immediately  
B. Ignore it  
C. Investigate configuration, state and real infrastructure differences before applying  
D. Delete the state blindly

**Answer: C**

---

## Q26

A container uses 2 GB of build dependencies but the production application only needs the compiled artifact and runtime.

Which technique can reduce the final image?

A. Multi-stage build  
B. Add more build tools  
C. Run Terraform  
D. Increase Kubernetes replicas

**Answer: A**

---

## Q27

A deployment is successful, but application latency immediately increases.

Which statement is correct?

A. Deployment success proves the application is healthy  
B. Deployment success and application health are separate concerns  
C. Monitoring is unnecessary after deployment  
D. Kubernetes automatically fixes all application bugs

**Answer: B**

---

## Q28

A developer says:

> "We use Docker, therefore we don't need Kubernetes."

What is the correct response?

A. Always true  
B. Always false  
C. Docker containers can be run without Kubernetes; Kubernetes becomes useful when orchestration needs justify it  
D. Docker cannot run without Kubernetes

**Answer: C**

---

## Q29

A monitoring dashboard shows CPU at 95%. A developer asks, "What exact error caused this?"

Why might metrics alone be insufficient?

A. Metrics are never useful  
B. Logs/traces may contain event/request details explaining the cause  
C. CPU cannot be measured  
D. Grafana deletes logs

**Answer: B**

---

## Q30

A company wants to release version 2 while keeping version 1 available for immediate traffic rollback.

Which strategy naturally fits this requirement?

A. Blue-Green  
B. Canary only  
C. Delete-and-reinstall  
D. Manual source editing

**Answer: A**

---

# 46. Scenario Questions

## Scenario 1 — Pipeline Failure

Pipeline:

```text
Git Push
 ↓
Build       PASS
 ↓
Unit Tests  PASS
 ↓
Docker Build FAIL
 ↓
Deploy      NOT RUN
```

### Questions

1. Is this a deployment failure?
2. What should you inspect first?
3. What should not be your first action?

### Answer

1. No. The deployment stage was not reached.
2. Docker build logs, Dockerfile, base image, dependencies and build context.
3. Do not start debugging Kubernetes or production traffic first.

---

# 47. Scenario 2 — Kubernetes 503

Users receive:

```text
HTTP 503
```

Pods appear:

```text
Running
```

### Investigation order

```text
Application logs
      ↓
Readiness
      ↓
Service selector
      ↓
Endpoints/EndpointSlices
      ↓
Target port
      ↓
Ingress/load balancer
      ↓
Network policies
```

### Key lesson

**Running ≠ Ready ≠ Serving successfully**

---

# 48. Scenario 3 — Secret Exposure

A developer accidentally commits:

```text
AWS_SECRET_ACCESS_KEY=...
```

### Correct response

1. Revoke/rotate the credential.
2. Determine exposure.
3. Remove the secret from the active source.
4. Check repository history where relevant.
5. Audit usage.
6. Move secret management to an appropriate secure mechanism.
7. Prevent recurrence through scanning/pipeline controls.

### Trap

Deleting the file from the latest commit does not mean the credential should be trusted again.

---

# 49. Scenario 4 — Production Deployment Failure

New deployment causes errors.

A strong high-level incident response:

```text
Detect
 ↓
Assess impact
 ↓
Stop/limit further rollout
 ↓
Inspect recent changes
 ↓
Check metrics/logs/traces
 ↓
Mitigate
 ↓
Rollback or fix
 ↓
Verify recovery
 ↓
Document root cause
 ↓
Prevent recurrence
```

Do not blindly restart everything.

---

# 50. Interview Follow-Ups

## Q1. Explain CI/CD.

**Fresher answer:**

CI/CD is a set of practices and automation used to integrate, validate, package and deliver software reliably. CI focuses on frequent integration and automated validation, while continuous delivery keeps software ready for release and continuous deployment automatically releases validated changes.

### Follow-up

**Why automate testing?**

To detect regressions and integration problems earlier and provide repeatable feedback.

---

## Q2. Docker vs VM?

**Fresher answer:**

Containers generally share the host OS kernel and package applications with their dependencies, making them lightweight and fast to start. Virtual machines virtualize a complete guest operating system, so they usually have more overhead but provide stronger OS-level isolation.

### Follow-up

**Why use containers?**

For consistent packaging, portability, isolation and efficient deployment.

---

## Q3. Why Kubernetes?

**Fresher answer:**

Kubernetes manages containerized workloads across infrastructure. It provides capabilities such as scheduling, service discovery, scaling, rolling updates and maintaining the desired number of application instances.

### Follow-up

**What is a Pod?**

A Pod is Kubernetes' smallest deployable unit and contains one or more containers that share networking and storage context.

---

## Q4. What is Infrastructure as Code?

**Fresher answer:**

Infrastructure as Code defines infrastructure through machine-readable configuration that can be version-controlled, reviewed and applied consistently. Terraform is a common example.

### Follow-up

**Plan vs Apply?**

Plan previews proposed changes; apply executes them.

---

## Q5. Monitoring vs logging?

**Fresher answer:**

Monitoring commonly focuses on measurable system behavior such as latency, traffic, errors and resource usage, while logging records events and messages that can provide detailed context during debugging.

---

# 51. Your Existing Stack — Interview Risk

You already use:

- Docker
- Jenkins
- GitHub Actions
- Terraform
- Prometheus
- Grafana
- AWS
- EC2
- Load Balancer
- CloudWatch

Therefore, for interviews, **memorizing definitions is not enough**.

You should be able to explain:

```text
Git push
 ↓
CI pipeline
 ↓
Build/test
 ↓
Docker image
 ↓
Registry
 ↓
EC2/Kubernetes
 ↓
Load Balancer
 ↓
Prometheus/Grafana
 ↓
Logs/alerts
```

And explain:

- why each component exists
- what happens when it fails
- how you would troubleshoot it

An interviewer can easily expose fake DevOps knowledge with two follow-ups.

---

# 52. High-ROI Interview Questions You Must Be Able To Answer

1. Explain your CI/CD pipeline end to end.
2. Why Docker?
3. Image vs container?
4. Docker vs VM?
5. What happens when a Docker build fails?
6. How does Docker networking work?
7. Why use a registry?
8. What is Kubernetes?
9. Pod vs container?
10. Deployment vs Service?
11. What is Ingress?
12. How does Kubernetes scale?
13. What is a rolling deployment?
14. Blue-Green vs Canary?
15. What is Terraform?
16. Plan vs Apply?
17. What is Terraform state?
18. What is CI vs CD?
19. Monitoring vs logging?
20. Prometheus vs Grafana?
21. How do you manage secrets?
22. How would you troubleshoot a failed deployment?
23. How would you troubleshoot a Kubernetes Pod?
24. How do you roll back a bad deployment?
25. How do you secure a CI/CD pipeline?

---

# 53. Rapid Revision — Top 30

1. DevOps = development + operations + automation + collaboration.
2. CI = frequent integration and automated validation.
3. Continuous Delivery = software kept ready for release.
4. Continuous Deployment = automatic production release.
5. Jenkins = automation/CI/CD server.
6. GitHub Actions = GitHub-native automation.
7. Docker image = packaged template.
8. Container = running instance of an image.
9. Dockerfile = image build instructions.
10. Registry = stores images.
11. Volume = persistent container data.
12. Containers are not VMs.
13. Kubernetes = container orchestration.
14. Pod = smallest Kubernetes deployable unit.
15. Deployment manages replicated Pods.
16. Service provides stable networking to Pods.
17. Ingress handles HTTP/HTTPS routing into services.
18. Horizontal scaling = more instances.
19. Vertical scaling = more resources per instance.
20. Terraform = IaC.
21. Plan = preview.
22. Apply = execute.
23. Terraform state tracks managed infrastructure.
24. Monitoring uses metrics/alerts.
25. Logging records events/messages.
26. Prometheus = metrics.
27. Grafana = visualization.
28. Rolling = gradually replace.
29. Blue-Green = switch between environments.
30. Canary = gradually expose users to new version.

---

# 54. Memory Hooks

### CI/CD

**Integrate → Validate → Release**

### Docker

**Image → Container**

### Kubernetes

**Deployment → Pods → Service → Ingress**

### Terraform

**Code → Plan → Apply → State**

### Observability

**Metrics → Logs → Traces**

### Deployment strategies

**Rolling = replace**

**Blue-Green = switch**

**Canary = sample**

---

# 55. What NOT To Study Yet

Given your limited preparation time, skip these unless the assessment/interview specifically demands them:

- service mesh internals
- Istio deep dive
- Kubernetes CRDs
- advanced operators
- advanced Helm internals
- Kubernetes scheduler internals
- etcd internals
- advanced Terraform provider development
- advanced GitOps architecture
- complex multi-cluster Kubernetes
- advanced SRE mathematics
- deep distributed tracing implementation

These are poor short-term placement ROI compared with Networking, Security, Cloud, OOP, DBMS and OS.

---

# 56. Completion Checklist

- [ ] I can explain DevOps in one minute.
- [ ] I know CI vs Continuous Delivery vs Continuous Deployment.
- [ ] I can explain a CI/CD pipeline.
- [ ] I know Jenkins basics.
- [ ] I know GitHub Actions basics.
- [ ] I understand image vs container.
- [ ] I understand Dockerfile basics.
- [ ] I understand image layers.
- [ ] I understand multi-stage builds.
- [ ] I know containers vs VMs.
- [ ] I understand registries and volumes.
- [ ] I understand Kubernetes purpose.
- [ ] I know Pod, Deployment, Service and Ingress.
- [ ] I understand horizontal vs vertical scaling.
- [ ] I understand rolling, blue-green and canary deployment.
- [ ] I understand Terraform plan/apply/state.
- [ ] I understand monitoring vs logging.
- [ ] I know Prometheus vs Grafana.
- [ ] I understand basic secrets management.
- [ ] I can troubleshoot a simple pipeline failure.
- [ ] I can explain my own DevOps projects without bluffing.

---

# 57. Source / Evidence Notes

## Official

**[VERIFIED OFFICIAL] Accenture — Preparing for the Technical Assessment**

Accenture states that technical assessments evaluate how candidates apply technical knowledge to real-world scenarios and assess problem-solving, logical reasoning and applied technical knowledge.

Source:
https://www.accenture.com/in-en/careers/explore-careers/area-of-interest/journey-to-accenture

## Current assessment pattern

**[REPORTED PATTERN — 2026] PrepInsta**

A February 2026 Accenture technical-assessment page reports a pattern containing:

- Common Applications and MS Office
- Pseudo Code
- Network Security and Cloud

It reports 45 questions in 45 minutes for that pattern.

This is **not an official guarantee** for every Accenture role or college drive.

Source:
https://prepinsta.com/accenture/technical-assessment/

## Accenture-oriented interview preparation

**[THIRD-PARTY INTERVIEW PATTERN] Placement Preparation**

Reports Accenture-oriented questions covering Jenkins, Docker, cloud, Kubernetes, CI/CD, serverless and cloud-native applications.

Source:
https://www.placementpreparation.io/accenture/interview-questions/

## Recent DevOps-oriented Accenture reports

**[CANDIDATE/COMMUNITY-REPORTED]**

Recent public Accenture DevOps interview reports include CI/CD pipeline design, Docker, Kubernetes, Terraform, Git branching, pipeline troubleshooting and monitoring.

These should be treated as interview-pattern evidence, not guaranteed assessment questions.

---

# Final Assessment

### Placement value: ⭐⭐⭐⭐
### Interview value: ⭐⭐⭐⭐⭐
### Career value for you: ⭐⭐⭐⭐⭐
### Time required: Medium
### Difficulty: Medium
### Short-term ROI: High

**Do not memorize this file line-by-line.**

You need to be able to recognize the concept inside a scenario.

After studying it, use:

> **"Quiz me on DevOps."**

The quiz should be one question at a time and should progressively move from direct MCQs → scenario questions → interview follow-ups.
