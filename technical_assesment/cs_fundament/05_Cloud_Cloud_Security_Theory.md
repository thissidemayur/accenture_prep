# Accenture Cloud + Cloud Security Theory
## Placement-Focused Revision Notes

> **Purpose:** High-return theory for Accenture-style Technical Assessment preparation.
>
> **Strategy:** Learn the concept, memorize the trigger words, then practice situation-based questions.

---

# 1. Cloud Computing — Core Idea

## What is Cloud Computing?

Cloud computing means obtaining computing resources such as:

- Compute
- Storage
- Databases
- Networking
- Security
- Applications

over a network, usually on-demand, instead of owning and maintaining all infrastructure yourself.

### Key characteristics

Remember:

**On-demand + scalable + pay-as-you-go + resource sharing**

### One-word refresh

| Question | Answer |
|---|---|
| Computing resources available on demand? | **Cloud** |
| Ability to increase resources when demand increases? | **Scalability** |
| Ability to automatically adjust resources with demand? | **Elasticity** |
| Paying according to consumption? | **Metering** |
| Sharing provider infrastructure among customers? | **Multitenancy** |
| Accessing cloud resources through a network? | **Remote access** |

## Scalability vs Elasticity

**Scalability** = ability to handle increased workload by adding resources.

**Elasticity** = resources can dynamically increase **and decrease** according to demand.

### Situation

> E-commerce traffic increases 10× during a sale and servers automatically increase, then decrease after the sale.

**Answer → Elasticity**

---

# 2. IaaS, PaaS, SaaS

This is **high priority**.

Think:

> **IaaS → You manage more**
>
> **PaaS → Provider manages more**
>
> **SaaS → Provider manages almost everything**

## IaaS — Infrastructure as a Service

You receive infrastructure such as:

- Virtual machines
- Storage
- Networking

You generally manage:

- OS
- Applications
- Runtime
- Configuration

**Example:** AWS EC2, Azure Virtual Machines.

## PaaS — Platform as a Service

Provider manages much of the infrastructure and platform.

You primarily focus on:

- Application
- Application code
- Data/configuration

**Examples:** Heroku, Google App Engine, Azure App Service.

## SaaS — Software as a Service

You simply use the application.

**Examples:**

- Gmail
- Microsoft 365
- Salesforce

### Situation recognition

> "The company wants complete control over the operating system."

→ **IaaS**

> "Developers want to deploy code without managing servers."

→ **PaaS**

> "Employees simply need to use an online email application."

→ **SaaS**

### One-word refresh

| Question | Answer |
|---|---|
| Virtual machines + networking? | **IaaS** |
| Managed application platform? | **PaaS** |
| Complete software application? | **SaaS** |
| Maximum infrastructure control? | **IaaS** |
| Minimum infrastructure management? | **SaaS** |

---

# 3. Public, Private and Hybrid Cloud

## Public Cloud

Infrastructure is provided by a cloud provider and shared across customers.

Examples:

- AWS
- Azure
- Google Cloud

## Private Cloud

Cloud infrastructure dedicated to a single organization.

Useful when organizations need greater control or have specific regulatory/security requirements.

## Hybrid Cloud

Combination of:

**Private/on-premises + Public Cloud**

### Situation

> Company keeps sensitive databases on-premises but runs scalable web servers in AWS.

→ **Hybrid Cloud**

### One-word refresh

| Situation | Answer |
|---|---|
| Provider infrastructure used by many customers | **Public** |
| Dedicated cloud for one organization | **Private** |
| On-premises + public cloud | **Hybrid** |

---

# 4. Cloud Regions and Availability Zones

## Region

A **geographical location** containing multiple isolated infrastructure locations.

## Availability Zone

An isolated location within a cloud region.

A region normally contains multiple AZs.

## Why multiple AZs?

For:

- High availability
- Fault isolation
- Resilience

### Situation

> Your application should continue working even if one availability zone fails.

→ Deploy across **multiple Availability Zones**

### One-word refresh

| Question | Answer |
|---|---|
| Geographic cloud location | **Region** |
| Isolated location inside a region | **AZ** |
| Multiple AZs improve | **Availability** |
| Isolation from infrastructure failure | **Fault-isolation** |

---

# 5. Virtual Private Cloud — VPC

A **VPC** is a logically isolated virtual network inside a cloud environment.

Think:

> **Your own virtual network in the cloud.**

Inside it you can have:

- Subnets
- Route tables
- Gateways
- Security controls
- Compute resources

## Basic architecture

```text
Internet
   |
Internet Gateway
   |
  VPC
 /   \
Public   Private
Subnet   Subnet
  |        |
Web       Database
Server
```

---

# 6. Public vs Private Subnet

## Public subnet

A subnet whose routing provides a path to/from the Internet, subject to security controls.

Typical resource:

- Load balancer
- Web server

## Private subnet

Resources are not directly reachable from the public Internet.

Typical resources:

- Database
- Internal backend

### Situation

> Database should not be directly accessible from the Internet.

→ **Private Subnet**

> Web server must accept Internet traffic.

→ It may be placed in a **Public Subnet**, with appropriate security controls.

---

# 7. Internet Gateway

An **Internet Gateway (IGW)** provides a path between a VPC and the Internet when appropriate routes and security rules exist.

Important:

> Internet Gateway ≠ automatically makes everything public.

You also need appropriate:

- Routes
- Public addressing where applicable
- Security rules

### One-word refresh

| Question | Answer |
|---|---|
| VPC → Internet connectivity component | **Internet Gateway** |
| Private resource directly exposed to Internet? | **No** |

---

# 8. NAT Gateway

Extremely important for situation-based questions.

Suppose:

```text
Internet
   X
   |
Private Subnet
   |
Backend Server
```

The backend needs to download OS updates from the Internet.

But you don't want Internet users initiating connections to that backend.

Use:

**NAT Gateway**

Core idea:

> **Private → Internet = YES**
>
> **Internet → Private = NO, by default for unsolicited inbound traffic**

### Situation

> Private EC2 needs outbound Internet access for package updates but should not be publicly reachable.

→ **NAT Gateway**

---

# 9. Route Tables

A route table determines where network traffic should go.

Example:

```text
0.0.0.0/0 → Internet Gateway
```

means:

> Traffic destined for anywhere not otherwise matched goes through the Internet Gateway.

Another:

```text
0.0.0.0/0 → NAT Gateway
```

can provide outbound Internet routing for private resources.

### One-word refresh

| Question | Answer |
|---|---|
| Determines packet forwarding path | **Route table** |
| Default IPv4 route | **0.0.0.0/0** |
| IPv6 default route | **::/0** |

---

# 10. Security Groups

Think:

> **Virtual firewall around cloud resources**

Security groups commonly control inbound and outbound traffic for resources such as virtual machines.

Important concept:

**Allow rules**

Security groups are generally **stateful**.

Meaning:

If an allowed connection is established, return traffic is automatically allowed according to the stateful behavior.

### Situation

> Allow HTTPS traffic to a web server.

→ Security Group rule allowing **TCP 443**

> Allow SSH administration.

→ **TCP 22**

---

# 11. Network ACL

A **Network ACL (NACL)** is another network traffic control mechanism.

Main conceptual distinction:

### Security Group

**Resource-level / stateful**

### NACL

**Subnet-level / stateless**

| Feature | Security Group | NACL |
|---|---|---|
| Level | Resource | Subnet |
| Stateful | Yes | No |
| Rules | Allow | Allow + Deny |
| Primary purpose | Resource traffic control | Subnet traffic control |

### One-word refresh

> Resource-level firewall?

**Security Group**

> Subnet-level traffic filter?

**NACL**

> Stateful?

**Security Group**

> Stateless?

**NACL**

---

# 12. IAM — Identity and Access Management

IAM answers:

> **WHO can access WHAT and WHAT can they do?**

Three concepts:

### Authentication

**Who are you?**

### Authorization

**What are you allowed to do?**

### IAM

Controls identities and permissions for cloud resources.

Example:

```text
Developer
   ↓
IAM
   ↓
S3 bucket
   ↓
Read allowed
Write denied
```

### One-word refresh

| Question | Answer |
|---|---|
| Verify identity | **Authentication** |
| Determine permissions | **Authorization** |
| Cloud identity/permission management | **IAM** |
| Give minimum required permissions | **Least privilege** |

---

# 13. IAM Users, Groups and Roles

## User

Represents an individual identity.

## Group

Collection of users to which permissions can be assigned.

## Role

An identity with permissions that can be **assumed** by users/services/applications.

Roles are particularly important for workloads.

### Situation

> EC2 needs to access an S3 bucket. You don't want to hard-code AWS credentials inside the application.

Use:

**IAM Role**

This is a high-value situation pattern.

---

# 14. Least Privilege

Give an identity:

> **Only the permissions it actually needs.**

Bad:

```text
Application → AdministratorAccess
```

Better:

```text
Application → Read specific S3 bucket
```

### Situation

> An application only needs to read objects from one S3 bucket.

Don't give:

**Full AWS Administrator access**

Give:

**Minimum required S3 read permissions**

→ **Least Privilege**

---

# 15. MFA

**Multi-Factor Authentication**

Uses multiple independent factors.

Examples:

- Something you know → password
- Something you have → security key/phone
- Something you are → biometric

### Situation

> Password alone should not be sufficient to access an administrator account.

→ **MFA**

---

# 16. Shared Responsibility Model

Very important for cloud security questions.

Cloud security is not:

> "The cloud provider handles everything."

Instead:

**Provider + Customer share responsibilities.**

The exact division depends on the service.

## Provider generally handles

- Physical infrastructure
- Physical security
- Underlying cloud infrastructure

## Customer generally handles

- Data
- IAM permissions
- Application security
- Configuration
- OS patching in many IaaS scenarios

### Key trap

> "Data stored in AWS is automatically secure because AWS is responsible for security."

**False.**

Customer configuration still matters.

---

# 17. Encryption at Rest vs Encryption in Transit

High-return distinction.

## Encryption at Rest

Protects stored data.

Examples:

- Database
- Disk
- Object storage

Think:

**Storage → At Rest**

## Encryption in Transit

Protects data while travelling across networks.

Usually:

**TLS / HTTPS**

### Situation

> Protect customer data while it travels between browser and server.

→ **TLS/HTTPS**

> Protect data stored on disk.

→ **Encryption at rest**

---

# 18. Key Management

Encryption requires keys.

Do not casually store sensitive keys inside:

```text
source code
Git repository
.env committed to Git
```

Cloud environments provide key-management services.

AWS example:

**KMS — Key Management Service**

### One-word refresh

| Question | Answer |
|---|---|
| AWS managed key service | **KMS** |
| Protect stored data | **At-rest encryption** |
| Protect network traffic | **TLS** |
| Never commit secrets to Git | **Security** |

---

# 19. Secrets Management

Passwords, API keys, database credentials and tokens are **secrets**.

They should not be hard-coded.

Use:

- Secrets Manager
- Vault
- Environment/secret injection mechanisms
- IAM roles where applicable

### Situation

> Database password is hard-coded in GitHub.

Problem:

**Secret exposure**

Correct approach:

**Secret management + rotation**

---

# 20. Cloud Logging and Monitoring

Security isn't only prevention.

You also need to know:

> **What happened?**

## Logs

Records of events.

## Monitoring

Observing system health/performance.

## Auditing

Reviewing activity for accountability/security.

## Alerting

Notifying when a condition occurs.

### AWS examples

**CloudWatch → monitoring/logs/metrics**

**CloudTrail → API activity/auditing**

### Situation

> "Who deleted this AWS resource?"

→ **CloudTrail**

> "CPU usage of EC2 is 95%."

→ **CloudWatch**

---

# 21. DDoS Protection

## DoS

One/few sources overwhelm a service.

## DDoS

Many distributed sources overwhelm a service.

Possible defenses include:

- Rate limiting
- Load balancing
- WAF
- DDoS protection services
- CDN
- Autoscaling

### Situation

> Thousands of machines simultaneously flood a website.

→ **DDoS**

---

# 22. WAF

**Web Application Firewall**

Think:

> **HTTP/HTTPS application protection**

It can help protect against web-layer attacks.

Example:

```text
User
 ↓
WAF
 ↓
Load Balancer
 ↓
Application
```

### Situation

> You need protection specifically at the web application/HTTP layer.

→ **WAF**

Do not confuse:

**WAF ≠ traditional network firewall**

---

# 23. DDoS vs WAF

Common conceptual trap.

**DDoS** = attack

**WAF** = security control

A WAF can help filter certain malicious web requests, but it is not synonymous with DDoS protection.

---

# 24. Cloud Security Posture

A cloud environment can be insecure because of **misconfiguration**.

Examples:

- Publicly exposed storage
- Excessive IAM permissions
- Open SSH to the whole Internet
- Hard-coded credentials
- Unencrypted sensitive data
- Unnecessary public IPs
- Missing logging

### Situation

> S3 bucket containing private customer data is accidentally publicly readable.

Primary issue:

**Misconfiguration / excessive exposure**

---

# 25. Zero Trust

Traditional thinking:

> "Inside network = trusted."

Zero Trust:

> **Never automatically trust; verify access.**

Core ideas:

- Verify identity
- Verify device/context
- Least privilege
- Continuous evaluation
- Segment resources

### One-word refresh

> Never automatically trust a network location?

**Zero Trust**

> Minimum permissions?

**Least Privilege**

---

# 26. High-Value Cloud Architecture Pattern

Recognize this immediately:

```text
                 INTERNET
                    |
                  WAF
                    |
              Load Balancer
                    |
          ┌─────────┴─────────┐
          ↓                   ↓
     Public/Frontend      Application
        Layer                 Layer
                              |
                       Private Subnet
                              |
                           Database
```

The exact implementation varies, but the security principle is:

**Don't expose the database directly to the Internet.**

---

# 27. Disaster Recovery Concepts

## Backup

Copy of data for recovery.

## Disaster Recovery

Processes and infrastructure used to restore operations after a major failure.

## RTO

**Recovery Time Objective**

How quickly the service should be restored.

## RPO

**Recovery Point Objective**

How much data loss, measured in time, is acceptable.

### Examples

> Company can tolerate losing at most 5 minutes of data.

→ **RPO = 5 minutes**

> Company requires service restoration within 30 minutes.

→ **RTO = 30 minutes**

### One-word refresh

| Question | Answer |
|---|---|
| Maximum acceptable downtime | **RTO** |
| Maximum acceptable data loss | **RPO** |
| Copy used for recovery | **Backup** |
| Recovery after major failure | **DR** |

---

# 28. Availability vs Durability

Do not confuse these.

## Availability

> Can I access the service/data when I need it?

## Durability

> Will my data remain intact and not be lost?

A storage system can have very high **durability** while a service temporarily has reduced **availability**.

---

# 29. High-Return One-Word Revision Sheet

| Situation | Concept |
|---|---|
| On-demand infrastructure | **Cloud** |
| Dynamic resource adjustment | **Elasticity** |
| Virtual machines | **IaaS** |
| Managed deployment platform | **PaaS** |
| Complete online application | **SaaS** |
| Provider infrastructure | **Public Cloud** |
| Dedicated organization cloud | **Private Cloud** |
| Public + private | **Hybrid Cloud** |
| Geographic cloud location | **Region** |
| Isolated location inside region | **AZ** |
| Virtual cloud network | **VPC** |
| Internet-facing subnet | **Public Subnet** |
| Non-public subnet | **Private Subnet** |
| VPC Internet connectivity | **Internet Gateway** |
| Private → Internet | **NAT Gateway** |
| Traffic destination rules | **Route Table** |
| Resource-level stateful control | **Security Group** |
| Subnet-level stateless control | **NACL** |
| Identity + permissions | **IAM** |
| Workload access without hard-coded credentials | **IAM Role** |
| Minimum permissions | **Least Privilege** |
| Multiple authentication factors | **MFA** |
| Stored data protection | **Encryption at Rest** |
| Network data protection | **TLS** |
| AWS key management | **KMS** |
| Secret storage | **Secrets Manager** |
| AWS API audit trail | **CloudTrail** |
| AWS metrics/monitoring | **CloudWatch** |
| HTTP/HTTPS protection | **WAF** |
| Many-source availability attack | **DDoS** |
| Don't automatically trust | **Zero Trust** |
| Maximum downtime | **RTO** |
| Maximum data loss | **RPO** |
| Data recovery copy | **Backup** |
| Major failure recovery | **Disaster Recovery** |
| Service accessibility | **Availability** |
| Data preservation | **Durability** |

---

# 30. Placement Recognition Framework

When you see a cloud scenario, identify the **problem first**, then map it to the concept.

| Scenario clue | Think |
|---|---|
| "Automatically increase/decrease servers" | **Elasticity** |
| "Developer deploys without managing servers" | **PaaS** |
| "Complete control of VM/OS" | **IaaS** |
| "Online software used by employees" | **SaaS** |
| "Continue after AZ failure" | **Multi-AZ** |
| "Private virtual network" | **VPC** |
| "Internet-facing resource" | **Public subnet** |
| "No direct Internet access" | **Private subnet** |
| "Private server needs outbound Internet" | **NAT Gateway** |
| "Where should traffic go?" | **Route table** |
| "Firewall around instance/resource" | **Security Group** |
| "Subnet-level stateless filtering" | **NACL** |
| "Who can access what?" | **IAM** |
| "EC2 needs AWS permissions" | **IAM Role** |
| "Only required permissions" | **Least privilege** |
| "Password + OTP" | **MFA** |
| "Data stored on disk" | **At-rest encryption** |
| "Data travelling over network" | **TLS** |
| "AWS API activity" | **CloudTrail** |
| "CPU/metrics/log monitoring" | **CloudWatch** |
| "HTTP application protection" | **WAF** |
| "Many distributed attackers" | **DDoS** |
| "Cloud resource accidentally public" | **Misconfiguration** |
| "No implicit trust" | **Zero Trust** |
| "Restore within X minutes" | **RTO** |
| "Lose at most X minutes of data" | **RPO** |

---

# Final Rule

Do **not** spend multiple days on Cloud theory.

Your target is:

**Concept → trigger word → correct cloud/security service/control**

Once these concepts are familiar, move to **Part 2: Cloud + Cloud Security situation-based questions with one-word/short answers**.

That is where the actual placement value comes from.
