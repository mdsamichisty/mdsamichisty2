let dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    if (elem.classList.contains("hiden")) {
      let dropdownIcon = elem.querySelector(".dropdown-icon");
      let currentClass = elem.classList;
      elem.classList.remove("hiden");
      dropdowns.forEach((element) => {
        if (element.classList[1] != currentClass[1]) {
          let dropdownIcon2 = element.querySelector(".dropdown-icon");
          console.log(dropdownIcon2);
          element.classList.add("hiden");
        }
      });
    } else {
      let dropdownIcon = elem.querySelector(".dropdown-icon");
      elem.classList.add("hiden");
    }
  });
});

let moye = document.querySelector(".moye");
let arrows = document.querySelectorAll(".arrow");

if (window.innerWidth > 768) {
  arrows.forEach((elem) => {
    moye.style.left = "0px";
    elem.addEventListener("click", () => {
      console.log(moye.style.left);
      if (moye.style.left == "0px") {
        moye.style.left = "-1122px";
      } else if (moye.style.left == "-1122px") {
        moye.style.left = "-2244px";
      } else {
        moye.style.left = "0";
      }
    });
  });
} else {
  arrows.forEach((elem) => {
    moye.style.left = "0px";
    elem.addEventListener("click", () => {
      console.log(moye.style.left);
      if (moye.style.left == "0px") {
        moye.style.left = "-395px";
      } else if (moye.style.left == "-395px") {
        moye.style.left = "-790px";
      } else {
        moye.style.left = "0";
      }
    });
  });
}
