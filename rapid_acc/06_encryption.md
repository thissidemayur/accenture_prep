# Accenture Encryption & Network Security — 40 High-Return MCQs

**Basis:** Your 10 supplied encryption/security MCQs, expanded into non-repetitive placement-focused questions.

## 40 MCQs

## 1. Wi-Fi Encryption

Which option represents the strongest choice among these older/common Wi-Fi security options?

A) WEP
B) WPA
C) WPA2 with AES
D) WPA-TKIP

**Answer: C**

**Why:** WPA2 with AES is substantially stronger than WEP, WPA, and TKIP. (Note: modern Wi-Fi security also includes WPA3.)

## 2. VPN Encryption

Which option combines tunneling with IPsec security for VPN communication?

A) PPTP
B) L2TP/IPsec
C) Telnet
D) FTP

**Answer: B**

**Why:** L2TP provides tunneling while IPsec provides security services. PPTP is obsolete/insecure.

## 3. Firewall State Tracking

A firewall tracks established connections and permits legitimate return traffic. What type is it?

A) Stateless firewall
B) Stateful firewall
C) Transparent proxy only
D) DNS server

**Answer: B**

**Why:** A stateful firewall maintains connection-state information.

## 4. DNS Security

Which technology adds authentication/integrity protection to DNS data to help prevent DNS spoofing and cache poisoning?

A) DNSSEC
B) DHCP
C) NAT
D) ICMP

**Answer: A**

**Why:** DNSSEC uses cryptographic signatures to validate DNS data.

## 5. Intrusion Detection

A security team wants to monitor traffic and detect suspicious activity without necessarily blocking it. Which system fits?

A) IDS
B) DHCP server
C) Load balancer
D) VPN concentrator

**Answer: A**

**Why:** IDS stands for Intrusion Detection System and is primarily detection/alerting.

## 6. Dynamic IP Assignment

Which protocol automatically assigns IP configuration to network clients?

A) DNS
B) DHCP
C) ARP
D) SNMP

**Answer: B**

**Why:** DHCP dynamically provides IP address and other network configuration.

## 7. Encryption in Transit

A web application needs encrypted communication between browser and server. Which is appropriate?

A) HTTP
B) HTTPS
C) FTP
D) Telnet

**Answer: B**

**Why:** HTTPS is HTTP protected by TLS.

## 8. NAT

Many devices with private IP addresses need Internet access through a public address. Which technology commonly enables this?

A) VPN
B) NAT
C) ICMP
D) ARP

**Answer: B**

**Why:** NAT translates private addresses to public addresses; PAT commonly multiplexes connections by ports.

## 9. Secure Remote Shell

Which protocol provides encrypted command-line remote access to a server?

A) Telnet
B) SSH
C) FTP
D) HTTP

**Answer: B**

**Why:** SSH provides encrypted remote administration and authentication.

## 10. Enterprise Wi-Fi Authentication

Which option is designed for enterprise Wi-Fi authentication using a RADIUS backend?

A) WEP
B) WPA2-Enterprise with RADIUS
C) WPA-Personal with PSK
D) Open Wi-Fi

**Answer: B**

**Why:** Enterprise Wi-Fi commonly uses 802.1X/EAP with a RADIUS authentication server.

## 11. Symmetric Encryption

Which characteristic describes symmetric encryption?

A) Same shared secret is used for encryption and decryption
B) Only public keys are used
C) No key is required
D) It can only encrypt passwords

**Answer: A**

**Why:** Symmetric cryptography uses a shared secret key.

## 12. Asymmetric Encryption

Which pair is fundamental to public-key cryptography?

A) MAC and IP address
B) Public key and private key
C) Username and password
D) Port and protocol

**Answer: B**

**Why:** Asymmetric cryptography uses a mathematically related public/private key pair.

## 13. Hashing

Which property best describes a cryptographic hash function?

A) Reversible encryption
B) One-way transformation producing a fixed-length digest
C) Network routing
D) IP address translation

**Answer: B**

**Why:** Hashing produces a digest and is not designed to be reversed like encryption.

## 14. Password Storage

Which is generally the appropriate approach for storing user passwords?

A) Plaintext
B) Reversible encryption only
C) Salted password hashing using a password-hashing algorithm
D) Base64 encoding

**Answer: C**

**Why:** Passwords should be stored using a dedicated password-hashing scheme with a unique salt.

## 15. Salt

What is the main purpose of a salt in password hashing?

A) Increase network bandwidth
B) Make identical passwords produce different stored hashes and reduce precomputed-table effectiveness
C) Encrypt DNS
D) Replace the password

**Answer: B**

**Why:** A unique salt makes precomputed attacks such as rainbow-table reuse less effective.

## 16. TLS Purpose

What security properties does TLS primarily provide for network communication?

A) Confidentiality and integrity, with authentication typically provided through certificates
B) IP address assignment
C) MAC discovery
D) Packet routing

**Answer: A**

**Why:** TLS protects data in transit and commonly authenticates the server using certificates.

## 17. Digital Certificate

What does a typical TLS server certificate primarily bind together?

A) A domain identity and a public key, signed by a trusted CA
B) A private IP and a MAC address
C) A password and username
D) A port and subnet mask

**Answer: A**

**Why:** Certificates help clients authenticate a server identity and obtain its public key.

## 18. Certificate Authority

What is the role of a Certificate Authority (CA)?

A) Assign private IP addresses
B) Issue/sign certificates that establish trust in identities
C) Route packets
D) Translate DNS queries

**Answer: B**

**Why:** A CA signs certificates that clients can validate through a trust chain.

## 19. Encryption at Rest

A database is stored on disk and must be protected if the storage media is stolen. What security measure addresses this?

A) Encryption at rest
B) ARP
C) DNSSEC
D) Load balancing

**Answer: A**

**Why:** Encryption at rest protects stored data.

## 20. Encryption in Transit

Sensitive API data must be protected while moving across the network. What should be used?

A) TLS/HTTPS
B) Plain HTTP
C) ARP
D) DHCP

**Answer: A**

**Why:** TLS protects application data in transit.

## 21. IPsec

Which technology is commonly used to provide encryption, authentication and integrity at the IP layer?

A) IPsec
B) DNS
C) DHCP
D) FTP

**Answer: A**

**Why:** IPsec provides security services at the network/IP layer.

## 22. ESP

Which IPsec protocol provides confidentiality and can also provide integrity/authentication?

A) ESP
B) ARP
C) ICMP
D) DHCP

**Answer: A**

**Why:** ESP (Encapsulating Security Payload) supports encryption and integrity/authentication.

## 23. AH

Which IPsec protocol provides integrity/authentication but does not provide encryption of the payload?

A) AH
B) ESP
C) TLS
D) SSH

**Answer: A**

**Why:** AH (Authentication Header) does not provide confidentiality.

## 24. WEP Weakness

Why is WEP considered insecure?

A) It has well-known cryptographic weaknesses and a small IV space
B) It uses TLS 1.3
C) It requires certificates
D) It uses modern AEAD only

**Answer: A**

**Why:** WEP's cryptographic design is obsolete and can be broken with practical attacks.

## 25. TKIP

Which statement about TKIP is correct?

A) It is a modern replacement for WPA3
B) It is an older Wi-Fi security mechanism and is deprecated/weak by modern standards
C) It is a DNS protocol
D) It is a VPN tunnel

**Answer: B**

**Why:** TKIP was introduced with WPA as an interim improvement over WEP but is now obsolete.

## 26. WPA3-Personal

Which authentication mechanism is associated with WPA3-Personal?

A) SAE
B) RADIUS only
C) FTP
D) ARP

**Answer: A**

**Why:** WPA3-Personal uses SAE (Simultaneous Authentication of Equals).

## 27. WPA3-Enterprise

Which architecture is associated with enterprise Wi-Fi authentication?

A) 802.1X/EAP with an authentication server such as RADIUS
B) Open Wi-Fi only
C) ARP
D) NAT only

**Answer: A**

**Why:** Enterprise Wi-Fi commonly uses 802.1X/EAP and RADIUS.

## 28. MFA

A login requires a password plus a one-time code from a phone. What security mechanism is this?

A) MFA
B) NAT
C) DNSSEC
D) Hashing

**Answer: A**

**Why:** MFA uses multiple independent authentication factors.

## 29. Least Privilege

A user should have only the permissions necessary to perform their job. Which principle is this?

A) Least privilege
B) Open access
C) Broadcast access
D) Full trust

**Answer: A**

**Why:** Least privilege minimizes unnecessary access and reduces impact if an account is compromised.

## 30. IDS vs IPS

Which statement best distinguishes IDS from IPS?

A) IDS detects/alerts; IPS is designed to detect and actively block/prevent traffic
B) IDS assigns IPs; IPS resolves DNS
C) IDS encrypts files; IPS compresses them
D) They are exactly the same

**Answer: A**

**Why:** IDS is primarily detection; IPS is inline and can take preventive action.

## 31. Firewall Stateless vs Stateful

Which firewall type evaluates packets without maintaining connection-state information?

A) Stateful
B) Stateless
C) Application proxy only
D) VPN gateway

**Answer: B**

**Why:** Stateless filtering evaluates traffic largely packet-by-packet using rules.

## 32. WAF

A company wants to protect a web application from attacks such as SQL injection and XSS. Which control is specifically designed for this?

A) WAF
B) DHCP
C) ARP
D) NAT

**Answer: A**

**Why:** A Web Application Firewall filters HTTP/HTTPS application traffic.

## 33. DDoS Protection

A public website is overwhelmed by massive volumes of malicious traffic from many sources. What type of attack is this?

A) DDoS
B) ARP resolution
C) DNS lookup
D) SQL join

**Answer: A**

**Why:** Distributed Denial of Service attacks use many sources to overwhelm a service.

## 34. Phishing

An attacker sends a fake login page designed to trick employees into entering credentials. What is this primarily?

A) Phishing
B) NAT
C) Port scanning only
D) Encryption

**Answer: A**

**Why:** Phishing is social engineering designed to obtain information or induce harmful actions.

## 35. Replay Attack

An attacker captures a valid authentication message and later retransmits it to gain unauthorized access. What is this called?

A) Replay attack
B) DDoS
C) DNS caching
D) NAT traversal

**Answer: A**

**Why:** Replay attacks reuse previously captured valid messages.

## 36. Man-in-the-Middle

An attacker secretly intercepts and potentially modifies communication between two parties. What attack is this?

A) MITM
B) DDoS
C) Brute-force only
D) Backup failure

**Answer: A**

**Why:** MITM means Man-in-the-Middle attack.

## 37. Brute Force

An attacker repeatedly tries many password combinations until one works. What attack is this?

A) Brute-force attack
B) DNSSEC
C) NAT
D) VLAN tagging

**Answer: A**

**Why:** Brute-force attacks systematically try many credential combinations.

## 38. Zero Trust

Which security model assumes that users/devices should not automatically be trusted merely because they are inside a corporate network?

A) Zero Trust
B) Open Trust
C) WEP
D) Broadcast trust

**Answer: A**

**Why:** Zero Trust emphasizes continuous verification and least privilege.

## Important Source Notes

Your supplied questions are useful for the assessment, but two answers need context:

- **Wi-Fi:** Your source marks WPA2 + AES as the most secure option. That is correct only among the options given. Modern Wi-Fi also has **WPA3**, which is newer.
- **VPN:** Your source marks L2TP/IPsec as preferred. It is a valid historical enterprise VPN combination, but modern VPN choices also include newer protocols/implementations. Do not memorize L2TP/IPsec as universally 'the most secure' VPN.

## Final 60-Second Security Map

| Scenario / Keyword | Think |
|---|---|
| WPA2 encryption | AES-CCMP |
| Modern Wi-Fi generation | WPA3 |
| WPA3-Personal | SAE |
| Enterprise Wi-Fi | 802.1X / EAP / RADIUS |
| Old Wi-Fi encryption | WEP / TKIP → avoid |
| Secure web traffic | HTTPS / TLS |
| IP-layer security | IPsec |
| IPsec encryption | ESP |
| IPsec integrity without encryption | AH |
| DNS authenticity/integrity | DNSSEC |
| Automatic IP assignment | DHCP |
| Private → public IP | NAT/PAT |
| Detect suspicious traffic | IDS |
| Detect + actively block inline | IPS |
| Connection-state firewall | Stateful firewall |
| Packet-by-packet rules | Stateless firewall |
| Web attacks such as SQLi/XSS | WAF |
| Password protection | Salted password hashing |
| Same secret for encrypt/decrypt | Symmetric |
| Public/private key pair | Asymmetric |
| Stored data protection | Encryption at rest |
| Moving data protection | Encryption in transit |
| Server identity | TLS certificate |
| Certificate issuer/trust | CA |
| Extra login factor | MFA |
| Minimum required permissions | Least privilege |
| Fake login page | Phishing |
| Captured message reused | Replay attack |
| Intercept/modify communication | MITM |
| Many password guesses | Brute force |
| Massive distributed traffic attack | DDoS |
| Never automatically trust | Zero Trust |

## Highest-ROI Concepts

1. Encryption at rest vs in transit
2. Symmetric vs asymmetric encryption
3. Hashing vs encryption
4. TLS / HTTPS
5. IPsec / ESP / AH
6. WEP vs WPA vs WPA2 vs WPA3
7. WPA3-Personal / SAE
8. Enterprise Wi-Fi / 802.1X / EAP / RADIUS
9. DNSSEC
10. Stateful vs stateless firewall
11. IDS vs IPS
12. WAF
13. NAT
14. MFA and least privilege
15. Common attacks: phishing, MITM, replay, brute force, DDoS

**Exam pattern:** Identify the security goal first—confidentiality, integrity, authentication, access control, detection, or network translation—then select the technology that directly solves it.