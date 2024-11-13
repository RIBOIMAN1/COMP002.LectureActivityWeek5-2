window.onload = function() {
    var button = document.getElementById("ExampleButton");
    var buttonClickHandler = function() {
        alert("Hello World!");
        button.removeEventListener("click", buttonClickHandler);
    };
    button.addEventListener("click", buttonClickHandler);
} // Contains an event listener, displaying an alert for only one click