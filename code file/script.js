$(document).ready(function () {
  $('.top_cards,slydee').slick({
      // dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      autoplaySpeed: 2000,

  });
});
const ourItemDiv = document.getElementsByClassName("item-cor");
const openIcon = document.getElementsByClassName("iconOpen");
const closeIcon = document.getElementsByClassName("iconClose");

for (let i = 0; i < ourItemDiv.length; i++) {
  closeIcon[i].style.display = "none";

  ourItemDiv[i].addEventListener("click", () => {
    const result = ourItemDiv[i].classList.toggle("active");

    if (result) {
      closeIcon[i].style.display = "block";
      openIcon[i].style.display = "none";
    } else {
      closeIcon[i].style.display = "none";
      openIcon[i].style.display = "block";
    }
  });
}


// <!-- <div class="baner">
// <div class="slyder flex-item">
//     <div src="slyder-img">
//         <img src="/imgasset/pic 4.jpg" alt="scenery">
//     </div>
//     <div src="slyder-img">
//         <img src="/imgasset/pic 5.jpg" alt="scenery">
//     </div>
//     <div src="slyder-img">
//         <img src="/imgasset/pic 6.jpg" alt="scenery">
//     </div>
//     <div src="slyder-img">
//         <img src="/imgasset/pic 7.jpg" alt="scenery">
//     </div>
//     <div src="slyder-img">
//         <img src="/imgasset/pic 8.jpg" alt="scenery">
//     </div>
// </div>
// </div> -->