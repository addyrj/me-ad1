// const testFunction = ()=> {
//     const randomUrl = getRandomUrl()
//     window.open(randomUrl);
// }

// function getRandomUrl() {
//   var urls = ["http://atmbook.club/1", "http://atmbook.club/2", "http://atmbook.club/3", "http://atmbook.club/4"];
//   var randomIndex = Math.floor(Math.random() * urls.length);
//   console.log(randomIndex, "randomIndex")
//   return urls[randomIndex];
// }


// var claimButton = document.getElementById("claim-bonus-mobi");
// claimButton.addEventListener("click", function (event) {
//   event.preventDefault();
//   window.open("http://atmbook.club/");
// });


// var sideOffers = document.querySelector(".side-offers");
// sideOffers.addEventListener("click", function (event) {
//   if (
//     (event.target.classList.contains("tpl-convert") &&
//       event.target.id === "ow-sports-mobi",
//     "dafa-sports-mobi",
//     "casino-mobi",
//     "games-mobi",
//     "arcade-mobi",
//     "lottery-mobi",
//     "poker-mobi",
//     "virtuals-mobi")
//   ) {
//     window.open("http://atmbook.club/");
//   }
// });

  
const websites = [
    "https://atmbook.club/1",
    "https://atmbook.club/2",
    "https://atmbook.club/3",
    "https://atmbook.club/4",
    "https://atmbook.club/5",
    "https://atmbook.club/6"
];


function openRandomWebsite() {
    const randomIndex = Math.floor(Math.random() * websites.length);
    const randomWebsite = websites[randomIndex];
    window.open(randomWebsite, "not working"); // 
}
const claimButton = document.getElementById("claim-bonus-mobi");
claimButton.addEventListener("click", openRandomWebsite);

