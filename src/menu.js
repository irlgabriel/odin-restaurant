const renderMenuNav = () => {
  const nav = document.querySelector("nav");
  const menu = document.createElement("div");

  menu.classList.add("dropdown-nav", "dropdown-menu");

  const ul = document.createElement("ul");

  contact.appendChild(ul);

  let li = document.createElement("li");
  li.innerHTML = "Address: Ut id adipisicing laboris occaecat adipisicing dolore fugiat."

  ul.appendChild(li)

  nav.appendChild(contact)

}