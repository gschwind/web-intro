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
    title: exo - spinning wheel
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
# practice : a spinning wheel
<!-- #endregion -->

```javascript
tools = require('../js/toolsv2')
tools.init()
```

<!-- #region slideshow={"slide_type": ""} -->
## objective : the outcome
<!-- #endregion -->

```javascript hide_input=true
tools.from_samples("spinning-wheel")
```

<!-- #region slideshow={"slide_type": ""} -->
## a few hints
<!-- #endregion -->

For example (but that's entirely up to you)

* write a JavaScript class `SpinningWheel` 
* that can be created from :
  * a `svg` element
  * the circle's center and radius `cx`, `cy`, `cr`,
  * the number of dots, the radius of dots `n_dots`, `r_dots`
  * the period in milliseconds (for one wheel round)
  * two colours for the 'dark' and 'light' ends of the spectrum
* and with methods like
  * `start()`
  * `stop()`
  * `resume()`
  * `clear()` 
  
* it may be helpful to create a convenience function that creates an SVG element inside a container that is found through its id;  
  e.g. `create_spinning_wheel("spin-container")` would create (and return) a `SpinningWheel` instance inside (the element found by selector) `#spin-container`


* attach to the `load` event of your page
* a function that creates the spinning wheel
  and then and stops it after a fixed duration

<!-- #region slideshow={"slide_type": ""} -->
## remember also that
<!-- #endregion -->

<!-- #region -->
* svg elements need to be created with the right namespace, i.e.:

```javascript
const svgNS = "http://www.w3.org/2000/svg";
let dot = document.createElementNS(svgNS, 'circle');
```

<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
## the  HTML part
<!-- #endregion -->

your html part could look like the following  

```javascript hide_input=true
fs = require('fs');
html = fs.readFileSync("../samples/spinning-wheel.html", "utf-8");
[start, end ] = [html.indexOf("<body>"), html.indexOf("</body>")];
extract = html.slice(start, end+7);
$$.html(`<code><pre>${tools.escape(extract)}</pre></code>`);
```

<!-- #region slideshow={"slide_type": ""} -->
## observe

* the HTML document is mostly empty, and gets populated by program

* as usual now, the way we attach a callback to the `load` event  
<!-- #endregion -->

<!-- #region slideshow={"slide_type": ""} -->
## observe (2)

* how tedious it is to have to pass all arguments to the class constructor - because JavaScript does not support (yet?) default values parameters  
  in similar situations, a common practice is to impose only a small set of required parameters, and then to accept a single `options` argument
  
So one could offer instead:

```javascript
SpinningWheel(radius, options) {
   ...
}
```

and allow callers to set specific parameters in the `options` object; for examples one could call

```javascript
let spin = SpinningWheel(100, 
                         { bg_color: [200, 100, 50], period=500})
```
and have the `SpinningClass` code provide default for missing parameters.
<!-- #endregion -->

### optional assignments


students who have finished the exercise can :

* tweak their code to adapt to this more convenient interface
* make the wheel vanish automatically after the timeout
* add some interactive means to
  * clear the wheel
  * create new wheels upon mouse clicks
* etc…
