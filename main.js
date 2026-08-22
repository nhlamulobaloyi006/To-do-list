import { welcomeMain, dashboardMain, activityMain, usernameMsg, emailMsg, username, email, submitBtn, taskCount, remainingCount, completedCount, totalCount, dashboardInput } from "./script.js";
import { validateUsername, validateEmail, disableByDefault} from "./script.js";

let storeCredentials = []

disableByDefault()

function getUserCredentials() {
    const load = localStorage.getItem("userlogin");

    if (load) {
        const convert = JSON.parse(localStorage.getItem("userlogin"));
        console.log(convert);
        storeCredentials = [...convert]
        console.log(storeCredentials)
        welcomeMain.style.display = "none";
        dashboardMain.style.display = "flex";
    } else {
        welcomeMain.style.display = "flex";
    }
}

getUserCredentials();

document.addEventListener("DOMContentLoaded", ()=>{
    username.addEventListener("input", () => {
        validateUsername()
    });
    email.addEventListener("input", () => {
        validateEmail()
    });
    submitBtn.addEventListener("click", () =>{
        alert("Account was created successfully");
        welcomeMain.style.display = "none";
        dashboardMain.style.display = "flex";
        const savedCredentials = {
            username: username.value,
            email: email.value
        }
        storeCredentials.push(savedCredentials)
        console.log(storeCredentials)
        localStorage.setItem("userlogin", JSON.stringify(storeCredentials));
        
    });
});

document.addEventListener("DOMContentLoaded", ()=>{
    dashboardInput.addEventListener("click", ()=>{
        activityMain.style.display = "flex"; 
        dashboardMain.style.display = "none";
        welcomeMain.style.display = "none"; 
    });
});



function waning() {
    alert("hy")
}

