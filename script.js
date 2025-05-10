// Changing text content dynamically
document.getElementById("changeTextBtn").addEventListener("click", function() {
    let textElement = document.getElementById("text");
    textElement.textContent = "Text has been updated!";
});

// Modifying CSS styles via JavaScript
document.getElementById("modifyStyleBtn").addEventListener("click", function() {
    let headingElement = document.getElementById("heading");
    headingElement.style.color = "purple";
    headingElement.style.fontSize = "28px";
});

// Adding an element when a button is clicked
document.getElementById("addElementBtn").addEventListener("click", function() {
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a newly added paragraph!";
    document.body.appendChild(newParagraph);
});

// Removing an element when a button is clicked
document.getElementById("removeElementBtn").addEventListener("click", function() {
    let paragraphs = document.querySelectorAll("p");
    if (paragraphs.length > 1) { // Ensure at least one paragraph remains
        paragraphs[paragraphs.length - 1].remove();
    }
});
