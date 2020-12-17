function openProject(evt, projectName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(projectName).style.display = "block";
  evt.currentTarget.className += " active";
}
function openOverlay(evt, overlayName) {
  var i, Menucontent, Menulink, menuaktiivi;

  Menucontent = document.getElementsByClassName("Menu");
  for (i = 0; i < Menucontent.length; i++) {
    Menucontent[i].style.display = "none";
  }

  Menulink = document.getElementsByClassName("Menu-overlay");
  for (i = 0; i < Menulink.length; i++) {
    Menulink[i].className = Menulink[i].className.replace(" active", "");
  }
  menuaktiivi = document.getElementsByClassName("Menu-top active");
  for (i = 0; i < menuaktiivi.length; i++) {
    menuaktiivi[i].className = menuaktiivi[i].className.replace(" active", "");
  }
  document.getElementById(overlayName).style.display = "flex";
  document.getElementById(overlayName).style.zIndex = "1900";
  evt.currentTarget.className += " active";
}
function closeOverlay(evt, overlayName) {
  var i, Menucontent, Menulink, Menuvanha, menuaktiivi;

  Menucontent = document.getElementsByClassName("Menu-overlay");
  for (i = 0; i < Menucontent.length; i++) {
    Menucontent[i].style.display = "none";
  }

  Menucontent = document.getElementsByClassName("Menu");
  for (i = 0; i < Menucontent.length; i++) {
    Menucontent[i].style.display = "grid";
  }

  Menulink = document.getElementsByClassName("Menu-overlay");
  for (i = 0; i < Menulink.length; i++) {
    Menulink[i].className = Menulink[i].className.replace(" active", "");
  }
  menuaktiivi = document.getElementsByClassName("Menu active");
  for (i = 0; i < menuaktiivi.length; i++) {
    menuaktiivi[i].className = menuaktiivi[i].className.replace(" active", "");
  }

  document.getElementById(overlayName).style.display = "none";
  document.getElementById(overlayName).style.zIndex = "-1";
  evt.currentTarget.className += " active";
}
function kopioi(osoiteName) {
  var copyText = document.getElementById(osoiteName);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied the text:" + copyText.value);
}
//stopwatch function
function Stopwatch() {
  let starttime,
    endtime,
    duration = 0,
    running;
  this.start = function () {
    if (running) throw new Error("stopwatch is running");
    running = true;
    starttime = new Date();
    document.getElementById("Sw").value = "Running, press stop.";
  };
  this.stop = function () {
    if (!running) throw new Error("stopwatch is not running");
    endtime = new Date();
    running = false;
    const seconds = (endtime.getTime() - starttime.getTime()) / 1000;
    duration += seconds;
    document.getElementById("Sw").value = duration;
  };
  this.reset = function () {
    starttime = null;
    endtime = null;
    duration = 0;
    running = false;
    document.getElementById("Sw").value = "Timer reseted.";
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

//image carousel

const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

console.log(carouselImages);

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = 300;
console.log(size);

carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});
prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

const sw = new Stopwatch();
//add element
function addElement(parentId, elementTag, elementId, html) {
  // Adds an element to the document
  var p = document.getElementById(parentId);
  var newElement = document.createElement(elementTag);
  newElement.setAttribute("id", elementId);
  newElement.innerHTML = html;
  p.appendChild(newElement);
}
function removeElement(elementId) {
  // Removes an element from the document
  var element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}
//todolist function
function todo() {
  let running = 0;
  let fileId = 0;
  this.newthing = function () {
    if (running == 0)
      document.getElementById("todoobjects").style.display = "inline-table";
    else {
      fileId++;
      let html =
        '<input class="w3-check" type="checkbox" >' +
        '<input class="w3-input w3-animate-input" type="text" style="width: 200px;">' +
        '<button class="w3-btn" id="deletelist" onclick="todolist.deletething(this)"></button>';
      addElement("todoobjects", "div", "todolist-" + fileId, html);
      console.log("asd");
    }

    running += 1;
  };
  this.deletething = function (obj) {
    if (running == 1) {
      document.getElementById("todoobjects").style.display = "none";
      running = 0;
    } else {
      let parentid = obj.parentId;
      console.log(parentid);
      removeElement(parentid);
    }
  };
}
const todolist = new todo();

function griding1() {
  let area = document.getElementById("gridarea");
  let box1 = document.getElementById("box1");
  let box2 = document.getElementById("box2");
  let box3 = document.getElementById("box3");
  let fileId = 0;
  let presses1 = 0,
    presses2 = 0,
    presses3 = 0;
  this.setting1 = function () {
    area.style.display = "grid";
    if (presses1 == 1) {
      area.style.gridTemplateRows = "300px 300px";
      area.style.gridTemplateAreas = "'box3 box3' 'box1 box2'";
    }
    if (presses1 == 2) {
      area.style.gridTemplateAreas = "'box2 box2' 'box1 box3'";
    }
    if (presses1 == 3) {
      area.style.gridTemplateRows = "300px 300px 300px";
      area.style.gridTemplateAreas = "'box3 box3' 'box1 box1' 'box2 box2'";
    }
    if (presses1 == 4) {
      area.style.gridTemplateRows = "300px 300px 300px";
      area.style.gridTemplateAreas = "'box3 box3' 'box1 box2' 'box1 box2'";
      presses1 = 0;
    }
    presses1++;
    presses2 = 0;
    presses3 = 0;
  };
  this.setting2 = function () {
    area.style.display = "grid";
    box1.style.display = "none";
    box2.style.display = "none";
    box3.style.display = "none";
    let i = 1;
    fileId++;
    let html = '<img src="gallery/(' + i + ')" alt"" />';
    addElement("gridtesting", "div", "galleryimages-" + fileId, html);
  };
}
const grid1 = new griding1();

function scrolling() {
  let contact = document.getElementById("contact");
  let info = document.getElementById("info");
  let projects = document.getElementById("projects");
  let socialmedia = document.getElementById("socialmedia");

  this.contacti = function () {
    contact.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };
  this.info = function () {
    info.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };
  this.projects = function () {
    projects.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };
  this.socialmedia = function () {
    socialmedia.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };
}
const sc = new scrolling();

function colorscheme() {
  let buttonarea = document.getElementById("projects");
  let main = document.getElementById("main");
  let overlay = document.getElementById("overlay");
  let body = document.getElementById("body");
  let bottomtab = document.getElementById("bottomtab");
  let bottomtab2 = document.getElementById("bottomtab2");
  this.submit = function () {
    let maincolor = document.getElementById("Maincolor").value;
    let buttoncolor = document.getElementById("Buttonareacolor").value;
    let overlaycolor = document.getElementById("Overlaycolor").value;
    let fontcolor = document.getElementById("Fontcolor").value;
    let bodycolor = document.getElementById("bodycolor").value;
    let bottomtabcolor = document.getElementById("bottomtabcolor").value;
    console.log(fontcolor + overlaycolor + buttoncolor + maincolor);
    buttonarea.style.backgroundColor = buttoncolor;
    main.style.backgroundColor = maincolor;
    overlay.style.backgroundColor = overlaycolor;
    body.style.color = fontcolor;
    body.style.backgroundColor = bodycolor;
    bottomtab.style.backgroundColor = bottomtabcolor;
    bottomtab2.style.backgroundColor = bottomtabcolor;
  };
}
const cs = new colorscheme();
