// console.log(window.document);
// console.dir(document);
// console.log(document.body);
// console.log(document.links[0]);
// document.write("Working with the dom")

// console.log(document.getElementById("main"));

// document.getElementById("main").innerHTML =
//   "<h3>New text added to document</h3>";

// console.log(document.scripts[0]);

// for getElementById()
let myTitle = document.getElementById("new-section");
console.log(myTitle);

myTitle.textContent = "shopping list";
myTitle.innerText = "My shopping list";
myTitle.innerHTML = "<strong>My shopping list</strong>";

// add css
myTitle.style.color = "blue"
myTitle.style.backgroundColor = "green"
myTitle.style.padding = "20px"
myTitle.style.borderRadius = "8px"

// for getElementsByClassName()
let jsName = document.getElementsByClassName("new-name")[0]

console.log(jsName);

jsName.style.color = "blue"
jsName.style.backgroundColor = "orange"
jsName.style.padding = "20px"
jsName.style.borderRadius = "8px"

// by tag name
let myhtmltag = document.getElementsByTagName("p")
console.log(myhtmltag)


// by querySelector
//using class
let myClassHeading = document.querySelector(".heading")

// by using tag
let myTagName = document.querySelector("h1")

// by id
let myIdName = document.querySelector("#new-section")

// pseudo class
let forPseudo = document.querySelector("li:first-child")
let forPseudoAsWell = document.querySelector('input[type="text"]')
