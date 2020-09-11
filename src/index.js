import renderContactsNav from "./contacts.js"

const displayController = (() => {

  // main element
  const content = document.querySelector("#content")
  console.log(content)
  // ---------- TOP DIV ----------

  // top div with image and nav
  const topDiv = document.createElement("div");
  content.appendChild(topDiv)

  topDiv.classList.add("top");

  // top nav
  const nav = document.createElement("nav");
  topDiv.appendChild(nav)

  // nav items
  let p = document.createElement("p");
  p.classList.add("nav-contact")
  p.innerHTML = "Contact";
  nav.appendChild(p);

  p = document.createElement("p");
  p.classList.add("nav-menu")
  p.innerHTML = "Menu";
  nav.appendChild(p)
  
  p = document.createElement("p");
  p.classList.add("nav-career")
  p.innerHTML = "Career";
  nav.appendChild(p)

  p = document.createElement("p");
  p.classList.add("nav-locations")
  p.innerHTML = "Locations";
  nav.appendChild(p)

  p = document.createElement("p");
  p.classList.add("nav-reservations")
  p.innerHTML = "Reservations";
  nav.appendChild(p);

  //top hero

  const topHero = document.createElement("div");
  topHero.classList.add("top-hero");
  topDiv.appendChild(topHero)

  let temp = document.createElement("p")

  temp.innerHTML = "Odin Restaurant - Best Meals in Town"
  topHero.appendChild(temp)

  let em = document.createElement("em");
  em.innerHTML = "Come See for Yourself"
  topHero.appendChild(em)

  // ---------- BOTTOM DIV ----------

  const bottom = document.createElement("div");
  bottom.classList.add("bottom")
  for(let i = 1; i <= 3; i ++) {
    const box = document.createElement("div");
    box.classList.add(`flex-box-${i}`);
    const section = document.createElement("section")
    section.classList.add("bottom-hero")
    box.appendChild(section);
    bottom.appendChild(box)
  }
  content.appendChild(bottom)

  const box1 = document.querySelector(".flex-box-1")
  const box2 = document.querySelector(".flex-box-2")
  const box3 = document.querySelector(".flex-box-3")
  console.log(`${box1}, ${box2}, ${box3}`);
  p = document.createElement("p");

  p.innerHTML = "Menu"
  box1.querySelector("section").appendChild(p)

  p = document.createElement("p");
  p.innerHTML = "Career"
  box2.querySelector("section").appendChild(p)

  p = document.createElement("p");
  p.innerHTML = "Reservations"
  box3.querySelector("section").appendChild(p)

 
  // -------- EVENT LISTENERS --------

  // Dropdown contacts nav!

  const navContact = document.querySelector(".nav-contact");

  navContact.addEventListener("click", (e) => {
    e.stopPropagation()
    renderContactsNav()

    const dropDown = document.querySelector(".dropdown-nav")
    dropDown.addEventListener("click",(e) =>  {
      e.stopPropagation()
    })

  }) 

  

  topDiv.addEventListener("click", (e) => {
    const dropDown = document.querySelector(".dropdown-nav");
    if(dropDown) {
      dropDown.remove();
    }
  })

})()