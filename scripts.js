let registeredEmail = '';
let registeredPassword = '';

// Register functionality
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form from submitting the traditional way

    // Store the registered credentials
    registeredEmail = document.getElementById('registerEmail').value;
    registeredPassword = document.getElementById('registerPassword').value;

    // Display success message
    document.getElementById('registerSuccess').textContent = 'Registered Successfully!';
    document.getElementById('registerSuccess').style.display = 'block';
});

// Login functionality
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent form from submitting the traditional way

    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Check if the credentials match the registered ones
    if (loginEmail === registeredEmail && loginPassword === registeredPassword) {
        document.getElementById('loginSuccess').textContent = 'Logged in Successfully!';
        document.getElementById('loginSuccess').style.display = 'block';
        document.getElementById('loginError').style.display = 'none';
    } else {
        document.getElementById('loginError').textContent = 'Incorrect credentials, please try again.';
        document.getElementById('loginError').style.display = 'block';
        document.getElementById('loginSuccess').style.display = 'none';
    }
});

// Attendance buttons functionality
document.getElementById('checkIn').addEventListener('click', function () {
    alert('Check-in Successful!');
});

document.getElementById('checkOut').addEventListener('click', function () {
    alert('Check-out Successful!');
});

// Navigation functionality
const sections = {
    hero: document.getElementById('hero'),
    register: document.getElementById('register'),
    login: document.getElementById('login'),
    dashboard: document.getElementById('dashboard')
};

document.getElementById('getStartedBtn').addEventListener('click', function() {
    showSection('login');
});

document.getElementById('homeTab').addEventListener('click', function() {
    showSection('hero');
});

document.getElementById('loginTab').addEventListener('click', function() {
    showSection('login');
});

document.getElementById('registerTab').addEventListener('click', function() {
    showSection('register');
});

document.getElementById('dashboardTab').addEventListener('click', function() {
    showSection('dashboard');
});

// Function to hide all sections and display the selected one
function showSection(section) {
    for (let key in sections) {
        sections[key].style.display = 'none';
    }
    sections[section].style.display = 'block';
}
