document.addEventListener("DOMContentLoaded", function () {
  // Get the body element
  var body = document.body;

  // Set the background color using style property
  body.style.backgroundColor = "green"; // Replace with your desired color
  body.style.color = "orange"
  // Get the div with id 'content'
  var contentDiv = document.getElementById("content");

  // Create a new paragraph element
  var paragraph = document.createElement("p");

  // Set the text content of the paragraph
  paragraph.textContent = "Hello, this content is added dynamically using JavaScript.";

  // Append the paragraph to the content div
  contentDiv.appendChild(paragraph);

  // Create a heading element
  var heading = document.createElement("h2");
  heading.textContent = "Dynamic Content Example";

  // Append the heading to the content div
  contentDiv.appendChild(heading);

  // Create an unordered list element
  var unorderedList = document.createElement("ul");

  // Create list items and add them to the unordered list
  var listItem1 = document.createElement("li");
  listItem1.textContent = "Item 1";

  var listItem2 = document.createElement("li");
  listItem2.textContent = "Item 2";

  var listItem3 = document.createElement("li");
  listItem3.textContent = "Item 3";

  unorderedList.appendChild(listItem1);
  unorderedList.appendChild(listItem2);
  unorderedList.appendChild(listItem3);

  // Append the unordered list to the content div
  contentDiv.appendChild(unorderedList);

  // Create a button element
  var button = document.createElement("button");
  button.textContent = "Click me";

  // Add an event listener to the button
  button.addEventListener("click", function () {
      alert("Button clicked!");
  });

  // Append the button to the content div
  contentDiv.appendChild(button);
});


myUl = document.querySelector("ul");

// Get the second list item
item2 = myUl.children[1];

// Remove the second list item
myUl.removeChild(item2);