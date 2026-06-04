# Data Types in JavaScript

JavaScript is a dynamically typed language, which means variables can store values of different data types.

## 1. Number

The Number type represents both integer and floating-point values.

Examples:

* 100
* 3.14
* -50

### Special Numeric Values

#### Infinity

Represents a value greater than any possible number.

Example:

1 / 0

Output:

Infinity

#### -Infinity

Represents a value smaller than any possible number.

Example:

-1 / 0

Output:

-Infinity

#### NaN (Not a Number)

Represents an invalid mathematical operation.

Example:

0 / 0

Output:

NaN

---

## 2. BigInt

BigInt is used to store integers larger than the safe limit of the Number type.

To create a BigInt, append `n` to the end of the number.

Example:

123456789012345678901234567890n

typeof returns:

bigint

---

## 3. String

Strings are used to store text.

### Single Quotes

'Hello'

### Double Quotes

"Hello"

### Template Literals (Backticks)

Template literals allow embedding variables and expressions.

Example:

`My name is ${name}`

---

## 4. Boolean

Boolean values represent logical states.

Possible values:

* true
* false

Example:

10 > 3

Output:

true

---

## 5. Null

The null value represents "nothing", "empty", or "unknown".

Example:

let user = null;

Interestingly:

typeof null

returns:

object

This is a historical bug in JavaScript that has been kept for compatibility reasons.

---

## Summary

Primitive Data Types:

* Number
* BigInt
* String
* Boolean
* Null
* Undefined
* Symbol
