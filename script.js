const ratings = document.querySelectorAll('.rating');
const ratingForm = document.querySelector('.rating-form');
const thanksSection = document.querySelector('.thank-you-section');
const submitBtn = document.querySelector('button');
const ratingResult = document.querySelector('.rating-result');
let userRating = "";
let isRatingSelected = false;

submitBtn.addEventListener('click', () => {
    if(isRatingSelected) {
        ratingForm.classList.toggle('hidden');
        thanksSection.classList.toggle('active');
        ratingResult.textContent = `You selected ${userRating} out of 5`;
    }
});

ratings.forEach((rating) => {
    rating.addEventListener('click', () => {
        ratings.forEach((rating) => {
            rating.classList.remove('active');
        });

        rating.classList.toggle('active');
        userRating = rating.textContent;
        isRatingSelected = true;
    });
});