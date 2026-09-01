import { welcomeMain, dashboardMain, activityMain, activityContainer, usernameMsg, emailMsg, username, email, submitBtn, taskCount, remainingCount, completedCount, totalCount, dashboardInput , activityDiv, addActivityBtn, activityValue, activityInput, itemsDiv, profilePic, profileDiv, editActivityBtn, editInput} from "./script.js";
import { validateUsername, validateEmail, disableByDefault, validateInput, dashboard, userProfile, hideDashboard, showDashboard, enableSubmitBtn, renderTaskBtn, editInputAct, editInputValidation, editButtonEnable} from "./script.js";


export let loginCredentials = []
export let activities = []
let totalActivityCount = []
let editIndex = []


function getLength() {
    const lengthTxt = activities.length

    console.log(lengthTxt);
    
}

getLength();

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
    activityContainer.innerHTML = "";
    const savedActivity = localStorage.getItem("activities");

    if (savedActivity) {
        const convert  = JSON.parse(localStorage.getItem("activities"));
        activities = [...convert]

        for (let i = 0; i < activities.length; i++) {
        
            const activityPar = document.createElement("p");
            const activityDivEL = document.createElement("div");
            const itemsDiv = document.createElement("div")
            const editActivtyDiv = document.createElement("div")
            const deleteActivityDiv = document.createElement("div")
            const doneActivityDiv = document.createElement("div")
            const editActBtn = document.createElement("button")


            const editPar = document.createElement("p")
            const deletePar = document.createElement("p")
            const donePar = document.createElement("p")

            editActBtn.textContent = "ED";
            editActBtn.id = "editActivityBtn";

            

            editPar.textContent = "✏";
            deletePar.textContent = "🗑";
            donePar.textContent = "✔";

            activityDivEL.style.display = "flex";
            activityPar.textContent = activities[i];
            activityPar.id = "activityValue";
            activityDivEL.className = "activity";

            editActivtyDiv.className = "editActivty";
            deleteActivityDiv.className = "deleteActivity";
            doneActivityDiv.className = "doneActivity";

            itemsDiv.className = "items";

            editInput.addEventListener("input", function(){
                editInputValidation()
                
            });      

            editActivtyDiv.addEventListener("click", function(){
                editButtonEnable();
                editInputAct()
                const value = activities[i];

                editInput.value = value;
                const checkIndex = activities.indexOf(activities[i]);
                editIndex = [checkIndex]
                alert(`Index is at ${activities.indexOf(activities[i])}`);

            });

            deleteActivityDiv.addEventListener("click", ()=>{
                /* activityDivEL.remove(); */
                const checkIndex = activities.indexOf(activities[i]);

                if (checkIndex > -1) {
                    activities.splice(checkIndex, 1)
                }

                activityDivEL.remove();

                
                console.log("Button clicked")
                console.log(checkIndex)

                
                console.log(activities)

                localStorage.setItem("activities", JSON.stringify(activities));
                loadActivities();
                
            });
            
    
            editActivtyDiv.appendChild(editPar)
            deleteActivityDiv.appendChild(deletePar)
            doneActivityDiv.appendChild(donePar)
            itemsDiv.appendChild(editActivtyDiv)
            itemsDiv.appendChild(deleteActivityDiv)
            itemsDiv.appendChild(doneActivityDiv)
            activityDivEL.appendChild(activityPar);
            activityDivEL.appendChild(itemsDiv);
            activityContainer.appendChild(activityDivEL);
            
        }

    }

   
    console.log(activities);
    
}

loadActivities() 

function dashboardInfo() {

    taskCount.textContent = "";

    taskCount.textContent = activities.length;
    remainingCount.textContent = activities.length;
    completedCount.textContent = activities.length;
    totalCount.textContent = activities.length;

    console.log("Thia for ac");
    console.log(activities.length);
    
    
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
    loadActivities();
   showDashboard();
   dashboardInfo();
});

activityInput.addEventListener("input", function(){
    enableSubmitBtn();

});

addActivityBtn.addEventListener("click", function(){
    activityContainer.innerHTML = "";
    const clearInput = document.getElementById("activityInput");
    renderTaskBtn();

    clearInput.value = '';
    enableSubmitBtn();

    localStorage.setItem("activities", JSON.stringify(activities));
    dashboardInfo();
    disableByDefault();
    loadActivities();
});


editActivityBtn.addEventListener("click", ()=>{
    activityContainer.innerHTML = "";
    const newValue = editInput.value;
    const index = Number(editIndex);
    activities[index] = newValue;
                
                
                

    console.log(`new value: ${newValue}`)

    editInput.style.display = "none";
    activityInput.style.display = "flex";
    enableSubmitBtn(); 
    console.log(activities)
       
    dashboardInfo()         
    localStorage.setItem("activities", JSON.stringify(activities));
    loadActivities();

});

     

document.addEventListener("keydown", (e)=>{
    if (e.key === "Enter") {
            addActivityBtn.click();
            
            
    }
    enableSubmitBtn();
    disableByDefault();
})

