---
jupyter:
  celltoolbar: Slideshow
  jupytext:
    cell_metadata_filter: all,-hidden,-heading_collapsed,-run_control,-trusted
    formats: md
    notebook_metadata_filter: all,-language_info,-toc,-jupytext.text_representation.jupytext_version,-jupytext.text_representation.format_version
    text_representation:
      extension: .md
      format_name: markdown
  kernelspec:
    display_name: Javascript (Node.js)
    language: javascript
    name: javascript
  nbhosting:
    title: bultin types
  rise:
    autolaunch: true
    slideNumber: c/t
    start_slideshow_at: selected
    theme: sky
    transition: cube
---

<!-- #region slideshow={"slide_type": "slide"} -->
<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
# JS builtin types
<!-- #endregion -->

```javascript
tools = require('../js/toolsv2')
tools.init()
```

<!-- #region slideshow={"slide_type": "slide"} -->
## Nothing but the usual
<!-- #endregion -->

* set of builtin types similar to Python's offering
* atomic : numbers, strings, booleans
* containers : arrays (lists), maps (dicts) and sets
* objects

<!-- #region slideshow={"slide_type": "slide"} -->
## atomic types
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* `number` is the default type for numeric values  
* `string`
* `boolean` may be `true` or `false`
<!-- #endregion -->

```javascript cell_style="split"
// usual operators, here
// ** is power and 
// % is modulo
(100 ** 9) % 11
```

```javascript cell_style="split"
// strings with ' or "
let s1 = "abc" + 'def';
let s2 = 'ab' + "cdef";
s1 == s2
```

<p class="rise-footnote">
    <b>beware</b> that <code>number</code> is similar to Python's <code>float</code> -- so <b>with imprecision</b> !  
    <br>
    google for <code>bigint</code> for error-free calculus on integers - like Python's <code>int</code>
</p>

<!-- #region slideshow={"slide_type": "slide"} -->
### atomic types (continued)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
* `null` is similar to Python's `None`
* `undefined` 
  * as mentioned earlier, JavaScript is very permissive
  * some expressions return `undefined` instead of raising an exception
* `NaN` is "Not a Number"
<!-- #endregion -->

```javascript cell_style="split"
// in anticipation
object = { x: 10, y: 20}

// this in Python would 
// trigger an exception
console.log(object.z)
```

```javascript cell_style="split"
// unlike Python
3 * "abc" 
```

<!-- #region slideshow={"slide_type": "slide"} -->
### boolean operators
<!-- #endregion -->

the syntax for boolean operators is here again inherited from C / C++ / Java

```javascript cell_style="split"
if (true && true) {
    console.log(
        "logical and is &&")
}
```

```javascript cell_style="split"
if (true || false) {
    console.log(
        "logical or is ||")
}
```

```javascript
if ( ! false) console.log("not is ! ")
```

<!-- #region slideshow={"slide_type": "slide"} -->
### see also
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
for a deeper study :

* [on numbers](https://javascript.info/number)
* [on strings](https://javascript.info/string)
* [operators on booleans](https://javascript.info/logical-operators)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## Arrays 
<!-- #endregion -->

* similar to Python's `list`s

```javascript cell_style="split"
// arrays can be heterogeous
let array1 = [1, "two"]

// you can also create an
// empty instance explicitly
let array2 = new Array()
```

```javascript cell_style="split"
// insert at the end
array2.push(3)
array2.push("four")
array2.push(5)
console.log(array2)
```

```javascript cell_style="split"
// and get it back
array2.pop()
```

<!-- #region slideshow={"slide_type": "slide"} -->
### Common operations on arrays
<!-- #endregion -->

```javascript cell_style="split"
// use the concat method
let array = array1.concat(array2)
array
```

```javascript cell_style="split"
// and NOT addition, 
// it does NOT work like in Python
array1 + array2
```

```javascript cell_style="split"
// indexing starts at 0 
array[2]
```

```javascript cell_style="split"
array.length 
```

<!-- #region slideshow={"slide_type": "slide"} -->
### Searching
<!-- #endregion -->

* like with Python lists, searching in an array is **linear** in its length
* so like in Python if you need fast access, use a *Map* instead  
  (more on this right away)

```javascript cell_style="split"
// searching; >=0 means it is found
console.log(array.indexOf(3))
```

```javascript cell_style="split"
// otherwise -1
console.log(array.indexOf("absent"))
```

<!-- #region slideshow={"slide_type": "slide"} -->
### Iterating over values of an array
<!-- #endregion -->

<!-- #region cell_style="split" -->
* It posible to iterate through an array like python:
<!-- #endregion -->

```javascript
for (let x of array1) {
    console.log(x);
}
```

* But be carefull of use `of` instead of `in` to iterrate each value
* also notice how to use `let` to define a variable **local** to the `for` loop


### Iterating using indices, ak. enumerate in python


* Using `in` keyword iterate through indices:

```javascript cell_style="split"
for (let i in array) {
    console.log(i);
}
```

<!-- #region slideshow={"slide_type": "slide"} -->
### More on arrays
<!-- #endregion -->

* as you expect there are many more methods available, like  
  `.sort()`, `.reverse()`  
  `.join()`, `.slice()`, `.splice()`,  
  `.shift()`, `.unshift()` 

* for more details see on *javascript.info*
  * [this article on Arrays](https://javascript.info/array)
  * and [this one on related methods](https://javascript.info/array-methods)
     

<!-- #region slideshow={"slide_type": "slide"} -->
### Shared references
<!-- #endregion -->

* **exactly like in Python**, objects can be access from several references  
* so you need to shallow- or deep-copy depending on your needs

```javascript cell_style="split"
let ref1 = [["shared", "data"], "unshared"];
ref1 
```

```javascript cell_style="split"
// slice() works like Python's [:]
// so it's a shallow copy
let ref2 = ref1.slice();
ref2
```

```javascript cell_style="split"
// changing data from ref2 
ref2[0][0] = "from 2 - deep"
ref2[1] = "from 2 - shallow"
ref2
```

```javascript cell_style="split"
// impacts ref1 but not on first level
// because it is a shallow copy
ref1
```

<!-- #region slideshow={"slide_type": "slide"} -->
### pythontutor illustration


![](../media/references-shared.png)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## Hash-based data types
<!-- #endregion -->

* `Map` and `Set` are JavaScript builtin types
  * that match Python's `dict` and `set` respectively
* they exhibit the same constant-time lookup nice property
* like in Python, **make sure to use them** whenever you need fast searching and indexing

```javascript cell_style="split"
let map = new Map();

map.set('key1', 'value1');
map.set(1000, 'value1000');

map.get(1000)
```

```javascript cell_style="split"
// iterating over map
for (let k of map.keys()) {
    console.log(`key=${k}, value=${map.get(k)}`)
}
```

<!-- #region slideshow={"slide_type": "slide"} -->
### see also

* read the [section on maps and sets on javascript.info](https://javascript.info/map-set)
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## Objects
<!-- #endregion -->

* as the name suggests, objects are the building block for OOP
* they are similar to Python's class instances
  * in that they can hold attributes (Python vocabulary)
  * that in JavaScript are called key-value pairs

```javascript cell_style="split"
let bond = {
    first_name: "James",
    last_name: "Bond"
}

console.log(`my name is ${bond.last_name}`);
```

```javascript cell_style="split"
// check for a key
'first_name' in bond
```

<p class="rise-footnote"> 
    the syntax for JavaScript objects, as well as the <i>key/value</i> vocabulary make them <b>look like</b> Python dictionaries, <b>do not get confused though</b>, JavaScript objects are much more like Python class instances.
</p>

<!-- #region slideshow={"slide_type": "slide"} -->
### iterating over an object's keys
<!-- #endregion -->

* one can access an object's key/attribute with 2 syntaxes
  * `object.first_name` takes the key name litterally
  * `object[var]` **evaluates** `var`, that should give a key name

```javascript
// so we can use this to iterate over an object's contents
for (key in bond) {
    console.log(key, ':', bond[key])
}
```

<!-- #region slideshow={"slide_type": "slide"} -->
### Assignment based on objects
<!-- #endregion -->

reminder : we had already seen array-based assignment which is a Python-style idiom

```javascript
let [a1, a2] = [100, 200];

`a1 now is ${a1}, a2 is ${a2}`
```

there a similar destructuring assignement on objects  

```javascript

let example_obj = {name: "doe", phone: '0123456', other: 'some stuff'};

let {name, phone} = {...example_obj};

`name now is ${name}, phone is ${phone}`

```

<!-- #region slideshow={"slide_type": "slide"} -->
## class instances are objects
<!-- #endregion -->

```javascript
class Person {
    constructor(first, last) {
        this.first_name = first;
        this.last_name = last;
    }
}

let person = new Person("John", "Doe")

typeof(person)
```

<!-- #region slideshow={"slide_type": "slide"} -->
## arguments are passed by reference
<!-- #endregion -->

* like in Python, when passing a composite object  
  (array, map, object, …) to a function
* you pass a **reference** (not a copy),  
  so the function can alter its parameter

```javascript cell_style="split"
// on an array
function side_effect(arg) {
    arg[1] *= 1000;
}

let list = [0, 1, 2];
side_effect(list);
list
```

```javascript cell_style="split"
// same with objects
function change_object(obj) {
    obj.first_name = 'BOOM';
}

let person2 = new Person('John Doe')
change_object(person2)
person2
```

<!-- #region slideshow={"slide_type": "slide"} -->
## arguments passing is loosely checked
<!-- #endregion -->

```javascript
// just display arguments
function foo(x, y, z) {
    console.log(`x=${x}, y=${y}, z=${z}`);
}

```

```javascript cell_style="split"
// works fine, of course
foo(1, 2, 3)
```

```javascript cell_style="split"
// works fine TOO !
foo(1, 2)
```

```javascript
// and this one AS WELL
foo(1, 2, 3, 4)
```

<!-- #region slideshow={"slide_type": "slide"} -->
### more on arguments
<!-- #endregion -->

* unlike Python there is no named arguments ak. `foo(arg0=10)`
* nor of arguments with default values
* **there is** however a way to deal with variable number of arguments

```javascript
// equivalent to Python's 
// def bar(x, y, *args):

function bar(x, y, ...arguments) {
    // display what we receive
    console.log(`x=${x}, y=${y}`);
    console.log(`arguments=${arguments}`);
    // the arguments object can be iterated on
    for (let arg of arguments) {
        console.log(arg);
    }
}

// with this call, the 2 extra args are captured 
bar(1, 2, 3, 4)
```
