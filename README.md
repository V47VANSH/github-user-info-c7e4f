```markdown
# github-user-info-c7e4f

## Project Description
`github-user-info-c7e4f` is a simple web application that updates a GitHub user information page by adding a status element to indicate the loading state of the GitHub API fetch operation. The status element provides real-time feedback to users during the fetching process, improving user experience by clearly communicating the API call status.

## Features
- Displays a status element with the ID `#api-status` on the GitHub user page.
- Shows **Loading...** text while fetching user data from the GitHub API.
- Clears the status element if the fetch is successful.
- Displays **User not found** if the fetch fails (e.g., for a non-existent GitHub user).
- Simple, clear UI feedback for asynchronous API operations.

## Setup Instructions
No special setup is required. This project is a client-side web application that runs in any modern web browser.

To run the project locally:
1. Clone or download the repository.
2. Open `index.html` (or the main HTML file) in your web browser.

If you need to serve it with a local server (optional):
```bash
# Using Python 3
python3 -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

## Usage Guide
1. Open the application in your browser.
2. Enter a GitHub username to fetch user information.
3. Observe the status element:
   - **Loading...** appears while the API request is in progress.
   - The status element clears upon successful fetch.
   - **User not found** displays if the fetch fails or the username does not exist.
4. User information is displayed accordingly (as per the existing page functionality).

## Technical Details
- Utilizes the GitHub REST API to fetch user data.
- Implements asynchronous API calls using `fetch` with proper error handling.
- The status element with id `#api-status` dynamically updates based on API call state:
  - Set to `"Loading..."` before the fetch request.
  - Cleared on successful response.
  - Set to `"User not found"` if the response indicates failure.
- Compatible with all modern browsers supporting ES6 and Fetch API.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```