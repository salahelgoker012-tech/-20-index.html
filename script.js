const correctPassword = "اخوات مهما حصل";

/* الباسورد */

function checkPassword(){

  const input = document.getElementById("password").value;

  if(input === correctPassword){

    document.getElementById("loginPage").classList.remove("active");

    document.getElementById("mainPage").classList.add("active");

  }else{

    alert("الباسورد غلط يا نجم 😂");

  }

}

/* الصور */

const images = [

  "Salah1.jpg",

  "Salah2.jpg",

  "Salah3.jpg",

  "Salah4.jpg",

  "Salah5.jpg"
];

let current = 0;

/* اظهار الصورة */

function showImage(){

  document.getElementById("sliderImage").src = images[current];

}

/* الصورة اللي بعدها */

function nextImage(){

  current++;

  if(current >= images.length){

    current = 0;

  }

  showImage();
}

/* الصورة اللي قبلها */

function prevImage(){

  current--;

  if(current < 0){

    current = images.length - 1;

  }

  showImage();
}