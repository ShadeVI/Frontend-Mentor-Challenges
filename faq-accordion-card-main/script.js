const rows = document.querySelectorAll('.row');
const boxImage = document.querySelector('.box-image');

rows.forEach( row => {
  row.addEventListener('click', e => showContent(e));
  row.addEventListener('mouseover', moveBoxLeft);
  row.addEventListener('mouseleave', moveBoxRight);
})

function showContent(e){
  if(e.currentTarget){
    const textContent = e.currentTarget.children[1];
    const arrow = e.currentTarget.children[0].children[1];
    const textTitle = e.currentTarget.children[0].children[0];
    textContent.classList.toggle('show');
    arrow.classList.toggle('arrow-up');
    textTitle.classList.toggle('text-bold');
  }
}

function moveBoxLeft(){
  boxImage.classList.add('box-image-move-left');
}

function moveBoxRight(){
  boxImage.classList.remove('box-image-move-left');
}