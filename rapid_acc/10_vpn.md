# Accenture VPN — 40 High-Return MCQs

**Basis:** Your supplied 10 VPN questions. Expanded into non-repetitive scenario questions focused on the same assessment patterns.

## 40 MCQs

## 1. Remote-access VPN

An employee working from home needs secure access to internal company resources. Which VPN type fits best?

A) Site-to-site VPN
B) Remote-access VPN
C) MPLS only
D) Public Wi-Fi

**Answer: B)**

**Why:** Remote-access VPN is designed for individual users/devices connecting to a corporate network.

## 2. Site-to-site VPN

Two fixed branch offices need a permanent secure connection over the Internet. Which solution is appropriate?

A) Remote-access VPN
B) Site-to-site VPN
C) Telnet
D) HTTP

**Answer: B)**

**Why:** Site-to-site VPN connects fixed networks rather than individual users.

## 3. VPN Encryption

A company wants encrypted VPN traffic between two locations. Which technology in the supplied material is associated with encryption and integrity?

A) PPTP
B) L2TP/IPsec
C) HTTP
D) FTP

**Answer: B)**

**Why:** The supplied material identifies L2TP/IPsec as the secure VPN combination.

## 4. VPN Authentication

A company wants stronger authentication before allowing an employee to establish a remote VPN connection. Which control is most relevant?

A) MFA
B) Open access
C) Password reuse
D) Guest Wi-Fi

**Answer: A)**

**Why:** MFA adds another authentication factor.

## 5. Client-based VPN

A smartphone user needs to connect individually to corporate applications from outside the office. Which solution is most appropriate?

A) Client-based remote-access VPN
B) Site-to-site VPN only
C) Unencrypted tunnel
D) Public HTTP

**Answer: A)**

**Why:** A client-based VPN is designed for individual devices.

## 6. Branch Connectivity

Two branch offices need continuous secure access to shared ERP resources. Which VPN type should be considered?

A) Remote-access
B) Site-to-site
C) Open Wi-Fi
D) FTP

**Answer: B)**

**Why:** Fixed networks are connected using site-to-site VPN.

## 7. Split Tunneling

A company wants local Internet traffic to avoid the corporate VPN while corporate traffic continues through the VPN. What feature is this?

A) Split tunneling
B) NAT only
C) Full tunneling
D) Port scanning

**Answer: A)**

**Why:** Split tunneling sends selected traffic through the VPN and other traffic directly to the Internet.

## 8. VPN Performance

A VPN is overloaded because every employee's Internet traffic is being sent through corporate infrastructure. Which feature may reduce unnecessary VPN traffic?

A) Split tunneling
B) Disable encryption
C) Remove authentication
D) Public FTP

**Answer: A)**

**Why:** Split tunneling can reduce VPN bandwidth/load by allowing selected non-corporate traffic outside the tunnel.

## 9. VPN Monitoring

Security administrators want to detect repeated failed VPN logins and unusual connection activity. What should they use?

A) Centralized VPN logging and monitoring
B) Disable logs
C) Open Wi-Fi
D) FTP

**Answer: A)**

**Why:** Centralized logs and monitoring provide visibility into VPN activity.

## 10. VPN and Least Privilege

A remote employee should access only the internal applications required for their job after connecting through VPN. Which principle should be applied?

A) Least privilege
B) Full network access
C) Anonymous access
D) Shared accounts

**Answer: A)**

**Why:** VPN connectivity should not automatically imply unrestricted access.

## 11. VPN + MFA

A stolen VPN password could otherwise allow an attacker to connect remotely. Which control most directly adds another authentication factor?

A) MFA
B) NAT
C) DNS
D) Load balancing

**Answer: A)**

**Why:** MFA reduces reliance on a single password.

## 12. Remote vs Site-to-site

Which scenario specifically describes remote-access VPN rather than site-to-site VPN?

A) A laptop connects from home to the company network
B) Branch A connects permanently to Branch B
C) Two data centers establish a network tunnel
D) Two offices connect their routers

**Answer: A)**

**Why:** An individual laptop/user connection is remote access.

## 13. Site-to-site Scenario

Which scenario specifically describes site-to-site VPN?

A) An employee connects using a VPN client
B) Two office networks connect securely through their gateways
C) A user opens a public website
D) A phone connects to guest Wi-Fi

**Answer: B)**

**Why:** Site-to-site VPN connects networks through their gateways.

## 14. VPN Confidentiality

A company is concerned that attackers on an untrusted Internet path could read sensitive VPN traffic. Which security property is required?

A) Confidentiality through encryption
B) Public sharing
C) Plaintext transport
D) Open routing

**Answer: A)**

**Why:** Encryption protects the confidentiality of data in transit.

## 15. VPN Integrity

An organization wants to detect whether VPN traffic has been modified while traveling across an untrusted network. Which security property is relevant?

A) Integrity
B) Compression
C) Availability only
D) DNS resolution

**Answer: A)**

**Why:** Integrity allows systems to detect unauthorized modification of data.

## 16. VPN Authentication

A company wants to ensure the remote endpoint/user is genuinely authorized before allowing access. Which security goal is involved?

A) Authentication
B) Compression
C) Routing
D) Caching

**Answer: A)**

**Why:** Authentication verifies identity.

## 17. VPN Availability

A company wants remote access to remain available despite failure of one VPN gateway. Which architecture helps?

A) Redundant VPN gateways
B) One gateway only
C) Disable monitoring
D) Open Wi-Fi

**Answer: A)**

**Why:** Redundancy removes a single point of failure.

## 18. Hybrid Remote Access

Employees need remote access to both on-premises applications and cloud-hosted applications through corporate connectivity. Which approach matches the supplied scenario?

A) Remote-access VPN with appropriate hybrid routing
B) Open public access
C) FTP only
D) No authentication

**Answer: A)**

**Why:** The supplied material identifies remote-access VPN plus hybrid routing for this case.

## 19. VPN Logging Alert

The security team wants an alert when one account has many failed VPN authentication attempts. What capability should support this?

A) Centralized logging/monitoring with alerting
B) Disable logs
C) Split DNS only
D) Static IP only

**Answer: A)**

**Why:** Logs provide the events needed to detect suspicious authentication behavior.

## 20. VPN Security Architecture

Which combination best represents a strong remote-access VPN setup from the supplied concepts?

A) VPN + MFA + logging/monitoring + least privilege
B) VPN + shared password + open access
C) VPN without authentication
D) Public Wi-Fi only

**Answer: A)**

**Why:** These controls address secure connectivity, authentication, visibility and restricted access.

## 21. VPN vs HTTPS

An employee needs access to multiple internal network resources, not just one web page. Which is the more appropriate technology for creating secure network-level remote connectivity?

A) VPN
B) HTTP
C) DNS
D) FTP

**Answer: A)**

**Why:** VPN provides secure remote network connectivity; HTTPS protects individual web communication.

## 22. VPN Gateway

Two branch networks need a tunnel between them. Where is the VPN tunnel commonly terminated in a network architecture?

A) Network/VPN gateways or routers
B) DNS resolver only
C) End-user browser only
D) Database table

**Answer: A)**

**Why:** Site-to-site VPNs are typically established between network gateways.

## 23. Full vs Split Tunnel

A company requires all employee Internet traffic to pass through corporate security controls before reaching the Internet. Which VPN approach is implied?

A) Full-tunnel VPN
B) Split tunneling
C) No VPN
D) Site-to-site only

**Answer: A)**

**Why:** Full tunneling routes all applicable client traffic through the corporate VPN.

## 24. VPN Credential Protection

Which practice is weakest for remote VPN authentication?

A) MFA
B) Unique strong credentials
C) Shared password reused by many employees
D) Centralized identity management

**Answer: C)**

**Why:** Shared/reused credentials make attribution and account protection weaker.

## 25. VPN and Public Wi-Fi

An employee must connect to corporate resources while using an untrusted airport Wi-Fi network. What technology provides a secure tunnel to the corporate environment?

A) VPN
B) Plain HTTP
C) FTP
D) Open Wi-Fi

**Answer: A)**

**Why:** VPN protects traffic across the untrusted network.

## 26. VPN Monitoring Investigation

A security analyst sees a successful VPN login from an unusual geography followed by abnormal internal access. Which capability is most useful for investigating the event?

A) VPN authentication and centralized connection logs
B) Disable logging
C) Public DNS only
D) File compression

**Answer: A)**

**Why:** Connection and authentication logs provide evidence for investigation.

## 27. VPN and Network Segmentation

After connecting through VPN, employees should not automatically reach sensitive database subnets. Which additional control helps restrict access?

A) Network segmentation and access controls
B) Open routing
C) Disable authentication
D) Shared administrator account

**Answer: A)**

**Why:** VPN establishes connectivity; segmentation and access controls limit what can be reached.

## 28. VPN Scalability

Thousands of employees need remote VPN access. What should the organization consider to prevent one VPN gateway from becoming a bottleneck?

A) Scalable/redundant VPN infrastructure
B) One small gateway only
C) Disable encryption
D) Remove authentication

**Answer: A)**

**Why:** Large remote-access deployments require sufficient capacity and redundancy.

## 29. VPN Threat Detection

Which event is most suspicious and should trigger investigation in VPN monitoring?

A) Repeated failed logins followed by a successful login from an unusual location
B) Normal scheduled login
C) Successful login from an expected device
D) Normal logout

**Answer: A)**

**Why:** The combination is an authentication anomaly worth investigating.

## 30. VPN Type Matching

Match the requirement: individual user → corporate network; office network → office network. Which pair is correct?

A) Remote-access; Site-to-site
B) Site-to-site; Remote-access
C) Site-to-site; Site-to-site only
D) Remote-access; Remote-access only

**Answer: A)**

**Why:** Individual users use remote access; fixed networks use site-to-site.

## 31. VPN Encryption Caveat

Which statement is safest to remember about L2TP/IPsec based on the supplied questions?

A) It is the combination the source expects for encrypted VPN traffic
B) It is the only secure VPN technology that exists
C) It replaces MFA
D) It is used for DNS resolution

**Answer: A)**

**Why:** The supplied material expects L2TP/IPsec for its encryption question; do not generalize it as the only modern VPN option.

## 32. Remote VPN Authorization

An employee successfully authenticates to VPN but should not be allowed to access the finance subnet. What should control this decision?

A) Authorization/access-control policies
B) DNS alone
C) DHCP alone
D) Encryption alone

**Answer: A)**

**Why:** Authentication proves identity; authorization determines permitted resources.

## 33. VPN Performance Tradeoff

Why can split tunneling improve performance for remote workers?

A) It can keep selected non-corporate traffic off the VPN path
B) It removes all encryption
C) It disables authentication
D) It makes the Internet faster for everyone

**Answer: A)**

**Why:** Less traffic traversing corporate VPN infrastructure can reduce load.

## 34. VPN Security Tradeoff

What is a key security concern with split tunneling?

A) Some traffic bypasses corporate security controls
B) It always disables encryption
C) It prevents all Internet access
D) It requires no routing

**Answer: A)**

**Why:** Traffic outside the tunnel may bypass corporate inspection/security controls.

## 35. VPN Access Principle

A company says: 'Once a user connects to VPN, give them access to every internal system.' Which security principle does this violate?

A) Least privilege
B) Authentication
C) Encryption
D) Availability

**Answer: A)**

**Why:** VPN access should not automatically grant unrestricted internal access.

## 36. VPN Architecture

A company has employees working remotely, two branch offices, and AWS workloads. Which combination can address these different connectivity requirements?

A) Remote-access VPN for users + site-to-site VPN/Direct Connect for networks
B) Remote-access VPN for every branch router only
C) Public Wi-Fi for branches
D) FTP for all connectivity

**Answer: A)**

**Why:** Different connectivity requirements call for user-level versus network-level connectivity mechanisms.

## Final VPN Memory Map

| Scenario | Think |
|---|---|
| Individual employee → corporate network | Remote-access VPN |
| Branch/network → branch/network | Site-to-site VPN |
| Secure tunnel over Internet | VPN |
| Stronger login protection | MFA |
| User identity | Authentication |
| Permission after login | Authorization |
| Minimum required access | Least privilege |
| Local Internet bypasses corporate VPN | Split tunneling |
| All traffic through corporate VPN | Full tunnel |
| VPN activity visibility | Logging + monitoring |
| Protect against reading traffic | Confidentiality/encryption |
| Detect traffic modification | Integrity |
| Individual device VPN | Client-based VPN |
| Dedicated cloud connectivity | Direct Connect (cloud context) |

## 3-Day Priority

1. Remote-access vs site-to-site
2. VPN purpose
3. VPN encryption/confidentiality/integrity
4. MFA
5. Split vs full tunneling
6. Authentication vs authorization
7. VPN logging/monitoring
8. Least privilege after VPN connection
9. VPN + hybrid cloud
10. Redundancy/scalability

**Source note:** Your supplied material specifically expects **L2TP/IPsec** for its VPN encryption questions. Treat that as the answer pattern for this batch; it should not be interpreted as a claim that L2TP/IPsec is the only or universally preferred modern VPN technology.