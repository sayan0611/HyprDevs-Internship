const baseDiv = document.getElementById('container');
const loginDiv = document.getElementById('login');
const RegDiv = document.getElementById('Reg');
const userDetailsCard = document.querySelector('.parent-container');
const usernameInput = document.querySelector('#Reg .input-field input[type="text"]');
const passwordInput = document.querySelector('#Reg .input-field input[type="password"]');
const homeButton = document.querySelector('#Reg button');
const loginUsernameInput = document.querySelector('#login .input-field input[type="text"]');
const loginPasswordInput = document.querySelector('#login .input-field input[type="password"]');
const loginButton = document.querySelector('#login button');
const usernameDisplay = document.getElementById('username-display');
const passwordDisplay = document.getElementById('password-display');
const main = document.querySelector('#main');
const profilePicture = document.querySelector('.profile-picture img');

// Array to store multiple users
let users = [];

// Load users from local storage on page load
function loadUsersFromLocalStorage() {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
        users = JSON.parse(savedUsers);
    }
}

// Save users to local storage
function saveUsersToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}

function showLogin() {
    baseDiv.style.display = 'none';
    RegDiv.style.display = 'none';
    loginDiv.style.display = 'block';
    userDetailsCard.style.display = 'none';
}

function showRegister() {
    baseDiv.style.display = 'none';
    loginDiv.style.display = 'none';
    RegDiv.style.display = 'block';
    userDetailsCard.style.display = 'none';
}

function goHome() {
    baseDiv.style.display = 'block';
    RegDiv.style.display = 'none';
    loginDiv.style.display = 'none';
    userDetailsCard.style.display = 'none';
    main.style.display = 'block';
    document.body.style.display = 'block'; // Reset body display property
}

function showUserDetails(user) {
    userDetailsCard.style.display = 'block';
    baseDiv.style.display = 'none';
    RegDiv.style.display = 'none';
    loginDiv.style.display = 'none';
    main.style.display = 'none';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    usernameDisplay.textContent = user.username;
    passwordDisplay.textContent = user.password;
    profilePicture.src = user.url || 'https://via.placeholder.com/100';
}

function registration() {
    let usernamereg = usernameInput.value;
    let passwordreg = passwordInput.value;

    // Create a new user object
    let newUser = {
        username: usernamereg,
        password: passwordreg,
        url: 'https://via.placeholder.com/100' // Default URL for now
    };

    // Add the new user to the users array
    users.push(newUser);

    // Save the updated users array to local storage
    saveUsersToLocalStorage();
}

function login() {
    let usernamelogin = loginUsernameInput.value;
    let passwordlogin = loginPasswordInput.value;

    // Find user with matching username and password
    let user = users.find(user => user.username === usernamelogin && user.password === passwordlogin);

    if (user) {
        showUserDetails(user);
    } else {
        alert('Invalid username or password');
    }
}

homeButton.addEventListener('click', () => {
    registration();
    alert(`You have successfully registered as ${usernameInput.value}`);
    showLogin();
});

loginButton.addEventListener('click', () => {
    login();
});


loadUsersFromLocalStorage();
