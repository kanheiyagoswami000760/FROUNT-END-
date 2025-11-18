document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // stop form reload

    // Get input values
    let name = document.getElementById("companyName").value;
    let email = document.getElementById("companyEmail").value;
    let image = document.getElementById("companyImage").value;

    // Select or create second card container
    let secondCard = document.getElementById("secondCard");

    if (!secondCard) {
        secondCard = document.createElement("div");
        secondCard.id = "secondCard";
        secondCard.className = "card";
        document.body.appendChild(secondCard);
    }

    // Fill second card with first card’s details
    secondCard.innerHTML = `
        <h2>Copied Card</h2>
        <img src="${image}" alt="Company Logo">
        <h3>${name}</h3>
        <p>${email}</p>
    `;
});
