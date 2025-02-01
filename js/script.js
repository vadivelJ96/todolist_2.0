// Get elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add a task
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            ${taskText} 
            <button class="deleteBtn" >Delete</button>
        `;
        
        // Add delete functionality
        const deleteBtn = li.querySelector(".deleteBtn");
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(li);
        });

        taskList.appendChild(li);
        taskInput.value = ""; // Clear the input field
    }
});

// Optional: Press Enter to add a task
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTaskBtn.click();
    }
});


function applySubdomainStyling() {

    const subdomain = window.location.hostname.split('.')[0]; // Get subdomain


    const pageTitle = document.getElementById('pageTitle');
    const themeCSS = document.getElementById('themeCSS');

    switch(subdomain) {

        case 'artist':
            document.body.style.backgroundImage = "url('assets/images/artist_bg.jpeg')";
            
            themeCSS.setAttribute('href', 'assets/css/artist-styles.css'); // Apply artist-specific styles
            pageTitle.innerText = 'artist\'s Todolist';
            break;
        case 'entrepreneur':
            document.body.style.backgroundImage = "url('assets/images/entrepreneur_bg.jpeg')";
            
            themeCSS.setAttribute('href', 'assets/css/entrepreneur-styles.css'); // Apply entrepreneur-specific styles
            pageTitle.innerText = 'entrepreneur\'s Todolist';
            break;
        case 'doctor':
            document.body.style.backgroundImage = "url('assets/images/doctor_bg.jpeg')";
            
            themeCSS.setAttribute('href', 'assets/css/doctor-styles.css'); // Apply doctor-specific styles
            pageTitle.innerText = 'Doctor\'s Todolist';
            break;
    
        case 'engineer':
            document.body.style.backgroundImage = "url('assets/images/engineer_bg.jpeg')";
            
            themeCSS.setAttribute('href', 'assets/css/engineer-styles.css'); // Apply engineer-specific styles
            pageTitle.innerText = 'Engineer\'s Todolist';
            break;
        case 'lawyer':
            document.body.style.backgroundImage = "url('assets/images/lawyer_bg.jpeg')";
            
            themeCSS.setAttribute('href', 'assets/css/lawyer-styles.css'); // Apply lawyer-specific styles
            pageTitle.innerText = 'Lawyer\'s Todolist';
            break;
        // Add cases for other subdomains as needed
        default:
            document.body.style.backgroundImage = "url('default_bg.jpeg')";
            
            themeCSS.setAttribute('href', 'assets/css/default-styles.css'); // Default styles
            pageTitle.innerText = 'Todolist';
    }
    
}

// Call the function to apply subdomain-specific styling
document.addEventListener("DOMContentLoaded", function() {
    applySubdomainStyling();
});