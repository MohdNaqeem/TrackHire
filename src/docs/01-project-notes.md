# Project Notes

---

## Feature 1 : Project Structure

### App.jsx

- App.jsx is the root component of the application.
- React starts rendering from App.jsx.
- App.jsx should stay clean.
- Future routing will be handled here.

---

### Home.jsx

- Home.jsx represents the landing page.
- Navbar, Hero, Footer will be placed inside Home.jsx.
- Keeps App.jsx clean.

---

### Import

```jsx
import Home from "./pages/Home/Home";
```

- `import` allows components to be reused.
- React cannot use Home unless it is imported.

---

### React Fragment

```jsx
<>
</>
```

- Groups multiple JSX elements.
- Does not create an extra HTML element.
- Keeps the DOM cleaner.

---

### Architecture

```text
Browser
    ↓
main.jsx
    ↓
App.jsx
    ↓
Home.jsx
    ↓
Navbar.jsx
```