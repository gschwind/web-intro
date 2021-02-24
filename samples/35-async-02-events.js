window.addEventListener(
  "load",
  function() {
    console.log("page loaded, arming callbacks")
    // attach callbacks
    document.getElementById("textual-input")
      .addEventListener(
      "keydown", function(event) {
        // for inspection in the console
        console.log("KEYDOWN", event)
        // display in dedicated area 'result'
        document.getElementById("result").textContent 
          = `typed key ${event.key}`
      }
    )
    document.getElementById("graphic-svg")
      .addEventListener(
      "click", function(event) {
        // for inspection in the console
        console.log("CLICK", event)
        // display in dedicated area 'result'
        document.getElementById("result").textContent 
          = `clicked ${event.offsetX}x${event.offsetY}`
      }
    )
  }
)
