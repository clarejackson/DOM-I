const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

let midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let navBar = document.getElementsByTagName("a");
navBar[0].textContent = (siteContent["nav"]["nav-item-1"]);
navBar[1].textContent = (siteContent["nav"]["nav-item-2"]);
navBar[2].textContent = (siteContent["nav"]["nav-item-3"]);
navBar[3].textContent = (siteContent["nav"]["nav-item-4"]);
navBar[4].textContent = (siteContent["nav"]["nav-item-5"]);
navBar[5].textContent = (siteContent["nav"]["nav-item-6"]);

let headings = document.getElementsByTagName("h4");
headings[0].textContent = (siteContent["main-content"]["features-h4"]);
headings[1].textContent = (siteContent["main-content"]["about-h4"]);
headings[2].textContent = (siteContent["main-content"]["services-h4"]);
headings[3].textContent = (siteContent["main-content"]["product-h4"]);
headings[4].textContent = (siteContent["main-content"]["vision-h4"]);
headings[5].textContent = (siteContent["contact"]["contact-h4"]);

let paragraphs = document.getElementsByTagName("p");
paragraphs[0].textContent = (siteContent["main-content"]["features-content"]);
paragraphs[1].textContent = (siteContent["main-content"]["about-content"]);
paragraphs[2].textContent = (siteContent["main-content"]["services-content"]);
paragraphs[3].textContent = (siteContent["main-content"]["product-content"]);
paragraphs[4].textContent = (siteContent["main-content"]["vision-content"]);
paragraphs[5].textContent = (siteContent["contact"]["address"]);
paragraphs[6].textContent = (siteContent["contact"]["phone"]);
paragraphs[7].textContent = (siteContent["contact"]["email"]);
paragraphs[8].textContent = (siteContent["footer"]["copyright"]);

let button = document.getElementsByTagName("button");
button[0].textContent = (siteContent["cta"]["button"]);

let header = document.getElementsByTagName("h1");
header[0].textContent = (siteContent["cta"]["h1"]);
header[0].style.textAlign = center;
header[0].innerText = "DOM /n Is /n Awesome"
// const arr = header[0].split("");
// arr[1] = newTag.innerText;
// arr

h1.innerText = "DOM /n Is /n Awesome"



let newTag = document.createElement("br");
//push br tags into h1 here
newTag.appendChild("header");

let navigation = document.getElementsByTagName("a");
navigation.forEach((item) => {
  item.style.color = "#008000"
})


