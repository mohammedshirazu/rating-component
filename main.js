const rating = document.querySelectorAll(".rating-btns");
const submitBtn = document.querySelector("#submit-btn");
let thankYouState = document.querySelector('.thank-you-state');
let ratingState = document.querySelector('.rating-state');
let selectedRating = document.querySelector('#selected-rating');

thankYouState.style.display = "none";

for (let i=0; i < rating.length; i++) {
    rating[i].addEventListener('click', () => {
        selectedRating.innerHTML = i+1;
    })
}

submitBtn.addEventListener('click', () => {
    if (selectedRating.innerHTML == "") {
        alert("Please give us your rating");
    } else {
        ratingState.style.display = "none";
        thankYouState.style.display = "flex";
    }
})