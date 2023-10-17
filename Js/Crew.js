let image = document.querySelector(".crew-img");
let crew = document.querySelectorAll(".crew-person p");

let imgs = [
  "image-douglas-hurley.png",
  "image-mark-shuttleworth.png",
  "image-victor-glover.png",
  "image-anousheh-ansari.png",
];
let crewDisc = [
  [
    "Commander ",
    "Douglas Hurley",
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  ],
  [
    "Mission Specialist",
    "MARK SHUTTLEWORTH",
    "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  ],
  [
    "PILOT",
    "Victor Glover",
    "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  ],
  [
    "Flight Engineer",
    "Anousheh Ansari",
    "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
  ],
];

let buttons = document.querySelectorAll(".change span");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    RemoveAcive();
    buttons[i].classList.add("active");
    image.setAttribute("src", `./images/crew/${imgs[i]}`);
    // if (i == 1) {
    //   image.style.width = "350px";
    // } else {
    //   image.style.width = "420px";
    // }
    crew[0].innerHTML = crewDisc[i][0].toUpperCase();
    crew[1].innerHTML = crewDisc[i][1].toUpperCase();
    crew[2].innerHTML = crewDisc[i][2];
  };
}
function RemoveAcive() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
}
