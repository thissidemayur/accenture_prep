# Computer Networking Concepts — 8

## 1. VLAN — Virtual Local Area Network

### Definition Check
**Status: ⚠️ Partially Correct**

Your core idea is right.

### Exam-ready definition
> VLAN logically divides a Layer-2 switched network into separate broadcast domains, even when devices use the same physical switch.

### Real-life analogy
Imagine one office building divided into departments: HR, Finance and IT.

They are physically inside the same building, but each department has restricted internal communication.

Similarly, a switch can contain multiple VLANs, but devices in different VLANs are logically separated.

### Core Concept
- VLAN operates primarily at **Layer 2 — Data Link**.
- Each VLAN represents a separate **broadcast domain**.
- Devices in the same VLAN can communicate at Layer 2.
- Devices in different VLANs cannot communicate directly through Layer 2.
- Communication between VLANs requires **Layer 3 routing**.
- A router or Layer-3 switch can perform **inter-VLAN routing**.
- VLANs improve segmentation, security and broadcast management.
- VLAN membership can be associated with switch ports.

### Important Sub-concepts

```text
VLAN
├── Layer 2
├── Broadcast domain
├── VLAN ID
├── Access port
├── Trunk port
└── Inter-VLAN routing
```

**Access port:** normally carries traffic for one VLAN.

**Trunk port:** carries traffic for multiple VLANs, commonly using **802.1Q tagging**.

### Exam Focus

#### 🔴 Must Know
- VLAN → Layer 2
- Different VLANs → different broadcast domains
- Inter-VLAN communication → Layer 3 device
- Access vs trunk
- VLAN ≠ physical switch

#### 🟠 Important
- VLAN ID
- 802.1Q tagging
- Broadcast reduction
- VLAN segmentation

#### 🟢 Low Priority
- Detailed VLAN implementation commands
- Vendor-specific configuration

---

## 2. DHCP — Dynamic Host Configuration Protocol

### Definition Check
**Status: ✅ Correct**

### Exam-ready definition
> DHCP automatically provides network configuration such as IP address, subnet mask, default gateway and often DNS server information to clients.

### Real-life analogy
You enter a hotel.

Instead of manually asking reception for a room number, the hotel automatically assigns you one.

DHCP does something similar: when a device joins a network, the DHCP server gives it network configuration.

### Core Concept
- DHCP = **Dynamic Host Configuration Protocol**
- Application-layer protocol.
- Uses **UDP**.
- Server listens on **UDP 67**.
- Client uses **UDP 68**.
- Automatically assigns IP configuration.
- Reduces manual configuration.
- Addresses are commonly leased for a limited period.

### 🔥 DORA

The DHCP process is:

**D — Discover**  
**O — Offer**  
**R — Request**  
**A — Acknowledge**

### 🔴 Must Know

```text
DHCP → Automatic IP configuration
DORA → Discover → Offer → Request → Acknowledge
Server → UDP 67
Client → UDP 68
```

---

## 3. NAT — Network Address Translation

### Definition Check
**Status: ⚠️ Partially Correct**

The statement "multiple private IP addresses into a single public IP" describes the very common **PAT/NAT overload** scenario, not NAT as a whole.

### Exam-ready definition
> NAT translates IP addresses between private and public address spaces, commonly allowing private-network devices to access the Internet using public IP addresses.

### Real-life analogy
Think of an apartment building.

Inside the building, every apartment has its own room number.

But externally, the building has one main street address.

Similarly:

```text
Laptop → 192.168.1.10
Phone  → 192.168.1.11
TV     → 192.168.1.12

        ↓ NAT/PAT

Internet sees → Public IP
```

### Important distinction
**NAT is the general concept.**

**PAT** allows multiple private devices to share **one public IP using different port numbers**.

### Types

| Type | Meaning |
|---|---|
| Static NAT | One private IP ↔ one public IP |
| Dynamic NAT | Private IP mapped to available public IP |
| PAT | Many private IPs ↔ one public IP using ports |

### 🔴 Must Know
> **Many private IPs → one public IP + different ports = PAT**

This is a very common MCQ trap.

### Important correction
NAT does **not automatically mean encryption or security**.

NAT changes addressing. It is not an encryption mechanism.

---

## 4. STP — Spanning Tree Protocol

Your original note said **"didn't get"**, so understand the problem before memorizing the definition.

### The problem STP solves

Imagine:

```text
       Switch A
       /       \
      B         C
       \       /
        -------
```

There are multiple paths between switches.

That's useful for **redundancy**.

But Ethernet switches can forward broadcast frames.

A broadcast can travel:

```text
A → B → C → A → B → C → ...
```

There is no normal Layer-2 mechanism like an IP TTL to stop the frame from endlessly circulating.

Result:

> **Broadcast storm + MAC table instability + network degradation**

### STP's solution

STP creates a **loop-free logical topology**.

It does **not remove the physical cable**.

Instead, it can put a redundant port/path into a **blocking/discarding state**.

Example:

```text
       A
      / \
     B   C
      \ /
      BLOCK
```

If the active path fails, STP can allow the redundant path to become active.

### Real-life analogy
Imagine roads connecting three cities.

You want multiple roads in case one closes.

But if traffic is allowed to continuously circulate around a triangular route with no destination, you'll get chaos.

STP acts like a traffic controller that temporarily closes one road to eliminate the circular route.

If another road fails, it can reopen the backup route.

### Core concepts
- STP = **Spanning Tree Protocol**
- Used to prevent **Layer-2 loops**.
- Works with switches.
- Creates a loop-free logical topology.
- Redundant paths can be blocked.
- Provides network redundancy.
- If an active path fails, a backup path can become usable.

### Root Bridge
STP elects a **Root Bridge**.

The switch with the **lowest Bridge ID** becomes the root bridge.

Bridge ID primarily involves:

```text
Bridge Priority
+
MAC Address
```

If priorities are equal, the lower MAC address wins.

### 🔴 Must Know

```text
STP → prevents Layer-2 loops
STP → prevents broadcast storms
STP → uses redundant paths
Root Bridge → lowest Bridge ID
```

### 🟠 Important
- Root port
- Designated port
- Blocking/discarding
- Bridge ID

### 🟢 Low Priority
- Detailed STP timers
- Vendor-specific implementation

---

## 5. Packet-Filtering Firewall

### Definition Check
**Status: ✅ Correct**

### Exam-ready definition
> A packet-filtering firewall examines packet headers such as source/destination IP, port and protocol and allows or blocks traffic according to rules.

### Real-life analogy
A security guard checks:

```text
Sender
Destination
Type of package
Entry number
```

but doesn't open the package.

That's roughly what basic packet filtering does.

### Core concept
It can inspect:
- Source IP
- Destination IP
- Source port
- Destination port
- Protocol

It generally does **not inspect application payload deeply**.

### Example

```text
Allow TCP
Destination port = 443
```

means HTTPS traffic may be allowed.

### 🔴 Must Know
> **Packet filtering → packet headers**

---

## 6. Stateful Inspection Firewall

### Definition Check
**Status: ✅ Correct**

### Exam-ready definition
> A stateful firewall tracks the state of active network connections and uses that connection context when deciding whether to allow or block packets.

### Real-life analogy
A security guard remembers:

> "This person entered through an authorized entrance five minutes ago."

So when that person's response arrives, the guard recognizes the established interaction.

A stateless guard would inspect each packet independently.

### Example

```text
Client → Server
TCP connection established
```

The firewall records the connection.

When the server sends the legitimate response:

```text
Server → Client
```

the firewall can recognize that it belongs to an existing connection.

### 🔴 Must Know

```text
Stateless → examines packets independently
Stateful → remembers connection state
```

---

## 7. Circuit-Level Gateway

### Definition Check
**Status: ⚠️ Mostly Correct**

The phrase "verify every TCP handshake" is too narrow.

### Exam-ready definition
> A circuit-level gateway operates at the session level and monitors connection establishment, but generally does not inspect the actual application payload.

### Real-life analogy
Imagine a security checkpoint that checks:

> "Is this person authorized to establish a conversation?"

Once the conversation is established, it doesn't inspect every word being spoken.

### Key distinction

```text
Circuit-level
      ↓
Connection/session information
      ↓
Doesn't deeply inspect payload
```

It focuses on **whether a connection is legitimate**, rather than the actual content being transferred.

### 🔴 Must Know
> Circuit-level gateway → **session/connection level**

### 🟠 Important

```text
Circuit-level → connection/session
Application proxy → application/content
```

---

## 8. Application-Level Proxy / Proxy Firewall

### Definition Check
**Status: ⚠️ Mostly Correct**

Your idea is correct, but "highest application layer" should be understood as **OSI Layer 7 / Application Layer**, not that it is somehow "higher quality" than every firewall.

### Exam-ready definition
> An application-level proxy acts as an intermediary between client and server and can inspect application-layer traffic and content before forwarding requests.

### Real-life analogy
Instead of allowing you to talk directly to a company employee, a receptionist receives your request, checks it, and then forwards an appropriate request to the employee.

The proxy is the intermediary.

### Flow

```text
Client
   ↓
Proxy Firewall
   ↓
Internet Server
```

The proxy terminates the client's connection and establishes another connection toward the destination.

### 🔴 Must Know
> Application proxy → Layer 7 → can inspect application-level content.

---

# The BIG Picture

```text
NETWORK ORGANIZATION
        ↓
      VLAN
        ↓
Separate broadcast domains

NETWORK CONFIGURATION
        ↓
      DHCP
        ↓
Automatically assigns IP configuration

ADDRESS TRANSLATION
        ↓
      NAT/PAT
        ↓
Private ↔ Public addressing

LOOP PREVENTION
        ↓
       STP
        ↓
Prevents Layer-2 switching loops

FIREWALLS
   ┌────┴───────────────┐
   ↓                    ↓
Packet Filter       Stateful
   ↓                    ↓
Headers             Connection state

   ↓
Circuit-Level
   ↓
Connection/session

   ↓
Application Proxy
   ↓
Application content
```

---

# Important Comparison — Firewall Types

| Feature | Packet Filter | Stateful Firewall | Circuit Gateway | Application Proxy |
|---|---|---|---|---|
| Main focus | Packet/header | Connection state | Session/connection | Application |
| Payload inspection | Basic/No | Limited/depends | No | Yes |
| Remembers connection | ❌ | ✅ | Connection-oriented | ✅ |
| OSI association | L3/L4 | L3/L4 + state | L5 commonly | L7 |
| Complexity | Low | Medium | Medium | High |
| Key word | **Headers** | **State** | **Session** | **Content** |

> ⚠️ OSI-layer mappings for firewall types are simplified textbook mappings; real commercial firewalls can operate across multiple layers.

---

# MOST IMPORTANT FACTS TO MEMORIZE

| Concept | Remember |
|---|---|
| VLAN | Separate broadcast domains |
| VLAN | Layer 2 |
| Inter-VLAN | Layer 3 routing |
| DHCP | Automatic IP configuration |
| DHCP server | UDP 67 |
| DHCP client | UDP 68 |
| DHCP | DORA |
| NAT | Address translation |
| PAT | Many private IPs → one public IP + ports |
| STP | Prevent Layer-2 loops |
| STP | Root Bridge |
| Packet Filter | Packet headers |
| Stateful Firewall | Connection state |
| Circuit Gateway | Session/connection |
| Application Proxy | Application content |

---

# COMMON MCQ TRAPS

### Trap 1
**"NAT always maps multiple private IPs to one public IP."**

❌ False.

That's specifically characteristic of **PAT/NAT overload**.

### Trap 2
**"VLAN separates physical switches."**

❌ Not exactly.

VLAN logically separates a switched network into **broadcast domains**.

### Trap 3
**"Different VLANs can communicate directly through a switch."**

❌ No.

You need **Layer-3 routing**.

### Trap 4
**"STP removes redundant cables."**

❌ No.

It logically blocks/discards redundant paths.

### Trap 5
**"STP prevents all network failures."**

❌ No.

Its primary purpose is preventing **Layer-2 switching loops**.

### Trap 6
**"Stateful firewall checks only source and destination IP."**

❌ No.

Its key feature is tracking **connection state/context**.

### Trap 7
**"Packet-filtering firewall deeply inspects application data."**

❌ Generally false.

Basic packet filtering primarily examines **packet headers**.

### Trap 8
**"Circuit-level gateway examines the actual payload."**

❌ Generally false.

It focuses on **connection/session establishment**.

### Trap 9
**"Application proxy forwards packets without terminating connections."**

❌ That's not the normal proxy model.

The proxy acts as an intermediary and establishes separate connections.

### Trap 10
**"DHCP assigns only an IP address."**

❌ Incomplete.

It can provide IP address, subnet mask, gateway, DNS and other configuration.

---

# EDGE CASES

### DHCP
**Normal:** DHCP automatically configures the client.

**Exception:** A device can use a manually configured/static IP instead.

### NAT
**Normal:** Private address is translated before traffic reaches the public network.

**Exception:** NAT isn't necessarily one-private-to-one-public; NAT has multiple forms.

### STP
**Normal:** Redundant path is blocked to prevent a loop.

**Exception:** When the active path fails, the redundant path can be activated/reselected.

---

# PREVIOUS-YEAR / REPORTED QUESTIONS

## Candidate-reported Accenture interview question

**Question:** Can you explain what Spanning Tree Protocol is and how it works?

**Answer:** STP prevents Layer-2 loops by creating a loop-free logical topology and blocking redundant paths.

**Context:** Reported as an Accenture Network Engineer interview question in 2016.

> ⚠️ This is **not a verified Technical Assessment MCQ**. It is a candidate-reported interview question.

## Accenture-oriented reported/practice material

Current Accenture preparation resources include questions around **DHCP, NAT/PAT, stateful firewalls, packet filtering, application-layer firewalls and VLAN communication**.

Examples:
- Which protocol dynamically assigns IP addresses? → **DHCP**
- What is the primary purpose of NAT? → **Translate private/public addresses**
- Which NAT type allows many devices to share one public IP using ports? → **PAT**
- Which firewall tracks active connections? → **Stateful firewall**
- Which device connects multiple VLANs? → **Router**
- Which firewall analyzes packet headers? → **Packet-filtering firewall**

> ⚠️ These should be treated as **Accenture-style / reported preparation questions**, not verified official PYQs.

---

# ACCENTURE QUESTION PATTERNS

### Pattern 1 — Direct
**Q:** Which protocol automatically assigns IP addresses?  
**A:** DHCP

### Pattern 2 — Scenario
**Q:** Multiple computers in an office need to share one public IP address.  
**A:** PAT

### Pattern 3 — Identification
**Q:** A firewall tracks established TCP connections.  
**A:** Stateful firewall

### Pattern 4 — Troubleshooting
**Q:** Three switches are connected in a physical loop and broadcast traffic is circulating continuously.  
**A:** STP

### Pattern 5 — Comparison
**Q:** Which firewall examines application-level content?  
**A:** Application-level proxy

### Pattern 6 — VLAN
**Q:** Devices on VLAN 10 cannot communicate with devices on VLAN 20. What is required?  
**A:** Layer-3 routing

---

# 35 PRACTICE QUESTIONS

## Basic — Q1–10

**Q1. What does VLAN stand for?**  
**Answer:** Virtual Local Area Network  
**Why:** It logically segments a switched network.

**Q2. Which OSI layer is primarily associated with VLANs?**  
**Answer:** Data Link  
**Why:** VLAN operates primarily at Layer 2.

**Q3. What does VLAN primarily create?**  
**Answer:** Broadcast domains  
**Why:** Each VLAN is a separate broadcast domain.

**Q4. What device can perform inter-VLAN routing?**  
**Answer:** Router  
**Why:** Communication between VLANs requires Layer-3 routing.

**Q5. What does DHCP stand for?**  
**Answer:** Dynamic Host Configuration Protocol  
**Why:** It dynamically provides network configuration.

**Q6. Which protocol automatically assigns IP configuration?**  
**Answer:** DHCP

**Q7. What is the DHCP process called?**  
**Answer:** DORA

**Q8. What port does a DHCP server use?**  
**Answer:** UDP 67

**Q9. What port does a DHCP client use?**  
**Answer:** UDP 68

**Q10. What does NAT stand for?**  
**Answer:** Network Address Translation

---

## Conceptual — Q11–20

**Q11. What is the main purpose of NAT?**  
**Answer:** Address translation

**Q12. Which NAT technique allows multiple private hosts to share one public IP using ports?**  
**Answer:** PAT

**Q13. What does STP prevent?**  
**Answer:** Layer-2 loops

**Q14. What problem can a Layer-2 loop cause?**  
**Answer:** Broadcast storm

**Q15. What does STP do with redundant paths?**  
**Answer:** Blocks/discards one or more paths

**Q16. What is the central switch in STP called?**  
**Answer:** Root Bridge

**Q17. How is the STP root bridge selected?**  
**Answer:** Lowest Bridge ID

**Q18. What does a packet-filtering firewall primarily inspect?**  
**Answer:** Packet headers

**Q19. What does a stateful firewall track?**  
**Answer:** Connection state

**Q20. What does a circuit-level gateway primarily monitor?**  
**Answer:** Connections/sessions

---

## Scenario — Q21–25

**Q21. A company wants Finance and HR on the same physical switch but isolated logically. What should be used?**  
**Answer:** VLAN

**Q22. Two devices belong to different VLANs. What is required for them to communicate?**  
**Answer:** Layer-3 routing

**Q23. A laptop joins Wi-Fi and automatically receives an IP address, subnet mask and gateway. Which protocol is responsible?**  
**Answer:** DHCP

**Q24. Ten home devices access the Internet through one public IP address. Which technology is most likely being used?**  
**Answer:** PAT

**Q25. Three switches have redundant physical links and broadcasts are circulating endlessly. Which protocol should be used?**  
**Answer:** STP

---

## Tricky — Q26–30

**Q26. Is every NAT configuration many-to-one?**  
**Answer:** No  
**Why:** Static and dynamic NAT can use one-to-one mappings.

**Q27. Does VLAN itself route traffic between VLANs?**  
**Answer:** No  
**Why:** VLAN provides Layer-2 segmentation; routing requires Layer 3.

**Q28. Does STP physically remove redundant links?**  
**Answer:** No  
**Why:** It logically blocks/discards redundant paths.

**Q29. Which firewall remembers active connections: stateful or stateless?**  
**Answer:** Stateful

**Q30. Which firewall type can inspect application-level content?**  
**Answer:** Application proxy

---

## Edge Cases / Mixed — Q31–35

**Q31. Which DHCP message is sent first by a typical client seeking configuration?**  
**Answer:** Discover

**Q32. Which DHCP message tells the server the client wants the offered configuration?**  
**Answer:** Request

**Q33. If two switches are connected with redundant links, should redundancy automatically be removed?**  
**Answer:** No  
**Why:** STP can preserve redundancy while preventing loops.

**Q34. Which is more associated with payload inspection: packet filtering or application proxy?**  
**Answer:** Application proxy

**Q35. Which concept should you associate with "Headers → IP/Port/Protocol"?**  
**Answer:** Packet filtering

---

# QUICK REVISION SHEET

- VLAN → Layer 2 segmentation
- VLAN → Separate broadcast domains
- Inter-VLAN → Layer 3 routing
- DHCP → Automatic network configuration
- DHCP → DORA
- Server → UDP 67
- Client → UDP 68
- NAT → Address translation
- PAT → Many private IPs → One public IP + ports
- STP → Prevent Layer-2 loops
- STP → Prevent broadcast storms
- STP → Root Bridge
- Root Bridge → Lowest Bridge ID
- Packet Filter → Packet headers
- Stateful Firewall → Connection state
- Circuit Gateway → Session/connection
- Application Proxy → Application content

---

# MEMORY HOOKS

### DHCP
**DORA**

> Discover → Offer → Request → Acknowledge

### Firewall types

Remember:

> **Packet → State → Session → Application**

```text
Packet Filter → Packet
Stateful → State
Circuit → Session
Proxy → Application
```

### NAT

> **NAT = Translate addresses**  
> **PAT = Translate addresses + Ports**

---

# WHAT YOU SHOULD BE ABLE TO ANSWER AFTER THIS TOPIC

You should be able to:

1. Explain why VLANs create separate broadcast domains.
2. Explain why different VLANs require Layer-3 routing.
3. Reconstruct the DHCP DORA process.
4. Distinguish NAT from PAT.
5. Explain exactly why STP is necessary.
6. Distinguish packet-filtering, stateful, circuit-level and application-level firewalls.

---

# TOPIC COMPLETION

### 🟢 Covered — but STP needs active recall

Your original understanding of VLAN, DHCP, packet filtering and stateful firewalls was already decent.

Your weak point was **STP**, and your biggest conceptual correction is:

> **NAT ≠ necessarily many-to-one. PAT is the specific many-private-to-one-public-with-ports case.**

For Accenture-level MCQs, this topic is now good enough to move on, but you should be able to answer the 35 questions without looking at the answers before considering it truly mastered.

---

# CROSS-TOPIC CONNECTIONS

### Main networking flow

**VLAN → Trunking → Inter-VLAN Routing → Router/Layer-3 Switch → NAT → Internet**

### Switching flow

**STP → Switches → MAC Address Table → Broadcast → Layer-2 loops**

The goal is to understand these as connected networking concepts rather than memorizing eight isolated definitions.
