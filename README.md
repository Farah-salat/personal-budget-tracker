# SpendWise — Personal Expense Tracker

## Project Description
SpendWise is a responsive web application designed to help users track daily expenses, categorize spending, and monitor their budget in real time. Built to transition from a local development environment to a live production site, SpendWise offers a clean, intuitive interface for managing personal finances.

## Technologies Used
* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Version Control:** Git & GitHub
* **Hosting & Continuous Deployment:** Netlify

## GitHub Repository Information
* **Repository URL:** https://github.com/Farah-salat/personal-budget-tracker.git
* **Visibility:** Public

## Live Netlify Website URL
* **Live Website:** https://salat-spendwise.netlify.app

## Deployment Process Summary
1. **Deployment Readiness:** Verified that `index.html`, `style.css`, `script.js`, and the background image asset were properly organized in the root directory with clean relative file paths.
2. **GitHub Integration:** Initialized a local Git repository, committed all SpendWise project files, and pushed the codebase to a public GitHub repository on the `main` branch.
3. **Netlify Deployment & Custom Domain:** Imported the public GitHub repository into Netlify and updated the default subdomain to a custom project URL https://salat-spendwise.netlify.app
4. **Continuous Deployment & Testing:** Made a visible text update in `index.html`, pushed the commit to GitHub, and confirmed that Netlify automatically rebuilt and updated the live website. Verified across desktop and mobile browsers that all styles, scripts, and assets load without errors.

## Challenges Encountered During Deployment
* **Custom Subdomain Availability:** Finding an available, meaningful `.netlify.app` subdomain required selecting a unique combination (`salat-spendwise`) rather than a generic single-word name.
* **Production Path Verification:** Ensuring all asset filenames (`style.css`, `script.js`, and image files) matched exact case-sensitive relative paths so Netlify's Linux servers loaded every resource cleanly.

## Lessons Learned
* **Automated CI/CD Workflows:** Linking a GitHub repository directly to Netlify automates production deployments on every `git push`, removing the need for manual file uploads.
* **Production vs. Local Testing:** Testing the live HTTPS URL across different devices confirms that visual assets, responsive CSS layouts, and JavaScript interactivity behave consistently outside a local folder.
