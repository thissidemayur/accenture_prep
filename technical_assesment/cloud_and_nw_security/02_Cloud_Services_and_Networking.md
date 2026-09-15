# Cloud Services & Networking — Accenture Technical Assessment

## 1. Cloud Service Models

### SaaS — Software as a Service

> SaaS provides a complete software application that users consume through the internet without managing the underlying infrastructure.

**Examples:** Gmail, Google Docs

**Analogy:** Like eating at a restaurant—you use the finished service without managing the kitchen.

**🔴 Must Know**
- SaaS → **Use the software/service**
- Provider manages the underlying infrastructure and application.

---

### PaaS — Platform as a Service

> PaaS provides a managed platform on which developers can build, deploy and run applications without managing the underlying infrastructure and operating system.

**Examples:** Google App Engine, Heroku, Microsoft Azure App Service

**Analogy:** Like renting a fully equipped kitchen—you focus on preparing the food rather than managing the kitchen.

**🔴 Must Know**
- PaaS → **Develop/deploy applications**
- Provider manages infrastructure and platform components.

---

### IaaS — Infrastructure as a Service

> IaaS provides virtualized computing infrastructure such as virtual machines, storage and networking resources that users can configure and manage.

**Examples:** Amazon EC2, Azure Virtual Machines, Google Compute Engine

**Analogy:** Like renting an empty building with utilities—you manage much more of the setup yourself.

**🔴 Must Know**
- IaaS → **Manage infrastructure**
- User gets more control than with PaaS or SaaS.

---

## Cloud Service Model Comparison

| Feature | SaaS | PaaS | IaaS |
|---|---|---|---|
| Main idea | Use software | Build/deploy applications | Manage infrastructure |
| User control | Lowest | Medium | Highest |
| Provider manages | Almost everything | Infrastructure/platform | Physical infrastructure |
| User manages | Mainly usage/configuration | Application/data | OS and above |
| Example | Gmail | Google App Engine | Amazon EC2 |

### Memory Hook

> **SaaS = Use**  
> **PaaS = Build**  
> **IaaS = Infrastructure**

### Shared Responsibility — Important Correction

Your original note is a useful exam-level simplification:

```text
SaaS → Provider manages almost everything
PaaS → Provider manages platform; user manages application/data
IaaS → Provider manages physical infrastructure; user manages OS and above
```

The exact responsibility boundary can vary by cloud provider and service.

---

# 2. Private Cloud vs Public Cloud

## Private Cloud

> A private cloud is cloud infrastructure dedicated to a single organization.

### Characteristics
- Dedicated resources/infrastructure.
- Greater control and customization.
- Can provide strong security and compliance capabilities.
- Usually requires more management, expertise and investment.
- Scaling can be more limited than a large public-cloud environment.

### 🔴 Must Know
- Private → **Dedicated to one organization**
- More control
- More customization
- Higher management responsibility/cost

---

## Public Cloud

> A public cloud provides cloud resources through a provider's infrastructure to multiple customers.

### Characteristics
- Provider infrastructure is shared across customers.
- High scalability.
- Faster deployment.
- Usually simpler to get started.
- Security follows a **shared responsibility model**.

### 🔴 Must Know
- Public → **Provider-owned/shared infrastructure**
- High scalability
- Faster deployment
- Shared responsibility for security

---

## Private vs Public Cloud

| Feature | Private Cloud | Public Cloud |
|---|---|---|
| Resource model | Dedicated to one organization | Provider infrastructure shared across customers |
| Scalability | Generally lower | Generally very high |
| Control | High | Lower than private |
| Customization | High | More standardized |
| Deployment | Usually slower | Usually faster |
| Management | More expertise required | Provider manages much of infrastructure |

### ⚠️ MCQ Trap

> **Private cloud does NOT automatically mean "more secure."**

Security depends on architecture, configuration, controls and management.

---

# 3. Virtualization

### Exam-ready definition

> Virtualization is a technology that allows physical computing resources to be divided into multiple isolated virtual environments such as virtual machines.

### Analogy

Imagine one large apartment building divided into many independent apartments. One physical server can similarly host multiple virtual machines.

```text
Physical Server
      ↓
  Hypervisor
 ┌────┼────┐
 ↓    ↓    ↓
 VM1  VM2  VM3
```

Each VM can behave like an independent computer.

---

# Hypervisor

> A hypervisor is software or firmware that creates and manages virtual machines and controls access to physical hardware resources.

### 🔴 Must Know

- Hypervisor → Creates/manages VMs.
- Multiple VMs can run on one physical machine.
- VMs are isolated from one another.
- CPU, memory, storage and networking resources can be allocated to VMs.

---

# Types of Hypervisors

## Type 1 — Bare-Metal Hypervisor

> Type 1 hypervisors run directly on physical hardware without requiring a conventional host operating system underneath them.

Architecture:

```text
Hardware
   ↓
Hypervisor
   ↓
Virtual Machines
```

### Characteristics
- Directly runs on physical server hardware.
- Common in data centers.
- Generally provides better performance and efficiency than Type 2.
- Designed for server/enterprise environments.

### Examples
- VMware ESXi
- Microsoft Hyper-V
- Xen
- KVM

> Note: KVM is commonly classified as Type 1/bare-metal in exam-oriented material because virtualization is integrated into the Linux kernel.

---

## Type 2 — Hosted Hypervisor

> Type 2 hypervisors run on top of a host operating system.

Architecture:

```text
Hardware
   ↓
Host Operating System
   ↓
Hypervisor
   ↓
Virtual Machines
```

### Characteristics
- Requires a host OS.
- Easy to install and use.
- Common for learning, testing and development.
- Generally has more overhead than Type 1.

### Example
- Oracle VirtualBox

---

## Type 1 vs Type 2

| Feature | Type 1 | Type 2 |
|---|---|---|
| Also called | Bare-metal | Hosted |
| Host OS required underneath? | ❌ No conventional host OS | ✅ Yes |
| Runs on | Hardware | Host OS |
| Performance | Generally higher | Generally lower |
| Common use | Data centers | Desktop/testing/development |
| Example | VMware ESXi | VirtualBox |

### 🔥 Memory Hook

> **Type 1 → Hardware first**  
> **Type 2 → Host OS first**

---

# 4. Networking Fundamentals

## LAN — Local Area Network

> LAN connects devices within a relatively limited geographical area such as a home, office or campus.

**Memory:** LAN → **Local**

---

## WAN — Wide Area Network

> WAN connects networks across large geographical areas such as cities, countries or continents.

**Memory:** WAN → **Wide**

---

## LAN vs WAN

| Feature | LAN | WAN |
|---|---|---|
| Coverage | Small/local | Large/geographically distributed |
| Example | Office network | Inter-city/country network |
| Purpose | Connect local devices | Connect distant networks |

---

# 5. Data Link Layer

### Exam-ready definition

> The Data Link Layer is OSI Layer 2 and is responsible for node-to-node delivery using frames and MAC addressing.

### Important concepts

```text
Data Link Layer
├── Frames
├── MAC addresses
└── Switching
```

### 🔴 Must Know

- OSI Layer → **Layer 2**
- Data unit → **Frame**
- Address → **MAC address**
- Device commonly associated → **Switch**

---

# 6. ARP — Address Resolution Protocol

### Exam-ready definition

> ARP is used in IPv4 networks to discover the MAC address associated with a known IPv4 address on the local network.

### Analogy

You know someone's house number but don't know who lives there. ARP effectively asks:

> "Who has this IP address? Tell me your MAC address."

### Basic Flow

```text
Device A knows:
IP = 192.168.1.20

But needs:
MAC address

       ↓

ARP Request
"Who has 192.168.1.20?"

       ↓

Target replies

       ↓

ARP Response
"My MAC address is XX:XX:XX:XX:XX:XX"
```

### 🔴 Must Know

> **ARP → IPv4 address → MAC address**

### ⚠️ Important Trap

ARP is generally used for **IPv4**.

IPv6 uses **Neighbor Discovery Protocol (NDP)** instead.

---

# 7. DHCP

### Exam-ready definition

> DHCP automatically provides IP configuration and other network settings to devices joining a network.

### Common information provided
- IP address
- Subnet mask
- Default gateway
- DNS server information

### 🔴 Must Know

```text
DHCP → Automatic configuration
DORA → Discover → Offer → Request → Acknowledge
Server → UDP 67
Client → UDP 68
```

---

# 8. NAT — Network Address Translation

### Exam-ready definition

> NAT translates IP addresses between private and public address spaces, commonly allowing private-network devices to communicate with external networks using public IP addresses.

### Example

```text
Private network

192.168.1.10 ─┐
192.168.1.11 ─┼── NAT ──→ Public IP ──→ Internet
192.168.1.12 ─┘
```

### 🔴 Must Know
- NAT → Address translation.
- Commonly performed at the network/Internet gateway.
- Private IP addresses are commonly used inside local networks.
- PAT allows many private devices to share one public IP using different port numbers.

### ⚠️ Trap

> NAT ≠ encryption.

NAT translates addresses; it does not encrypt traffic.

---

# BIG PICTURE

```text
CLOUD
│
├── Service Models
│   ├── SaaS → Use
│   ├── PaaS → Build/Deploy
│   └── IaaS → Infrastructure
│
├── Deployment Models
│   ├── Private Cloud
│   └── Public Cloud
│
└── Virtualization
    ├── Type 1 → Hardware → Hypervisor → VM
    └── Type 2 → Hardware → Host OS → Hypervisor → VM


NETWORKING
│
├── LAN / WAN
├── Data Link Layer
│   ├── Frames
│   ├── MAC
│   └── Switch
├── ARP → IP → MAC
├── DHCP → Automatic IP configuration
└── NAT → Private ↔ Public address translation
```

---

# IMPORTANT FACTS TO MEMORIZE

```text
SaaS → Use software
PaaS → Develop/deploy applications
IaaS → Manage infrastructure

Private Cloud → Dedicated to one organization
Public Cloud → Provider infrastructure/shared environment

Virtualization → Multiple virtual environments on physical hardware
Hypervisor → Creates/manages VMs

Type 1 → Bare-metal
Type 2 → Hosted

Type 1 → Hardware → Hypervisor → VM
Type 2 → Hardware → Host OS → Hypervisor → VM

LAN → Local
WAN → Wide

Data Link → Layer 2
Data Link → Frames + MAC
Switch → Layer 2

ARP → IPv4 → MAC
DHCP → Automatic network configuration
NAT → Address translation
PAT → Many private IPs → One public IP + ports
```

---

# COMMON MCQ TRAPS

1. **IaaS means provider manages everything except the application.**  
   ❌ False. The customer manages the guest OS and above.

2. **PaaS means user manages the OS.**  
   ❌ Generally false. The provider manages the platform/OS layer.

3. **SaaS requires the customer to manage the server.**  
   ❌ False.

4. **Private cloud is always more secure than public cloud.**  
   ❌ False. Security depends on implementation.

5. **Type 1 hypervisor requires a host OS.**  
   ❌ False.

6. **Type 2 hypervisor runs directly on hardware.**  
   ❌ False.

7. **ARP converts an IP address into a public IP.**  
   ❌ False. ARP resolves a known IPv4 address to a MAC address locally.

8. **ARP is used to resolve IPv6 addresses.**  
   ❌ False. IPv6 uses NDP.

9. **DHCP only assigns an IP address.**  
   ❌ Incomplete. It can provide subnet mask, gateway, DNS and other settings.

10. **NAT encrypts private traffic.**  
    ❌ False. NAT performs address translation.

---

# EDGE CASES

### Type 1
**Normal:** Runs directly on physical hardware.

**Important nuance:** KVM is commonly classified as Type 1 in exam-oriented material, although its implementation is Linux-kernel based.

### ARP
**Normal:** IPv4 address → MAC address.

**Exception:** IPv6 uses NDP rather than ARP.

### NAT
**Normal:** Private/public address translation.

**Exception:** Many-to-one translation is specifically associated with PAT/NAT overload.

### Cloud Security
**Normal:** Public cloud uses shared responsibility.

**Exception:** The exact responsibility boundary depends on the cloud service and provider.

---

# ACCENTURE QUESTION PATTERNS

### Pattern 1 — Service Model
**Q:** Which cloud service model provides a complete application to the user?  
**Answer:** SaaS

### Pattern 2 — Infrastructure
**Q:** Which model provides virtual machines and networking resources?  
**Answer:** IaaS

### Pattern 3 — Development
**Q:** A developer wants to deploy an application without managing the OS. Which model is suitable?  
**Answer:** PaaS

### Pattern 4 — Virtualization
**Q:** Which hypervisor runs directly on physical hardware?  
**Answer:** Type 1

### Pattern 5 — Networking
**Q:** Which protocol resolves an IPv4 address to a MAC address?  
**Answer:** ARP

### Pattern 6 — Configuration
**Q:** Which protocol automatically assigns IP configuration?  
**Answer:** DHCP

### Pattern 7 — Translation
**Q:** Which technology translates private and public IP addresses?  
**Answer:** NAT

---

# 35 PRACTICE QUESTIONS

## Basic — Q1–10

**Q1. What does SaaS stand for?**  
**Answer:** Software as a Service  
**Why:** SaaS provides ready-to-use software.

**Q2. Which cloud model is mainly used to consume software?**  
**Answer:** SaaS

**Q3. Which cloud model is mainly intended for application development/deployment?**  
**Answer:** PaaS

**Q4. Which cloud model provides infrastructure resources?**  
**Answer:** IaaS

**Q5. Give one SaaS example.**  
**Answer:** Gmail

**Q6. Give one PaaS example.**  
**Answer:** Heroku

**Q7. Give one IaaS example.**  
**Answer:** Amazon EC2

**Q8. What type of cloud is dedicated to one organization?**  
**Answer:** Private cloud

**Q9. What type of cloud generally uses provider-managed shared infrastructure?**  
**Answer:** Public cloud

**Q10. What technology allows multiple VMs to run on one physical machine?**  
**Answer:** Virtualization

## Conceptual — Q11–20

**Q11. What software creates and manages virtual machines?**  
**Answer:** Hypervisor

**Q12. Which hypervisor type runs directly on hardware?**  
**Answer:** Type 1

**Q13. Which hypervisor type requires a host OS?**  
**Answer:** Type 2

**Q14. What is another name for a Type 1 hypervisor?**  
**Answer:** Bare-metal

**Q15. What is another name for a Type 2 hypervisor?**  
**Answer:** Hosted

**Q16. Which hypervisor is commonly used for desktop testing and learning?**  
**Answer:** Type 2

**Q17. Which network covers a relatively small geographical area?**  
**Answer:** LAN

**Q18. Which network covers large geographical areas?**  
**Answer:** WAN

**Q19. Which OSI layer uses frames and MAC addresses?**  
**Answer:** Data Link

**Q20. Which device is commonly associated with Layer-2 switching?**  
**Answer:** Switch

## Scenario — Q21–25

**Q21. A company wants developers to deploy applications without managing the underlying OS. Which cloud model is suitable?**  
**Answer:** PaaS

**Q22. A company wants maximum control over virtual machines, including the guest OS. Which service model is suitable?**  
**Answer:** IaaS

**Q23. A user simply wants to use an online email application without managing its infrastructure. Which model is this?**  
**Answer:** SaaS

**Q24. A physical server runs five isolated virtual servers. What technology enables this?**  
**Answer:** Virtualization

**Q25. A computer knows another device's IPv4 address but needs its MAC address. Which protocol is used?**  
**Answer:** ARP

## Tricky — Q26–30

**Q26. Does private cloud automatically guarantee better security?**  
**Answer:** No  
**Why:** Security depends on implementation and controls.

**Q27. Does a Type 1 hypervisor require a conventional host OS underneath it?**  
**Answer:** No  
**Why:** It runs directly on physical hardware.

**Q28. Does ARP resolve IPv6 addresses to MAC addresses?**  
**Answer:** No  
**Why:** IPv6 uses NDP.

**Q29. Does NAT provide encryption?**  
**Answer:** No  
**Why:** NAT performs address translation.

**Q30. Does every NAT configuration map many private IPs to one public IP?**  
**Answer:** No  
**Why:** PAT commonly does this; NAT also supports other mappings.

## Edge Cases / Mixed — Q31–35

**Q31. Which DHCP message starts the typical DORA process?**  
**Answer:** Discover

**Q32. Which DHCP message confirms the offered configuration?**  
**Answer:** Acknowledge

**Q33. Which cloud model gives the customer the highest control among SaaS, PaaS and IaaS?**  
**Answer:** IaaS

**Q34. Which virtualization architecture is `Hardware → Host OS → Hypervisor → VM`?**  
**Answer:** Type 2

**Q35. Which protocol maps a known IPv4 address to a MAC address on a local network?**  
**Answer:** ARP

---

# QUICK REVISION SHEET

- SaaS → Use software
- PaaS → Develop/deploy applications
- IaaS → Infrastructure
- Private cloud → Dedicated to one organization
- Public cloud → Provider/shared infrastructure
- Virtualization → Multiple virtual environments on physical hardware
- Hypervisor → Creates/manages VMs
- Type 1 → Bare-metal
- Type 2 → Hosted
- LAN → Local
- WAN → Wide
- Data Link → Layer 2
- Data Link → Frames + MAC
- ARP → IPv4 → MAC
- DHCP → Automatic IP configuration
- NAT → Address translation
- PAT → Many private IPs → One public IP + ports

---

# MEMORY HOOKS

### Cloud Service Models

> **SaaS = Use**  
> **PaaS = Build**  
> **IaaS = Infrastructure**

### Hypervisors

> **1 = Hardware first**  
> **2 = Host OS first**

### Networking

> **ARP = Address → MAC**

> **DHCP = Gives configuration**

> **NAT = Translates addresses**

> **LAN = Local**

> **WAN = Wide**

---

# WHAT YOU SHOULD BE ABLE TO ANSWER AFTER THIS TOPIC

You should be able to:

1. Distinguish SaaS, PaaS and IaaS from a scenario.
2. Identify who manages the OS/application in each service model.
3. Distinguish private and public cloud.
4. Explain virtualization and the role of a hypervisor.
5. Distinguish Type 1 and Type 2 hypervisors.
6. Identify LAN, WAN, Data Link Layer, ARP, DHCP and NAT from scenarios.

---

# TOPIC COMPLETION

### 🟢 Covered

This is enough for **Accenture-level fundamentals**.

Do not move on until these distinctions are automatic:

```text
SaaS → Use
PaaS → Build
IaaS → Infrastructure

Type 1 → Hardware → Hypervisor
Type 2 → Hardware → Host OS → Hypervisor

ARP → IPv4 → MAC
DHCP → Automatic configuration
NAT → Address translation
PAT → Address + Port translation
```

---

# CROSS-TOPIC CONNECTIONS

### Cloud
**Virtualization → IaaS → VMs → Networking → NAT**

### Networking
**LAN → Switch → MAC → ARP → IP → Router → NAT → WAN/Internet**

### Cloud Responsibility
**IaaS → PaaS → SaaS**

As you move from **IaaS → PaaS → SaaS**:

> **Provider responsibility increases**  
> **Customer control decreases**
