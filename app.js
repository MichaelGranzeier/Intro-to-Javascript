// Make h1 in header have different text

let head = document.getElementById("head");
head.textContent="change header";

// Make nav ul li elements get larger when you hover over them

let listItems = document.querySelectorAll("li")
listItems.forEach((element) =>{
    element.addEventListener("mouseover", () =>{
        element.style.fontSize = "32px";
    });
    element.addEventListener("mouseleave", () =>{
        element.style.fontSize = "16px";
    });
});

// Add another element to the main element

let addToMainElement = document.getElementById("main");
let anyHtmlElement = document.createElement("h3");
anyHtmlElement.innerText ="Typing out some string here for filler text";
addToMainElement.prepend(anyHtmlElement);

// Dynamically change the color of the background on the footer when the user hovers over it

let footer = document.getElementById("footer");

    footer.addEventListener("mouseover", () =>{
        footer.style.backgroundColor = "red";
    });
    footer.addEventListener("mouseleave", () =>{
        footer.style.backgroundColor = "#39add1";
    });

// Change the font size of the paragraphs in the main element when the user clicks them

let pFontSize = Array.from(document.getElementsByClassName("mainp"));
pFontSize.forEach((element) => {
    element.addEventListener("click", () => {
        element.style.fontSize = "30px";
    })
})

// Change the text in the footer when the user clicks it

let footerText = document.getElementById("FooterText");

footerText.addEventListener("click", () =>{
    footerText.innerText = "\u00A9 MyApp 2017";
});

// Remove/Toggle Visiblity the h1 element in the header

let toggleVisibility = document.getElementById("head")
toggleVisibility.addEventListener("click", () => {
    if(toggleVisibility.classList.contains("headerElement")){
        toggleVisibility.classList.remove("headerElement");
    } else {
        toggleVisibility.classList.add("headerElement");
    }
})

// Put something in the place of the h1 in the header

let replaceH1 = document.getElementById("head");
replaceH1.innerText = "Replaced Header";

// Change the text in one of the paragraph tags in the main element

let textChange = document.getElementById("firstp");
textChange.innerText = "Changing text in this element.";

// Change the size of the header element to 200px.

let headerSize = document.getElementById("header");
headerSize.style.height = "200px";