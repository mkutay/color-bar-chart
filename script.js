let bar = 0;

// let element = document.getElementById("blue");
// let margin_top_blue = Number(window.getComputedStyle(element).getPropertyValue("margin-top").slice(0, -2));

function handler() { // 96px and 64px
  let vals = [];

  for (let i = 1; i <= bar; i++) {
    let h = "height" + i;
    let c = "color" + i;
    let num = document.querySelector("#" + h);
    document.getElementById(c).style["padding-bottom"] = num.value + "px";
    document.getElementById(c).style.marginTop = (-18.5 - num.value) + "px";
    document.getElementById(c).innerHTML = num.value

    vals.push(Number(num.value))
  }

  vals.sort(function(a, b) { return a - b; });

  document.getElementById("graph").style["padding-top"] = (96 + vals[vals.length - 1]) + "px";
  // document.getElementById("graph").style["margin-top"] = (64 + mxH) + "px";

  let avg = 0;
  vals.forEach((val) => {
    avg += val;
  });
  avg /= vals.length;

  document.getElementById("avg").innerHTML = "average value: " + avg;
  document.getElementById("max").innerHTML = "max value: " + vals[vals.length - 1];
  document.getElementById("min").innerHTML = "min value: " + vals[0];

  let median = 0;
  if (vals.length % 2 == 0) {
    median = (vals[vals.length / 2] + vals[vals.length / 2 - 1]) / 2;
  } else if (vals.length % 2 == 1) {
    median = vals[Math.floor(vals.length / 2)];
  }
  document.getElementById("median").innerHTML = "median value: " + median;

  console.log(vals, median);
}

function addBar() {
  let color = document.getElementById("color").value;

  let newDiv = document.createElement("div");
  let newContent = document.createTextNode("bar " + (bar + 1) + ": ");

  newDiv.appendChild(newContent);

  let input = document.createElement("input");
  input.type = "number";
  input.value = 0;
  input.id = "height" + (bar + 1);
  input.setAttribute("onchange", "handler()");
  input.setAttribute("onpaste", "handler()");
  input.setAttribute("oninput", "handler()");
  input.setAttribute("onkeypress", "handler()");

  newDiv.appendChild(input)

  document.body.insertBefore(newDiv, document.getElementById("graph"));

  let newText = document.createElement("text", 0);
  newText.id = "color" + (bar + 1);

  document.getElementById("graph").insertBefore(newText, document.getElementById("lastg"));

  document.getElementById("color" + (bar + 1)).style.color = "white";
  document.getElementById("color" + (bar + 1)).style.background = color;
  document.getElementById("color" + (bar + 1)).style.padding = "0 0.5em 0 0.5em";
  document.getElementById("color" + (bar + 1)).style.margin = "-18.5px 0em 0 " + (bar * 4) + "em";
  document.getElementById("color" + (bar + 1)).style.position = "absolute";
  document.getElementById("color" + (bar + 1)).style.display = "block";

  document.getElementById("graph").style.width = bar * 4 + 3 + "em";

  bar++;

  handler();
}