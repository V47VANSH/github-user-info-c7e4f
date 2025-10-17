# github-user-info-c7e4f

A simple web application to fetch and display the account creation date for any GitHub user. Enter a GitHub username, click a button, and instantly see when their account was created.

---

## Features

- **User-friendly interface:** Input field and button for easy interaction.
- **Live data fetch:** Retrieves user information directly from the [GitHub Users API](https://api.github.com/users).
- **Instant results:** Displays the user's account creation date.
- **Error handling:** Informs users of invalid usernames or fetch errors.

---

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/github-user-info-c7e4f.git
   cd github-user-info-c7e4f
   ```
2. **Open the app:**
   - Simply open `index.html` in your web browser.
   - No additional dependencies or build steps required.

---

## Usage Guide

1. In your browser, you will see an input field labeled **Username**.
2. Enter a GitHub username into the input field (`#username-input`).
3. Click the **Fetch User Info** button (`#fetch-btn`).
4. The account creation date will appear in the designated area (`#creation-date`).

**Example:**
```
Username: octocat   [Fetch User Info]
Created At: 2011-01-25T18:44:36Z
```

If the username does not exist, an error message will be displayed.

---

## Technical Details

- **Frontend:** HTML, CSS, JavaScript (Vanilla)
- **API Used:** [GitHub Users API](https://api.github.com/users/{username})
- **Key Elements:**
  - Input field: `#username-input`
  - Fetch button: `#fetch-btn`
  - Display area: `#creation-date`
- **Process:**
  1. User enters a username and clicks the button.
  2. A GET request is sent to `https://api.github.com/users/{username}`.
  3. On success, the user's `created_at` date is shown.
  4. On failure, an error message is shown.

---

## License

MIT License

---

Feel free to use, modify, and share this project under the terms of the MIT license. See [LICENSE](LICENSE) for details.