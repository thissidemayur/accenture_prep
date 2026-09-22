# Accenture Cloud Traffic & Cloud Networking
## 40 High-ROI MCQs — 4-Day Placement Sprint

> **Goal:** Prepare for the kind of scenario-based cloud traffic/networking questions shown in the supplied paid-batch questions.
>
> The supplied questions repeatedly test the same essence: **traffic spikes → auto-scaling + load balancing**. This file deliberately avoids repeating that same question 10 different ways.
>
> Instead, it expands into the next-highest-ROI concepts that can appear around cloud traffic and networking.

---

# PART 1 — 1-MINUTE THEORY MAP

Before solving the questions, memorize this:

```text
Traffic spike             → Auto Scaling
Distribute traffic        → Load Balancer
Static content close      → CDN
Domain → IP               → DNS
Health-based routing      → Health checks
HTTP/HTTPS routing        → L7 Load Balancer
TCP/UDP routing           → L4 Load Balancer

Public subnet             → Route to Internet Gateway
Private subnet            → No direct Internet Gateway route
Private → Internet        → NAT Gateway
Cloud ↔ on-prem           → VPN / Direct Connect
VPC ↔ VPC                 → Peering / Transit Gateway

Stateful instance firewall → Security Group
Subnet-level stateless ACL → Network ACL

Application-layer attacks → WAF
Large-scale DDoS           → DDoS protection service

Multiple AZs              → High availability
Load balancer + AZs       → Distribute failure/load

TLS termination           → Load balancer can handle TLS
Sticky sessions           → Same client tends to same backend
```

---

# PART 2 — 40 HIGH-ROI MCQs

## Q1. Load Balancer Purpose

A web application runs on 10 identical servers. Users should be distributed across these servers instead of sending all requests to one server. Which component is most directly responsible?

A) DNS resolver
B) Load balancer
C) NAT gateway
D) VPN

**Answer: B) Load balancer**

**Why:** A load balancer distributes incoming traffic among backend targets.

- A → Resolves names to addresses.
- B → Distributes traffic.
- C → Provides outbound connectivity for private resources.
- D → Provides secure network connectivity.

---

## Q2. Traffic Spike + Capacity

A service receives a sudden increase in requests and needs additional compute instances automatically.

Which feature addresses the changing capacity requirement?

A) Auto Scaling
B) Static IP
C) DNS caching
D) Network ACL

**Answer: A) Auto Scaling**

**Why:** Auto Scaling adjusts compute capacity according to demand or policy.

---

## Q3. Traffic Spike + Distribution

An application has already added additional instances, but requests must be distributed among those instances.

What is needed?

A) Load balancer
B) NAT gateway
C) VPN
D) StorageClass

**Answer: A) Load balancer**

**Pattern:**

```text
Need MORE servers → Auto Scaling
Need DISTRIBUTE requests → Load Balancer
```

---

## Q4. CDN

A website serves thousands of images, videos, CSS files, and JavaScript files to users around the world. Which technology can reduce latency by caching content closer to users?

A) CDN
B) NAT
C) VPN
D) NACL

**Answer: A) CDN**

**CDN = Content Delivery Network**

---

## Q5. CDN vs Load Balancer

Which statement is most accurate?

A) CDN primarily caches/distributes content closer to users; load balancer distributes requests among backend targets.
B) CDN replaces every database.
C) Load balancer only stores static files.
D) CDN is used only for private VPN connections.

**Answer: A**

This distinction is highly useful in scenario questions.

---

## Q6. DNS

A user enters:

```text
www.example.com
```

The system needs to determine the IP address associated with the hostname.

Which service/concept is involved?

A) DNS
B) NAT
C) WAF
D) NACL

**Answer: A) DNS**

**DNS = Domain Name System**

Think:

> Domain name → IP/address resolution

---

## Q7. DNS Load Distribution

A company wants DNS to direct users toward different application endpoints based on factors such as location or routing policy.

Which technology is relevant?

A) DNS routing
B) File descriptor
C) cgroup
D) VPN encryption

**Answer: A) DNS routing**

DNS can support different routing policies depending on the cloud provider.

---

## Q8. Health Check

A load balancer should stop sending requests to a backend server that has become unhealthy.

Which feature is most directly responsible?

A) Health check
B) NAT
C) Static IP
D) CDN cache

**Answer: A) Health check**

**Pattern:**

> Backend unhealthy → health check → remove/avoid unhealthy target

---

## Q9. L4 vs L7

A load balancer needs to make routing decisions using HTTP paths such as:

```text
/api/*
/images/*
```

Which layer is more appropriate?

A) Layer 2
B) Layer 3
C) Layer 4
D) Layer 7

**Answer: D) Layer 7**

HTTP-aware routing is an application-layer capability.

---

## Q10. L4 Load Balancing

A company needs to distribute TCP connections without inspecting HTTP URLs.

Which type is appropriate?

A) Layer 4 load balancing
B) Layer 7 only
C) DNS cache
D) CDN only

**Answer: A) Layer 4 load balancing**

**Shortcut:**

```text
TCP/UDP → L4
HTTP-aware → L7
```

---

## Q11. Path-Based Routing

Requests to:

```text
/api/*
```

should go to the API service, while:

```text
/images/*
```

should go to the image service.

Which feature is most appropriate?

A) L7/path-based routing
B) NAT
C) Network ACL
D) Static IP

**Answer: A) L7/path-based routing**

---

## Q12. TLS Termination

An organization wants the load balancer to handle HTTPS/TLS encryption before forwarding requests to backend services.

What is this commonly called?

A) TLS termination
B) DNS propagation
C) NAT translation
D) IP fragmentation

**Answer: A) TLS termination**

**TLS = Transport Layer Security**

---

## Q13. Sticky Sessions

A legacy application stores user session state locally on a particular backend server. Which load-balancing feature can help keep a user's requests directed to the same backend?

A) Sticky/session affinity
B) NAT
C) CDN
D) Network ACL

**Answer: A) Sticky/session affinity**

**Important:** Sticky sessions can help legacy stateful applications, but distributed/shared session storage is often preferable for scalable architectures.

---

## Q14. Public Subnet

A subnet contains resources that need direct inbound/outbound Internet connectivity through an Internet Gateway.

Which characteristic is required?

A) Appropriate route to an Internet Gateway
B) Only a NAT Gateway
C) No route table
D) Only a private DNS zone

**Answer: A**

A public subnet is generally defined by having a route to an Internet Gateway, with resources also needing appropriate public addressing/security configuration.

---

## Q15. Private Subnet

A backend database should not be directly reachable from the public Internet.

Where is it commonly placed?

A) Private subnet
B) Public subnet
C) CDN edge
D) Internet Gateway

**Answer: A) Private subnet**

---

## Q16. NAT Gateway

Instances in a private subnet need to download software updates from the Internet but should not accept unsolicited inbound Internet connections.

Which component is commonly used?

A) NAT Gateway
B) Internet Gateway only
C) Network ACL only
D) Load balancer only

**Answer: A) NAT Gateway**

**NAT = Network Address Translation**

Basic pattern:

```text
Private subnet
      ↓
NAT Gateway
      ↓
Internet
```

---

## Q17. Internet Gateway

What is the primary role of an Internet Gateway in a typical public cloud VPC architecture?

A) Provide a path between a VPC and the Internet
B) Store database records
C) Encrypt every application payload
D) Replace the load balancer

**Answer: A**

---

## Q18. NAT vs Internet Gateway

Which statement is correct?

A) NAT Gateway is commonly used for private resources' outbound Internet access; Internet Gateway provides VPC Internet connectivity for appropriately routed public resources.
B) NAT Gateway is a database.
C) Internet Gateway replaces security groups.
D) NAT Gateway is used only for DNS.

**Answer: A**

---

## Q19. Route Table

A cloud subnet needs to determine where packets destined for different networks should be sent.

Which component defines these routing decisions?

A) Route table
B) CDN
C) WAF
D) Load balancer health check

**Answer: A) Route table**

---

## Q20. Security Group

A VM should allow inbound HTTPS traffic on TCP port 443 while restricting other inbound traffic.

Which control is commonly used in AWS-style VPC networking?

A) Security Group
B) CDN
C) DNS
D) NAT Gateway

**Answer: A) Security Group**

---

## Q21. Security Group Nature

Which statement best describes an AWS-style Security Group?

A) Stateful virtual firewall associated with network interfaces/resources
B) Stateless subnet ACL
C) DNS resolver
D) Load-balancing algorithm

**Answer: A**

**Stateful** means return traffic for an allowed connection is automatically allowed according to the security group's connection tracking behavior.

---

## Q22. Network ACL

An administrator wants subnet-level traffic rules that are evaluated independently for inbound and outbound traffic.

Which mechanism is relevant?

A) Network ACL
B) CDN
C) DNS
D) Auto Scaling

**Answer: A) Network ACL**

**ACL = Access Control List**

---

## Q23. Security Group vs NACL

Which distinction is correct?

A) Security Group is stateful; Network ACL is stateless.
B) Both are always identical.
C) NACL is a load balancer.
D) Security Group is a DNS service.

**Answer: A**

This is a very common cloud networking MCQ.

---

## Q24. WAF

An application needs protection against common HTTP-layer attacks such as SQL injection and cross-site scripting.

Which service/control is most relevant?

A) WAF
B) NAT Gateway
C) Route table
D) Auto Scaling

**Answer: A) WAF**

**WAF = Web Application Firewall**

Think:

> HTTP/application-layer attacks → WAF

---

## Q25. DDoS

A public application is experiencing a distributed denial-of-service attack generating huge volumes of traffic.

Which category of protection is relevant?

A) DDoS protection
B) Database indexing
C) File descriptor management
D) CPU scheduling

**Answer: A) DDoS protection**

**DDoS = Distributed Denial of Service**

---

## Q26. WAF vs DDoS

Which statement is most accurate?

A) WAF focuses on application/web traffic rules; DDoS protection focuses on large-scale denial-of-service attacks.
B) WAF replaces DNS.
C) DDoS protection is only for databases.
D) WAF is a CPU scheduler.

**Answer: A**

---

## Q27. VPN

A company wants encrypted connectivity between its on-premises network and a cloud VPC over the Internet.

Which solution is commonly used?

A) Site-to-site VPN
B) CDN
C) Load balancer
D) StorageClass

**Answer: A) Site-to-site VPN**

**VPN = Virtual Private Network**

---

## Q28. Direct Connect

An enterprise requires a dedicated/private network connection from its data center to the cloud rather than relying solely on an Internet-based VPN.

Which type of service is relevant?

A) Dedicated/private cloud connectivity such as Direct Connect
B) CDN
C) WAF
D) NAT Gateway

**Answer: A**

The exact product name differs by cloud provider; AWS calls its service **Direct Connect**.

---

## Q29. VPC Peering

Two virtual private networks need private network connectivity directly between them.

Which concept is relevant?

A) VPC peering
B) CDN
C) WAF
D) Auto Scaling

**Answer: A) VPC peering**

---

## Q30. Transit Gateway

An enterprise has many VPCs and wants a central networking hub instead of creating a large number of individual connections.

Which architecture is relevant?

A) Transit Gateway
B) CDN
C) Security Group only
D) NAT only

**Answer: A) Transit Gateway**

---

## Q31. High Availability

An application should continue operating even if one availability zone fails.

Which architecture helps?

A) Deploy across multiple Availability Zones
B) Use one large VM only
C) Use one physical server
D) Disable health checks

**Answer: A**

**AZ = Availability Zone**

---

## Q32. Load Balancer + Availability Zones

Why would a production application distribute backend instances across multiple Availability Zones?

A) To improve availability and reduce dependence on one zone
B) To eliminate all security requirements
C) To remove the need for DNS
D) To disable scaling

**Answer: A**

---

## Q33. Static IP

A third-party system requires an allowlist containing a stable public IP address.

Which concept is relevant?

A) Static/elastic public IP
B) CDN only
C) Random ephemeral IP
D) Private IP only

**Answer: A**

In AWS, an **Elastic IP** is a static public IPv4 address that can be associated with a resource.

---

## Q34. Bandwidth vs Latency

A network can transfer a large amount of data per second but takes a noticeable time before the first response arrives.

Which characteristic describes the transfer capacity?

A) Bandwidth
B) Latency
C) Authentication
D) Availability

**Answer: A) Bandwidth**

**Bandwidth = amount of data that can be transferred per unit time.**

**Latency = delay.**

---

## Q35. Low-Latency Application

A gaming application needs rapid communication between clients and servers.

Which network characteristic should be minimized?

A) Latency
B) Storage capacity
C) IP address count
D) Disk size

**Answer: A) Latency**

---

## Q36. Reverse Proxy

A component receives client HTTP requests and forwards them to backend application servers while potentially performing TLS termination and routing.

What is this component commonly acting as?

A) Reverse proxy
B) Database replica
C) NAT-only device
D) DNS zone

**Answer: A) Reverse proxy**

A load balancer can also function as a reverse proxy at the application layer.

---

## Q37. Health Check Scenario

A load balancer has three backend instances:

```text
A → healthy
B → unhealthy
C → healthy
```

What should a health-aware load balancer normally do?

A) Continue sending normal traffic to B
B) Stop/avoid routing new traffic to B
C) Shut down A and C
D) Delete the entire VPC

**Answer: B**

---

## Q38. Complete Architecture

A public e-commerce application has:

- sudden traffic spikes
- static images/videos
- private application servers
- a database that must not be Internet-facing
- HTTP attack protection

Which architecture best matches the requirements?

A) CDN + Load Balancer + Auto Scaling + private subnets + WAF
B) One public VM + shared password
C) VPN + one static server only
D) NAT Gateway + WEP + one database

**Answer: A**

Mapping:

```text
Static content      → CDN
Traffic distribution→ Load Balancer
Traffic spikes      → Auto Scaling
Private backend/DB  → Private subnets
HTTP attacks        → WAF
```

---

## Q39. Complete Network Scenario

A company has:

- public web tier
- private application tier
- private database tier
- private application servers need outbound Internet access for updates

Which architecture is most appropriate?

A) Web → public subnet; App/DB → private subnets; private outbound access → NAT Gateway
B) Everything in public subnet
C) Database directly connected to Internet Gateway
D) App tier with no route table

**Answer: A**

---

## Q40. Best Pattern Recognition Question

A question says:

> "Thousands of users suddenly access a service. The system must automatically increase compute capacity and distribute requests among healthy instances."

What should immediately come to mind?

A) Auto Scaling + Load Balancer + health checks
B) VPN + NACL only
C) Static IP + DNS only
D) NAT Gateway + WAF only

**Answer: A**

This is the core pattern from your supplied paid-batch questions, but this time the answer includes the third important component:

> **Auto Scaling = capacity**  
> **Load Balancer = distribution**  
> **Health Check = healthy targets**

---

# PART 3 — THE CLOUD NETWORKING PATTERNS TO MEMORIZE

## Traffic

```text
Traffic suddenly increases
        ↓
Auto Scaling

Many backend instances
        ↓
Load Balancer

Unhealthy backend
        ↓
Health Check

Static global content
        ↓
CDN

HTTP attack
        ↓
WAF

Huge DDoS
        ↓
DDoS Protection
```

## Network

```text
Public Internet
      ↓
Internet Gateway
      ↓
Public subnet

Private subnet
      ↓
NAT Gateway
      ↓
Internet (outbound use case)

On-premises ↔ Cloud
      ↓
VPN / Direct Connect

VPC ↔ VPC
      ↓
Peering / Transit Gateway
```

## Security

```text
Security Group → Stateful resource-level firewall

NACL            → Stateless subnet-level ACL

WAF             → Web/application-layer protection

DDoS protection → Large-scale denial-of-service mitigation
```

## Load Balancing

```text
L4 → TCP / UDP
L7 → HTTP / HTTPS / application-aware routing

Path / host routing → L7

TLS termination → Load balancer can terminate TLS

Sticky sessions → Same client tends toward same backend
```

---

# 4-DAY ACCENTURE PRIORITY

Since your Accenture campus drive is approximately **4 days away**, do NOT spend hours learning every cloud networking feature.

### MUST MEMORIZE

1. Auto Scaling
2. Load Balancing
3. Health Checks
4. CDN
5. DNS
6. Public vs Private Subnet
7. Internet Gateway
8. NAT Gateway
9. Route Tables
10. Security Groups
11. NACL
12. WAF
13. VPN
14. VPC Peering
15. Availability Zones
16. L4 vs L7

### SECOND PRIORITY

17. Direct Connect
18. Transit Gateway
19. Sticky Sessions
20. TLS termination
21. DDoS protection
22. Bandwidth vs latency
23. Reverse proxy
24. Static/Elastic IP

### LOW PRIORITY FOR THE NEXT 4 DAYS

Do not get lost in:

- Advanced BGP configuration
- Detailed packet-level routing
- Advanced CDN cache invalidation internals
- Deep VPC implementation
- Advanced SD-WAN
- Detailed TCP congestion algorithms
- Cloud-provider networking internals

Your immediate goal is **scenario recognition**, not becoming a cloud network engineer in four days.

---

# FINAL 30-SECOND REVISION

```text
MORE TRAFFIC          → Auto Scaling
DISTRIBUTE TRAFFIC    → Load Balancer
UNHEALTHY SERVER      → Health Check
STATIC GLOBAL CONTENT → CDN
DOMAIN → IP           → DNS

PUBLIC SUBNET         → Internet Gateway route
PRIVATE → INTERNET    → NAT Gateway
ROUTING DECISIONS     → Route Table

STATEFUL FIREWALL     → Security Group
STATELESS SUBNET ACL  → NACL

HTTP ATTACKS          → WAF
DDoS                  → DDoS protection

TCP/UDP               → L4
HTTP/HTTPS            → L7

ON-PREM ↔ CLOUD       → VPN / Direct Connect
VPC ↔ VPC             → Peering / Transit Gateway

MULTI-AZ              → High Availability

TLS handled at LB     → TLS termination
SAME CLIENT → SERVER  → Sticky session
```

## One critical correction to your original 10 questions

Your first 10 questions all have **the same answer: Auto-scaling + Load balancing**.

That is useful for identifying the pattern, but it is **poor practice material** if you repeatedly solve them. For the next four days, your time is better spent learning the surrounding concepts above and solving questions where the correct answer changes based on the keyword.

That is why these 40 questions deliberately cover **different cloud traffic/networking concepts instead of rephrasing the same traffic-spike question 40 times**.
