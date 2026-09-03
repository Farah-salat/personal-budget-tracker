# My Budget Tracker

# Project Description

My Budget Tracker is a simple HTML and CSS web page designed to help users keep track of their expenses. The page allows users to enter expense information, select an expense category, and view sample expenses in a table. It also includes multimedia content and an interactive help section.

# What I Built

# 1. Add Expense Form

I created an expense form where users can enter their expense details.

The form includes:

* **Expense Name** – allows the user to enter the name of an expense.
* **Amount (KSh)** – allows the user to enter the expense amount in Kenyan Shillings.
* **Category** – provides a dropdown menu with Food, Transport, Rent, Entertainment, and Other.
* **Add Expense button** – a button that will be made functional with JavaScript in a later week.

Each form input has a unique `id` so that JavaScript can easily access the elements later.

# 2. Expense Table

I created an expense table using HTML.

The table contains four columns:

* Name
* Amount (KSh)
* Category
* Date

I added five hardcoded sample expenses to demonstrate how the table will display expense information.

# 3. Table Styling

I used CSS to style the expense table.

The styling includes:

* Collapsed borders using `border-collapse: collapse`
* Padding inside table cells
* A colored header row
* Alternating row colors using `tr:nth-child(even)`
* A hover effect that changes the background color when the mouse moves over a table row

# 4. Multimedia Content

I added a small budget-related icon using the HTML `<img>` element.

The image includes:

* A `src` attribute
* An `alt` attribute
* A `width` attribute

I also embedded a budgeting tips video from YouTube using an `<iframe>`.

# 5. Interactive Element

I added a collapsible **"How to use this tracker"** section using the `<details>` and `<summary>` elements.

This allows users to click the summary to show or hide instructions.

# 6. Advanced CSS Selectors

I used several advanced CSS selectors, including:

* Descendant selector: `.expenses-section td`
* Direct child selector: `.add-expense > h2`
* Position pseudo-class: `tr:nth-child(even)`
* First-child pseudo-class: `tr:first-child`
* Negation pseudo-class: `input:not([type="submit"])`
* Focus pseudo-class: `input:focus`

These selectors help make the page more interactive and improve its appearance.

# Technologies Used

* HTML5
* CSS3
* YouTube iframe

# Project Files

personal-budget-tracker/
│
├── index.html
├── style.css
└── README.md

# index.html

Contains the structure and content of the Budget Tracker, including the form, expense table, image, YouTube video, and interactive details section.

# style.css

Contains the styling for the Budget Tracker, including the table borders, colors, spacing, hover effects, focus effects, and button styling.

# README.md

Explains the purpose of the project and describes the different parts that were built.

# Future Improvements

In a future version, JavaScript can be added to make the **Add Expense** button functional. Users will then be able to add new expenses dynamically to the table without manually editing the HTML.

# Conclusion

The My Budget Tracker demonstrates my understanding of HTML forms, tables, multimedia elements, interactive HTML elements, and advanced CSS selectors.





