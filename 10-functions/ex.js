function greetings() {
    console.log("Hello Everyone");
}

greetings();
greetings();

function showMessage(from, text = "Hello") {
    console.log(from + ":" + text);
}

showMessage("Abhi", null)
