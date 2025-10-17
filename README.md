# github-user-info-c7e4f

## Brief Description
A simple web application that allows users to input a GitHub username and retrieve the account's creation date. When users enter a username and click the "Fetch" button, the app fetches data from the GitHub API and displays the account creation date on the page.

---

## Features
- Input field to enter a GitHub username (`#username-input`)
- "Fetch" button (`#fetch-btn`) to trigger data retrieval
- Fetches user data from GitHub API (`https://api.github.com/users/{username}`)
- Displays the account creation date (`#creation-date`)
- Basic error handling for invalid usernames or failed requests

---

## Setup Instructions
This project is a static web page that requires no special setup or dependencies.

1. Clone or download the project files.
2. Open the `index.html` file in your preferred web browser.

---

## Usage Guide
1. Enter a GitHub username into the input field with the ID `#username-input`.
2. Click the "Fetch" button with the ID `#fetch-btn`.
3. The page will fetch the user data from GitHub API.
4. The GitHub account's creation date will be displayed in the element with ID `#creation-date`.
5. If the username is invalid or the fetch fails, an error message will be shown in the console or on the page.

---

## Technical Details
- The app is built with plain HTML, CSS, and JavaScript.
- Uses the `fetch` API to retrieve data from GitHub.
- Minimal DOM manipulation to update the display.
- Error handling for network errors and invalid usernames.

---

## License
This project is licensed under the MIT License. See the [`LICENSE`](LICENSE) file for details.

---

Feel free to customize and extend this project as needed!