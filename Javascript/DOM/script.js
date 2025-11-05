const mainHeading = document.getElementById("title");
const triggerButton = document.getElementById("btn");

triggerButton.onclick = function() {
    changeHeading();
}
mainHeading.textContent = "Hello JavaScript DOM";