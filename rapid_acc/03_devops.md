# Accenture DevOps / Kubernetes — Container Isolation, cgroups & Namespaces
## High-ROI Theory + 30 Placement MCQs

> Goal: Remember the small set of Kubernetes/container concepts needed to solve scenario-based placement questions.
>
> **Important:** This is not a complete Kubernetes chapter. It focuses on isolation, resource control, security, scheduling, storage, and the exact patterns appearing in the supplied questions.

---

# PART 1 — HIGH-ROI THEORY

## 1. The Most Important Distinction: Namespaces vs cgroups

This is the concept you said you forgot. Memorize this first.

### Linux Namespaces → ISOLATION

Namespaces control **what a process can see**.

Think:

> **Namespace = visibility / isolation**

Examples:

- PID namespace → isolates process IDs/process visibility
- Network namespace → isolates network interfaces, routes, ports, etc.
- Mount namespace → isolates filesystem mount view
- User namespace → isolates user/group IDs
- IPC namespace → isolates certain inter-process communication resources

### cgroups → RESOURCE CONTROL

**cgroups = Control Groups**

cgroups control and account for **how much resources a process/container can use**.

Think:

> **cgroup = resource limits**

Common resources:

- CPU
- Memory
- PIDs
- I/O

### The exam shortcut

```text
"Cannot see / access another environment"
        ↓
     Namespace

"Cannot consume too much CPU / memory"
        ↓
       cgroup
```

This distinction alone can solve many MCQs.

---

# 2. PID Namespace

**PID = Process ID**

A PID namespace isolates the process ID view.

Scenario:

> Container must not see host-level processes.

Think:

> **PID namespace**

---

# 3. Network Namespace

A network namespace provides an isolated network environment.

It can have its own:

- Network interfaces
- IP addresses
- Routing table
- Network ports

Scenario:

> Isolate the network environment of containers.

Think:

> **Network namespace**

Do not confuse this with NetworkPolicy.

---

# 4. Mount Namespace

Mount namespaces isolate the filesystem mount view available to a process.

Scenario:

> Processes should have different views of mounted filesystems.

Think:

> **Mount namespace**

For Kubernetes storage questions, also think about:

- Volumes
- PersistentVolume (PV)
- PersistentVolumeClaim (PVC)
- Mount configuration

---

# 5. User Namespace

A user namespace isolates user/group ID mappings.

It can help reduce the impact of a process running as root inside a container by mapping that identity differently outside the namespace.

Scenario:

> Prevent container root from directly being equivalent to host root.

Think:

> **User namespace + least privilege**

---

# 6. Cgroups

**cgroups = Control Groups**

cgroups provide resource accounting and limiting.

### Common placement scenarios

If the question says:

- container consumes too much memory
- container consumes too much CPU
- prevent resource exhaustion
- CPU quota
- memory limit
- resource contention

Think:

> **cgroups**

Example:

```text
Container A → CPU limit 500m
Container B → Memory limit 512Mi
```

The exact Kubernetes configuration is normally expressed through resource requests/limits, while the underlying Linux resource control is implemented using cgroups.

---

# 7. Kubernetes Requests vs Limits

This is a useful distinction.

### Request

A resource **request** tells the scheduler approximately how much resource the workload needs and influences scheduling.

### Limit

A resource **limit** places an upper bound on resource usage.

For example:

```yaml
resources:
  requests:
    cpu: "500m"
    memory: "256Mi"
  limits:
    cpu: "1"
    memory: "512Mi"
```

For placement MCQs:

```text
Scheduling / placement need → Request
Maximum resource usage → Limit / cgroup enforcement
```

---

# 8. Container Privileged Mode

A privileged container receives greatly expanded access to the host.

This weakens container isolation and can expose host devices/capabilities.

Scenario:

> Container is allowed to access host devices or perform highly privileged operations.

Think:

> **Privileged mode = major security risk**

Avoid privileged containers unless there is a specific requirement.

---

# 9. Linux Capabilities

Linux capabilities split traditional root privileges into smaller privileges.

Instead of giving a process every root capability, unnecessary capabilities can be dropped.

Security principle:

> **Give only the privileges required.**

Scenario:

> Reduce privileges available to a container.

Think:

> **Drop unnecessary Linux capabilities**

---

# 10. Device cgroups

A container may need access to a specific hardware device such as a USB device.

Device controls can restrict which devices a container can access.

Scenario:

> One container needs a USB/GPU/device while others must not access it.

Think:

> **Device access control / device cgroups**

Do NOT solve this by mounting the host's entire `/dev` directory into every container.

---

# 11. Kubernetes Namespaces

Kubernetes also has a concept called a **Kubernetes Namespace**.

Do not confuse:

- Linux namespaces → process/runtime isolation mechanism
- Kubernetes Namespace → logical grouping/isolation boundary for Kubernetes resources

Kubernetes namespaces are useful for organizing and separating workloads, teams, environments, and resource policies.

Example:

```text
production namespace
development namespace
testing namespace
```

However:

> A Kubernetes Namespace alone does NOT magically provide complete security isolation.

Additional controls may be needed, such as RBAC, NetworkPolicy, Pod Security controls, and storage/access controls.

---

# 12. Storage Isolation

If different services must not access each other's data:

Think about:

- Separate volumes/PVCs
- Correct mount configuration
- Access permissions
- RBAC where applicable
- Application-level authorization

The supplied question's intended answer is:

> **Separate namespaces + isolated persistent volumes per service**

For placement purposes, the keyword is:

> **Isolated storage / separate volumes**

---

# 13. PersistentVolume and PersistentVolumeClaim

**PV = PersistentVolume**

A PV represents storage available to the cluster.

**PVC = PersistentVolumeClaim**

A PVC is a request for storage by a workload.

Simple model:

```text
Application / Pod
       ↓
      PVC
       ↓
      PV
       ↓
Actual storage
```

Do not confuse storage isolation with cgroups.

```text
Storage → PV / PVC / volume configuration
CPU / Memory → cgroups / resource limits
```

---

# 14. StorageClass

**StorageClass** describes classes of storage and can support dynamic provisioning.

It is not itself a security isolation mechanism.

Scenario:

> "All pods should not share the same storage."

Do not automatically answer "StorageClass."

Think about:

> Volume/PVC access and isolation.

---

# 15. Node Affinity

Node affinity influences where a Pod is scheduled.

Scenario:

> GPU workloads must run on GPU nodes.

Typical pattern:

```text
GPU nodes
   ↓
node label
   ↓
node affinity
   ↓
GPU workload scheduled there
```

Important distinction:

> **Node affinity → placement**

It is not primarily a resource isolation mechanism.

---

# 16. Taints and Tolerations

Another useful scheduling concept:

### Taint

A node can repel pods unless they tolerate the taint.

### Toleration

A pod can tolerate a matching node taint.

Basic idea:

```text
Node taint → "keep unwanted pods away"
Toleration → "this pod is allowed"
```

For a GPU-only node pool, taints/tolerations can be combined with labels/affinity.

---

# 17. mTLS

**mTLS = Mutual Transport Layer Security**

Normal TLS usually authenticates the server.

mTLS provides:

> **mutual authentication + encryption**

Both sides present/validate certificates.

Scenario:

> Encrypt and authenticate communication between microservices.

Think:

> **Service mesh + mTLS**

Examples of service-mesh technologies include Istio and Linkerd, but the exam usually cares about the concept rather than the product.

---

# 18. NetworkPolicy

**NetworkPolicy** controls which network traffic is allowed to/from Pods when supported by the cluster's network implementation.

Scenario:

> Service A should not be able to communicate with Service B.

Think:

> **NetworkPolicy**

This is different from:

- PID namespace → process isolation
- cgroup → resource control
- volume/PVC → storage
- node affinity → scheduling

---

# 19. AppArmor / Seccomp

These are additional security controls.

### AppArmor

**AppArmor** can restrict what programs are allowed to do using security profiles.

Think:

> Application behavior restrictions.

### Seccomp

**seccomp = secure computing**

It can restrict the system calls a process is allowed to make.

Think:

> **System-call filtering**

For the current placement level, know the distinction but don't spend excessive time on internals.

---

# 20. The One Table to Memorize

| Requirement in question | Think of |
|---|---|
| Isolate what processes can see | Linux namespaces |
| Cannot see host processes | PID namespace |
| Isolate network environment | Network namespace |
| Isolate filesystem mount view | Mount namespace |
| Isolate user IDs / reduce root impact | User namespace |
| Limit CPU | cgroups / CPU limits |
| Limit memory | cgroups / memory limits |
| Prevent resource exhaustion | cgroups |
| Specific hardware access | Device controls / device cgroups |
| Reduce root privileges | Drop capabilities / user namespaces |
| Container has host-level access | Privileged mode = risky |
| Separate application storage | Volumes / PVCs |
| Kubernetes resource grouping | Kubernetes Namespace |
| Restrict Pod-to-Pod traffic | NetworkPolicy |
| Schedule onto GPU nodes | Node affinity |
| Repel pods from special nodes | Taints |
| Allow a pod onto tainted node | Tolerations |
| Encrypt/authenticate service-to-service traffic | mTLS |
| Restrict application behavior | AppArmor |
| Restrict system calls | seccomp |
| Storage provisioning class | StorageClass |
| Persistent storage object | PV |
| Workload storage request | PVC |

---

# PART 2 — 30 ACCENTURE-STYLE MCQs

## Q1. CPU Resource Control

A container continuously consumes CPU and affects other workloads. Which mechanism is primarily responsible for enforcing CPU limits at the Linux container level?

A) PID namespace
B) cgroups
C) AppArmor
D) DNS

**Answer: B) cgroups**

**Why:** cgroups control and account for resources such as CPU and memory.

- A → process visibility/isolation.
- B → resource control.
- C → application security profile.
- D → name resolution.

---

## Q2. Memory Exhaustion

A container must not consume more than its assigned memory limit.

A) cgroups
B) Network namespace
C) PID namespace
D) RADIUS

**Answer: A) cgroups**

**Pattern:** Memory limit → cgroup.

---

## Q3. Process Visibility

A container must not be able to see host processes.

A) CPU quota
B) PID namespace
C) StorageClass
D) mTLS

**Answer: B) PID namespace**

**Pattern:** Processes → PID namespace.

---

## Q4. Resource vs Isolation

Which statement is correct?

A) Namespaces primarily control CPU quotas.
B) cgroups primarily isolate process visibility.
C) Namespaces provide isolation/visibility boundaries, while cgroups control resources.
D) Both are only Kubernetes storage mechanisms.

**Answer: C**

**Why:** This is the most important distinction in this topic.

---

## Q5. USB Device

Only one container should access a USB sensor.

A) Give all containers privileged mode
B) Use device-level access controls/device cgroups
C) Share `/dev` with all containers
D) Disable CPU limits

**Answer: B**

**Pattern:** Specific hardware → device access control.

---

## Q6. Privileged Container

A container is accidentally run with privileged mode.

What is the main concern?

A) It gets faster DNS.
B) It can obtain extensive host-level/device access.
C) It automatically receives more storage.
D) It disables all namespaces.

**Answer: B**

Privileged mode significantly weakens isolation.

---

## Q7. Linux Capabilities

An administrator wants to reduce the privileges available to a container.

A) Add all capabilities
B) Drop unnecessary Linux capabilities
C) Mount `/dev`
D) Disable cgroups

**Answer: B**

---

## Q8. User Namespace

Which mechanism can help separate container user IDs from host user IDs?

A) User namespace
B) NetworkPolicy
C) StorageClass
D) Node affinity

**Answer: A**

---

## Q9. Kubernetes Namespace

A company wants separate logical environments for development and production.

A) Kubernetes Namespaces
B) CPU cgroups only
C) PID namespaces only
D) mTLS only

**Answer: A**

Kubernetes Namespaces provide logical grouping of resources.

---

## Q10. Storage Isolation

Two services must not access each other's persistent application data.

A) Shared PVC
B) Separate storage/PVC configuration with appropriate access controls
C) Same hostPath for all pods
D) Disable networking

**Answer: B**

Storage isolation should be designed explicitly rather than relying on network isolation.

---

## Q11. PV

What does PV stand for?

A) PersistentVolume
B) ProcessVirtualization
C) PrivateVolume
D) PodVersion

**Answer: A**

---

## Q12. PVC

What is a PVC?

A) PersistentVolumeClaim
B) PodVirtualController
C) ProcessVolumeCluster
D) PrivateVirtualContainer

**Answer: A**

A PVC is a workload's request for persistent storage.

---

## Q13. StorageClass

What is the primary purpose of a Kubernetes StorageClass?

A) Control CPU scheduling
B) Define classes/provisioning behavior for storage
C) Encrypt service traffic
D) Isolate process IDs

**Answer: B**

---

## Q14. GPU Scheduling

A workload requires a GPU and must run on GPU nodes.

A) Node affinity
B) PID namespace
C) AppArmor only
D) PVC only

**Answer: A**

Node affinity influences Pod placement.

---

## Q15. Taint

A GPU node should repel normal workloads.

A) Taint the node
B) Disable networking
C) Add a PVC
D) Enable privileged mode

**Answer: A**

---

## Q16. Toleration

A GPU workload is allowed to run on a GPU node that has a matching taint.

Which Kubernetes mechanism allows the Pod to tolerate the taint?

A) Toleration
B) PID namespace
C) cgroup
D) StorageClass

**Answer: A**

---

## Q17. Microservice Encryption

A company wants encrypted and mutually authenticated communication between internal microservices.

A) Plain HTTP
B) mTLS
C) Shared filesystem
D) CPU quota

**Answer: B**

mTLS provides encryption and mutual authentication.

---

## Q18. mTLS Meaning

What does mTLS mean?

A) Multiple Transfer Layer Service
B) Mutual Transport Layer Security
C) Managed TCP Login Service
D) Memory Transport Layer System

**Answer: B**

---

## Q19. Pod-to-Pod Traffic

Service A should not be allowed to send network traffic to Service B.

Which Kubernetes control is most directly relevant?

A) NetworkPolicy
B) StorageClass
C) cgroup
D) PVC

**Answer: A**

---

## Q20. PID vs CPU

A question says:

> "Container A should not see processes running inside Container B."

Which answer is better?

A) CPU cgroup
B) PID namespace
C) CPU request
D) StorageClass

**Answer: B**

The requirement is about **visibility**, not resource consumption.

---

## Q21. CPU Contention

Two containers compete for CPU and one consumes excessive CPU.

A) PID namespace
B) CPU cgroup/resource limit
C) PVC
D) EAP

**Answer: B**

---

## Q22. Memory Contention

One container consumes nearly all host memory.

A) Memory cgroup/resource limit
B) NetworkPolicy
C) Node affinity
D) AppArmor only

**Answer: A**

---

## Q23. System Calls

Security policy should restrict the system calls available to a container.

A) seccomp
B) StorageClass
C) PVC
D) Node affinity

**Answer: A**

**Pattern:** System calls → seccomp.

---

## Q24. Application Security Profile

A container needs a profile restricting what operations an application can perform.

A) AppArmor
B) PVC
C) cgroup
D) DNS

**Answer: A**

---

## Q25. Network Isolation

Which Linux mechanism creates an isolated network environment?

A) Network namespace
B) PID namespace
C) User namespace
D) Memory cgroup

**Answer: A**

---

## Q26. Filesystem Mount Isolation

A process should have an isolated view of filesystem mounts.

A) Mount namespace
B) CPU cgroup
C) NetworkPolicy
D) mTLS

**Answer: A**

---

## Q27. Resource Exhaustion

Which statement best describes cgroups?

A) They primarily isolate process visibility.
B) They control/account for resource usage such as CPU and memory.
C) They provide TLS certificates.
D) They schedule Pods to GPU nodes.

**Answer: B**

---

## Q28. Requests vs Limits

Which statement is correct?

A) Requests influence scheduling; limits define an upper resource boundary.
B) Requests are always security policies.
C) Limits only affect DNS.
D) Requests replace namespaces.

**Answer: A**

---

## Q29. Multi-Tenant Security

A platform hosts workloads from multiple teams. Which combination provides foundational process/resource isolation?

A) Namespaces + cgroups
B) Shared host filesystem + privileged containers
C) Unlimited resources + shared `/dev`
D) Plain HTTP + shared volumes

**Answer: A**

Namespaces → isolation/visibility.

cgroups → resource control.

---

## Q30. Complete Scenario

A company runs multiple services in Kubernetes.

Requirements:

1. Prevent one service from seeing another service's processes.
2. Prevent one service from consuming all CPU.
3. Restrict communication between selected services.
4. Run GPU workloads only on GPU nodes.

Which combination is most appropriate?

A) PID namespaces + cgroups + NetworkPolicy + node affinity
B) PVC + StorageClass + mTLS + WEP
C) cgroups + DNS + shared volumes + privileged mode
D) AppArmor + PVC + RADIUS + WEP

**Answer: A**

Mapping:

```text
Process visibility → PID namespace
CPU control        → cgroups
Network traffic    → NetworkPolicy
GPU placement      → node affinity
```

---

# PART 3 — MOST IMPORTANT CONFUSIONS

## 1. cgroup vs Namespace

### Question says:

> "Limit CPU/memory"

Answer:

**cgroup**

### Question says:

> "Isolate what processes can see"

Answer:

**namespace**

---

## 2. Kubernetes Namespace vs Linux Namespace

### Kubernetes Namespace

Logical grouping of Kubernetes resources.

### Linux Namespace

Runtime/kernel isolation mechanism.

Exam wording matters.

---

## 3. Network Namespace vs NetworkPolicy

### Network Namespace

Creates an isolated network environment.

### NetworkPolicy

Controls allowed network communication between workloads.

Shortcut:

```text
"isolated network environment" → network namespace

"allow/deny traffic between Pods" → NetworkPolicy
```

---

## 4. Node Affinity vs cgroups

### Node affinity

Where should the Pod run?

### cgroups / resource limits

How much CPU/memory can it consume?

```text
WHERE → node affinity
HOW MUCH → cgroups/resource limits
```

---

## 5. StorageClass vs PVC

### StorageClass

Describes a class/provisioning behavior for storage.

### PVC

Workload asks for storage.

```text
Pod → PVC → PV → Storage
```

---

# PART 4 — 60-SECOND REVISION

If you remember only this before the test:

```text
NAMESPACE = ISOLATION / VISIBILITY

cGROUP = CPU / MEMORY / RESOURCE CONTROL

PID namespace = process visibility

Network namespace = isolated network environment

Mount namespace = filesystem mount view

User namespace = user/root identity isolation

NetworkPolicy = allow/deny Pod traffic

Node affinity = WHERE Pod runs

Taint = repel Pods from node

Toleration = Pod can accept matching taint

PVC = request for storage

PV = persistent storage resource

StorageClass = storage class/provisioning

Privileged mode = dangerous / broad host access

Capabilities = granular Linux privileges

Device cgroups = hardware/device access control

mTLS = encrypted + mutually authenticated service traffic

AppArmor = application behavior restrictions

seccomp = system-call filtering
```

# PART 5 — HIGH-ROI PRIORITY

## MUST KNOW

1. cgroups → resource control
2. Namespaces → isolation
3. PID namespace
4. Network namespace
5. NetworkPolicy
6. Privileged containers
7. Linux capabilities
8. Node affinity
9. PVC/PV basics
10. mTLS
11. Device access control
12. User namespaces

## KNOW AT BASIC LEVEL

13. StorageClass
14. Taints/tolerations
15. AppArmor
16. seccomp
17. Mount namespace

## SKIP DEEP DETAILS FOR NOW

Do not waste placement-preparation time on:

- Linux kernel implementation details
- cgroup v1 internals
- cgroup filesystem internals
- Kubernetes scheduler source code
- Container runtime internals
- Detailed CNI implementation
- Detailed CSI implementation
- Advanced service-mesh internals

You need to recognize the **scenario → mechanism** mapping first.

---

# FINAL MEMORY FORMULA

```text
ISOLATION       → NAMESPACES
RESOURCES       → CGROUPS
PROCESSES       → PID NAMESPACE
NETWORK ENV.    → NETWORK NAMESPACE
NETWORK TRAFFIC → NETWORKPOLICY
STORAGE         → PV / PVC
PLACEMENT       → NODE AFFINITY
REPEL NODE      → TAINT
ALLOW TAINT     → TOLERATION
HARDWARE        → DEVICE ACCESS CONTROL
PRIVILEGES      → CAPABILITIES / USER NAMESPACE
SYSTEM CALLS    → SECCOMP
APP BEHAVIOR    → APPARMOR
SERVICE SECURITY→ mTLS
```

This is the core pattern set to memorize for placement-style container/Kubernetes security questions.
