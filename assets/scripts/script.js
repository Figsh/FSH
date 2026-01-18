
const topMenu =document.querySelector(".top-menu");
const cartMenu = document.querySelector(".cart-container");
const cartTopBtn = document.querySelector(".top-cart-btn");
const proCards = document.querySelectorAll(".product-grid .product-card");

window.addEventListener("scroll", e=>{
  if(window.pageYOffset>20){
    if(!topMenu.classList.contains("blur")){
      topMenu.classList.add("blur");
    }
  }
  else {
    if (topMenu.classList.contains("blur")) {
  topMenu.classList.remove("blur");
}
  }
})

cartTopBtn.addEventListener("click", e=>{
  
  cartMenu.classList.toggle("show");
  
  if(cartMenu.classList.contains("show")){
    cartTopBtn.querySelector("i").classList.replace("fa-shopping-cart", "fa-times");
  }
  else{
    cartTopBtn.querySelector("i").classList.replace("fa-times", "fa-shopping-cart");

  }
  
});


proCards.forEach(card=>{
  const hideBtn = card.querySelector(".card-cancel");
  hideBtn.addEventListener("click", e=>{
    const parCard=hideBtn.parentElement;
    if(parCard.classList.contains('expanded')){
      parCard.classList.remove("expanded");
    }
  })
  cardDes = card.querySelector(".product-details");
  const parDetail=cardDes.parentElement;
  
  cardDes.addEventListener("click", ()=>{
    proCards.forEach(c=>{
    if (c.classList.contains("expanded")) {
  c.classList.remove("expanded");
}});
    if(!parDetail.classList.contains("expanded")){
      parDetail.classList.add("expanded");
      
    }
  })
  
  cardImg = card.querySelector(".product-image");
const parImg = cardImg.parentElement;

cardImg.addEventListener("click", () => {
proCards.forEach(c=>{
    if (c.classList.contains("expanded")) {
  c.classList.remove("expanded");
}});
  if (!parImg.classList.contains("expanded")) {
    parImg.classList.add("expanded");
    
  }
})
})


const searchForm = document.querySelector("form.search-area");

searchForm.querySelector("input").addEventListener("invalid", function() { this.setCustomValidity("Enter To Search") });

searchForm.querySelector("input").addEventListener("input", function() { this.setCustomValidity("") });

document.querySelector("footer .footer-bottom").innerHTML = `<p>&copy; ${new Date().getFullYear()} Joyof chickens. All Rights Reserved.</p>`;
