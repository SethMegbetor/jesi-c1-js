let body = document.body;

// add bg color
body.style.backgroundColor = "orange";
// text color
body.style.color = "black";

let divContent = document.getElementById("content");

let paragraph = document.createElement("p");
paragraph.textContent =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad aliquam architecto assumenda culpa similique aspernatur cumque totam quidem ipsa alias!";

divContent.appendChild(paragraph);

let heading = document.createElement("h1");
heading.textContent = "This is my heading";

divContent.appendChild(heading);

let myUl = document.createElement("ul");

let item1 = document.createElement("li");
item1.textContent = "Item 1";

let item2 = document.createElement("li");
item2.textContent = "Item 2";

let item3 = document.createElement("li");
item3.textContent = "Item 3";

myUl.appendChild(item1);
myUl.appendChild(item2);
myUl.appendChild(item3);

divContent.appendChild(myUl);

let button = document.createElement("button");
button.textContent = "Click Me";

// add an event listener
button.addEventListener("click", function () {
  alert("Button Clicked");
});

divContent.appendChild(button);

myUl = document.querySelector("ul");
item2 = myUl.children[1];
myUl.removeChild(item2);
