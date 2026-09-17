# Accenture Cloud + Cloud Security — Part 3
## Mixed Accenture-Style MCQ + Scenario Practice

**Purpose:** Final application-focused practice after completing Part 1 (theory) and Part 2 (one-word concept recognition).

**Format:** Scenario/concept question → 4 options → answer + short explanation.

**Important:** These are original practice questions, not official or leaked Accenture questions. They are designed to test concept recognition, application, and common traps.

**Total Questions: 215**

## Recommended method
1. Attempt without looking at the answer.
2. Give yourself about 30–45 seconds for normal questions and up to 60 seconds for scenarios.
3. Mark every question as **Correct / Partial / Wrong**.
4. For wrong answers, identify the concept you confused rather than simply memorizing the answer.
5. Your target is fast recognition, not advanced cloud architecture.

## Q1. A startup wants to deploy code while avoiding management of the underlying servers and operating system. Which cloud model fits best?

A. IaaS
B. PaaS
C. SaaS
D. Private Cloud

**Answer: B. PaaS**

## Q2. A company wants full control over the operating system of its cloud virtual machine. Which model is most appropriate?

A. SaaS
B. PaaS
C. IaaS
D. FaaS

**Answer: C. IaaS**

## Q3. Employees only need to use an online CRM application and do not manage its infrastructure. Which model is this?

A. IaaS
B. PaaS
C. SaaS
D. NaaS

**Answer: C. SaaS**

## Q4. An application automatically adds and removes servers as traffic changes. What cloud characteristic is demonstrated?

A. Durability
B. Elasticity
C. Latency
D. Multitenancy

**Answer: B. Elasticity**

## Q5. A company uses provider infrastructure shared by multiple customers. What deployment model is this?

A. Private cloud
B. Public cloud
C. Hybrid cloud
D. Community cloud

**Answer: B. Public cloud**

## Q6. A company keeps its database on-premises but runs its application tier in a public cloud. What model is this?

A. Public
B. Private
C. Hybrid
D. SaaS

**Answer: C. Hybrid**

## Q7. An application must remain available even if one isolated infrastructure location fails. What deployment strategy is most relevant?

A. Single AZ
B. Multi-AZ
C. Single subnet
D. Single instance

**Answer: B. Multi-AZ**

## Q8. Which cloud component provides a logically isolated virtual network?

A. VPC
B. IAM
C. KMS
D. WAF

**Answer: A. VPC**

## Q9. A database must not be directly reachable from the public Internet. Where should it normally be placed?

A. Public subnet
B. Private subnet
C. Internet gateway
D. Edge subnet

**Answer: B. Private subnet**

## Q10. A web server must receive Internet traffic and has appropriate routing and security rules. Which subnet is generally appropriate?

A. Private subnet
B. Public subnet
C. Isolated subnet
D. Management-only subnet

**Answer: B. Public subnet**

## Q11. A private instance needs outbound Internet access for software updates but should not accept unsolicited inbound Internet connections. What is appropriate?

A. Internet Gateway
B. NAT Gateway
C. WAF
D. NACL only

**Answer: B. NAT Gateway**

## Q12. Which component determines where traffic is routed inside a VPC?

A. Route table
B. Security group
C. IAM role
D. KMS

**Answer: A. Route table**

## Q13. Which route represents the default IPv4 destination?

A. 127.0.0.1/32
B. 10.0.0.0/8
C. 0.0.0.0/0
D. 255.255.255.255/32

**Answer: C. 0.0.0.0/0**

## Q14. Which cloud control acts as a stateful virtual firewall around a resource?

A. NACL
B. Security Group
C. WAF
D. CloudTrail

**Answer: B. Security Group**

## Q15. Which cloud control is subnet-level and stateless?

A. Security Group
B. NACL
C. IAM
D. WAF

**Answer: B. NACL**

## Q16. An EC2 workload needs access to an S3 bucket without storing long-lived credentials in code. What should be used?

A. IAM Role
B. IAM Group
C. Password file
D. Public key in source

**Answer: A. IAM Role**

## Q17. An application only needs read access to one storage bucket. Which principle should guide its permissions?

A. Full trust
B. Least privilege
C. Public access
D. Default allow

**Answer: B. Least privilege**

## Q18. An administrator must use a password plus an OTP to sign in. What security mechanism is being used?

A. NAT
B. MFA
C. NACL
D. Hashing

**Answer: B. MFA**

## Q19. A cloud administrator wants to know which identity deleted a resource through an API call. Which service is most relevant?

A. CloudWatch
B. CloudTrail
C. KMS
D. WAF

**Answer: B. CloudTrail**

## Q20. An engineer wants to monitor EC2 CPU utilization and create alerts from metrics. Which service is most relevant?

A. CloudTrail
B. CloudWatch
C. IAM
D. Route 53

**Answer: B. CloudWatch**

## Q21. Customer data stored on disk must be protected if storage media is accessed. What protection is relevant?

A. Encryption at rest
B. TLS
C. NAT
D. DNS

**Answer: A. Encryption at rest**

## Q22. Data traveling between a browser and web server should be encrypted. Which technology is most relevant?

A. ARP
B. TLS
C. DHCP
D. NAT

**Answer: B. TLS**

## Q23. A company needs to manage encryption keys in AWS. Which service is designed for this?

A. KMS
B. CloudTrail
C. Route 53
D. CloudFront

**Answer: A. KMS**

## Q24. An API key was accidentally committed to Git. What should be done first?

A. Ignore it
B. Rotate/revoke it
C. Make repository public
D. Put it in comments

**Answer: B. Rotate/revoke it**

## Q25. A web application needs protection against malicious HTTP requests. Which control is most relevant?

A. WAF
B. NACL only
C. DHCP
D. NAT

**Answer: A. WAF**

## Q26. An intrusion detection system should primarily alert administrators rather than block traffic. Which control fits?

A. IPS
B. IDS
C. WAF
D. NAT

**Answer: B. IDS**

## Q27. A security control should detect and actively block malicious traffic. Which fits?

A. IDS
B. IPS
C. DNS
D. DHCP

**Answer: B. IPS**

## Q28. A website is flooded by traffic originating from thousands of distributed machines. What is this?

A. Phishing
B. DDoS
C. ARP
D. DNS

**Answer: B. DDoS**

## Q29. A private storage bucket becomes publicly readable due to an incorrect configuration. What is the primary issue?

A. Multitenancy
B. Misconfiguration
C. Latency
D. Elasticity

**Answer: B. Misconfiguration**

## Q30. A company wants no identity or network location to be trusted automatically. Which security model fits?

A. Zero Trust
B. Public Cloud
C. NAT
D. PaaS

**Answer: A. Zero Trust**

## Q31. A company can tolerate losing at most 10 minutes of transactions. Which metric represents this?

A. RTO
B. RPO
C. MTTR
D. SLA

**Answer: B. RPO**

## Q32. A service must be restored within 30 minutes after a disaster. Which metric represents this?

A. RPO
B. RTO
C. TTL
D. MTBF

**Answer: B. RTO**

## Q33. A company needs to connect two private networks securely over the Internet. Which solution fits?

A. Site-to-site VPN
B. Public DNS
C. NACL
D. CDN

**Answer: A. Site-to-site VPN**

## Q34. Which protocol suite is commonly associated with secure IP-based VPNs?

A. IPsec
B. FTP
C. SMTP
D. ARP

**Answer: A. IPsec**

## Q35. Which DNS record maps a hostname to an IPv4 address?

A. AAAA
B. A
C. MX
D. CNAME

**Answer: B. A**

## Q36. Which DNS record maps a hostname to an IPv6 address?

A. A
B. MX
C. AAAA
D. TXT

**Answer: C. AAAA**

## Q37. Which DNS record identifies mail servers for a domain?

A. MX
B. A
C. AAAA
D. CNAME

**Answer: A. MX**

## Q38. A DNS alias points one hostname to another hostname. Which record is appropriate?

A. MX
B. CNAME
C. AAAA
D. PTR

**Answer: B. CNAME**

## Q39. A DNS change is not immediately visible to every client because cached answers remain valid. What concept explains this?

A. TTL
B. MFA
C. RPO
D. IAM

**Answer: A. TTL**

## Q40. A service needs to distribute incoming requests across multiple application servers. What should be used?

A. Load balancer
B. KMS
C. IAM
D. DHCP

**Answer: A. Load balancer**

## Q41. A reverse proxy should terminate TLS and route requests to backend services. Which component is appropriate?

A. Reverse proxy
B. NAT gateway
C. DHCP server
D. DNS resolver

**Answer: A. Reverse proxy**

## Q42. A company wants to reduce exposure by allowing only explicitly approved network sources. Which policy is this?

A. Allowlist
B. Blocklist
C. Default allow
D. Broadcast

**Answer: A. Allowlist**

## Q43. A company wants all traffic denied unless a rule explicitly permits it. Which policy is this?

A. Default allow
B. Default deny
C. Open routing
D. Public access

**Answer: B. Default deny**

## Q44. A user has successfully logged in but cannot access a storage bucket. Which concept most likely explains the failure?

A. Authentication
B. Authorization
C. Encryption
D. Routing

**Answer: B. Authorization**

## Q45. A system verifies that a user is really who they claim to be. Which concept is this?

A. Authorization
B. Authentication
C. Accounting
D. Encryption

**Answer: B. Authentication**

## Q46. A cloud account requires password plus hardware security key. Which concept is this?

A. MFA
B. NAT
C. CIDR
D. WAF

**Answer: A. MFA**

## Q47. An application receives administrator permissions although it only reads one bucket. What security problem exists?

A. Least privilege
B. Excessive permissions
C. Encryption
D. Availability

**Answer: B. Excessive permissions**

## Q48. A developer places database credentials directly inside application source code. What is the primary security issue?

A. Secret exposure
B. Elasticity
C. Latency
D. Durability

**Answer: A. Secret exposure**

## Q49. Which service is intended to store sensitive passwords, tokens, and API credentials?

A. Secrets Manager
B. CloudTrail
C. CloudFront
D. Route 53

**Answer: A. Secrets Manager**

## Q50. Which cryptographic approach uses the same secret key for encryption and decryption?

A. Asymmetric
B. Symmetric
C. Hashing
D. MFA

**Answer: B. Symmetric**

## Q51. Which cryptographic approach uses a public/private key pair?

A. Symmetric
B. Asymmetric
C. Hashing
D. NAT

**Answer: B. Asymmetric**

## Q52. Which operation normally produces a fixed-size digest and is designed to be one-way?

A. Hashing
B. Routing
C. Encryption
D. Compression

**Answer: A. Hashing**

## Q53. What should normally be used to store passwords securely for verification?

A. Plaintext
B. Password hashing
C. Reversible encryption only
D. Base64

**Answer: B. Password hashing**

## Q54. What unique random value is commonly added to passwords before hashing?

A. Salt
B. Nonce
C. TTL
D. Token

**Answer: A. Salt**

## Q55. What binds an identity to a public key in PKI?

A. Certificate
B. NACL
C. Route table
D. Subnet

**Answer: A. Certificate**

## Q56. Who typically issues trusted digital certificates?

A. Certificate Authority
B. NAT Gateway
C. Load Balancer
D. DNS

**Answer: A. Certificate Authority**

## Q57. Which mechanism instructs browsers to use HTTPS for a website?

A. HSTS
B. DHCP
C. ARP
D. NAT

**Answer: A. HSTS**

## Q58. A system needs to record cloud API activity for investigation. What capability is required?

A. Audit logging
B. Elasticity
C. Caching
D. Compression

**Answer: A. Audit logging**

## Q59. Which principle uses multiple independent security controls to reduce the impact of one failure?

A. Defense in depth
B. Multitenancy
C. Scalability
D. Caching

**Answer: A. Defense in depth**

## Q60. Which term describes the set of exposed points through which attackers may interact with a system?

A. Attack surface
B. Availability
C. Throughput
D. Durability

**Answer: A. Attack surface**

## Q61. A company wants to limit request frequency to protect an API from abuse. What control is appropriate?

A. Rate limiting
B. NAT
C. DNS
D. Subnetting

**Answer: A. Rate limiting**

## Q62. Which attack attempts to trick a victim into clicking a malicious link and revealing credentials?

A. Phishing
B. DDoS
C. ARP
D. STP

**Answer: A. Phishing**

## Q63. A targeted phishing campaign is sent specifically to a company's finance manager. What is it called?

A. Spear phishing
B. Broadcast
C. NAT
D. Brute force

**Answer: A. Spear phishing**

## Q64. An attacker falsifies the source identity of network communication. What is this generally called?

A. Spoofing
B. Hashing
C. Encryption
D. Elasticity

**Answer: A. Spoofing**

## Q65. An attacker intercepts communication between two parties. What attack is this?

A. MITM
B. RPO
C. NACL
D. VLAN

**Answer: A. MITM**

## Q66. An attacker captures network packets to inspect their contents. What is this?

A. Sniffing
B. Scaling
C. Routing
D. Caching

**Answer: A. Sniffing**

## Q67. An attacker repeatedly tries many passwords against an account. What attack is this?

A. Brute force
B. DDoS
C. Phishing
D. WAF

**Answer: A. Brute force**

## Q68. An attacker uses leaked username/password pairs against another service. What attack is this?

A. Credential stuffing
B. Hashing
C. VPN
D. NAT

**Answer: A. Credential stuffing**

## Q69. An attacker reuses previously captured valid authentication data. What attack is this?

A. Replay
B. DDoS
C. VLAN
D. DNS

**Answer: A. Replay**

## Q70. An attacker sends forged ARP information to redirect local traffic. What is this?

A. ARP spoofing
B. DNS caching
C. MFA
D. RPO

**Answer: A. ARP spoofing**

## Q71. An attacker provides forged DNS responses to redirect users. What is this?

A. DNS spoofing
B. ARP
C. STP
D. NAT

**Answer: A. DNS spoofing**

## Q72. Which malware commonly encrypts files and demands payment?

A. Ransomware
B. Worm
C. Trojan
D. Spyware

**Answer: A. Ransomware**

## Q73. Which malware disguises itself as legitimate software?

A. Trojan
B. Worm
C. Ransomware
D. Firewall

**Answer: A. Trojan**

## Q74. Which malware can self-propagate across systems?

A. Worm
B. Trojan
C. Phishing
D. WAF

**Answer: A. Worm**

## Q75. A company wants to isolate production and development workloads. What network technique is appropriate?

A. Segmentation
B. Broadcasting
C. Port forwarding
D. Caching

**Answer: A. Segmentation**

## Q76. A switch link needs to carry traffic for multiple VLANs. What type of port is appropriate?

A. Access
B. Trunk
C. Loopback
D. Console

**Answer: B. Trunk**

## Q77. A switch port connects an ordinary endpoint to one VLAN. What type is normally used?

A. Trunk
B. Access
C. WAN
D. Loopback

**Answer: B. Access**

## Q78. Which protocol helps prevent Layer 2 switching loops?

A. STP
B. HTTP
C. DHCP
D. SMTP

**Answer: A. STP**

## Q79. A network has excessive broadcast traffic caused by a Layer 2 loop. Which protocol helps prevent this?

A. STP
B. DNS
C. TLS
D. NAT

**Answer: A. STP**

## Q80. A host needs automatic IP configuration. Which protocol should be used?

A. DHCP
B. DNS
C. FTP
D. SSH

**Answer: A. DHCP**

## Q81. A host needs to resolve a domain name into an IP address. Which service is used?

A. DNS
B. DHCP
C. ARP
D. STP

**Answer: A. DNS**

## Q82. An IPv4 host needs to discover the MAC address associated with a local IP. Which protocol is used?

A. ARP
B. DNS
C. DHCP
D. TLS

**Answer: A. ARP**

## Q83. A company wants many private IPv4 hosts to share one public address using ports. What technique is this?

A. PAT
B. STP
C. CIDR
D. MFA

**Answer: A. PAT**

## Q84. A network administrator wants to divide a large IP network into smaller logical networks. What is this?

A. Subnetting
B. Broadcasting
C. Hashing
D. Encryption

**Answer: A. Subnetting**

## Q85. How many total IPv4 addresses are in a /26 subnet?

A. 32
B. 64
C. 128
D. 256

**Answer: B. 64**

## Q86. How many traditional usable IPv4 host addresses are in a /26 subnet?

A. 30
B. 62
C. 64
D. 126

**Answer: B. 62**

## Q87. How many total IPv4 addresses are in a /24 subnet?

A. 64
B. 128
C. 256
D. 512

**Answer: C. 256**

## Q88. Which address is the IPv4 loopback address?

A. 10.0.0.1
B. 127.0.0.1
C. 169.254.1.1
D. 192.168.1.1

**Answer: B. 127.0.0.1**

## Q89. Which range is an RFC1918 private IPv4 range?

A. 8.8.8.0/24
B. 10.0.0.0/8
C. 1.1.1.0/24
D. 172.32.0.0/16

**Answer: B. 10.0.0.0/8**

## Q90. A host cannot obtain an IPv4 address from DHCP and self-assigns an address beginning with 169.254. What mechanism is involved?

A. APIPA
B. NAT
C. CIDR
D. DNS

**Answer: A. APIPA**

## Q91. Which protocol is connection-oriented and provides reliable ordered delivery?

A. UDP
B. TCP
C. ICMP
D. ARP

**Answer: B. TCP**

## Q92. Which transport protocol is connectionless and has lower overhead?

A. TCP
B. UDP
C. HTTP
D. TLS

**Answer: B. UDP**

## Q93. What is the correct TCP connection-establishment sequence?

A. ACK, SYN, SYN-ACK
B. SYN, SYN-ACK, ACK
C. SYN, ACK, FIN
D. FIN, ACK, SYN

**Answer: B. SYN, SYN-ACK, ACK**

## Q94. Which protocol is commonly used for secure remote administration?

A. SSH
B. FTP
C. HTTP
D. ARP

**Answer: A. SSH**

## Q95. Which protocol is commonly used for web communication?

A. HTTP
B. ARP
C. DHCP
D. ICMP

**Answer: A. HTTP**

## Q96. Which protocol secures HTTP traffic?

A. HTTPS
B. FTP
C. SMTP
D. ARP

**Answer: A. HTTPS**

## Q97. Which protocol is commonly used to send email?

A. SMTP
B. DNS
C. DHCP
D. ICMP

**Answer: A. SMTP**

## Q98. Which protocol is commonly used for diagnostic reachability testing with ping?

A. ICMP
B. FTP
C. SMTP
D. SSH

**Answer: A. ICMP**

## Q99. A packet's TTL reaches zero while being routed. What normally happens?

A. It is forwarded forever
B. It is discarded
C. It becomes encrypted
D. It becomes a frame

**Answer: B. Discarded**

## Q100. Which device primarily forwards Ethernet frames using MAC addresses?

A. Router
B. Switch
C. Gateway
D. Firewall

**Answer: B. Switch**

## Q101. Which device primarily forwards IP packets between networks?

A. Hub
B. Switch
C. Router
D. Repeater

**Answer: C. Router**

## Q102. Which device repeats incoming signals to all connected ports?

A. Hub
B. Router
C. Firewall
D. Load balancer

**Answer: A. Hub**

## Q103. A company needs traffic distribution across several backend servers. Which component fits?

A. Load balancer
B. KMS
C. IAM
D. DHCP

**Answer: A. Load balancer**

## Q104. Which cloud concept means the provider and customer each have different security responsibilities?

A. Shared responsibility
B. Zero routing
C. Multitenancy only
D. Public access

**Answer: A. Shared responsibility**

## Q105. Who is generally responsible for configuring customer IAM permissions in a cloud account?

A. Customer
B. ISP
C. Certificate Authority
D. DNS provider

**Answer: A. Customer**

## Q106. Who generally secures the physical infrastructure of a public cloud provider?

A. Customer
B. Cloud provider
C. Application user
D. DNS resolver

**Answer: B. Cloud provider**

## Q107. A company says 'the provider handles security, so our public storage configuration does not matter.' What is the correct assessment?

A. Correct
B. Incorrect
C. Only true for SaaS
D. Only true for DNS

**Answer: B. Incorrect**

## Q108. Which concept describes an isolated cloud location within a region?

A. Availability Zone
B. VPC
C. Subnet
D. Region

**Answer: A. Availability Zone**

## Q109. Which concept describes a geographic cloud location containing multiple isolated locations?

A. Region
B. Subnet
C. AZ
D. VPC

**Answer: A. Region**

## Q110. A company wants low-latency users in different continents to access nearby infrastructure. What should it consider?

A. Multiple regions
B. One subnet
C. One IAM role
D. One security group

**Answer: A. Multiple regions**

## Q111. A cloud application has one server and no redundancy. Which property is most at risk?

A. Availability
B. Hashing
C. Authentication
D. Encryption

**Answer: A. Availability**

## Q112. A storage system retains data reliably but is temporarily inaccessible. Which distinction applies?

A. Durability vs availability
B. IaaS vs SaaS
C. TCP vs UDP
D. IAM vs KMS

**Answer: A. Durability vs availability**

## Q113. A company wants to recover service after a major infrastructure disaster. What discipline is relevant?

A. Disaster recovery
B. DNS
C. NAT
D. Hashing

**Answer: A. Disaster recovery**

## Q114. A backup is primarily created to support what goal?

A. Recovery
B. Routing
C. Authentication
D. Elasticity

**Answer: A. Recovery**

## Q115. Which metric answers 'How much data can we afford to lose?'

A. RTO
B. RPO
C. TTL
D. MTTR

**Answer: B. RPO**

## Q116. Which metric answers 'How quickly must service be restored?'

A. RPO
B. RTO
C. TTL
D. CIDR

**Answer: B. RTO**

## Q117. A system should recover from one failed server without service interruption. What concept is relevant?

A. Redundancy
B. Hashing
C. DNS
D. MFA

**Answer: A. Redundancy**

## Q118. A company wants to limit the blast radius of a compromised workload. What control is useful?

A. Segmentation
B. Public access
C. Default allow
D. Shared password

**Answer: A. Segmentation**

## Q119. Which cloud security approach says access should be continuously verified rather than trusted based on location?

A. Zero Trust
B. Public Cloud
C. NAT
D. PaaS

**Answer: A. Zero Trust**

## Q120. A security architecture uses firewall + WAF + IAM + MFA instead of relying on one control. What principle is this?

A. Defense in depth
B. Multitenancy
C. Elasticity
D. Caching

**Answer: A. Defense in depth**

## Q121. An application is reachable from the Internet only through a load balancer, while the database is private. What principle does this illustrate?

A. Layered exposure
B. Public database
C. Default allow
D. Single tenancy

**Answer: A. Layered exposure**

## Q122. A database server is placed directly on a public subnet with unrestricted inbound access. What is the main concern?

A. Excessive exposure
B. Elasticity
C. Durability
D. Compression

**Answer: A. Excessive exposure**

## Q123. An administrator opens SSH from 0.0.0.0/0 unnecessarily. What security issue is this?

A. Excessive exposure
B. Hash collision
C. RPO
D. Multitenancy

**Answer: A. Excessive exposure**

## Q124. A web application receives malicious SQL-like input through HTTP requests. Which layer is most directly relevant to filtering?

A. WAF
B. NAT Gateway
C. DHCP
D. ARP

**Answer: A. WAF**

## Q125. A service receives millions of unwanted requests from many locations. Which combination may help reduce impact?

A. Rate limiting and DDoS protection
B. DHCP and ARP
C. SMTP and FTP
D. KMS and IAM only

**Answer: A. Rate limiting and DDoS protection**

## Q126. A company wants an audit trail of changes made through cloud management APIs. What should it enable?

A. CloudTrail/audit logging
B. NAT
C. WAF
D. DHCP

**Answer: A. CloudTrail/audit logging**

## Q127. A company wants application performance metrics and alarms. What should it use?

A. CloudWatch/monitoring
B. CloudTrail only
C. KMS
D. IAM

**Answer: A. CloudWatch/monitoring**

## Q128. A cloud engineer needs to allow HTTPS but not HTTP to a VM. Which port should be allowed?

A. 22
B. 53
C. 80
D. 443

**Answer: D. 443**

## Q129. A cloud engineer needs SSH access to a Linux VM. Which TCP port is standard?

A. 21
B. 22
C. 80
D. 443

**Answer: B. 22**

## Q130. Which port is commonly associated with DNS queries?

A. 22
B. 53
C. 110
D. 443

**Answer: B. 53**

## Q131. Which port is commonly associated with HTTP?

A. 22
B. 53
C. 80
D. 443

**Answer: C. 80**

## Q132. Which port is commonly associated with HTTPS?

A. 22
B. 53
C. 80
D. 443

**Answer: D. 443**

## Q133. A private subnet has no route to a NAT gateway. What is the likely result for outbound Internet access?

A. It will work automatically
B. It will fail
C. It becomes public automatically
D. It uses DNS instead

**Answer: B. It will fail**

## Q134. A public subnet has an Internet Gateway but its security group blocks inbound HTTPS. Can HTTPS traffic reach the instance?

A. Yes, always
B. No
C. Only through DNS
D. Only through DHCP

**Answer: B. No**

## Q135. A route table points Internet-bound traffic to an Internet Gateway, but the resource has no public addressing where required. What should you conclude?

A. A route alone does not automatically make the resource public
B. It is always public
C. It becomes a NAT gateway
D. It disables IAM

**Answer: A. A route alone does not automatically make the resource public**

## Q136. A private application needs access to an external package repository. What is the key direction of connectivity?

A. Outbound Internet
B. Inbound Internet
C. Broadcast
D. Loopback

**Answer: A. Outbound Internet**

## Q137. A company wants to prevent direct Internet access to its database while allowing the application tier to connect to it. What design is appropriate?

A. Private database subnet + controlled application access
B. Public database with 0.0.0.0/0
C. Database on the Internet Gateway
D. Disable all authentication

**Answer: A. Private database subnet + controlled application access**

## Q138. An attacker steals an administrator password. Which additional control most reduces the chance that the password alone is sufficient?

A. MFA
B. NAT
C. DNS
D. CIDR

**Answer: A. MFA**

## Q139. A service account has permissions to delete every resource although it only needs to read logs. What should be changed?

A. Least privilege
B. Public access
C. Elasticity
D. TTL

**Answer: A. Least privilege**

## Q140. A company wants temporary credentials for a workload instead of long-lived access keys. What is most appropriate in AWS-style IAM?

A. IAM Role
B. IAM Group
C. Public bucket
D. Hard-coded key

**Answer: A. IAM Role**

## Q141. A developer needs to retrieve a secret without placing it in source code. Which service category is appropriate?

A. Secrets Manager
B. DNS
C. Load balancer
D. NACL

**Answer: A. Secrets Manager**

## Q142. A TLS certificate has expired. What security mechanism is affected?

A. Certificate validation
B. NAT
C. Subnetting
D. DHCP

**Answer: A. Certificate validation**

## Q143. A user connects to an HTTPS website and the server certificate does not match the hostname. What should a secure client do?

A. Reject/warn about validation failure
B. Ignore it
C. Disable TLS
D. Use FTP

**Answer: A. Reject/warn about validation failure**

## Q144. A company wants to encrypt data before storing it in cloud object storage. What protection is being applied?

A. Encryption at rest
B. Encryption in transit
C. Routing
D. NAT

**Answer: A. Encryption at rest**

## Q145. A company wants to protect data while it travels from client to server. What protection is being applied?

A. Encryption in transit
B. Encryption at rest
C. Subnetting
D. Hashing

**Answer: A. Encryption in transit**

## Q146. A password database contains only salted password hashes. Why is the salt useful?

A. It makes precomputed attacks harder
B. It decrypts passwords
C. It routes traffic
D. It replaces MFA

**Answer: A. It makes precomputed attacks harder**

## Q147. A company wants to verify data was not modified in transit. Which security property is relevant?

A. Integrity
B. Availability
C. Elasticity
D. Scalability

**Answer: A. Integrity**

## Q148. A company wants to prevent unauthorized disclosure of data. Which CIA property is relevant?

A. Confidentiality
B. Integrity
C. Availability
D. Elasticity

**Answer: A. Confidentiality**

## Q149. A company wants systems accessible to authorized users when needed. Which CIA property is relevant?

A. Availability
B. Confidentiality
C. Integrity
D. Hashing

**Answer: A. Availability**

## Q150. An employee receives a fake login page that looks like the company's identity provider. What attack is most likely?

A. Phishing
B. STP
C. NAT
D. DDoS

**Answer: A. Phishing**

## Q151. A malicious actor captures packets on an insecure network and reads sensitive content. Which missing protection is most relevant?

A. Encryption in transit
B. RTO
C. NACL
D. Elasticity

**Answer: A. Encryption in transit**

## Q152. A company wants to securely connect remote employees to its private network. Which solution is appropriate?

A. Remote-access VPN
B. Public DNS
C. NACL only
D. CDN

**Answer: A. Remote-access VPN**

## Q153. A company wants to securely connect two office networks through the Internet. Which solution is appropriate?

A. Site-to-site VPN
B. Remote desktop only
C. WAF
D. DNS

**Answer: A. Site-to-site VPN**

## Q154. Which cloud service model leaves the customer responsible for the most infrastructure management among IaaS, PaaS and SaaS?

A. IaaS
B. PaaS
C. SaaS
D. All equal

**Answer: A. IaaS**

## Q155. A team wants to focus on application code while the provider manages the OS and platform. Which model fits?

A. IaaS
B. PaaS
C. SaaS
D. Private cloud

**Answer: B. PaaS**

## Q156. A user simply consumes a hosted email application. Which model fits?

A. IaaS
B. PaaS
C. SaaS
D. VPC

**Answer: C. SaaS**

## Q157. A company needs dedicated cloud infrastructure for one organization. Which deployment model fits?

A. Public
B. Private
C. Hybrid
D. Multitenant

**Answer: B. Private**

## Q158. A company needs both on-premises infrastructure and public cloud. Which model fits?

A. Private
B. Public
C. Hybrid
D. SaaS

**Answer: C. Hybrid**

## Q159. A cloud application should automatically scale down after a traffic spike. Which characteristic is required?

A. Elasticity
B. Durability
C. Latency
D. Authentication

**Answer: A. Elasticity**

## Q160. A company manually adds larger servers to handle increased load. What concept does this primarily demonstrate?

A. Scalability
B. MFA
C. Hashing
D. DNS

**Answer: A. Scalability**

## Q161. A cloud provider allows different customers to use shared underlying infrastructure securely. What concept is this?

A. Multitenancy
B. RPO
C. WAF
D. Subnetting

**Answer: A. Multitenancy**

## Q162. A company wants resources provisioned whenever needed rather than purchasing hardware first. What characteristic is this?

A. On-demand
B. Static
C. Offline
D. Manual

**Answer: A. On-demand**

## Q163. A cloud bill is calculated based on actual resource consumption. What concept is this?

A. Metering
B. Hashing
C. Routing
D. Authentication

**Answer: A. Metering**

## Q164. A cloud workload needs high availability within one geographic area. What should be considered first?

A. Multiple AZs
B. One instance
C. One subnet only
D. One IAM user

**Answer: A. Multiple AZs**

## Q165. A workload must survive an entire geographic region failure. What architecture may be required?

A. Multi-region
B. Single AZ
C. Single subnet
D. One security group

**Answer: A. Multi-region**

## Q166. Which component is primarily responsible for resolving domain names?

A. DNS
B. DHCP
C. NAT
D. STP

**Answer: A. DNS**

## Q167. Which component automatically leases IP configuration to clients?

A. DHCP
B. DNS
C. ARP
D. TLS

**Answer: A. DHCP**

## Q168. Which protocol maps an IPv4 local address to a MAC address?

A. ARP
B. DNS
C. DHCP
D. HTTP

**Answer: A. ARP**

## Q169. Which protocol is used to test reachability with ping?

A. ICMP
B. TCP only
C. SMTP
D. FTP

**Answer: A. ICMP**

## Q170. A user can resolve DNS but cannot connect to the server's TCP port. Which area should be investigated?

A. Network connectivity/firewall/service port
B. DNS only
C. IAM only
D. KMS

**Answer: A. Network connectivity/firewall/service port**

## Q171. A user can connect to a server by IP but not by hostname. What should be investigated first?

A. DNS
B. NAT
C. KMS
D. MFA

**Answer: A. DNS**

## Q172. A server can reach its gateway but not external destinations. What should be checked?

A. Routing/NAT/Internet path
B. Password hashing
C. WAF only
D. Certificate authority

**Answer: A. Routing/NAT/Internet path**

## Q173. A private subnet has outbound access through NAT, but return traffic for an established connection should work because NAT tracks the translation. What component is involved?

A. NAT Gateway
B. NACL only
C. DNS
D. KMS

**Answer: A. NAT Gateway**

## Q174. A network administrator wants to prevent a subnet from receiving traffic from a specific source. Which control can explicitly deny it?

A. NACL
B. Security Group
C. IAM Role
D. KMS

**Answer: A. NACL**

## Q175. A network administrator wants a stateful resource-level traffic control. Which should be used?

A. Security Group
B. NACL
C. Route table
D. DNS

**Answer: A. Security Group**

## Q176. A cloud resource should accept only HTTPS traffic. What should be configured?

A. Security rule for TCP 443
B. DNS MX record
C. RPO
D. IAM group only

**Answer: A. Security rule for TCP 443**

## Q177. A web application needs a global caching layer to reduce latency for users. Which type of service is relevant?

A. CDN
B. NACL
C. KMS
D. DHCP

**Answer: A. CDN**

## Q178. A company wants static website assets cached closer to users. Which technology is relevant?

A. CDN
B. NAT
C. IAM
D. ARP

**Answer: A. CDN**

## Q179. A company wants to reduce the number of requests reaching its origin servers by caching content at edge locations. What is this?

A. CDN
B. MFA
C. RPO
D. NACL

**Answer: A. CDN**

## Q180. A cloud application is overloaded because a single server is handling all requests. What architecture can distribute the load?

A. Load balancing
B. Hashing
C. DNS only
D. KMS

**Answer: A. Load balancing**

## Q181. A company wants to terminate TLS before forwarding requests to backend services. What component can perform this?

A. Reverse proxy/load balancer
B. DHCP
C. NAT only
D. ARP

**Answer: A. Reverse proxy/load balancer**

## Q182. A security team needs evidence of who changed IAM policies. What is most relevant?

A. Cloud audit logs/CloudTrail
B. CloudWatch CPU metric
C. NAT Gateway
D. WAF

**Answer: A. Cloud audit logs/CloudTrail**

## Q183. A security team needs an alert when CPU exceeds 80%. What capability is most relevant?

A. Cloud monitoring/CloudWatch
B. CloudTrail only
C. KMS
D. IAM

**Answer: A. Cloud monitoring/CloudWatch**

## Q184. A cloud environment has no logs for administrative API actions. What security capability is missing?

A. Auditing
B. Elasticity
C. NAT
D. Subnetting

**Answer: A. Auditing**

## Q185. An organization wants to identify suspicious behavior as it happens. What capability is most relevant?

A. Monitoring
B. Subnetting
C. Hashing
D. CIDR

**Answer: A. Monitoring**

## Q186. A company wants a security system that detects but does not automatically block suspicious network activity. Which is appropriate?

A. IDS
B. IPS
C. WAF
D. NAT

**Answer: A. IDS**

## Q187. A company wants a system positioned inline to prevent malicious traffic. Which is appropriate?

A. IPS
B. IDS
C. DNS
D. DHCP

**Answer: A. IPS**

## Q188. A company wants to protect a web application from common malicious HTTP requests. Which is appropriate?

A. WAF
B. NAT Gateway
C. Route table
D. DHCP

**Answer: A. WAF**

## Q189. A company wants to protect against distributed volumetric traffic attacks. Which category of protection is relevant?

A. DDoS protection
B. DNS caching
C. Password hashing
D. NACL only

**Answer: A. DDoS protection**

## Q190. A user enters credentials into a fake login page. What security awareness topic should address this?

A. Phishing
B. Subnetting
C. Elasticity
D. RPO

**Answer: A. Phishing**

## Q191. A stolen password is reused on many sites. Which attack becomes especially effective?

A. Credential stuffing
B. STP
C. NAT
D. DNS

**Answer: A. Credential stuffing**

## Q192. An attacker tries every common password against an account. Which attack is this?

A. Brute force
B. MITM
C. DDoS
D. ARP

**Answer: A. Brute force**

## Q193. An attacker places themselves between client and server and modifies messages. Which attack is this?

A. MITM
B. Phishing
C. RPO
D. VPC

**Answer: A. MITM**

## Q194. An attacker forges ARP replies on a local network. Which attack is this?

A. ARP spoofing
B. DDoS
C. TLS
D. MFA

**Answer: A. ARP spoofing**

## Q195. An attacker uses a malicious DNS response to redirect a domain. Which attack is this?

A. DNS spoofing
B. NACL
C. STP
D. RTO

**Answer: A. DNS spoofing**

## Q196. An organization wants users to have only the access required for their jobs. Which principle?

A. Least privilege
B. Default allow
C. Public access
D. Multitenancy

**Answer: A. Least privilege**

## Q197. An organization wants multiple security layers so one failed control does not expose everything. Which principle?

A. Defense in depth
B. Elasticity
C. Scalability
D. Metering

**Answer: A. Defense in depth**

## Q198. An organization wants to verify identity and context for every access request. Which approach?

A. Zero Trust
B. Public cloud
C. PaaS
D. NAT

**Answer: A. Zero Trust**

## Q199. A company wants to reduce the number of publicly exposed services. What should it do?

A. Reduce attack surface
B. Increase public IPs
C. Disable IAM
D. Open all ports

**Answer: A. Reduce attack surface**

## Q200. A database password appears in a public Git repository. Which action is the immediate priority?

A. Revoke/rotate the credential
B. Rename the file
C. Add a comment
D. Ignore it

**Answer: A. Revoke/rotate the credential**

## Q201. An API token should be accessible by a workload but not embedded in its image. What is appropriate?

A. Secrets management
B. Public Git
C. Hard-coded constant
D. DNS record

**Answer: A. Secrets management**

## Q202. A workload needs to encrypt objects using managed encryption keys. Which service category fits?

A. KMS
B. CloudTrail
C. Route table
D. NACL

**Answer: A. KMS**

## Q203. A cloud account's administrator wants to require a second factor. Which control?

A. MFA
B. NAT
C. CIDR
D. WAF

**Answer: A. MFA**

## Q204. A customer believes buying cloud services eliminates all responsibility for securing data. Which model disproves this assumption?

A. Shared responsibility
B. Multitenancy
C. Elasticity
D. Metering

**Answer: A. Shared responsibility**

## Q205. A company stores sensitive data in cloud storage and wants to reduce accidental public access. What should be prioritized?

A. Access controls and secure configuration
B. Public permissions
C. Anonymous access
D. Open firewall

**Answer: A. Access controls and secure configuration**

## Q206. A service must continue operating when one server fails. What design concept is relevant?

A. Redundancy
B. Hashing
C. DNS
D. MFA

**Answer: A. Redundancy**

## Q207. A service must continue operating when one AZ fails. What design concept is relevant?

A. Multi-AZ redundancy
B. Single instance
C. One subnet
D. One IAM user

**Answer: A. Multi-AZ redundancy**

## Q208. A company wants to restore service after a regional outage. What broader architecture may be needed?

A. Multi-region disaster recovery
B. One AZ
C. One subnet
D. One security group

**Answer: A. Multi-region disaster recovery**

## Q209. A company requires restoration within 1 hour. Which metric should be set to 1 hour?

A. RTO
B. RPO
C. TTL
D. CIDR

**Answer: A. RTO**

## Q210. A company can tolerate losing 15 minutes of transactions. Which metric should be set to 15 minutes?

A. RPO
B. RTO
C. TTL
D. MTBF

**Answer: A. RPO**

## Q211. A storage system is designed to preserve data even when hardware fails. Which property is emphasized?

A. Durability
B. Latency
C. Authentication
D. Elasticity

**Answer: A. Durability**

## Q212. A service is designed to remain reachable to users. Which property is emphasized?

A. Availability
B. Hashing
C. Encryption
D. Metering

**Answer: A. Availability**

## Q213. A company wants to run a complete third-party business application without managing its platform. Which model?

A. SaaS
B. PaaS
C. IaaS
D. VPC

**Answer: A. SaaS**

## Q214. A developer wants a managed runtime and deployment platform. Which model?

A. PaaS
B. IaaS
C. SaaS
D. Private cloud

**Answer: A. PaaS**

## Q215. An infrastructure engineer wants a virtual machine and full OS control. Which model?

A. IaaS
B. PaaS
C. SaaS
D. WAF

**Answer: A. IaaS**

## Final Score Interpretation

- **85%+**: Cloud concept recognition is strong enough to move on.
- **70–84%**: Patch the concepts you missed, then move on.
- **Below 70%**: Revisit the theory/one-word file for the specific weak areas before moving forward.

## Important Traps to Remember

- **Elasticity** = dynamically increase/decrease resources; **scalability** = ability to handle increased load.
- **IaaS/PaaS/SaaS** differ mainly in how much infrastructure the customer manages.
- **Public subnet does not mean automatically secure or automatically reachable**; routes and security controls still matter.
- **NAT Gateway** is for controlled outbound Internet access from private resources.
- **Security Group = stateful/resource-level**; **NACL = stateless/subnet-level**.
- **Authentication = who you are**; **authorization = what you can do**.
- **IAM Role** is preferable to hard-coded long-lived credentials for workloads.
- **CloudTrail = API/audit activity**; **CloudWatch = monitoring/metrics/logging capabilities**.
- **Encryption at rest** protects stored data; **TLS** protects data in transit.
- **WAF** protects web applications; **IDS** detects; **IPS** can prevent/block.
- **RTO = acceptable recovery time**; **RPO = acceptable data loss window**.
- **DDoS is an attack**, not a security control.
- **Shared responsibility** means the cloud provider does not automatically secure every customer configuration.

## Stop Condition

After this file, **do not continue Cloud theory**. Move to **OOP**, while keeping DSA/coding and aptitude running in parallel.