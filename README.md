# github-user-info-c7e4f

A simple web application that displays GitHub user information with real-time status feedback. The page features an API status indicator that informs users when data is loading, successfully fetched, or if the user is not found.

---

## Features

- **Status Indicator:**  
  Displays API request status in a dedicated element (`#api-status`):
  - Shows `Loading...` while fetching data.
  - Clears the message on success.
  - Displays `User not found` if the user does not exist or fetch fails.
- **GitHub User Lookup:**  
  Retrieves and displays public information for a specified GitHub username.
- **Responsive UI:**  
  Provides instant visual feedback for a better user experience.

---

## Setup Instructions

1. **Clone the Repository**
    ```bash
    git clone https://github.com/your-username/github-user-info-c7e4f.git
    cd github-user-info-c7e4f
    ```

2. **Install Dependencies**  
    This project uses only HTML, CSS, and JavaScript and does **not** require any package installations.

3. **Run the Application**  
    Open `index.html` directly in your web browser:
    ```bash
    open index.html
    ```
    Or use a local server (recommended for some browsers):
    ```bash
    npx serve .
    ```

---

## Usage Guide

1. **Enter GitHub Username:**  
   Input a GitHub username in the provided field.

2. **View Status:**  
   - The status element (`#api-status`) will show:
     - `Loading...` during the fetch.
     - Empty if fetch is successful.
     - `User not found` if the user does not exist.

3. **See User Info:**  
   The user’s public GitHub details (e.g., avatar, name, bio) will be displayed upon successful fetch.

---

## Technical Details

- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **API:** [GitHub Users API](https://api.github.com/users/{username})
- **Status Element:**  
  - DOM element with `id="api-status"`
  - Status managed via JavaScript:
    - Set to `Loading...` before fetch
    - Cleared on success
    - Set to `User not found` on error (e.g., 404 response)
- **Error Handling:**  
  Gracefully handles network errors and non-existent users.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

**Feel free to contribute or suggest improvements!**