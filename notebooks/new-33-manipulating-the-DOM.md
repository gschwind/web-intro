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
    title: js intro
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

<!-- #region slideshow={"slide_type": "-"} -->
# Manipulating the DOM
<!-- #endregion -->

```javascript
tools = require('../js/toolsv2')
tools.init()
```

<!-- #region slideshow={"slide_type": "slide"} -->
## About the DOM

* The DOM is the tree of the HTML code you already seen
* The DOM can be read and modified in javascript using the global variable `document`
* The DOM expose a standard API, the full documentation can be found on [Mozzila MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
* For detailled information go to the link above
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
## Reading the DOM Basics
<!-- #endregion -->

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

<!-- #region slideshow={"slide_type": "slide"} -->
## Creating DOM element from scratch
<!-- #endregion -->

* simply use `document.createElement("sometagname")`
* or copy an existing element `element.cloneNode()`
* maybe you dont want deep copy `element.cloneNode(false)`

<!-- #region slideshow={"slide_type": "slide"} -->
# Modifying the DOM

* Add element to the tree `element.appendCHild(another_element)`
* Add or change an attribute `element.setAttribute("someattribute", somevalue)`
* Add or change a given style `element.style.color = "rgb(0,0,0)"`
* Add a class to an element `element.classList.add("someclass")`
* Remove a class to an element `element.classList.remove("someclass")`
* And manymore ...
<!-- #endregion -->

```javascript

```
