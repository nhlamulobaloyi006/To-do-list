import { welcomeMain, dashboardMain, activityMain, activityContainer, usernameMsg, emailMsg, username, email, submitBtn, taskCount, remainingCount, completedCount, totalCount, dashboardInput , activityDiv, addActivityBtn, activityValue, activityInput, itemsDiv, profilePic, profileDiv, editActivityBtn, editInput} from "./script.js";
import { validateUsername, validateEmail, disableByDefault, validateInput, dashboard, userProfile, hideDashboard, showDashboard, enableSubmitBtn, renderTaskBtn} from "./script.js";

export let loginCredentials = []
export let activities = []
let totalActivityCount = []


function getUserCredentials() {
    const userCredentials = localStorage.getItem("loginCredentials");

    if (userCredentials) {
        const convert = JSON.parse(localStorage.getItem("loginCredentials"));
        loginCredentials = [...convert]

        welcomeMain.classList.add("disable");
        dashboardMain.classList.add("enable");

        userProfile();
    }

    console.log(loginCredentials)
}

getUserCredentials()

function loadActivities() {
    const savedActivity = localStorage.getItem("activities");

    if (savedActivity) {
        const convert  = JSON.parse(localStorage.getItem("activities"));
        activities = [...convert]
    }

    for (let i = 0; i < activities.length; i++) {
        
        const activityPar = document.createElement("p");
        const activityDivEL = document.createElement("div");
        const itemsDiv = document.createElement("div")
        const editActivtyDiv = document.createElement("div")
        const deleteActivityDiv = document.createElement("div")
        const doneActivityDiv = document.createElement("div")


        activityDivEL.style.display = "flex";
        activityPar.textContent = activities[i];
        activityPar.id = "activityValue";
        activityDivEL.className = "activity";

        editActivtyDiv.className = "editActivty";
        deleteActivityDiv.className = "deleteActivty";
        doneActivityDiv.className = "doneActivty";

        itemsDiv.className = "items"

        itemsDiv.appendChild(editActivtyDiv)
        itemsDiv.appendChild(deleteActivityDiv)
        itemsDiv.appendChild(doneActivityDiv)
        activityDivEL.appendChild(activityPar);
        activityContainer.appendChild(activityDivEL);
        activityContainer.appendChild(itemsDiv);
        
    }

    console.log(activities);
    
}

loadActivities() 

function dashboardInfo() {
    taskCount.textContent = activities.length;
    remainingCount.textContent = activities.length;
    completedCount.textContent = activities.length;
    totalCount.textContent = activities.length;
}

dashboardInfo()

disableByDefault()
username.addEventListener("input", function(){
    validateUsername();
});

email.addEventListener("input", function(){
    validateEmail();
});

submitBtn.addEventListener("click", ()=>{
   welcomeMain.classList.add("disable"); 
   dashboardMain.classList.add("enable");

   const loginDetails = 
   {
    username: username.value,
    email: email.value
   }
   loginCredentials.push(loginDetails);

   localStorage.setItem("loginCredentials", JSON.stringify(loginCredentials));

   userProfile();
});

disableByDefault();

dashboardInput.addEventListener("click", function(){
    hideDashboard();
});

profileDiv.addEventListener("click", function(){
   showDashboard();
});

activityInput.addEventListener("input", function(){
    enableSubmitBtn();

});

addActivityBtn.addEventListener("click", function(){
    const clearInput = document.getElementById("activityInput");
    renderTaskBtn();

    clearInput.value = '';
    enableSubmitBtn();

    localStorage.setItem("activities", JSON.stringify(activities));
    dashboardInfo();
    disableByDefault();
});


    document.addEventListener("keydown", (e)=>{
        if (e.key === "Enter") {
            addActivityBtn.click();
            
            
        }
        enableSubmitBtn();
        disableByDefault();
    })