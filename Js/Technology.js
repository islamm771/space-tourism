let images = [
  "image-launch-vehicle-portrait.jpg",
  "image-spaceport-portrait.jpg",
  "image-space-capsule-portrait.jpg",
];
let titles = [
  [
    "LAUNCH VEHICLE",
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  ],
  [
    "SPACEPORT",
    "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  ],
  [
    "SPACE CAPSULE",
    "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  ],
];
let image = document.querySelector(".tech-img");
let change = document.querySelectorAll(".change p");
let mainTitle = document.querySelector(".main-title");
let titleDisc = document.querySelector(".title-disc");
for (let i = 0; i < images.length; i++) {
  change[i].onclick = function () {
    RemoveAcive();
    change[i].classList.add("active");
    image.setAttribute("src", `./images/technology/${images[i]}`);
    mainTitle.innerHTML = titles[i][0];
    titleDisc.innerHTML = titles[i][1];
  };
}

function RemoveAcive() {
  for (let i = 0; i < images.length; i++) {
    change[i].classList.remove("active");
  }
}
