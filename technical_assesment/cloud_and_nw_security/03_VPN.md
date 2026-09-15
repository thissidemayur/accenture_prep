# VPN — Virtual Private Network

## Accenture Technical Assessment — High-ROI Notes

> **Why this matters:** Recent candidate reports specifically mention VPN questions and "types of VPN" 
in Accenture technical assessments. Treat VPN as a **must-know networking topic**, especially for scenario-based MCQs. 

---

# 1. What is a VPN?

### Exam-ready definition

> **A VPN (Virtual Private Network) creates a logical/private communication path over an untrusted network, commonly the public Internet, using tunneling and, when applicable, encryption to protect traffic.**

### Simple analogy

Imagine two offices in different cities. Instead of building a private physical road between them, they use the public highway but create a **protected private lane** through it.

- Internet = public highway
- VPN tunnel = protected logical path

### Core concept

```text
Without VPN:

Computer ───────── Internet ───────── Server


With VPN:

Computer ═════ Encrypted VPN Tunnel ═════ VPN Gateway
                                             ↓
                                      Private Network
```

### 🔴 Must Know

- VPN = **Virtual Private Network**
- Creates a logical/tunneled connection over another network.
- Public Internet can be the underlying network.
- VPNs can provide **confidentiality through encryption**.
- Authentication is commonly used.
- A VPN does **not automatically make everything anonymous or secure**.

---

# 2. Why Do We Need a VPN?

Without a VPN:

```text
Employee → Public Internet → Company Network
```

A VPN creates a protected tunnel:

```text
Employee
   ↓
VPN Client
   ║
   ║ Protected Tunnel
   ║
Internet
   ║
VPN Gateway
   ↓
Company Network
```

The Internet remains public, but the VPN protects the traffic according to the VPN technology/configuration being used.

---

# 3. Important VPN Categories

For Accenture, focus on:

```text
VPN
│
├── Remote-Access VPN
│
├── Site-to-Site VPN
│
├── IPsec VPN
│
├── MPLS VPN
│
└── GRE Tunnel
```

### Important clarification

**Remote-Access** and **Site-to-Site** describe the connectivity model.

**IPsec, MPLS and GRE** describe technologies/architectures used to provide connectivity or tunneling.

Do not assume all five are exactly the same type of category.

---

# 4. Remote-Access VPN

### Exam-ready definition

> **A remote-access VPN connects an individual user's device to a private/corporate network through a VPN tunnel over a public or untrusted network.**

### Example

```text
Laptop
  ↓
VPN Client
  ║
  ║ VPN Tunnel
  ║
Internet
  ║
VPN Gateway
  ↓
Company Network
```

### Characteristics

- Connects **individual users/devices**.
- Usually uses VPN client software or built-in VPN support.
- Common for remote employees.
- User normally authenticates to the VPN service.
- VPN gateway terminates the connection.

### 🔴 Must Know

> **Remote-Access VPN = Individual device → Corporate network**

### Scenario

> An employee working from home securely accesses internal company applications.

**Answer: Remote-Access VPN**

---

# 5. Site-to-Site VPN

### Exam-ready definition

> **A site-to-site VPN securely connects two or more entire networks through VPN gateways, commonly using IPsec over the public Internet.**

Example:

```text
Office A
 LAN
  ↓
VPN Gateway
  ║
  ║ VPN Tunnel
  ║
Internet
  ║
  ║
VPN Gateway
  ↓
 LAN
Office B
```

### Critical point

Individual computers normally **do not need VPN client software**.

The routers/firewalls/VPN gateways handle the VPN.

### 🔴 Must Know

> **Site-to-Site = Network ↔ Network**

### Scenario

> A company wants to connect its Delhi and Mumbai office networks securely over the Internet.

**Answer: Site-to-Site VPN**

---

# 6. Remote-Access vs Site-to-Site

| Feature | Remote-Access VPN | Site-to-Site VPN |
|---|---|---|
| Connects | Individual device/user | Entire networks |
| Typical user | Remote employee | Organization/branch |
| Client software | Usually required | Usually not on each endpoint |
| Gateway | VPN gateway/server | VPN gateways at sites |
| Example | Employee from home | Branch A ↔ Branch B |
| Main idea | User → Network | Network → Network |

### 🔥 Memory Hook

> **Remote = Person**

> **Site-to-Site = Places**

---

# 7. IPsec VPN

### What is IPsec?

> **IPsec (Internet Protocol Security) is a suite of protocols used to secure IP communications through mechanisms such as encryption, authentication and integrity protection.**

### 🔴 Must Know

- IPsec works at the **IP/network layer**.
- Provides security for IP traffic.
- Can provide:
  - Confidentiality
  - Integrity
  - Authentication
- Commonly used for **site-to-site VPNs**.
- Can also be used for remote-access VPNs.

---

# 8. IPsec Security Concepts

### Encryption

Protects **confidentiality**.

```text
Plaintext
   ↓
Encryption
   ↓
Ciphertext
```

### Integrity

Helps detect whether data was modified.

### Authentication

Verifies the identity of communicating endpoints.

### 🔴 Must Know

```text
Encryption → Confidentiality
Integrity → Detect modification
Authentication → Verify identity
```

---

# 9. AH vs ESP

## AH — Authentication Header

Provides:

- Authentication
- Integrity

It does **not provide encryption/confidentiality**.

## ESP — Encapsulating Security Payload

Can provide:

- Encryption/confidentiality
- Integrity
- Authentication

### 🔴 Must Know

```text
AH  → Authentication + Integrity
ESP → Encryption + Integrity + Authentication
```

### ⚠️ Trap

> **AH does NOT encrypt the payload.**

---

# 10. IPsec Transport Mode vs Tunnel Mode

## Transport Mode

The original IP header remains outside while the payload is protected.

Conceptually:

```text
Original IP Header + Protected Payload
```

Commonly associated with host-to-host communication.

## Tunnel Mode

The **entire original IP packet** is encapsulated/protected, and a new outer IP header is added.

Conceptually:

```text
New IP Header
    +
Original IP Header
    +
Original Payload
```

Commonly used in site-to-site VPNs.

### 🔴 Must Know

> **Tunnel Mode → entire original IP packet is encapsulated**

> **Site-to-Site IPsec → commonly Tunnel Mode**

---

# 11. Site-to-Site IPsec VPN

Your original definition was mostly correct.

### Better exam-ready definition

> **A site-to-site IPsec VPN securely connects two networks through IPsec VPN gateways over an untrusted network such as the Internet.**

### Key idea

```text
Branch A LAN
     ↓
Firewall/VPN Gateway
     ║
     ║ IPsec Tunnel
     ║
Internet
     ║
     ║
Firewall/VPN Gateway
     ↓
Branch B LAN
```

### Important

The VPN gateways normally handle encryption/decryption, so individual devices behind them usually don't need VPN software.

---

# 12. MPLS VPN

Your original definition needs one important correction.

### Exam-ready definition

> **An MPLS VPN uses MPLS technology within a service-provider network to provide logically isolated customer networks using labels and provider routing mechanisms.**

### MPLS

**MPLS = Multiprotocol Label Switching**

Conceptually:

```text
Customer Site A
      ↓
Provider Edge
      ↓
[MPLS Label]
      ↓
Provider Core
      ↓
[MPLS Label]
      ↓
Provider Edge
      ↓
Customer Site B
```

### Important correction

MPLS is a **service-provider technology** that can provide private/logically isolated WAN services.

It is not simply "a private Internet connection."

### Does MPLS encrypt?

> **MPLS does NOT inherently provide encryption.**

If encryption is required, an additional mechanism such as IPsec can be used.

### 🔴 Must Know

```text
MPLS → Label-based forwarding
MPLS VPN → Provider-managed logical isolation
MPLS ≠ encryption by default
```

---

# 13. MPLS VPN vs IPsec VPN

| Feature | MPLS VPN | IPsec VPN |
|---|---|---|
| Main technology | MPLS labels | IPsec security protocols |
| Encryption | ❌ Not inherent | ✅ Yes |
| Common use | Private WAN connectivity | Secure communication over untrusted networks |
| Provider involvement | Usually provider-managed | Can be organization-managed |
| Internet required? | Not necessarily | Commonly uses Internet |
| Main concept | Isolation + forwarding | Security + encryption |

### 🔥 Memory Hook

> **MPLS = Isolation/Forwarding**

> **IPsec = Security/Encryption**

---

# 14. GRE Tunnel

### GRE = Generic Routing Encapsulation

> **GRE is a tunneling protocol that encapsulates one network-layer protocol inside another IP packet, allowing traffic to be carried through an IP network.**

### Basic idea

```text
Original Packet
      ↓
     GRE
      ↓
GRE Header + Original Packet
      ↓
     IP
      ↓
   Network
```

### Why use GRE?

GRE can tunnel traffic between endpoints and is useful when carrying:

- Routing protocol traffic
- Multicast traffic
- Different network protocols
- More complex network topologies

### 🔴 VERY IMPORTANT

> **GRE does NOT encrypt traffic by itself.**

---

# 15. GRE + IPsec

GRE can be combined with IPsec.

```text
Original Traffic
      ↓
     GRE
      ↓
GRE Tunnel Packet
      ↓
    IPsec
      ↓
Encrypted GRE Traffic
      ↓
   Internet
```

### Why combine them?

- **GRE → tunneling/flexibility**
- **IPsec → security/encryption**

### 🔥 Memory Hook

> **GRE = Tunnel**

> **IPsec = Secure**

> **GRE + IPsec = Secure GRE tunnel**

---

# 16. GRE vs IPsec

| Feature | GRE | IPsec |
|---|---|---|
| Main purpose | Tunneling/encapsulation | Security |
| Encryption | ❌ No | ✅ Yes |
| Authentication | Not its main function | ✅ Yes |
| Integrity | Not its main function | ✅ Yes |
| Common combination | GRE + IPsec | Standalone or with GRE |

### MCQ shortcut

> "Tunneling but no encryption" → **GRE**

> "Encrypted IP communication" → **IPsec**

---

# 17. VPN Security Properties

A VPN can provide:

### 1. Confidentiality
Encryption prevents unauthorized parties from reading traffic.

### 2. Integrity
Helps detect unauthorized modification.

### 3. Authentication
Verifies identity.

### 🔴 Must Know

```text
Confidentiality → Can't read
Integrity → Can't secretly modify
Authentication → Who are you?
```

### Important

A VPN does **not** automatically guarantee:

- Complete anonymity
- Malware-free websites
- Perfect endpoint security
- Protection from every attack

---

# 18. VPN vs Proxy

| Feature | VPN | Proxy |
|---|---|---|
| Main purpose | Secure network connection | Intermediary for traffic |
| Encryption | Often/commonly yes | Not inherent |
| Scope | Can protect broad IP traffic | Often application-specific |
| Typical use | Secure remote/network access | Filtering, caching, traffic mediation |

### Trap

> Every proxy is a VPN.

❌ False.

> Every VPN is simply a proxy.

❌ False.

---

# 19. VPN vs Firewall

| Feature | VPN | Firewall |
|---|---|---|
| Main purpose | Secure connectivity/tunnel | Traffic control |
| Encryption | Often yes | Not its primary function |
| Main question | "How do we securely connect?" | "Should this traffic be allowed?" |

They can work together:

```text
Internet
   ↓
Firewall
   ↓
VPN Gateway
   ↓
Private Network
```

---

# 20. VPN — Fast Classification

```text
Remote-Access VPN
→ Individual user/device → private network

Site-to-Site VPN
→ Network → network

IPsec
→ IP-layer security

MPLS VPN
→ Provider-managed logical WAN/VPN

GRE
→ Tunneling/encapsulation
→ No encryption by itself
```

---

# 🔥 TOP 12 FACTS TO MEMORIZE

1. VPN → secure logical connection over an untrusted network.
2. Remote-Access → individual user/device.
3. Site-to-Site → network-to-network.
4. IPsec → security for IP traffic.
5. IPsec → encryption + integrity + authentication.
6. AH → authentication + integrity, no encryption.
7. ESP → encryption + integrity + authentication.
8. IPsec Tunnel Mode → entire original IP packet is encapsulated.
9. MPLS → label-based forwarding.
10. MPLS does not encrypt by default.
11. GRE → tunneling.
12. GRE does not encrypt by itself.

---

# 🟠 IMPORTANT

After the 12 facts, study:

- VPN gateway
- VPN client
- Authentication
- Confidentiality
- Integrity
- GRE + IPsec
- MPLS VPN vs IPsec VPN
- Tunnel vs transport mode
- VPN vs proxy
- VPN vs firewall

---

# 🟢 LOW PRIORITY

Do not waste limited preparation time on:

- Detailed IKE negotiation internals
- Advanced cryptographic mathematics
- Detailed MPLS label-distribution protocols
- Vendor-specific VPN commands
- Advanced enterprise VPN architectures

---

# ⚠️ COMMON MCQ TRAPS

### Trap 1
**Remote-access VPN connects entire branch offices.**

❌ Site-to-site is the appropriate concept.

### Trap 2
**Site-to-site VPN requires VPN software on every employee computer.**

❌ Usually false. Gateways handle the VPN.

### Trap 3
**MPLS automatically encrypts data.**

❌ False.

### Trap 4
**GRE encrypts packets.**

❌ False.

### Trap 5
**IPsec is just an encryption algorithm.**

❌ False. IPsec is a suite of security protocols/mechanisms.

### Trap 6
**AH provides encryption.**

❌ False.

### Trap 7
**ESP only provides encryption.**

❌ Incomplete. ESP can also provide integrity and authentication.

### Trap 8
**VPN guarantees anonymity.**

❌ False.

### Trap 9
**VPN and firewall perform the same function.**

❌ False.

### Trap 10
**GRE and IPsec have the same purpose.**

❌ False.

---

# EDGE CASES

### MPLS

**Normal:** Private/logically isolated provider WAN service.

**Exception:** MPLS itself does not inherently encrypt traffic.

### GRE

**Normal:** Provides tunneling.

**Exception:** GRE alone does not provide confidentiality; IPsec can be added.

### IPsec

**Normal:** Provides security for IP communication.

**Exception:** Exact security services depend on the protocol/mode/configuration.

### Remote Access

**Normal:** Individual device connects to private network.

**Exception:** Exact implementation and client requirements vary by VPN technology.

---

# ACCENTURE QUESTION PATTERNS

Recent candidate reports specifically mention **VPN questions and types of VPN** in Accenture technical assessment experiences. Other candidate reports describe networking/security questions as scenario-based. Treat these as candidate reports, not official question-bank confirmation.

### Pattern 1 — Definition

**Q:** What is the primary purpose of a VPN?

**Answer:** Secure communication

### Pattern 2 — Type identification

**Q:** An employee connects from home to the company's internal network.

**Answer:** Remote-Access VPN

### Pattern 3 — Site scenario

**Q:** Two company branches need their entire networks connected securely over the Internet.

**Answer:** Site-to-Site VPN

### Pattern 4 — Technology identification

**Q:** Which technology provides IP-layer security including encryption?

**Answer:** IPsec

### Pattern 5 — Trap

**Q:** Which technology provides tunneling but does not encrypt data by itself?

**Answer:** GRE

### Pattern 6 — MPLS

**Q:** Which technology uses labels to forward traffic through a service-provider network?

**Answer:** MPLS

### Pattern 7 — Comparison

**Q:** Which is primarily responsible for encryption: GRE or IPsec?

**Answer:** IPsec

---

# 35 PRACTICE QUESTIONS

## Basic — Q1–10

**Q1. What does VPN stand for?**  
**Answer:** Virtual Private Network

**Q2. What is the primary purpose of a VPN?**  
**Answer:** Secure communication

**Q3. What type of VPN connects an individual employee to a corporate network?**  
**Answer:** Remote-Access VPN

**Q4. What type of VPN connects two entire networks?**  
**Answer:** Site-to-Site VPN

**Q5. Which technology provides security for IP traffic?**  
**Answer:** IPsec

**Q6. What does IPsec provide?**  
**Answer:** IP security

**Q7. What does GRE stand for?**  
**Answer:** Generic Routing Encapsulation

**Q8. What is GRE primarily used for?**  
**Answer:** Tunneling

**Q9. Does GRE encrypt traffic by itself?**  
**Answer:** No

**Q10. Does MPLS encrypt traffic by default?**  
**Answer:** No

## Conceptual — Q11–20

**Q11. Which VPN type is most suitable for a remote employee?**  
**Answer:** Remote-Access VPN

**Q12. Which VPN type connects branch office networks?**  
**Answer:** Site-to-Site VPN

**Q13. Which IPsec protocol does not provide encryption?**  
**Answer:** AH

**Q14. Which IPsec protocol can provide encryption?**  
**Answer:** ESP

**Q15. What does AH primarily provide?**  
**Answer:** Authentication and integrity

**Q16. What can ESP provide?**  
**Answer:** Encryption, integrity and authentication

**Q17. Which IPsec mode encapsulates the entire original IP packet?**  
**Answer:** Tunnel Mode

**Q18. Which technology uses labels for forwarding traffic through a provider network?**  
**Answer:** MPLS

**Q19. Which technology provides tunneling without encryption?**  
**Answer:** GRE

**Q20. Which technology can be combined with GRE to provide encryption?**  
**Answer:** IPsec

## Scenario — Q21–25

**Q21. An employee in a hotel needs secure access to internal company applications. What should be used?**  
**Answer:** Remote-Access VPN

**Q22. A company wants to securely connect its Delhi and Mumbai office networks over the Internet. What is appropriate?**  
**Answer:** Site-to-Site VPN

**Q23. A company uses a provider-managed WAN service based on labels. What technology is being used?**  
**Answer:** MPLS

**Q24. A network engineer needs to carry routing/multicast traffic through an IP network using tunneling. What technology is useful?**  
**Answer:** GRE

**Q25. The engineer also needs confidentiality for that GRE traffic. What can be added?**  
**Answer:** IPsec

## Tricky — Q26–30

**Q26. Does site-to-site VPN normally require VPN software on every client PC?**  
**Answer:** No

**Q27. Does MPLS inherently encrypt traffic?**  
**Answer:** No

**Q28. Does AH encrypt the payload?**  
**Answer:** No

**Q29. Does ESP only provide encryption and nothing else?**  
**Answer:** No

**Q30. Does a VPN guarantee complete anonymity?**  
**Answer:** No

## Edge Cases / Mixed — Q31–35

**Q31. Which security property protects data from unauthorized reading?**  
**Answer:** Confidentiality

**Q32. Which security property detects unauthorized modification?**  
**Answer:** Integrity

**Q33. Which security property verifies identity?**  
**Answer:** Authentication

**Q34. Which combination provides tunneling plus encryption?**  
**Answer:** GRE + IPsec

**Q35. Which is primarily responsible for traffic filtering/control rather than tunneling?**  
**Answer:** Firewall

---

# QUICK REVISION SHEET

```text
VPN → Virtual Private Network

Remote-Access → User/device → Network
Site-to-Site → Network → Network

IPsec → Secure IP communication
AH → Authentication + Integrity
ESP → Encryption + Integrity + Authentication

Tunnel Mode → Entire original IP packet encapsulated

MPLS → Label-based forwarding
MPLS VPN → Provider-managed logical isolation
MPLS → No encryption by default

GRE → Tunneling/encapsulation
GRE → No encryption
GRE + IPsec → Tunnel + Security
```

---

# MEMORY HOOKS

### VPN Types
> **Remote = Person**

> **Site-to-Site = Places**

### GRE vs IPsec
> **GRE = Tunnel**

> **IPsec = Secure**

### IPsec
> **AH = Authenticate + Integrity**

> **ESP = Encrypt + Secure**

### Security
> **Confidentiality = Can't read**

> **Integrity = Can't secretly modify**

> **Authentication = Who are you?**

---

# WHAT YOU SHOULD BE ABLE TO ANSWER

After this topic, you should be able to:

1. Explain what a VPN actually does.
2. Distinguish remote-access and site-to-site VPNs.
3. Explain why IPsec is used with VPNs.
4. Distinguish AH and ESP.
5. Distinguish IPsec tunnel and transport modes.
6. Explain why MPLS is not the same as encryption.
7. Explain why GRE is a tunnel rather than an encryption protocol.
8. Explain why GRE + IPsec can be used together.
9. Distinguish VPN from firewall and proxy.
10. Solve scenario-based VPN MCQs.

---

# TOPIC COMPLETION

### 🟢 Covered

For Accenture-level networking/security fundamentals, the **high-ROI VPN concepts are covered**.

Your original notes needed these corrections:

> **MPLS ≠ encryption**

> **GRE ≠ encryption**

> **NAT ≠ VPN**

> **IPsec = security**

> **Remote-Access = individual device**

> **Site-to-Site = entire networks**

If you can answer the 35 questions without looking at the answers, VPN is sufficiently prepared for an Accenture-level fundamentals assessment.

---

# CROSS-TOPIC CONNECTIONS

```text
Remote Employee
      ↓
Remote-Access VPN
      ↓
IPsec
      ↓
Internet
      ↓
VPN Gateway
      ↓
Corporate Network


Branch A
   ↓
Site-to-Site IPsec VPN
   ↓
Internet
   ↓
Site B


GRE
   ↓
Tunneling
   ↓
IPsec
   ↓
Encryption
```

### Related topics to study next

For maximum Networking/Security/Cloud ROI:

1. **IP addressing & subnetting**
2. **Routing**
3. **TCP/IP**
4. **Firewalls**
5. **Encryption & hashing**
6. **Authentication vs authorization**
7. **Network attacks**
8. **OSI model**
