const navItems = [
    { text: "Home", url: "index.html" },
    { text: "About", url: "About.html"},
    { text: "Projects", url: "projects.html" },
    { text: "Contact", url: "contact.html" }
]

const navList = document.getElementById("nav");

let navHTML = "";

for (let item of navItems) {
    navHTML += `<a href="${item.url}">${item.text}</a>`;
}
if (navList) {
    navList.innerHTML = navHTML;
}

let internshipSearch = true;

let statuscontainer = document.getElementById("status");

if (statuscontainer) {
    if (internshipSearch == true) {
        statuscontainer.innerHTML = '<p style="color: green; font-weight: bold; margin-top: 10px;">Currently looking for internship opportunities!</p>';
    }
    else {
        statuscontainer.innerHTML = '<p style="color: black; font-weight: bold; margin-top: 10px;">Focused on Studies & Research</p>';
    }
}

const featuredProjects = [
    {
        title: "AI/ML Research",
        desc: "Educational research project at SJSU.",
        img: "#",
        className: "img1"
    },

    {
        title: "Bilingual Education Research",
        desc: "Educational research project at SJSU.",
        img: "#",
        className: "img2"
    },

    {
        title: "Contact",
        desc: "Interactive multi-page showcase.",
        img: "#",
        className: "img3",
    }
]

let imgList = document.getElementById("projects-grid");

if (imgList) {
    let imgHTML = "";

    for (let project of featuredProjects) {
        imgHTML += `<img src="${project.img}" alt="${project.title}" class="${project.className}">`;
    }

    imgList.innerHTML = imgHTML;
}

const projectsData = [
    {
        title: "AI/ML Educational Research",
        Category: "Research",
        description: "Educational research project at San José State University focusing on machine learning applications in learning environments.",
        techStack: ["Python", "Machine Learning", "Data Analysis"],
        link: "https://dl.acm.org/doi/10.1145/3770761.3777339",
    },
    {
        title: "Bilingual Education Research",
        Category: "Research",
        description: "Research",
        techStack: ["Data Analysis", "CSeD"],
        link: "https://csed-research-lab.org/",
    },
    {
        title: "Developer Portfolio",
        Category: "Web Development",
        description: "A responsive, multi-page portfolio built with custom CSS layout grids, DOM manipulation, and dynamic JavaScript loops.",
        techStack: ["JavaScript", "CSS Grid", "HTML5"],
        link: "#",
    }
]

let allProjects = document.getElementById("all-projects-grid");

if (allProjects) {
    let projHTML = "";

    for (let project of projectsData) {
        let techBadges = "";
        for (let tech of project.techStack) {
            techBadges += `<span class="tech-badge">${tech}</span>`;
        }

        projHTML += `
            <div class="project-card">
                <span class="project-category">${project.Category}</span>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-list">${techBadges}</div>
                <a href="${project.link}" class="project-link">View Details &rarr;</a>
            </div>
        `;
    }
    allProjects.innerHTML = projHTML;
}

// 1. Target the form and the feedback div
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

// 2. Wrap inside an 'if' so it only runs on pages that have the contact form
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        // Prevent default page reload on submit
        event.preventDefault();

        // Get values from input fields and remove extra whitespace using .trim()
        const nameValue = document.getElementById("name").value.trim();
        const emailValue = document.getElementById("email").value.trim();
        const messageValue = document.getElementById("message").value.trim();

        // CONDITIONAL VALIDATION CHECKS
        if (nameValue === "" || emailValue === "" || messageValue === "") {
            // Check 1: Are any fields blank?
            formFeedback.innerHTML = `<p style="color: red; font-weight: bold; margin-top: 10px;">⚠️ Please fill in all fields before sending.</p>`;
        }
        else if (!emailValue.includes("@") || !emailValue.includes(".")) {
            // Check 2: Does the email contain an @ and a dot?
            formFeedback.innerHTML = `<p style="color: red; font-weight: bold; margin-top: 10px;">⚠️ Please enter a valid email address.</p>`;
        }
        else {
            // Check 3: Everything is valid!
            formFeedback.innerHTML = `<p style="color: green; font-weight: bold; margin-top: 10px;">✅ Thank you, ${nameValue}! Your message has been sent.</p>`;

            // Clear the form fields after successful submission
            contactForm.reset();
        }
    });
}