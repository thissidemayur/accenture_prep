# 14 — Routing Fundamentals

## Accenture Technical Assessment — Topic Mastery

> **Placement ROI:** ⭐⭐⭐⭐⭐  
> **Priority:** High  
> **Prerequisite:** Ethernet, Switching, VLAN, Trunking, STP, OSI/TCP-IP  
> **Next connection:** IP Addressing → Subnetting → ICMP/Diagnostics

---

# 1. Exam-Ready Definition

**Routing** is the process of selecting a path and forwarding packets from one network to another.

A **router** is a Layer 3 networking device that examines the destination IP address of a packet and forwards it toward the appropriate destination network.

### One-line memory

> **Switch = moves frames inside a LAN using MAC addresses.**  
> **Router = moves packets between networks using IP addresses.**

---

# 2. Real-Life Analogy

Think of a city.

- **House number** = host IP address
- **Area/colony** = network
- **Road intersection** = router
- **Road** = network link
- **GPS route table** = routing table
- **Next intersection** = next hop

If you want to travel from one colony to another, you need a route.

Similarly, when a host sends a packet to another network, a router decides where that packet should go next.

---

# 3. Why Routing Is Needed

A switch can forward traffic within a Layer 2 network using MAC addresses.

But suppose:

```text
PC-A
192.168.1.10
      |
    Switch
      |
   Router
      |
    Switch
      |
PC-B
192.168.2.20
```

PC-A and PC-B belong to different IP networks.

The switch cannot perform normal Layer 2 forwarding across these different networks.

The router connects the networks:

```text
192.168.1.0/24
       |
     Router
       |
192.168.2.0/24
```

Therefore:

> **Routing is required for communication between different IP networks.**

---

# 4. Layer 3 Routing

Routing primarily operates at **Layer 3 — Network Layer** of the OSI model.

Important Layer 3 concepts:

- IP addresses
- Routing
- Routers
- Routing tables
- ICMP
- IPv4
- IPv6

A router primarily makes its forwarding decision using the **destination IP address**.

---

# 5. What Happens When a Host Sends to Another Network?

Consider:

```text
PC-A
IP:      192.168.1.10
Mask:    255.255.255.0
Gateway: 192.168.1.1

        |
      Router
        |
PC-B
IP: 192.168.2.20
```

PC-A wants to communicate with:

```text
192.168.2.20
```

PC-A determines that:

```text
192.168.2.20
```

is outside its local network.

Therefore, it sends the packet to its **default gateway**.

The router then:

1. Receives the frame.
2. Removes the incoming Layer 2 frame information.
3. Examines the destination IP.
4. Looks at its routing table.
5. Selects the best route.
6. Determines the next hop/outgoing interface.
7. Creates a new Layer 2 frame appropriate for the outgoing network.
8. Forwards the packet.

### Critical concept

The **IP packet is routed**, while the **Layer 2 frame is replaced at each routed hop**.

---

# 6. Default Gateway

A **default gateway** is the router/interface a host uses to reach destinations outside its local IP network.

Example:

```text
PC:
IP address:       192.168.1.10
Subnet mask:      255.255.255.0
Default gateway:  192.168.1.1
```

If the destination is:

```text
192.168.1.50
```

it is local, so the host communicates directly on the LAN.

If the destination is:

```text
192.168.2.50
```

it is remote, so the host sends the traffic toward:

```text
192.168.1.1
```

### Exam trap

The default gateway is **not** the destination server.

It is the local router/interface used to reach remote networks.

---

# 7. Routing Table

A router uses a **routing table** to determine where packets should be forwarded.

A simplified routing table might look like:

| Destination Network | Next Hop | Interface |
|---|---|---|
| 192.168.1.0/24 | Directly connected | G0/0 |
| 192.168.2.0/24 | 10.0.0.2 | G0/1 |
| 0.0.0.0/0 | 10.0.0.1 | G0/1 |

Meaning:

- `192.168.1.0/24` → directly connected
- `192.168.2.0/24` → send to next router `10.0.0.2`
- `0.0.0.0/0` → use as the default route if no more specific route matches

---

# 8. Directly Connected Route

If a router has an interface configured inside a network, it knows that network is directly connected.

Example:

```text
Router interface:
192.168.1.1/24
```

The router knows:

```text
192.168.1.0/24
```

is directly connected.

No next router is required.

---

# 9. Static Routing

A **static route** is manually configured by an administrator.

Conceptually:

```text
Network X
   |
Router A ---- Router B
                |
             Network Y
```

Router A can be manually told:

```text
To reach Network Y,
send traffic to Router B.
```

### Advantages

- Simple for small networks
- Predictable
- No routing protocol overhead
- Useful for specific routes/default routes

### Disadvantages

- Manual configuration
- Does not automatically adapt to topology changes
- Becomes difficult to maintain in large networks

### Memory

> **Static = administrator decides the route.**

---

# 10. Dynamic Routing

In dynamic routing, routers learn routes using **routing protocols**.

Examples:

- RIP
- OSPF
- EIGRP
- IS-IS
- BGP

Dynamic routing allows routers to exchange routing information and adapt when network topology changes.

### Memory

> **Dynamic = routers learn routes from routing protocols.**

---

# 11. Routing Protocol vs Routed Protocol

This distinction is a common MCQ trap.

### Routed protocol

A protocol that carries user traffic and can be routed.

Example:

```text
IP
```

### Routing protocol

A protocol used by routers to exchange routing information.

Examples:

```text
OSPF
RIP
BGP
EIGRP
```

### Easy distinction

> **IP carries the traffic.**  
> **OSPF/RIP/BGP help routers learn where to send it.**

---

# 12. Types of Routing

## A. Static Routing

Configured manually.

## B. Dynamic Routing

Learned through routing protocols.

## C. Default Routing

Used when no more specific route exists.

Example:

```text
0.0.0.0/0
```

For IPv6:

```text
::/0
```

---

# 13. Default Route

A default route is the route used when no more specific route matches the destination.

IPv4:

```text
0.0.0.0/0
```

IPv6:

```text
::/0
```

Think:

> **"If I don't know a more specific route, send it here."**

This is especially common for edge routers sending Internet-bound traffic toward an upstream provider.

---

# 14. Longest Prefix Match

This is one of the most important routing concepts.

Suppose a routing table contains:

```text
10.0.0.0/8
10.1.0.0/16
10.1.1.0/24
0.0.0.0/0
```

Destination:

```text
10.1.1.50
```

All of these routes may match.

Which one wins?

```text
10.1.1.0/24
```

because it has the **longest / most specific prefix**.

### Rule

> **The most specific matching route is preferred.**

Do NOT automatically choose the route with the lowest metric before considering prefix length.

---

# 15. Routing Metrics

When multiple routes to the same destination/prefix are available, routing protocols can use a **metric** to decide which path is preferable.

Possible metrics include:

- Hop count
- Cost
- Bandwidth-related values
- Delay
- Reliability
- Administrative/configured preferences

The exact metric depends on the routing protocol.

### Examples

**RIP:**

> Hop count

**OSPF:**

> Cost

---

# 16. Hop Count

A **hop** generally represents a router traversed by a packet.

Example:

```text
PC
 |
R1
 |
R2
 |
R3
 |
Server
```

The packet passes through multiple routers.

Routing protocols such as RIP use hop count as a routing metric.

### Important

Hop count is not the same thing as physical distance.

A path with fewer hops is not necessarily faster.

---

# 17. RIP

**RIP — Routing Information Protocol**

Important exam facts:

- Dynamic routing protocol
- Distance-vector protocol
- Uses hop count as its metric
- Maximum usable hop count is 15
- 16 hops = unreachable
- Simple but limited for modern large networks

### Memory

> **RIP → Route Information by counting hops.**

---

# 18. OSPF

**OSPF — Open Shortest Path First**

Important facts:

- Dynamic routing protocol
- Link-state routing protocol
- Uses cost as its metric
- Builds knowledge of network topology
- Common in enterprise networks

### Memory

> **OSPF → Link-state + cost.**

---

# 19. BGP

**BGP — Border Gateway Protocol**

BGP is the major routing protocol used to exchange routing information between autonomous systems on the Internet.

Important distinction:

```text
OSPF → commonly used inside an organization
BGP  → commonly used between autonomous systems
```

BGP is therefore an important example of an **inter-domain routing protocol**.

---

# 20. Autonomous System

An **Autonomous System (AS)** is a collection of IP networks and routers under a common routing administration that presents a common routing policy to other networks.

Each AS is identified using an **ASN — Autonomous System Number**.

Conceptually:

```text
Company AS
     |
    BGP
     |
ISP AS
     |
    BGP
     |
Other AS
```

---

# 21. Interior vs Exterior Routing

### IGP — Interior Gateway Protocol

Used within an autonomous system.

Examples:

- OSPF
- RIP
- EIGRP
- IS-IS

### EGP / Exterior routing

Used for routing between autonomous systems.

The key modern example is:

- BGP

### Memory

> **Inside AS → IGP**  
> **Between ASes → BGP**

---

# 22. Router vs Switch

| Feature | Switch | Router |
|---|---|---|
| Main OSI layer | Layer 2 | Layer 3 |
| Main address | MAC | IP |
| Main job | Forward frames | Route packets |
| Typical scope | LAN | Between networks |
| Routing table | Not normally used for basic L2 switching | Yes |
| Broadcast handling | Forwards within VLAN | Does not normally forward L2 broadcasts between interfaces |

### Important nuance

Modern Layer 3 switches can also perform routing.

So:

> A "switch" can be capable of Layer 3 routing if it is a Layer 3 switch.

---

# 23. Router vs Default Gateway

These are related but not identical concepts.

**Router:**

A Layer 3 device/function that forwards traffic between networks.

**Default gateway:**

The router/interface selected by a host for destinations outside its local network.

Therefore:

> The default gateway is a host's configured path toward remote networks.

---

# 24. Routing vs Switching

### Switching

```text
MAC address
     ↓
MAC table
     ↓
Frame forwarding
```

### Routing

```text
Destination IP
     ↓
Routing table
     ↓
Packet forwarding
```

### Memory

> **MAC → Switch**  
> **IP → Router**

---

# 25. Packet Forwarding vs Routing

These terms are related but not identical.

### Routing

Determining the path/next-hop information.

### Forwarding

Actually sending the packet out of the selected interface toward the next hop.

Think:

```text
Routing = decide
Forwarding = send
```

---

# 26. Next Hop

The **next hop** is the next router/device toward the destination.

Example:

```text
R1 ---- R2 ---- R3 ---- Server
```

For a route from R1 toward the server:

```text
Next hop = R2
```

R1 does not necessarily know the entire physical journey for every packet in the simplistic sense; it primarily needs enough routing information to forward toward the next hop.

---

# 27. What Happens to MAC and IP Addresses?

This is a very important interview/MCQ concept.

Suppose:

```text
PC-A → R1 → R2 → Server
```

At each routed hop:

### IP addresses

The source and destination IP addresses generally remain the end-to-end packet addresses, although certain technologies such as NAT can modify them.

### MAC addresses

The Layer 2 source/destination MAC addresses are rewritten for each Ethernet hop.

Example:

```text
Hop 1:
PC-A MAC → R1 MAC

Hop 2:
R1 MAC → R2 MAC

Hop 3:
R2 MAC → Server MAC
```

### Exam trap

> Routers forward based on destination IP, but Ethernet MAC addresses are local to each Layer 2 segment.

---

# 28. Routing and ARP

Routing and ARP often work together in IPv4 Ethernet networks.

Suppose a router determines:

```text
Destination network → send through interface G0/1
Next hop → 192.168.2.1
```

The router may need the next-hop device's MAC address.

It uses **ARP** to resolve:

```text
IPv4 address → MAC address
```

Then it builds the outgoing Ethernet frame.

### Important chain

```text
Destination IP
      ↓
Routing table
      ↓
Outgoing interface / next hop
      ↓
ARP if needed
      ↓
Ethernet frame
      ↓
Forward
```

---

# 29. Routing Between VLANs

Recall:

```text
VLAN 10 → 192.168.10.0/24
VLAN 20 → 192.168.20.0/24
```

Hosts in different VLANs require Layer 3 routing to communicate.

Possible solutions:

### Router-on-a-stick

A router uses subinterfaces connected to a trunk.

```text
Switch
  ||
 trunk
  ||
Router
 ├── VLAN 10 subinterface
 └── VLAN 20 subinterface
```

### Layer 3 switch

A multilayer switch can perform inter-VLAN routing using switched virtual interfaces (SVIs).

### Key rule

> **Different VLANs = different Layer 2 broadcast domains → Layer 3 routing is required for communication between them.**

---

# 30. Routing Loops

A routing loop occurs when packets repeatedly circulate between routers instead of reaching the destination.

Example:

```text
R1 → R2 → R3 → R1 → ...
```

Potential effects:

- Wasted bandwidth
- Packet loss
- Increased latency
- TTL expiration

### TTL

IPv4 packets have a **TTL — Time To Live** field.

Routers decrement TTL as packets are forwarded.

When TTL reaches zero, the packet is discarded.

This helps prevent packets from circulating forever.

---

# 31. ICMP and Routing

ICMP is closely related to routing diagnostics.

Examples:

```text
ping
traceroute / tracert
```

A router may generate ICMP messages when:

- A destination is unreachable
- TTL expires
- Other network-layer errors occur

We will study ICMP and diagnostic tools in depth later.

---

# 32. Route Selection — High-Value Mental Model

When a router receives a packet:

```text
1. Read destination IP
        ↓
2. Find matching routes
        ↓
3. Prefer the most specific prefix
        ↓
4. Apply route preference/metric when relevant
        ↓
5. Determine next hop/outgoing interface
        ↓
6. Resolve Layer 2 next-hop address if necessary
        ↓
7. Build outgoing frame
        ↓
8. Forward
```

This sequence is worth memorizing.

---

# 33. Static vs Dynamic Routing

| Feature | Static | Dynamic |
|---|---|---|
| Configuration | Manual | Learned |
| Adaptation | Limited | Automatic |
| Overhead | Low | Higher |
| Small networks | Good | Good |
| Large changing networks | Poor | Better |
| Administration | Manual | Protocol-assisted |

### Exam trap

Dynamic routing does **not** mean the router randomly chooses routes.

Routing protocols exchange information and use defined algorithms/metrics.

---

# 34. Distance Vector vs Link State

### Distance Vector

Router learns routes based primarily on information received from neighboring routers.

Example:

```text
RIP
```

Conceptual idea:

> "My neighbor says Network X is 4 hops away."

### Link State

Routers build a more complete topology view and calculate paths.

Example:

```text
OSPF
```

Conceptual idea:

> "I know the network topology and can calculate the best path."

### Memory

> **Distance Vector → learns from neighbors**  
> **Link State → builds topology knowledge**

---

# 35. Routing Table vs MAC Address Table

| Routing Table | MAC Address Table |
|---|---|
| Used by routers/L3 devices | Used by L2 switches |
| Destination IP/prefix | Destination MAC |
| Determines Layer 3 path | Determines Layer 2 port |
| Networks/prefixes | MAC-to-port mappings |

---

# 36. Common Routing Terms

### Route

A path/instruction for reaching a destination network.

### Next Hop

The next router toward the destination.

### Gateway

A device/interface providing a path to another network.

### Default Route

Fallback route used when no more specific route matches.

### Routing Table

Collection of known routes.

### Metric

Value used to compare routes according to a routing protocol.

### Prefix

Network portion expressed using CIDR notation such as `/24`.

---

# 37. Common MCQ Traps

## Trap 1

**"Router forwards using MAC addresses."**

❌ Incorrect as the primary Layer 3 routing decision.

Correct:

> Router uses destination IP information for routing.

---

## Trap 2

**"Switch connects different IP networks."**

Usually ❌ for ordinary Layer 2 switching.

Correct:

> Routing is required between different IP networks.

A Layer 3 switch can route.

---

## Trap 3

**"Default gateway is always the Internet."**

❌ Incorrect.

The default gateway is the local router/interface used to reach remote destinations.

---

## Trap 4

**"Default route is always selected."**

❌ Incorrect.

A more specific matching route is preferred.

---

## Trap 5

**"RIP uses bandwidth as its primary metric."**

❌

RIP uses hop count.

---

## Trap 6

**"OSPF is distance vector."**

❌

OSPF is link-state.

---

## Trap 7

**"BGP is mainly a LAN routing protocol."**

❌

BGP is used for inter-domain routing between autonomous systems.

---

## Trap 8

**"MAC addresses remain unchanged from source to destination."**

❌

Ethernet MAC addresses change at routed hops.

---

# 38. Accenture-Style Scenario Questions

### Scenario 1

A PC can communicate with devices in its own subnet but cannot reach another subnet.

Most likely areas to check:

- Default gateway
- Router/interface
- Routing table
- ACL/firewall
- Addressing/subnet configuration

---

### Scenario 2

Two VLANs cannot communicate.

Likely requirement:

> Inter-VLAN routing.

Check:

- Router-on-a-stick
- Layer 3 switch
- SVI
- Trunk configuration
- Default gateways

---

### Scenario 3

A router has:

```text
10.0.0.0/8
10.1.0.0/16
10.1.1.0/24
```

Destination:

```text
10.1.1.25
```

Selected route:

> `10.1.1.0/24`

Reason:

> Longest prefix match.

---

### Scenario 4

A network changes frequently and manually maintaining dozens of routes is becoming difficult.

Better approach:

> Dynamic routing.

---

### Scenario 5

A routing loop causes packets to circulate repeatedly.

Mechanism that helps stop endless IPv4 circulation:

> TTL.

---

# 39. 40 Practice Questions

## Questions

**Q1.** Which OSI layer is primarily responsible for routing?  
**Q2.** Which device primarily performs Layer 3 routing?  
**Q3.** Which address is primarily used for IP routing decisions?  
**Q4.** What is the purpose of a default gateway?  
**Q5.** What is a routing table?  
**Q6.** What does a directly connected route mean?  
**Q7.** What is static routing?  
**Q8.** What is dynamic routing?  
**Q9.** What is a default route in IPv4?  
**Q10.** What is the IPv6 default route?  
**Q11.** What is longest prefix match?  
**Q12.** Which route is more specific: `/16` or `/24`?  
**Q13.** What metric does RIP use?  
**Q14.** What routing approach does OSPF use?  
**Q15.** What is OSPF's basic routing type?  
**Q16.** What is BGP mainly used for?  
**Q17.** What is an autonomous system?  
**Q18.** What does IGP mean?  
**Q19.** Give one example of an IGP.  
**Q20.** What is a routed protocol?  
**Q21.** What is a routing protocol?  
**Q22.** What is the next hop?  
**Q23.** What is packet forwarding?  
**Q24.** How does routing differ from forwarding?  
**Q25.** Do Ethernet MAC addresses normally remain unchanged across routers?  
**Q26.** Does the destination IP normally remain the same across routers?  
**Q27.** What protocol maps IPv4 addresses to MAC addresses on Ethernet?  
**Q28.** What is inter-VLAN routing?  
**Q29.** Name one method of inter-VLAN routing.  
**Q30.** What is router-on-a-stick?  
**Q31.** What is a Layer 3 switch?  
**Q32.** What is a routing loop?  
**Q33.** What mechanism helps prevent endless IPv4 packet circulation?  
**Q34.** What happens when IPv4 TTL reaches zero?  
**Q35.** Is RIP distance-vector or link-state?  
**Q36.** Is OSPF distance-vector or link-state?  
**Q37.** Which is more specific: `192.168.0.0/16` or `192.168.1.0/24`?  
**Q38.** Why is a default route called a fallback route?  
**Q39.** What is the main difference between a routing table and a MAC address table?  
**Q40.** If two hosts are on different IP networks, what Layer 3 function is needed for communication?

---

# 40. Answers

1. Network layer  
2. Router  
3. Destination IP address  
4. Reach remote networks  
5. Collection of routes used for forwarding decisions  
6. Network reachable through a router's own interface  
7. Manually configured routing  
8. Routing learned through routing protocols  
9. `0.0.0.0/0`  
10. `::/0`  
11. Selecting the most specific matching route  
12. `/24`  
13. Hop count  
14. Link-state routing  
15. Link-state  
16. Inter-domain routing  
17. A group of networks under a common routing administration/policy  
18. Interior Gateway Protocol  
19. OSPF  
20. A protocol carrying traffic that can be routed, such as IP  
21. A protocol used to exchange routing information  
22. Next router/device toward destination  
23. Sending packet out selected interface  
24. Routing decides; forwarding sends  
25. No  
26. Generally yes, absent mechanisms such as NAT  
27. ARP  
28. Routing between different VLANs  
29. Router-on-a-stick  
30. Router subinterfaces connected through a trunk  
31. Switch capable of Layer 3 routing  
32. Packets repeatedly circulate between routers  
33. TTL  
34. Packet is discarded  
35. Distance-vector  
36. Link-state  
37. `192.168.1.0/24`  
38. It is used when no more specific route matches  
39. Routing table uses Layer 3 routes; MAC table maps MAC addresses to switch ports  
40. Routing

---

# 41. Rapid Revision

Memorize these:

```text
Routing → Layer 3
Router → IP
Switch → MAC
Default gateway → path to remote networks
Routing table → known routes
Static → manual
Dynamic → learned
Default IPv4 route → 0.0.0.0/0
Default IPv6 route → ::/0
Best match → longest prefix
RIP → distance vector + hop count
OSPF → link state + cost
BGP → inter-domain routing
IGP → inside an AS
Next hop → next router
ARP → IPv4 → MAC
Different VLANs → routing required
MAC → changes per L2 hop
IP → normally end-to-end
TTL → prevents endless IPv4 loops
```

---

# 42. Memory Story

Imagine sending a parcel across cities.

```text
Your house
   ↓
Local road
   ↓
Local intersection
   ↓
Router
   ↓
Another city
   ↓
Another router
   ↓
Destination
```

The **address on the parcel** tells the network where it ultimately needs to go.

Each router asks:

> "Which direction should I send this next?"

It consults its **routing table**.

Then it sends the packet to the **next hop**.

At every router:

```text
Old Layer 2 frame
      ↓
Router examines IP
      ↓
Route selected
      ↓
New Layer 2 frame
      ↓
Next hop
```

That is routing.

---

# 43. Connection With Previous Topics

You should now see the chain:

```text
Ethernet
   ↓
MAC addresses
   ↓
Switching
   ↓
VLANs
   ↓
Broadcast domains
   ↓
STP prevents L2 loops
   ↓
Different networks/VLANs
   ↓
ROUTING
   ↓
IP addresses
   ↓
Subnetting
   ↓
ICMP + diagnostics
```

This is why Routing was placed **after VLAN + STP**.

The next major topic is:

> **15 — IP Addressing**

Then:

> **16 — Subnetting ⭐⭐⭐⭐⭐**

Subnetting deserves serious preparation because it combines networking concepts with calculation-based MCQs.

---

# 44. Completion Checklist

Before marking this topic complete, you should be able to explain without notes:

- [ ] What routing is
- [ ] Why routing is required
- [ ] Router vs switch
- [ ] Default gateway
- [ ] Routing table
- [ ] Static routing
- [ ] Dynamic routing
- [ ] Default route
- [ ] Longest prefix match
- [ ] Routing metrics
- [ ] RIP
- [ ] OSPF
- [ ] BGP
- [ ] Autonomous System
- [ ] IGP
- [ ] Next hop
- [ ] Routing vs forwarding
- [ ] Routing vs switching
- [ ] MAC vs IP behavior across routers
- [ ] ARP's role in forwarding
- [ ] Inter-VLAN routing
- [ ] Router-on-a-stick
- [ ] Layer 3 switch
- [ ] Routing loops
- [ ] TTL

## Final mental model

> **Switch locally. Route between networks.**

> **MAC identifies local Layer 2 delivery. IP identifies Layer 3 destinations.**

> **Routing table decides where the packet goes next.**

> **Longest prefix match chooses the most specific route.**

> **Static routes are manually configured; dynamic routes are learned.**

> **RIP → hop count. OSPF → cost/link state. BGP → inter-domain routing.**
