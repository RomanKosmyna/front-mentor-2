const getAllButtons = document.querySelectorAll(".rating-btn");
let finalRating = 0;

const setRating = (rating) => {
    for (let i = 0; i < getAllButtons.length; i++) {
        getAllButtons[i].classList.remove("active-btn");
    }
    getAllButtons[rating].classList.toggle("active-btn");
    finalRating = ++rating;
};

const submitRating = () => {
    const mainRatingContainerEl = document.querySelector(".main-rating-container");
    const mainThanksContainerEl = document.querySelector(".main-thanks-container");
    const userRatingEl = document.querySelector("#user-rating");

    if (finalRating !== 0) {
        mainRatingContainerEl.style.display = "none";
        mainThanksContainerEl.style.display = "block";
        userRatingEl.innerHTML = finalRating;
    }
};