let currentReviewIndex = 0;
const reviews = document.querySelectorAll('.review');

function showReview(index) {
  reviews.forEach((review, i) => {
    if (i === index) {
      review.classList.add('active');
    } else {
      review.classList.remove('active');
    }
  });
}

function prevReview() {
  currentReviewIndex--;
  if (currentReviewIndex < 0) {
    currentReviewIndex = reviews.length - 1;
  }
  showReview(currentReviewIndex);
}

function nextReview() {
  currentReviewIndex++;
  if (currentReviewIndex >= reviews.length) {
    currentReviewIndex = 0;
  }
  showReview(currentReviewIndex);
}
