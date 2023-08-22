//////////////////////////// ? Rating //////////////////////////////////////
// Select all elements with the "i" tag and store them in a NodeList called "stars"
 const stars = document.querySelectorAll(".stars i");
 // Loop through the "stars" NodeList
 stars.forEach((star, index1) => {
   // Add an event listener that runs a function when the "click" event is triggered
   star.addEventListener("click", () => {
     // Loop through the "stars" NodeList Again
     stars.forEach((star, index2) => {
       // Add the "active" class to the clicked star and any stars with a lower index
       // and remove the "active" class from any stars with a higher index
       index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
     });
   });
 });
//////////////////////////// ? charater counter //////////////////////////////////////
$('textarea').keyup(function () {
    var characterCount = $(this).val().length,current = $('#current');
    current.text(characterCount);
});
//////////////////////////////////? Summit //////////////////////////////////////////
document.getElementById("feedback_form").addEventListener("submit", feedbackSubmit);
var stars_count=0;
function feedbackSubmit() {
  for (var i = 0; i < 5; i++){
    stars[i].classList.contains('active') ? stars_count++ : stars_count=stars_count;
  }
  alert(`Your Feedback have been submitted sucssessfully with ${stars_count} stars`);
}