# My Budget Tracker


# Project Description


My Budget Tracker is a simple HTML and CSS web page designed to help users keep track of their expenses. The page allows users to enter expense information, select an expense category, and view sample expenses in a table. It also includes multimedia content and an interactive help section.

This week, I enhanced the design with a cohesive color palette, Google Fonts typography, and improved styling using the CSS box model for better visual hierarchy and user experience.


# What I Built


# 1. Add Expense Form


I created an expense form where users can enter their expense details.


The form includes:


* **Expense Name** – allows the user to enter the name of an expense.
* **Amount (KSh)** – allows the user to enter the expense amount in Kenyan Shillings.
* **Category** – provides a dropdown menu with Food, Transport, Rent, Entertainment, and Other.
* **Add Expense button** – a button that will be made functional with JavaScript in a later week.


Each form input has a unique `id` so that JavaScript can easily access the elements later.

**Styling improvements this week:**
* Added proper padding (12px) and spacing for better usability
* Implemented focus states with green outline (`#4caf50`) for accessibility
* Applied consistent border-radius (7px) for modern appearance
* Used light background color (`#f8fafc`) to distinguish inputs from page background


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
* Padding inside table cells (14px)
* A colored header row with deep blue background (`#173f5f`) and white text
* Alternating row colors using `tr:nth-child(even)` with light blue (`#f3f7fa`)
* A hover effect that changes the background color to light green (`#e8f5e9`) when the mouse moves over a table row
* Proper borders for clear cell separation


# 4. Multimedia Content


I added a small budget-related icon using the HTML `<img>` element.


The image includes:


* A `src` attribute
* An `alt` attribute
* A `width` attribute


I also embedded a budgeting tips video from YouTube using an `<iframe>`.

**Styling improvements this week:**
* Added header image with responsive layout using flexbox
* Applied border-radius (8px) to images for consistency
* Centered tracker icon in its own styled section


# 5. Interactive Element


I added a collapsible **"How to use this tracker"** section using the `<details>` and `<summary>` elements.


This allows users to click the summary to show or hide instructions.

**Styling improvements this week:**
* Styled as a card with white background, padding, and border-radius (12px)
* Added subtle box-shadow for depth
* Applied Poppins font to summary for visual hierarchy


# 6. Advanced CSS Selectors


I used several advanced CSS selectors, including:


* Descendant selector: `.expenses-section td`
* Direct child selector: `.add-expense > h2`
* Position pseudo-class: `tr:nth-child(even)`
* First-child pseudo-class: `tr:first-child`
* Negation pseudo-class: `input:not([type="submit"])`
* Focus pseudo-class: `input:focus`

These selectors help make the page more interactive and improve its appearance.


# 7. Typography and Google Fonts


I imported and applied Google Fonts to improve readability and visual hierarchy:


* **Poppins** (weights 500, 600, 700) – used for all headings (h1, h2), buttons, table headers, and summary text
* **Open Sans** (weights 400, 500, 600, 700) – used for body text, paragraphs, and form inputs

This creates clear visual distinction between headings and body content.


# 8. Color Palette and Design System


I implemented a cohesive color scheme across all elements:


* **Primary Color** (`#173f5f`) – deep blue for headings, table headers, and summary
* **Accent Color** (`#4caf50`) – green for buttons and focus states
* **Text Colors** – various shades (`#263238`, `#37474f`, `#607d8b`, `#546e7a`) for hierarchy
* **Background Colors** – light blue-gray page (`#eef3f7`), white cards (`#ffffff`)
* **Border Colors** – consistent light borders (`#d9e2ec`, `#b0bec5`)

All cards use consistent styling: white background, 1px border, 12px border-radius, and subtle box-shadow.


# 9. CSS Box Model Application


I strategically used margin, padding, borders, and border-radius throughout:


* **Margin** – 30px between major sections, 20px between related elements
* **Padding** – 25-30px inside cards, 14px in table cells, 12px in form inputs
* **Borders** – 1px solid borders on cards, inputs, and table cells
* **Border-radius** – 12px for cards, 7px for inputs/buttons, 8px for images and iframes

This creates clear visual separation and a polished, professional appearance.


# Technologies Used


* HTML5
* CSS3
* Google Fonts (Poppins, Open Sans)
* YouTube iframe


# Project Files


personal-budget-tracker/
│
├── index.html
├── style.css
└── README.md


# index.html


Contains the structure and content of the Budget Tracker, including the form, expense table, image, YouTube video, and interactive details section.

Enhanced with semantic HTML5 elements (header, section, details) and proper accessibility attributes.


# style.css


Contains the styling for the Budget Tracker, including:

* Cohesive color palette applied across all elements
* Google Fonts typography with clear visual hierarchy
* Table styling with borders, colors, spacing, hover effects, and alternating rows
* Form styling with proper spacing, focus effects, and button design
* Card-based layout with consistent box model usage (margin, padding, border, border-radius)
* Flexbox layout for responsive header design
* Advanced CSS selectors for targeted styling


# README.md


Explains the purpose of the project and describes the different parts that were built.


# Future Improvements


In a future version, JavaScript can be added to make the **Add Expense** button functional. Users will then be able to add new expenses dynamically to the table without manually editing the HTML.

Additional improvements could include:
* Expense category filtering
* Total expense calculation and display
* Date picker for expense entry
* Local storage to persist expenses between sessions


# Conclusion


The My Budget Tracker demonstrates my understanding of HTML forms, tables, multimedia elements, interactive HTML elements, and advanced CSS selectors.

This week's enhancements show mastery of:
* Intentional color palette design
* Typography and visual hierarchy with Google Fonts
* Professional table and form styling
* Strategic use of the CSS box model for layout and spacing
* Responsive design principles