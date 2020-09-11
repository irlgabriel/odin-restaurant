const renderContactsNav = () => {
  const nav = document.querySelector("nav");
  const contact = document.createElement("div");

  contact.classList.add("dropdown-nav", "dropdown-contact")

  const ul = document.createElement("ul");

  ul.innerHTML = "Contact"

  contact.appendChild(ul);

  let li = document.createElement("li");
  li.innerHTML = "Address: Ut id adipisicing laboris occaecat adipisicing dolore fugiat."
  ul.appendChild(li)

  li = document.createElement("li");
  li.innerHTML = "Phone: (555) 555-1234"
  ul.appendChild(li)

  nav.appendChild(contact)
}

export default renderContactsNav;

