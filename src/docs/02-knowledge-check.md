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

## Feature 3 : Shared Layout with Sticky Navbar

### Question 1

**Why did you create a MainLayout?**

### Answer 
To avoid repeating the Navbar across multiple pages. The layout provides a shared structure for all public routes.

---

### Question 02

**What is <Outlet />?**

### Answer

<Outlet /> is a placeholder from react-router-dom where the matched child route is rendered.

---

### Question 3

**Why not import Navbar into every page?**

### Answer

That would duplicate code. A shared layout is easier to maintain because the Navbar is written only once.

---

### Question 4

**Why are Login and Signup outside MainLayout?**

### Answer

They use a different layout. Authentication pages usually don't need the public navigation, so keeping them outside provides a cleaner user experience.

------------------------------------------------------------------------------------------------------------------------

## Feature 4 : Hero Section

### Question 1

**What is import?**

### Answer

import is a JavaScript keyword used to bring code from another file or package into the current file.

---

### Question 2

**What is children?**

### Answer

children is a special prop provided by React. Anything written between the opening and closing tags automatically becomes children.

--- 

### Question 3

**What is a Template Literal?**

### Answer

Anything inside `` (backticks) can combine multiple values into one string.

--- 

### Question 4

**What is a Reusable Component?**

### Answer

A reusable component is a component that is written once and can be used many times in different parts of the application.
Example:
Instead of creating a new button every time, we create one Button component and reuse it wherever we need a button.

--- 

### Question 5

**Why do companies use reusable components?**

### Answer 

Consistency: Every button looks and behaves the same.
Maintainability: Design changes are made in one file.
Reusability: The same component can be used across many pages.
Cleaner code: No repeated Tailwind classes everywhere.
Scalability: As the application grows, the UI remains organized.

---

### Question 5

**What are props in React?**

### Answer 

Props (Properties) are read-only data passed from a parent component to a child component. They allow components to become dynamic and reusable by changing their behavior or appearance without modifying the component itself.

------------------------------------------------------------------------------------------------------------------------

## Feature 4 : Dashboard Preview

### Question 1 

**Q. Why do we use .map() in React instead of writing multiple <div> elements manually?**

### Answer 

We use .map() to dynamically render repeated UI from an array of data. It keeps the code cleaner, avoids duplication, makes the component scalable, and allows the UI to update automatically when the underlying data changes.

---

### Question 2

**Why did you store the stats and jobs in arrays instead of hardcoding the JSX?**

### Answer 

The id is used as the key prop when rendering lists. React uses keys to uniquely identify items so it can efficiently update only the elements that change.

---

### Question 3

**Why does every object have an id?**

### Answer:

The id is used as the key prop when rendering lists. React uses keys to uniquely identify items so it can efficiently update only the elements that change.

---

### Question 4 

**Why did you use .map()?**

### Answer

.map() transforms each object in an array into a JSX element. It lets us render repeated UI from data instead of writing duplicate markup.

--- 

### Question 5

**Why are bgColor and textColor stored in the job objects?**

### Answer

Each job carries its own badge styling, making the UI data-driven. The component reads those values and applies the correct Tailwind classes, so adding new statuses requires only updating the data rather than changing the JSX.

------------------------------------------------------------------------------------------------------------------------
