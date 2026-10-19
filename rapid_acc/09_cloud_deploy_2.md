# Accenture Cloud Deployment + AWS — 40 High-Return MCQs

**Basis:** Your 10 supplied Cloud Deployment questions, expanded into AWS service-recognition and scenario questions. Designed for your final 3 days.

## 1. Hybrid Connectivity

An organization needs to connect its on-premises data center to AWS securely over the public Internet. Which solution is most appropriate?

A) Public Wi-Fi
B) Site-to-Site VPN
C) S3
D) CloudFront

**Answer: B)**

**Why:** VPN provides an encrypted tunnel over the Internet.

## 2. Dedicated Connectivity

A company wants a dedicated private connection from its data center to AWS instead of using the public Internet. Which service fits?

A) Direct Connect
B) NAT Gateway
C) Route 53
D) WAF

**Answer: A)**

**Why:** Direct Connect provides dedicated connectivity between on-premises infrastructure and AWS.

## 3. Virtual Servers

A company needs virtual machines to run its backend application in AWS. Which service should it consider?

A) S3
B) EC2
C) Route 53
D) KMS

**Answer: B)**

**Why:** EC2 provides virtual compute instances.

## 4. Object Storage

A company needs to store user-uploaded images and backup files as objects. Which AWS service is appropriate?

A) S3
B) EC2
C) IAM
D) CloudTrail

**Answer: A)**

**Why:** S3 is AWS object storage.

## 5. Managed Relational Database

A company wants a managed PostgreSQL database without managing the database server itself. Which service is appropriate?

A) RDS
B) S3
C) CloudFront
D) Route 53

**Answer: A)**

**Why:** RDS provides managed relational databases.

## 6. AWS Network

A team needs an isolated virtual network containing subnets, route tables and network security controls. Which service provides this?

A) VPC
B) S3
C) KMS
D) CloudTrail

**Answer: A)**

**Why:** VPC is the logical network environment in AWS.

## 7. Identity and Permissions

An administrator needs to control which AWS resources a user or application can access. Which service is central to this?

A) IAM
B) CloudFront
C) Route 53
D) ECR

**Answer: A)**

**Why:** IAM manages identities and permissions.

## 8. Encryption Keys

An application needs centralized management of encryption keys. Which AWS service is designed for this?

A) KMS
B) EC2
C) Route 53
D) CloudWatch

**Answer: A)**

**Why:** KMS is AWS key management.

## 9. Monitoring

An operations team wants CPU metrics, logs and alarms for AWS resources. Which service should it primarily use?

A) CloudWatch
B) CloudTrail
C) IAM
D) Route 53

**Answer: A)**

**Why:** CloudWatch provides monitoring, metrics, logs and alarms.

## 10. AWS API Auditing

A security team wants to know which user made an AWS API call, what action was performed and when. Which service is most relevant?

A) CloudWatch
B) CloudTrail
C) S3
D) Auto Scaling

**Answer: B)**

**Why:** CloudTrail records AWS account/API activity.

## 11. DNS

A company wants to manage its domain name and DNS records in AWS. Which service is appropriate?

A) Route 53
B) RDS
C) EBS
D) KMS

**Answer: A)**

**Why:** Route 53 is AWS's DNS service.

## 12. Traffic Distribution

An application runs on multiple EC2 instances and requests must be distributed among healthy instances. Which component should be used?

A) Load Balancer
B) S3
C) KMS
D) IAM

**Answer: A)**

**Why:** A load balancer distributes traffic across targets and can perform health checks.

## 13. Traffic Spike

A web application suddenly receives much more traffic and needs additional EC2 capacity automatically. Which capability is most relevant?

A) Auto Scaling
B) Route 53 only
C) KMS
D) CloudTrail

**Answer: A)**

**Why:** Auto Scaling adjusts compute capacity based on demand.

## 14. Global Static Content

A company wants users around the world to receive static content from locations close to them. Which AWS service is designed for this?

A) CloudFront
B) RDS
C) IAM
D) CloudTrail

**Answer: A)**

**Why:** CloudFront is a CDN.

## 15. Web Application Protection

A company wants to filter malicious HTTP/HTTPS requests such as SQL injection attempts. Which service is appropriate?

A) WAF
B) S3
C) Route 53
D) RDS

**Answer: A)**

**Why:** WAF protects web applications by filtering web requests.

## 16. EC2 Network Firewall

An organization needs a stateful firewall controlling traffic to an EC2 instance. Which feature is commonly used?

A) Security Group
B) S3 Bucket
C) Route 53
D) CloudFront

**Answer: A)**

**Why:** Security Groups are stateful virtual firewalls for supported resources such as EC2.

## 17. Subnet-Level Filtering

A network administrator needs stateless traffic filtering at the subnet level. Which feature should be considered?

A) Security Group
B) Network ACL
C) IAM
D) KMS

**Answer: B)**

**Why:** NACLs operate at subnet level and are stateless.

## 18. Private Subnet Internet Access

Servers in a private subnet need outbound Internet access without being directly reachable from the Internet. Which component is commonly used?

A) NAT Gateway
B) Internet Gateway alone
C) Route 53
D) WAF

**Answer: A)**

**Why:** NAT Gateway enables outbound Internet access for private-subnet resources.

## 19. VPC Internet Connectivity

A public subnet needs a route toward the Internet. Which VPC component provides the Internet gateway connection?

A) Internet Gateway
B) NAT Gateway only
C) KMS
D) CloudTrail

**Answer: A)**

**Why:** An Internet Gateway connects a VPC to the Internet for appropriately routed resources.

## 20. Secure Web Traffic

Sensitive information must be protected while moving between a browser and a cloud application. Which should be used?

A) HTTP
B) HTTPS/TLS
C) FTP
D) Telnet

**Answer: B)**

**Why:** TLS protects data in transit.

## 21. Encryption at Rest

A company wants stored cloud data encrypted so stolen storage does not directly expose plaintext. Which concept applies?

A) Encryption at rest
B) Encryption in transit
C) DNS
D) Load balancing

**Answer: A)**

**Why:** Encryption at rest protects stored data.

## 22. Key Management

A company wants control over encryption keys used to protect cloud data. Which AWS service is most relevant?

A) KMS
B) Route 53
C) CloudFront
D) ELB

**Answer: A)**

**Why:** KMS manages cryptographic keys.

## 23. Shared Responsibility

A company runs an application on an EC2 instance. Who is generally responsible for patching the guest operating system?

A) AWS always
B) Customer
C) DNS provider
D) Internet Gateway

**Answer: B)**

**Why:** For EC2, the customer generally manages the guest OS and patches.

## 24. Authentication

A user proves identity using a password and MFA. What security concept is primarily being performed?

A) Authentication
B) Authorization
C) Encryption at rest
D) Routing

**Answer: A)**

**Why:** Authentication verifies identity.

## 25. Authorization

An IAM policy determines whether a user can delete an S3 object. What concept is this?

A) Authentication
B) Authorization
C) Encryption
D) DNS resolution

**Answer: B)**

**Why:** Authorization determines what an authenticated identity may do.

## 26. SSO

Employees use one centralized login to access several SaaS applications. Which technology is most relevant?

A) SSO
B) NAT
C) NACL
D) CloudFront

**Answer: A)**

**Why:** Single Sign-On enables centralized authentication across applications.

## 27. MFA

A cloud administrator enters a password plus a code from an authenticator app. What is this?

A) MFA
B) NAT
C) DNSSEC
D) Load balancing

**Answer: A)**

**Why:** MFA uses multiple authentication factors.

## 28. Least Privilege

A developer should have permission only to read objects from one S3 bucket. Which principle is being applied?

A) Least privilege
B) Full access
C) Public access
D) Open trust

**Answer: A)**

**Why:** Least privilege gives only required permissions.

## 29. High Availability

A critical EC2 application should continue operating if one Availability Zone fails. Which architecture is appropriate?

A) Deploy across multiple Availability Zones
B) Use one EC2 instance
C) Store everything on a laptop
D) Use one Availability Zone only

**Answer: A)**

**Why:** Multi-AZ improves availability against an AZ failure.

## 30. Regional Disaster Recovery

A company wants protection if an entire AWS Region becomes unavailable. Which strategy is more relevant?

A) Multi-Region architecture
B) Single EC2 instance
C) One subnet only
D) One local backup only

**Answer: A)**

**Why:** Multi-Region can provide resilience against regional failure.

## 31. RPO

A disaster recovery plan allows at most 15 minutes of data loss. Which metric is this?

A) RTO
B) RPO
C) SLA
D) MTTR

**Answer: B)**

**Why:** RPO measures acceptable data loss.

## 32. RTO

A company requires its critical application to be restored within 30 minutes after a disaster. Which metric describes this?

A) RPO
B) RTO
C) TTL
D) SLA only

**Answer: B)**

**Why:** RTO measures target recovery time.

## 33. Backup

A company wants a recoverable historical copy of data after accidental deletion. Which approach is most directly relevant?

A) Backup
B) Load balancing
C) NAT
D) DNS

**Answer: A)**

**Why:** Backups provide recoverable copies.

## 34. Secrets

An application needs to retrieve a database password without hard-coding it in source code. Which AWS service is appropriate?

A) Secrets Manager
B) CloudFront
C) Route 53
D) ECR

**Answer: A)**

**Why:** Secrets Manager stores and retrieves sensitive credentials.

## 35. Container Images

A DevOps team needs a private AWS registry for Docker/container images. Which service is appropriate?

A) ECR
B) RDS
C) Route 53
D) KMS

**Answer: A)**

**Why:** ECR stores container images.

## 36. Containers

A team wants an AWS container orchestration service and does not specifically require Kubernetes. Which is a natural choice?

A) ECS
B) Route 53
C) S3
D) CloudTrail

**Answer: A)**

**Why:** ECS is AWS container orchestration.

## 37. Kubernetes

A company specifically wants managed Kubernetes capabilities in AWS. Which service is appropriate?

A) EKS
B) ECS
C) S3
D) CloudFront

**Answer: A)**

**Why:** EKS is managed Kubernetes.

## 38. Monitoring vs Auditing

An engineer wants CPU metrics, while an auditor wants to know which IAM user changed an AWS resource. Which pair is correct?

A) CloudWatch + CloudTrail
B) CloudTrail + CloudWatch
C) Route 53 + S3
D) KMS + EC2

**Answer: A)**

**Why:** CloudWatch focuses on monitoring; CloudTrail records AWS API/account activity.

## 39. Network Segmentation

A company wants to isolate sensitive payment workloads from ordinary application servers to reduce lateral movement. Which approach is appropriate?

A) Network segmentation
B) Flat network
C) Public access
D) Shared administrator account

**Answer: A)**

**Why:** Segmentation restricts communication paths and limits lateral movement.

## 40. Complete Architecture

A company needs DNS, global content delivery, web protection, traffic distribution and scalable compute. Which architecture best matches these requirements?

A) Route 53 → CloudFront/WAF → Load Balancer → Auto Scaling/EC2
B) S3 → KMS → IAM only
C) RDS → Route 53 → DHCP only
D) CloudTrail → NAT → ECR only

**Answer: A)**

**Why:** The services map directly to DNS, CDN/web protection, traffic distribution and scalable compute.

# Final 60-Second AWS Map

| Requirement | Think |
|---|---|
| Virtual server | EC2 |
| Object storage | S3 |
| Relational DB | RDS |
| Cloud network | VPC |
| Identity/access | IAM |
| Encryption keys | KMS |
| Monitoring | CloudWatch |
| AWS API audit | CloudTrail |
| DNS | Route 53 |
| Distribute traffic | ELB |
| Increase/decrease capacity | Auto Scaling |
| CDN | CloudFront |
| Web attacks | WAF |
| Stateful resource firewall | Security Group |
| Stateless subnet filter | NACL |
| Private subnet → Internet | NAT Gateway |
| VPC → Internet | Internet Gateway |
| Dedicated hybrid connection | Direct Connect |
| Encrypted hybrid connection | VPN |
| Secrets/passwords | Secrets Manager |
| Docker images | ECR |
| Containers | ECS |
| Kubernetes | EKS |
| Data stored | Encryption at rest |
| Data moving | TLS / encryption in transit |
| Data loss target | RPO |
| Recovery time target | RTO |
| One AZ failure | Multi-AZ |
| Region failure | Multi-Region |

**For the final 3 days:** memorize the service-to-requirement mapping first. Do not spend hours learning AWS internals that are unlikely to appear in basic scenario MCQs.
