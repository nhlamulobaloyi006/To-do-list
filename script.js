import { loginCredentials, activities } from "./main.js";

//Parent-divs
export const welcomeMain = document.querySelector(".welcome-main");
export const dashboardMain = document.querySelector(".dashboard-main");
export const activityMain = document.querySelector(".activity-main");
export const activityContainer = document.querySelector(".activities-container");

//Child-divs
export const activityDiv = document.querySelector(".activity");
export const itemsDiv = document.querySelector(".items");
export const profileDiv = document.querySelector(".profile");
export const addActivityBtn = document.getElementById("addActivity");
export const editActivityBtn = document.getElementById("editActivity");
//error messages
export const usernameMsg = document.getElementById("username-msg");
export const emailMsg = document.getElementById("email-msg");

//welcome form
export const username = document.getElementById("username");
export const email = document.getElementById("email");
export const submitBtn = document.getElementById("submitBtn");

//count  Email is not valid
export const taskCount = document.getElementById("taskCount");
export const remainingCount = document.getElementById("remainingCount");
export const completedCount = document.getElementById("completedCount");
export const totalCount = document.getElementById("totalCount");

//
export const dashboardInput = document.getElementById("dashboardInput");
export const activityValue = document.getElementById("activityValue");
export const activityInput = document.getElementById("activityInput");
export const editInput = document.querySelector(".edit-input");
export const profilePic = document.getElementById("profilePic");

export function disableByDefault() {
    submitBtn.disabled = true;
    submitBtn.style.cursor = "not-allowed";
    addActivityBtn.style.display = "none";
    profileDiv.style.display = "flex";
}
disableByDefault()

export function validateUsername() {
    if (username.value.trim().length === 0 || username.value.trim().length < 5) {
        usernameMsg.style.color = "red";
        usernameMsg.textContent = "Username is not valid";
        submitBtn.style.cursor = "not-allowed";
        submitBtn.disabled = true;    
    }
    else if (username.value.trim().length > 0 && email.value.trim().length < 5 || !email.value.trim().includes("@gmail.com")) {
        usernameMsg.style.color = "green";
        usernameMsg.textContent = "Username is valid";
        emailMsg.style.color = "red";
        emailMsg.textContent = "Email is not valid";
        submitBtn.style.cursor = "not-allowed";
        submitBtn.disabled = true;    
    }
    else if (username.value.trim().length > 0 && email.value.trim().length > 0 && email.value.trim().includes("@gmail.com")) {
        usernameMsg.style.color = "green";
        usernameMsg.textContent = "Username is valid";
        submitBtn.style.cursor = "pointer";
        submitBtn.disabled = false;    
    }
}

export function validateEmail() {
    if (email.value.trim().length === 0 || !email.value.trim().includes("@gmail.com")) {
        emailMsg.style.color = "red";
        emailMsg.textContent = "Email is not valid";
        submitBtn.style.cursor = "not-allowed";
        submitBtn.disabled = true;
        
    } else if (email.value.trim().length > 0 && username.value.trim().length < 5 && email.value.trim().includes("@gmail.com")) {
        emailMsg.style.color = "green";
        emailMsg.textContent = "Email is valid";
        usernameMsg.textContent = "Username is not valid"
        submitBtn.style.cursor = "not-allowed";
        submitBtn.disabled = true;
    }
    else if (email.value.trim().length > 0 && username.value.trim().length >= 5  && email.value.trim().includes("@gmail.com")) {
        emailMsg.style.color = "green";
        emailMsg.textContent = "Email is valid";
        submitBtn.style.cursor = "pointer";
        submitBtn.disabled = false;
    }
}

export function validateInput() {
    if (activityInput.value.trim().length <= 0){
        addActivityBtn.style.display = "none";
        profileDiv.style.display = "flex";

    }
    else if (activityInput.value.trim().length > 0) {
        profileDiv.style.display = "none";
        addActivityBtn.classList.add("active");
        addActivityBtn.style.display = "block";

        
    }
}

export function dashboard() {
    activityMain.style.display = "none";
    dashboardMain.style.display = "flex";
    location.reload();
}

export function userProfile() {
    const username = loginCredentials[0]["username"];
    profilePic.textContent = username[0].toUpperCase();
}

export function hideDashboard() {
    dashboardMain.classList.add("disable");
    activityMain.classList.add("enable");
}

export function showDashboard() {
    activityMain.classList.remove("enable");
    dashboardMain.classList.remove("disable");
}

export function enableSubmitBtn() {
    if (activityInput.value.trim().length > 0) {
        addActivityBtn.disabled = false;
        addActivityBtn.style.display = "block";
        profileDiv.style.display = "none";
        
    }
    if (activityInput.value.trim().length <= 0) {
        addActivityBtn.disabled = true;
        addActivityBtn.style.display = "none";
        profileDiv.style.display = "flex";
        
    }
}

export function renderTaskBtn() {
    const value = activityInput.value;
    activities.push(value);


    const activityPar = document.createElement("p");
    const activityDivEL = document.createElement("div");
    activityDivEL.style.display = "flex";
    activityPar.textContent = value;
    activityPar.id = "activityValue";
    activityDivEL.className = "activity";

    activityDivEL.appendChild(activityPar);
    activityContainer.appendChild(activityDivEL);
    console.log(activities)
}