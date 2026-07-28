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