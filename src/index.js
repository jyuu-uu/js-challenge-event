// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  mouseOver: function (e) {
    e.target.innerHTML = "The mouse is here!";
    e.target.style.color = colors[1];
  },
  mouseLeave: function (e) {
    e.target.innerHTML = "The mouse is gone!";
    e.target.style.color = colors[2];
  },
  contextMenu: function (e) {
    const inner = e.target.querySelector("body h2");
    inner.innerHTML = "That was right click!";
    inner.style.color = colors[3];
  },
  resized: function (e) {
    console.log(e.target.querySelector("body h2"));
    const inner = e.target.querySelector("body h2");
    inner.innerHTML = "You just resized";
    inner.style.color = colors[4];
  }
};

function init() {
  const body = document.querySelector("body");
  const h2 = body.querySelector("h2");

  h2.addEventListener("mouseover", superEventHandler.mouseOver);
  h2.addEventListener("mouseleave", superEventHandler.mouseLeave);
  window.addEventListener("contextmenu", superEventHandler.contextMenu);
  window.addEventListener("resize", superEventHandler.resized);
}

init();
