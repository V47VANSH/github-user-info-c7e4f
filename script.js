// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const fetchBtn = document.getElementById('fetch-btn');
    const usernameInput = document.getElementById('username-input');
    const creationDateElem = document.getElementById('creation-date');

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
            return;
        }
        const userData = await fetchUserData(username);
        if (userData && userData.created_at) {
            // The created_at is in ISO 8601 format, e.g., '2011-01-25T18:44:24Z'
            // We need only the date part 'YYYY-MM-DD'
            const createdAt = userData.created_at;
            const datePart = createdAt.substring(0, 10);
            // Check if date matches '2011-01-25'
            if (datePart === '2011-01-25') {
                creationDateElem.textContent = datePart;
            } else {
                // If date does not match, still display the date
                creationDateElem.textContent = datePart;
            }
        } else {
            creationDateElem.textContent = 'N/A';
        }
    }

    // Attach event listener to button
    document.getElementById('fetch-btn').addEventListener('click', handleFetch);
});