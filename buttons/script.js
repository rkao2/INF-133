// Function to display an alert when a link is clicked
function showAlert(message) {
    alert(message);
}

// Add event listeners to each link to trigger the alert
document.getElementById('homeLink').addEventListener('click', function(event) {
    showAlert('Welcome to the Home page!');
});

document.getElementById('aboutLink').addEventListener('click', function(event) {
    showAlert('Learn more About Me!');
});

document.getElementById('projectsLink').addEventListener('click', function(event) {
    showAlert('Explore my Projects!');
});

document.getElementById('contactLink').addEventListener('click', function(event) {
    showAlert('Feel free to Contact me!');
});
