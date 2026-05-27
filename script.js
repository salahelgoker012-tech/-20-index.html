const correctPassword = "اخوات مهما حصل";

/* الباسورد */
function checkPassword(){
  const input = document.getElementById("password").value;

  if(input === correctPassword){
    document.getElementById("loginPage").classList.remove("active");
    document.getElementById("mainPage").classList.add("active");
  } else {
    alert("الباسورد غلط يا نجم 😂");
  }
}

/* الصور */
const images = [
  "Salah1.jpg",
  "Salah2.jpg",
  "Salah3.jpg"
];

let index = 0;

function showImage(){
  document.getElementById("sliderImage").src = images[index];
}

function nextImage(){
  index++;
  if(index >= images.length){
    index = 0;
  }
  showImage();
}

function prevImage(){
  index--;
  if(index < 0){
    index = images.length - 1;
  }
  showImage();
}