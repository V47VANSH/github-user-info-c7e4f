# github-user-info-c7e4f

A simple web application to display GitHub user information with dynamic status updates. The app updates the user page by adding a status element that informs users about the progress and result of the API request.

---

## Features

- **Displays GitHub user information** by fetching data from the GitHub API.
- **Status indicator** (`#api-status`):
  - Shows `Loading...` while fetching data.
  - Clears the status if the user is found.
  - Displays `User not found` if the user does not exist or the fetch fails.

---

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/github-user-info-c7e4f.git
   cd github-user-info-c7e4f
   ```

2. **Open the application**
   - Open `index.html` in your preferred web browser.

   > **Note:** No build steps or dependencies are required—this is a purely frontend app.

---

## Usage Guide

1. **Enter a GitHub username** in the provided input field (if available).
2. **Submit** the form or trigger the fetch action.
3. The application will:
   - Display `Loading...` in the status area.
   - Show user information if the user exists.
   - Display `User not found` in the status area if the username is invalid or does not exist.

---

## Technical Details

- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **GitHub API:** [https://api.github.com/users/{username}](https://api.github.com/users/{username})
- **Status Element:** An HTML element with `id="api-status"` is used for status updates.
- **Error Handling:** Gracefully handles non-existent users or network errors with clear status messages.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to contribute or open issues for suggestions and improvements!