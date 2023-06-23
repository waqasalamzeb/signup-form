function Submit(){



// const username = document.getElementById("username").value
const email = document.getElementById("email").value
const password = document.getElementById("password").value
const allUsers = JSON.parse(localStorage.getItem("users"))
let foundUser = false;



if (!allUsers) {
    const users = [];
    users.push({  email, password })
    localStorage.setItem("users", JSON.stringify(users))
} else {
    //use find loop for better approach
    for (i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email == email && password==password) {
            foundUser = true;
            window.location.href="https://waqasalamzeb.github.io/loginform/"
        }
    }

    if (foundUser) {
        Swal.fire({
            icon: 'error',
            title: 'Credentials Error',
            text: 'Email Already Exist!',
        })
    } else {
        allUsers.push({  email, password })
        localStorage.setItem("users", JSON.stringify(allUsers))
        console.log("data saved")
    }
}
}

