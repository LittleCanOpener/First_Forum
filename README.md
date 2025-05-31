<h1>First Forum - NTV 2025 Final Project </h1>
<h1>Deployment</h1>
    <ul>
        <h2>Using GitHub Pages (Frontend Only)</h2>
        <li>Navigate to the GitHub <a href="https://github.com/LittleCanOpener/First_Forum" target="_blank">Repository</a>:</li>
        <li>Click the 'Settings' Tab.</li>
        <li>Scroll Down to the GitHub Pages Heading.</li>
        <li>Select 'main' or 'master' Branch as the source (ensure the frontend folder is the source).</li>
        <li>Click the Save button.</li>
        <li>Click on the link to go to the live deployed frontend page.</li>
        <li>Note: The backend (API) requires local hosting with ASP.NET Core and cannot be deployed via GitHub Pages. Follow "Run Locally" instructions for the full experience.</li>
    </ul>
    <hr>
    <h2><a href="#" target="_blank">Live Preview (Frontend Only)</a></h2>
    <hr>
<h1>Run Locally</h1>
    <p>Follow these steps to set up and run the First Forum project locally on your machine:</p>
    <ul>
        <li>Navigate to the GitHub <a href="https://github.com/LittleCanOpener/First_Forum" target="_blank">Repository</a>:</li>
        <li>Click the Code drop down menu.</li>
        <li>Either Download the ZIP file, unpackage it locally, and open with an IDE (e.g., Visual Studio for backend, VS Code for frontend) OR Copy the Git URL from the HTTPS dialogue box.</li>
        <li>Open your development editor and set up the project as follows:</li>
        <li>For the Backend (API):</li>
        <ul>
            <li>Open a terminal in <code>\First_Forum\backend\ForumApp</code> (adjust path if different).</li>
            <li>Ensure the .NET SDK is installed. If not, download and install it from <a href="https://dotnet.microsoft.com/download" target="_blank">dotnet.microsoft.com</a>.</li>
            <li>Run <code>dotnet restore</code> in the terminal to restore dependencies.</li>
            <li>Run <code>dotnet run</code> to start the API. It will be available at <code>http://localhost:5271</code>.</li>
        </ul>
        <li>For the Frontend:</li>
        <ul>
            <li>Navigate to <code>\First_Forum\frontend</code> in a terminal (adjust path if different).</li>
            <li>Ensure Node.js is installed. If not, download and install it from <a href="https://nodejs.org/" target="_blank">nodejs.org</a>, then run <code>npm install -g http-server</code> to install http-server globally.</li>
            <li>Run <code>http-server -p 8080</code> in the terminal to serve the frontend at <code>http://localhost:8080</code>.</li>
        </ul>
        <li>Open <code>http://localhost:8080/index.html</code> in your browser to access and use the forum.</li>
        <li>Test the application by signing up (e.g., with email <code>user33@example.com</code> and password <code>password123</code>), logging in, creating a post, and adding a comment.</li>
    </ul>
<h1>Technologies</h1>
<h3>GitHub</h3>
    <p>
        <img src="./assets/images/icons/github.png" width="50px" height="50px" alt="GitHub Icon"><br>
        <a href="https://github.com/" target="_blank">GitHub</a> was used to store and manage the project’s source code, track changes, and collaborate on development.
    </p>
<h4>How to Use GitHub</h4>
    <p>
        Create a repository on GitHub, clone it to your local machine using <code>git clone [URL]</code>, and push changes with <code>git add .</code>, <code>git commit -m "message"</code>, and <code>git push origin main</code>. Use branches for features and pull requests for collaboration.
    </p>
<h4>How It’s Used in First Forum</h4>
    <p>
        GitHub hosted the project repository, allowing version control for both frontend (HTML, CSS, JavaScript) and backend (C# ASP.NET Core) files. It also enabled deployment of the frontend via GitHub Pages.
    </p>
    <hr>
<h3>Visual Studio</h3>
    <p>
        <img src="./assets/images/icons/VisualStudio.png" width="50px" height="50px" alt="Visual Studio Icon"><br>
        <a href="https://visualstudio.microsoft.com/" target="_blank">Visual Studio</a> was used as the primary IDE for developing the ASP.NET Core backend.
    </p>
<h4>How to Use Visual Studio</h4>
    <p>
        Install Visual Studio from <a href="https://visualstudio.microsoft.com/" target="_blank">visualstudio.microsoft.com</a>, open the <code>ForumApp.csproj</code> file from the <code>backend/ForumApp</code> directory, and use the terminal to run <code>dotnet restore</code> and <code>dotnet run</code>. Use the "Debug" menu to set breakpoints and debug the code.
    </p>
<h4>How It’s Used in First Forum</h4>
    <p>
        Visual Studio was used to write, debug, and run the backend API (<code>ForumApp</code>). It managed C# code for controllers (<code>PostsController.cs</code>, <code>CommentsController.cs</code>), models, and the database context, ensuring the API functioned correctly.
    </p>
    <hr>
<h3>Visual Studio Code</h3>
    <p>
        <img src="./assets/images/icons/VSCode.png" width="50px" height="50px" alt="VS Code Icon"><br>
        <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a> was used to edit and manage the frontend files.
    </p>
<h4>How to Use Visual Studio Code</h4>
    <p>
        Install VS Code from <a href="https://code.visualstudio.com/" target="_blank">code.visualstudio.com</a>, open the <code>frontend</code> directory, and use the terminal to run <code>http-server -p 8080</code>. Install extensions like "Live Server" for previews or "Prettier" for formatting.
    </p>
<h4>How It’s Used in First Forum</h4>
    <p>
        VS Code was used to write and edit HTML (<code>index.html</code>, <code>login.html</code>), CSS (<code>style.css</code>), and JavaScript (<code>index.js</code>, <code>login.js</code>) files, providing a smooth workflow with syntax highlighting.
    </p>
    <hr>
<h3>Node.js and http-server</h3>
    <p>
        <img src="./assets/images/icons/node.png" width="90px" height="50px" alt="Node.js Icon"><br>
        <a href="https://nodejs.org/" target="_blank">Node.js</a> and <code>http-server</code> were used to serve the frontend locally during development.
    </p>
<h4>How to Use Node.js and http-server</h4>
    <p>
        Install Node.js from <a href="https://nodejs.org/" target="_blank">nodejs.org</a>, then install <code>http-server</code> globally with <code>npm install -g http-server</code>. Navigate to the <code>frontend</code> directory and run <code>http-server -p 8080</code> to serve the site at <code>http://localhost:8080</code>.
    </p>
<h4>How It’s Used in First Forum</h4>
    <p>
        Node.js and <code>http-server</code> hosted the frontend files locally, allowing real-time testing of the forum interface and interaction with the backend API at <code>http://localhost:5271</code>.
    </p>
    <hr>
<h3>C# and ASP.NET Core</h3>
    <p>
        <img src="./assets/images/icons/Dotnet.png" width="50px" height="50px" alt="C# Icon"><br>
        <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank">C#</a> with <a href="https://dotnet.microsoft.com/apps/aspnet" target="_blank">ASP.NET Core</a> was used to build the backend API.
    </p>
<h4>How to Use C# and ASP.NET Core</h4>
    <p>
        Install the .NET SDK from <a href="https://dotnet.microsoft.com/download" target="_blank">dotnet.microsoft.com</a>, open the <code>backend/ForumApp</code> project in Visual Studio, and run <code>dotnet restore</code> followed by <code>dotnet run</code> to start the API at <code>http://localhost:5271</code>.
    </p>
<h4>How It’s Used in First Forum</h4>
    <p>
        C# and ASP.NET Core created the backend API, managing user authentication (<code>UsersController.cs</code>), posts (<code>PostsController.cs</code>), and comments (<code>CommentsController.cs</code>) with RESTful endpoints.
    </p>
    <hr>
<h3>HTML</h3>
    <p>
        <img src="./assets/images/icons/html.png" width="50px" height="50px" alt="HTML Icon"><br>
        <a href="https://en.wikipedia.org/wiki/HTML" target="_blank">HTML</a> was used to structure the frontend of the forum.
    </p>
    <h4>How to Use HTML</h4>
    <p>
        Open the existing HTML files (<code>index.html</code>, <code>login.html</code>, <code>signup.html</code>) in a text editor like Visual Studio Code. These files use tags like <code>&lt;div&gt;</code>, <code>&lt;form&gt;</code>, and <code>&lt;input&gt;</code> to define the structure. They link to CSS with <code>&lt;link rel="stylesheet" href="style.css"&gt;</code> and JavaScript with <code>&lt;script src="script.js"&gt;</code>. After making changes, test by opening the files in a browser via <code>http://localhost:8080</code> (after starting the frontend server).
    </p>
    <h4>How It’s Used in First Forum</h4>
    <p>
        The project includes pre-built HTML files: <code>index.html</code> (main forum page displaying posts and comments), <code>login.html</code> (login page for users), and <code>signup.html</code> (signup page for new users). These files use HTML to structure forms for user input and sections to display forum content, linking to CSS for styling and JavaScript for interactivity.
    </p>
    <hr>
<h3>CSS</h3>
    <p>
        <img src="./assets/images/icons/css.png" width="50px" height="50px" alt="CSS Icon"><br>
        <a href="https://en.wikipedia.org/wiki/CSS" target="_blank">CSS</a> was used to style the forum interface.
    </p>
<h4>How to Use CSS</h4>
    <p>
        Create a <code>style.css</code> file, define styles with selectors (e.g., <code>.class</code>, <code>#id</code>), and apply properties like <code>color</code> and <code>margin</code>. Link it to HTML with <code>&lt;link rel="stylesheet" href="style.css"&gt;</code>.
    </p>
<h4>How It’s Used in First Forum</h4>
    <p>
        CSS styled the forum’s UI, including the navigation bar, post containers, and comment sections, ensuring a consistent and user-friendly design.
    </p>
    <hr>
<h3>JavaScript</h3>
    <p>
        <img src="./assets/images/icons/javascript.png" width="50px" height="50px" alt="JavaScript Icon"><br>
        <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a> was used to add interactivity to the frontend.
    </p>
<h4>How to Use JavaScript</h4>
    <p>
        Write JavaScript in files like <code>index.js</code> or <code>login.js</code>, using <code>fetch</code> for API calls and DOM manipulation with <code>document.getElementById</code>. Include scripts in HTML with <code>&lt;script src="script.js"&gt;</code>.
    </p>
<h4>How It’s Used in First Forum</h4>
    <p>
        JavaScript handled dynamic features like fetching posts/comments, managing user signup/login, and updating the UI based on API responses.
    </p>
    <hr>
<h3>SQLite</h3>
    <p>
        <img src="./assets/images/icons/sqlite.png" width="120px" height="50px" alt="SQLite Icon"><br>
        <a href="https://www.sqlite.org/" target="_blank">SQLite</a> was used as the database to store project data.
    </p>
<h4>How to Use SQLite</h4>
    <p>
        Set up SQLite with Entity Framework Core in the backend by configuring a connection in <code>appsettings.json</code>. Use migrations with <code>dotnet ef migrations add InitialCreate</code> and access <code>forum.db</code> with DB Browser for SQLite.
    </p>
<h4>How It’s Used in First Forum</h4>
    <p>
        SQLite stored user data, posts, and comments in <code>forum.db</code>, integrated via the backend to persist and retrieve forum content.
    </p>
    <hr>
<h3>DB Browser for SQLite</h3>
    <p>
        <img src="./assets/images/icons/DbBroweserSQLite.png" width="50px" height="50px" alt="DB Browser Icon"><br>
        <a href="https://sqlitebrowser.org/" target="_blank">DB Browser for SQLite</a> was used to inspect and verify the database.
    </p>
<h4>How to Use DB Browser for SQLite</h4>
    <p>
        Download from <a href="https://sqlitebrowser.org/" target="_blank">sqlitebrowser.org</a>, open <code>forum.db</code> from the <code>backend/ForumApp</code> directory, and use the "Browse Data" tab to view tables or "Execute SQL" to run queries.
    </p>
<h4>How It’s Used in First Forum</h4>
    <p>
        DB Browser verified database contents, such as checking hashed passwords in the <code>Users</code> table and confirming posts/comments during testing.
    </p>
    <hr>
<h3>Google Chrome Developer Tools</h3>
    <p>
        <img src="./assets/images/icons/googledevtools.png" width="50px" height="50px" alt="Chrome DevTools Icon"><br>
        Google Chrome Developer Tools was used for debugging and testing.
    </p>
<h4>How to Use Google Chrome Developer Tools</h4>
    <p>
        Open Chrome, press F12 or right-click and select "Inspect" to access DevTools. Use the "Console" for errors, "Network" for API calls, and "Elements" to modify HTML/CSS.
    </p>
<h4>How It’s Used in First Forum</h4>
    <p>
        DevTools debugged JavaScript issues, monitored API requests, and tested UI adjustments like the "My Posts" section.
    </p>
    <hr>
<h3>WebAIM</h3><p>
        <img src="./assets/images/icons/webaim.png" width="150px" height="40x"><br>
        Why <a href="https://webaim.org/" target="_blank">WebAIM</a>:<br>WebAIM's mission is to expand the potential of the web for people with disabilities.<br> 
        We empower individuals and organizations to create and deliver accessible content by providing knowledge, technical skills, tools, organizational leadership strategies, and vision.<br>
        </p>
        <details>
        <summary>Contrast Screenshots.</summary>
        <p>
            <img src="./assets/images/WEBAIM.png"><br>
            <img src="./assets/images/WEBAIM1.png">
        </p>
        </details><hr>
<h3>Lighthouse</h3>
    <p>
        <img src="./assets/images/icons/lighthouse-google.webp" width="55px" height="40px" alt="Lighthouse Icon"><br>
        <a href="https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk/related?hl=en" target="_blank">Lighthouse</a> was used to analyze the frontend’s performance and accessibility.
    </p>
<h4>How to Use Lighthouse</h4>
    <p>
        In Chrome DevTools, go to the "Lighthouse" tab, select metrics (e.g., Performance, Accessibility), and click "Generate report." Alternatively, install the extension for standalone use.
    </p>
<h4>How It’s Used in First Forum</h4>
    <p>
        Lighthouse evaluated the frontend’s load speed and accessibility, ensuring a good user experience and identifying improvements.
    </p>
<h4>How to Access Lighthouse without Extension</h4>
    <ol>
        <li>Press F12 on your keyboard (Windows) to open Developer Tools, then select the Lighthouse tab.</li>
        <li>Right-click on a page, select "Inspect," and navigate to the Lighthouse tab.</li>
    </ol>
    <hr>
<h1>Testing</h1>
    <h3>Code Validators</h3>
    <ul>
        <li>W3C <a href="https://validator.w3.org/nu/#textarea" target="_blank">HTML Checker</a></li>
        <p>Index File:</p>
        <img src="./assets/images/html-index.png" width="100%" alt="Index file results">
        <p>Signup File:</p>
        <img src="./assets/images/html-signup.png" width="100%" alt="Signup file results">
        <p>Login File:</p>
        <img src="./assets/images/html-login.png" width="100%" alt="Login file results">
        <li>W3C <a href="https://jigsaw.w3.org/css-validator/#validate_by_input" target="_blank">CSS Validator</a></li>
        <p>Stylesheet:</p>
        <img src="./assets/images/css.png" width="100%" alt="Stylesheet file results">
    </ul>
<li>Lighthouse Validator Results:</li>
<h4>Desktop:</h4>
    <img src="./assets/images/lighthouse-desktop-index.png" width="100%" height="auto" alt="Lighthouse Desktop Results">
<h4>Mobile:</h4>
    <img src="./assets/images/lighthouse-mobile-index.png" width="100%" height="auto" alt="Lighthouse Mobile Results">
<h2>Lighthouse</h2>
    <h3>Why It's Important to Run Before Deployment</h3>
    <p>
        <strong>Performance:</strong> Ensures pages load quickly, keeping users engaged.
    </p>
    <p>
        <strong>Accessibility:</strong> Makes the site usable for people with disabilities.
    </p>
    <p>
        <strong>Best Practices:</strong> Follows web standards for security and reliability.
    </p>
    <p>
        <strong>SEO:</strong> Boosts search engine visibility.
    </p>
<h1>Features</h1>
    <ul>
        <li>User Signup and Login with Password Hashing (BCrypt).</li>
        <li>Create, View, and Delete Posts (with "My Posts" section).</li>
        <li>Add and Delete Comments on Posts.</li>
        <li>User Authentication and Authorization for Delete Actions.</li>
    </ul>
<h1>Special Thanks & Acknowledgements</h1>
    <ul>
        <li><a href ="https://www.pngegg.com/" target="_blank">Pngegg</a> For icons for the ReadME<br><hr></li>
        <li><a href ="https://favicon.io/" target="_blank">FavIcon</a> Used for the Icon for the website<br><hr></li>
        <li><a href ="https://grok.com/" target="_blank">Grok 3</a> For guidance and Favicon image<br><hr></li>
        <li><a href ="https://stackoverflow.com/" target="_blank">Stackoverflow</a> Used for advanced problems and finding solutions<br><hr></li>
        <li><a href ="https://www.w3schools.com/" target="_blank">W3schools</a> Used for studing, problem solving and finding solutions<br><hr></li>
        <li><a href ="https://fontawesome.com/" target="_blank">FontAwesome</a> For their amazing fonts!<br><hr></li>
    </ul>
    <th>Teachers & Mentors:</th>
<table>
<tr>
    <td>Hjörtur Pálmi Pálsson 
        <a href="https://www.linkedin.com/in/hjorturpp/" target="_blank">
        <img src="./assets/images/icons/linkedin.png" width="20px" height="20x"></a>
    </td>
</tr>
<tr>
    <td>Gunnar Geir Helgason
        <a href="https://www.linkedin.com/in/gunnargh/?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile&originalSubdomain=is" target="_blank"><img src="./assets/images/icons/linkedin.png" width="20px" height="20x"></a>
    </td>
</tr>
</table>
