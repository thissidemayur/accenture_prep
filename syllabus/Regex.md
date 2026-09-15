## Regex

1. ` /^\d+$/    `
    - ^ -> start
    - \d -> digit
    - + -> one or more
    - $ -> end
    

## Dynamic dom
append()
→ inside the element, at the end

prepend()
→ inside the element, at the beginning

before()
→ outside the element, immediately before it

after()
→ outside the element, immediately after it

replaceWith()
→ replace element with another Node/string

element.remove()
→ element removes itself

parent.removeChild(child)
→ parent removes a specific child


### virtual memory:
```
                 ELEMENT
                    │
        ┌───────────┴───────────┐
        │                       │
     prepend                   append
        ↓                       ↓
   first child             last child


before ←──── ELEMENT ────→ after
        outside            outside


replaceWith()
      ↓
ELEMENT → NEW ELEMENT

remove()
      ↓
ELEMENT → gone
```

## Traversal Map:
```
UP
↑
parentElement

CURRENT ELEMENT

DOWN
↓
children
firstElementChild
lastElementChild

HORIZONTAL
← previousElementSibling
→ nextElementSibling
```

## reduce, some, every, flat
