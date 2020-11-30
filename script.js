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

const newbieList = document.querySelector(".newbieList");
const juniorList = document.querySelector(".juniorList");

db.forEach(({ name, level }) => {
    const nameFormatted = formatName(name);
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <a href="/${name}/index.html">${nameFormatted}</a> - 
        <a href="https://github.com/ShadeVI/Frontend-Mentor-Challenges/tree/main/${name}">View Code</a>
    `;
    if (level === "Newbie") {
        newbieList.appendChild(listItem);
    } else if (level === "Junior") {
        juniorList.appendChild(listItem);
    }
});

function formatName(name) {
    const formattedWords = name.split("-").map((word) => {
        return word[0].toUpperCase().concat(word.slice(1));
    });

    return formattedWords.splice(0, formattedWords.length - 1).join(" ");
}
