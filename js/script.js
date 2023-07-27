let cardsQuantity;
window.onload = function () {
  let portfolio = document.querySelector(".portfolio-imgs");
  let cards = portfolio.querySelectorAll("div");
  cardsQuantity = cards.length;
  let dots = document.querySelector('.portfolio-dots');
  let dot = document.createElement('div');
    dot.className = `dot full`;
    dot.id = 'dot-1'
    dots.insertAdjacentElement("beforeend", dot);
  
  for (let i = 1; i < cards.length; i++) {
    // Toggle the 'rightside' class on each div element
    cards[i].classList.toggle("rightside");
    let dot = document.createElement('div');
    dot.className = `dot`;
    dot.id = `dot-${i + 1}`
    dots.insertAdjacentElement("beforeend", dot);
  }
  

};
let n = 1;
function buttonRight() {
  if (n == cardsQuantity) {
    document.querySelector(`#portfolio-1`).classList.toggle("leftside");
    document.querySelector(`#dot-${n}`).classList.toggle('full')
      document.querySelector(`#dot-${1}`).classList.toggle('full')
    while (n != 1) {
      document
        .querySelector(`#portfolio-${n}`)
        .classList.add("rightside");
      document
        .querySelector(`#portfolio-${n - 1}`)
        .classList.remove("leftside");
      
      n--;
    }
    
  } else {
    document.querySelector(`#portfolio-${n}`).classList.toggle("leftside");
    document
      .querySelector(`#portfolio-${n + 1}`)
      .classList.remove("rightside");
      document.querySelector(`#dot-${n}`).classList.toggle('full');
      document.querySelector(`#dot-${n + 1}`).classList.toggle('full');
    n++;
  }
}
function buttonLeft() {
    if (n == 1) {
      document.querySelector(`#portfolio-1`).classList.remove("rightside");
      document.querySelector(`#dot-${n}`).classList.toggle('full')
      document.querySelector(`#dot-${cardsQuantity}`).classList.toggle('full')
      while (n != cardsQuantity) {
        document
          .querySelector(`#portfolio-${n}`)
          .classList.add("leftside");
        document
          .querySelector(`#portfolio-${n + 1}`)
          .classList.remove("rightside");
        n++;
      }
    } else {
      document.querySelector(`#portfolio-${n}`).classList.add("rightside");
      document
        .querySelector(`#portfolio-${n - 1}`)
        .classList.remove("leftside");
        document.querySelector(`#dot-${n}`).classList.toggle('full');
      document.querySelector(`#dot-${n - 1}`).classList.toggle('full');
      n--;
    }
  }
  