# Dynamic Web Page Creation
## About the Project
This project aims to dynamically create the content of a web page using JavaScript. In this project, the page's texts and images are not taken from a static HTML file but are instead retrieved from a JavaScript object (siteContent) and placed on the page.
## Project Structure
The project consists of the following files:
* index.html: Contains the main structure of the page and the empty or placeholder HTML tags where the content will be placed.
* index.css: The CSS file that determines the page's design and style.
* index.js: Houses all the page's content (the siteContent object) and dynamically assigns this content to the relevant DOM elements in the index.html file.
## How to Run
The most practical way to run this dynamic web page is to use Visual Studio Code (VS Code) and the Live Server extension.
1. Open VS Code. If the Live Server extension is not installed, search for it in the extensions panel (Ctrl+Shift+X) and install it.
2. Open the project folder in VS Code.
3. Right-click on the index.html file and select "Open with Live Server."
After these steps, your browser will automatically open, and you will see the live version of the page populated with JavaScript. Any changes you make in the siteContent object will be updated instantly when you refresh the page.
## Learning Outcomes
By exploring or working on this project, you can gain experience in the following areas:
* You'll learn how to programmatically create and manipulate DOM elements using vanilla JavaScript. The index.js file demonstrates how to select existing elements with document.querySelector and document.querySelectorAll and then dynamically update their text content (textContent) and attributes (src).
* You'll understand the principle of separating content from presentation by using a JavaScript object (siteContent) to store all the text and image data. This data is then used to populate the corresponding elements in the index.html file, making the content easy to manage and update.
* You'll learn how to dynamically apply CSS classes using JavaScript to change the appearance of elements. The project adds the italic and bold classes to specific links to apply different styling, showcasing a simple way to control visual presentation with code.
* You'll understand how to use CSS for page layout and responsive design. The index.css file uses a variety of CSS properties, including flexbox, to create the main layout. It also includes media queries to adjust the layout for different screen sizes, specifically for tablets and phones, ensuring the site is responsive.
