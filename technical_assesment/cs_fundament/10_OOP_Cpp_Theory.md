# Accenture OOP Theory in C++
## High-Return Placement Preparation

This is C++-first OOP theory for Accenture placement preparation. These are study notes, not official/leaked questions.

## 1. OOP
Object-Oriented Programming organizes software around objects containing state/data and behavior/methods. C++ supports OOP.

Four pillars:
1. Encapsulation
2. Abstraction
3. Inheritance
4. Polymorphism

## 2. Class
A class is a user-defined type/blueprint describing data and behavior.

```cpp
class Student {
public:
    string name;
    void study() { cout << "Studying"; }
};
```

`Student` is the class; `name` is a data member; `study()` is a member function.

## 3. Object
An object is an instance of a class.

```cpp
Student s1;
Student s2;
```

`s1` and `s2` are separate objects with their own instance state.

## 4. Class vs Object
| Class | Object |
|---|---|
| Blueprint/type | Instance |
| Describes structure/behavior | Actual entity |
| Example `Car` | Example `Car c1` |

## 5. Access Specifiers
C++ has `public`, `private`, and `protected`.

- `public`: accessible from ordinary outside code.
- `private`: directly accessible within the class (and permitted friends), not ordinary outside code.
- `protected`: accessible in the class and derived classes, not ordinary outside code.

**Critical trap:** class members are `private` by default.

```cpp
class A {
    int x; // private
};
```

## 6. struct vs class
`struct` members are public by default; `class` members are private by default.

Default inheritance also differs:
```cpp
class Child : Parent {};   // private inheritance by default
struct Child : Parent {};  // public inheritance by default
```

## 7. Constructor
A constructor initializes an object.

```cpp
class Student {
public:
    Student() { cout << "Created"; }
};
```

Characteristics:
- Same name as class
- No return type
- Called automatically during object construction
- Can be overloaded
- Cannot be `static`

## 8. Default and Parameterized Constructors
```cpp
Student() {}
Student(string n) { name = n; }
```

A constructor callable with no arguments is a default constructor. A constructor accepting arguments is parameterized.

## 9. Constructor Overloading
Multiple constructors with different parameter lists:

```cpp
class Box {
public:
    Box() {}
    Box(int x) {}
    Box(int x, int y) {}
};
```

This is compile-time polymorphism.

## 10. Initializer List
```cpp
class Student {
    int age;
public:
    Student(int a) : age(a) {}
};
```
Important for const members, reference members, base-class construction, and direct initialization.

## 11. Destructor
A destructor runs when an object is destroyed.

```cpp
~Student() {}
```

Rules:
- Same class name preceded by `~`
- No return type
- No parameters
- Cannot be overloaded
- Used for cleanup/resource management

Constructor vs destructor:
| Constructor | Destructor |
|---|---|
| Initializes | Cleans up |
| `ClassName()` | `~ClassName()` |
| Can overload | Cannot overload |
| Creation | Destruction |

## 12. this Pointer
`this` points to the current object inside a non-static member function.

```cpp
class Student {
    int age;
public:
    Student(int age) {
        this->age = age;
    }
};
```

`this->age` is the object's member; `age` is the parameter.

## 13. Encapsulation
Bundling data and methods together while controlling access to internal state.

```cpp
class BankAccount {
private:
    double balance = 0;
public:
    void deposit(double amount) {
        if (amount > 0) balance += amount;
    }
    double getBalance() { return balance; }
};
```

Recognition: **protect/control internal data → encapsulation.**

## 14. Getter and Setter
Getter reads state; setter changes state under controlled rules.

```cpp
int getAge() { return age; }
void setAge(int a) { age = a; }
```

## 15. Abstraction
Expose essential behavior while hiding unnecessary implementation details.

C++ mechanisms include classes, access control, abstract classes, and pure virtual functions.

Recognition: **show what, hide how → abstraction.**

## 16. Encapsulation vs Abstraction
| Encapsulation | Abstraction |
|---|---|
| Controls/protects state | Hides implementation complexity |
| Focus: access/data | Focus: essential interface |
| Access specifiers are central | Abstract interfaces/classes are common |

Memory: **Encapsulation = control data; Abstraction = hide complexity.**

## 17. Inheritance
A derived class acquires accessible behavior/data from a base class.

```cpp
class Animal {
public:
    void eat() {}
};
class Dog : public Animal {};
```

`Dog d; d.eat();`

Terminology: base/parent/superclass and derived/child/subclass.

## 18. Types of Inheritance
- Single: A → B
- Multilevel: A → B → C
- Multiple: A + B → C
- Hierarchical: A → B and A → C
- Hybrid: combination of types

Example multiple:
```cpp
class C : public A, public B {};
```

## 19. Inheritance Access
For public inheritance:
- base public → derived public
- base protected → derived protected
- base private → not directly accessible

For protected inheritance:
- base public/protected → derived protected

For private inheritance:
- base public/protected → derived private

Base private members are never directly accessible in a derived class.

## 20. C++ has no `super` keyword
Java uses `super`; C++ can explicitly access a base member with the base class name:

```cpp
Parent::show();
```

## 21. Polymorphism
One interface/name can represent different behavior.

Two major forms:
- Compile-time
- Runtime

## 22. Compile-Time Polymorphism
Common examples:
- Function overloading
- Operator overloading
- Constructor overloading

## 23. Function Overloading
Same function name, different parameter list.

```cpp
int add(int a, int b);
int add(int a, int b, int c);
```

Changing only return type does **not** create a valid overload.

## 24. Operator Overloading
C++ permits operators to be customized for user-defined types.

```cpp
Point operator+(const Point& other) { ... }
```

This is compile-time polymorphism.

## 25. Runtime Polymorphism
Runtime selection of an implementation through mechanisms such as virtual functions and overriding.

```cpp
class Animal {
public:
    virtual void sound() { cout << "Animal"; }
};

class Dog : public Animal {
public:
    void sound() override { cout << "Bark"; }
};

Animal* a = new Dog();
a->sound(); // Bark
```

## 26. Function Overriding
A derived class provides a new implementation of a base virtual function.

`override` tells the compiler that the function is intended to override a virtual base function.

## 27. Overloading vs Overriding
| Overloading | Overriding |
|---|---|
| Usually same class | Base + derived |
| Different parameter list | Same overriding signature |
| Compile-time | Runtime when virtual dispatch is used |
| Inheritance not required | Inheritance relationship required |

Memory: **Overloading = different parameters; overriding = derived implementation.**

## 28. Virtual Function
A virtual function enables dynamic dispatch through a base pointer/reference.

```cpp
virtual void sound() {}
```

Without virtual, a call through a base pointer is statically bound in the basic case.

## 29. Pure Virtual Function
Declared using `= 0`:

```cpp
virtual void sound() = 0;
```

A class containing a pure virtual function is abstract and cannot be directly instantiated.

## 30. Abstract Class
Cannot be instantiated directly.

```cpp
class Shape {
public:
    virtual double area() = 0;
};
```

A concrete derived class can implement `area()` and be instantiated.

## 31. Interface Concept in C++
C++ has no Java-style `interface` keyword. An interface-like abstraction is commonly represented by an abstract class containing pure virtual functions.

```cpp
class Printable {
public:
    virtual void print() = 0;
    virtual ~Printable() = default;
};
```

## 32. Virtual Destructor
For polymorphic base classes, a virtual destructor is often appropriate:

```cpp
virtual ~Base() = default;
```

It ensures correct derived destruction when deleting through a base pointer.

## 33. Static Data Member
Belongs to the class and is shared by objects.

```cpp
class Student {
public:
    static int count;
};
int Student::count = 0;
```

## 34. Static Member Function
Can be called using the class name:

```cpp
class Math {
public:
    static int square(int x) { return x*x; }
};
Math::square(5);
```

A static member function has no `this` pointer and cannot directly access non-static instance members.

## 35. const
A const data member cannot be modified after initialization and is normally initialized in the initializer list.

```cpp
const int id;
Student(int x) : id(x) {}
```

A const member function:

```cpp
int getAge() const { return age; }
```

promises not to modify the object through that function and can be called on const objects.

## 36. Friend Function
A non-member function can be granted access to private/protected members.

```cpp
class Box {
    int value = 10;
    friend void show(Box);
};
```

Friendship is explicitly granted by the class.

## 37. IS-A vs HAS-A
Inheritance commonly models **IS-A**:
- Dog IS-A Animal
- Car IS-A Vehicle

Composition commonly models **HAS-A**:
- Car HAS-A Engine
- Computer HAS-A CPU

Do not use inheritance merely for code reuse when the relationship is not genuinely "is-a".

## 38. Composition
Strong has-a/ownership relationship.

```cpp
class Engine {};
class Car {
    Engine engine;
};
```

## 39. Aggregation
Weaker has-a relationship where the contained object can exist independently.

Conceptual example: Department — Professor.

## 40. Association
Objects are related/interact without necessarily implying ownership.

Example: Doctor — Patient.

Quick table:
| Relationship | Idea |
|---|---|
| Association | Uses/relates to |
| Aggregation | Weak has-a |
| Composition | Strong has-a/ownership |

## 41. Diamond Problem
Multiple inheritance can create duplicate base subobjects:

```text
      A
     /     B   C
     \ /
      D
```

B and C both inherit A, so D can receive two A subobjects.

## 42. Virtual Inheritance
Can avoid duplicate base subobjects in a diamond hierarchy:

```cpp
class B : virtual public A {};
class C : virtual public A {};
class D : public B, public C {};
```

Placement recognition: **virtual inheritance → diamond problem.**

## 43. Upcasting
Derived → base pointer/reference:

```cpp
Dog d;
Animal* a = &d;
```

Generally safe with public inheritance.

## 44. Downcasting
Base → derived. C++ can use checked `dynamic_cast` for polymorphic types:

```cpp
Animal* a = new Dog();
Dog* d = dynamic_cast<Dog*>(a);
```

Lower priority for Accenture.

## 45. Early vs Late Binding
Early/static binding: call determined at compile time; overloading is the common example.

Late/dynamic binding: implementation selected at runtime; virtual dispatch is the common C++ example.

## 46. Object Lifetime / Scope
Local automatic objects are destroyed when they leave scope:

```cpp
{
    Student s;
}
// destructor runs here
```

## 47. RAII
Resource Acquisition Is Initialization: bind resource ownership/lifetime to object lifetime. Destruction automatically releases the owned resource.

## 48. Copy Constructor
Creates an object from another object of the same type.

```cpp
Student(const Student& other) { ... }
Student s2 = s1;
```

## 49. Copy Assignment
Assigns an already-existing object from another:

```cpp
Student s1, s2;
s2 = s1;
```

Do not confuse it with copy construction.

## 50. Shallow vs Deep Copy
Shallow copy can copy pointer values so two objects refer to the same resource.

Deep copy creates independent owned data.

This matters especially for classes managing raw dynamic memory.

## 51. Rule of Three
For classes manually managing resources, defining one of destructor, copy constructor, or copy assignment may mean the other two are needed too.

Lower priority than core OOP.

## 52. Scope Resolution `::`
Used for class/namespace scope:

```cpp
Student::count
Parent::show();
```

## 53. Constructor/Destructor Order
For a derived object:
1. Base constructor
2. Derived constructor

Destruction:
1. Derived destructor
2. Base destructor

## 54. Member Initialization Order
Members initialize in the order they are **declared in the class**, not the order written in the initializer list.

```cpp
class A {
    int x;
    int y;
public:
    A() : y(2), x(1) {}
};
```

`x` still initializes before `y`.

## 55. Access Quick Table
| Context | public | protected | private |
|---|---|---|---|
| Same class | Yes | Yes | Yes |
| Derived class | Yes | Yes | No direct access |
| Ordinary outside code | Yes | No | No |

Friends can receive special access.

# Four Pillars — Recognition
- Encapsulation → protect/control internal data
- Abstraction → hide implementation complexity
- Inheritance → acquire accessible base behavior; IS-A
- Polymorphism → same interface/name, different behavior

# High-Return C++ Keywords
`class`, `public`, `private`, `protected`, `this`, constructor, destructor, `virtual`, `override`, `= 0`, `static`, `const`, `friend`, `::`

# Critical Traps
1. C++ class members are private by default.
2. C++ struct members are public by default.
3. Constructor has no return type.
4. Destructor starts with `~`.
5. Destructor cannot be overloaded.
6. Overloading requires different parameter lists.
7. Return type alone cannot overload a function.
8. `this` represents the current object.
9. Static member functions have no `this`.
10. Base private members are not directly accessible in derived classes.
11. C++ has no Java-style `super`.
12. Pure virtual function uses `= 0`.
13. Abstract classes cannot be directly instantiated.
14. Virtual functions enable dynamic dispatch.
15. `override` verifies intended overriding.
16. Public inheritance commonly models IS-A.
17. Composition commonly models HAS-A.
18. Virtual inheritance is associated with the diamond problem.
19. Base constructor runs before derived constructor.
20. Derived destructor runs before base destructor.
21. Members initialize in declaration order.
22. Copy constructor initializes a new object from another.
23. Copy assignment assigns an existing object.
24. Do not confuse OOP concepts with networking concepts.

# Accenture Priority

## Tier 1 — MUST KNOW
Class/object; public/private/protected; constructor; destructor; this; encapsulation; abstraction; inheritance; inheritance types; polymorphism; overloading; overriding; virtual function; pure virtual function; abstract class; interface-like design; overloading vs overriding; IS-A/HAS-A; static.

## Tier 2 — HIGH VALUE
const; friend; composition; aggregation; association; initializer lists; constructor/destructor order; inheritance access; diamond problem; virtual inheritance; copy constructor; copy assignment.

## Tier 3 — IF TIME ALLOWS
RAII; Rule of Three; deep/shallow copy; dynamic_cast; virtual destructor; detailed lifetime; move semantics.

Do not spend limited preparation time on advanced template metaprogramming, deep STL internals, advanced memory-model details, or large design-pattern catalogs unless the assessment specifically requires them.

# One-Page Mental Model

OOP
├── Class → blueprint
├── Object → instance
├── Encapsulation → control/protect data
├── Abstraction → hide implementation complexity
├── Inheritance → IS-A
└── Polymorphism
    ├── Compile time → overloading/operator overloading/constructor overloading
    └── Runtime → virtual functions/overriding

# Final Checklist
Before moving to MCQs, be able to explain immediately:
- class vs object
- class vs struct
- default access
- constructor/destructor
- this
- encapsulation vs abstraction
- inheritance and its types
- public/protected/private inheritance
- polymorphism
- overloading vs overriding
- virtual/pure virtual functions
- abstract class
- interface-like abstraction in C++
- static
- const
- friend
- IS-A vs HAS-A
- composition/aggregation/association
- diamond problem/virtual inheritance
- copy constructor vs copy assignment
- constructor/destructor order
- member initialization order

# Next Step
After theory, move directly to **Accenture-style C++ OOP MCQs**, then scenario questions, code/output questions, and common traps. The goal is recognition and speed, not university-level depth.
