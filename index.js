// Add your code here
const baseURL = "http://localhost:3000/users";

function submitData(name, email) {
     return fetch(baseURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to submit data');
        }
        return response.json();
    })
    .then(data => {
        const id = data.id;
        document.body.innerHTML += `<p>New ID: ${id}</p>`;
        return id; // Return the new ID if needed for further processing
    })
    .catch(error => {
        // Append the error message to the DOM
        const errorMessage = document.createElement('div');
        errorMessage.textContent = error.message;
        document.body.appendChild(errorMessage);
    });
}