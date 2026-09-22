# SpendWise Dashboard Shell

## Project Description

SpendWise is a personal budget tracking web interface designed to help users view and organize their financial information in a clear dashboard layout.

This project builds on the original My Budget Tracker page by introducing a modern dashboard shell using **CSS Grid and Flexbox**. The dashboard includes a sidebar navigation menu, header section, financial category cards, an expense form, an expense table, budgeting tips, and an interactive help section.

The project focuses on creating a responsive and accessible user interface using **HTML5 and CSS3**, without JavaScript functionality at this stage.

---

# What I Built

## 1. Dashboard Layout

I created a complete dashboard structure for SpendWise.

The dashboard contains:

* Sidebar navigation menu
* Main content area
* Header section
* Financial category cards
* Add Expense section
* Expense table
* Interactive help section
* Budgeting Tips video section

The overall dashboard layout is created using **CSS Grid**.

The main layout uses two columns on larger screens:

* Sidebar
* Main content

This provides a clear separation between navigation and the main financial information.

---

# 2. Sidebar Navigation

I created a sidebar containing the SpendWise branding and navigation links.

The navigation includes:

* Dashboard
* Expenses
* Budget
* Reports
* Settings

The sidebar uses **Flexbox** to arrange the navigation items vertically.

Each navigation item includes spacing, padding, rounded corners, and hover effects to create a modern dashboard experience.

The sidebar also changes its layout on smaller screens so that the navigation can fit within a single-column mobile layout.

---

# 3. Dashboard Header

The dashboard includes a header containing:

* SpendWise welcome message
* Short description
* Budget tracker image

The header content uses **Flexbox** to position the text and image neatly beside each other on larger screens.

The layout automatically changes on smaller screens so that the content is stacked vertically.

The header also uses:

* Padding
* Border
* Border-radius
* Box-shadow
* Responsive image sizing

These styles create a clean dashboard card appearance.

---

# 4. Financial Category Cards

I added six financial category cards containing realistic static financial information.

The categories are:

* Food
* Transport
* Rent
* Entertainment
* Savings
* Utilities

Each card displays:

* Category name
* Percentage of the budget
* Amount
* Progress indicator

For example, the Food card displays a sample amount of **KSh 12,500**.

The cards are arranged using **CSS Grid**.

Each individual card uses **Flexbox** internally to organize its content.

This satisfies the requirement to use:

* CSS Grid for the overall dashboard/card arrangement
* Flexbox inside individual dashboard components

---

# 5. CSS Grid

CSS Grid is used as one of the main layout technologies in the project.

The dashboard uses Grid to create the main page structure:

```css
.dashboard {
    display: grid;
    grid-template-columns: 240px 1fr;
}
```

The category cards also use CSS Grid:

```css
.category-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

This allows the cards to be displayed in multiple columns on larger screens while remaining responsive on smaller devices.

No absolute positioning is used for the dashboard layout.

---

# 6. Flexbox

Flexbox is used inside different parts of the dashboard.

Examples include:

* Header content
* Sidebar navigation
* Dashboard card content
* Card headings
* Tracker introduction section
* Section headings

For example, the header uses:

```css
.header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
```

This allows the header text and image to be positioned neatly within the available space.

The navigation menu also uses Flexbox to organize its items.

---

# 7. CSS Custom Properties

I created a reusable design system using CSS custom properties inside the `:root` selector.

The main variables include:

```css
:root {
    --brand-color: #173f5f;
    --accent-color: #4caf50;
    --surface-color: #ffffff;
    --background-color: #eef3f7;
    --primary-text: #263238;
    --secondary-text: #607d8b;
}
```

These variables allow the same colors to be reused throughout the project.

Other variables are also used for:

* Borders
* Input backgrounds
* Hover backgrounds
* Shadows

Using CSS variables makes the stylesheet easier to maintain and update.

---

# 8. Consistent Color Palette

I used a consistent color palette throughout the dashboard.

The main colors include:

* **Brand Color** – deep blue used for branding, headings, and navigation
* **Accent Color** – green used for buttons, focus states, and highlights
* **Surface Color** – white used for cards and content sections
* **Background Color** – light blue-gray used for the main page background
* **Primary Text** – dark text for important information
* **Secondary Text** – lighter text for supporting information

The colors are controlled using CSS custom properties instead of repeatedly writing individual color values.

This creates a consistent visual identity for SpendWise.

---

# 9. Card Micro-Interactions

I added subtle interactive effects to the dashboard category cards.

When the user moves the mouse over a card, the card:

* Moves slightly upward
* Receives a stronger box-shadow

The cards also have keyboard focus styling.

The transition duration is **0.2 seconds (200ms)**, which keeps the animation subtle and satisfies the requirement that interactions remain below 250ms.

Example:

```css
.category-card:hover,
.category-card:focus {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(23, 63, 95, 0.15);
}
```

The cards also use:

```html
tabindex="0"
```

This allows users to reach the cards using the keyboard.

---

# 10. Responsive Design

The dashboard is designed to work on both large and small screens.

A media query is used below **768px**:

```css
@media (max-width: 768px) {
}
```

On smaller screens:

* The sidebar and main content become a single-column layout
* Navigation items can wrap
* Header content becomes vertically arranged
* The tracker introduction becomes vertically arranged
* Category cards display in one column
* Form controls use the available screen width
* Images remain responsive

This makes the dashboard easier to use on mobile devices.

The responsive layout can be tested using the browser's **Developer Tools Device Toolbar**.

---

# 11. Add Expense Form

I retained the original Add Expense form as part of the SpendWise dashboard.

The form includes:

* Expense Name
* Amount (KSh)
* Category
* Add Expense button

The category dropdown includes:

* Food
* Transport
* Rent
* Entertainment
* Other

The form currently contains static HTML only. JavaScript will be used in a future version to make the Add Expense button functional.

The form inputs include:

* Appropriate labels
* Unique IDs
* Padding
* Borders
* Rounded corners
* Focus states
* Responsive sizing

---

# 12. Expense Table

I retained the expense table to demonstrate how financial records can be displayed.

The table contains four columns:

* Name
* Amount (KSh)
* Category
* Date

It currently contains five sample expenses.

The table uses CSS styling including:

* Collapsed borders
* Cell padding
* Styled header row
* Alternating row backgrounds
* Hover effects
* Responsive horizontal scrolling

The table is placed inside a responsive container so that it can remain usable on smaller screens.

---

# 13. Multimedia Content

The project includes multimedia content to make the page more informative.

A budget-related image is displayed using the HTML `<img>` element.

The image includes:

* `src`
* `alt`
* Responsive sizing

I also embedded a budgeting tips video from YouTube using an `<iframe>`.

The video is placed inside its own styled dashboard section.

---

# 14. Interactive Help Section

I added a collapsible **"How to use this tracker"** section using the HTML:

```html
<details>
```

and:

```html
<summary>
```

Users can click the summary to show or hide the instructions.

This provides a simple interactive feature without requiring JavaScript.

---

# 15. Typography

The project uses Google Fonts to create a clear visual hierarchy.

### Poppins

Poppins is used for:

* Main headings
* Section headings
* Card headings
* Buttons
* Table headers
* Navigation elements

### Open Sans

Open Sans is used for:

* Body text
* Paragraphs
* Form labels
* Form inputs
* Supporting information

Using separate fonts for headings and body content helps distinguish important information from supporting text.

---

# 16. Accessibility and Keyboard Focus

Accessibility was considered when building the dashboard.

The project includes:

* Descriptive image `alt` text
* Labels for form controls
* Keyboard-accessible dashboard cards
* Visible focus states
* Clear color contrast
* Semantic HTML elements

The dashboard cards use `tabindex="0"` so keyboard users can focus on them.

The form inputs also have visible focus styling.

---

# 17. Optional Dark Theme

As a stretch feature, I added support for a dark theme using the user's system color preference.

The dark theme is implemented with:

```css
@media (prefers-color-scheme: dark) {
}
```

The dark theme works by overriding the existing CSS custom properties rather than creating a completely separate stylesheet.

This demonstrates how CSS variables can be used to create different visual themes efficiently.

---

# Technologies Used

* HTML5
* CSS3
* CSS Grid
* CSS Flexbox
* CSS Custom Properties
* CSS Media Queries
* Google Fonts
* YouTube iframe

No JavaScript is required for the current dashboard shell assignment.

---

# Project Files

```text
personal-budget-tracker/
│
├── index.html
├── style.css
└── README.md
```

---

# index.html

The `index.html` file contains the structure and content of the SpendWise dashboard.

It includes:

* Sidebar navigation
* Dashboard header
* Financial category cards
* Add Expense form
* Expense table
* Interactive help section
* Budgeting Tips video

Semantic HTML elements such as `<header>`, `<main>`, `<aside>`, `<nav>`, `<section>`, `<article>`, `<details>`, and `<summary>` are used to organize the page.

---

# style.css

The `style.css` file contains the complete visual design and responsive layout.

It includes:

* CSS custom properties
* CSS Grid
* Flexbox
* Responsive media queries
* Dashboard styling
* Sidebar styling
* Category card styling
* Hover and focus interactions
* Form styling
* Table styling
* Typography
* Color system
* Dark theme support
* Responsive layouts

---

# README.md

This file explains the purpose of the SpendWise project, the features that were built, the technologies used, the CSS techniques applied, and the project structure.

---

# Assignment Requirements Covered

The SpendWise Dashboard Shell addresses the main requirements of the assignment:

| Requirement             | Implementation                                           |
| ----------------------- | -------------------------------------------------------- |
| Dashboard layout        | Sidebar + main content area                              |
| CSS Grid                | Overall dashboard and category card layout               |
| Flexbox                 | Header, navigation, cards, and sections                  |
| Six category cards      | Food, Transport, Rent, Entertainment, Savings, Utilities |
| CSS custom properties   | Reusable design variables in `:root`                     |
| Responsive design       | Media query below 768px                                  |
| No absolute positioning | Layout created with Grid and Flexbox                     |
| Hover interaction       | Category card hover animation                            |
| Keyboard focus          | Focus styling and `tabindex="0"`                         |
| Animation duration      | 200ms transitions                                        |
| Dark theme              | `prefers-color-scheme: dark` variable overrides          |

---

# Future Improvements

The current project focuses on the dashboard interface and static financial information.

Future versions could add JavaScript functionality such as:

* Adding new expenses dynamically
* Calculating total expenses
* Calculating category totals
* Filtering expenses by category
* Editing and deleting expenses
* Date selection
* Budget alerts
* Interactive charts
* Local storage
* User authentication
* Database storage
* Backend API integration

These features can be added progressively as the project develops.

---

# Conclusion

The SpendWise Dashboard Shell demonstrates my understanding of modern CSS layout and responsive interface design.

This assignment helped me practice:

* Building a dashboard layout with CSS Grid
* Using Flexbox inside individual components
* Creating reusable CSS custom properties
* Designing financial category cards
* Creating responsive layouts
* Adding hover and keyboard focus interactions
* Applying consistent typography and colors
* Using semantic HTML
* Creating an optional dark theme with CSS variables
* Designing a user-friendly financial dashboard interface

The project provides a strong foundation for adding JavaScript functionality and backend features in future development stages.
