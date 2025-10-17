# github-user-info-c7e4f

A simple web application that displays GitHub user information, enhanced with real-time status updates for API requests. The app improves user experience by showing loading and error indicators during data fetching.

---

## Features

- **User Lookup:** Enter a GitHub username to fetch and display user details.
- **API Status Indicator:**  
  - Shows `Loading...` while fetching data.
  - Clears the status on successful fetch.
  - Displays `User not found` if the user does not exist or fetch fails.
- **Responsive UI:** Clean, minimal interface for quick interactions.

---

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/github-user-info-c7e4f.git
   ```
2. **Navigate to the project folder:**
   ```bash
   cd github-user-info-c7e4f
   ```
3. **Open `index.html` in your browser**  
   No build or install steps required—this is a pure frontend web app.

---

## Usage Guide

1. Open `index.html` in your preferred web browser.
2. Enter a valid GitHub username in the input field.
3. Click the "Search" button (or similar UI control).
4. Observe the **Status Element** (`#api-status`):
    - Displays `Loading...` while fetching.
    - Clears on success, showing the user info.
    - Shows `User not found` on error or if the username does not exist.

---

## Technical Details

- **Frontend:** HTML, CSS, and JavaScript (vanilla)
- **API:** [GitHub Users API](https://api.github.com/users/{username})
- **Status Element:**  
  - HTML element with `id="api-status"`  
  - Dynamically updated via JavaScript to reflect API fetch state.
- **Error Handling:**  
  - Catches network errors and invalid usernames.
  - Updates the status element accordingly.

---

## License

MIT License

---

**Feel free to contribute or customize. For any issues, please open an issue or submit a pull request.**