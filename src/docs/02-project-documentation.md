# Project Documentation

---

## Feature 1 : Project Structure

### Objective

The project follows a component-based architecture to improve scalability and maintainability.

---

### Responsibilities

#### App.jsx

- Root UI component.
- Controls application flow.
- Future routing entry point.

#### Home.jsx

- Represents the landing page.
- Groups all homepage sections.

---

### Component Hierarchy

```text
App
│
└── Home
    │
    ├── Navbar
    ├── Hero
    ├── Features
    └── Footer
```

---

### Benefits

- Clean architecture
- Easy maintenance
- Reusable components
- Better scalability