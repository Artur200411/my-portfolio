const menu_icon = document.getElementById("menu-icon");
const body = document.body;
const menu_img = document.createElement("img");
menu_img.classList.add("menu_img")
/* menu article*/
const menu_article_parent = document.createElement("div");
menu_article_parent.classList.add("menu_articles_parent");
const Home_txt = document.createElement("p");
const About_me = document.createElement("p");
const Experience = document.createElement("p");
const My_projects = document.createElement("p");
const Contacts = document.createElement("p");
const languages = document.createElement("p");
languages.innerHTML = `<i id="languages" class="fa fa-language" aria-hidden="true"></i>`;
languages.classList.add("menu-languages");
Contacts.innerHTML = `<i id="My-Contacts" class="fa fa-phone" aria-hidden="true"></i>`;
Contacts.classList.add("Menu-contact-sign")
My_projects.innerHTML = `<i id="My-projects" class="fa fa-folder" aria-hidden="true"></i>`;
My_projects.classList.add("My-projects")

Experience.innerHTML = `<i id="Experience" class="fa fa-suitcase" aria-hidden="true"></i>`;
Experience.classList.add("Experience");

About_me.innerHTML = `<i id="About-me" class="fa fa-address-book-o" aria-hidden="true"></i>`;
About_me.classList.add("About_me")

Home_txt.innerHTML = `<i id="Home_txt" class="fa fa-home" aria-hidden="true"></i>`;
Home_txt.classList.add("Home_txt");
/* menu articles end*/
menu_img.src = "https://i.pinimg.com/736x/ee/c0/71/eec071442e9a1b8e017c5a7c1853b880.jpg";
menu_img.width = 48;
menu_img.height = 56;
menu_img.style.cssText = "cursor:pointer; mix-blend-mode: screen;";
menu_img.title = "Menu";
const modal_block = document.createElement("div");
modal_block.className = "modal_block";
const menu_p = document.createElement("p");
menu_p.className = "menu-p";
menu_p.textContent = "MENU SECTION";

const close_png = document.createElement("img");
close_png.src = "https://e7.pngegg.com/pngimages/389/161/png-clipart-sign-symbol-x-mark-check-mark-christian-cross-symbol-miscellaneous-angle.png";
close_png.width = 54;
close_png.height = 30;
close_png.style.cssText = "position: absolute; top: 18px; right: 15px; cursor: pointer; mix-blend-mode: multiply;";
menu_article_parent.append(Home_txt, About_me, Experience, My_projects, languages, Contacts)
modal_block.append(menu_p, close_png, menu_article_parent);
body.appendChild(modal_block);
function updateMenuIcon() {
  const width = window.innerWidth;
  if (width < 801) {
    if (!menu_icon.contains(menu_img)) {
      menu_icon.appendChild(menu_img);
    }
  } else {
    if (menu_icon.contains(menu_img)) {
      menu_icon.removeChild(menu_img);
    }
  }
}
updateMenuIcon();
window.addEventListener("resize", updateMenuIcon);
menu_img.addEventListener("click", () => {
  modal_block.style.top = "18%";
  body.style.cssText = "";
});
close_png.addEventListener("click", () => {
  modal_block.style.top = "-800px";
  body.style.backgroundColor = "white";
});

// my form 

const input = document.forms[0];

const showSuccessMessage = () => {
  const message = document.createElement("div");

  message.textContent = "✅ Your email was sent successfully!";
  message.style.cssText = `
    position: fixed;
    top: 30px;
    right: 30px;
    background: linear-gradient(135deg, #22c55e, #16a34a);
    color: white;
    padding: 16px 24px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.5s ease, transform 0.5s ease;
    transform: translateY(-20px);
  `;

  document.body.appendChild(message);

  // Trigger animation
  setTimeout(() => {
    message.style.opacity = "1";
    message.style.transform = "translateY(0)";
  }, 10);

  // Auto-remove after 4 seconds
  setTimeout(() => {
    message.style.opacity = "0";
    message.style.transform = "translateY(-20px)";
    setTimeout(() => message.remove(), 500);
  }, 4000);
};

const showfailuremessage = () => {
  const message = document.createElement("div");

  message.textContent = "✖ failed to sent the email!";
  message.style.cssText = `
    position: fixed;
    top: 30px;
    right: 30px;
    background-color: red;
    color: white;
    padding: 16px 24px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
    z-index: 9999;
    opacity: 0;
    transition: opacity 0.5s ease, transform 0.5s ease;
    transform: translateY(-20px);
  `;

  document.body.appendChild(message);

  // Trigger animation
  setTimeout(() => {
    message.style.opacity = "1";
    message.style.transform = "translateY(0)";
  }, 10);

  // Auto-remove after 4 seconds
  setTimeout(() => {
    message.style.opacity = "0";
    message.style.transform = "translateY(-20px)";
    setTimeout(() => message.remove(), 500);
  }, 4000);
};
emailjs.init("qvlRb348oUDrM-K5z");


input.addEventListener("submit", (e) => {
  e.preventDefault();
   emailjs.sendForm("service_kbqacu5", "template_m6pafr5", e.target)
      .then(() => showSuccessMessage())
      .catch(() => showfailuremessage());
     e.target.reset();
  });


