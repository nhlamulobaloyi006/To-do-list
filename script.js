const inputValue = document.getElementById("inputValue");
const submitBtn = document.getElementById("submitBtn");
const textDiv = document.querySelector(".text-div");

let activities = []
let storedValue = []

function saveActivities() {
    const value = inputValue.value;
    activities.push(value);
    storedValue = [value];

    const saveToLocalStorage = localStorage.setItem("activities", JSON.stringify(activities));
    console.log(activities);
    console.log(saveToLocalStorage);
}

function loadActivities() {
    const loadSavedActivities = localStorage.getItem("activities");

    if (loadSavedActivities) {
        const convertActivities = JSON.parse(loadSavedActivities);
        activities = [...convertActivities];
        console.log(activities);
    }
}

loadActivities();

function addActivity() {
    for (let i = 0; i < activities.length; i++) {
        const activity = document.createElement("p");
        activity.textContent = activities[i];

        textDiv.appendChild(activity);

        activity.addEventListener("click", () => {
            const checkIndex = activities.indexOf(activities[i]);
            console.log(`Index is:  ${checkIndex}`)

            const edit = prompt("Edit");
            console.log(edit);


            activities[checkIndex] = edit;

            

            localStorage.setItem("activities", JSON.stringify(activities));
            

            console.log(activities);

            activity.scrollIntoView({
                behavior: "smooth",
                block: "end"
            })
            

        });
           
    }

    location.reload();
}


function displaySavedActivities() {
    for (let i = 0; i < activities.length; i++) {
        const activity = document.createElement("p");
        activity.textContent = activities[i];

        textDiv.appendChild(activity);

        activity.addEventListener("click", () => {
            const checkIndex = activities.indexOf(activities[i]);
            console.log(`Index is:  ${checkIndex}`)

            const edit = prompt("Edit");
            console.log(edit);


            activities[checkIndex] = edit;

            

            localStorage.setItem("activities", JSON.stringify(activities));

            console.log(activities);
            location.reload();

        });


    }
    
}

displaySavedActivities();

submitBtn.addEventListener("click", function() {
    const clearInputField = document.getElementById("inputValue");
    saveActivities();
    addActivity();


    clearInputField.value = '';
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        submitBtn.click();
    }
});
