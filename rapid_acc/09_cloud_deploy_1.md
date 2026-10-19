# Accenture Cloud Deployment + AWS — 3-Day High-ROI Theory

## Core Cloud Concepts
- Public cloud: provider infrastructure shared by customers.
- Private cloud: dedicated environment for one organization.
- Hybrid cloud: on-prem/private infrastructure + public cloud.
- Multi-cloud: multiple cloud providers.

## AWS Services You Must Recognize

| Requirement | AWS service | Remember |
|---|---|---|
| Virtual servers | EC2 | Compute / VM |
| Object storage | S3 | Files, images, backups |
| Relational database | RDS | Managed MySQL/PostgreSQL/etc. |
| Virtual network | VPC | Isolated cloud network |
| Identity/permissions | IAM | Who can do what |
| Encryption keys | KMS | Key management |
| Monitoring/metrics/logs | CloudWatch | System health |
| AWS API auditing | CloudTrail | Who did what |
| DNS | Route 53 | Domain/DNS |
| Traffic distribution | ELB | Load balancing |
| Automatic capacity | Auto Scaling | Add/remove capacity |
| CDN | CloudFront | Content near users |
| Web protection | WAF | HTTP/HTTPS attacks |
| Resource firewall | Security Group | Stateful |
| Subnet firewall | NACL | Stateless |
| Private → Internet | NAT Gateway | Outbound access |
| VPC → Internet | Internet Gateway | Internet connection |
| Dedicated on-prem ↔ AWS | Direct Connect | Dedicated link |
| Encrypted on-prem ↔ AWS | Site-to-Site VPN | VPN tunnel |
| Secrets | Secrets Manager | Passwords/API keys |
| Container images | ECR | Docker images |
| Containers | ECS | Container orchestration |
| Kubernetes | EKS | Managed Kubernetes |

## Shared Responsibility
AWS secures the infrastructure **of** the cloud. Customers remain responsible for security **in** the cloud, with exact responsibility depending on the service.

For EC2, remember:
- AWS: physical infrastructure/hypervisor
- Customer: guest OS, patches, applications and configuration

## Identity
- Authentication = **Who are you?**
- Authorization = **What can you do?**
- IAM = AWS identity/access control.
- MFA = additional authentication factor.
- SSO = one login across applications.
- Least privilege = minimum required permissions.

## Encryption
- At rest = stored data.
- In transit = moving data.
- TLS/HTTPS = encryption in transit for web traffic.
- KMS = key management.
- Customer-managed keys = customer-controlled KMS keys.

Do not memorize the absolute claim that customer-managed keys automatically mean “AWS cannot access the data”; actual access depends on architecture, permissions and service behavior.

## Network Security
- Security Group = stateful, resource-level firewall.
- NACL = stateless, subnet-level filtering.
- WAF = web/application traffic protection.
- Segmentation = isolate workloads and reduce lateral movement.

## Hybrid Connectivity
- VPN = encrypted connection over Internet.
- Direct Connect = dedicated/private connectivity to AWS.

**Shortcut:** encrypted Internet path → VPN; dedicated link → Direct Connect.

## Availability / DR
- Multi-AZ = resilience against an Availability Zone failure.
- Multi-Region = resilience against regional failure.
- Backup = recoverable copy.
- Replication = maintain copies in another location/system.
- RPO = acceptable **data loss**.
- RTO = acceptable **recovery time**.

## Monitoring vs Auditing
- CloudWatch → metrics, logs, alarms, system/application behavior.
- CloudTrail → AWS API/account activity and audit trail.
- SIEM → centralized security-event collection/analysis.

## Scaling
- Load Balancer → distributes incoming requests.
- Auto Scaling → adjusts compute capacity.
- Health checks → identify unhealthy targets.

## Common Architecture
User → Route 53 → CloudFront/WAF → Load Balancer → Auto Scaling/EC2 → RDS

Supporting:
S3 = object/static storage
IAM = access
KMS = keys
CloudWatch = monitoring
CloudTrail = auditing
Secrets Manager = secrets

## 3-Day Priority
MUST KNOW:
1. EC2
2. S3
3. RDS
4. VPC
5. IAM
6. KMS
7. CloudWatch vs CloudTrail
8. Security Group vs NACL
9. VPN vs Direct Connect
10. ELB vs Auto Scaling
11. Route 53
12. CloudFront
13. WAF
14. Encryption at rest vs transit
15. Backup vs replication
16. RPO vs RTO
17. Multi-AZ vs Multi-Region
18. Shared Responsibility
19. SSO/MFA/least privilege
20. Network segmentation

Skip deep AWS internals unless your paid material specifically contains them.
