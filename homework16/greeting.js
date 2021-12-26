const container = document.getElementById("container");
const renderGreeting = (isInitial, visitCount = 0) => {
    const greetingText = document.createElement("p");
    const greetingCount = document.createElement("p")
    greetingText.innerText = "Welcome home";
    greetingCount.innerText = `you have been here: ${visitCount}`;


    container.append(greetingText);
    if (isInitial) {
        container.append(greetingCount);
    }
};
if (localStorage.getItem("visits")) {
    const visits = JSON.parse(localStorage.getItem("visits"));
    const updateVisits = visits + 1;
    localStorage.setItem("visits", updateVisits);

    renderGreeting(true, updateVisits)
} else {
    localStorage.setItem("visits", "1");
    renderGreeting(false);
}