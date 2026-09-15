# Accenture MS Office — Excel Detailed Revision Guide
## Placement Journey 2027

This is a relearning document. If you forget a concept, read the relevant section from the beginning rather than memorizing only the formula.

---

# 1. Excel Fundamentals

## Workbook
A **Workbook** is the complete Excel file.

Example: `placement_preparation.xlsx`

Think: **Workbook = entire Excel file**

## Worksheet
A **Worksheet** is an individual sheet inside a workbook.

Think: **Workbook contains Worksheets**

## Row
A row runs horizontally and is identified by numbers.

Example: row 7 contains `A7, B7, C7...`

## Column
A column runs vertically and is identified by letters.

Example: column B contains `B1, B2, B3...`

## Cell
A cell is the intersection of a row and column.

Example: column B + row 7 = **B7**

## Cell Address
Format:

`Column Letter + Row Number`

Examples: `A1`, `B7`, `C25`

## Range
A range is a group of cells.

`A1:A5` = 5 cells.

`A1:C3` = 9 cells because it is the complete rectangular block.

## Formula
A formula performs a calculation and normally starts with `=`.

Examples:

`=A1+B1`

`=B2*10`

## Function
A function is a predefined Excel operation.

Examples:

`SUM()`, `AVERAGE()`, `IF()`, `MAX()`

---

# 2. Cell References

There are three important types: relative, absolute, and mixed.

## Relative Reference — `A1`

Both row and column can change when the formula is copied.

If:

`=A1*2`

is copied one row down:

`=A2*2`

**Remember: relative = moves.**

## Absolute Reference — `$A$1`

Both row and column are locked.

Example:

`=B2*$F$1`

Copied downward:

`=B3*$F$1`

The `$F$1` never changes.

**Remember: `$` = lock.**

## Mixed References

`$A1` → column locked, row can move.

`A$1` → row locked, column can move.

| Reference | Column | Row |
|---|---|---|
| A1 | Moves | Moves |
| $A$1 | Locked | Locked |
| $A1 | Locked | Moves |
| A$1 | Moves | Locked |

---

# 3. Core Functions

## SUM
Adds values.

`=SUM(B2:B50)`

Think: **total → SUM**

## AVERAGE
Calculates arithmetic mean.

`=AVERAGE(B2:B50)`

Think: **average/mean → AVERAGE**

## COUNT
Counts **numeric cells only**.

If a range contains numbers, text, and blanks, COUNT counts only the numbers.

`=COUNT(A1:A10)`

## COUNTA
Counts **non-empty cells**.

`=COUNTA(A1:A10)`

Key difference:

**COUNT = numbers**

**COUNTA = anything non-empty**

## MIN
Returns the smallest value.

`=MIN(A1:A10)`

## MAX
Returns the largest value.

`=MAX(A1:A10)`

---

# 4. IF and Logical Functions

## IF

Syntax:

`=IF(condition, value_if_true, value_if_false)`

Example:

`=IF(A2>=40,"Pass","Fail")`

If A2 is 40 or more → Pass.

Otherwise → Fail.

Common operators:

`=` equal

`>` greater than

`<` less than

`>=` greater than or equal

`<=` less than or equal

`<>` not equal

## AND

All conditions must be TRUE.

`=AND(A2>=40,B2>=40)`

Think: **AND = ALL**

## OR

At least one condition must be TRUE.

`=OR(A2>=90,B2>=90)`

Think: **OR = ANY ONE**

## NOT

Reverses TRUE/FALSE.

`=NOT(TRUE)` → FALSE

`=NOT(FALSE)` → TRUE

Think: **NOT = reverse**

## IFERROR

Provides an alternative result when a formula produces an error.

`=IFERROR(A2/B2,0)`

If division causes an error, the result is 0.

Common use:

`=IFERROR(VLOOKUP(E2,A2:C20,3,FALSE),"Not Found")`

---

# 5. Conditional Functions

## COUNTIF — One Condition

Syntax:

`=COUNTIF(range,criteria)`

Example:

`=COUNTIF(B2:B100,">50000")`

Counts values greater than 50,000.

Criteria examples:

`">50"` → greater than 50

`">=50"` → greater than or equal to 50

`"<50"` → less than 50

`"<=50"` → less than or equal to 50

`"=50"` → equal to 50

`"<>50"` → not equal to 50

## COUNTIF Wildcards

`*` = any number of characters

`?` = exactly one character

`"A*"` can match `Apple`, `Amazon`, `Accenture`.

`"A?"` matches a two-character value beginning with A, such as `AB`.

## COUNTIFS — Multiple Conditions

Syntax:

`=COUNTIFS(range1,criteria1,range2,criteria2,...)`

Example:

Count employees in IT with salary above 50,000:

`=COUNTIFS(A2:A100,"IT",B2:B100,">50000")`

COUNTIFS applies AND logic between conditions.

---

# 6. SUMIF and SUMIFS

## SUMIF — One Condition

Syntax:

`=SUMIF(criteria_range,criteria,sum_range)`

Example:

Department in A2:A100 and salary in B2:B100:

`=SUMIF(A2:A100,"IT",B2:B100)`

This calculates total salary for IT.

## SUMIFS — Multiple Conditions

Syntax:

`=SUMIFS(sum_range,criteria_range1,criteria1,criteria_range2,criteria2,...)`

Example:

Department = IT

City = Pune

Salary = C2:C100

`=SUMIFS(C2:C100,A2:A100,"IT",B2:B100,"Pune")`

Key difference:

**SUMIF = one condition**

**SUMIFS = multiple conditions**

## AVERAGEIF

Calculates an average using one condition.

`=AVERAGEIF(A2:A100,"IT",B2:B100)`

---

# 7. Ranking and Rounding

## MAX vs LARGE

MAX returns the largest value:

`=MAX(A1:A10)`

LARGE returns the Nth largest:

`=LARGE(A1:A10,3)`

The second example means **3rd largest**.

## MIN vs SMALL

MIN returns the smallest:

`=MIN(A1:A10)`

SMALL returns the Nth smallest:

`=SMALL(A1:A10,2)`

The second example means **2nd smallest**.

## ROUND

Normal mathematical rounding.

`=ROUND(25.678,2)` → `25.68`

## ROUNDUP

Rounds away from zero.

`=ROUNDUP(25.671,2)` → `25.68`

## ROUNDDOWN

Rounds toward zero.

`=ROUNDDOWN(25.678,2)` → `25.67`

---

# 8. Text Functions

These map nicely to programming string operations.

## LEN

Returns character count.

`=LEN("ACCENTURE")` → `9`

Spaces count as characters.

Think: **LEN = string length**

## LEFT

Takes characters from the beginning.

`=LEFT("ACCENTURE",4)` → `ACCE`

Think: substring from the start.

## RIGHT

Takes characters from the end.

`=RIGHT("ACCENTURE",3)` → `URE`

## MID

Takes characters starting from a position.

`=MID("ACCENTURE",3,4)` → `CENT`

Positions:

A=1, C=2, C=3, E=4, N=5...

So starting at position 3 and taking 4 characters gives `CENT`.

Think: `substring(start,length)`

## TRIM

Removes unnecessary spaces.

If A1 contains:

`  Accenture   India  `

`=TRIM(A1)` produces:

`Accenture India`

## UPPER

`=UPPER("Accenture")` → `ACCENTURE`

## LOWER

`=LOWER("ACCENTURE")` → `accenture`

## FIND

Finds the position of text and is **case-sensitive**.

## SEARCH

Finds the position of text and is **case-insensitive**.

Main exam trap:

**FIND = case-sensitive**

**SEARCH = case-insensitive**

## SUBSTITUTE

Replaces text.

`=SUBSTITUTE("Hello World","World","Excel")`

→ `Hello Excel`

Think: string replace.

## CONCAT

Joins text.

`=CONCAT(A1," ",B1)`

If A1 = Mayur and B1 = Kumar:

→ `Mayur Kumar`

Think: string concatenation.

---

# 9. Date Functions

## TODAY

`=TODAY()`

Returns the current date.

## NOW

`=NOW()`

Returns current date + current time.

Therefore:

**TODAY = date**

**NOW = date + time**

## DATE

Creates a date.

`=DATE(2026,9,14)`

represents 14 September 2026.

## Date Arithmetic

If:

A1 = 01/09/2026

B1 = 20/09/2026

Then:

`=B1-A1`

returns **19 days**.

Do not confuse date difference with inclusive counting.

---

# 10. Sorting and Filtering

## Sorting

Sorting rearranges records.

Examples:

- Salary smallest → largest
- Name A → Z
- Marks largest → smallest

Think:

**Sort = change order**

## Filtering

Filtering temporarily hides rows that do not match a condition.

Example:

Filter Department = IT.

IT rows remain visible while non-IT rows are hidden.

Think:

**Filter = hide non-matching**

---

# 11. Conditional Formatting

Conditional Formatting changes a cell's appearance according to a rule.

Examples:

- Highlight marks below 40
- Highlight salaries above 100000
- Highlight duplicates
- Highlight top values

Think:

**Conditional Formatting = visual rule**

It does not primarily control what users can enter.

---

# 12. Data Validation

Data Validation controls allowed input.

A common example is a dropdown.

Example:

Department dropdown:

- IT
- HR
- Finance
- Sales

Think:

**Data Validation = control input**

Exam wording such as "predefined dropdown" should immediately suggest Data Validation.

---

# 13. Duplicate Detection

Duplicate values can be highlighted using Conditional Formatting.

Example:

Mayur

Rahul

Mayur

The repeated Mayur entries can be identified/highlighted.

---

# 14. Flash Fill

Flash Fill recognizes a pattern from examples and fills the remaining cells.

Shortcut:

`Ctrl+E`

Example:

A column contains:

Mayur Kumar

Rahul Sharma

Amit Singh

You type `Mayur` as the desired first-name pattern, and Flash Fill can infer the remaining first names.

Think:

**Flash Fill = pattern recognition**

---

# 15. PivotTables

A PivotTable summarizes and analyzes data quickly.

Suppose a table contains:

Employee | Department | Salary

You want:

**Average salary by department.**

Correct setup:

**Rows → Department**

**Values → Salary → Average**

Important PivotTable areas:

- Rows = grouping
- Columns = second grouping/dimension
- Values = calculation
- Filters = filter the PivotTable

### Example

Question:

"Show total salary by department."

Setup:

Department → Rows

Salary → Values → Sum

Question:

"Show average salary by department."

Setup:

Department → Rows

Salary → Values → Average

---

# 16. Charts

## Column / Bar Chart

Best for comparing categories.

Example:

Product A sales vs Product B vs Product C.

Think:

**Categories → Bar/Column**

## Line Chart

Best for trends over time.

Example:

January revenue

February revenue

March revenue

...

Think:

**Time trend → Line**

## Pie Chart

Useful for parts of a whole.

Example:

Rent 40%, Food 20%, Transport 10%, Other 30%.

Think:

**Parts of whole → Pie**

## Scatter Chart

Useful for relationship/correlation between numerical variables.

Example:

Study hours vs marks.

Think:

**Relationship between numbers → Scatter**

---

# 17. Excel Errors

## #DIV/0!

Division by zero or an invalid/empty denominator.

Example:

`=10/0`

## #VALUE!

An inappropriate value/data type is used in an operation.

## #REF!

An invalid cell reference.

Often appears when a referenced cell/range is deleted or becomes invalid.

## #NAME?

Excel does not recognize something in the formula, often due to a misspelled function/name.

## #N/A

A value is not available/found.

Common with lookup operations.

## #NUM!

An invalid numerical argument/result.

---

# 18. High-Value Shortcuts

Do not waste time memorizing hundreds of shortcuts.

## General

| Shortcut | Action |
|---|---|
| Ctrl+C | Copy |
| Ctrl+V | Paste |
| Ctrl+X | Cut |
| Ctrl+Z | Undo |
| Ctrl+Y | Redo |
| Ctrl+A | Select all |
| Ctrl+F | Find |
| Ctrl+H | Replace |
| Ctrl+S | Save |
| Ctrl+P | Print |

## Excel-specific

| Shortcut | Action |
|---|---|
| F2 | Edit active cell |
| Ctrl+1 | Format Cells |
| Ctrl+Shift+L | Toggle filters |
| Alt+= | AutoSum |
| Ctrl+; | Insert current date |
| Ctrl+E | Flash Fill |

---

# 19. Function Recognition Table

| If the question says... | Think... |
|---|---|
| Total | SUM |
| Average/mean | AVERAGE |
| Count numeric cells | COUNT |
| Count non-empty cells | COUNTA |
| Smallest | MIN |
| Largest | MAX |
| Nth largest | LARGE |
| Nth smallest | SMALL |
| One-condition count | COUNTIF |
| Multiple-condition count | COUNTIFS |
| One-condition sum | SUMIF |
| Multiple-condition sum | SUMIFS |
| One-condition average | AVERAGEIF |
| Decision | IF |
| All conditions | AND |
| At least one | OR |
| Reverse | NOT |
| Handle formula error | IFERROR |
| Character count | LEN |
| Beginning | LEFT |
| End | RIGHT |
| Middle extraction | MID |
| Remove extra spaces | TRIM |
| Uppercase | UPPER |
| Lowercase | LOWER |
| Case-sensitive search | FIND |
| Case-insensitive search | SEARCH |
| Replace text | SUBSTITUTE |
| Join text | CONCAT |
| Current date | TODAY |
| Current date + time | NOW |
| Construct a date | DATE |

---

# 20. Feature Recognition Table

| Requirement | Feature |
|---|---|
| Rearrange data | Sorting |
| Hide non-matching rows | Filtering |
| Highlight based on a rule | Conditional Formatting |
| Restrict input / dropdown | Data Validation |
| Detect a text pattern | Flash Fill |
| Summarize a large dataset | PivotTable |
| Compare categories | Bar/Column |
| Show time trend | Line |
| Show parts of whole | Pie |
| Show numeric relationship | Scatter |

---

# 21. Most Important Exam Traps

### COUNT vs COUNTA
COUNT = numeric cells.

COUNTA = non-empty cells.

### MAX vs LARGE
MAX = largest.

LARGE = Nth largest.

### MIN vs SMALL
MIN = smallest.

SMALL = Nth smallest.

### COUNTIF vs COUNTIFS
COUNTIF = one condition.

COUNTIFS = multiple conditions.

### SUMIF vs SUMIFS
SUMIF = one condition.

SUMIFS = multiple conditions.

### FIND vs SEARCH
FIND = case-sensitive.

SEARCH = case-insensitive.

### TODAY vs NOW
TODAY = date.

NOW = date + time.

### Sort vs Filter
Sort = rearrange.

Filter = hide non-matching.

### Data Validation vs Conditional Formatting
Data Validation = controls input.

Conditional Formatting = changes appearance.

### PivotTable Rows vs Values
"Average salary by department":

Department → Rows

Salary → Values → Average

### Line vs Bar/Column
Time trend → Line.

Category comparison → Bar/Column.

---

# 22. Formula Patterns to Relearn Quickly

Pass/Fail:

`=IF(A2>=40,"Pass","Fail")`

Count salary > 50000:

`=COUNTIF(C2:C100,">50000")`

Count IT employees with salary > 50000:

`=COUNTIFS(A2:A100,"IT",C2:C100,">50000")`

Total IT salary:

`=SUMIF(A2:A100,"IT",C2:C100)`

Total IT salary in Pune:

`=SUMIFS(C2:C100,A2:A100,"IT",B2:B100,"Pune")`

Average IT salary:

`=AVERAGEIF(A2:A100,"IT",C2:C100)`

Third largest:

`=LARGE(A1:A100,3)`

Second smallest:

`=SMALL(A1:A100,2)`

Safe division:

`=IFERROR(A2/B2,0)`

First four characters:

`=LEFT(A2,4)`

Last three characters:

`=RIGHT(A2,3)`

Four characters from position 3:

`=MID(A2,3,4)`

Remove unnecessary spaces:

`=TRIM(A2)`

Replace text:

`=SUBSTITUTE(A2,"old","new")`

---

# 23. Programming Mental Model

Because you know programming, map Excel functions to familiar ideas:

| Excel | Programming analogy |
|---|---|
| LEN | string length |
| LEFT | substring from start |
| RIGHT | substring from end |
| MID | substring(start,length) |
| TRIM | whitespace cleanup |
| UPPER | uppercase |
| LOWER | lowercase |
| FIND | case-sensitive search/index |
| SEARCH | case-insensitive search |
| SUBSTITUTE | replace |
| CONCAT | string concatenation |
| IF | if/else |
| AND | logical AND |
| OR | logical OR |
| NOT | logical NOT |
| COUNTIF | filtered count |
| SUMIF | filtered sum |
| AVERAGEIF | filtered average |

This mental model is useful because Excel formula questions are essentially small data-processing problems.

---

# 24. Relearning Procedure

When you forget a function:

1. Read what the function does.
2. Read its syntax.
3. Read one example.
4. Explain the example in your own words.
5. Solve a question without looking at the formula.

Do not memorize formulas blindly.

For example, for SUMIFS, remember:

**"I need to add values where multiple conditions are satisfied."**

Then reconstruct:

`SUMIFS(sum_range, criteria_range1, criteria1, ...)`

---

# 25. Final Rapid Revision

If you have only 30 seconds:

SUM = total

AVERAGE = mean

COUNT = numbers

COUNTA = non-empty

MIN = smallest

MAX = largest

LARGE = Nth largest

SMALL = Nth smallest

IF = decision

AND = all

OR = any

NOT = reverse

IFERROR = handle error

COUNTIF = one-condition count

COUNTIFS = multiple-condition count

SUMIF = one-condition sum

SUMIFS = multiple-condition sum

AVERAGEIF = one-condition average

LEN = length

LEFT = beginning

RIGHT = end

MID = middle

TRIM = spaces

FIND = case-sensitive

SEARCH = case-insensitive

SUBSTITUTE = replace

CONCAT = join

TODAY = date

NOW = date + time

DATE = construct date

Sort = rearrange

Filter = hide non-matching

Conditional Formatting = visual rule

Data Validation = control input

Flash Fill = pattern

PivotTable = summarize

Line = time trend

Bar/Column = category comparison

Pie = parts of whole

Scatter = numeric relationship

---

# 26. Current Preparation Status

Completed Excel areas:

- Fundamentals
- Cell references
- Core functions
- Logical functions
- Conditional functions
- Ranking functions
- Rounding
- Text functions
- Date functions
- Sorting/filtering
- Conditional formatting
- Data validation
- Duplicate detection
- Flash Fill
- PivotTables
- Charts
- Errors
- High-value shortcuts
- Exam traps

## Next step

Complete the **20-question mixed Excel test without hints**.

The test is meant to measure independent recall, not recognition.

After grading, revise only the weak areas and then move forward.
