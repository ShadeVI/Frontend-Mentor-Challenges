const db = [
  {
    name: "faq-accordion-card-main",
    image: "desktop-design.jpg",
    level: "Newbie",
    skills: ["HTML", "CSS", "JS"],
  },
  {
    name: "profile-card-component-main",
    image: "desktop-design.jpg",
    level: "Newbie",
    skills: ["HTML", "CSS"],
  },
  {
    name: "profile-card-component-scss-main",
    image: "desktop-design.jpg",
    level: "Newbie",
    skills: ["HTML", "SCSS"],
  },
  {
    name: "single-price-grid-component-master",
    image: "desktop-design.jpg",
    level: "Newbie",
    skills: ["HTML", "CSS"],
  },
  {
    name: "social-proof-section-master",
    image: "desktop-design.jpg",
    level: "Newbie",
    skills: ["HTML", "CSS"],
  },
  {
    name: "four-card-feature-section-master",
    image: "desktop-design.jpg",
    level: "Newbie",
    skills: ["HTML", "CSS"],
  },
  {
    name: "ping-coming-soon-page-master",
    image: "desktop-design.jpg",
    level: "Newbie",
    skills: ["HTML", "CSS", "JS"],
  },
  {
    name: "testimonials-grid-section-main",
    image: "desktop-design.jpg",
    level: "Junior",
    skills: ["HTML", "CSS"],
  },
  {
    name: "insure-landing-page-master",
    image: "desktop-design.jpg",
    level: "Junior",
    skills: ["HTML", "CSS", "JS"],
  },
  {
    name: "huddle-landing-page-with-single-introductory-section-master",
    image: "desktop-design.jpg",
    level: "Newbie",
    skills: ["HTML", "CSS"],
  },

  {
    name: "coding-bootcamp-testimonials-slider-master",
    image: "desktop-design-slide-1.jpg",
    level: "Newbie",
    skills: ["HTML", "CSS", "JS"],
  },

  {
    name: "project-tracking-intro-component-master",
    image: "desktop-design.jpg",
    level: "Junior",
    skills: ["HTML", "CSS", "JS"],
  },

  {
    name: "article-preview-component-master",
    image: "desktop-design.jpg",
    level: "Newbie",
    skills: ["HTML", "CSS", "JS"],
  },

  {
    name: "stats-preview-card-component-master",
    image: "desktop-design.jpg",
    level: "Newbie",
    skills: ["HTML", "CSS"],
  },

  {
    name: "qr-code-component-master",
    image: "desktop-design.jpg",
    level: "Newbie",
    skills: ["HTML", "CSS"],
  },

  {
    name: "nft-preview-card-component-master",
    image: "desktop-design.jpg",
    level: "Newbie",
    skills: ["HTML", "CSS"],
  },

  {
    name: "advice-generator-app-master",
    image: "desktop-design.jpg",
    level: "Junior",
    skills: ["HTML", "CSS", "JS"],
  },

  {
    name: "loopstudios-landing-page-master",
    image: "desktop-design.jpg",
    level: "Junior",
    skills: ["HTML", "CSS", "JS"],
  },

  {
    name: "order-summary-component-master",
    image: "desktop-design.jpg",
    level: "Newbie",
    skills: ["HTML", "CSS"],
  },

  {
    name: "3-column-preview-card-component-master",
    image: "desktop-design.jpg",
    level: "Newbie",
    skills: ["HTML", "CSS"],
  },
  {
    name: "interactive-rating-component-master",
    image: "desktop-design.jpg",
    level: "Newbie",
    skills: ["HTML", "CSS", "JS"],
  },
  {
    name: "intro-section-with-dropdown-navigation-master",
    image: "desktop-design.jpg",
    level: "Junior",
    skills: ["HTML", "CSS", "JS"],
  },
  {
    name: "static-job-listings-master",
    image: "desktop-design.jpg",
    level: "Intermediate",
    skills: ["HTML", "CSS", "JS", "React", "ContextAPI", "useReducer"],
    ext_preview: "https://leafy-mochi-115325.netlify.app/"
  },
];

const newbieSection = document.querySelector("#newbie .box-container");
const juniorSection = document.querySelector("#junior .box-container");
const intermediateSection = document.querySelector("#intermediate .box-container");

const btnsSection = document.querySelectorAll(".btn-section");

btnsSection.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const { sectionRef } = e.currentTarget.dataset;
    toggleSection(sectionRef);
    btnsSection.forEach(btn => {
      if (btn.dataset.sectionRef == sectionRef) {
        btn.classList.toggle("btn-section--open");
      } else {
        btn.classList.remove("btn-section--open");
      }
    })
  })
  
);

db.forEach(({ name, image, level, skills, ext_preview }) => {
  const nameFormatted = formatName(name);
  const listSkillsFormatted = formatSkillsList(skills);

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
            <p class="skills">${listSkillsFormatted}</p>
            <a class="code" href="https://github.com/ShadeVI/Frontend-Mentor-Challenges/tree/main/${name}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
            <a class="live" href="${ext_preview ? ext_preview : `/${name}/index.html`}"  target="_blank" rel="noopener noreferrer"><i class="far fa-eye"></i></a>
            <p class="level">Level: ${level}</p>
        </div>
    `;
  if (level === "Newbie") {
    newbieSection.appendChild(listItem);
  } else if (level === "Junior") {
    juniorSection.appendChild(listItem);
  } else if (level === "Intermediate") {
    intermediateSection.appendChild(listItem);
  }
});

function formatName(name) {
  const formattedWords = name
    .split("-")
    .map((word) => word[0].toUpperCase().concat(word.slice(1)));

  return formattedWords.splice(0, formattedWords.length - 1).join(" ");
}

function formatSkillsList(listSkills) {
  const stringList = listSkills.join(" - ");
  return stringList;
}

function toggleSection(sectionRef) {
  const sections = document.querySelectorAll(
    `.box-container[data-section-name]`
  );
  sections.forEach((section) => {
    if (section.dataset.sectionName == sectionRef) {
      section.classList.toggle("box-container--close");
    } else {
      section.classList.add("box-container--close");
    }
  });
}
