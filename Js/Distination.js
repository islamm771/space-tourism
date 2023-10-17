let imgs = [
  "image-moon.png",
  "image-mars.png",
  "image-europa.png",
  "image-titan.png",
];
let titles = ["MOON", "MARS", "EUROPA", "TITAN"];
let discribtions = [
  "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
  "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
  "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
];
let details = [
  ["384,400 KM", "3 DAYS"],
  ["225 MIL. KM", "9 MONTHS"],
  ["628 MIL. KM", "3 YEARS"],
  ["1.6 BIL. KM", "7 YEARS"],
];

let avgDistance = document.querySelector(".dist-details");
let travelTime = document.querySelector(".travel-details");

let links = document.querySelectorAll(".Dist-links li");
let img = document.getElementById("image");
let title = document.getElementById("title");
let disc = document.querySelector(".disc");

for (let i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    RemoveAcive();
    links[i].classList.add("active");
    img.setAttribute("src", `./images/destination/${imgs[i]}`);
    title.innerHTML = titles[i];
    disc.innerHTML = discribtions[i];
    avgDistance.innerHTML = details[i][0];
    travelTime.innerHTML = details[i][1];
  };
}
function RemoveAcive() {
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove("active");
  }
}
