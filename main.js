import { welcomeMain, dashboardMain, activityMain, activityContainer, usernameMsg, emailMsg, username, email, submitBtn, taskCount, remainingCount, completedCount, totalCount, dashboardInput , activityDiv, addActivityBtn, activityValue, activityInput, itemsDiv} from "./script.js";
import { validateUsername, validateEmail, disableByDefault} from "./script.js";

let storeCredentials = []
let dashboardInfo = []
let activities = []

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

function getActivities(){
    const load = localStorage.getItem("activities");

    if (load) {
        const convert = JSON.parse(localStorage.getItem("activities"));
        activities = [...convert]
        console.log(convert);
    }

    for (let i = 0; i < activities.length; i++) {
        taskCount.textContent = activities.length;
        remainingCount.textContent = activities.length;
        totalCount.textContent = activities.length;

        const activityDiv = document.createElement("div");
        const newActivityValue = document.createElement("p");
        const editActivty = document.createElement("p");
        const deleteActivity = document.createElement("p");
        const doneActivity = document.createElement("p");
        const newItemsDiv = document.createElement("div");

        editActivty.textContent = "✏";
        editActivty.className = "editActivty";
        deleteActivity.textContent = "🗑";
        deleteActivity.className = "deleteActivity";
        doneActivity.textContent = "✔";
        doneActivity.className = "doneActivity";

        newItemsDiv.className = "items";

        newActivityValue.id = "activityValue"
        newActivityValue.textContent = activities[i];

        activityDiv.className = "activity";

        activityDiv.style.display = "flex";

        newItemsDiv.appendChild(editActivty)
        newItemsDiv.appendChild(deleteActivity)
        newItemsDiv.appendChild(doneActivity)

        
        activityDiv.appendChild(newActivityValue)
        activityDiv.appendChild(newItemsDiv)
        activityContainer.appendChild(activityDiv)
    }
}

getActivities()

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
function renderTask() {
    const value = activityInput.value;
    activities.push(value);

    console.log(activities)
        
    const activityDiv = document.createElement("div");
    const newActivityValue = document.createElement("p");
    const editActivty = document.createElement("p");
    const deleteActivity = document.createElement("p");
    const doneActivity = document.createElement("p");
    const newItemsDiv = document.createElement("div");


    editActivty.textContent = "✏";
    editActivty.className = "editActivty";
    deleteActivity.textContent = "🗑";
    deleteActivity.className = "deleteActivity";
    doneActivity.textContent = "✔";
    doneActivity.className = "doneActivity";

    newItemsDiv.className = "items";

    newActivityValue.id = "activityValue"
    newActivityValue.textContent = value;

    activityDiv.className = "activity";

    activityDiv.style.display = "flex";

    newItemsDiv.appendChild(editActivty)
    newItemsDiv.appendChild(deleteActivity)
    newItemsDiv.appendChild(doneActivity)

    
    activityDiv.appendChild(newActivityValue)
    activityDiv.appendChild(newItemsDiv)
    activityContainer.appendChild(activityDiv)

    localStorage.setItem("activities", JSON.stringify(activities));

}

document.addEventListener("DOMContentLoaded", ()=>{
    addActivityBtn.addEventListener("click", function(){
        const clearInput = document.getElementById("activityInput");
        renderTask();

        clearInput.value = "";
    });
})




