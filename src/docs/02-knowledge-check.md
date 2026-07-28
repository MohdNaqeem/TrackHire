# Interview Questions

---

## Feature 1 : Project Structure

### Question 1

**Why is App.jsx called the root component?**

### Answer

- React starts rendering from App.jsx.
- It controls which page or component should be displayed.
- Future routing will be managed here.

---

### Question 2

**Why do we create Home.jsx instead of writing everything inside App.jsx?**

### Answer

- Keeps App.jsx clean.
- Separates page-level components.
- Improves readability and maintenance.

---

### Question 3

**Why do we use React Fragment?**

### Answer

- React components must return a single parent element.
- Fragment groups multiple elements.
- It does not create an extra HTML element.

------------------------------------------------------------------------------------------------------------------------

## Feature 2 : React Router

### Question 1

**What is React Router and why did you use it in your project?**

### Answer

React Router is a library that enables client-side routing in React applications. It allows users to navigate between different pages without reloading the browser. I used it in my project to create separate pages such as Home, Features, Pricing, Login, and Signup while providing a smooth user experience.

---

### Question 2

**Why did you choose `react-router-dom` instead of using normal `<a>` tags?**

### Answer

Normal `<a>` tags perform a full page refresh because they send a new request to the server. `react-router-dom` enables client-side navigation, so only the required component is updated without reloading the entire page. This makes the application faster and preserves React state.

---

### Question 3

**Can you explain the difference between `BrowserRouter`, `Routes`, and `Route`?**

### Answer

- `BrowserRouter` enables routing for the entire application using the browser's History API.
- `Routes` is a container that holds all route definitions.
- `Route` maps a specific URL path to a React component.

---

### Question 4

**Why did you create a separate `AppRoutes.jsx` file instead of defining routes inside `App.jsx`?**

### Answer

I wanted to keep `App.jsx` clean and separate the routing logic from the application's UI. As the project grows, having all routes in a dedicated file improves readability, maintainability, and scalability.

---

### Question 5

**Why did you use `NavLink` instead of `Link` in the Navbar?**

### Answer

Both `Link` and `NavLink` allow navigation without refreshing the page. I chose `NavLink` because it can identify the currently active route, which makes it ideal for navigation menus where active links need to be highlighted.

---

### Question 6

**What is the purpose of the wildcard route (`path="*"`) in your project?**

### Answer

The wildcard route catches all undefined URLs and displays a custom 404 Not Found page. This prevents users from seeing a blank page or unexpected behavior when they enter an incorrect URL.

---

### Question 7

**How does routing work internally in your React application?**

### Answer

When a user clicks a navigation link, `NavLink` updates the browser URL. `BrowserRouter` detects the URL change, `Routes` checks which `Route` matches the current path, and React renders the corresponding component without reloading the page.

---

### Question 8

**How would you add a new page to this project?**

### Answer

I would create a new page component inside the `pages` folder, import it into `AppRoutes.jsx`, create a new `<Route>` for its URL, and add a new `NavLink` in the Navbar if the page should be accessible through the navigation menu.

------------------------------------------------------------------------------------------------------------------------