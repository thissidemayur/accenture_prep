# Accenture Networking + Network Security MCQA — 200+

**Purpose:** High-return practice for the Accenture Technical Assessment.

**Source note:** These are original practice questions, not official or leaked Accenture questions. The topic selection is based on current publicly reported Accenture 2026 assessment material, which describes Networking/Security/Cloud as a technical-assessment area covering networking basics, IP/subnetting, TCP/IP/UDP, cybersecurity, cloud security, and data protection. citeturn0search0turn0search1turn0search11

**Total questions: 226**

## How to use
- First attempt every question without reading the answer.
- Mark each **Wrong / Partial / Correct**.
- Patch only weak concepts; do not restart full theory after every mistake.
- Highest priority: IP/subnetting, TCP/UDP, DNS/DHCP/ARP/NAT, OSI/TCP-IP, VLAN/STP, authentication/authorization, cryptography, attacks, firewall/IDS/IPS/WAF/VPN, VPC/subnets/routes/IAM/cloud security.

## Networking Fundamentals

### Q1. What is a LAN?
**Answer:** A Local Area Network covering a small area such as a home, office, or campus.

### Q2. What is a WAN?
**Answer:** A Wide Area Network connecting networks over large geographic areas.

### Q3. What is a MAN?
**Answer:** A Metropolitan Area Network covering a city or metropolitan area.

### Q4. What is PAN?
**Answer:** A Personal Area Network around an individual, such as Bluetooth devices.

### Q5. What is a client-server network?
**Answer:** A network where clients request services from centralized servers.

### Q6. What is a peer-to-peer network?
**Answer:** A network where devices can directly provide resources to one another.

### Q7. What is network topology?
**Answer:** The physical or logical arrangement of network devices and links.

### Q8. What is star topology?
**Answer:** Devices connect to a central switch or hub.

### Q9. What is a switch?
**Answer:** A Layer 2 device that forwards Ethernet frames using MAC addresses.

### Q10. What is a router?
**Answer:** A Layer 3 device that forwards packets between IP networks.

### Q11. What is a hub?
**Answer:** A Layer 1 device that repeats incoming signals to connected ports.

### Q12. What is a gateway?
**Answer:** A device or service that connects different networks or protocols.

### Q13. What is a MAC address?
**Answer:** A link-layer address associated with a network interface.

### Q14. What is an IP address?
**Answer:** A logical address used to identify an interface and route traffic.

### Q15. What is bandwidth?
**Answer:** The maximum data-carrying capacity of a link.

### Q16. What is latency?
**Answer:** The time taken for data to travel between endpoints.

### Q17. What is throughput?
**Answer:** The actual rate at which useful data is transferred.

### Q18. What is jitter?
**Answer:** Variation in packet delay.

### Q19. What is packet loss?
**Answer:** Failure of packets to reach their destination.

### Q20. What is full-duplex communication?
**Answer:** Both endpoints can transmit and receive simultaneously.

## OSI, TCP/IP and Protocols

### Q21. What are the seven OSI layers?
**Answer:** Physical, Data Link, Network, Transport, Session, Presentation, Application.

### Q22. Which OSI layer handles routing?
**Answer:** Network layer.

### Q23. Which OSI layer uses MAC addresses?
**Answer:** Data Link layer.

### Q24. Which OSI layer provides end-to-end transport?
**Answer:** Transport layer.

### Q25. At which OSI layer does HTTP operate?
**Answer:** Application layer.

### Q26. What is encapsulation?
**Answer:** Adding protocol headers/trailers as data moves down the stack.

### Q27. What is decapsulation?
**Answer:** Removing protocol headers/trailers as data moves up the stack.

### Q28. What is TCP?
**Answer:** A connection-oriented transport protocol providing reliable, ordered delivery.

### Q29. What is UDP?
**Answer:** A connectionless transport protocol with low overhead and no delivery guarantee.

### Q30. When is UDP useful?
**Answer:** When low latency and application-controlled reliability are preferred.

### Q31. What is the TCP three-way handshake?
**Answer:** SYN, SYN-ACK, then ACK.

### Q32. What does SYN do?
**Answer:** Initiates TCP connection establishment.

### Q33. What does ACK do?
**Answer:** Acknowledges received TCP information.

### Q34. What is TCP flow control?
**Answer:** It prevents a sender from overwhelming the receiver.

### Q35. What is TCP congestion control?
**Answer:** It regulates sending in response to network congestion.

### Q36. What is HTTP?
**Answer:** An application-layer protocol commonly used for web communication.

### Q37. What is HTTPS?
**Answer:** HTTP protected by TLS.

### Q38. What is FTP?
**Answer:** A protocol traditionally used for file transfer.

### Q39. What is SSH?
**Answer:** A secure protocol for remote login and command execution.

### Q40. What is SMTP?
**Answer:** A protocol used to send email.

### Q41. What is DNS?
**Answer:** The Domain Name System, which maps names to network records.

### Q42. What is DHCP?
**Answer:** A protocol that automatically supplies network configuration.

### Q43. What is ARP?
**Answer:** A protocol used in IPv4 LANs to resolve IP addresses to MAC addresses.

### Q44. What is ICMP?
**Answer:** A network control/diagnostic protocol used by tools such as ping.

## IP Addressing and Subnetting

### Q45. What is IPv4?
**Answer:** A 32-bit IP addressing system.

### Q46. What is IPv6?
**Answer:** A 128-bit IP addressing system.

### Q47. What is a subnet mask?
**Answer:** It separates network bits from host bits in IPv4.

### Q48. What does /24 mean?
**Answer:** 24 network-prefix bits and 8 host bits.

### Q49. How many total addresses are in a /24?
**Answer:** 256.

### Q50. How many traditional usable hosts are in a /24?
**Answer:** 254.

### Q51. What are RFC1918 private IPv4 ranges?
**Answer:** 10.0.0.0/8, 172.16.0.0/12 and 192.168.0.0/16.

### Q52. What is a public IP?
**Answer:** An IP address intended to be routable on the public Internet.

### Q53. What is 127.0.0.1?
**Answer:** The IPv4 loopback address.

### Q54. What is APIPA?
**Answer:** Automatic Private IP Addressing, commonly 169.254.0.0/16.

### Q55. What is CIDR?
**Answer:** Classless Inter-Domain Routing using prefix lengths such as /24.

### Q56. What is a default gateway?
**Answer:** The router used to reach destinations outside the local subnet.

### Q57. What is subnetting?
**Answer:** Dividing a larger network into smaller logical networks.

### Q58. What is a network address?
**Answer:** The address representing the subnet, with host bits zero.

### Q59. What is an IPv4 broadcast address?
**Answer:** The address used to reach all hosts in a subnet.

### Q60. How many host bits are in /26?
**Answer:** 6.

### Q61. How many total addresses are in /26?
**Answer:** 64.

### Q62. How many traditional usable hosts are in /26?
**Answer:** 62.

### Q63. How many host bits are in /30?
**Answer:** 2.

### Q64. How many total addresses are in /30?
**Answer:** 4.

### Q65. How many traditional usable hosts are in /30?
**Answer:** 2.

### Q66. Why is subnetting used?
**Answer:** For segmentation, organization, routing control and efficient address use.

## DNS, DHCP, NAT and Routing

### Q67. What is a DNS A record?
**Answer:** It maps a hostname to an IPv4 address.

### Q68. What is a DNS AAAA record?
**Answer:** It maps a hostname to an IPv6 address.

### Q69. What is a CNAME record?
**Answer:** It aliases one hostname to another hostname.

### Q70. What is an MX record?
**Answer:** It identifies mail servers for a domain.

### Q71. What is DNS TTL?
**Answer:** The period a DNS response may be cached.

### Q72. What is DNS caching?
**Answer:** Temporarily storing DNS responses to reduce repeated lookups.

### Q73. What does DHCP provide?
**Answer:** Typically IP address, prefix/mask, gateway, DNS and lease information.

### Q74. What is a DHCP lease?
**Answer:** A time-limited assignment of network configuration.

### Q75. What is NAT?
**Answer:** Network Address Translation between address spaces.

### Q76. Why is NAT common in IPv4?
**Answer:** It conserves public addresses and allows private hosts to share them.

### Q77. What is PAT?
**Answer:** Port Address Translation, allowing many connections to share an address using ports.

### Q78. What is static NAT?
**Answer:** A fixed one-to-one address mapping.

### Q79. What is a routing table?
**Answer:** A set of routes used to decide where packets are forwarded.

### Q80. What is a default route?
**Answer:** The route used when no more-specific route matches.

### Q81. What is a hop?
**Answer:** A traversal from one Layer 3 forwarding device to another.

### Q82. What does traceroute help diagnose?
**Answer:** The path and possible routing/latency problems toward a destination.

### Q83. What does ping test?
**Answer:** IP reachability and round-trip response time.

### Q84. What is IP TTL?
**Answer:** A field limiting the number of Layer 3 hops a packet can make.

### Q85. A site works by IP but not hostname. What should you check?
**Answer:** DNS resolution and DNS configuration.

### Q86. A host reaches its LAN but not the Internet. What should you check?
**Answer:** IP configuration, gateway, routes, DNS and upstream connectivity.

## Switching, VLAN and Wi-Fi

### Q87. What is a VLAN?
**Answer:** A logical Layer 2 network segment.

### Q88. Why use VLANs?
**Answer:** To segment broadcast domains and improve organization/isolation.

### Q89. What is an access port?
**Answer:** A switch port normally carrying one VLAN for an endpoint.

### Q90. What is a trunk port?
**Answer:** A link carrying traffic for multiple VLANs.

### Q91. What is 802.1Q?
**Answer:** The standard used for VLAN tagging on Ethernet.

### Q92. What is a broadcast domain?
**Answer:** A set of devices receiving a Layer 2 broadcast.

### Q93. What is STP?
**Answer:** Spanning Tree Protocol, used to prevent Layer 2 loops.

### Q94. Why are Layer 2 loops dangerous?
**Answer:** They can cause broadcast storms and MAC-table instability.

### Q95. What is Wi-Fi?
**Answer:** Wireless networking based on IEEE 802.11 standards.

### Q96. What is an SSID?
**Answer:** The name identifying a Wi-Fi network.

### Q97. What is WPA2?
**Answer:** A Wi-Fi security standard commonly using AES-based protection.

### Q98. What is WPA3?
**Answer:** A newer Wi-Fi security standard with improved authentication/security.

### Q99. What is a rogue access point?
**Answer:** An unauthorized wireless access point.

### Q100. What is Ethernet?
**Answer:** A family of wired LAN technologies under IEEE 802.3.

### Q101. What is a load balancer?
**Answer:** A system that distributes traffic across backend targets.

### Q102. What is a reverse proxy?
**Answer:** A proxy positioned in front of servers and acting on their behalf.

### Q103. What is a VPN?
**Answer:** A protected virtual network connection over another network.

### Q104. What is network segmentation?
**Answer:** Dividing a network into isolated zones.

### Q105. Why close unused ports?
**Answer:** To reduce the attack surface.

### Q106. What is a network interface?
**Answer:** A hardware or software interface used to connect to a network.

## Security Fundamentals

### Q107. What is the CIA triad?
**Answer:** Confidentiality, Integrity and Availability.

### Q108. What is confidentiality?
**Answer:** Preventing unauthorized disclosure.

### Q109. What is integrity?
**Answer:** Preventing unauthorized alteration or destruction.

### Q110. What is availability?
**Answer:** Keeping authorized services/data accessible when needed.

### Q111. What is authentication?
**Answer:** Verifying identity.

### Q112. What is authorization?
**Answer:** Determining permitted actions/resources.

### Q113. What is accounting/auditing?
**Answer:** Recording and reviewing activity for accountability.

### Q114. What is least privilege?
**Answer:** Granting only the permissions necessary for a task.

### Q115. What is defense in depth?
**Answer:** Using multiple layers of security controls.

### Q116. What is zero trust?
**Answer:** A model that avoids implicit trust and continuously verifies access.

### Q117. What is encryption?
**Answer:** Transforming plaintext into ciphertext for confidentiality.

### Q118. What is decryption?
**Answer:** Recovering plaintext from ciphertext.

### Q119. What is hashing?
**Answer:** A one-way transformation producing a fixed-size digest.

### Q120. Why hash passwords?
**Answer:** To verify them without storing recoverable plaintext passwords.

### Q121. What is salting?
**Answer:** Adding unique random data before password hashing.

### Q122. What is MFA?
**Answer:** Authentication using two or more independent factors.

### Q123. What is an attack surface?
**Answer:** The set of exposed points that could potentially be attacked.

### Q124. What is a vulnerability?
**Answer:** A weakness that can potentially be exploited.

### Q125. What is a threat?
**Answer:** A potential cause of a harmful security incident.

### Q126. What is a security policy?
**Answer:** Documented rules governing secure system use/protection.

## Attacks and Threats

### Q127. What is phishing?
**Answer:** Social engineering that tricks users into unsafe actions or disclosure.

### Q128. What is spear phishing?
**Answer:** Targeted phishing aimed at a specific person or organization.

### Q129. What is spoofing?
**Answer:** Falsifying an identity or source.

### Q130. What is sniffing?
**Answer:** Capturing and analyzing network traffic.

### Q131. What is MITM?
**Answer:** An attacker positions between communicating parties to intercept/alter traffic.

### Q132. What is DoS?
**Answer:** An attack intended to make a service unavailable.

### Q133. What is DDoS?
**Answer:** A denial-of-service attack distributed across many sources.

### Q134. What is malware?
**Answer:** Malicious software designed to harm, spy, disrupt or gain unauthorized access.

### Q135. What is ransomware?
**Answer:** Malware that commonly blocks/encrypts data and demands payment.

### Q136. What is a Trojan?
**Answer:** Malware disguised as legitimate software/file.

### Q137. What is a worm?
**Answer:** Malware capable of self-propagating.

### Q138. What is a virus?
**Answer:** Malware that typically attaches to a host file/program.

### Q139. What is brute force?
**Answer:** Trying many credentials or keys until one works.

### Q140. What is credential stuffing?
**Answer:** Using stolen credential pairs against other services.

### Q141. What is a replay attack?
**Answer:** Reusing captured valid authentication/communication data.

### Q142. What is ARP spoofing?
**Answer:** Forged ARP information used to redirect local traffic.

### Q143. What is DNS spoofing?
**Answer:** Forged DNS information causing incorrect resolution.

### Q144. What is a botnet?
**Answer:** A collection of compromised devices controlled by an attacker.

### Q145. What is an insider threat?
**Answer:** A threat involving an authorized person or compromised authorized account.

### Q146. What is social engineering?
**Answer:** Manipulating people to weaken security or reveal information.

## Firewalls, IDS/IPS, WAF and VPN

### Q147. What is a stateful firewall?
**Answer:** A firewall that considers connection state when filtering.

### Q148. What is a stateless firewall?
**Answer:** A firewall that evaluates traffic mainly against configured packet rules.

### Q149. What is an allowlist?
**Answer:** Only explicitly approved entities/traffic are permitted.

### Q150. What is a blocklist?
**Answer:** Known prohibited entities/traffic are denied.

### Q151. What is IDS?
**Answer:** Intrusion Detection System that detects and alerts on suspicious activity.

### Q152. What is IPS?
**Answer:** Intrusion Prevention System that can detect and block suspicious activity.

### Q153. IDS vs IPS?
**Answer:** IDS mainly alerts; IPS can actively block.

### Q154. What is WAF?
**Answer:** Web Application Firewall protecting HTTP/HTTPS applications.

### Q155. What is a network ACL?
**Answer:** A rule set controlling network traffic at a network boundary/interface.

### Q156. What is microsegmentation?
**Answer:** Fine-grained security segmentation around workloads/applications.

### Q157. What is IPsec?
**Answer:** A suite of protocols securing IP communications, commonly VPNs.

### Q158. What is a site-to-site VPN?
**Answer:** A VPN connecting two or more networks.

### Q159. What is a remote-access VPN?
**Answer:** A VPN allowing an individual client to access a private network.

### Q160. What is default deny?
**Answer:** Deny traffic unless it is explicitly permitted.

### Q161. What is rate limiting?
**Answer:** Restricting request frequency to protect resources and reduce abuse.

### Q162. What is a cloud security group?
**Answer:** A virtual traffic-control mechanism associated with cloud resources.

### Q163. What is a proxy?
**Answer:** An intermediary that makes requests on behalf of a client.

### Q164. What is a reverse proxy commonly used for?
**Answer:** TLS termination, routing, load balancing, caching and application protection.

### Q165. What is network monitoring?
**Answer:** Observing traffic, availability, performance and security signals.

### Q166. Why segment production from development?
**Answer:** To reduce unauthorized access and limit the blast radius of incidents.

## Cryptography and Secure Communication

### Q167. What is symmetric encryption?
**Answer:** Encryption and decryption use the same shared secret key.

### Q168. What is asymmetric encryption?
**Answer:** Uses a related public/private key pair.

### Q169. What is a public key?
**Answer:** The shareable key in an asymmetric pair.

### Q170. What is a private key?
**Answer:** The secret key in an asymmetric pair.

### Q171. What is a digital signature?
**Answer:** A cryptographic mechanism providing authenticity and integrity.

### Q172. What is a digital certificate?
**Answer:** A signed document binding an identity to a public key.

### Q173. What is a Certificate Authority?
**Answer:** A trusted entity that issues/signs certificates.

### Q174. What is PKI?
**Answer:** Infrastructure and processes for managing public-key certificates and trust.

### Q175. What is TLS?
**Answer:** A protocol for securing network communication.

### Q176. What does HTTPS provide?
**Answer:** TLS-protected HTTP with encryption and server authentication.

### Q177. What is a nonce?
**Answer:** A value intended to be used once in a protocol.

### Q178. What is key rotation?
**Answer:** Replacing cryptographic keys periodically or after security events.

### Q179. What is a hash collision?
**Answer:** Two different inputs producing the same hash.

### Q180. What is SHA-256?
**Answer:** A SHA-2 hash algorithm producing a 256-bit digest.

### Q181. What is HSTS?
**Answer:** A mechanism instructing browsers to use HTTPS for a site.

### Q182. Why protect private keys?
**Answer:** Compromise can enable impersonation or other cryptographic compromise.

### Q183. What is certificate validation?
**Answer:** Checking trust, hostname, validity period and other certificate constraints.

### Q184. Why is HTTP unsafe on untrusted networks?
**Answer:** Traffic is not protected by TLS and can be read/modified in transit.

### Q185. What is a cryptographic key?
**Answer:** Information used by a cryptographic algorithm to transform or verify data.

### Q186. What is non-repudiation?
**Answer:** A property helping establish that an action/message is attributable to a particular party.

## Cloud Networking and Security

### Q187. What is cloud computing?
**Answer:** On-demand access to computing resources over a network.

### Q188. What is IaaS?
**Answer:** Infrastructure as a Service, such as virtual machines, networking and storage.

### Q189. What is PaaS?
**Answer:** Platform as a Service providing a managed application platform.

### Q190. What is SaaS?
**Answer:** Software as a Service providing complete applications.

### Q191. What is public cloud?
**Answer:** Cloud infrastructure offered by a provider to multiple customers.

### Q192. What is private cloud?
**Answer:** Cloud infrastructure dedicated to one organization/environment.

### Q193. What is hybrid cloud?
**Answer:** An environment combining private/on-premises and public-cloud resources.

### Q194. What is a VPC?
**Answer:** A logically isolated virtual network in a cloud environment.

### Q195. What is a cloud subnet?
**Answer:** A subdivision of a virtual network address range.

### Q196. What is a public subnet?
**Answer:** A subnet with routing that can provide public Internet paths, subject to controls.

### Q197. What is a private subnet?
**Answer:** A subnet without a direct public-Internet route for its resources.

### Q198. What is an Internet gateway?
**Answer:** A cloud component providing a path between a VPC/network and the Internet.

### Q199. What is a NAT gateway?
**Answer:** A managed service enabling private resources to initiate outbound Internet connections.

### Q200. What is a VPC route table?
**Answer:** Rules determining where network traffic is forwarded.

### Q201. What is cloud IAM?
**Answer:** Identity and Access Management controlling identities, resources and permitted actions.

### Q202. What is the shared responsibility model?
**Answer:** The provider and customer have different security responsibilities depending on the service.

### Q203. What is cloud misconfiguration?
**Answer:** An insecure or unintended cloud configuration exposing resources or data.

### Q204. Why avoid public exposure by default?
**Answer:** It increases attack surface and potential unauthorized access.

### Q205. What is cloud logging?
**Answer:** Collecting cloud API, network and system activity for monitoring/investigation.

### Q206. What is data protection in cloud?
**Answer:** Controls such as encryption, access control, backups, monitoring and lifecycle management.

## High-Return Scenario Questions

### Q207. A host reaches local devices but not the Internet. What should you check?
**Answer:** IP configuration, subnet/prefix, default gateway, routing and DNS.

### Q208. A site works by IP but not hostname. Likely issue?
**Answer:** DNS resolution/configuration.

### Q209. Two hosts are in different subnets. How do they communicate?
**Answer:** Through a Layer 3 router or equivalent gateway.

### Q210. A private VM needs outbound Internet but should not be directly reachable from Internet. What design?
**Answer:** Private subnet with controlled egress such as NAT gateway.

### Q211. You need to isolate development and production. What control?
**Answer:** Network segmentation using separate VLANs/subnets/security controls.

### Q212. A suspicious urgent password-reset email arrives. What attack?
**Answer:** Phishing; spear phishing if specifically targeted.

### Q213. A firewall uses default deny. What does that mean?
**Answer:** Traffic is blocked unless explicitly allowed.

### Q214. A compromised cloud credential is discovered. First action?
**Answer:** Revoke/rotate the credential immediately, then investigate its use.

### Q215. You want detection without automatic blocking. IDS or IPS?
**Answer:** IDS.

### Q216. You want detection and automatic prevention. IDS or IPS?
**Answer:** IPS.

### Q217. A public web app needs HTTP-layer protection. What control?
**Answer:** WAF.

### Q218. Some users still see an old DNS address after a change. Why?
**Answer:** DNS caching according to TTL.

### Q219. A Wi-Fi network has a weak shared password. Improvement?
**Answer:** Use a strong unique credential and an appropriate WPA2/WPA3 security mode.

### Q220. A server exposes unused services. Improvement?
**Answer:** Disable unnecessary services and close unnecessary ports.

### Q221. Traffic is flooded from many machines. What attack?
**Answer:** DDoS.

### Q222. A Layer 2 loop causes broadcast storm. What protocol helps prevent it?
**Answer:** STP.

### Q223. Authentication succeeded but access was denied. Which concept?
**Answer:** Authorization.

### Q224. A packet's TTL reaches zero. What happens?
**Answer:** The packet is discarded; an ICMP Time Exceeded message may be generated.

### Q225. A company wants only approved network sources to connect. Which policy?
**Answer:** An allowlist.

### Q226. Production should not trust development traffic by default. What principle?
**Answer:** Least privilege/segmentation/zero-trust access controls.

## Stop Condition

Once you can answer this bank quickly and consistently, **leave Networking theory**. Your next topic should be **Cloud Computing + Cloud Security MCQA**. Do not spend multiple days polishing networking beyond what the assessment requires.

### Final checklist
- OSI layers
- TCP vs UDP and TCP handshake
- LAN/WAN/MAN/PAN
- IPv4/IPv6, CIDR and subnetting
- Private/public IP and default gateway
- DNS records and resolution
- DHCP, ARP, NAT/PAT
- Routing tables and default routes
- VLAN, trunk/access ports and STP
- Wi-Fi/WPA2/WPA3
- CIA triad
- Authentication vs authorization
- MFA and least privilege
- Encryption vs hashing
- Symmetric vs asymmetric cryptography
- TLS/HTTPS/certificates
- Phishing, spoofing, sniffing and MITM
- DoS/DDoS and credential attacks
- Firewall, IDS, IPS, WAF
- VPN/IPsec
- IaaS/PaaS/SaaS
- VPC, subnets, route tables, Internet/NAT gateway
- IAM, shared responsibility and cloud misconfiguration