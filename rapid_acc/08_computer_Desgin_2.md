# Accenture Computer Design / Computer Architecture — 40 High-Return MCQs

**Level:** Basic → placement assessment  
**Strategy:** Scenario recognition, not deep architecture.

## 1. LOAD

A CPU needs to move data from a memory location into the accumulator. Which instruction is appropriate?

A) STORE  
B) LOAD  
C) SUB  
D) JUMP

**Answer: B) LOAD**

**Why:** LOAD transfers data from memory into a CPU register/accumulator.

---

## 2. STORE

The CPU must save the accumulator contents into a memory location. Which instruction is used?

A) LOAD  
B) STORE  
C) ADD  
D) BRANCH

**Answer: B) STORE**

**Why:** STORE transfers data from CPU register/accumulator to memory.

---

## 3. Arithmetic Unit

Which CPU component performs arithmetic and logical operations?

A) ALU  
B) Control Unit  
C) Cache  
D) MAR

**Answer: A) ALU**

**Why:** ALU = Arithmetic Logic Unit.

---

## 4. Control Signals

Which component generates control signals that coordinate CPU operations?

A) ALU  
B) Control Unit  
C) RAM  
D) SSD

**Answer: B) Control Unit**

**Why:** The control unit coordinates instruction execution and data movement.

---

## 5. Program Counter

Which register stores the address of the next instruction to be fetched?

A) IR  
B) PC  
C) MAR  
D) MDR

**Answer: B) PC**

**Why:** PC = Program Counter.

---

## 6. Instruction Register

Which register holds the currently fetched instruction?

A) PC  
B) IR  
C) MAR  
D) Accumulator

**Answer: B) IR**

**Why:** IR = Instruction Register.

---

## 7. MAR

Which register holds the address of the memory location being accessed?

A) MDR  
B) MAR  
C) IR  
D) PC

**Answer: B) MAR**

**Why:** MAR = Memory Address Register.

---

## 8. MDR

Which register temporarily holds data being transferred to or from memory?

A) MDR  
B) MAR  
C) PC  
D) IR

**Answer: A) MDR**

**Why:** MDR = Memory Data Register.

---

## 9. Accumulator

Which register is commonly used to hold intermediate arithmetic results?

A) Accumulator  
B) PC  
C) MAR  
D) IR

**Answer: A) Accumulator**

**Why:** The accumulator commonly stores intermediate ALU results.

---

## 10. Instruction Cycle

Which sequence represents the basic instruction cycle?

A) Execute → Fetch → Decode  
B) Decode → Store → Fetch  
C) Fetch → Decode → Execute  
D) Store → Execute → Fetch

**Answer: C) Fetch → Decode → Execute**

**Why:** CPU first obtains, interprets and then executes the instruction.

---

## 11. Immediate Addressing

An instruction contains the actual constant value that should be used as an operand. Which addressing mode is this?

A) Direct  
B) Immediate  
C) Register indirect  
D) Indexed

**Answer: B) Immediate**

**Why:** The operand value is directly contained in the instruction.

---

## 12. Register Addressing

An instruction specifies a CPU register containing the operand. Which addressing mode is this?

A) Immediate  
B) Register  
C) Direct  
D) Indexed

**Answer: B) Register**

**Why:** The operand is stored directly in a register.

---

## 13. Register Indirect

A register contains the memory address of the required operand. Which addressing mode is used?

A) Immediate  
B) Direct  
C) Register indirect  
D) Relative

**Answer: C) Register indirect**

**Why:** The register contains the address, not the actual operand.

---

## 14. Direct Addressing

The instruction itself contains the memory address where the operand is stored. Which addressing mode is this?

A) Direct  
B) Immediate  
C) Register  
D) Register indirect

**Answer: A) Direct**

**Why:** The memory address is specified directly in the instruction.

---

## 15. Indexed Addressing

An instruction calculates an effective address using a base address plus an index, commonly for array elements. Which mode is this?

A) Immediate  
B) Indexed  
C) Direct  
D) Register only

**Answer: B) Indexed**

**Why:** Indexed addressing is commonly useful for arrays and tables.

---

## 16. Data Transfer

Which instruction category moves data between registers and/or memory?

A) Data transfer  
B) Arithmetic  
C) Branch  
D) Logical only

**Answer: A) Data transfer**

**Why:** LOAD, STORE and MOVE are examples.

---

## 17. Branch

A program needs to jump to another instruction address based on a condition. Which instruction category is used?

A) Arithmetic  
B) Branch/control transfer  
C) Data storage  
D) Cache

**Answer: B) Branch/control transfer**

**Why:** Branch instructions alter normal sequential execution.

---

## 18. Address Bus

Which bus carries memory addresses?

A) Data bus  
B) Address bus  
C) Control bus  
D) I/O bus

**Answer: B) Address bus**

**Why:** Address bus specifies WHERE data should be accessed.

---

## 19. Data Bus

Which bus carries the actual data between CPU and memory?

A) Address bus  
B) Data bus  
C) Control bus  
D) Clock bus

**Answer: B) Data bus**

**Why:** Data bus carries the actual data.

---

## 20. Control Bus

Which bus carries control signals such as read/write-related signals?

A) Data bus  
B) Address bus  
C) Control bus  
D) Cache bus

**Answer: C) Control bus**

**Why:** Control bus communicates control signals.

---

## 21. Fastest Storage

Which is generally the fastest storage location?

A) HDD  
B) RAM  
C) Cache  
D) CPU registers

**Answer: D) CPU registers**

**Why:** Registers are directly inside the CPU and are extremely fast.

---

## 22. Cache

Why is cache used?

A) To permanently store files  
B) To reduce average memory access time  
C) To replace the CPU  
D) To assign IP addresses

**Answer: B) To reduce average memory access time**

**Why:** Cache keeps frequently/recently used data close to the CPU.

---

## 23. Cache Hit

The CPU requests data and finds it in the cache. What is this called?

A) Cache miss  
B) Cache hit  
C) Page fault  
D) Interrupt

**Answer: B) Cache hit**

**Why:** A cache hit means the requested data is present in cache.

---

## 24. Cache Miss

The CPU requests data but it is not available in the cache. What is this?

A) Cache hit  
B) Cache miss  
C) Cache overflow  
D) Cache interrupt

**Answer: B) Cache miss**

**Why:** The system must obtain the data from a lower memory level.

---

## 25. Temporal Locality

A program repeatedly accesses the same variable within a short period. Which locality does this demonstrate?

A) Spatial locality  
B) Temporal locality  
C) Network locality  
D) Instruction locality only

**Answer: B) Temporal locality**

**Why:** Recently used data is likely to be used again.

---

## 26. Spatial Locality

A program accesses elements stored near an element it just accessed. Which locality is this?

A) Temporal locality  
B) Spatial locality  
C) Virtual locality  
D) Register locality

**Answer: B) Spatial locality**

**Why:** Nearby memory locations are likely to be accessed soon.

---

## 27. RAM

Which statement about RAM is correct?

A) It is normally volatile  
B) It is always permanent storage  
C) It is slower than HDD in every situation  
D) It is read-only

**Answer: A) It is normally volatile**

**Why:** RAM generally loses its contents when power is removed.

---

## 28. ROM

Which characteristic is associated with ROM?

A) Volatile storage  
B) Non-volatile storage  
C) Temporary CPU register  
D) Network addressing

**Answer: B) Non-volatile storage**

**Why:** ROM retains data without power.

---

## 29. Interrupt

A hardware device needs CPU attention because an I/O operation has completed. What mechanism can notify the CPU?

A) Interrupt  
B) Cache hit  
C) STORE  
D) Address bus

**Answer: A) Interrupt**

**Why:** Interrupts notify the CPU that an event requires handling.

---

## 30. Pipelining

A CPU overlaps the fetch of one instruction with the execution of another. What technique is being used?

A) Paging  
B) Pipelining  
C) Spooling  
D) Fragmentation

**Answer: B) Pipelining**

**Why:** Pipelining overlaps instruction stages to improve throughput.

---

## 31. Data Hazard

Instruction B needs a value that instruction A has not yet produced. What pipeline hazard is this?

A) Control hazard  
B) Data hazard  
C) Structural hazard  
D) Memory hazard

**Answer: B) Data hazard**

**Why:** A data dependency exists between instructions.

---

## 32. Control Hazard

A branch instruction makes the CPU uncertain about which instruction should be fetched next. What hazard is this?

A) Data hazard  
B) Control hazard  
C) Structural hazard  
D) Cache hit

**Answer: B) Control hazard**

**Why:** Branches/jumps create control-flow uncertainty.

---

## 33. Structural Hazard

Two pipeline stages require the same hardware resource simultaneously. What is this?

A) Data hazard  
B) Control hazard  
C) Structural hazard  
D) Logical hazard

**Answer: C) Structural hazard**

**Why:** A hardware-resource conflict causes a structural hazard.

---

## 34. RISC

Which characteristic is most associated with RISC?

A) Large complex instructions only  
B) Simple instructions and load/store architecture  
C) No registers  
D) Only variable-length instructions

**Answer: B) Simple instructions and load/store architecture**

**Why:** RISC emphasizes relatively simple instructions and commonly uses a load/store model.

---

## 35. CISC

Which characteristic is commonly associated with CISC?

A) Complex instruction set  
B) No memory operations  
C) Only one instruction  
D) No registers

**Answer: A) Complex instruction set**

**Why:** CISC architectures traditionally support a larger set of more complex instructions.

---

## 36. Clock Frequency

A CPU is advertised as 3 GHz. Approximately how many clock cycles per second does this represent?

A) 3 million  
B) 30 million  
C) 3 billion  
D) 300 billion

**Answer: C) 3 billion**

**Why:** 1 GHz = 1 billion cycles/second.

---

## 37. Word Size

A processor is described as 64-bit. What does this most directly indicate?

A) It always runs at 64 GHz  
B) It has 64 MB RAM  
C) It has an architecture capable of naturally handling 64-bit-sized data/register operations  
D) It has exactly 64 instructions

**Answer: C) It has an architecture capable of naturally handling 64-bit-sized data/register operations**

**Why:** Bitness refers to architectural word/register width, not clock speed or RAM capacity.

---

## 38. Memory Hierarchy

Which ordering is generally from fastest/smallest to slower/larger?

A) HDD → RAM → Cache → Registers  
B) Registers → Cache → RAM → Secondary storage  
C) RAM → Registers → HDD → Cache  
D) Cache → HDD → Registers → RAM

**Answer: B) Registers → Cache → RAM → Secondary storage**

**Why:** This is the standard high-level memory hierarchy.

---

## 39. ALU Scenario

The CPU must calculate `25 + 15`. Which component performs the actual arithmetic operation?

A) Control Unit  
B) ALU  
C) PC  
D) MAR

**Answer: B) ALU**

**Why:** Arithmetic operations are performed by the ALU.

---

## 40. CPU Coordination

The CPU must coordinate fetching an instruction, decoding it and sending appropriate signals to the ALU and registers. Which component primarily performs this coordination?

A) ALU  
B) Control Unit  
C) Cache  
D) SSD

**Answer: B) Control Unit**

**Why:** The control unit orchestrates instruction execution through control signals.

---

# Final 60-Second Computer Design Map

| Clue | Answer |
|---|---|
| Memory → CPU | LOAD |
| CPU → Memory | STORE |
| Arithmetic/logic | ALU |
| Control signals | Control Unit |
| Next instruction | PC |
| Current instruction | IR |
| Memory address | MAR |
| Memory data | MDR |
| Intermediate result | Accumulator |
| Address | Address Bus |
| Data | Data Bus |
| Control signals | Control Bus |
| Constant inside instruction | Immediate |
| Register contains operand | Register |
| Register contains memory address | Register Indirect |
| Base + index | Indexed |
| Fastest storage | Registers |
| Fast memory near CPU | Cache |
| Main memory | RAM |
| Permanent storage | SSD/HDD |
| Data found in cache | Cache Hit |
| Data absent from cache | Cache Miss |
| Recently used again | Temporal locality |
| Nearby data | Spatial locality |
| Fetch → Decode → Execute | Instruction cycle |
| Overlapping instruction stages | Pipelining |
| Data dependency | Data hazard |
| Branch dependency | Control hazard |
| Hardware-resource conflict | Structural hazard |
| Simple/load-store | RISC |
| Complex instruction set | CISC |
| Event needs CPU attention | Interrupt |
| 3 GHz | 3 billion cycles/sec |

## 3–4 Day Priority

**Must know:**
1. LOAD vs STORE
2. ALU vs Control Unit
3. PC / IR / MAR / MDR
4. Addressing modes
5. Fetch → Decode → Execute
6. Address/Data/Control buses
7. Registers → Cache → RAM → Storage
8. Cache hit/miss + locality
9. Pipelining + 3 hazards
10. RISC vs CISC

**Do not spend significant time on advanced architecture unless your paid material specifically contains it.**
