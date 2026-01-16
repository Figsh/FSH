const imgBox  =document.querySelectorAll(".slide-img img");

const imgUrls=["assets/images/slide1.png", "assets/images/slide2.png", "assets/images/slide3.png"];

imgBox.forEach(img=>{
  setInterval(()=>{
    const selectedImg = imgUrls[Math.floor(Math.random() * imgUrls.length)];
    img.style.display="hidden";
    img.src=selectedImg;
    img.style.display="auto";
  },4000)
});

const observeOpac = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scale');
    }
    else {
      if (entry.target.classList.contains("scale")) entry.target.classList.remove("scale");
    }
  });
}, { threshold: 0.2 });

const secImg = document.querySelectorAll("section img");

secImg.forEach(img=>observeOpac.observe(img));

const searchForm=document.querySelector("form.search-area");

searchForm.querySelector("input").addEventListener("invalid", function(){this.setCustomValidity("Enter To Search")});

searchForm.querySelector("input").addEventListener("input", function(){this.setCustomValidity("")});

document.querySelector("footer .footer-bottom").innerHTML = `<p>&copy; ${new Date().getFullYear()} Joyof chickens. All Rights Reserved.</p>`;