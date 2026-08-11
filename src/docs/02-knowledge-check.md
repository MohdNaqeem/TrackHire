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

## Feature 5 : Features Card

### Question 1 

**Why did you create three separate files instead of writing everything in one file?**

### Answer 

I followed the Single Responsibility Principle. featuresData.js stores only the data, FeatureCard.jsx is a reusable component responsible for rendering a single feature card, and FeaturesSection.jsx is responsible for laying out the section and mapping the data to components. This separation makes the code easier to maintain, reuse, and scale. If I need to add a new feature later, I only update the data file without changing the UI logic or layout.

------------------------------------------------------------------------------------------------------------------------

## Feature 5 : About section

### Complete Responsibility

- Rendering the complete About section.
- Displaying the About heading and description.
- Rendering the list of highlights.
- Rendering all four About cards.
- Rendering the CTA button.

------------------------------------------------------------------------------------------------------------------------

## Feature 6 : Dashboard Sidebar



------------------------------------------------------------------------------------------------------------------------

## Feature 6 : Dashboard Header 

### Question 1

**If an interviewer asks: Why didn't you place Header inside Dashboard.jsx?**

### Answer 

Because the Header is shared by all authenticated pages. I placed it inside DashboardLayout so it renders once and wraps every dashboard page through React Router's Outlet. This avoids repeating the same code on every page and keeps the layout consistent.

---

### Question 2

**Why did you create a Header component?**

### Answer 

The Header contains functionality that's shared across all authenticated pages, such as search, notifications, and user information. Instead of repeating it on every page, I placed it inside the DashboardLayout so it renders once and all pages inherit it through React Router's Outlet.

---

### Question 3 

**Why did you create a StatCard component instead of writing four cards?**

### Answer 

All four cards share the same layout and differ only in their data. I created a reusable StatCard component and stored the content in a separate data file. This keeps the UI reusable, reduces duplication, and makes it easy to add or modify cards without changing the component.

---

### Question 4

**Why did you create dashboardStatsData.js?**

### Answer 

I separated the dashboard data from the UI. The component is responsible only for rendering, while the data file stores the content. This follows separation of concerns and makes the component reusable.

---

### Question 5

**Why did you create a reusable StatCard?**

### Answer 

All dashboard metrics share the same layout and only differ in their data, so I extracted the UI into a reusable StatCard component. The parent page maps over a data array and passes props to each card, reducing duplication and making it easy to add new metrics.

---

### Question 6

**Why did you only show three applications on the dashboard?**

### Answer 

The dashboard is designed to provide a quick overview rather than display complete datasets. I intentionally limited the section to the three most recent applications and provided a call-to-action to navigate to the dedicated Applications page, where users can search, filter, and manage all their applications.

--- 

### Question 7

**Why did you create a separate ApplicationRow component?**

### Answer 

Each application row shares the same layout and styling, so I extracted it into a reusable component. The parent table maps over the application data and passes each application's details as props. This avoids duplication and makes the UI easier to maintain and extend.

------------------------------------------------------------------------------------------------------------------------

## Feature 6 : Dashboard (week chart) and (Upcoming Interview)

### Question 1

**Why did you choose Recharts?**

### Answer

I chose Recharts because it's a React-first charting library with reusable components, responsive layouts, and good customization. It integrates naturally with React's component architecture and is commonly used for dashboards.

---

### Question 2

**Why didn't you define the data inside the chart component?**

### Answer

I separated the mock data from the presentation layer to follow the Single Responsibility Principle. The chart component focuses only on rendering the visualization, while the data source can later be replaced with an API without restructuring the component.

---

### Question 3

**How does Recharts know what to display?**

### Answer 

The BarChart receives an array of objects through its data prop. Each chart element uses a dataKey to identify which property from each object it should render. For example, XAxis uses the day property for labels, while Bar uses the applications property to determine the height of each bar.

------------------------------------------------------------------------------------------------------------------------

## Feature 6 : Application Header / Toolbar / pagination / update and delete button

### Question 1

**Why did you create ApplicationsHeader**

### Answer 

ApplicationsHeader is a reusable UI component responsible only for displaying the page heading and primary action. I kept it separate from Applications.jsx so the page component remains clean and only composes smaller reusable components.

---

### Question 2

**Why did you create a separate ApplicationsToolbar component?**

### Answer

The toolbar groups all controls that interact with the application list, such as search, filtering, and sorting. Separating it from the page keeps the page component focused on layout and makes the toolbar easier to extend or reuse.

---

### Question 3

**Why did you create a separate SearchBar component?**

### Answer 

Search is an independent UI control with its own responsibility. I separated it from the toolbar so it can evolve independently. Later it can manage its own state, debouncing, API calls, or validation without making the toolbar component complex.

--- 

### Question 4

**Why did you separate ApplicationsTable and ApplicationRow?**

### Answer 

**Why did you separate ApplicationsTable and ApplicationRow?**

The table is responsible for rendering the overall structure and iterating over the data, while each row is responsible for displaying a single application. Separating them keeps the code modular, makes rows reusable, and allows row-specific features like actions or inline editing without making the table component complex.

---

### Question 5

**Why did you create ApplicationRow.jsx**

### Answer

Each application has the same structure. Instead of repeating the markup for every row, I created a reusable ApplicationRow component. The table maps over the data and passes each application's information as props. This keeps the code modular and makes future updates easier.

---

### Question 6

**Why didn't you store the search state inside SearchBar?**

### Answer 

The search value is shared between the SearchBar and the ApplicationsTable. Since multiple components need access to the same state, I lifted it to their closest common parent, Applications.jsx. The SearchBar becomes a controlled component that receives its value and onChange handler through props.

---

### Question 7

**Explain the complete flow of your Applications page.**

### Answer 

The Applications page follows a parent-child architecture where Applications.jsx is the single source of truth. It stores the search term, selected status, and sort option using useState. The application data is processed inside useMemo, where I first create a copy of the original array, then apply search, status filtering, and sorting. I used useMemo so these calculations only run when the search term, status, or sort option changes. The processed data is stored in filteredApplications and passed to ApplicationsTable as props. The toolbar receives the state and setter functions and forwards them to the SearchBar, StatusFilter, and SortDropdown. When the user interacts with any of these controls, the state updates, React re-renders the component, useMemo recalculates the data if needed, and the table automatically displays the updated results. This keeps the page modular, reusable, and follows React's one-way data flow.

---

### Question 8

**Explain complete Pagination Flow**

### Answer

Pagination in my project is controlled by the parent Applications.jsx component. I store the active page in currentPage using useState and define how many records should appear per page with itemsPerPage. After applying search, status filtering, and sorting inside useMemo, I calculate the total number of pages using Math.ceil(). Based on the current page, I compute the start and end indexes and use slice() to extract only the records for that page. Those records are passed to ApplicationsTable, while pagination-related values such as the current page, total pages, and setter function are passed to the Pagination component. When the user clicks a page number or the Previous/Next buttons, setCurrentPage() updates the state, React re-renders the component, recalculates the slice, and the table displays the records for the selected page.

---

### Question 9

**Why did we keep the state in Applications.jsx instead of AddApplicationModal.jsx?**

### Answer

The modal doesn't decide when it should appear. The Applications page decides that. That's why I lifted the state to the parent component. The parent controls the modal's visibility and passes callback functions to child components. This follows React's one-way data flow and keeps the application easier to manage.

--- 

### Question 10 

**Explain how your delete functionality works.**

### Answer 

The Applications page owns the applications state. Each ApplicationRow receives an onDelete callback from the parent through ApplicationsTable. When the user clicks delete, the selected application is passed back to Applications.jsx and stored in deletingApplication. This state conditionally renders a DeleteApplicationModal. If the user confirms, confirmDelete uses filter() to create a new array excluding the selected application's ID, then updates the applications state. I also recalculate the total number of pages after deletion and make sure the current page doesn't point to a page that no longer exists. Finally, I clear deletingApplication to close the modal.

---

### Question 11

**How do you handle pagination when search or filter changes?**

### Answer 

Search, filter, and sort are controlled by handlers in ApplicationsToolbar. Each handler first updates the relevant state and then resets currentPage to 1. This prevents the user from staying on an invalid page when the filtered result set becomes smaller.

------------------------------------------------------------------------------------------------------------------------
## Feature 7 : Kanban page / drag and drop / Application modal on click

### Question 1

**How does the Kanban board separate applications into different columns?**

### Answer 

The Kanban board uses the `applications` state and JavaScript's `filter()` method to separate applications based on their `status`.

For example:
- `Applied` → applications where `status === "Applied"`
- `Interview` → applications where `status === "Interview"`
- `Offer` → applications where `status === "Offer"`
- `Rejected` → applications where `status === "Rejected"`

Each filtered array is then passed to a separate `KanbanColumn` component.

# Flow
applications data  
→ filter by status  
→ create status-specific arrays  
→ pass arrays to `KanbanColumn`  
→ render `KanbanCard`

--- 

### Question 2

**Why did we use `useState` for applications instead of directly using `applicationsData`?**

Initially, `applicationsData` was static mock data. After adding drag-and-drop, we needed the application status to change dynamically.

So we created: const [applications, setApplications] = useState(applicationsData);

---

### Question 3

**How does drag-and-drop work in our Kanban board?**

### Answer

KanbanColumn represents each status column such as Applied, Interview, Offer, and Rejected. It receives the applications belonging to that status and displays them as cards.

KanbanCard represents one individual application. We make the card draggable and store its application ID when dragging starts.

When the card is dropped into another column, the column gets the application ID and its own status. It then sends both values back to KanbanBoard.

So the responsibility is:
KanbanBoard → manages application state and status changes.
KanbanColumn → acts as the drop area and identifies the new status.
KanbanCard → represents and makes an application draggable.

---

### Question 4

**Why does the Kanban board automatically update after moving a card?**

### Answer

When a card is dropped into another column, we update the applications state using setApplications(). The application's status is changed from its old status to the new status.

Since the Kanban columns are created using filter() based on the application's status, changing the status changes which filtered array the application belongs to.

React detects the state change and re-renders the components.

---

### Question 5

**Why do we use selectedApplication state in KanbanBoard?**

### Answer 

We use selectedApplication to keep track of which Kanban card the user has clicked. Initially, its value is null, meaning no application is selected. When a card is clicked, the selected application's complete object is stored in this state This allows the KanbanBoard to control which application's details should be displayed in the modal.

---

### Question 6

**How does the selected application travel from KanbanCard to the modal?**

### Answer 

The application is passed through the component hierarchy using props.

The flow is:

KanbanBoard
    ↓
KanbanColumn
    ↓
KanbanCard

When the card is clicked, KanbanCard calls the click handler received from its parent and passes the application object. The function eventually reaches KanbanBoard, where selectedApplication is updated. Then KanbanBoard passes that selected application to ApplicationDetailsModal.

---

### Question 7

**How does conditional rendering control the modal?**

### Answer 

The modal is rendered only when selectedApplication has a value. The logic is:

selectedApplication = null
        ↓
Modal is hidden

selectedApplication = application object
        ↓
Modal is displayed

We use conditional rendering with selectedApplication &&. This means React renders the modal only when an application has been selected.

---

### Question 8

**How does closing the modal work?**

### Answer 

The modal receives an onClose function from KanbanBoard. When the user clicks the close button, this function sets:
selectedApplication = null
Since there is no longer a selected application, the conditional rendering becomes false and the modal disappears.
