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
    title: exo - calculator
  rise:
    autolaunch: true
    slideNumber: c/t
    start_slideshow_at: selected
    theme: sky
    transition: cube
---

<!-- #region slideshow={"slide_type": ""} -->
<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
# practice : a calculator
<!-- #endregion -->

```javascript
tools = require('../js/toolsv2')
tools.init()
```

<!-- #region slideshow={"slide_type": "slide"} -->
start from this tutorial here
https://www.freecodecamp.org/news/how-to-build-an-html-calculator-app-from-scratch-using-javascript-4454b8714b98/

it comes [**with the html and css template**](https://codepen.io/zellwk/pen/pLgmGL) for a - rather nice btw - yet simple, calculator

the assignment is to write the **javascript companion** so that

* the device **actually does calculations**
* in a first step, ignore the '.' and just write an integer calculator
<!-- #endregion -->

```javascript hide_input=true slideshow={"slide_type": "slide"}
tools.from_samples("calculator")
```

<!-- #region slideshow={"slide_type": "slide"} -->
## How to code: General TIPS

* First do not think on coding but think about what do you want to achieve
* Decopose the think you try to achive in smaller think, for exemple, for the spinning wheel above:
  * you need a button
  * you need circles
  * you need to change the color of circle
  * you need to start/stop by pressing the button
  * and more ...
* Try to achive the smallest objectives first separatly or independently
  * At this step the search engine can help :)
  * **BUT NEVER USE THING THAT YOU DO NOT UNDERSTAND**
  * **Always** try to understand what you are using from others
  * **Always** adapt the code you want use from others
* Gather all technics aquire in previous step and combinne them
* Merge all thing together
* Enjoy
<!-- #endregion -->

