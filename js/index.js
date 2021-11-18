/*var i = 0;
var images = [];
var time = 3000;

images [0] = `https://drive.google.com/uc?export=view&id=1uu1KlWaqgNGa1rFZNAGC5f-JD9InwkEY`;
images [1] = `https://drive.google.com/uc?export=view&id=1tdyL8j4w_10revZ1s12wXGQd-nnpDg4v`;
images [2] = `https://drive.google.com/uc?export=view&id=1tZwzuBCISyssjZC_z9DOiIMg9wZfiSB7`;
function gantiImg(){
  
  document.slide.src = images[i];
  if(i < images.length - 1){
    i++;
  } else {
    i = 0;
  }
  setTimeout("gantiImg()", time);
}
window.onload = gantiImg;
console.log()