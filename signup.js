document.getElementById("submit").addEventListener("click", function() {
    username = document.getElementById('username').value
    email = document.getElementById('email').value
    mobile = document.getElementById('mobile').value
    dob = document.getElementById('dob').value
    bio = document.getElementById('bio').value
    password = document.getElementById('password').value

    localStorage.setItem('username', username)
    localStorage.setItem('email', email)
    localStorage.setItem('mobile',mobile)
    localStorage.setItem('dob', dob)
    localStorage.setItem('bio', bio)
    localStorage.setItem('password', password)
});