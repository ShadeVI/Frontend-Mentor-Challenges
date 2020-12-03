const db = [
    {
        name: "faq-accordion-card-main",
        image: "desktop-design.jpg",
        level: "Newbie",
    },
    {
        name: "profile-card-component-main",
        image: "desktop-design.jpg",
        level: "Newbie",
    },
    {
        name: "single-price-grid-component-master",
        image: "desktop-design.jpg",
        level: "Newbie",
    },
    {
        name: "social-proof-section-master",
        image: "desktop-design.jpg",
        level: "Newbie",
    },
    {
        name: "four-card-feature-section-master",
        image: "desktop-design.jpg",
        level: "Newbie",
    },
    {
        name: "ping-coming-soon-page-master",
        image: "desktop-design.jpg",
        level: "Newbie",
    },
    {
        name: "testimonials-grid-section-main",
        image: "desktop-design.jpg",
        level: "Junior",
    },
    {
        name: "insure-landing-page-master",
        image: "desktop-design.jpg",
        level: "Junior",
    },
    {
        name: "huddle-landing-page-with-single-introductory-section-master",
        image: "desktop-design.jpg",
        level: "Newbie",
    },

    {
        name: "coding-bootcamp-testimonials-slider-master",
        image: "desktop-design-slide-1.jpg",
        level: "Newbie",
    },
];

const newbieSection = document.querySelector("#newbie .box-container");
const juniorSection = document.querySelector("#junior .box-container");

db.forEach(({ name, image, level }) => {
    const nameFormatted = formatName(name);
    const listItem = document.createElement("div");
    listItem.classList.add("box");
    listItem.innerHTML = `
        <div class="img-wrapper">
            <img
                src="./${name}/design/${image}"
                alt=""
            />
        </div>
        <div class="info">
            <h3 class="title">${nameFormatted}</h3>
            <a class="code" href="https://github.com/ShadeVI/Frontend-Mentor-Challenges/tree/main/${name}"><i class="fab fa-github"></i></a>
            <a class="live" href="/${name}/index.html"><i class="far fa-eye"></i></a>
            <p class="level">${level}</p>
        </div>
    `;
    if (level === "Newbie") {
        newbieSection.appendChild(listItem);
    } else if (level === "Junior") {
        juniorSection.appendChild(listItem);
    }
});

function formatName(name) {
    const formattedWords = name.split("-").map((word) => {
        return word[0].toUpperCase().concat(word.slice(1));
    });

    return formattedWords.splice(0, formattedWords.length - 1).join(" ");
}
