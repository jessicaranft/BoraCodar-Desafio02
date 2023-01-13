const rotateIcon = document.querySelector(".rotate-icon");
const xIcon = document.querySelector(".x-icon");
const sofaStaticImage = document.querySelector(".sofa-static");
const sofaRotatingImage = document.querySelector(".sofa-rotating");

function startRotation () {
  rotateIcon.addEventListener('click', function() {
  rotateIcon.classList.toggle("hide")
  xIcon.classList.toggle("hide")
  sofaRotatingImage.classList.toggle("hide")
  sofaStaticImage.classList.toggle("hide")
  });
}

function stopRotation () {
  xIcon.addEventListener('click', function() {
    rotateIcon.classList.toggle("hide")
    xIcon.classList.toggle("hide")
    sofaRotatingImage.classList.toggle("hide")
    sofaStaticImage.classList.toggle("hide")
    });
}

startRotation();
stopRotation();