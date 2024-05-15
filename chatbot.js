function talk() {
    var know = {
        "who are you": "Hello, EduCare is here ",
        "how are you": "I am Good, How can I help you ",
        "ok": "Thank You So Much ",
        "Bye": "Okay! Will meet soon.."
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    } else {
        document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
}