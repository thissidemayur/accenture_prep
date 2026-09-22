# Accenture Cloud Part 2 — Cloud Security, Compliance, IAM & AWS
## High-ROI Theory + 40 Placement MCQs

> **Purpose:** This is Part 2 of your Cloud preparation.
>
> The supplied paid-batch questions are the source pattern. They mainly test:
> - cloud deployment models
> - AWS shared responsibility
> - encryption/key management
> - data classification
> - SSO/IAM
> - incident response
> - disaster recovery
> - vendor lock-in
> - compliance
> - network segmentation
>
> This file expands those concepts without simply repeating the same scenario.

---

# PART 1 — HIGH-ROI THEORY

## 1. Public vs Private vs Hybrid Cloud

### Public Cloud

Cloud infrastructure is provided by a cloud provider and shared among customers.

Examples:
- AWS
- Azure
- Google Cloud

Think:

> **Provider-owned infrastructure + on-demand services**

### Private Cloud

Cloud environment dedicated to one organization.

Useful when an organization has strong requirements around:
- control
- isolation
- customization
- regulatory constraints

### Hybrid Cloud

Combination of private/on-premises infrastructure and public cloud.

Think:

> **Some workloads/data stay private + other workloads use public cloud**

### Community Cloud

Infrastructure is shared by organizations with common requirements, such as regulatory or industry requirements.

### Exam shortcut

```text
Maximum organizational control/isolation → Private Cloud

Public + private/on-premises together → Hybrid Cloud

Shared by organizations with common requirements → Community Cloud
```

**Important:** Do not memorize "private cloud always guarantees compliance." Compliance depends on architecture, controls, laws, and configuration.

---

# 2. IaaS / PaaS / SaaS

This is essential for shared-responsibility questions.

## IaaS

**IaaS = Infrastructure as a Service**

Example:
- Amazon EC2

Customer generally manages more of the stack:
- Guest OS
- Applications
- Data
- Configuration

Cloud provider manages underlying infrastructure.

### Shortcut

> **IaaS → customer manages OS**

---

## PaaS

**PaaS = Platform as a Service**

Provider manages more of:
- Infrastructure
- OS
- Runtime/platform

Customer focuses more on:
- Application
- Data
- Application configuration

---

## SaaS

**SaaS = Software as a Service**

Provider manages the application/platform/infrastructure.

Customer mainly manages:
- Users
- Access
- Data/configuration depending on the service

### Stack memory

```text
IaaS → customer manages MORE
PaaS → customer manages LESS
SaaS → customer manages LEAST
```

---

# 3. AWS Shared Responsibility Model — VERY HIGH PRIORITY

AWS divides security responsibility between AWS and the customer.

### AWS: Security OF the Cloud

AWS is responsible for infrastructure such as:
- physical facilities
- hardware
- underlying networking
- virtualization/infrastructure layer

### Customer: Security IN the Cloud

Responsibility depends on the service.

For EC2/IaaS, the customer is responsible for:
- guest OS
- OS patches
- applications
- security-group configuration
- customer data/configuration

AWS documentation explicitly states that EC2 customers manage the guest OS, including updates and security patches. citeturn0search0turn0search1

### Exam shortcut

```text
AWS → hardware / facilities / underlying cloud infrastructure

Customer → guest OS / apps / data / configuration
           (for IaaS such as EC2)
```

**Trap:** The shared-responsibility model changes with the service. Do not assume the customer always manages the OS.

---

# 4. IAM

**IAM = Identity and Access Management**

IAM controls:
- Who can access resources
- What they can do
- Which resources they can access

Think:

> **Authentication + authorization + permissions**

Important IAM concepts:

### User

An identity representing a person/application use case.

### Group

A collection of users to which permissions can be assigned.

### Role

An identity that can be assumed to obtain temporary permissions.

### Policy

A document defining permissions.

### Least Privilege

Give only the permissions required to perform the task.

---

# 5. Authentication vs Authorization

Very common MCQ distinction.

### Authentication

> **Who are you?**

Examples:
- Password
- MFA
- Certificate

### Authorization

> **What are you allowed to do?**

Examples:
- IAM policies
- RBAC permissions

Memory:

```text
Authentication → Identity
Authorization  → Permissions
```

---

# 6. MFA

**MFA = Multi-Factor Authentication**

Uses multiple authentication factors.

Common factor categories:

- Something you know → password
- Something you have → security key/phone/token
- Something you are → biometric

MFA helps protect accounts when a password is compromised.

---

# 7. SSO

**SSO = Single Sign-On**

Allows users to authenticate once through a central identity system and access multiple applications according to configured permissions.

Scenario:

> Company uses many SaaS applications and wants centralized employee login.

Think:

> **SSO**

In AWS, the current service name is **AWS IAM Identity Center**, which provides centralized workforce access to AWS accounts and applications.

---

# 8. RBAC

**RBAC = Role-Based Access Control**

Permissions are associated with roles rather than individually assigning every permission to every user.

Example:

```text
Developer role
    ↓
Read logs
Deploy application

Finance role
    ↓
Access billing data
```

### SSO vs RBAC

```text
SSO → centralized authentication/login experience

RBAC → permissions based on roles
```

They can be used together.

---

# 9. Encryption at Rest vs In Transit

## At Rest

Data stored on:
- disks
- databases
- object storage
- backups

is encrypted.

Think:

> **Stored data → encryption at rest**

## In Transit

Data moving across a network is protected using mechanisms such as TLS.

Think:

> **Moving data → TLS/HTTPS**

### Shortcut

```text
Storage → At rest
Network → In transit
```

---

# 10. AWS KMS

**KMS = Key Management Service**

AWS KMS is used to create/manage cryptographic keys and integrate them with AWS services.

### Customer-managed key

A key created and managed by the customer.

The customer can control:
- key policy
- enable/disable state
- rotation choices
- aliases
- deletion scheduling

AWS documentation describes customer-managed keys as keys created and managed by customers who want greater control over key lifecycle and usage. citeturn0search6

### Important correction to the supplied question

The paid-batch explanation says:

> "Customer-managed keys prevent provider access."

For exam purposes, the intended answer is **customer-managed keys** when the requirement is maximum customer control over keys.

But technically, do not memorize the stronger statement as an absolute rule. Customer-managed keys provide customer control over key policies and lifecycle; the exact confidentiality/security boundary depends on the AWS service and architecture.

---

# 11. S3 Encryption

Amazon S3 supports encryption for data at rest.

For exam questions, distinguish:

- Provider/AWS-managed key options
- Customer-managed KMS keys

If the question emphasizes:

> "Customer wants control over the encryption key"

Think:

> **AWS KMS customer-managed key**

---

# 12. Data Classification

Before migrating data to cloud, classify it.

Typical categories:

```text
Public
Internal
Confidential
Highly sensitive / regulated
```

Why?

Because different data may require different:
- encryption
- access controls
- storage locations
- retention policies
- backup policies
- regulatory treatment

### Scenario clue

> Public + highly confidential workloads are being migrated.

Think:

> **Data classification + segregation**

---

# 13. Data Residency

**Data residency** refers to where data is physically stored/processed, which can matter for legal, regulatory, contractual, or organizational requirements.

Scenario:

> Law requires customer data to remain within a specific country/region.

Think:

> **Choose appropriate cloud regions + enforce data-location controls**

Do not automatically answer "private cloud."

A public cloud can sometimes satisfy residency requirements if configured and legally appropriate.

---

# 14. Data Segregation

Sensitive workloads should be isolated from less-sensitive workloads using appropriate controls.

Possible mechanisms:
- Separate accounts/projects
- Separate VPCs/networks
- Private subnets
- IAM policies
- Security groups
- Network segmentation
- Separate storage/access policies

Scenario:

> Prevent a compromised workload from moving laterally.

Think:

> **Segmentation/isolation**

---

# 15. Security Groups

In AWS, a Security Group acts as a stateful virtual firewall for associated resources/network interfaces.

It controls allowed traffic based on rules.

Think:

> **Instance/resource-level network firewall**

---

# 16. Network ACL

A **Network ACL (NACL)** is a subnet-level traffic filter.

For the common AWS distinction:

```text
Security Group → stateful
NACL            → stateless
```

This is a frequent cloud networking MCQ.

---

# 17. WAF

**WAF = Web Application Firewall**

Protects web applications against application-layer threats.

Common examples:
- SQL injection
- Cross-site scripting (XSS)
- malicious HTTP requests

Think:

> **Web/application-layer protection → WAF**

---

# 18. CloudTrail

**AWS CloudTrail** records AWS API activity/events.

Useful for:
- auditing
- investigation
- detecting suspicious API activity
- understanding who performed an AWS action

Scenario:

> "Who changed this AWS resource?"

Think:

> **CloudTrail**

---

# 19. CloudWatch

**Amazon CloudWatch** provides monitoring/observability for AWS resources and applications.

Think:

> **Metrics / logs / alarms / monitoring**

Simple distinction:

```text
CloudTrail  → API/account activity audit
CloudWatch  → monitoring, metrics, logs, alarms
```

---

# 20. Incident Response

If suspicious login activity is detected:

Immediate controls may include:
- investigate authentication logs
- enforce MFA
- rotate/revoke compromised credentials
- restrict access
- apply conditional access/identity controls
- preserve evidence

Do not automatically:
- delete all accounts
- reboot everything
- migrate to another cloud

The correct response depends on the incident.

---

# 21. Backup vs Replication

These are NOT identical.

### Backup

A recoverable copy of data, often used for restoration.

Useful against:
- accidental deletion
- corruption
- ransomware scenarios when protected backups exist

### Replication

Copies data to another location/system.

Useful for:
- availability
- disaster recovery
- reducing regional failure impact

Important:

> Replication alone is not a complete backup strategy.

AWS guidance notes that data replication can protect against some disasters but does not by itself protect against data corruption or destruction; point-in-time recovery/backups may also be required. citeturn0search15

---

# 22. RPO vs RTO

Very high ROI.

### RPO

**Recovery Point Objective**

How much recent data loss is acceptable.

Example:

> RPO = 15 minutes

You can tolerate losing up to approximately 15 minutes of data.

### RTO

**Recovery Time Objective**

How quickly the service should be restored.

Example:

> RTO = 1 hour

Service should be restored within about 1 hour.

Memory:

```text
RPO → Data loss
RTO → Recovery time
```

---

# 23. Multi-Region

Deploying/replicating workloads across multiple AWS Regions can improve disaster recovery/resilience against regional failures.

But it adds:
- complexity
- cost
- data synchronization challenges

AWS Well-Architected guidance describes multi-Region strategies such as pilot light, warm standby, and active-active architectures with different recovery characteristics. citeturn0search15

---

# 24. Vendor Lock-In

Vendor lock-in occurs when an application becomes highly dependent on provider-specific technologies, making migration difficult.

Ways to reduce it:
- cloud-agnostic architecture where practical
- portable technologies
- containers
- standard protocols
- abstraction layers

Tradeoff:

> Cloud-native provider services can provide major benefits but may increase portability concerns.

---

# 25. Compliance

Cloud compliance can involve:
- regulatory requirements
- industry standards
- audit evidence
- access controls
- encryption
- logging
- retention
- data residency

Examples of standards/frameworks you may encounter:

- ISO 27001
- SOC 2
- PCI DSS
- HIPAA

### Exam clue

> "Proof of provider's compliance posture"

Think:

> **Compliance reports/certifications and audit documentation**

---

# 26. SLA vs Compliance Report

### SLA

**Service Level Agreement**

Describes service commitments such as availability targets and remedies/credits.

### Compliance report/certification

Provides evidence about controls/compliance against a framework or standard.

```text
Availability commitment → SLA

Security/compliance evidence → Compliance report/certification
```

---

# 27. High-ROI AWS Service Map

| Requirement | AWS concept/service |
|---|---|
| Virtual machines | EC2 |
| Identity/permissions | IAM |
| Central workforce SSO | IAM Identity Center |
| Object storage | S3 |
| Encryption/key management | KMS |
| API activity auditing | CloudTrail |
| Monitoring/metrics/logs/alarms | CloudWatch |
| Virtual private network | VPC |
| Resource-level stateful firewall | Security Group |
| Subnet-level stateless ACL | NACL |
| Web application protection | WAF |
| Private subnet outbound Internet | NAT Gateway |
| Public VPC Internet connectivity | Internet Gateway |
| DNS | Route 53 |
| Load balancing | Elastic Load Balancing |
| Auto scaling | EC2 Auto Scaling |
| CDN | CloudFront |
| Managed relational database | RDS |
| Dedicated private cloud connection | Direct Connect |
| Encrypted site-to-site connectivity | Site-to-Site VPN |

---

# PART 2 — 40 HIGH-ROI MCQs

## Q1. IaaS Responsibility

A company launches an EC2 virtual machine and asks who is responsible for patching the guest operating system.

A) AWS only
B) Customer
C) End user only
D) Internet service provider

**Answer: B) Customer**

**Why:** EC2 is IaaS; the customer manages the guest OS and its patches. citeturn0search0

---

## Q2. AWS Infrastructure

Who is primarily responsible for the physical AWS infrastructure under the shared responsibility model?

A) Customer
B) AWS
C) Application developer
D) Database user

**Answer: B) AWS**

**Why:** AWS secures the infrastructure "of the cloud."

---

## Q3. Shared Responsibility Trap

Which statement is most accurate?

A) AWS handles every aspect of security.
B) Customer handles every aspect of security.
C) Responsibility depends on the AWS service and the layer being secured.
D) End users handle physical security.

**Answer: C**

---

## Q4. Deployment Model

A company wants a cloud environment dedicated to one organization with greater control and isolation.

A) Public cloud
B) Private cloud
C) Community cloud
D) SaaS

**Answer: B) Private cloud**

---

## Q5. Hybrid Cloud

A company keeps a sensitive database on-premises but runs its public web application on AWS.

Which model is this?

A) Public cloud only
B) Private cloud only
C) Hybrid cloud
D) Community cloud

**Answer: C) Hybrid cloud**

---

## Q6. Community Cloud

Several organizations with similar regulatory requirements share a cloud environment.

Which deployment model best describes this arrangement?

A) Community cloud
B) Private cloud
C) SaaS
D) Edge computing

**Answer: A) Community cloud**

---

## Q7. Authentication

An employee must prove their identity before accessing a cloud application.

This is:

A) Authorization
B) Authentication
C) Encryption
D) Replication

**Answer: B) Authentication**

---

## Q8. Authorization

A user has successfully logged in but is not allowed to delete an S3 bucket.

Which concept determines this?

A) Authentication
B) Authorization
C) Compression
D) Replication

**Answer: B) Authorization**

---

## Q9. Least Privilege

A developer only needs read access to production logs.

What should be granted?

A) Administrator access
B) Read-only permissions required for the logs
C) Root access
D) Full account access

**Answer: B**

**Why:** Least privilege means giving only necessary permissions.

---

## Q10. MFA

A company's password database is compromised. Which control can add another authentication factor?

A) MFA
B) CDN
C) NACL
D) Auto Scaling

**Answer: A) MFA**

---

## Q11. SSO

A company uses 10 SaaS applications and wants employees to authenticate through one central identity system.

A) SSO
B) CDN
C) NAT
D) NACL

**Answer: A) SSO**

---

## Q12. RBAC

A company wants permissions assigned according to roles such as Developer, Finance, and HR.

A) RBAC
B) DNS
C) NAT
D) CDN

**Answer: A) RBAC**

---

## Q13. SSO vs RBAC

Which statement is correct?

A) SSO mainly addresses centralized login; RBAC organizes permissions around roles.
B) SSO replaces encryption.
C) RBAC is a network routing protocol.
D) They mean exactly the same thing.

**Answer: A**

---

## Q14. Encryption at Rest

A database must remain encrypted while stored on disk.

Which concept applies?

A) Encryption at rest
B) TLS only
C) DNS
D) Load balancing

**Answer: A**

---

## Q15. Encryption in Transit

A web application must protect data while it travels between browser and server.

A) TLS/HTTPS
B) S3 versioning only
C) StorageClass
D) RAID

**Answer: A**

---

## Q16. KMS

A company wants centralized management of cryptographic keys used by AWS services.

A) KMS
B) CloudFront
C) Route 53
D) CloudWatch

**Answer: A) KMS**

**KMS = Key Management Service**

---

## Q17. Customer-Managed Key

A compliance team wants greater control over the lifecycle and policies of its encryption key.

Which is most relevant?

A) Customer-managed KMS key
B) DNS record
C) Security Group
D) NAT Gateway

**Answer: A**

AWS describes customer-managed KMS keys as keys created and managed by the customer, with control over key policies and lifecycle. citeturn0search6

---

## Q18. Data Classification

An organization has public marketing data and highly confidential research data.

What should happen before migration?

A) Treat everything identically
B) Classify and appropriately segregate data
C) Disable encryption
D) Give everyone administrator access

**Answer: B**

---

## Q19. Data Residency

A law requires customer records to remain within a particular geographic region.

Which requirement should influence the cloud architecture?

A) Data residency
B) CPU scheduling
C) CDN caching only
D) Thread synchronization

**Answer: A**

---

## Q20. Segmentation

A compromised application server should not be able to freely communicate with a sensitive database network.

Which approach is relevant?

A) Network segmentation
B) Disable backups
C) Increase CPU
D) Use one shared network

**Answer: A**

---

## Q21. Security Group

An EC2 instance should accept HTTPS traffic on TCP 443.

Which AWS control is commonly used?

A) Security Group
B) CloudFront only
C) Route 53
D) S3

**Answer: A**

---

## Q22. NACL

Which AWS control operates at the subnet level and is stateless?

A) Security Group
B) Network ACL
C) IAM Role
D) KMS

**Answer: B) Network ACL**

---

## Q23. WAF

A company wants to filter malicious HTTP requests such as SQL injection and XSS.

A) WAF
B) NAT Gateway
C) IAM
D) Route Table

**Answer: A) WAF**

**WAF = Web Application Firewall**

---

## Q24. CloudTrail

An administrator wants to determine which identity made an AWS API change.

Which service is relevant?

A) CloudTrail
B) CloudFront
C) EC2 Auto Scaling
D) RDS

**Answer: A) CloudTrail**

---

## Q25. CloudWatch

A DevOps team wants CPU metrics, logs, and alarms for AWS workloads.

A) CloudWatch
B) CloudTrail only
C) KMS
D) Route 53

**Answer: A) CloudWatch**

---

## Q26. CloudTrail vs CloudWatch

Which statement is most accurate?

A) CloudTrail focuses on AWS API/account activity; CloudWatch focuses on monitoring, metrics, logs, and alarms.
B) They are identical services.
C) CloudWatch manages encryption keys.
D) CloudTrail is a load balancer.

**Answer: A**

---

## Q27. Incident Response

A cloud account shows suspicious login attempts.

Which action is reasonable as part of immediate containment?

A) Review logs and secure/revoke affected credentials while enforcing stronger authentication controls
B) Delete every account
C) Destroy all servers
D) Ignore the events

**Answer: A**

---

## Q28. Backup vs Replication

Which statement is correct?

A) Replication and backup are exactly identical.
B) Replication can improve availability, while backups support recovery from deletion/corruption scenarios.
C) Backups never help disaster recovery.
D) Replication guarantees protection against data corruption.

**Answer: B**

---

## Q29. RPO

A company says:

> "We can tolerate losing at most 15 minutes of data."

Which metric describes this requirement?

A) RTO
B) RPO
C) SLA
D) MTTR

**Answer: B) RPO**

---

## Q30. RTO

A company requires a service to be restored within 30 minutes after a disaster.

Which metric is this?

A) RPO
B) RTO
C) DNS TTL
D) SLA only

**Answer: B) RTO**

---

## Q31. Multi-Region

A business wants resilience against a regional cloud outage.

Which strategy can help?

A) Multi-Region deployment/replication
B) One VM in one AZ
C) One local disk
D) Disable backups

**Answer: A**

---

## Q32. Multi-Region Trap

Which statement is most accurate?

A) Multi-Region automatically eliminates every type of data loss.
B) Multi-Region can improve regional disaster resilience but adds cost and synchronization complexity.
C) Multi-Region removes the need for security.
D) Multi-Region is the same as MFA.

**Answer: B**

---

## Q33. Vendor Lock-In

A company wants to make future migration between cloud providers easier.

Which design principle is relevant?

A) Maximum dependence on proprietary APIs
B) Cloud-agnostic/portable architecture where practical
C) Remove all abstraction
D) Use one provider-specific database for everything

**Answer: B**

---

## Q34. Compliance Evidence

An auditor asks for evidence of a cloud provider's compliance posture.

What should the organization look for?

A) Relevant compliance certifications/reports
B) CPU utilization graph only
C) DNS records
D) Source-code comments

**Answer: A**

---

## Q35. SLA

An agreement specifies an availability commitment and possible service credits when the provider fails to meet the commitment.

This is associated with:

A) SLA
B) KMS
C) IAM
D) WAF

**Answer: A) SLA**

**SLA = Service Level Agreement**

---

## Q36. Private Connectivity

A company wants an encrypted connection between its on-premises network and AWS over the Internet.

A) Site-to-Site VPN
B) CloudFront
C) WAF
D) S3

**Answer: A**

---

## Q37. Direct Connect

An enterprise wants dedicated private connectivity from its data center to AWS.

A) AWS Direct Connect
B) CloudTrail
C) CloudWatch
D) WAF

**Answer: A**

---

## Q38. Service Identification

Which mapping is correct?

A) CloudFront → CDN
B) Route 53 → encryption key management
C) KMS → DNS
D) CloudTrail → virtual machine hosting

**Answer: A**

---

## Q39. Complete Security Scenario

A financial organization runs an EC2 application containing sensitive data. It requires:

- OS patch responsibility to be clearly assigned
- encryption key control
- API activity auditing
- monitoring
- network access restriction

Which combination is most appropriate?

A) Customer manages guest OS + KMS + CloudTrail + CloudWatch + Security Groups
B) AWS manages everything + DNS only
C) CloudFront + Route 53 only
D) S3 + CDN only

**Answer: A**

---

## Q40. Complete Architecture Scenario

A company is migrating workloads containing different sensitivity levels.

Requirements:

1. Classify sensitive data.
2. Keep highly sensitive workloads isolated.
3. Give employees centralized access.
4. Encrypt sensitive data.
5. Audit cloud API activity.
6. Monitor workloads.

Which combination best matches the requirements?

A) Data classification/segmentation + IAM Identity Center/SSO + KMS + CloudTrail + CloudWatch
B) CDN + DNS + NAT only
C) Public access + shared administrator credentials
D) Disable logging to reduce costs

**Answer: A**

---

# PART 3 — THE MOST IMPORTANT CLOUD PART-2 MEMORY MAP

```text
IaaS                → Customer manages guest OS

AWS                 → Security OF the cloud
Customer            → Security IN the cloud

Authentication      → WHO are you?
Authorization       → WHAT can you do?

MFA                 → Multiple authentication factors
SSO                 → One central login for multiple apps
RBAC                → Permissions based on roles
Least privilege     → Minimum required permissions

At rest             → Stored data encryption
In transit          → TLS/HTTPS

KMS                 → Key management
Customer-managed key→ More customer control over key lifecycle/policy

Data residency      → Where data is stored/processed
Data classification  → Determine sensitivity
Segmentation        → Isolate workloads

Security Group      → Stateful resource/network-interface firewall
NACL                → Stateless subnet-level filtering
WAF                 → Web/application attacks

CloudTrail          → API/account activity audit
CloudWatch          → Metrics/logs/alarms/monitoring

Backup              → Recovery copy
Replication         → Copies for availability/DR

RPO                 → Acceptable DATA LOSS
RTO                 → Acceptable RECOVERY TIME

Multi-Region        → Regional resilience
Vendor lock-in      → Dependence on provider-specific technology

SLA                 → Service commitment
Compliance report   → Evidence of compliance posture
```

---

# PART 4 — WHAT TO MEMORIZE WITH 4 DAYS LEFT

## 🔴 MUST KNOW

1. IaaS/PaaS/SaaS
2. AWS Shared Responsibility
3. IAM
4. Authentication vs Authorization
5. MFA
6. SSO
7. RBAC
8. Least Privilege
9. KMS
10. Encryption at rest vs in transit
11. Security Group vs NACL
12. WAF
13. CloudTrail vs CloudWatch
14. Backup vs Replication
15. RPO vs RTO
16. Multi-Region
17. Data classification
18. Data residency
19. Network segmentation
20. Vendor lock-in

## 🟡 SECOND PRIORITY

21. Private/Public/Hybrid/Community cloud
22. Compliance reports
23. SLA
24. VPN
25. Direct Connect
26. IAM Identity Center
27. AWS service identification

## 🟢 LOW PRIORITY FOR THIS 4-DAY SPRINT

Do not spend major time on:

- Deep KMS cryptography
- Advanced IAM policy JSON
- Complex compliance frameworks
- Advanced multi-account governance
- Detailed disaster-recovery implementation
- Advanced key-material architectures
- Deep AWS Organizations internals

You need **scenario recognition**, not AWS Solutions Architect-level depth.

---

# FINAL 20-SECOND REVISION

```text
IaaS → customer OS
PaaS → provider manages more platform
SaaS → provider manages most stack

WHO? → Authentication
WHAT CAN THEY DO? → Authorization

MFA → extra authentication factor
SSO → centralized login
RBAC → role permissions
IAM → identity/access

KMS → encryption key management

AT REST → stored data
IN TRANSIT → TLS

SG → STATEFUL
NACL → STATELESS

WAF → web attacks

CloudTrail → API activity
CloudWatch → monitoring

BACKUP → recovery
REPLICATION → availability/DR

RPO → DATA LOSS
RTO → TIME TO RECOVER

CLASSIFY DATA → before migration
SEGMENT → isolate sensitive workloads
MULTI-REGION → regional resilience

SLA → service commitment
COMPLIANCE REPORT → compliance evidence
```

## Sources used for verification

- AWS Well-Architected shared responsibility documentation
- AWS IAM documentation
- AWS KMS documentation
- AWS Well-Architected disaster recovery guidance

The AWS-specific claims in this file were checked against current AWS documentation; exact customer responsibility varies by service. 
