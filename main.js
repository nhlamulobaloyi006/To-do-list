import { welcomeMain, dashboardMain, activityMain, activityContainer, usernameMsg, emailMsg, username, email, submitBtn, taskCount, remainingCount, completedCount, totalCount, dashboardInput , activityDiv, addActivityBtn, activityValue, activityInput, itemsDiv, profilePic, profileDiv, editActivityBtn} from "./script.js";
import { validateUsername, validateEmail, disableByDefault, validateInput, dashboard} from "./script.js";

let storeCredentials = []
let profile = []
let dashboardInfo = []
let activities = []

function profilePicture(getValue) {
    profilePic.textContent = getValue;
}



disableByDefault()

function getUserCredentials() {
    const load = localStorage.getItem("userlogin");

    if (load) {
        const convert = JSON.parse(localStorage.getItem("userlogin"));
        console.log(convert);
        profile = [convert]
        storeCredentials = [...convert]
        profilePicture(storeCredentials[0]["username"][0].toUpperCase());
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
        
        manipulateTask(activities[i]);
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
    profileDiv.addEventListener("click", function(){
        dashboard();
    });

});



function manipulateTask(newValue) {
       
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
    newActivityValue.textContent = newValue;

    activityDiv.className = "activity";

    activityDiv.style.display = "flex";

    editActivty.addEventListener("click", ()=>{
        addActivityBtn.style.display = "none";
        profileDiv.style.display = "none"; 
        editActivityBtn.style.display = "block"
        const editValue = activityInput;
        editValue.value = newValue;

        editActivityBtn.addEventListener("click",()=>{
            const clearInput = document.getElementById("activityInput");
            newActivityValue.textContent = editValue.value;
            editActivityBtn.style.display = "none";
            

            clearInput.value = "";
        })
    })

    newItemsDiv.appendChild(editActivty)
    newItemsDiv.appendChild(deleteActivity)
    newItemsDiv.appendChild(doneActivity)

    
    activityDiv.appendChild(newActivityValue)
    activityDiv.appendChild(newItemsDiv)
    activityContainer.appendChild(activityDiv)

    newActivityValue.scrollIntoView({
        behavior:"smooth",
        block:"end"
    })

}

function renderTask() {
    const value = activityInput.value;
    activities.push(value);

    console.log(activities)
    manipulateTask(value);     
    localStorage.setItem("activities", JSON.stringify(activities));

}

document.addEventListener("DOMContentLoaded", ()=>{
    addActivityBtn.addEventListener("click", function(){
        const clearInput = document.getElementById("activityInput");
        renderTask();

        clearInput.value = "";
        disableByDefault();
    });
    activityInput.addEventListener("input", function(){
        validateInput();
    });
})




