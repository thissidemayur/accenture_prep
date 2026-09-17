# Accenture Cloud + Cloud Security — One-Word MCQ Bank

**Purpose:** Rapid concept recognition for Accenture-style cloud and cloud-security questions.

**Format:** Question → one-word/short-answer response. No options.

**Important:** These are original practice questions, not official or leaked Accenture questions. They are aligned to the concepts in the accompanying Cloud + Cloud Security theory notes.

**Total Questions: 245**

## How to use
- Cover the answers and answer from memory.
- Keep answers to one word or a very short phrase.
- Mark **Correct / Partial / Wrong**.
- If you miss a question, revisit only that concept in the theory file.
- Pay special attention to scenario questions: identify the *problem* before thinking about the service.

## Cloud Fundamentals

### Q1. What computing model provides resources on demand over a network?
**Answer:** Cloud

### Q2. What term describes increasing capacity to handle more workload?
**Answer:** Scalability

### Q3. What term describes automatic increase and decrease of resources with demand?
**Answer:** Elasticity

### Q4. What model charges according to resource consumption?
**Answer:** Pay-as-you-go

### Q5. What term describes multiple customers sharing provider infrastructure?
**Answer:** Multitenancy

### Q6. What service model provides virtual machines and networking?
**Answer:** IaaS

### Q7. What service model provides a managed application platform?
**Answer:** PaaS

### Q8. What service model provides a complete application to users?
**Answer:** SaaS

### Q9. Which service model gives the customer the most infrastructure control?
**Answer:** IaaS

### Q10. Which service model requires the least infrastructure management by the customer?
**Answer:** SaaS

### Q11. Gmail is generally classified as which cloud service model?
**Answer:** SaaS

### Q12. EC2 is generally classified as which cloud service model?
**Answer:** IaaS

### Q13. A managed platform where developers deploy code without managing servers is what model?
**Answer:** PaaS

### Q14. What deployment model uses provider infrastructure shared by multiple customers?
**Answer:** Public

### Q15. What deployment model is dedicated to one organization?
**Answer:** Private

### Q16. What deployment model combines private/on-premises and public cloud?
**Answer:** Hybrid

### Q17. What term means resources can be shared dynamically among customers?
**Answer:** Multitenancy

### Q18. What characteristic lets cloud resources be provisioned when needed?
**Answer:** On-demand

### Q19. What characteristic measures cloud resource consumption for billing?
**Answer:** Metering

### Q20. What cloud characteristic enables resources to be added and removed automatically?
**Answer:** Elasticity

## Regions and Availability

### Q21. What is a geographical cloud location containing isolated infrastructure locations?
**Answer:** Region

### Q22. What is an isolated infrastructure location within a region?
**Answer:** Availability Zone

### Q23. What deployment pattern protects an application from failure of one AZ?
**Answer:** Multi-AZ

### Q24. What property means a service remains accessible when needed?
**Answer:** Availability

### Q25. What concept means isolating failures so one failure has limited impact?
**Answer:** Fault isolation

### Q26. What is the purpose of deploying across multiple AZs?
**Answer:** Resilience

### Q27. What should you use to isolate workloads across geographic locations?
**Answer:** Regions

### Q28. What should you use to improve availability within one region?
**Answer:** Availability Zones

### Q29. What term describes the ability to continue operating after infrastructure failure?
**Answer:** Resilience

### Q30. What is an AZ commonly abbreviated as?
**Answer:** AZ

## VPC and Cloud Networking

### Q31. What is a logically isolated virtual network in the cloud?
**Answer:** VPC

### Q32. What divides a VPC address range into smaller networks?
**Answer:** Subnet

### Q33. What subnet is designed for resources with Internet connectivity?
**Answer:** Public

### Q34. What subnet is designed for resources without direct public Internet exposure?
**Answer:** Private

### Q35. What determines where network traffic is forwarded?
**Answer:** Route table

### Q36. What is the default IPv4 route?
**Answer:** 0.0.0.0/0

### Q37. What is the default IPv6 route?
**Answer:** ::/0

### Q38. What cloud component provides a path between a VPC and the Internet?
**Answer:** Internet Gateway

### Q39. What component allows private resources to initiate outbound Internet connections?
**Answer:** NAT Gateway

### Q40. A private server needs software updates from the Internet. What should it use?
**Answer:** NAT Gateway

### Q41. What should normally contain a database that must not be Internet-facing?
**Answer:** Private subnet

### Q42. What should commonly contain an Internet-facing web tier?
**Answer:** Public subnet

### Q43. What cloud networking component controls destination routes?
**Answer:** Route table

### Q44. What component translates private addresses for outbound Internet access?
**Answer:** NAT

### Q45. What type of gateway is used for direct VPC Internet connectivity?
**Answer:** Internet Gateway

### Q46. What network component logically isolates cloud resources?
**Answer:** VPC

### Q47. What network object is associated with a specific IP address range inside a VPC?
**Answer:** Subnet

### Q48. What is the purpose of a private subnet?
**Answer:** Isolation

### Q49. What is the purpose of a public subnet?
**Answer:** Internet-access

### Q50. What is the key security principle for database placement?
**Answer:** Private subnet

## Security Groups and NACL

### Q51. What acts as a virtual firewall around a cloud resource?
**Answer:** Security Group

### Q52. Are security groups stateful or stateless?
**Answer:** Stateful

### Q53. What controls traffic at subnet level and is stateless?
**Answer:** NACL

### Q54. Are NACLs stateful or stateless?
**Answer:** Stateless

### Q55. Which control normally uses allow rules only?
**Answer:** Security Group

### Q56. Which control supports both allow and deny rules?
**Answer:** NACL

### Q57. Resource-level cloud traffic control?
**Answer:** Security Group

### Q58. Subnet-level cloud traffic control?
**Answer:** NACL

### Q59. What protocol normally uses TCP port 443 for HTTPS?
**Answer:** HTTPS

### Q60. What protocol normally uses TCP port 22 for SSH?
**Answer:** SSH

### Q61. What security control should allow only required inbound ports?
**Answer:** Security Group

### Q62. What security principle says unnecessary ports should be closed?
**Answer:** Least-privilege

### Q63. What control can explicitly deny traffic at subnet level?
**Answer:** NACL

### Q64. What is the state model of a security group?
**Answer:** Stateful

### Q65. What is the state model of a NACL?
**Answer:** Stateless

### Q66. What type of control filters traffic before it reaches a resource based on security rules?
**Answer:** Security Group

### Q67. What type of control operates at subnet boundary?
**Answer:** NACL

### Q68. What cloud control is commonly used to allow HTTPS to an EC2 instance?
**Answer:** Security Group

### Q69. What cloud control can deny a specific source at subnet level?
**Answer:** NACL

### Q70. What is the primary purpose of security groups?
**Answer:** Traffic-control

## IAM and Access Control

### Q71. What does IAM stand for?
**Answer:** Identity

### Q72. What process verifies who a user is?
**Answer:** Authentication

### Q73. What process determines what an identity may do?
**Answer:** Authorization

### Q74. What principle gives users only required permissions?
**Answer:** Least-privilege

### Q75. What IAM identity is commonly used by a workload such as EC2?
**Answer:** Role

### Q76. What IAM object represents an individual identity?
**Answer:** User

### Q77. What IAM object groups users for permission management?
**Answer:** Group

### Q78. What should an EC2 application use instead of hard-coded cloud credentials?
**Answer:** Role

### Q79. What authentication mechanism requires multiple independent factors?
**Answer:** MFA

### Q80. Password plus OTP is an example of what?
**Answer:** MFA

### Q81. Who are you? Which security concept?
**Answer:** Authentication

### Q82. What are you allowed to do? Which concept?
**Answer:** Authorization

### Q83. What concept prevents an application from receiving administrator permissions unnecessarily?
**Answer:** Least-privilege

### Q84. What concept means never giving more access than required?
**Answer:** Least-privilege

### Q85. What should be used to grant temporary permissions to a service?
**Answer:** Role

### Q86. What security model avoids implicit trust and continuously verifies access?
**Answer:** Zero-trust

### Q87. What is the main purpose of IAM?
**Answer:** Access-control

### Q88. What is a collection of IAM users?
**Answer:** Group

### Q89. What is an assumable identity with permissions?
**Answer:** Role

### Q90. What should protect administrator accounts beyond passwords?
**Answer:** MFA

## Shared Responsibility and Cloud Security

### Q91. What model divides security responsibilities between provider and customer?
**Answer:** Shared-responsibility

### Q92. Who generally secures the physical cloud infrastructure?
**Answer:** Provider

### Q93. Who is responsible for configuring customer IAM permissions?
**Answer:** Customer

### Q94. Who is generally responsible for customer data?
**Answer:** Customer

### Q95. Is cloud security entirely the provider's responsibility?
**Answer:** No

### Q96. What is an insecure cloud configuration called?
**Answer:** Misconfiguration

### Q97. A publicly readable private storage bucket is primarily what problem?
**Answer:** Misconfiguration

### Q98. Excessive cloud permissions violate what principle?
**Answer:** Least-privilege

### Q99. Hard-coded cloud credentials create what security problem?
**Answer:** Secret-exposure

### Q100. What approach uses multiple independent security controls?
**Answer:** Defense-in-depth

### Q101. What principle says no network location should be automatically trusted?
**Answer:** Zero-trust

### Q102. What should be minimized to reduce possible attack paths?
**Answer:** Attack-surface

### Q103. What is a weakness that may be exploited?
**Answer:** Vulnerability

### Q104. What is a potential cause of a security incident?
**Answer:** Threat

### Q105. What security approach uses multiple layers of controls?
**Answer:** Defense-in-depth

### Q106. What should customers protect even when using a public cloud?
**Answer:** Data

### Q107. What should be regularly reviewed to prevent excessive access?
**Answer:** Permissions

### Q108. What security issue occurs when SSH is open to everyone on the Internet?
**Answer:** Exposure

### Q109. What should be disabled when a cloud service is unnecessary?
**Answer:** Access

### Q110. What is the security goal of reducing unnecessary public IPs?
**Answer:** Attack-surface

## Encryption, Keys and Secrets

### Q111. What protects stored data?
**Answer:** Encryption-at-rest

### Q112. What protects data while traveling over a network?
**Answer:** Encryption-in-transit

### Q113. What protocol commonly protects HTTP traffic?
**Answer:** TLS

### Q114. What secure web protocol combines HTTP with TLS?
**Answer:** HTTPS

### Q115. What AWS service manages encryption keys?
**Answer:** KMS

### Q116. What should store database passwords and API keys?
**Answer:** Secrets-manager

### Q117. What cryptographic method uses the same key for encryption and decryption?
**Answer:** Symmetric

### Q118. What cryptographic method uses public/private keys?
**Answer:** Asymmetric

### Q119. What cryptographic function produces a fixed-size digest?
**Answer:** Hashing

### Q120. Should passwords normally be encrypted or hashed?
**Answer:** Hashed

### Q121. What is added to passwords before hashing to resist precomputed attacks?
**Answer:** Salt

### Q122. What is a secret key that must remain confidential?
**Answer:** Private-key

### Q123. What key can generally be shared publicly?
**Answer:** Public-key

### Q124. What binds an identity to a public key?
**Answer:** Certificate

### Q125. Who commonly issues trusted digital certificates?
**Answer:** CA

### Q126. What does CA stand for?
**Answer:** Certificate-Authority

### Q127. What infrastructure manages public-key certificates and trust?
**Answer:** PKI

### Q128. What is AWS KMS mainly used for?
**Answer:** Key-management

### Q129. What should you never commit to a public Git repository?
**Answer:** Secrets

### Q130. What should happen to an exposed credential?
**Answer:** Rotation

### Q131. What mechanism ensures browsers use HTTPS for a site?
**Answer:** HSTS

### Q132. What cryptographic value is intended to be used once?
**Answer:** Nonce

### Q133. What property detects unauthorized modification of data?
**Answer:** Integrity

### Q134. What cryptographic mechanism can provide authenticity and integrity?
**Answer:** Digital-signature

### Q135. What should protect data stored on a disk?
**Answer:** Encryption-at-rest

## Monitoring, Logging and Auditing

### Q136. What AWS service is commonly used for metrics and monitoring?
**Answer:** CloudWatch

### Q137. What AWS service records API activity for auditing?
**Answer:** CloudTrail

### Q138. Who deleted an AWS resource? Which service should you inspect?
**Answer:** CloudTrail

### Q139. EC2 CPU is 95%. Which service is useful for monitoring?
**Answer:** CloudWatch

### Q140. What records system or application events?
**Answer:** Logs

### Q141. What observes system health and performance?
**Answer:** Monitoring

### Q142. What reviews activity for accountability?
**Answer:** Auditing

### Q143. What sends notifications when a threshold or event occurs?
**Answer:** Alerting

### Q144. What AWS service is associated with API activity auditing?
**Answer:** CloudTrail

### Q145. What AWS service is associated with metrics?
**Answer:** CloudWatch

### Q146. What is the purpose of logging?
**Answer:** Visibility

### Q147. What is the purpose of auditing?
**Answer:** Accountability

### Q148. What is the purpose of monitoring?
**Answer:** Observation

### Q149. What is the purpose of alerting?
**Answer:** Notification

### Q150. What evidence can help investigate a security incident?
**Answer:** Logs

### Q151. What should be enabled to investigate cloud API activity?
**Answer:** Audit-logging

### Q152. What is a historical record of events called?
**Answer:** Log

### Q153. What helps identify abnormal resource usage?
**Answer:** Monitoring

### Q154. What helps answer who performed a cloud API action?
**Answer:** CloudTrail

### Q155. What helps track CPU, memory or application metrics?
**Answer:** CloudWatch

## Threats, Attacks and Web Security

### Q156. What social-engineering attack tricks users into revealing information?
**Answer:** Phishing

### Q157. What targeted phishing attack focuses on a specific victim?
**Answer:** Spear-phishing

### Q158. What attack falsifies an identity or source?
**Answer:** Spoofing

### Q159. What attack captures network traffic?
**Answer:** Sniffing

### Q160. What attack positions an attacker between communicating parties?
**Answer:** MITM

### Q161. What attack attempts to make a service unavailable?
**Answer:** DoS

### Q162. What denial-of-service attack uses many distributed sources?
**Answer:** DDoS

### Q163. What malware commonly encrypts data and demands payment?
**Answer:** Ransomware

### Q164. What malware disguises itself as legitimate software?
**Answer:** Trojan

### Q165. What malware can self-propagate across systems?
**Answer:** Worm

### Q166. What attack repeatedly tries many passwords?
**Answer:** Brute-force

### Q167. What attack uses stolen username-password pairs on other services?
**Answer:** Credential-stuffing

### Q168. What attack reuses captured valid communication?
**Answer:** Replay

### Q169. What attack forges ARP information?
**Answer:** ARP-spoofing

### Q170. What attack provides forged DNS responses?
**Answer:** DNS-spoofing

### Q171. What is a collection of compromised devices controlled by an attacker?
**Answer:** Botnet

### Q172. What is a threat involving an authorized person or compromised account?
**Answer:** Insider-threat

### Q173. What manipulates people rather than directly exploiting software?
**Answer:** Social-engineering

### Q174. What web security control filters HTTP/HTTPS requests?
**Answer:** WAF

### Q175. What attack floods a website from many distributed machines?
**Answer:** DDoS

### Q176. What control can limit excessive request frequency?
**Answer:** Rate-limiting

### Q177. What is the main goal of DDoS?
**Answer:** Availability

### Q178. What is the primary target property in a traffic-flooding attack?
**Answer:** Availability

### Q179. What is the security risk of phishing credentials?
**Answer:** Account-compromise

### Q180. What type of attack may intercept unencrypted traffic?
**Answer:** Sniffing

## WAF, Firewall, IDS, IPS and VPN

### Q181. What is a Web Application Firewall?
**Answer:** WAF

### Q182. What security control protects HTTP/HTTPS applications?
**Answer:** WAF

### Q183. What detects suspicious activity and primarily alerts?
**Answer:** IDS

### Q184. What detects and can block suspicious traffic?
**Answer:** IPS

### Q185. What is the key difference between IDS and IPS?
**Answer:** Prevention

### Q186. What security device filters traffic according to rules?
**Answer:** Firewall

### Q187. What firewall type tracks connection state?
**Answer:** Stateful

### Q188. What firewall type evaluates packets without maintaining connection state?
**Answer:** Stateless

### Q189. What policy denies traffic unless explicitly allowed?
**Answer:** Default-deny

### Q190. What policy permits only approved sources?
**Answer:** Allowlist

### Q191. What policy blocks known prohibited sources?
**Answer:** Blocklist

### Q192. What creates a protected virtual connection over another network?
**Answer:** VPN

### Q193. What protocol suite commonly secures IP-based VPN traffic?
**Answer:** IPsec

### Q194. What VPN connects entire networks/sites?
**Answer:** Site-to-site

### Q195. What VPN allows an individual client to access a private network?
**Answer:** Remote-access

### Q196. What security control sits in front of a web application?
**Answer:** WAF

### Q197. What control is designed primarily to detect rather than block?
**Answer:** IDS

### Q198. What control is designed to detect and prevent malicious traffic?
**Answer:** IPS

### Q199. What is the main purpose of a firewall?
**Answer:** Filtering

### Q200. What is the main purpose of a VPN?
**Answer:** Protection

## Disaster Recovery and Reliability

### Q201. What is a copy of data used for recovery?
**Answer:** Backup

### Q202. What is the process/infrastructure for restoring operations after major failure?
**Answer:** Disaster-recovery

### Q203. What does RTO measure?
**Answer:** Downtime

### Q204. What does RPO measure?
**Answer:** Data-loss

### Q205. What is the maximum acceptable downtime called?
**Answer:** RTO

### Q206. What is the maximum acceptable data loss measured in time called?
**Answer:** RPO

### Q207. A business needs recovery within 30 minutes. Which metric is 30 minutes?
**Answer:** RTO

### Q208. A business can lose at most 5 minutes of data. Which metric is 5 minutes?
**Answer:** RPO

### Q209. What property means a service remains accessible?
**Answer:** Availability

### Q210. What property means data remains intact and is not lost?
**Answer:** Durability

### Q211. Can high durability exist while availability temporarily decreases?
**Answer:** Yes

### Q212. What strategy keeps redundant resources available after a failure?
**Answer:** Redundancy

### Q213. What concept limits the effect of one infrastructure failure?
**Answer:** Fault-isolation

### Q214. What is the goal of disaster recovery?
**Answer:** Restoration

### Q215. What is the goal of backups?
**Answer:** Recovery

## Scenario Recognition

### Q216. A shopping site automatically adds servers during a traffic spike and removes them later. What concept?
**Answer:** Elasticity

### Q217. A developer deploys code without managing operating systems or servers. What model?
**Answer:** PaaS

### Q218. A company needs full control of the VM operating system. What model?
**Answer:** IaaS

### Q219. Employees use a complete online CRM application. What model?
**Answer:** SaaS

### Q220. A company combines its data center with AWS resources. What cloud model?
**Answer:** Hybrid

### Q221. An application must survive failure of one AZ. What deployment?
**Answer:** Multi-AZ

### Q222. A database must not be directly reachable from the Internet. Where?
**Answer:** Private-subnet

### Q223. A web server must receive Internet traffic. Where?
**Answer:** Public-subnet

### Q224. A private EC2 needs outbound package downloads without direct inbound Internet exposure. What?
**Answer:** NAT-Gateway

### Q225. Traffic destination is determined by which object?
**Answer:** Route-table

### Q226. An EC2 instance needs S3 access without stored access keys. What?
**Answer:** IAM-Role

### Q227. An application needs only read access to one bucket. What principle?
**Answer:** Least-privilege

### Q228. An administrator should use password plus another factor. What?
**Answer:** MFA

### Q229. Customer data is stored on an encrypted disk. What protection?
**Answer:** At-rest

### Q230. Browser-to-server communication must be encrypted. What?
**Answer:** TLS

### Q231. An AWS resource was deleted and you need to identify the API actor. What?
**Answer:** CloudTrail

### Q232. You need EC2 CPU and performance metrics. What?
**Answer:** CloudWatch

### Q233. A website needs filtering of malicious HTTP requests. What?
**Answer:** WAF

### Q234. Thousands of distributed systems flood a website. What?
**Answer:** DDoS

### Q235. A private bucket is accidentally publicly readable. What?
**Answer:** Misconfiguration

### Q236. A developer committed an API key to Git. What?
**Answer:** Secret-exposure

### Q237. A security system should alert but not automatically block. What?
**Answer:** IDS

### Q238. A security system should actively block malicious traffic. What?
**Answer:** IPS

### Q239. A company wants to connect two private networks securely over the Internet. What?
**Answer:** Site-to-site-VPN

### Q240. A service must recover within 15 minutes. Which metric?
**Answer:** RTO

### Q241. A system can lose only 1 minute of transactions. Which metric?
**Answer:** RPO

### Q242. A cloud policy gives an application administrator access when it only needs S3 read. What issue?
**Answer:** Excessive-permissions

### Q243. A company wants multiple layers of independent security controls. What?
**Answer:** Defense-in-depth

### Q244. A network location should never automatically be trusted. What model?
**Answer:** Zero-trust

### Q245. A user has a valid password but cannot access a bucket. What concept likely failed?
**Answer:** Authorization

## Stop Condition

Once you can recognize these concepts quickly, stop expanding Cloud theory. Move to the next placement topic rather than trying to master advanced cloud architecture.