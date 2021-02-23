---
jupyter:
  jupytext:
    text_representation:
      extension: .md
      format_name: markdown
      format_version: '1.3'
      jupytext_version: 1.10.2
  kernelspec:
    display_name: Javascript (Node.js)
    language: javascript
    name: javascript
---

<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>

<!-- #region slideshow={"slide_type": ""} -->
# Manipulating the DOM
<!-- #endregion -->

```javascript
tools = require('../js/toolsv2')
tools.init()
```

## About the DOM

* The DOM is the tree of the HTML code you already seen
* The DOM can be read and modified in javascript using the global variable `document`
* The DOM expose a standard API, the full documentation can be found on [Mozzila MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
* For detailled information go to the link above


## Reading the DOM Basics


 * get element by there id: `document.getElementById("someid")`
 * get several elements by there tag `document.getElementsByTagName("sometag")`
 * From a given element those functions work for exemple:
 ```javascript
 let x = document.getElementById("someid");
 x.getElementsByTagName("div"); // Will provide all element "div" within x
 ```
 * read the attribute of an element `element.getAttribute("someattr")`
 * read the element style `element.style`
   * Note: this is not the actual computed style, but the direct style of the element
 * read the class of an element `element.classList`
 * And more


## Creating DOM element from scratch


* simply use `document.createElement("sometagname")`
* or copy an existing element `element.cloneNode()`
* maybe you dont want deep copy `element.cloneNode(false)`


# Modifying the DOM

* Add element to the tree `element.appendCHild(another_element)`
* Add or change an attribute `element.setAttribute("someattribute", somevalue)`
* Add or change a given style `element.style.color = "rgb(0,0,0)"`
* Add a class to an element `element.classList.add("someclass")`
* Remove a class to an element `element.classList.remove("someclass")`
* And manymore ...

```javascript

```
