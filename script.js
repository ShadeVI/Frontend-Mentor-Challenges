const db = [
    {
        name: "faq-accordion-card-main",
        level: "Newbie",
    },
    {
        name: "profile-card-component-main",
        level: "Newbie",
    },
    {
        name: "single-price-grid-component-master",
        level: "Newbie",
    },
    {
        name: "social-proof-section-master",
        level: "Newbie",
    },
    {
        name: "four-card-feature-section-master",
        level: "Newbie",
    },
    {
        name: "ping-coming-soon-page-master",
        level: "Newbie",
    },
    {
        name: "testimonials-grid-section-main",
        level: "Junior",
    },
    {
        name: "insure-landing-page-master",
        level: "Junior",
    },
];

const newbieSection = document.querySelector("#newbie .box-container");
const juniorSection = document.querySelector("#junior .box-container");

db.forEach(({ name, level }) => {
    const nameFormatted = formatName(name);
    const listItem = document.createElement("div");
    listItem.classList.add("box");
    listItem.innerHTML = `
        <div class="img-wrapper">
            <img
                src="./${name}/design/desktop-design.jpg"
                alt=""
            />
        </div>
        <div class="info">
            <h3 class="title"><a href="/${name}/index.html">${nameFormatted}</a></h3>
            <a class="code" href="https://github.com/ShadeVI/Frontend-Mentor-Challenges/tree/main/${name}"><i class="fab fa-github"></i></a>
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
