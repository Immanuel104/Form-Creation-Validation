async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch user data from the API
        const response = await fetch(apiUrl);
        
        // Convert the response to JSON
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create an unordered list element
        const userList = document.createElement('ul');

        // Loop through each user and create a list item
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the user list to the container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Clear the loading message and display an error
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Fetch user data when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
