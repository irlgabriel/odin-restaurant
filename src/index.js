
const displayController = (() => {

  // main element
  const content = document.querySelector(".content")

  // ---------- TOP DIV ----------

  // top div with image and nav
  const top = document.createElement("div");
  content.appendChild(top)

  top.classList.add("top");

  // top nav
  const nav = document.createElement("nav");
  top.appendChild(nav)

  // nav items
  let p = document.createElement("p");

  p.innerHTML = "Contact";
  nav.appendChild(p);

  p.innerHTML = "Menu";
  nav.appendChild(p)
  
  p.innerHTML = "Career";
  nav.appendChild(p)

  p.innerHTML = "Locations";
  nav.appendChild(p)

  p.innerHTML = "Reservations";
  nav.appendChild(p);


  //top hero

  const topHero = document.createElement("div");
  topHero.classList.add("top-hero");
  top.appendChild(topHero)

  let temp = document.createElement("p")

  temp.innerHTML = "Odin Restaurant - Best Meals in Town"
  topHero.appendChild(temp)

  temp.innerHTML = "Come See for Yourself"
  topHero.appendChild(temp)

  // ---------- BOTTOM DIV ----------

  const bottom = document.createElement("div");
  bottom.classList.add("bottom")

  for(let i = 1; i <= 3; i ++) {
    const box = document.createElement("div");
    box.classList.add(`flex-box-${i}`);
    box.appendChild(document.createElement("section").classList.add("bottom-hero"));
  }

  content.appendChild(bottom)

})()