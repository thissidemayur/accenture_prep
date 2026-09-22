# Accenture Computer Design / Computer Architecture — High-ROI Theory

**Time left:** 3–4 days  
**Goal:** Learn only the concepts most likely to help with basic technical-assessment MCQs.

## 1. CPU Core Components

### ALU
**Arithmetic Logic Unit**
- Performs arithmetic: ADD, SUB, etc.
- Performs logical operations: AND, OR, NOT, XOR.
- Often involved in comparisons.

### Control Unit (CU)
- Generates control signals.
- Coordinates registers, ALU, memory and buses.
- Controls the instruction execution sequence.

### Registers
Very small, very fast storage inside the CPU.

High-return registers:
- **PC (Program Counter):** address of the next instruction.
- **IR (Instruction Register):** currently fetched instruction.
- **Accumulator (ACC):** stores intermediate arithmetic/logic results in accumulator-based architectures.
- **MAR (Memory Address Register):** address of memory location being accessed.
- **MDR/MBR:** data being transferred to/from memory.

---

## 2. Basic Instruction Cycle

Remember:

**Fetch → Decode → Execute**

### Fetch
CPU obtains the next instruction from memory.

### Decode
Control unit interprets what the instruction means.

### Execute
CPU performs the requested operation.

**Exam trap:** A memory access can also occur during execution for instructions whose operands are in memory. The instruction itself is fetched during the fetch phase.

---

## 3. LOAD vs STORE

### LOAD
Moves data **from memory → register/accumulator**.

`Memory → CPU register`

### STORE
Moves data **from register/accumulator → memory**.

`CPU register → Memory`

**Memory trick:**
- LOAD = bring data into CPU
- STORE = save data to memory

---

## 4. Common Instruction Categories

### Data Transfer
Moves data between registers/memory.

Examples:
- LOAD
- STORE
- MOVE

### Arithmetic
Performs calculations.

Examples:
- ADD
- SUB
- MUL
- DIV

### Logical
Bitwise/logic operations.

Examples:
- AND
- OR
- XOR
- NOT

### Control / Branch
Changes program execution flow.

Examples:
- JUMP
- BRANCH
- CALL
- RETURN

---

## 5. Addressing Modes

### Immediate
The actual value is inside the instruction.

Example:
`ADD #5`

Meaning: add the constant 5.

**Keyword:** constant/value given directly.

### Direct
Instruction contains the memory address of the operand.

**Keyword:** address directly specified.

### Register
Operand is in a CPU register.

**Keyword:** register contains the data.

### Register Indirect
A register contains the **memory address** of the operand.

**Keyword:** register → address → memory data.

### Indexed
Effective address is obtained using a base/address plus an index.

Common for arrays.

---

## 6. Accumulator

The accumulator is a CPU register commonly used to:
- hold intermediate arithmetic results
- receive results of arithmetic/logic instructions
- participate in accumulator-based instruction sets

Example:

`LOAD A`  
`ADD B`

The accumulator can hold the result after the ADD.

---

## 7. Buses

A bus is a communication pathway between CPU, memory and other components.

### Address Bus
Carries **addresses**.

### Data Bus
Carries **data**.

### Control Bus
Carries **control signals** such as read/write-related signals.

**Memory trick:**
- Address bus → WHERE
- Data bus → WHAT
- Control bus → HOW

---

## 8. Memory Hierarchy

From generally fastest/smallest to slower/larger:

**Registers → Cache → RAM → Secondary Storage**

### Registers
Fastest, inside CPU.

### Cache
Small, fast memory close to/inside the CPU.

### RAM
Main memory used by currently running programs.

### Secondary Storage
SSD/HDD; persistent storage.

---

## 9. Cache

Cache stores frequently/recently needed data and instructions closer to the CPU.

Important terms:

### Cache Hit
Requested data is found in cache.

### Cache Miss
Requested data is not found in cache, so a lower memory level must be accessed.

### Locality
- **Temporal locality:** recently used data may be used again.
- **Spatial locality:** nearby data may be used soon.

---

## 10. RAM vs ROM

### RAM
- Volatile
- Read/write
- Used as main memory
- Contents are lost when power is removed

### ROM
- Non-volatile
- Used for firmware/boot-related instructions in many systems
- Retains contents without power

---

## 11. Volatile vs Non-Volatile

**Volatile:** data lost when power is removed.
- RAM

**Non-volatile:** data persists without power.
- SSD
- HDD
- ROM

---

## 12. Instruction Register vs Program Counter

### PC
Stores address of the **next instruction**.

### IR
Stores the **current instruction being executed/decoded**.

Classic trap:
- "next instruction address" → PC
- "current instruction" → IR

---

## 13. MAR vs MDR

### MAR
Stores the memory **address** being accessed.

### MDR
Stores the **data** being transferred to/from memory.

Memory trick:
- MAR → Address
- MDR → Data

---

## 14. Interrupt

An interrupt is a signal/event that causes the CPU to temporarily suspend its current execution and handle another event.

Examples:
- I/O completion
- hardware event
- timer interrupt

After servicing the interrupt, execution can resume.

---

## 15. Clock Speed

CPU clock frequency indicates cycles per second.

Example:
**3 GHz ≈ 3 billion clock cycles/second**

Do not assume:
**higher GHz = automatically faster CPU**.

Actual performance also depends on architecture, IPC, cache, workload, memory and other factors.

---

## 16. Pipelining

Pipelining overlaps different stages of multiple instructions.

Typical simplified stages:

**Fetch → Decode → Execute → Memory → Write Back**

Main benefit:
- improves instruction throughput.

Important traps:
- It does **not** mean one instruction completes in one cycle.
- Hazards can reduce pipeline efficiency.

---

## 17. Pipeline Hazards

### Data Hazard
One instruction depends on data produced by another.

### Control Hazard
Usually caused by branches/jumps.

### Structural Hazard
Two operations need the same hardware resource at the same time.

---

## 18. RISC vs CISC

### RISC
- Smaller/simpler instruction set
- Often fixed-length instructions
- Load/store design is common
- Typically emphasizes simple instructions

### CISC
- Larger/more complex instruction set
- Instructions can perform more complex operations
- Variable-length instructions are common in classic CISC designs

**Exam keyword:**
- Simple/fixed/load-store → RISC
- Complex/variable-length → CISC

---

## 19. Word Size

Word size is the number of bits a processor naturally handles in its architecture/registers.

Examples:
- 32-bit
- 64-bit

A 64-bit architecture can generally handle 64-bit-sized registers/operations and supports a much larger address space than a 32-bit architecture, subject to implementation limits.

---

## 20. High-ROI Final Map

| Question clue | Think |
|---|---|
| Memory → CPU register | LOAD |
| CPU register → memory | STORE |
| Arithmetic | ALU |
| Control signals | Control Unit |
| Next instruction address | PC |
| Current instruction | IR |
| Memory address | MAR |
| Memory data | MDR |
| Intermediate arithmetic result | Accumulator |
| Address transfer | Address Bus |
| Data transfer | Data Bus |
| Control signals | Control Bus |
| Fastest CPU storage | Registers |
| Fast memory near CPU | Cache |
| Main memory | RAM |
| Persistent storage | SSD/HDD |
| Value inside instruction | Immediate |
| Register contains operand | Register addressing |
| Register contains memory address | Register indirect |
| Array-style address calculation | Indexed |
| Instruction flow change | Branch/Jump |
| Overlapping instruction stages | Pipelining |
| Branch dependency | Control hazard |
| Data dependency | Data hazard |
| Resource conflict | Structural hazard |
| Simple/load-store instruction set | RISC |
| Complex instruction set | CISC |

## What NOT to Study Deeply With 3–4 Days Left

Skip detailed microprogramming, advanced cache replacement algorithms, detailed pipeline timing diagrams, complex CPU organization, advanced ISA design, and numerical architecture problems unless your college's paid material specifically contains them.

**Priority:** instruction basics → CPU components → registers → addressing modes → buses → memory hierarchy → cache → pipelining → RISC/CISC.
