import { welcomeMain, dashboardMain, activityMain, activityContainer, usernameMsg, emailMsg, username, email, submitBtn, dashboardInput , activityDiv, addActivityBtn, activityValue, activityInput, itemsDiv, profilePic, profileDiv, editActivityBtn, editInput, taskCount, remainingCount, completedCount, totalCount} from "./script.js";
import { validateUsername, validateEmail, disableByDefault, validateInput, dashboard, userProfile, hideDashboard, showDashboard, enableSubmitBtn, renderTaskBtn, editInputAct, editInputValidation, editButtonEnable} from "./script.js";


export let loginCredentials = []
export let activities = []
let taskCompleted = []
let editIndex = []
let icons = ["/icons/edit_16dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.svg","/icons/delete_16dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.svg","/icons/done_all_16dp_FFFFFF_FILL0_wght400_GRAD0_opsz20.svg"]

let isFour = false;


function show() {
    if (activities.length > 0) {
        activityContainer.classList.add("add");
    }
}

show()

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
            const editIcon = document.createElement("img");
            const deleteIcon = document.createElement("img");
            const doneIcon = document.createElement("img");


            const editPar = document.createElement("p")
            const deletePar = document.createElement("p")
            const donePar = document.createElement("p")

            editActBtn.textContent = "GO";
            editActBtn.id = "editActivityBtn";

            

            editPar.textContent = "✏";
            deletePar.textContent = "🗑";
            donePar.textContent = "✔";

            editIcon.src = icons[0];
            deleteIcon.src = icons[1];
            doneIcon.src = icons[2];

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
                navigator.vibrate(200);
                editButtonEnable();
                editInputAct()
                const value = activities[i];

                editInput.value = value;
                const checkIndex = activities.indexOf(activities[i]);
                editIndex = [checkIndex]
                //alert(`Index is at ${activities.indexOf(activities[i])}`);
                loadActivities();

                
              

            });

            deleteActivityDiv.addEventListener("click", ()=>{
                
                //alert(activities[i]);
                navigator.vibrate(200);
                const value = activities[i];
                const checkIndex = activities.indexOf(activities[i]);
                //alert(checkIndex)
                activities.splice(checkIndex, 1);

                localStorage.setItem("activities", JSON.stringify(activities));
                loadActivities();

                if(activities.length === 0) {
                    alert("Thank you for using our app");
                }

                console.log("array");
                
                console.log(activities);
                
            });
            
            doneActivityDiv.addEventListener("click", ()=>{
                navigator.vibrate(200);
                let count = 0;
                count++
                taskCompleted.push(count)
                
                itemsDiv.style.display = "none";
                activityPar.classList.add("done");

                console.log(navigator)

                //alert(activities[i]);
                const value = activities[i];
                const checkIndex = activities.indexOf(activities[i]);
                //alert(checkIndex)
                activities.splice(checkIndex, 1);

                 setTimeout(()=>{
                    localStorage.setItem("activities", JSON.stringify(activities));
                    loadActivities();
                }, 1500);
            
                

                console.log("array");
                
                console.log(activities);
                
            
                console.log(taskCompleted)

                
                localStorage.setItem("taskCompleted", JSON.stringify(taskCompleted));
            });
    
         
            editActivtyDiv.appendChild(editIcon)
            deleteActivityDiv.appendChild(deleteIcon)
            doneActivityDiv.appendChild(doneIcon)
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

function updateDashboard() {

    const saved = localStorage.getItem("taskCompleted");

    if (saved) {
        const convert = JSON.parse(localStorage.getItem("taskCompleted"));
        taskCompleted = [...convert]
        console.log("tis iscon");
        
        console.log(convert.length);
        

        console.log(taskCompleted);
        
    }

    if (taskCompleted.length === 0){
        completedCount.textContent = 0;
    }
    
    if (taskCompleted.length > 0) {
        completedCount.textContent = taskCompleted.length;
    }
}

updateDashboard()

function dashboardInfo() {

    updateDashboard();

    taskCount.textContent = "";

    taskCount.textContent = activities.length;
    remainingCount.textContent = activities.length;
    totalCount.textContent = taskCompleted.length;

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
   updateDashboard();
   dashboardInfo();
});

activityInput.addEventListener("input", function(){
    enableSubmitBtn();

});

addActivityBtn.addEventListener("click", function(){
    activityContainer.innerHTML = "";
    const clearInput = document.getElementById("activityInput");
    renderTaskBtn();

    
    enableSubmitBtn();

    localStorage.setItem("activities", JSON.stringify(activities));
    updateDashboard();
    dashboardInfo();
    disableByDefault();
    loadActivities();
    show();
    clearInput.value = '';
    

    
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
       
    updateDashboard();
    dashboardInfo();         
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

