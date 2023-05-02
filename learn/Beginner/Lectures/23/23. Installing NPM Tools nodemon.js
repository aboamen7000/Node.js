// Installing NPM Tools nodemon

// Here's how you can install nodemon using NPM and use it:

// Open your terminal and navigate to your Node.js project directory.
// Install nodemon globally using NPM:
// npm install -g nodemon

// This installs nodemon globally on your system so you can use it from any project.
// To use nodemon with a specific Node.js file, run the following command:
// nodemon app.js
// This will start your Node.js application and watch for any changes to your code.
// If you make any changes and save the file, nodemon will automatically 
// restart your application with the updated code


// If you get the error message "nodemon: command not found" when trying to use nodemon,
// it means that nodemon is not installed or not installed correctly.
// Check if nodemon is installed correctly by running the command npm list -g nodemon.
// This will show you the global NPM packages installed on your system, including nodemon.
// If nodemon is not listed, you need to install it using the command npm install -g nodemon.


// Make sure that the path to the nodemon binary is added to your system's PATH environment variable
//  To check this, you can run the command echo $PATH in your terminal. 
// This will show you the directories in your PATH variable. 
// Make sure that the directory where nodemon is installed is included in your PATH variable. 
// If it's not included, you can add it to your PATH variable by editing your system's environment variables


// If you've installed nodemon locally in your project directory, 
// you need to run it using the command npx nodemon <filename>. 
// This will run nodemon using the version installed in your project's node_modules directory.


// If none of the above solutions work, try uninstalling and reinstalling nodemon 
// using the command npm uninstall -g nodemon followed by npm install -g nodemon.

console.log("Hello Word...!");