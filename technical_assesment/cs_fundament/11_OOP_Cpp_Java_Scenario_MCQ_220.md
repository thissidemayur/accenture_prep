# Accenture-Style C++ OOP + Java MCQs — 220 Questions

## Purpose

This file is a **placement-focused practice set** for Accenture-style technical/coding preparation.

- 220 original MCQs
- C++ is the primary language.
- Java snippets are deliberately included because OOP concepts may appear in language-mixed questions.
- Java questions include an **EXPLAIN & REMEMBER** note so you can retain the concept even if you do not know Java well.
- These are **original practice questions**, not official or leaked Accenture PYQs.
- Focus is on high-return OOP concepts, common traps, output questions, and scenario recognition.
- Advanced C++ topics such as templates and deep STL internals are intentionally avoided.

---

# PART A — C++ OOP FUNDAMENTALS

### Q1. What is the main purpose of a class in C++?
A. To store only functions  
B. To define a blueprint for objects  
C. To execute a program  
D. To allocate CPU time  

**Answer: B**

**Explanation:** A class defines the data and behavior that objects created from it can have.

---

### Q2. Which of the following is an object?
A. `class Student { };`  
B. `Student`  
C. `Student s;`  
D. `int`  

**Answer: C**

**Explanation:** `s` is an object/instance of `Student`.

---

### Q3. Which access specifier makes members accessible from anywhere the object is visible?
A. private  
B. protected  
C. public  
D. internal  

**Answer: C**

---

### Q4. What is the default access level for members of a C++ `class`?
A. public  
B. private  
C. protected  
D. static  

**Answer: B**

**Trap:** For `struct`, the default member access is `public`.

---

### Q5. What is the default access level for members of a C++ `struct`?
A. private  
B. protected  
C. public  
D. friend  

**Answer: C**

---

### Q6. Which OOP principle combines data and the functions operating on that data?
A. Inheritance  
B. Encapsulation  
C. Polymorphism  
D. Compilation  

**Answer: B**

---

### Q7. A bank class keeps `balance` private and exposes `deposit()` publicly. Which concept is primarily demonstrated?
A. Encapsulation  
B. Inheritance  
C. Multiple inheritance  
D. Overloading  

**Answer: A**

---

### Q8. Which OOP principle means exposing essential behavior while hiding implementation details?
A. Inheritance  
B. Abstraction  
C. Overloading  
D. Association  

**Answer: B**

---

### Q9. Which relationship is represented by "Car IS-A Vehicle"?
A. Composition  
B. Aggregation  
C. Inheritance  
D. Association  

**Answer: C**

---

### Q10. Which relationship is represented by "Car HAS-A Engine"?
A. Inheritance  
B. Composition/aggregation  
C. Overriding  
D. Polymorphism only  

**Answer: B**

---

### Q11. Which of the following best represents runtime polymorphism in C++?
A. Function overloading  
B. Operator overloading  
C. Virtual function overriding  
D. Constructor overloading  

**Answer: C**

---

### Q12. Which represents compile-time polymorphism?
A. Virtual function overriding  
B. Function overloading  
C. Dynamic dispatch  
D. Pure virtual function  

**Answer: B**

---

### Q13. What is inheritance primarily used for?
A. Reusing/extending behavior between related classes  
B. Encrypting objects  
C. Allocating memory  
D. Removing constructors  

**Answer: A**

---

### Q14. Which keyword is commonly used to enable runtime dispatch in C++?
A. static  
B. virtual  
C. friend  
D. const  

**Answer: B**

---

### Q15. A function declared `virtual` in a base class and overridden in a derived class supports:
A. Static binding only  
B. Runtime polymorphism  
C. Constructor chaining only  
D. Data hiding only  

**Answer: B**

---

### Q16. Which concept allows the same function name to behave differently for different parameter lists?
A. Function overloading  
B. Encapsulation  
C. Aggregation  
D. Casting  

**Answer: A**

---

### Q17. Can constructors be overloaded in C++?
A. No  
B. Yes  
C. Only private constructors  
D. Only virtual constructors  

**Answer: B**

---

### Q18. Can a C++ constructor have a return type?
A. Yes, `void`  
B. Yes, `int`  
C. No  
D. Only in derived classes  

**Answer: C**

---

### Q19. Can a destructor have parameters?
A. Yes  
B. No  
C. Only one parameter  
D. Only if virtual  

**Answer: B**

---

### Q20. Which symbol identifies a destructor?
A. `#`  
B. `~`  
C. `!`  
D. `@`  

**Answer: B**

---

# PART B — CONSTRUCTORS, DESTRUCTORS, `this`, INITIALIZATION

### Q21. When is a constructor generally called?
A. When an object is created  
B. When a program terminates  
C. Only when a function returns  
D. During compilation only  

**Answer: A**

---

### Q22. When is a destructor generally called?
A. When an object is initialized  
B. When an object's lifetime ends  
C. Before every function call  
D. During preprocessing  

**Answer: B**

---

### Q23. What does the `this` pointer refer to?
A. Parent object  
B. Current object  
C. Global object  
D. Previous object  

**Answer: B**

---

### Q24. What is the output?

```cpp
class A {
public:
    int x;

    A(int x) {
        this->x = x;
    }
};

int main() {
    A a(10);
    cout << a.x;
}
```

A. 0  
B. 10  
C. Garbage  
D. Compilation error  

**Answer: B**

**Explanation:** `this->x` refers to the object's member, while the parameter `x` refers to the constructor parameter.

---

### Q25. Which syntax is used for a constructor initializer list?
A. `A(int x) : value(x) {}`  
B. `A(int x) -> value(x) {}`  
C. `A(int x) => value(x) {}`  
D. `A(int x) :: value(x) {}`  

**Answer: A**

---

### Q26. Why are initializer lists important?
A. They initialize members before the constructor body executes  
B. They execute after the destructor  
C. They only initialize static variables  
D. They replace inheritance  

**Answer: A**

---

### Q27. Which members must generally be initialized using an initializer list?
A. Reference members  
B. Static functions  
C. Local variables  
D. Global functions  

**Answer: A**

---

### Q28. A `const` data member of a class is best initialized:
A. Inside any later function  
B. In the constructor initializer list  
C. In the destructor  
D. Using `delete`  

**Answer: B**

---

### Q29. What is the constructor execution order for an object of a derived class?
A. Derived first, then base  
B. Base first, then derived  
C. Random  
D. Destructor first  

**Answer: B**

---

### Q30. What is the destructor order?
A. Base first, derived second  
B. Derived first, base second  
C. Random  
D. Both simultaneously  

**Answer: B**

---

### Q31. Consider:

```cpp
class Base {
public:
    Base() { cout << "B "; }
    ~Base() { cout << "~B "; }
};

class Derived : public Base {
public:
    Derived() { cout << "D "; }
    ~Derived() { cout << "~D "; }
};

int main() {
    Derived d;
}
```

What is the output?
A. `D B ~D ~B`  
B. `B D ~D ~B`  
C. `B D ~B ~D`  
D. `D B ~B ~D`

**Answer: B**

---

### Q32. If two local objects are created in this order:

```cpp
A a;
B b;
```

their destructors are normally called:
A. `~A`, then `~B`  
B. `~B`, then `~A`  
C. Randomly  
D. Never  

**Answer: B**

---

### Q33. What is RAII mainly associated with?
A. Resource lifetime tied to object lifetime  
B. Runtime inheritance only  
C. Function overloading  
D. Network routing  

**Answer: A**

---

### Q34. Which destructor is particularly important when deleting a derived object through a base pointer?
A. Static destructor  
B. Virtual destructor  
C. Private destructor only  
D. Friend destructor  

**Answer: B**

---

### Q35. What is the primary purpose of a virtual destructor?
A. Enable function overloading  
B. Ensure proper destruction through a base pointer  
C. Prevent constructors  
D. Make all methods virtual  

**Answer: B**

---

# PART C — INHERITANCE

### Q36. Which is a valid C++ inheritance declaration?
A. `class B extends A`  
B. `class B : public A`  
C. `class B inherits A`  
D. `class B -> A`  

**Answer: B**

---

### Q37. Which inheritance means one derived class inherits from one base class?
A. Multiple  
B. Multilevel  
C. Single  
D. Hybrid  

**Answer: C**

---

### Q38. `A -> B -> C` represents:
A. Single inheritance  
B. Multilevel inheritance  
C. Multiple inheritance  
D. Hierarchical inheritance  

**Answer: B**

---

### Q39. One base class with multiple derived classes represents:
A. Hierarchical inheritance  
B. Multiple inheritance  
C. Multilevel inheritance  
D. Composition  

**Answer: A**

---

### Q40. A class inheriting from two base classes represents:
A. Single inheritance  
B. Multiple inheritance  
C. Hierarchical inheritance  
D. Encapsulation  

**Answer: B**

---

### Q41. What is the main problem in the classic diamond inheritance?
A. Too many constructors  
B. Ambiguity caused by duplicate base subobjects  
C. No destructor exists  
D. No objects can be created  

**Answer: B**

---

### Q42. Which feature can solve the classic diamond inheritance duplication problem?
A. Virtual inheritance  
B. Function overloading  
C. Static functions  
D. Friend functions  

**Answer: A**

---

### Q43. In:

```cpp
class B : private A
```

public members of `A` become what from the outside through `B`?
A. Public  
B. Protected  
C. Private  
D. Deleted  

**Answer: C**

---

### Q44. In:

```cpp
class B : protected A
```

public members inherited from `A` become:
A. Public  
B. Protected  
C. Private  
D. Deleted  

**Answer: B**

---

### Q45. In:

```cpp
class B : public A
```

public members inherited from `A` remain:
A. Public  
B. Protected  
C. Private  
D. Deleted  

**Answer: A**

---

### Q46. Which base-class members are inaccessible directly from a derived class?
A. public only  
B. protected only  
C. private members  
D. all members  

**Answer: C**

---

### Q47. Does a derived class automatically get direct access to private members of its base class?
A. Yes  
B. No  
C. Only with public inheritance  
D. Only with `this`  

**Answer: B**

---

### Q48. What does `Parent::show()` mean inside a derived class?
A. Call the parent implementation of `show`  
B. Create a parent object  
C. Delete the parent  
D. Override the function  

**Answer: A**

**Important:** C++ does not use Java's `super` keyword. `Base::member` is commonly used.

---

### Q49. Which syntax explicitly invokes a base class constructor?
A. `Base()` in initializer list  
B. `super()`  
C. `base()` inside body only  
D. `parent()`  

**Answer: A**

---

### Q50. Which statement about constructors and inheritance is correct?
A. Constructors are inherited automatically in all cases  
B. Base constructor executes before derived constructor  
C. Derived constructor always executes first  
D. Constructors are virtual  

**Answer: B**

---

# PART D — POLYMORPHISM, OVERLOADING, OVERRIDING

### Q51. What is function overriding?
A. Same function name with different parameters in same class  
B. Derived class provides a new implementation of a base virtual function  
C. Creating multiple constructors  
D. Hiding a data member  

**Answer: B**

---

### Q52. What is function overloading?
A. Same function name with different parameter lists  
B. Redefining a virtual function in a child class  
C. Multiple inheritance  
D. Object destruction  

**Answer: A**

---

### Q53. Which is compile-time polymorphism?
A. Overloading  
B. Virtual overriding  
C. Dynamic dispatch  
D. Late binding  

**Answer: A**

---

### Q54. Which is runtime polymorphism?
A. Function overloading  
B. Operator overloading  
C. Virtual function overriding  
D. Constructor overloading  

**Answer: C**

---

### Q55. What is early binding?
A. Function call resolved at runtime  
B. Function call resolved at compile time  
C. Destructor execution  
D. Dynamic memory allocation  

**Answer: B**

---

### Q56. What is late binding?
A. Runtime resolution of a virtual function call  
B. Compile-time overload resolution  
C. Constructor initialization  
D. Memory deallocation  

**Answer: A**

---

### Q57. What is the output?

```cpp
class Base {
public:
    virtual void show() {
        cout << "Base";
    }
};

class Derived : public Base {
public:
    void show() override {
        cout << "Derived";
    }
};

int main() {
    Base* p = new Derived();
    p->show();
    delete p;
}
```

Assume a suitable virtual destructor is provided where needed. What does `show()` print?
A. Base  
B. Derived  
C. Compilation error  
D. Nothing  

**Answer: B**

---

### Q58. What happens if the same example removes `virtual` from `Base::show()`?
A. Base implementation is selected through the base pointer  
B. Derived implementation is always selected  
C. Both execute  
D. Compilation always fails  

**Answer: A**

---

### Q59. Which keyword tells the compiler that a derived function is intended to override a base virtual function?
A. `override`  
B. `extends`  
C. `super`  
D. `inherits`  

**Answer: A**

---

### Q60. Why is `override` useful?
A. It forces dynamic memory allocation  
B. It helps the compiler detect an incorrect override  
C. It makes all methods static  
D. It prevents inheritance  

**Answer: B**

---

# PART E — ABSTRACT CLASSES AND INTERFACES

### Q61. What is a pure virtual function?
A. `virtual void f() = 0;`  
B. `void virtual f() = 1;`  
C. `pure void f();`  
D. `abstract void f();`  

**Answer: A**

---

### Q62. A class containing at least one pure virtual function is generally:
A. Final  
B. Abstract  
C. Static  
D. Friend  

**Answer: B**

---

### Q63. Can you normally instantiate an abstract C++ class directly?
A. Yes  
B. No  
C. Only with `new`  
D. Only with `static`  

**Answer: B**

---

### Q64. Which concept is closest to a Java interface in ordinary C++ OOP teaching?
A. Abstract class with pure virtual functions  
B. Struct only  
C. Friend class  
D. Namespace  

**Answer: A**

---

### Q65. A derived class must implement inherited pure virtual functions to become:
A. Abstract forever  
B. Concrete/instantiable  
C. Static  
D. Private  

**Answer: B**

---

### Q66. What is the output?

```cpp
class Shape {
public:
    virtual void draw() = 0;
};

class Circle : public Shape {
public:
    void draw() override {
        cout << "Circle";
    }
};

int main() {
    Circle c;
    c.draw();
}
```

A. Shape  
B. Circle  
C. Compilation error  
D. Nothing  

**Answer: B**

---

# PART F — STATIC, CONST, FRIEND

### Q67. A static data member belongs primarily to:
A. Each individual object separately  
B. The class as a shared member  
C. Only the destructor  
D. Only the constructor  

**Answer: B**

---

### Q68. How many copies of a static data member normally exist per class?
A. One shared class-level instance  
B. One per object  
C. Zero  
D. One per function call  

**Answer: A**

---

### Q69. A static member function can directly access:
A. Only non-static members  
B. Static members without an object  
C. Any local variable  
D. Any private object member automatically  

**Answer: B**

---

### Q70. Why can't a static member function directly use `this`?
A. `this` belongs to an object, while a static member function is not tied to one specific object  
B. `this` is Java-only  
C. Static functions cannot have parameters  
D. `this` is private  

**Answer: A**

---

### Q71. What does a `const` member function promise?
A. It cannot be called  
B. It should not modify the object's non-mutable state  
C. It must be static  
D. It must be virtual  

**Answer: B**

---

### Q72. Which declaration is a const member function?
A. `void show();`  
B. `void show() const;`  
C. `const void show();`  
D. `void const show;`  

**Answer: B**

---

### Q73. What is a friend function?
A. A member function inherited from a parent  
B. A non-member function granted access to private/protected members  
C. A static constructor  
D. A virtual destructor  

**Answer: B**

---

### Q74. Does a friend function become a member function of the class?
A. Yes  
B. No  
C. Only if virtual  
D. Only if static  

**Answer: B**

---

### Q75. Which statement about friendship is correct?
A. Friendship is automatically inherited  
B. Friendship is not automatically inherited  
C. Every friend becomes public  
D. Friends must be derived classes  

**Answer: B**

---

# PART G — COMPOSITION, AGGREGATION, ASSOCIATION

### Q76. A `Car` object owns an `Engine`, and the engine's lifetime is tightly tied to the car. This is closest to:
A. Composition  
B. Inheritance  
C. Overloading  
D. Polymorphism  

**Answer: A**

---

### Q77. A `Department` has `Professor` objects, but professors may exist independently of the department. This is commonly modeled as:
A. Aggregation  
B. Composition  
C. Inheritance  
D. Overriding  

**Answer: A**

---

### Q78. "Teacher teaches Student" is generally:
A. Association  
B. Inheritance  
C. Composition only  
D. Overloading  

**Answer: A**

---

### Q79. Which relationship is strongest?
A. Association  
B. Aggregation  
C. Composition  
D. Inheritance  

**Answer: C**

---

### Q80. "House HAS-A Room" is usually modeled using:
A. HAS-A relationship  
B. IS-A relationship  
C. Overriding  
D. Function overloading  

**Answer: A**

---

# PART H — C++ OUTPUT/TRAP QUESTIONS

### Q81. What is the output?

```cpp
class A {
public:
    A() { cout << "A"; }
};

int main() {
    A x;
}
```

A. A  
B. x  
C. Error  
D. Nothing  

**Answer: A**

---

### Q82. What is the output?

```cpp
class A {
public:
    A() { cout << "C"; }
    ~A() { cout << "D"; }
};

int main() {
    A x;
}
```

A. CD  
B. DC  
C. C only  
D. D only  

**Answer: A**

---

### Q83. What is the output?

```cpp
class A {
public:
    A(int x) { cout << x; }
};

int main() {
    A a(5);
}
```

A. 0  
B. 5  
C. Error because constructors cannot take arguments  
D. Garbage  

**Answer: B**

---

### Q84. What happens?

```cpp
class A {
public:
    A(int x) {}
};

int main() {
    A a;
}
```

A. Calls `A(int)` with 0  
B. Compilation error because no matching default constructor exists  
C. Runtime error  
D. Calls destructor  

**Answer: B**

---

### Q85. If a class declares no constructor, C++ may provide:
A. A default constructor  
B. A Java constructor  
C. A virtual constructor  
D. A pure constructor  

**Answer: A**

---

### Q86. What is the output?

```cpp
class A {
public:
    A() { cout << "1"; }
};

int main() {
    A a;
    A b;
}
```

A. 1  
B. 11  
C. 12  
D. Error  

**Answer: B**

---

### Q87. What is the output?

```cpp
class Base {
public:
    Base() { cout << "B"; }
};

class Derived : public Base {
public:
    Derived() { cout << "D"; }
};

int main() {
    Derived d;
}
```

A. DB  
B. BD  
C. D  
D. B  

**Answer: B**

---

### Q88. What is the output?

```cpp
class Base {
public:
    ~Base() { cout << "B"; }
};

class Derived : public Base {
public:
    ~Derived() { cout << "D"; }
};

int main() {
    Derived d;
}
```

A. BD  
B. DB  
C. D only  
D. B only  

**Answer: B**

---

### Q89. What is the output?

```cpp
class A {
    int x = 5;
public:
    void show() {
        cout << x;
    }
};

int main() {
    A a;
    a.show();
}
```

A. 0  
B. 5  
C. Garbage  
D. Error  

**Answer: B**

---

### Q90. Which operator accesses a member through an object?
A. `->`  
B. `.`  
C. `::`  
D. `#`  

**Answer: B**

---

### Q91. Which operator accesses a member through a pointer to an object?
A. `.`  
B. `->`  
C. `::`  
D. `=>`  

**Answer: B**

---

### Q92. What does `::` represent in expressions such as `Base::show()`?
A. Scope resolution  
B. Pointer dereference  
C. Member access through object  
D. Inheritance  

**Answer: A**

---

### Q93. Which is valid?

```cpp
class A {
public:
    static int count;
};
```

To define the static member outside the class:
A. `int A::count = 0;`  
B. `static A.count = 0;`  
C. `A.count := 0;`  
D. `int count.A = 0;`

**Answer: A**

---

### Q94. What is the output?

```cpp
class A {
public:
    static int count;
    A() { count++; }
};

int A::count = 0;

int main() {
    A a;
    A b;
    cout << A::count;
}
```

A. 0  
B. 1  
C. 2  
D. Garbage  

**Answer: C**

---

### Q95. Which can access a private member?
A. Any unrelated function automatically  
B. Friend function if declared as friend  
C. Any object from another file  
D. Only `main()`  

**Answer: B**

---

# PART I — COPY CONSTRUCTOR, ASSIGNMENT, SHALLOW/DEEP COPY

### Q96. What is a copy constructor used for?
A. Constructing an object from another object  
B. Destroying an object  
C. Overloading operators only  
D. Calling a parent class  

**Answer: A**

---

### Q97. Which is a typical copy constructor signature?
A. `A(A other)`  
B. `A(const A& other)`  
C. `void A(const A& other)`  
D. `copy A(A&)`  

**Answer: B**

---

### Q98. Which operation is normally represented by copy assignment?
A. `A b = a;` only  
B. `b = a;`  
C. `new A()`  
D. `~A()`  

**Answer: B**

---

### Q99. What is a shallow copy?
A. Copies pointer values rather than independently copying the pointed-to resource  
B. Copies nothing  
C. Always performs a deep allocation  
D. Deletes the source object  

**Answer: A**

---

### Q100. Why can shallow copying be dangerous with raw owning pointers?
A. Two objects may point to the same resource and both may try to free it  
B. It always causes inheritance  
C. It prevents constructors  
D. It changes static members  

**Answer: A**

---

### Q101. What does a deep copy attempt to do?
A. Make independent copies of owned dynamic resources  
B. Share every pointer  
C. Delete all objects  
D. Remove constructors  

**Answer: A**

---

### Q102. The Rule of Three traditionally involves:
A. Constructor, destructor, friend  
B. Destructor, copy constructor, copy assignment operator  
C. Static function, virtual function, friend  
D. `new`, `delete`, `this`  

**Answer: B**

---

# PART J — MIXED C++ SCENARIO QUESTIONS

### Q103. A developer wants users to change a bank balance only through validated methods. Which design is appropriate?
A. Make balance public  
B. Make balance private and expose controlled public methods  
C. Use multiple inheritance  
D. Make balance static  

**Answer: B**

---

### Q104. A payment system has `Payment`, `UPI`, `Card`, and `NetBanking`. Each payment type implements `pay()`. Which design is suitable?
A. Base class + virtual `pay()`  
B. Only global functions  
C. Static variables only  
D. Friend classes only  

**Answer: A**

---

### Q105. A program stores different derived objects in base-class pointers and calls `draw()`. To get the correct derived implementation:
A. `draw()` should be virtual in the base class  
B. `draw()` must be static  
C. `draw()` must be private  
D. `draw()` must be a constructor  

**Answer: A**

---

### Q106. A class owns a file resource that must be released when the object goes out of scope. Which C++ design principle is most relevant?
A. RAII  
B. Multiple inheritance  
C. Overloading  
D. Namespace hiding  

**Answer: A**

---

### Q107. You want to prevent a class from being instantiated directly but allow derived classes to implement required behavior. Use:
A. Abstract class/pure virtual function  
B. Static class only  
C. Friend function  
D. Private object  

**Answer: A**

---

### Q108. A derived class accidentally uses a different parameter list instead of replacing a base virtual function. Which keyword can help catch the mistake?
A. `override`  
B. `virtualize`  
C. `super`  
D. `friend`  

**Answer: A**

---

### Q109. A class needs one shared counter for all objects. Use:
A. Instance member  
B. Static member  
C. Local variable  
D. Reference member only  

**Answer: B**

---

### Q110. A method does not need object-specific state and should be called through the class. Which member function type may be appropriate?
A. Static  
B. Destructor  
C. Copy constructor  
D. Pure destructor  

**Answer: A**

---

# PART K — JAVA OOP BASICS

> ## JAVA SURVIVAL RULE
> You do **not** need to become a Java developer for these questions. Learn the OOP vocabulary and syntax differences.
>
> **C++ → Java quick mapping**
>
> - C++ `public/private/protected` → Java has the same three plus package-private/default.
> - C++ inheritance uses `:` → Java uses `extends`.
> - C++ base-call syntax `Base::method()` → Java commonly uses `super.method()`.
> - C++ runtime polymorphism commonly uses `virtual` → Java instance methods are dynamically dispatched by default unless restricted by `static`, `final`, `private`, etc.
> - C++ pure virtual function → Java abstract method.
> - C++ abstract class → Java `abstract class`.
> - C++ interface-like design → Java `interface`.
> - Java uses `this` too.

---

### Q111. Which keyword is used for class inheritance in Java?
A. `:`  
B. `extends`  
C. `inherits`  
D. `implements`  

**Answer: B**

**EXPLAIN & REMEMBER:**  
Java:
```java
class Dog extends Animal { }
```
C++:
```cpp
class Dog : public Animal { };
```
Remember: **Java = extends, C++ = colon.**

---

### Q112. Which keyword is commonly used in Java to call a parent-class method?
A. `Base::`  
B. `super`  
C. `parent`  
D. `base`  

**Answer: B**

**EXPLAIN & REMEMBER:**  
Java:
```java
super.show();
```
C++:
```cpp
Base::show();
```
Memory hook: **Java → super; C++ → Base::.**

---

### Q113. Which keyword refers to the current object in both Java and C++?
A. `current`  
B. `this`  
C. `self`  
D. `object`  

**Answer: B**

**EXPLAIN & REMEMBER:** `this` is a major concept you already know from C++, and Java uses the same keyword.

---

### Q114. What is the output?

```java
class A {
    void show() {
        System.out.println("A");
    }
}

class B extends A {
    void show() {
        System.out.println("B");
    }
}

public class Main {
    public static void main(String[] args) {
        A obj = new B();
        obj.show();
    }
}
```

A. A  
B. B  
C. Compilation error  
D. Nothing  

**Answer: B**

**EXPLAIN & REMEMBER:**  
`A obj = new B();` means the **reference type** is A but the **actual object** is B. Java instance methods use runtime dispatch, so B's `show()` runs.

Think:
**Reference decides what is accessible; actual object decides overridden method behavior.**

---

### Q115. Which keyword declares a class that cannot normally be instantiated and may contain abstract methods?
A. `virtual`  
B. `abstract`  
C. `pure`  
D. `interface`  

**Answer: B**

**EXPLAIN & REMEMBER:** Java uses `abstract class`. C++ uses an abstract class created through one or more pure virtual functions.

---

### Q116. Which keyword declares an abstract method in Java?
A. `virtual`  
B. `pure`  
C. `abstract`  
D. `override`  

**Answer: C**

**EXPLAIN & REMEMBER:**
```java
abstract void draw();
```
C++ equivalent concept:
```cpp
virtual void draw() = 0;
```

---

### Q117. Which keyword is used when a Java class follows an interface?
A. `extends`  
B. `implements`  
C. `inherits`  
D. `uses`  

**Answer: B**

**EXPLAIN & REMEMBER:**  
Java:
```java
class Dog implements Animal { }
```
A class extends another class but implements an interface.

---

### Q118. Can a Java class directly extend multiple classes?
A. Yes  
B. No  
C. Only if abstract  
D. Only if final  

**Answer: B**

**EXPLAIN & REMEMBER:** Java avoids multiple class inheritance. A class can implement multiple interfaces.

---

### Q119. Which Java keyword prevents a class from being extended?
A. `static`  
B. `final`  
C. `private`  
D. `sealedOnly`  

**Answer: B**

**EXPLAIN & REMEMBER:**  
```java
final class A { }
```
No class can extend A.

---

### Q120. Which Java keyword can prevent a method from being overridden?
A. `final`  
B. `virtual`  
C. `constant`  
D. `override`  

**Answer: A**

---

# PART L — JAVA OUTPUT + EXPLANATION

### Q121. What is the output?

```java
class Parent {
    void show() {
        System.out.println("Parent");
    }
}

class Child extends Parent {
    void show() {
        System.out.println("Child");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent p = new Child();
        p.show();
    }
}
```

A. Parent  
B. Child  
C. Both  
D. Error  

**Answer: B**

**EXPLAIN & REMEMBER:** This is runtime polymorphism. The object is `Child`, so the overridden instance method in Child executes.

---

### Q122. What does this Java declaration mean?

```java
Animal a = new Dog();
```

A. Dog is the reference and Animal is the object  
B. Animal is the reference type and Dog is the actual object  
C. Both are objects  
D. It is invalid  

**Answer: B**

**EXPLAIN & REMEMBER:**  
Left side = **reference type**.  
Right side = **actual object created**.

This is one of the highest-return Java OOP patterns.

---

### Q123. Which keyword invokes a parent constructor in Java?
A. `super()`  
B. `Base()`  
C. `parent()`  
D. `this.base()`  

**Answer: A**

**EXPLAIN & REMEMBER:**  
Java:
```java
super();
```
C++:
```cpp
Derived() : Base() {}
```

---

### Q124. Which keyword invokes another constructor of the same Java class?
A. `super()`  
B. `this()`  
C. `same()`  
D. `self()`  

**Answer: B**

**EXPLAIN & REMEMBER:**  
Java:
```java
this(10);
```
calls another constructor in the same class.

---

### Q125. Which keyword refers to the parent class in Java?
A. `super`  
B. `parent`  
C. `base`  
D. `extends`  

**Answer: A**

---

### Q126. What is the output?

```java
class A {
    A() {
        System.out.println("A");
    }
}

class B extends A {
    B() {
        System.out.println("B");
    }
}

public class Main {
    public static void main(String[] args) {
        new B();
    }
}
```

A. B then A  
B. A then B  
C. Only B  
D. Error  

**Answer: B**

**EXPLAIN & REMEMBER:** Java also initializes the parent part before the child part.

---

### Q127. What is the output?

```java
class A {
    A() {
        System.out.println("A");
    }
}

class B extends A {
    B() {
        System.out.println("B");
    }
}

class C extends B {
    C() {
        System.out.println("C");
    }
}

public class Main {
    public static void main(String[] args) {
        new C();
    }
}
```

A. C B A  
B. A B C  
C. B C A  
D. A C B  

**Answer: B**

**EXPLAIN & REMEMBER:** Constructor order follows parent → child.

---

### Q128. Which Java feature is closest to C++ pure virtual functions?
A. Abstract methods  
B. Static methods  
C. Final methods  
D. Constructors  

**Answer: A**

---

### Q129. What happens here?

```java
abstract class Shape {
    abstract void draw();
}

public class Main {
    public static void main(String[] args) {
        Shape s = new Shape();
    }
}
```

A. Works  
B. Compilation error  
C. Runtime exception only  
D. Creates an empty Shape  

**Answer: B**

**EXPLAIN & REMEMBER:** An abstract class cannot normally be instantiated directly.

---

### Q130. Which is valid Java?

```java
class Dog extends Animal {
}
```

A. Yes  
B. No  
C. Only if Dog is static  
D. Only if Animal is final  

**Answer: A**

---

# PART M — C++ VS JAVA TRAPS

### Q131. Which syntax is correct for inheritance in C++?
A. `class B extends A`  
B. `class B : public A`  
C. `class B implements A`  
D. `class B inherits A`  

**Answer: B**

**REMEMBER:** C++ → `:`.

---

### Q132. Which syntax is correct for inheritance in Java?
A. `class B : public A`  
B. `class B extends A`  
C. `class B inherits A`  
D. `class B -> A`  

**Answer: B**

**REMEMBER:** Java → `extends`.

---

### Q133. Which is the C++ equivalent concept for Java `super.show()`?
A. `this.show()`  
B. `Base::show()`  
C. `parent.show()`  
D. `super::show()`  

**Answer: B**

---

### Q134. Which is the Java equivalent concept for explicitly calling a parent method?
A. `Base::show()`  
B. `super.show()`  
C. `parent::show()`  
D. `this.base()`  

**Answer: B**

---

### Q135. Which language uses `virtual` for ordinary runtime polymorphism in the classic OOP model?
A. C++  
B. Java  
C. Both always require it  
D. Neither  

**Answer: A**

**EXPLAIN & REMEMBER:** In C++, a base function generally needs `virtual` for dynamic dispatch through a base pointer/reference. Java instance methods are dynamically dispatched by default unless restricted.

---

### Q136. Which language uses `implements` for a class implementing an interface?
A. C++  
B. Java  
C. Both  
D. Neither  

**Answer: B**

---

### Q137. Which keyword is associated with a Java method that cannot be overridden?
A. `final`  
B. `virtual`  
C. `override`  
D. `friend`  

**Answer: A**

---

### Q138. Which concept is closest to Java's `abstract` method in C++?
A. Static method  
B. Pure virtual function  
C. Friend function  
D. Constructor  

**Answer: B**

---

### Q139. Which language has deterministic destructor calls tied directly to normal object scope?
A. C++  
B. Java  
C. Both identically  
D. Neither  

**Answer: A**

**EXPLAIN & REMEMBER:** C++ destructors are a core part of deterministic object lifetime. Java uses garbage collection and does not use C++-style deterministic destructors.

---

### Q140. Which keyword is shared by C++ and Java for referring to the current object?
A. `self`  
B. `this`  
C. `current`  
D. `object`  

**Answer: B**

---

# PART N — MORE C++ CODE/OUTPUT

### Q141. What is the output?

```cpp
class A {
public:
    void show() { cout << "A"; }
};

class B : public A {
public:
    void show() { cout << "B"; }
};

int main() {
    A* p = new B();
    p->show();
}
```

A. A  
B. B  
C. AB  
D. Compilation error  

**Answer: A**

**Explanation:** `show()` is not virtual, so the call through `A*` is statically bound to `A::show()`.

---

### Q142. What changes if `virtual` is added to `A::show()` in Q141?
A. It prints B  
B. It prints A  
C. It prints AB  
D. It fails  

**Answer: A**

**REMEMBER:** C++ runtime dispatch through a base pointer/reference needs a virtual function.

---

### Q143. What is the output?

```cpp
class A {
public:
    virtual void show() { cout << "A"; }
};

class B : public A {
public:
    void show() override { cout << "B"; }
};

int main() {
    B b;
    A& ref = b;
    ref.show();
}
```

A. A  
B. B  
C. AB  
D. Error  

**Answer: B**

---

### Q144. What is the output?

```cpp
class A {
public:
    void show(int x) { cout << "int"; }
    void show(double x) { cout << "double"; }
};

int main() {
    A a;
    a.show(5);
}
```

A. int  
B. double  
C. Both  
D. Error  

**Answer: A**

---

### Q145. What is the output?

```cpp
class A {
public:
    void show(int) { cout << "int"; }
    void show(double) { cout << "double"; }
};

int main() {
    A a;
    a.show(5.5);
}
```

A. int  
B. double  
C. Both  
D. Error  

**Answer: B**

---

### Q146. Which type of polymorphism is Q144/Q145?
A. Runtime  
B. Compile-time  
C. Dynamic only  
D. Inheritance only  

**Answer: B**

---

### Q147. What is the output?

```cpp
class A {
public:
    A() { cout << "A "; }
    ~A() { cout << "~A "; }
};

int main() {
    {
        A x;
    }
    cout << "End";
}
```

A. `A End ~A`  
B. `A ~A End`  
C. `~A A End`  
D. `End A ~A`  

**Answer: B**

---

### Q148. What is the output?

```cpp
class A {
public:
    A() { cout << "A"; }
};

class B : public A {
public:
    B() { cout << "B"; }
};

class C : public B {
public:
    C() { cout << "C"; }
};

int main() {
    C obj;
}
```

A. CBA  
B. ABC  
C. BAC  
D. ACB  

**Answer: B**

---

### Q149. What is the output?

```cpp
class A {
public:
    A() { cout << "A"; }
    ~A() { cout << "~A"; }
};

class B : public A {
public:
    B() { cout << "B"; }
    ~B() { cout << "~B"; }
};

int main() {
    B obj;
}
```

A. AB~A~B  
B. AB~B~A  
C. BA~B~A  
D. BA~A~B  

**Answer: B**

---

### Q150. Which statement is true?
A. Base constructor runs after derived constructor  
B. Base destructor runs before derived destructor  
C. Base constructor runs before derived constructor  
D. Constructors run in reverse order  

**Answer: C**

---

# PART O — MEMBER INITIALIZATION ORDER

### Q151. Consider:

```cpp
class A {
    int x;
    int y;
public:
    A() : y(20), x(10) {}
};
```

Which member is initialized first?
A. y because it appears first in initializer list  
B. x because it is declared first  
C. Both simultaneously  
D. Random  

**Answer: B**

**IMPORTANT TRAP:** C++ initializes members in **declaration order**, not initializer-list order.

---

### Q152. If members are declared:

```cpp
int a;
int b;
int c;
```

their initialization order is:
A. c, b, a  
B. a, b, c  
C. Random  
D. Based on initializer-list order  

**Answer: B**

---

### Q153. What is a common consequence of ignoring declaration order?
A. Compiler warning or unexpected initialization dependency  
B. Automatic inheritance  
C. Runtime polymorphism  
D. Java compilation  

**Answer: A**

---

# PART P — CASTING AND INHERITANCE BASICS

### Q154. Converting a derived object/reference to a base reference is commonly called:
A. Upcasting  
B. Downcasting  
C. Overloading  
D. Composition  

**Answer: A**

---

### Q155. Converting a base pointer/reference to a derived type is:
A. Upcasting  
B. Downcasting  
C. Overriding  
D. Encapsulation  

**Answer: B**

---

### Q156. Which is generally safer?
A. Upcasting  
B. Downcasting  
C. Both equally risky  
D. Neither  

**Answer: A**

---

### Q157. Why can downcasting be dangerous?
A. The actual object may not really be of the derived type  
B. It always destroys the object  
C. It prevents compilation of all C++ programs  
D. It removes virtual functions  

**Answer: A**

---

# PART Q — JAVA MORE PRACTICE

### Q158. What is the output?

```java
class A {
    void show() {
        System.out.println("A");
    }
}

class B extends A {
    void show() {
        System.out.println("B");
    }

    void extra() {
        System.out.println("Extra");
    }
}

public class Main {
    public static void main(String[] args) {
        A a = new B();
        a.show();
    }
}
```

A. A  
B. B  
C. Extra  
D. Error  

**Answer: B**

**EXPLAIN & REMEMBER:** Overridden instance methods use the actual object (`B`) at runtime.

---

### Q159. What happens?

```java
A a = new B();
a.extra();
```

where `extra()` exists only in `B`.

A. Extra runs  
B. Compilation error  
C. Runtime error only  
D. A method is automatically created  

**Answer: B**

**EXPLAIN & REMEMBER:** The reference type `A` determines which members the compiler allows you to access. `extra()` is not declared in A.

---

### Q160. What is the output?

```java
class A {
    int x = 10;
}

class B extends A {
    int x = 20;
}

public class Main {
    public static void main(String[] args) {
        A a = new B();
        System.out.println(a.x);
    }
}
```

A. 10  
B. 20  
C. 30  
D. Error  

**Answer: A**

**EXPLAIN & REMEMBER:** Fields in Java are not dynamically dispatched like overridden instance methods. The reference type controls field access here.

**High-return trap:**  
**Methods → runtime dispatch.**  
**Fields → reference-type based access.**

---

### Q161. What does `final class Car` mean in Java?
A. Car cannot have objects  
B. Car cannot be extended  
C. Car must be abstract  
D. Car has only static methods  

**Answer: B**

---

### Q162. What does `final void show()` generally mean?
A. Method cannot be overridden  
B. Method must be overridden  
C. Method is abstract  
D. Method is private automatically  

**Answer: A**

---

### Q163. Can Java constructors be inherited?
A. Yes  
B. No  
C. Only public constructors  
D. Only protected constructors  

**Answer: B**

**EXPLAIN & REMEMBER:** Constructors belong to their own class and are not inherited like ordinary methods.

---

### Q164. What is method overloading in Java?
A. Same method name with different parameter lists  
B. Same method name and same parameters in child class  
C. Multiple inheritance  
D. Abstract class creation  

**Answer: A**

---

### Q165. What is method overriding in Java?
A. Child provides a compatible implementation of an inherited instance method  
B. Same method with different parameters in one class  
C. Constructor overloading  
D. Variable hiding only  

**Answer: A**

---

### Q166. Which is compile-time polymorphism in Java?
A. Method overloading  
B. Method overriding  
C. Dynamic dispatch  
D. Interface dispatch  

**Answer: A**

---

### Q167. Which is runtime polymorphism in Java?
A. Method overloading  
B. Method overriding  
C. Constructor overloading  
D. Variable declaration  

**Answer: B**

---

### Q168. What is the output?

```java
class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator c = new Calculator();
        System.out.println(c.add(2, 3));
    }
}
```

A. 2  
B. 5  
C. 5.0 only  
D. Error  

**Answer: B**

**EXPLAIN & REMEMBER:** The compiler selects the overload matching integer arguments.

---

# PART R — HIGH-RETURN C++ TRAPS

### Q169. Which function cannot be virtual?
A. Ordinary member function  
B. Destructor  
C. Constructor  
D. Base class method  

**Answer: C**

**Explanation:** Constructors cannot be virtual because virtual dispatch requires an already-established object type.

---

### Q170. Can a destructor be virtual?
A. No  
B. Yes  
C. Only static  
D. Only private  

**Answer: B**

---

### Q171. Can a static member function be virtual?
A. Yes  
B. No  
C. Only protected  
D. Only friend  

**Answer: B**

**Explanation:** Virtual dispatch requires an object context; static functions have no `this`.

---

### Q172. Can a friend function be virtual?
A. Yes  
B. No  
C. Only in abstract classes  
D. Only with multiple inheritance  

**Answer: B**

---

### Q173. Can a pure virtual function have an implementation in C++?
A. No, never  
B. Yes, it can have a definition even though it makes the class abstract  
C. Only if static  
D. Only if private  

**Answer: B**

**Placement note:** For Accenture-level OOP, know the rule but don't spend much preparation time on advanced pure-virtual definitions.

---

### Q174. Which keyword is used to prevent accidental copying by explicitly deleting a function?
A. `delete`  
B. `remove`  
C. `finalize`  
D. `disable`  

**Answer: A**

---

### Q175. Which keyword can be used to prevent a class from being inherited in modern C++?
A. `sealed`  
B. `final`  
C. `stop`  
D. `closed`  

**Answer: B**

---

### Q176. What does `class A final { };` mean?
A. A cannot be instantiated  
B. A cannot be inherited from  
C. A has no constructor  
D. A has only static members  

**Answer: B**

---

# PART S — SCENARIO RECOGNITION

### Q177. You have multiple notification types: Email, SMS, Push. All expose `send()`. Which OOP feature best supports selecting behavior based on actual object type?
A. Runtime polymorphism  
B. Encapsulation only  
C. Constructor overloading  
D. Static variables  

**Answer: A**

---

### Q178. A class exposes only `start()` and hides complex internal engine operations. This is:
A. Abstraction  
B. Multiple inheritance  
C. Overloading  
D. Assignment  

**Answer: A**

---

### Q179. A class prevents direct access to its password and provides `setPassword()`. This is:
A. Encapsulation  
B. Inheritance  
C. Multiple dispatch  
D. Aggregation  

**Answer: A**

---

### Q180. A developer wants several constructors with different inputs:
```cpp
User();
User(string name);
User(string name, int age);
```
This is:
A. Constructor overloading  
B. Method overriding  
C. Runtime polymorphism  
D. Inheritance  

**Answer: A**

---

### Q181. A base class declares `virtual void run()`, and each child provides its own `run()`. This is:
A. Runtime polymorphism  
B. Only encapsulation  
C. Composition  
D. Constructor chaining  

**Answer: A**

---

### Q182. A child class must provide `process()` because the parent declares:
```cpp
virtual void process() = 0;
```
What is this?
A. Pure virtual function  
B. Static function  
C. Friend function  
D. Constructor  

**Answer: A**

---

### Q183. A class contains another object directly as a member, and that object's lifetime is tied to the containing object. This is:
A. Composition  
B. Inheritance  
C. Overriding  
D. Association only  

**Answer: A**

---

### Q184. Two independent objects communicate but neither owns the other. This is closest to:
A. Association  
B. Composition  
C. Inheritance  
D. Virtual inheritance  

**Answer: A**

---

### Q185. A `Shape*` points to `Circle`, and calling `draw()` must execute Circle's implementation. What should `Shape::draw()` be?
A. virtual  
B. static  
C. private only  
D. friend  

**Answer: A**

---

# PART T — MORE CODE OUTPUT

### Q186. What is the output?

```cpp
class A {
public:
    virtual void f() { cout << "A"; }
};

class B : public A {
public:
    void f() override { cout << "B"; }
};

class C : public B {
public:
    void f() override { cout << "C"; }
};

int main() {
    A* p = new C();
    p->f();
}
```

A. A  
B. B  
C. C  
D. ABC  

**Answer: C**

---

### Q187. What is the output?

```cpp
class A {
public:
    void f() { cout << "A"; }
};

class B : public A {
public:
    void f() { cout << "B"; }
};

int main() {
    B b;
    b.f();
}
```

A. A  
B. B  
C. AB  
D. Error  

**Answer: B**

---

### Q188. What is the output?

```cpp
class A {
public:
    virtual void f() { cout << "A"; }
};

class B : public A {
public:
    void f() override { cout << "B"; }
};

int main() {
    B b;
    b.A::f();
}
```

A. A  
B. B  
C. AB  
D. Error  

**Answer: A**

**Explanation:** `A::f()` explicitly selects the base implementation.

---

### Q189. What is the output?

```cpp
class A {
public:
    int x = 1;
};

class B : public A {
public:
    int x = 2;
};

int main() {
    B b;
    cout << b.x << " " << b.A::x;
}
```

A. `1 1`  
B. `2 2`  
C. `2 1`  
D. `1 2`  

**Answer: C**

---

### Q190. What is the output?

```cpp
class A {
public:
    void show() const {
        cout << "A";
    }
};

int main() {
    const A a;
    a.show();
}
```

A. A  
B. Error  
C. Nothing  
D. Garbage  

**Answer: A**

**Explanation:** A `const` object can call a `const` member function.

---

### Q191. Which member function can be called on a const object?
A. A non-const member only  
B. A const-qualified member function  
C. Only a destructor  
D. Only a constructor  

**Answer: B**

---

### Q192. What is the output?

```cpp
class A {
public:
    void show() {
        cout << "A";
    }
};

int main() {
    const A a;
    a.show();
}
```

A. A  
B. Compilation error  
C. Runtime error  
D. Nothing  

**Answer: B**

**Explanation:** `show()` is not const-qualified, so it cannot be called on a const object.

---

# PART U — JAVA SCENARIO TRAPS

### Q193. What is the output?

```java
class Animal {
    void sound() {
        System.out.println("Animal");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.sound();
    }
}
```

A. Animal  
B. Dog  
C. Both  
D. Error  

**Answer: B**

**EXPLAIN & REMEMBER:** Java instance method overriding is dynamically dispatched.

---

### Q194. Which statement is correct?
A. Java requires `virtual` before every overridable method  
B. Java does not use C++-style `virtual` for ordinary instance method dispatch  
C. Java requires `override` keyword for every override  
D. Java uses `::` for parent methods  

**Answer: B**

**EXPLAIN & REMEMBER:** Java's model differs from C++. You should recognize dynamic dispatch without looking for `virtual`.

---

### Q195. What is the output?

```java
class A {
    void show() {
        System.out.println("A");
    }
}

class B extends A {
    void show() {
        super.show();
        System.out.println("B");
    }
}

public class Main {
    public static void main(String[] args) {
        new B().show();
    }
}
```

A. A  
B. B  
C. A then B  
D. Error  

**Answer: C**

**EXPLAIN & REMEMBER:** `super.show()` explicitly calls the parent implementation.

---

### Q196. What is the Java equivalent concept of the C++ expression `Base::show()`?
A. `super.show()`  
B. `this.show()`  
C. `parent.show()`  
D. `Base.show()`  

**Answer: A**

---

### Q197. What is the output?

```java
class A {
    A() {
        System.out.println("A");
    }
}

class B extends A {
    B() {
        super();
        System.out.println("B");
    }
}

public class Main {
    public static void main(String[] args) {
        new B();
    }
}
```

A. B then A  
B. A then B  
C. Only A  
D. Error  

**Answer: B**

---

### Q198. Which statement about Java `super()` is correct?
A. It calls the parent constructor  
B. It calls the current constructor  
C. It destroys the parent object  
D. It creates an interface  

**Answer: A**

---

### Q199. Which Java statement creates an object?
A. `Dog d;`  
B. `Dog d = new Dog();`  
C. `class Dog {}`  
D. `Dog();`  

**Answer: B**

**EXPLAIN & REMEMBER:** `new` creates the object. The left side declares the reference.

---

### Q200. Which Java statement is valid?

```java
Animal a = new Dog();
```

A. Only if Dog is a superclass of Animal  
B. If Dog is a subclass of Animal  
C. Only if Animal is final  
D. Never  

**Answer: B**

---

# PART V — FINAL 20 RAPID-FIRE HIGH-RETURN QUESTIONS

### Q201. C++ default class access?
A. public  
B. private  
C. protected  
D. package  

**Answer: B**

---

### Q202. C++ default struct access?
A. public  
B. private  
C. protected  
D. package  

**Answer: A**

---

### Q203. Java class inheritance keyword?
A. extends  
B. :  
C. inherits  
D. super  

**Answer: A**

---

### Q204. C++ inheritance symbol?
A. extends  
B. :  
C. implements  
D. inherits  

**Answer: B**

---

### Q205. C++ current-object pointer?
A. self  
B. this  
C. current  
D. object  

**Answer: B**

---

### Q206. Java current-object reference keyword?
A. self  
B. this  
C. current  
D. object  

**Answer: B**

---

### Q207. C++ runtime polymorphism commonly uses:
A. virtual  
B. static  
C. friend  
D. inline  

**Answer: A**

---

### Q208. Java abstract method keyword:
A. virtual  
B. abstract  
C. pure  
D. override  

**Answer: B**

---

### Q209. C++ pure virtual syntax:
A. `virtual f() = 0;`  
B. `abstract f();`  
C. `pure f();`  
D. `virtual f() = 1;`  

**Answer: A**

---

### Q210. Java parent-method call:
A. `Base::show()`  
B. `super.show()`  
C. `parent.show()`  
D. `base.show()`  

**Answer: B**

---

### Q211. C++ parent-method call:
A. `super.show()`  
B. `Base::show()`  
C. `parent.show()`  
D. `extends.show()`  

**Answer: B**

---

### Q212. Same method name, different parameter list:
A. Overloading  
B. Overriding  
C. Inheritance  
D. Abstraction  

**Answer: A**

---

### Q213. Child replaces a virtual base method:
A. Overloading  
B. Overriding  
C. Aggregation  
D. Association  

**Answer: B**

---

### Q214. Strong HAS-A relationship:
A. Composition  
B. Inheritance  
C. Overloading  
D. Overriding  

**Answer: A**

---

### Q215. IS-A relationship:
A. Composition  
B. Inheritance  
C. Association  
D. Aggregation  

**Answer: B**

---

### Q216. One shared member for all objects:
A. static  
B. private  
C. virtual  
D. friend  

**Answer: A**

---

### Q217. Base destructor should often be what when deleting derived objects through base pointers?
A. static  
B. virtual  
C. friend  
D. overloaded  

**Answer: B**

---

### Q218. C++ member initialization follows:
A. Initializer-list order  
B. Declaration order  
C. Alphabetical order  
D. Random order  

**Answer: B**

---

### Q219. Constructor order in inheritance:
A. Derived → Base  
B. Base → Derived  
C. Random  
D. Destructor → Constructor  

**Answer: B**

---

### Q220. Destructor order in inheritance:
A. Base → Derived  
B. Derived → Base  
C. Random  
D. Constructor → Destructor  

**Answer: B**

---

# MUST-MEMORIZE BEFORE THE ACCENTURE TEST

## C++ Core

1. `class` default access = **private**
2. `struct` default access = **public**
3. Object = instance of a class.
4. Encapsulation = bundle data + methods and control access.
5. Abstraction = expose essential behavior, hide implementation.
6. IS-A = inheritance.
7. HAS-A = composition/aggregation.
8. Overloading = same name, different parameter list → compile time.
9. Overriding = child replaces inherited virtual behavior → runtime.
10. C++ runtime polymorphism through base pointer/reference → use `virtual`.
11. `override` helps verify an intended override.
12. Pure virtual = `virtual f() = 0;`
13. Abstract class cannot normally be instantiated.
14. Constructor has no return type.
15. Destructor uses `~`.
16. Constructors are not virtual.
17. Destructors can be virtual.
18. Static member = shared at class level.
19. Static member function has no `this`.
20. `this` = current object.
21. `Base::f()` explicitly selects base implementation.
22. Base constructor runs before derived constructor.
23. Derived destructor runs before base destructor.
24. Member initialization follows declaration order.
25. Initializer-list order does NOT determine member initialization order.
26. Copy constructor constructs an object from another object.
27. Copy assignment assigns to an already-existing object.
28. Shallow copy can share raw owned resources.
29. Deep copy creates independent owned resources.
30. Rule of Three = destructor + copy constructor + copy assignment.

## Java Survival Set

1. `extends` = class inheritance.
2. `implements` = class implements interface.
3. `super` = parent-class reference/call.
4. `this` = current object.
5. `abstract` = abstract class/method.
6. `final class` = cannot be extended.
7. `final method` = cannot be overridden.
8. Java instance methods are dynamically dispatched by default.
9. `Animal a = new Dog();` → reference type Animal, actual object Dog.
10. Reference type controls what members the compiler lets you access.
11. Overridden instance method behavior comes from actual object type.
12. Fields do not use dynamic dispatch like overridden methods.
13. Java does not allow direct multiple inheritance of classes.
14. Java can implement multiple interfaces.
15. Java constructors are not inherited.
16. `super()` calls a parent constructor.
17. `this()` calls another constructor in the same class.
18. Java does not use C++ `virtual` for ordinary method dispatch.
19. Java does not use C++ `::` syntax.
20. C++ pure virtual function is conceptually similar to a Java abstract method.

---

# ACCENTURE TRAP LIST

When you see a question, immediately check these:

- **class vs struct default access**
- **overloading vs overriding**
- **compile-time vs runtime polymorphism**
- **virtual vs non-virtual function**
- **Base:: vs super**
- **C++ `:` vs Java `extends`**
- **C++ pure virtual vs Java abstract**
- **constructor order**
- **destructor order**
- **member declaration order vs initializer-list order**
- **static member vs instance member**
- **const object + const method**
- **virtual destructor**
- **shallow vs deep copy**
- **IS-A vs HAS-A**
- **Java reference type vs actual object**
- **Java fields vs overridden methods**
- **Java `final`**
- **Java `implements`**
- **Java `this()` vs `super()`**

---

# 10-SECOND OOP DECISION TREE

When you see an OOP question:

**Same name + different parameters?**
→ Overloading.

**Child gives implementation of inherited method?**
→ Overriding.

**Base pointer/reference + virtual function?**
→ Runtime polymorphism.

**`= 0` after virtual function?**
→ Pure virtual → abstract class.

**`Base::method()`?**
→ Explicit base implementation.

**`super.method()`?**
→ Java parent implementation.

**`this`?**
→ Current object.

**`static` member?**
→ Shared class-level state.

**IS-A?**
→ Inheritance.

**HAS-A?**
→ Composition/Aggregation.

**Constructor?**
→ Base first.

**Destructor?**
→ Derived first.

**C++ member initialization?**
→ Declaration order.

**Java `Animal a = new Dog()`?**
→ Animal reference, Dog object.

---

# HOW TO USE THIS FILE

Do NOT just read all 220 questions passively.

Use this method:

### Round 1 — Recognition
Answer quickly without looking at explanations.

Target: **70%+**

### Round 2 — Mistakes
For every wrong question, write the concept name:
- Virtual function
- Constructor
- Inheritance
- Overloading
- Java dispatch
- etc.

### Round 3 — Code/output
Redo only code/output questions without looking at answers.

Target: **80%+**

### Round 4 — Final revision
Memorize the "MUST-MEMORIZE" and "TRAP LIST" sections.

For your current placement timeline, do **not** spend hours on obscure C++ features. Your higher-return goal is to become extremely reliable on these fundamentals.

**Priority:** OOP fundamentals → C++ output questions → Java OOP survival concepts → mixed traps.
