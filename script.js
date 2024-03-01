document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var data = {
        username: username,
        password: password
    };

    fetch('http://localhost:3001/login', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        console.log(data); 
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
});