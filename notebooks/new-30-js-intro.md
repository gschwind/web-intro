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

<div class="licence">
<span>Licence CC BY-NC-ND</span>
<span>Thierry Parmentelat</span>
</div>

<!-- #region slideshow={"slide_type": ""} -->
# JavaScript
<!-- #endregion -->

```javascript
tools = require('../js/toolsv2')
tools.init()
```

<!-- #region slideshow={"slide_type": "slide"} -->
## Objective of the course #1

Release the following spinning-wheel with javascript during
<!-- #endregion -->

```javascript
tools.show_sample("spinning-wheel/step3");
```

<!-- #region slideshow={"slide_type": "slide"} -->
## Objective of the course #2

At the end of the course you should write it by yourself
<!-- #endregion -->

```javascript
tools.show_sample("calculator");
```

<!-- #region slideshow={"slide_type": "slide"} -->
## Step #1 : Starting point

Make the following static HTML
<!-- #endregion -->

```javascript
tools.show_sample("spinning-wheel/step1");
```

<!-- #region slideshow={"slide_type": "slide"} -->
To draw circle you will need to use the following snipet:

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
     <circle cx="100" cy="100" r="10" style="fill: rgb(100,200,100);" ></circle>
</svg>
```
<!-- #endregion -->

<!-- #region slideshow={"slide_type": "slide"} -->
Going to the Step #2

 * We need to use javascript to create a circle of dots
   * we need to underdand the basics of javascript
   * We need to load java script

<!-- #endregion -->
