//////////////////////////////////////////////////////
/////////////////// $() / .find() ////////////////////
//////////////////////////////////////////////////////

// tjekke element for id, tag, class, css selector
function find(ele) {
  var x = document.querySelector(ele);
  //console.log(x);
  return x;
}

find("li");

//////////////////////////////////////////////////////
/////////////////////// html() ///////////////////////
//////////////////////////////////////////////////////

// bruge findmetode
function html(ele, value) {
  var x = find(ele);
  if (value) {
    x.innerHTML = value;
  }
  return x.innerHTML;
}

var y = html("li.someClass", "two");
// når vi kører funktionen, så er var "outputtet"

function test() {
  return 'et eller andet';
}

var z = test;
//console.log(z);
// når vi IKKE kører funktionen, så er var funktionen

//////////////////////////////////////////////////////
/////////////////////// .val() ///////////////////////
//////////////////////////////////////////////////////

function val(ele, value) {
  var x = find(ele);
  if (value) {
    x.value = value;
  }
  //console.log(x);
  //console.log(value);
  return x.value;
}

document.getElementById("btn").onclick = function() {
  val("input", "Ny");
};

//////////////////////////////////////////////////////
////////////////////// .append() /////////////////////
//////////////////////////////////////////////////////

// sidst i elementet
function append(node, text, ele) {
  var node = document.createElement(node);
  var textnode = document.createTextNode(text);
  node.appendChild(textnode);
  document.querySelector(ele).appendChild(node);
}
append("LI", "Last", "ul");

//////////////////////////////////////////////////////
///////////////////// .prepend() /////////////////////
//////////////////////////////////////////////////////

// færst i elementet
function prepend(node, text, ele) {
  var node = document.createElement(node);
  var textnode = document.createTextNode(text);
  node.appendChild(textnode);

  var x = find(ele);
  x.insertBefore(node, x.childNodes[0]);
}
prepend("LI", "First", "ul");

//////////////////////////////////////////////////////
////////////////////// .remove() /////////////////////
//////////////////////////////////////////////////////

// remove
function remove(ele) {
  var x = find(ele);
  x.remove();
}
remove("li#d");

//////////////////////////////////////////////////////
/////////////////////// .each() //////////////////////
//////////////////////////////////////////////////////

// each
function each(array, func) {
  var a = array;

  a.forEach(function(x) {
    func(x);
  });
}

function logSomething(string) {
  console.log(string);
}

function consoleLog() {
  console.log("Det virker");
}

each(["a", "b", "c"], logSomething);

//////////////////////////////////////////////////////
////////////////////// .parent() /////////////////////
//////////////////////////////////////////////////////

// parent
function parent(ele) {
  var x = find(ele);
  //console.log(x.parentElement);
}
parent("li#aID");

//////////////////////////////////////////////////////
//////////////////// .children() /////////////////////
//////////////////////////////////////////////////////

// children
function children(ele) {
  var x = find(ele);
  var children = x.children;
  var arr = [].slice.call(children);
  //console.log(arr);
  return arr;
}
children("ul");

//////////////////////////////////////////////////////
//////////////////// .siblings() /////////////////////
//////////////////////////////////////////////////////

function parentChildren(ele) {
  var x = find(ele);
  var children = x.parentNode.children;
  var arr = [].slice.call(children);
  //console.log(arr);
  return arr;
}
parentChildren("li#aID");

// siblings
function siblings(ele) {
  var x = find(ele);
  var nodes = parentChildren(ele);

  nodes = nodes.filter(function val(node) {
    return node !== x;
  });

  //console.log(nodes);
}
siblings("li#aID");

//////////////////////////////////////////////////////
///////////////////// .addClass() ////////////////////
//////////////////////////////////////////////////////

function addClass1(ele, className) {
  var x = find(ele);
  x.className += className;
  //console.log(x.className);
}
addClass1("li.someClass", " otherClass1");

function addClass2(ele, className) {
  var x = find(ele);

  for (var i = 1; i < arguments.length; i++) { // before the loop; condition for running; after the loop
    className = arguments[i];
    x.classList.add(className);
  }
}
addClass2("li.someClass", "otherClass2", "otherClass3");

//////////////////////////////////////////////////////
/////////////////// .removeClass() ///////////////////
//////////////////////////////////////////////////////

function removeClass(ele, className) {
  var x = find(ele);

  for (var i = 1; i < arguments.length; i++) { // before the loop; condition for running; after the loop
    className = arguments[i];
    x.classList.remove(className);
  }
}
removeClass("li.removeClass", "removeClass1");

//////////////////////////////////////////////////////
/////////////////// .toggleClass() ///////////////////
//////////////////////////////////////////////////////

function toggleClass(ele, className) {
  var x = find(ele);

  for (var i = 1; i < arguments.length; i++) { // before the loop; condition for running; after the loop
    className = arguments[i];
    x.classList.toggle(className);
  }
}
toggleClass("li.someClass", "someClass");

//////////////////////////////////////////////////////
/////////////////////// .css() ///////////////////////
//////////////////////////////////////////////////////

// property på object når jeg har en streng
// javascript define parameter as property
// .style er kun til inline style attribute
function css(ele, prop, def) {
  var x = find(ele);
  var style = window.getComputedStyle(x) // method gives the values of all the CSS properties of an element

  if (def) {
    return x.style[prop] = def;
  }
  return style.getPropertyValue(prop);
}
css("h1", "font-size", "43px");
console.log(css("h1", "color", "green"));

//////////////////////////////////////////////////////
//////////////////////// .on() ///////////////////////
//////////////////////////////////////////////////////

function on(ele, handler, func) {
  var x = find(ele);

  return x.addEventListener(handler, func);
}
on("h1", "mouseenter", consoleLog);
console.log(on("h1", "mouseenter", consoleLog));

//////////////////////////////////////////////////////
/////////////////////// .off() ///////////////////////
//////////////////////////////////////////////////////

function off(ele, handler, func) {
  var x = find(ele);

  return x.removeEventListener(handler, func);
}
off("h1", "mouseenter", consoleLog);
console.log(off("h1", "mouseenter", consoleLog));

//////////////////////////////////////////////////////
/////////////////////// .one() ///////////////////////
//////////////////////////////////////////////////////


function one(ele, handler, func) {
  var x = find(ele);

  x.addEventListener(handler, oneFunc);

  // hoisting bliver læst først
  function oneFunc() {
    // remove event
    x.removeEventListener(handler, oneFunc);
    func();
  }
}
one("p", "click", consoleLog);

//////////////////////////////////////////////////////
///////////////////// .trigger() /////////////////////
//////////////////////////////////////////////////////


function runOnScroll(evt) {
  console.log("loleren");
};
window.addEventListener("scroll", runOnScroll);

function myFunction() {
  var w = window.outerWidth;
  var h = window.outerHeight;
  var txt = "Window size: width=" + w + ", height=" + h;
  document.getElementById("resize").innerHTML = txt;
}
on("body", "resize", myFunction);

// Execute all handlers and behaviors attached to the
// matched elements for the given event type.

// scroll, resize, mouse, keydown keyup

on("body", "scroll", consoleLog);

function trigger(ele, e) {
  let cb = find(ele); //element to click on
  let evt = new Event(e); // represents events that occur due to a mouse.

  // if then mouseevent

  cb.dispatchEvent(evt); // afsender event
}
trigger("body", "scroll");
// native
// custom events



//////////////////////////////////////////////////////
//////////////////////// .live ///////////////////////
//////////////////////////////////////////////////////


//////////////////////////////////////////////////////
////////////////////// .delegate /////////////////////
//////////////////////////////////////////////////////



/////////////////////// let, var, const ///////////////////////

// funfunfunction
// let er block scope (som if-statement)
// var er function scope
// const kan ikke overskrives

// minimize mutable state / minimere foranderlig tilstand

/////////////////////// .bind ///////////////////////

function bind() {
  let dog = {
    sound: "woof",
    talk: function() {
      console.log(this.sound)
    }
  }

  let button = document.getElementById("dog")

  button.addEventListener(
    "click",
    dog.talk.bind(dog)
    // bind it to dog because it doesn't know "this" (it goes to window)
  )
}
bind();

///////////////// => arrow functions ///////////////

// it is a shorter function syntax
// to make small inline single-purpose functions

function arrow() {
  const dragonEvents = [
    { type: "attack", value: 12, target: "player-dorkman" },
    { type: "eat", value: 40, target: "player-fluff" },
    { type: "kill", value: 100, target: "player-dorkman" },
    { type: "attack", value: 12, target: "player-kent" },
  ]
  const totalDamage = dragonEvents
    // 1. filter
    .filter(function(event) {
      return event.type === "attack"
    })
    // 2. filter
    .filter(event => event.target === "player-kent")

  console.log(totalDamage);
}
arrow();
