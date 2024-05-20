username_ls = localStorage.getItem("username");
email_ls = localStorage.getItem("email");
mobile_ls = localStorage.getItem("mobile")
dob_ls = localStorage.getItem("dob");
bio_ls = localStorage.getItem("bio");
password_ls = localStorage.getItem("password");

username = document.getElementById("username");
email = document.getElementById("email");
mobile = document.getElementById('mobile');
dob = document.getElementById("dob");
bio = document.getElementById("bio");
password = document.getElementById("password");

username.setAttribute("disabled", true);
email.setAttribute("disabled", true);
mobile.setAttribute("disabled", true);
dob.setAttribute("disabled", true);
bio.setAttribute("disabled", true);
password.setAttribute("disabled", true);


username.value = username_ls;
email.value = email_ls;
mobile.value = mobile_ls;
dob.value = dob_ls;
bio.value = bio_ls;
password.value = password_ls;

document.getElementById("edit").addEventListener("click", function () {
    username.removeAttribute("disabled");
    email.removeAttribute("disabled");
    mobile.removeAttribute("disabled");
    dob.removeAttribute("disabled");
    bio.removeAttribute("disabled");
    password.removeAttribute("disabled");
});

document.getElementById("update").addEventListener("click", function () {

    username.setAttribute("disabled", true);
    email.setAttribute("disabled", true);
    mobile.setAttribute("disabled", true);
    dob.setAttribute("disabled", true);
    bio.setAttribute("disabled", true);
    password.setAttribute("disabled", true);

    username = document.getElementById("username").value;
    email = document.getElementById("email").value;
    mobile = document.getElementById('mobile').value
    dob = document.getElementById("dob").value;
    bio = document.getElementById("bio").value;
    password = document.getElementById("password").value;

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("mobile", mobile)
    localStorage.setItem("dob", dob);
    localStorage.setItem("bio", bio);
    localStorage.setItem("password", password);
});

document.getElementById("delete").addEventListener("click", function () {
    localStorage.clear();
    window.location = "./welcome_page.html";
});