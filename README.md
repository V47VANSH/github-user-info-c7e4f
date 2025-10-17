# github-user-info-c7e4f

## Brief Description
A simple web application that allows users to input a GitHub username and fetch the account's creation date from the GitHub API. The creation date is then displayed on the page for easy viewing.

## Features
- Input field for entering a GitHub username (`#username-input`)
- "Fetch" button (`#fetch-btn`) to trigger the API request
- Fetches user data from `https://api.github.com/users/{username}`
- Displays the account creation date (`created_at`) in an element with the ID `#creation-date`
- Basic, user-friendly interface

## Setup Instructions
This project is a static web page and does not require any setup or dependencies.

To run the application:
1. Clone or download this repository.
2. Open the `index.html` file in your preferred web browser.

## Usage Guide
1. Enter a GitHub username into the input field (`#username-input`).
2. Click the "Fetch" button (`#fetch-btn`).
3. The application will retrieve the user data from GitHub's API.
4. The account's creation date will be displayed below or beside the input, in the element with ID `#creation-date`.

## Technical Details
- Uses vanilla JavaScript to handle user interactions and fetch data.
- Sends an HTTP GET request to `https://api.github.com/users/{username}`.
- Parses the JSON response to extract the `created_at` field.
- Updates the DOM to display the creation date.

## License
This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

*Enjoy exploring GitHub user data with this simple tool!*
