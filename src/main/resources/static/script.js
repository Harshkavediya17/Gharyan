const container = document.getElementById('container');

const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');


// ===============================
// SWITCH TO REGISTER
// ===============================

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});


// ===============================
// SWITCH TO LOGIN
// ===============================

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


// ===============================
// REGISTER
// ===============================

registerForm.addEventListener('submit', async (event) => {

    event.preventDefault();

    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const area = document.getElementById('registerArea').value;

    try {

        const response = await fetch('/api/auth/register', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                area : area
            })

        });

        const data = await response.json();

        if (response.ok) {

            alert("Registration successful!");

            console.log(data);

            registerForm.reset();

            // Move to login screen
            container.classList.remove("active");

        } else {

            alert(data.message || "Registration failed.");

        }

    } catch (error) {

        console.error(error);

        alert("Unable to connect to the server.");

    }

});


// ===============================
// LOGIN
// ===============================

loginForm.addEventListener('submit', async (event) => {

    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {

        const response = await fetch('/api/auth/login', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                email: email,
                password: password
            })

        });

        const data = await response.json();

        if (response.ok) {

            alert("Login successful!");

            console.log(data);

            loginForm.reset();
            window.location.href = "/home.html";

        } else {

            alert(data.message || "Invalid email or password.");

        }

    } catch (error) {

        console.error(error);

        alert("Unable to connect to the server.");

    }

});