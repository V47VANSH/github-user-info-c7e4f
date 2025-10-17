// Wait for the DOM to load
// This script manages the GitHub user fetch and status display

document.addEventListener('DOMContentLoaded', () => {
    const fetchBtn = document.getElementById('fetch-btn');
    const usernameInput = document.getElementById('username-input');
    const creationDateElem = document.getElementById('creation-date');
    const apiStatusElem = document.getElementById('api-status');

    // Helper: Clear result and status area
    function clearResultsAndStatus() {
        creationDateElem.textContent = '';
        apiStatusElem.textContent = '';
    }

    // Fetch user data and update UI according to requirements
    async function handleFetch() {
        const username = usernameInput.value.trim();
        clearResultsAndStatus();
        if (username === '') {
            creationDateElem.textContent = 'N/A';
            apiStatusElem.textContent = '';
            return;
        }
        apiStatusElem.textContent = 'Loading...';
        creationDateElem.textContent = '';
        try {
            const res = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`);
            if (!res.ok) {
                // For any error (including 404), show 'User not found'
                apiStatusElem.textContent = 'User not found';
                creationDateElem.textContent = 'N/A';
                return;
            }
            const data = await res.json();
            if (data.created_at) {
                apiStatusElem.textContent = '';
                // Only show YYYY-MM-DD
                creationDateElem.textContent = data.created_at.substring(0, 10);
            } else {
                // In case of missing data, treat as not found
                apiStatusElem.textContent = 'User not found';
                creationDateElem.textContent = 'N/A';
            }
        } catch (e) {
            apiStatusElem.textContent = 'User not found';
            creationDateElem.textContent = 'N/A';
        }
    }

    fetchBtn.addEventListener('click', handleFetch);
});
