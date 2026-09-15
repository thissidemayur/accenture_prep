# Accenture Common Applications & MS Office — Excel Revision Notes
## Placement Journey 2027 | Excel Foundation + Logical Functions

> **Purpose:** Fast revision for Accenture-style Common Applications & MS Office preparation.
>
> **Source classification:** Questions marked **[PYQ/Candidate-reported]** are based on publicly available past/candidate-reported Accenture material. Questions marked **[Accenture-style]** are newly written to match the same skill pattern. They are **not guaranteed live or leaked questions**.

---

## 0. Important Accuracy Note

Accenture does **not** publish one universal MS Office question paper or fixed question pattern for every candidate. Its official careers guidance says assessments can vary by role and that the assessment invitation is the controlling source for timing/instructions.

Public preparation sources report Excel questions involving formulas, lookups, conditional formatting, PivotTables, shortcuts, and common Office features. Older public Accenture material also contains questions on `LEN`, `MONTH`, conditional formatting, and `VLOOKUP`/`MATCH`.

**Therefore:** use this file as a high-ROI revision document, not as a claim that every question will appear in your assessment.

---

# 1. Excel Fundamentals

## Workbook
An Excel **workbook** is the complete Excel file.

Example:
- `placement.xlsx` = workbook

A workbook can contain multiple worksheets.

## Worksheet
A **worksheet** is an individual sheet inside a workbook.

Example:
- Sheet1
- Sheet2
- Sheet3

## Row
A row runs **horizontally** and is identified by numbers.

Examples:
- Row 1
- Row 25
- Row 100

## Column
A column runs **vertically** and is identified by letters.

Examples:
- Column A
- Column B
- Column Z

## Cell
A cell is the intersection of a row and a column.

Example:
- Column B + Row 7 = `B7`

## Cell Address
A cell address identifies a cell using:

`Column letter + Row number`

Examples:
- `A1`
- `B7`
- `D25`

## Range
A range is a group of cells.

Examples:

`A1:A5`

means:

- A1
- A2
- A3
- A4
- A5

Total = 5 cells.

`A1:C3`

Total = 3 columns × 3 rows = 9 cells.

---

# 2. Formula vs Function

## Formula

A formula is an expression used to calculate something.

Most Excel formulas begin with `=`.

Example:

```excel
=A1+B1
```

## Function

A function is a predefined Excel operation.

Example:

```excel
=SUM(A1:A5)
```

Here:
- `SUM` = function
- `A1:A5` = argument/range

A formula can contain a function:

```excel
=SUM(A1:A5)*2
```

---

# 3. Cell References

This is a high-value Excel topic.

## Relative Reference

```excel
A1
```

Both row and column can change when the formula is copied.

Example:

```excel
=B2*C2
```

Copied one row downward:

```excel
=B3*C3
```

## Absolute Reference

```excel
$A$1
```

Both column and row are locked.

When copied, `$A$1` remains `$A$1`.

## Mixed Reference — Locked Column

```excel
$A1
```

- Column A = locked
- Row 1 = can change

## Mixed Reference — Locked Row

```excel
A$1
```

- Column A = can change
- Row 1 = locked

### Mental model

`$` = LOCK

| Reference | Column | Row |
|---|---|---|
| `A1` | moves | moves |
| `$A$1` | locked | locked |
| `$A1` | locked | moves |
| `A$1` | moves | locked |

### Example

If:

```excel
=B2*$F$1
```

is copied from row 2 to row 3:

```excel
=B3*$F$1
```

`B2` moves.

`$F$1` stays fixed.

---

# 4. Core Excel Functions

## SUM

Adds numbers.

```excel
=SUM(A1:A5)
```

Use when the question asks:
- total
- sum
- combined amount

## AVERAGE

Calculates arithmetic mean.

```excel
=AVERAGE(A1:A5)
```

Use for:
- average marks
- average salary
- average sales

## COUNT

Counts cells containing **numbers**.

```excel
=COUNT(A1:A5)
```

Text is not counted.

## COUNTA

Counts **non-empty cells**.

```excel
=COUNTA(A1:A5)
```

Counts both text and numbers.

### COUNT vs COUNTA

If:

| Cell | Value |
|---|---|
| A1 | 100 |
| A2 | 200 |
| A3 | Mayur |
| A4 | empty |
| A5 | 500 |

Then:

```excel
=COUNT(A1:A5)
```

returns:

`3`

while:

```excel
=COUNTA(A1:A5)
```

returns:

`4`

## MIN

Returns the smallest numeric value.

```excel
=MIN(A1:A5)
```

## MAX

Returns the largest numeric value.

```excel
=MAX(A1:A5)
```

### Quick mapping

| Requirement | Function |
|---|---|
| Total | `SUM` |
| Average | `AVERAGE` |
| Count numeric values | `COUNT` |
| Count non-empty cells | `COUNTA` |
| Smallest | `MIN` |
| Largest | `MAX` |

---

# 5. IF Function

`IF` performs decision-making.

Syntax:

```excel
=IF(condition,value_if_true,value_if_false)
```

Example:

```excel
=IF(A2>=40,"Pass","Fail")
```

If A2 = 75 → `Pass`

If A2 = 30 → `Fail`

## Important comparison operators

| Operator | Meaning |
|---|---|
| `>` | greater than |
| `<` | less than |
| `>=` | greater than or equal to |
| `<=` | less than or equal to |
| `=` | equal to |
| `<>` | not equal to |

### Common trap

```excel
A2>40
```

40 itself does **not** satisfy the condition.

```excel
A2>=40
```

40 **does** satisfy the condition.

---

# 6. Nested IF

Nested IF means placing an IF inside another IF.

Example grading:

- 90+ → Excellent
- 70+ → Good
- 40+ → Pass
- below 40 → Fail

```excel
=IF(A2>=90,"Excellent",IF(A2>=70,"Good",IF(A2>=40,"Pass","Fail")))
```

### Rule

When using descending thresholds, test:

**highest → lowest**

---

# 7. AND

`AND` returns TRUE only when **all conditions are TRUE**.

```excel
=AND(condition1,condition2)
```

Example:

```excel
=AND(A2>=40,B2>=75%)
```

Both conditions must be satisfied.

Common combination:

```excel
=IF(AND(A2>=40,B2>=75%),"Pass","Fail")
```

### Truth table

| A | B | AND |
|---|---|---|
| TRUE | TRUE | TRUE |
| TRUE | FALSE | FALSE |
| FALSE | TRUE | FALSE |
| FALSE | FALSE | FALSE |

---

# 8. OR

`OR` returns TRUE when **at least one condition is TRUE**.

```excel
=OR(condition1,condition2)
```

Example:

```excel
=OR(A2>=80,B2>=90)
```

Combined with IF:

```excel
=IF(OR(A2>=80,B2>=90),"Qualified","Not Qualified")
```

### Truth table

| A | B | OR |
|---|---|---|
| TRUE | TRUE | TRUE |
| TRUE | FALSE | TRUE |
| FALSE | TRUE | TRUE |
| FALSE | FALSE | FALSE |

---

# 9. NOT

`NOT` reverses a logical value.

```excel
=NOT(TRUE)
```

→ `FALSE`

```excel
=NOT(FALSE)
```

→ `TRUE`

Example:

```excel
=IF(NOT(A2<18),"Allowed","Not Allowed")
```

Equivalent simpler form:

```excel
=IF(A2>=18,"Allowed","Not Allowed")
```

---

# 10. IFERROR

`IFERROR` provides an alternative result when an expression produces an error.

Syntax:

```excel
=IFERROR(value,value_if_error)
```

Example:

```excel
=IFERROR(A2/B2,0)
```

If A2 = 100 and B2 = 5:

`20`

If B2 = 0:

`0`

Another example:

```excel
=IFERROR(A2/B2,"Error")
```

### Mental model

```text
Calculation works → return normal result
Calculation errors → return second argument
```

---

# 11. Accenture-Reported / Publicly Available Excel Questions

## [PYQ/Candidate-reported] LEN

A publicly available Accenture Common Applications & MS Office document reports:

**What does the formula `=LEN("I love Mettl")` return?**

A. Name Error  
B. Reference Error  
C. 12  
D. 10

**Answer: C — 12**

Why?

`LEN` counts characters, including spaces.

`I love Mettl` contains 12 characters.

Source: publicly available Accenture preparation material dated 2021.

---

## [PYQ/Candidate-reported] MONTH

**Which Excel function is used to extract the month from a date?**

A. `CURRENTMONTH()`  
B. `DATE()`  
C. `DAY()`  
D. `MONTH()`

**Answer: D — `MONTH()`**

---

## [PYQ/Candidate-reported] Conditional Formatting

A publicly available Accenture MS Office document asks which operation can be used when numbers in a range should automatically receive formatting based on their values.

The key Excel feature tested is:

**Conditional Formatting**

Important distinction:

- Conditional Formatting → changes formatting based on rules
- IF → returns a result based on a logical condition

---

## [PYQ/Candidate-reported] VLOOKUP + MATCH

Publicly available Accenture material contains a question involving:

```excel
=VLOOKUP(G2,data,MATCH(G3,months,0),0)
```

The question tests understanding of how `MATCH` can dynamically identify the required column position for `VLOOKUP`.

This is an important signal that lookup questions may combine functions rather than asking only isolated definitions.

---

# 12. Accenture-Style Practice MCQs

These are **newly written practice questions**, not claimed as leaked/live Accenture questions.

## Q1

Which function returns the largest number in a range?

A. `MIN`  
B. `MAX`  
C. `LARGEONLY`  
D. `HIGH`

**Answer: B — MAX**

---

## Q2

A1:A5 contains:

`100, 200, "Mayur", blank, 500`

What does this return?

```excel
=COUNT(A1:A5)
```

A. 5  
B. 4  
C. 3  
D. 2

**Answer: C — 3**

---

## Q3

Using the same data, what does this return?

```excel
=COUNTA(A1:A5)
```

A. 5  
B. 4  
C. 3  
D. 2

**Answer: B — 4**

---

## Q4

Which reference remains completely fixed when copied?

A. `A1`  
B. `$A1`  
C. `A$1`  
D. `$A$1`

**Answer: D — `$A$1`**

---

## Q5

Which formula calculates the average of B2:B101?

A. `=MEAN(B2:B101)`  
B. `=AVG(B2:B101)`  
C. `=AVERAGE(B2:B101)`  
D. `=AVERAGE(B2-B101)`

**Answer: C**

---

## Q6

What will this return if A2 = 35?

```excel
=IF(A2>=40,"Pass","Fail")
```

A. TRUE  
B. FALSE  
C. Pass  
D. Fail

**Answer: D — Fail**

---

## Q7

What will this return if B2 = 60000?

```excel
=IF(B2>60000,"High","Low")
```

A. High  
B. Low  
C. TRUE  
D. Error

**Answer: B — Low**

Because `60000 > 60000` is FALSE.

---

## Q8

Which function requires all supplied conditions to be TRUE?

A. OR  
B. NOT  
C. AND  
D. IFERROR

**Answer: C — AND**

---

## Q9

What is the result of:

```excel
=OR(FALSE,TRUE,FALSE)
```

A. TRUE  
B. FALSE  
C. Error  
D. 0

**Answer: A — TRUE**

---

## Q10

What is the result of:

```excel
=NOT(TRUE)
```

A. TRUE  
B. FALSE  
C. 1  
D. Error

**Answer: B — FALSE**

---

## Q11

Which formula correctly checks whether salary is above 50,000 AND rating is at least 4?

A.
```excel
=AND(A2,B2)
```

B.
```excel
=AND(A2>50000,B2>=4)
```

C.
```excel
=AND(A2>=50000,B2>4)
```

D.
```excel
=IF(A2>50000,B2>=4)
```

**Answer: B**

---

## Q12

Which formula returns `"Error"` if division causes an error?

A.
```excel
=IF(A2/B2,"Error")
```

B.
```excel
=ERROR(A2/B2,"Error")
```

C.
```excel
=IFERROR(A2/B2,"Error")
```

D.
```excel
=IF(A2/B2=ERROR,"Error")
```

**Answer: C**

---

## Q13

Which Excel feature automatically applies formatting based on cell values?

A. Data Validation  
B. Conditional Formatting  
C. Sort  
D. Filter

**Answer: B — Conditional Formatting**

---

## Q14

Which function counts numeric entries?

A. `COUNTA`  
B. `COUNT`  
C. `COUNTALL`  
D. `NUMCOUNT`

**Answer: B — COUNT**

---

## Q15

Which function counts non-empty cells?

A. `COUNT`  
B. `COUNTA`  
C. `COUNTEMPTY`  
D. `NONEMPTY`

**Answer: B — COUNTA**

---

## Q16

Which formula returns the smallest value in C2:C50?

A.
```excel
=LOW(C2:C50)
```

B.
```excel
=MIN(C2:C50)
```

C.
```excel
=SMALLEST(C2:C50)
```

D.
```excel
=LOWEST(C2:C50)
```

**Answer: B**

---

## Q17

Which formula correctly performs an exact VLOOKUP?

A.
```excel
=VLOOKUP(E2,A2:D50,4,TRUE)
```

B.
```excel
=VLOOKUP(E2,A2:D50,4,FALSE)
```

C.
```excel
=HLOOKUP(E2,A2:D50,4,FALSE)
```

D.
```excel
=MATCH(E2,A2:A50,0)
```

**Answer: B**

**Why:** `FALSE` requests an exact match.

---

## Q18

A manager wants cells containing sales above 100,000 to automatically receive a special format.

Which feature is most appropriate?

A. Data Validation  
B. Conditional Formatting  
C. Flash Fill  
D. Find and Replace

**Answer: B**

---

## Q19

What does this return?

```excel
=SUM(10,20,30)
```

A. 30  
B. 40  
C. 50  
D. 60

**Answer: D — 60**

---

## Q20

What does this return?

```excel
=AVERAGE(10,20,30)
```

A. 10  
B. 20  
C. 30  
D. 60

**Answer: B — 20**

---

## Q21

What does this return?

```excel
=IF(AND(80>=40,90>=75),"Pass","Fail")
```

A. Pass  
B. Fail  
C. TRUE  
D. Error

**Answer: A — Pass**

---

## Q22

What does this return?

```excel
=IF(OR(30>=80,95>=90),"Qualified","Not Qualified")
```

A. Qualified  
B. Not Qualified  
C. TRUE  
D. FALSE

**Answer: A — Qualified**

---

## Q23

If:

```excel
A1 = 100
```

and the formula is:

```excel
=A1*2
```

what happens when copied one row down?

A. `=A1*2`  
B. `=A2*2`  
C. `=$A$1*2`  
D. `=B1*2`

**Answer: B**

---

## Q24

If:

```excel
A1 = 100
```

what happens to `$A$1` when copied?

A. It becomes A2  
B. It becomes B1  
C. It remains `$A$1`  
D. It becomes `$B$2`

**Answer: C**

---

## Q25

What does `LEN` measure?

A. Number of words only  
B. Number of numeric characters only  
C. Number of characters in a text/value  
D. Number of cells

**Answer: C**

---

# 13. High-Value Traps

### Trap 1 — COUNT vs COUNTA

`COUNT` → numbers

`COUNTA` → non-empty cells

---

### Trap 2 — > vs >=

`>40` → 40 fails

`>=40` → 40 passes

---

### Trap 3 — AND vs OR

`AND` → every condition must pass

`OR` → at least one condition must pass

---

### Trap 4 — IF vs Conditional Formatting

`IF` → produces a result/value

Conditional Formatting → changes appearance/formatting

---

### Trap 5 — Relative vs Absolute

`A1` → moves when copied

`$A$1` → stays fixed

---

### Trap 6 — Exact VLOOKUP

For exact matching:

```excel
FALSE
```

or:

```excel
0
```

---

# 14. Rapid Revision Sheet

```text
Workbook       → Complete Excel file
Worksheet      → Sheet inside workbook
Row            → Horizontal, numbers
Column         → Vertical, letters
Cell           → Row + column intersection
Range          → Group of cells

Formula        → Calculation/expression
Function       → Predefined operation

A1             → Relative
$A$1           → Absolute
$A1            → Locked column
A$1            → Locked row

SUM            → Total
AVERAGE        → Mean
COUNT          → Numeric cells
COUNTA         → Non-empty cells
MIN            → Smallest
MAX            → Largest

IF             → Decision
Nested IF      → Multiple decisions
AND            → All conditions
OR             → At least one
NOT            → Reverse TRUE/FALSE
IFERROR        → Alternative result on error

LEN            → Character count
MONTH          → Month from date
VLOOKUP        → Vertical lookup
MATCH          → Finds position
Conditional Formatting → Automatic formatting based on rules
```

---

# 15. What To Study Next

Do **not** stop Excel preparation here.

Next high-ROI Excel topics:

1. `COUNTIF`
2. `COUNTIFS`
3. `SUMIF`
4. `SUMIFS`
5. `AVERAGEIF`
6. `LARGE`
7. `SMALL`
8. `ROUND`
9. `ROUNDUP`
10. `ROUNDDOWN`
11. Text functions
12. Date functions
13. Sorting
14. Filtering
15. Conditional Formatting
16. Data Validation
17. Duplicate detection
18. Flash Fill
19. VLOOKUP/HLOOKUP/XLOOKUP
20. INDEX/MATCH
21. PivotTables
22. Charts
23. Excel errors
24. Shortcuts
25. Mixed Accenture-style test

---

# 16. Source Classification

### Official Accenture source
Accenture's careers guidance confirms that assessments are job-relevant and can vary by role; the assessment invitation should be treated as the controlling source for the actual assessment instructions.

### Public Accenture/candidate-reported material
The public material used for the explicitly marked questions includes:
- Accenture Common Applications & MS Office preparation material containing `LEN`, `MONTH`, conditional formatting, and `VLOOKUP`/`MATCH` examples.
- Public candidate/practice reports containing Excel formula, lookup, PivotTable, and formatting topics.

### Accenture-style
The remaining MCQs in this document are deliberately written to resemble the tested skill level and scenario style. They are **not represented as official Accenture questions**.

---

# 17. Final Rule For Revision

When revising Excel, don't memorize random formulas.

Think:

```text
Question wording
       ↓
Identify operation
       ↓
Choose function
       ↓
Build formula
       ↓
Check operators
       ↓
Check cell references
```

Examples:

```text
"Total"             → SUM
"Average"           → AVERAGE
"How many numbers"  → COUNT
"How many entered"  → COUNTA
"Largest"           → MAX
"Smallest"          → MIN
"If condition..."   → IF
"Both conditions"   → AND
"Either condition"  → OR
"Reverse condition" → NOT
"Handle error"      → IFERROR
```

**Target:** be able to identify and construct the correct formula in seconds.
