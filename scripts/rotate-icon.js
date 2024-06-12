const icons = document.querySelectorAll(".icon-rotate");

function rotateIcons() {
  icons.forEach((icon) => {
    icon.classList.toggle("rotate");
  });
}

setInterval(rotateIcons, 1000); 
