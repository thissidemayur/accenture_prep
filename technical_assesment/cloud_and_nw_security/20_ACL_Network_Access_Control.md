# 20 — ACL & Network Access Control

## 1. Exam-Ready Definition

**Access Control List (ACL):** An ordered set of rules used by a router, firewall, switch, host, or other security device to **permit or deny traffic** based on defined criteria such as source/destination IP, protocol, and port.

**Network Access Control:** The broader practice of controlling **who or what can access a network/resource, from where, using which protocol/port, and under what conditions**.

### One-line memory
> **ACL = traffic rules: match → permit/deny → next action.**

---

# 2. Real-Life Analogy

Think of an apartment security gate.

The guard has a list:

- Resident cars → allow
- Delivery vans → allow only during certain hours
- Unknown vehicles → deny
- Emergency services → allow

That list is like an **ACL**.

The guard checks the vehicle against rules **in order**. The first applicable rule determines the decision.

---

# 3. Why ACLs Exist

Without access control, any reachable host may attempt to communicate with another host.

ACLs can enforce policies such as:

- Users in one subnet can access a server subnet.
- Guest networks cannot access internal servers.
- Only HTTPS can reach a public web server.
- SSH administration is allowed only from an admin network.
- A server can reach DNS but not arbitrary destinations.
- A compromised host can be prevented from reaching sensitive systems.

ACLs provide **segmentation and traffic filtering**, but they are not a complete security system.

---

# 4. ACL vs Firewall vs Authentication vs Authorization

| Concept | Main question |
|---|---|
| ACL | Should this traffic be permitted or denied? |
| Firewall | What network/application traffic should be allowed, blocked, inspected, or logged? |
| Authentication | Who/what are you? |
| Authorization | What are you allowed to do? |
| NAC | Should this device/user be allowed onto the network under the policy? |

**Important:** An ACL is commonly a mechanism used to implement access-control policy. A firewall may use ACL-like rules plus state tracking, application inspection, NAT, logging, IPS, etc.

---

# 5. What Can an ACL Match?

Depending on the device/platform, ACL rules may match:

- Source IP address
- Destination IP address
- Source port
- Destination port
- Protocol: TCP, UDP, ICMP, etc.
- Interface/direction
- IPv4/IPv6 traffic
- Packet attributes supported by that platform

Example policy:

```text
ALLOW source 10.0.10.0/24 → destination 10.0.20.10 → TCP/443
DENY  all other traffic
```

Meaning: clients in `10.0.10.0/24` can access the server at `10.0.20.10` over HTTPS, while other traffic is denied by the final rule.

---

# 6. ACL Rule Structure

A simplified ACL entry can be thought of as:

```text
IF traffic matches <conditions>
THEN <permit / deny>
```

Example:

```text
source = 192.168.1.0/24
protocol = TCP
destination port = 443
→ PERMIT
```

The exact syntax differs between vendors and operating systems. For Accenture-style conceptual questions, focus on **matching criteria, ordering, direction, and default behavior**.

---

# 7. Rule Ordering — Extremely Important ⭐⭐⭐⭐⭐

ACL rules are commonly processed **top-to-bottom**.

The first matching rule is applied.

Example:

```text
1. DENY  10.0.0.50 → server
2. PERMIT 10.0.0.0/24 → server
```

Traffic from `10.0.0.50` matches rule 1 first → **DENIED**.

If the rules were reversed:

```text
1. PERMIT 10.0.0.0/24 → server
2. DENY  10.0.0.50 → server
```

Traffic from `10.0.0.50` matches rule 1 → **PERMITTED**.

### Exam trap
> A later rule normally does **not** override an earlier matching rule.

---

# 8. Implicit Deny

Many ACL implementations have an implicit **deny-all** at the end if no rule matches.

Conceptually:

```text
Rule 1 → permit selected traffic
Rule 2 → deny selected traffic
...
Implicit deny → everything else
```

Therefore, if an administrator intends to allow traffic not explicitly listed, the policy must account for it.

### Memory hook
> **ACL: explicit rules first, implicit deny last.**

Exact behavior can vary by platform/context, so vendor documentation matters for real configuration.

---

# 9. Standard vs Extended ACLs

In classic Cisco terminology:

### Standard ACL
Primarily filters using **source IPv4 address**.

Conceptual example:

```text
permit 192.168.10.0/24
```

### Extended ACL
Can filter using more information, commonly:

- Source IP
- Destination IP
- Protocol
- Source port
- Destination port

Conceptual example:

```text
permit TCP
source 192.168.10.0/24
→ destination 10.0.0.10
→ destination port 443
```

### Exam memory
> **Standard = source-oriented.**
>
> **Extended = source + destination + protocol/ports.**

Do not assume every vendor uses the exact same terminology.

---

# 10. Inbound vs Outbound ACL

ACLs can often be applied to an interface in a particular direction.

### Inbound
Traffic is evaluated as it **enters** an interface.

```text
Network A → [Interface] → Router
                 ↑
              inbound
```

### Outbound
Traffic is evaluated as it **leaves** an interface.

```text
Router → [Interface] → Network B
             ↓
          outbound
```

### Common trap
Inbound/outbound is relative to the **interface**, not to the entire network.

---

# 11. Stateless ACL vs Stateful Firewall

### Stateless filtering
Each packet is evaluated independently against rules.

It does not inherently understand whether a packet belongs to an already established connection.

### Stateful firewall
Maintains connection/session state.

For example:

```text
Client → Server : TCP SYN
Server → Client : SYN-ACK
Client → Server : ACK
```

A stateful firewall can track that connection and recognize subsequent packets as part of an established flow.

### Exam comparison

| Feature | Stateless ACL | Stateful Firewall |
|---|---|---|
| Packet-by-packet rules | Yes | Can do this too |
| Connection state | No inherent state tracking | Yes |
| Complexity | Lower | Higher |
| Typical use | Basic filtering | Advanced traffic control |

---

# 12. ACL and Ports

ACLs can restrict services by port.

Common examples:

| Service | Typical port | Protocol |
|---|---:|---|
| HTTP | 80 | TCP |
| HTTPS | 443 | TCP |
| SSH | 22 | TCP |
| DNS | 53 | UDP/TCP |
| DHCP server | 67 | UDP |
| DHCP client | 68 | UDP |
| FTP control | 21 | TCP |
| RDP | 3389 | TCP/UDP depending on implementation |

Example policy:

```text
PERMIT TCP from users → web-server:443
DENY  TCP from users → web-server:22
```

Users can access the web service but cannot use SSH.

---

# 13. ACL and Subnets

ACLs become powerful when combined with subnetting and VLANs.

Example:

```text
VLAN 10 — Employees — 10.10.10.0/24
VLAN 20 — Servers   — 10.10.20.0/24
VLAN 30 — Guests    — 10.10.30.0/24
```

Policy:

```text
Employees → Servers : ALLOW HTTPS
Guests    → Servers : DENY
Guests    → Internet: ALLOW
```

This creates **logical segmentation**.

---

# 14. ACL + VLAN + Routing

Remember the chain:

```text
Host
 ↓
Switch
 ↓
VLAN
 ↓
Default Gateway / L3 Switch / Router
 ↓
ACL
 ↓
Destination network
```

A Layer-2 switch does not normally route traffic between VLANs.

Inter-VLAN traffic needs a Layer-3 routing function, where ACLs can often be applied to control that traffic.

---

# 15. Network Access Control (NAC)

**Network Access Control (NAC)** is broader than a simple packet ACL.

NAC can evaluate whether a device/user should receive network access based on policy.

Possible factors include:

- User identity
- Device identity
- Authentication status
- Device security posture
- Operating-system state
- Location/network segment
- Compliance requirements

Conceptual flow:

```text
Device connects
      ↓
Authenticate / identify
      ↓
Check policy/posture
      ↓
Allowed?
 ┌────┴────┐
Yes       No
 ↓         ↓
Network   Block/quarantine/restrict
access
```

### Important distinction
> **ACL filters traffic. NAC controls network admission/access based on policy.**

---

# 16. 802.1X

**802.1X** is a network access-control standard commonly used for port-based access control.

High-level participants:

- **Supplicant** — client/device requesting access
- **Authenticator** — switch or wireless access point controlling the port
- **Authentication server** — commonly a RADIUS server

Conceptual flow:

```text
Client (Supplicant)
       ↓ authentication
Switch/AP (Authenticator)
       ↓
RADIUS / Authentication Server
       ↓
Accept / Reject
```

### Exam trap
The switch/AP is generally the **authenticator**; the backend RADIUS server performs the authentication service.

---

# 17. AAA

AAA commonly means:

- **Authentication** — Who are you?
- **Authorization** — What are you allowed to do?
- **Accounting** — What did you do / how was access used?

NAC and 802.1X frequently integrate with AAA systems.

---

# 18. Least Privilege

**Least privilege** means granting only the access required to perform the intended task.

Example:

A monitoring server needs read-only access to metrics.

Bad policy:

```text
ALLOW everything
```

Better policy:

```text
ALLOW required monitoring traffic only
DENY unnecessary access
```

Least privilege reduces the impact of compromised accounts/devices.

---

# 19. Default Deny vs Default Allow

### Default deny
Everything is blocked unless explicitly allowed.

```text
Unknown → DENY
```

Advantages:

- Stronger security posture
- Smaller attack surface

Disadvantage:

- Requires careful rule design
- Can accidentally block legitimate traffic

### Default allow
Everything is allowed unless explicitly blocked.

Easier initially, but generally provides a weaker security boundary.

### Exam answer
For sensitive systems, **default deny + explicit allow rules** is usually the stronger security principle.

---

# 20. ACL vs NAT

These are frequently confused.

**NAT** changes/ translates IP addresses, and sometimes ports.

**ACL** controls whether traffic is allowed or denied.

Example:

```text
Private client
10.0.0.10
   ↓ NAT
203.0.113.10
```

NAT performs translation.

An ACL may separately determine whether that traffic is permitted.

> **NAT = translate. ACL = filter/control.**

---

# 21. ACL vs VPN

**VPN:** creates a protected/tunneled communication path between endpoints/networks.

**ACL:** controls traffic according to policy.

They can work together.

Example:

```text
Remote employee
      ↓
     VPN
      ↓
Corporate network
      ↓
     ACL
      ↓
Only permitted resources
```

VPN does not automatically mean the user can access everything inside the network.

---

# 22. ACL vs Firewall

A simple ACL may provide packet filtering.

A modern firewall can provide much more:

- Stateful inspection
- NAT
- Application awareness
- User-based policies
- URL filtering
- Logging
- IPS integration
- VPN functions
- TLS inspection in some deployments

Therefore:

> **ACL is a filtering/control mechanism; firewall is a broader security control.**

---

# 23. Host-Based vs Network-Based Access Control

### Host-based
Applied on an individual endpoint/server.

Examples:

- OS firewall
- Host ACL
- Local service restrictions

### Network-based
Applied at network infrastructure/security boundaries.

Examples:

- Router ACL
- Switch ACL
- Network firewall
- NAC

A strong architecture often uses **defense in depth** rather than relying on a single control.

---

# 24. ACL Logging

Logging can help answer:

- Which traffic was denied?
- Which source generated it?
- Which destination was targeted?
- Which rule matched?
- When did it happen?

Logging is useful for troubleshooting and security monitoring, but excessive logging can create noise and performance/storage concerns.

---

# 25. Common ACL Design Principles

1. Define the security requirement first.
2. Use the narrowest rule that satisfies the requirement.
3. Place specific rules before broad rules.
4. Remember implicit/default behavior.
5. Verify direction: inbound vs outbound.
6. Verify source and destination carefully.
7. Restrict ports/protocols when possible.
8. Log important denies/allows where appropriate.
9. Test after changes.
10. Document why each rule exists.
11. Remove obsolete rules.
12. Follow least privilege.

---

# 26. Common MCQ Traps ⭐⭐⭐⭐⭐

### Trap 1
**ACL and authentication are the same.**

False.

Authentication verifies identity. ACLs enforce traffic/resource rules.

### Trap 2
**The last matching ACL rule wins.**

Usually false for ordered ACL processing.

The first applicable rule generally determines the result.

### Trap 3
**ACL changes IP addresses.**

False. NAT performs address translation.

### Trap 4
**VPN automatically grants unrestricted internal access.**

False. Access can still be restricted by ACLs, firewalls, authorization, NAC, etc.

### Trap 5
**Inbound means traffic entering the network.**

Not necessarily. It means entering the **specific interface** where the ACL is applied.

### Trap 6
**Standard ACL can normally filter by destination port.**

Classic standard ACLs are primarily source-address based; extended ACLs provide richer matching.

### Trap 7
**NAC and ACL are identical.**

False.

NAC is broader and can control admission based on identity/device posture/policy.

### Trap 8
**A deny rule is always needed at the bottom.**

Not necessarily; many ACL systems have an implicit deny. Platform behavior must be checked.

---

# 27. Accenture-Style Question Patterns

Expect conceptual questions such as:

- Which device/control filters traffic according to IP/port rules?
- What happens when multiple ACL rules match?
- What is the purpose of an implicit deny?
- Difference between standard and extended ACLs?
- Inbound vs outbound ACL?
- ACL vs firewall?
- ACL vs NAT?
- What is least privilege?
- What is NAC?
- What is 802.1X?
- Which component acts as the authenticator?
- What does RADIUS commonly provide?
- Which VLAN should be blocked from server access?
- Which rule should be placed first?
- Which port should be permitted for HTTPS?

---

# 28. Scenario Questions

## Scenario 1
A company wants employees to access a web server only through HTTPS.

**Answer:** Permit TCP/443 from the employee network to the server and deny unnecessary other traffic.

---

## Scenario 2
A guest VLAN must access the Internet but not internal servers.

**Answer:** Use routing/firewall/ACL policy to deny guest-to-internal traffic while permitting the required Internet path.

---

## Scenario 3
An administrator places:

```text
PERMIT 10.0.0.0/24
DENY 10.0.0.50
```

Why can `10.0.0.50` still pass?

**Answer:** The broad permit matches first.

---

## Scenario 4
Only the management subnet should SSH into routers.

**Answer:** Permit TCP/22 from the management subnet to the management targets and deny unauthorized SSH sources.

---

## Scenario 5
A laptop connects to a switch and must authenticate before receiving normal network access.

**Answer:** Think **802.1X/NAC**.

---

# 29. 40 Practice Questions

### Q1
What is the primary purpose of an ACL?

A. Encrypt packets
B. Translate IP addresses
C. Permit or deny traffic according to rules
D. Resolve domain names

**Answer: C**

### Q2
ACL stands for:

A. Access Control List
B. Application Communication Layer
C. Address Conversion Logic
D. Access Communication Link

**Answer: A**

### Q3
Which is commonly used as an ACL matching criterion?

A. Source IP
B. Destination IP
C. Protocol
D. All of the above

**Answer: D**

### Q4
What is usually true about ordered ACL processing?

A. Last rule always wins
B. First matching rule is applied
C. Random rule is selected
D. Rules are ignored

**Answer: B**

### Q5
What is an implicit deny?

A. Automatic encryption
B. Default blocking of traffic that matches no explicit permit rule
C. NAT translation
D. DNS failure

**Answer: B**

### Q6
A standard ACL in classic Cisco terminology primarily filters on:

A. Source IP
B. Destination port
C. URL
D. Application name

**Answer: A**

### Q7
Extended ACLs can commonly inspect:

A. Source IP only
B. Source/destination IP, protocol and ports
C. MAC address only
D. DNS records only

**Answer: B**

### Q8
Inbound ACL means:

A. Traffic enters the interface
B. Traffic enters the country
C. Traffic leaves the network
D. Traffic enters the application

**Answer: A**

### Q9
Outbound ACL means:

A. Traffic leaves the interface
B. Traffic leaves the Internet
C. Traffic enters the interface
D. Traffic is encrypted

**Answer: A**

### Q10
Which control translates private IP addresses to public addresses?

A. ACL
B. NAT
C. ARP
D. STP

**Answer: B**

### Q11
Which principle gives users only the access required for their task?

A. Availability
B. Least privilege
C. Broadcasting
D. NAT

**Answer: B**

### Q12
Which is generally the stronger security model for sensitive resources?

A. Default allow
B. Default deny
C. Allow all
D. No filtering

**Answer: B**

### Q13
Which port is associated with HTTPS?

A. 21
B. 22
C. 80
D. 443

**Answer: D**

### Q14
Which port is commonly used by SSH?

A. 22
B. 23
C. 53
D. 443

**Answer: A**

### Q15
A guest VLAN should not access internal servers. Which control can enforce this traffic policy?

A. ACL
B. DNS alone
C. DHCP alone
D. NTP

**Answer: A**

### Q16
What is the major difference between ACL and authentication?

A. They are identical
B. Authentication verifies identity; ACL controls traffic/access according to rules
C. ACL verifies passwords
D. Authentication translates IP addresses

**Answer: B**

### Q17
NAC primarily deals with:

A. Network admission/access policy
B. File compression
C. DNS resolution
D. Packet encryption only

**Answer: A**

### Q18
802.1X is associated with:

A. Port-based network access control
B. DNS
C. NAT
D. HTTP

**Answer: A**

### Q19
In 802.1X, the endpoint requesting access is the:

A. Authenticator
B. Supplicant
C. Router
D. Firewall

**Answer: B**

### Q20
In a typical 802.1X deployment, a switch/AP acts as the:

A. Supplicant
B. Authenticator
C. DNS server
D. Certificate authority

**Answer: B**

### Q21
Which server is commonly used as the backend authentication server with 802.1X?

A. RADIUS
B. DNS
C. DHCP
D. NTP

**Answer: A**

### Q22
AAA means:

A. Authentication, Authorization, Accounting
B. Address, Access, Allocation
C. Authentication, ARP, ACL
D. Application, Authorization, Addressing

**Answer: A**

### Q23
Which is broader than a simple packet-filtering ACL?

A. NAC
B. MAC address
C. MTU
D. ARP

**Answer: A**

### Q24
What happens if a broad permit appears before a specific deny?

A. Specific deny always overrides it
B. The broad permit may match first and allow the traffic
C. Both are ignored
D. NAT decides

**Answer: B**

### Q25
Which rule should generally appear first?

A. Broad permit
B. More specific exception/deny when required
C. Random rule
D. No rule

**Answer: B**

### Q26
Which control is most directly associated with connection/session tracking?

A. Stateful firewall
B. Stateless ACL
C. DNS
D. DHCP

**Answer: A**

### Q27
A stateless ACL generally evaluates:

A. Each packet against rules
B. Only usernames
C. Only DNS records
D. Only encrypted data

**Answer: A**

### Q28
Which statement is correct?

A. ACL creates VPN tunnels
B. VPN and ACL can be used together
C. NAT authenticates users
D. DNS blocks all attacks

**Answer: B**

### Q29
Which policy best demonstrates least privilege?

A. Allow all ports
B. Allow only required TCP/443 access
C. Allow all internal traffic
D. Disable all security controls

**Answer: B**

### Q30
What is the main purpose of ACL logging?

A. Replace authentication
B. Help visibility, troubleshooting and security monitoring
C. Encrypt packets
D. Assign IP addresses

**Answer: B**

### Q31
Which layer/function is responsible for routing between different IP networks?

A. Layer 3 routing
B. Layer 1 signaling
C. DNS
D. DHCP

**Answer: A**

### Q32
ACLs can commonly be applied to traffic between:

A. VLANs through a Layer-3 device
B. Only computers in the same room
C. Only DNS servers
D. Only wireless clients

**Answer: A**

### Q33
A company wants only administrators from `10.1.1.0/24` to SSH to routers. What should be restricted?

A. TCP/22 by source network
B. UDP/53 only
C. TCP/80 only
D. ICMP only

**Answer: A**

### Q34
Which statement about inbound/outbound direction is correct?

A. It is relative to the interface
B. It is always relative to the entire company
C. Inbound always means Internet traffic
D. Outbound always means LAN traffic

**Answer: A**

### Q35
Which is NOT primarily the purpose of an ACL?

A. Traffic filtering
B. Access policy enforcement
C. IP address translation
D. Restricting protocols/ports

**Answer: C**

### Q36
Which architecture provides defense in depth?

A. One security control only
B. Multiple complementary controls such as NAC, ACLs, firewalls and host controls
C. No ACLs
D. Default allow everywhere

**Answer: B**

### Q37
A firewall denies packets because they do not match any permitted rule. What concept is this consistent with?

A. Default deny
B. NAT
C. DHCP
D. STP

**Answer: A**

### Q38
What does authorization answer?

A. Who are you?
B. What are you allowed to access/do?
C. What is your IP address?
D. What is your MAC address?

**Answer: B**

### Q39
What does authentication answer?

A. Who are you?
B. Which port is open?
C. Which route is shortest?
D. Which IP should be translated?

**Answer: A**

### Q40
A device must prove its identity and security posture before joining a restricted network. Which concept is most relevant?

A. NAC
B. NAT
C. STP
D. ARP

**Answer: A**

---

# 30. Rapid Revision Sheet

```text
ACL = ordered traffic-control rules

Match criteria:
source IP
 destination IP
 protocol
 ports
 direction/interface

Rule processing:
first matching rule → action
implicit/default deny may follow

Standard ACL:
primarily source IP (classic terminology)

Extended ACL:
source + destination + protocol + ports

Inbound:
enters interface

Outbound:
leaves interface

Stateless ACL:
packet-by-packet

Stateful firewall:
tracks connections/sessions

NAT:
translates addresses/ports

VPN:
protected/tunneled communication

NAC:
controls network admission/access using policy

802.1X:
port-based access control

Supplicant:
client requesting access

Authenticator:
switch/AP controlling access

RADIUS:
commonly backend authentication server

AAA:
Authentication
Authorization
Accounting

Least privilege:
minimum required access

Default deny:
block unless explicitly permitted
```

---

# 31. Memory Story

Imagine a **corporate building**.

At the entrance, a security system checks whether your laptop/user is allowed into the building → **NAC**.

You authenticate → **Authentication**.

The system determines which rooms you may enter → **Authorization**.

Once inside, each department has doors separating areas → **VLANs/segmentation**.

At a doorway, a rule list says:

```text
Marketing → allowed into Marketing servers
Guests → denied from Finance
Admins → SSH allowed
Everyone → HTTPS allowed to public web server
```

That rule list is the **ACL**.

If no rule permits the traffic, the security policy may end with **implicit/default deny**.

A firewall may additionally track the connection and inspect more sophisticated traffic.

This gives the whole picture:

```text
NAC → Who/what may enter?
Authentication → Who are you?
Authorization → What may you do?
ACL → Which traffic is permitted?
Firewall → What traffic should be filtered/inspected?
NAT → Which addresses/ports are translated?
VPN → How is traffic protected/tunneled?
```

---

# 32. Cross-Topic Connections

### ACL ↔ VLAN
VLANs separate broadcast domains; ACLs can restrict traffic between them.

### ACL ↔ Routing
Routing determines where packets go; ACLs can determine whether selected traffic is permitted.

### ACL ↔ Subnetting
CIDR/subnets allow ACL rules to target groups of addresses precisely.

### ACL ↔ Firewall
ACLs provide rule-based filtering; firewalls can add stateful and application/security capabilities.

### ACL ↔ Authentication/Authorization
Identity controls determine who a user/device is and what it can do; ACLs can enforce network-level restrictions.

### ACL ↔ NAC
NAC controls admission to the network; ACLs can control subsequent traffic.

### ACL ↔ VPN
A VPN can provide secure connectivity, while ACLs restrict what the VPN-connected user/network can reach.

---

# 33. Completion Checklist

Before marking this topic complete, you should be able to explain without notes:

- [ ] What an ACL is
- [ ] Why ACLs are used
- [ ] Common ACL match criteria
- [ ] First-match rule processing
- [ ] Implicit/default deny
- [ ] Standard vs extended ACL
- [ ] Inbound vs outbound
- [ ] Stateless vs stateful filtering
- [ ] ACL vs firewall
- [ ] ACL vs NAT
- [ ] ACL vs VPN
- [ ] Least privilege
- [ ] Default deny
- [ ] NAC
- [ ] 802.1X
- [ ] Supplicant/authenticator/RADIUS
- [ ] AAA
- [ ] ACL + VLAN + routing
- [ ] Why rule order matters
- [ ] How to solve scenario-based ACL questions

## Final exam rule

> **For every ACL question, think: WHAT traffic? FROM WHERE? TO WHERE? WHICH PROTOCOL/PORT? WHICH DIRECTION? WHICH RULE MATCHES FIRST? WHAT HAPPENS IF NOTHING MATCHES?**
