# Common Protocols & Ports — Accenture Technical Assessment

## Priority
🔴 **MUST KNOW**

### Tier 1 — Memorize first

| Protocol | Port | Transport | Purpose |
|---|---:|---|---|
| HTTP | 80 | TCP | Web |
| HTTPS | 443 | TCP* | Secure web |
| SSH | 22 | TCP | Secure remote login |
| FTP | 20/21 | TCP | File transfer |
| SMTP | 25 | TCP | Send/relay email |
| DNS | 53 | UDP/TCP | Name resolution |
| DHCP | 67/68 | UDP | Automatic network configuration |

\* HTTP/3 uses QUIC over UDP 443; for basic exam questions, HTTPS → 443.

## 1. Network Protocol
A **network protocol** is a set of rules that devices/applications follow to communicate.

Examples:
- HTTP → web
- DNS → name resolution
- DHCP → network configuration
- SMTP → email
- SSH → secure remote administration

## 2. Port
A **port number** is a logical transport-layer identifier for a service/application endpoint.

**IP address → host**  
**Port → service endpoint**

Example: `192.168.1.10:443`

---

## 3. HTTP — 80
**HyperText Transfer Protocol**

- Application layer
- Web request/response
- Common methods: GET, POST, PUT, PATCH, DELETE
- Not encrypted by HTTP itself

**HTTP → 80**

---

## 4. HTTPS — 443
HTTP protected using **TLS**.

Provides:
- Confidentiality
- Integrity
- Server authentication through certificates

**HTTPS → 443**

---

## 5. FTP — 20/21
**File Transfer Protocol**

- Port 21 → traditional control connection
- Port 20 → traditional active-mode data connection
- No encryption by itself

**FTP ≠ SFTP**

---

## 6. SFTP — 22
**SSH File Transfer Protocol**

Secure file transfer over SSH.

**SFTP → 22**

It is a separate protocol from FTP, not simply "FTP with encryption."

---

## 7. SSH — 22
**Secure Shell**

Used for:
- Secure remote login
- Server administration
- Secure command execution
- Tunneling
- SFTP

**SSH → 22**

---

## 8. Telnet — 23
Remote terminal/login protocol.

**Telnet → 23**

Major problem: no encryption by default.

**SSH = secure remote login**  
**Telnet = insecure legacy remote login**

---

## 9. SMTP — 25
**Simple Mail Transfer Protocol**

Used primarily for **sending/relaying email**.

**SMTP → 25**

Common submission ports:
- 587 → message submission
- 465 → commonly used for implicit TLS submission

---

## 10. POP3 — 110
**Post Office Protocol version 3**

Used to retrieve email.

**POP3 → 110**

Secure POP3 commonly uses **995**.

**SMTP → send**  
**POP3 → retrieve**

---

## 11. IMAP — 143
**Internet Message Access Protocol**

Used to access and synchronize email stored on a mail server.

**IMAP → 143**

Secure IMAP commonly uses **993**.

### POP3 vs IMAP
- POP3 → download/retrieve oriented
- IMAP → server-side mailbox access/synchronization

---

## 12. DNS — 53
**Domain Name System**

Resolves names such as `example.com` to IP addresses and provides other DNS records.

**DNS → 53**

Commonly:
- UDP 53 → normal queries
- TCP 53 → cases such as zone transfers or responses requiring TCP

**DNS = name resolution**

---

## 13. DHCP — 67/68
**Dynamic Host Configuration Protocol**

Automatically provides:
- IP address
- Subnet mask
- Default gateway
- DNS server

Ports:
- UDP 67 → server
- UDP 68 → client

### DORA
**Discover → Offer → Request → Acknowledgment**

**DHCP = network configuration**

---

## 14. DNS vs DHCP

| DNS | DHCP |
|---|---|
| Name resolution | Network configuration |
| Domain → IP | Gives client IP/configuration |
| Port 53 | UDP 67/68 |

**DNS = Name**  
**DHCP = Configuration**

---

## 15. TFTP — 69
**Trivial File Transfer Protocol**

- UDP 69
- Very simple file transfer
- No normal authentication
- No encryption

**TFTP → 69**

---

## 16. SNMP — 161/162
**Simple Network Management Protocol**

Used for network monitoring/management.

- 161 → queries/management operations
- 162 → traps/notifications

**SNMP → 161/162**

---

## 17. NTP — 123
**Network Time Protocol**

Synchronizes clocks across systems.

**NTP → UDP 123**

Important for logs, security events, certificates and distributed systems.

---

## 18. LDAP — 389
**Lightweight Directory Access Protocol**

Used to access/manage directory information.

**LDAP → 389**

Common secure LDAP:
**LDAPS → 636**

---

## 19. RDP — 3389
**Remote Desktop Protocol**

Used for graphical remote desktop access, especially Windows environments.

**RDP → 3389**

---

## 20. ICMP — No TCP/UDP Port
**Internet Control Message Protocol**

Used for diagnostics and control/error reporting.

Associated with:
- ping
- traceroute/tracert mechanisms

**ICMP does not use TCP/UDP ports.**

---

## 21. TCP vs UDP

### TCP
- Connection-oriented
- Reliable delivery
- Ordered byte stream
- Retransmission
- Flow/congestion control
- Higher overhead

Common: HTTP/HTTPS (traditional HTTP versions), SSH, FTP, SMTP, IMAP, POP3.

### UDP
- Connectionless
- Lower overhead
- No built-in delivery guarantee
- No built-in ordering
- No TCP-style retransmission

Common: DNS queries, DHCP, NTP, SNMP and many real-time applications.

**Memory:** TCP = Reliable. UDP = Lightweight.

---

## 22. Tier-2 Ports

| Protocol | Port |
|---|---:|
| Telnet | 23 |
| SFTP | 22 |
| POP3 | 110 |
| IMAP | 143 |
| SNMP | 161/162 |
| NTP | 123 |
| TFTP | 69 |
| RDP | 3389 |

### Tier-3
LDAP 389  
LDAPS 636  
POP3S 995  
IMAPS 993  
SMTP submission 587  
SMTPS/implicit TLS 465

---

## 23. High-Value Memory Chain

**22 → SSH/SFTP**  
**23 → Telnet**  
**25 → SMTP**  
**53 → DNS**  
**67/68 → DHCP**  
**69 → TFTP**  
**80 → HTTP**  
**110 → POP3**  
**123 → NTP**  
**143 → IMAP**  
**161/162 → SNMP**  
**443 → HTTPS**  
**3389 → RDP**

---

## 24. Accenture-Style Scenario Recognition

1. Normal web traffic → **HTTP / 80**
2. TLS-protected web traffic → **HTTPS / 443**
3. Secure Linux server login → **SSH / 22**
4. Legacy insecure remote login → **Telnet / 23**
5. Automatically assigning an IP → **DHCP / 67/68**
6. Resolving `example.com` → **DNS / 53**
7. Sending/relaying email → **SMTP / 25**
8. Synchronizing mailbox across devices → **IMAP / 143 or 993**
9. Download-oriented email retrieval → **POP3 / 110 or 995**
10. Network device monitoring → **SNMP / 161/162**
11. Clock synchronization → **NTP / 123**
12. Windows graphical remote desktop → **RDP / 3389**
13. Ping/diagnostics → **ICMP / no TCP/UDP port**
14. Real-time application tolerating some packet loss → **UDP**
15. Reliable ordered delivery → **TCP**

---

## 25. Common MCQ Traps

1. HTTP → **80**, HTTPS → **443**
2. SSH → **22**, Telnet → **23**
3. SMTP sends/relays email; POP3/IMAP retrieve/access it
4. DNS resolves names; DHCP provides network configuration
5. SFTP → **22**
6. FTP traditionally uses **20/21**
7. TFTP → **69/UDP**
8. SNMP → **161/162**
9. NTP → **123/UDP**
10. RDP → **3389**
11. ICMP has **no TCP/UDP port**
12. UDP does not guarantee delivery/order
13. TCP provides reliability and ordering
14. Port numbers identify logical service endpoints, not physical ports
15. A default port does not mean the protocol can never run on another port

---

# 26. 35 Practice Questions

1. HTTP port? **80**
2. HTTPS port? **443**
3. Secure remote login? **SSH**
4. SSH port? **22**
5. Telnet port? **23**
6. Email sending protocol? **SMTP**
7. SMTP port? **25**
8. Domain-name resolution? **DNS**
9. DNS port? **53**
10. Automatic IP configuration? **DHCP**
11. DHCP ports? **67/68 UDP**
12. Email retrieval protocol? **POP3**
13. POP3 port? **110**
14. Mailbox synchronization? **IMAP**
15. IMAP port? **143**
16. Secure file transfer over SSH? **SFTP**
17. SFTP port? **22**
18. FTP control port? **21**
19. Traditional FTP active data port? **20**
20. TFTP port? **69/UDP**
21. Network management protocol? **SNMP**
22. SNMP ports? **161/162**
23. Time synchronization? **NTP**
24. NTP port? **123/UDP**
25. Windows remote desktop? **RDP**
26. RDP port? **3389**
27. Protocol with no TCP/UDP port? **ICMP**
28. Reliable ordered transport? **TCP**
29. Lightweight connectionless transport? **UDP**
30. Domain → IP? **DNS**
31. Client receives IP configuration? **DHCP**
32. Port 443? **HTTPS**
33. Port 53? **DNS**
34. Port 22? **SSH**
35. Video conferencing tolerating packet loss? **UDP**

---

## 27. Rapid-Fire Drill

**22?** → SSH/SFTP  
**23?** → Telnet  
**25?** → SMTP  
**53?** → DNS  
**67/68?** → DHCP  
**69?** → TFTP  
**80?** → HTTP  
**110?** → POP3  
**123?** → NTP  
**143?** → IMAP  
**161/162?** → SNMP  
**443?** → HTTPS  
**3389?** → RDP  
**No TCP/UDP port?** → ICMP

---

## 28. One-Minute Memory Story

Your laptop first uses **DHCP** to obtain network configuration.

You type a website name, so **DNS** resolves the name to an IP.

Your browser connects using **HTTP/HTTPS**.

To administer a server, you use **SSH**.

For secure file transfer over SSH, use **SFTP**.

Email is sent/relayed using **SMTP** and accessed using **POP3/IMAP**.

Network devices are monitored with **SNMP**.

Servers synchronize clocks with **NTP**.

For network diagnostics, **ICMP** is used.

---

## 29. Cross-Topic Connections

**DNS + DHCP + ARP**
- DNS = name resolution
- DHCP = network configuration
- ARP = IPv4 address → MAC on local network

**Firewall**
Rules commonly specify protocol, source/destination IP and port.

Example:
`ALLOW TCP 443`

**Encryption**
HTTPS uses TLS to protect HTTP communication.

**Authentication**
SSH can authenticate using passwords or public/private keys.

**Network attacks**
- DNS spoofing → manipulates name resolution
- Sniffing → observes traffic
- MITM → intercepts communication

---

## 30. What You Must Be Able to Answer

1. HTTP port?
2. HTTPS port?
3. SSH port?
4. Telnet port?
5. FTP ports?
6. SFTP port?
7. SMTP port?
8. POP3 port?
9. IMAP port?
10. DNS port?
11. DHCP ports?
12. SNMP ports?
13. NTP port?
14. RDP port?
15. TFTP port?
16. Which protocol has no TCP/UDP port?
17. TCP vs UDP?
18. DNS vs DHCP?
19. SMTP vs POP3/IMAP?
20. FTP vs SFTP?
21. SSH vs Telnet?
22. Why does HTTPS use TLS?
23. What does a port identify?
24. Which protocols commonly use UDP?
25. Which protocols commonly use TCP?

---

## 31. Completion Checklist

- [ ] Protocol definition
- [ ] Port definition
- [ ] IP vs MAC vs port
- [ ] HTTP
- [ ] HTTPS
- [ ] FTP
- [ ] SFTP
- [ ] SSH
- [ ] Telnet
- [ ] SMTP
- [ ] POP3
- [ ] IMAP
- [ ] DNS
- [ ] DHCP
- [ ] TFTP
- [ ] SNMP
- [ ] NTP
- [ ] LDAP
- [ ] RDP
- [ ] ICMP
- [ ] TCP
- [ ] UDP
- [ ] Port memorization
- [ ] Scenario recognition
- [ ] MCQ traps
- [ ] Rapid-fire drill

**Status: 🔴 High-priority topic — do not move on until 22, 25, 53, 67/68, 80 and 443 are instant recall.**
