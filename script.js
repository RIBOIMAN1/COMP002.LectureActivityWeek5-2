window.onload = function() {
    var button = document.getElementById("ExampleButton");
    var buttonClickHandler = function() {
        alert("Hello World!");
        button.removeEventListener("click", buttonClickHandler);
    };
    button.addEventListener("click", buttonClickHandler);
} // Contains an event listener, displaying an alert for only one click
window.onload = function() {
    var button = document.getElementById("ExampleButton");
    var buttonClickHandler = function() {
        alert("Hello World!");
        button.removeEventListener("click", buttonClickHandler);
    };
    button.addEventListener("click", buttonClickHandler);

    var link = document.getElementById("exampleLink");
    link.addEventListener("click", function(event) {
        event.preventDefault();
        alert("No distractions! I’m coding!");
    });
} // Contains event listeners that make sure there is an alert whenever you click the link