const blinkCursor = document.getElementById("blink_cursor");
let opacityState = "true";

function blink() {
  if (opacityState == "true") {
    blinkCursor.style.opacity = "1";
    opacityState = "false"
  } else {
    blinkCursor.style.opacity = "0";
    opacityState = "true"
  }
}

const intervalId = setInterval(blink, 500);
