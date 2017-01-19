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

function one(ele, handler, callback) {
  var x = find(ele);

  x.addEventListener(handler, off);
  //return on(x, handler, off(x, handler, consoleLog));

}
one("p", "click", consoleLog);

// bruge begge

/*
function testFn(event) {
  // remove event
  // The target event property returns the element that triggered the event.
  // The arguments.callee property contains the currently executing function.
  console.log(arguments);
  event.target.removeEventListener(event.type, testFn);
  // call handler
  // returns "function" with
  return callback(event);
}
*/

//////////////////////////////////////////////////////
///////////////////// .trigger() /////////////////////
//////////////////////////////////////////////////////


//////////////////////////////////////////////////////
//////////////////////// .live ///////////////////////
//////////////////////////////////////////////////////


//////////////////////////////////////////////////////
////////////////////// .delegate /////////////////////
//////////////////////////////////////////////////////
