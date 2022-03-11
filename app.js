const openButton = document.getElementById('btn');
const myModal = document.querySelector('.card');
const closeButton = document.getElementsByClassName('close')[0];
closeButton.addEventListener('click', () => {
  myModal.style.top = '150px';
  myModal.style.visibility = "hidden";
  myModal.style.opacity = "0";
});
openButton.addEventListener('click', () => {
  myModal.style.top = '300px';
  myModal.style.visibility = "visible";
  myModal.style.opacity = "1";
});