// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const fetchBtn = document.getElementById('fetch-btn');
    const usernameInput = document.getElementById('username-input');
    const creationDateElem = document.getElementById('creation-date');
    const apiStatusElem = document.getElementById('api-status');

    // Function to fetch user data from GitHub API
    async function fetchUserData(username) {
        const url = `https://api.github.com/users/${encodeURIComponent(username)}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Fetch error:', error);
            return null;
        }
    }

    // Function to handle button click
    async function handleFetch() {
        const username = usernameInput.value.trim();
        if (username === '') {
            creationDateElem.textContent = 'N/A';
            apiStatusElem.textContent = '';
            return;
        }

        apiStatusElem.textContent = 'Loading...';
        creationDateElem.textContent = 'N/A';

        const userData = await fetchUserData(username);

        if (userData && userData.created_at) {
            // Fetch successful: clear status
            apiStatusElem.textContent = '';
            // The created_at is in ISO 8601 format, e.g., '2011-01-25T18:44:24Z'
            // We need only the date part 'YYYY-MM-DD'
            const createdAt = userData.created_at;
            const datePart = createdAt.substring(0, 10);
            creationDateElem.textContent = datePart;
        } else {
            // Fetch failed: show user not found
            apiStatusElem.textContent = 'User not found';
            creationDateElem.textContent = 'N/A';
        }
    }

    // Attach event listener to button
    fetchBtn.addEventListener('click', handleFetch);
});
