const detailsSummaries = document.querySelectorAll('details summary');
const boxElement = document.querySelector('.box-image');

detailsSummaries.forEach( detailsSummary => {
  detailsSummary.addEventListener('mouseover', moveBox);
  detailsSummary.addEventListener('mouseleave', moveBoxBack);
})

function moveBox(){
  if (window.innerWidth <= 375){
    boxElement.style.top = '-80px';
  } else {
    boxElement.style.left = '-100px';
  }
}

function moveBoxBack(){
  if (window.innerWidth <= 375){
    boxElement.style.top = '-60px';
  } else {
    boxElement.style.left = '-76px';
  }
}

window.addEventListener('resize', checkWindowsSize);

function checkWindowsSize(){
  if(window.innerWidth <= 375){
    console.log('here')
    boxElement.style.top = '-60px';
    boxElement.style.left = '20px';
  } else {
    boxElement.style.top = '152px';
    boxElement.style.left = '-76px';
  }
}