const projectsContainer = document.querySelector("#projects");

const ALL = "All",
    FEATURED = "Featured",
    WEB = "Web",
    MOBILE = "Mobile",
    NPM = "Npm";

const data = [
    {
        title: "Dev Care",
        subtitle: "One stop solution for developers to take care of their health!",
        imageUrl: "./assets/apps/devcare.png",
        liveUrl: "https://devcare.netlify.app/",
        githubUrl: "https://github.com/siddhigate/dev-care-app",
        type: [ALL, FEATURED, WEB],
    },
    {
        title: "Get Interview Ready",
        subtitle: "Nail tech interviews with your favourite prep app!",
        imageUrl: "./assets/apps/getinterviewready.png",
        liveUrl: "https://getinterviewready.vercel.app/",
        githubUrl: "https://github.com/get-interview-ready",
        type: [ALL, FEATURED, WEB],
    },
    {
        title: "Link Preview",
        subtitle: "Generate and integrate link preview in your app seamlessly!",
        imageUrl: "./assets/apps/linkpreview.png",
        liveUrl: "https://get-link-preview.vercel.app/",
        githubUrl: "https://github.com/siddhigate/link-preview",
        type: [ALL, FEATURED, WEB, NPM],
    },

    {
        title: "Eye Care",
        subtitle: "Will help you to take care of your eyes while working!",
        imageUrl: "./assets/apps/eyecare.png",
        liveUrl: "https://eyecare-app.netlify.app/",
        githubUrl: "https://github.com/siddhigate/eye-care",
        type: [ALL, FEATURED, WEB],
    },
    {
        title: "ChattGattor",
        subtitle: "Integrate chat functionality in your app without any hassle!",
        imageUrl: "./assets/apps/chattgattor.png",
        liveUrl: "https://chattgator.netlify.app/",
        githubUrl: "https://github.com/ChattGator",
        type: [ALL, FEATURED, WEB, NPM],
    },
    {
        title: "Dev Case",
        subtitle: "Generate your developer portfolio and Showcase your skills!",
        imageUrl: "./assets/apps/devcase.png",
        liveUrl: "https://devcase.vercel.app/",
        githubUrl: "https://github.com/siddhigate/devCase",
        type: [ALL, WEB],
    },
    {
        title: "Roadmaps",
        subtitle: "Generate your developer portfolio and Showcase your skills!",
        imageUrl: "./assets/apps/roadmap.png",
        liveUrl: "https://user-frontend-ecru.vercel.app/",
        githubUrl: "https://github.com/TeamRoadmap",
        type: [ALL, WEB],
    },
    {
        title: "Upsleek UI",
        subtitle:
            "A modern, sleek and accessible library to build your websites faster!",
        imageUrl: "./assets/apps/upsleekui.png",
        liveUrl: "https://upsleek-ui.vercel.app/",
        githubUrl: "https://github.com/siddhigate/upsleek-css-component-library",
        type: [ALL, WEB],
    },
    // {
    //     title: "Memory Game",
    //     subtitle: "Test and challenge your memory with a fun memory game!",
    //     imageUrl: "./assets/apps/linkpreview.png",
    //     liveUrl: "",
    //     githubUrl: "",
    //     type: [ALL, WEB],
    // },
    {
        title: "Sorting Visualizer",
        subtitle:
            "Understand the working of sorting algorithm using Sorting Visualizer!",
        imageUrl: "./assets/apps/sorting.png",
        liveUrl: "https://sortingalgorithmsvisualizer.netlify.app/",
        githubUrl: "https://github.com/siddhigate/sorting-visualizer",
        type: [ALL, WEB],
    },

    {
        title: "Lucky Birthday",
        subtitle: "Find if your birthday is lucky or not using Lucky Birthday app!",
        imageUrl: "./assets/apps/luckybday.png",
        liveUrl: "https://lucky-birthday-siddhi.netlify.app/",
        githubUrl: "https://github.com/siddhigate/lucky-birthday",
        type: [ALL, WEB],
    },
    {
        title: "Lift simulator",
        subtitle: "Simulates the working of lifts handling multiple requests!",
        imageUrl: "./assets/apps/liftsimulation.png",
        liveUrl: "https://lifts.netlify.app/",
        githubUrl: "https://github.com/siddhigate/lift-simulation",
        type: [ALL, WEB],
    },

    {
        title: "Projectile Game",
        subtitle: "Relieve your stress by playing this fun projectile game!",
        imageUrl: "./assets/apps/projectilegame.png",
        liveUrl: "https://the-projectile-game.netlify.app/",
        githubUrl: "https://github.com/siddhigate/projectile-game",
        type: [ALL, WEB],
    },
    {
        title: "Palindrome Birthday",
        subtitle:
            "Find if your birthday is a palindrome or not using Palindrome Birthday app!",
        imageUrl: "./assets/apps/bdaypalindrome.png",
        liveUrl: "https://birthday-palindrome-siddhi.netlify.app/",
        githubUrl: "https://github.com/siddhigate/birthday_palindrome",
        type: [ALL, WEB],
    },
    {
        title: "Fun with Triangles",
        subtitle:
            "Have fun with triangles by playing triangles quiz and doing triangles math!",
        imageUrl: "./assets/apps/triangles.png",
        liveUrl: "https://fun-with-triangles-siddhi.netlify.app/",
        githubUrl: "https://github.com/siddhigate/fun-with-triangles",
        type: [ALL, WEB],
    },
    {
        title: "Ferb Latin Speak",
        subtitle:
            "Translate English to Ferb Latin language and have fun with your friends!",
        imageUrl: "./assets/apps/ferblatin.png",
        liveUrl: "https://ferb-latin-speak-siddhi.netlify.app/",
        githubUrl: "https://github.com/siddhigate/ferb-latin-speak",
        type: [ALL, WEB],
    },
    {
        title: "Minion Translator",
        subtitle:
            "Translate English to Minion's language and decode what they say!",
        imageUrl: "./assets/apps/minion.png",
        liveUrl: "https://minion-banana-speak-siddhi.netlify.app/",
        githubUrl: "https://github.com/siddhigate/minion-banana-speak",
        type: [ALL, WEB],
    },
    {
        title: "Cash Register",
        subtitle: "Your cash register will help you find how much cash to return!",
        imageUrl: "./assets/apps/cashregister.png",
        liveUrl: "https://cash-register-siddhi.netlify.app/",
        githubUrl: "https://github.com/siddhigate/cash-register",
        type: [ALL, WEB],
    },
    {
        title: "Brooklyn 99 Quiz",
        subtitle:
            "Try this quiz and find out how much of a real Brooklyn99 fan are you!",
        imageUrl: "./assets/apps/b99cli.png",
        liveUrl: "https://replit.com/@SiddhiCodes/brooklyn99-quiz?embed=1&output=1",
        githubUrl: "https://github.com/siddhigate/brooklyn99-cli-quiz",
        type: [ALL],
    },
    {
        title: "Link state routing",
        subtitle:
            "Implementation of link state routing algorithm used in OSPF protocol.",
        imageUrl: "./assets/apps/linkstaterouting.png",
        liveUrl: "https://replit.com/@SiddhiCodes/LinkStateRouting",
        githubUrl: "https://github.com/siddhigate/link-state-routing-implementation",
        type: [ALL],
    },
    // {
    //     title: "Expenser",
    //     subtitle:
    //         "Your own simple personal expense tracker to manage your expenses!",
    //     imageUrl: "./assets/apps/expenser.png",
    //     liveUrl: "",
    //     githubUrl: "",
    //     type: [ALL, MOBILE],
    // },
    // {
    //     title: "Study Buddy",
    //     subtitle:
    //         "Your own study buddy will help you study and get the tasks done!",
    //     imageUrl: "./assets/apps/studybuddy.png",
    //     liveUrl: "",
    //     githubUrl: "",
    //     type: [ALL, MOBILE],
    // },
    // {
    //     title: "Elderly Care",
    //     subtitle: "An app that will help you to take care of your elders!",
    //     imageUrl: "./assets/apps/elderlycare.png",
    //     liveUrl: "",
    //     githubUrl: "",
    //     type: [ALL, MOBILE],
    // },
    {
        title: "GitHub Profile Finder",
        subtitle:
            "Find any GitHub profile easily using this GitHub profile finder!",
        imageUrl: "./assets/apps/githubfinder.png",
        liveUrl: "https://github-profile-finder-siddhi.netlify.app/",
        githubUrl: "https://github.com/siddhigate/github-profile-finder",
        type: [ALL, WEB],
    },
    {
        title: "Stock Profit or Loss",
        subtitle:
            "Find if your stock is in profit or loss using Stock Profit or Loss!",
        imageUrl: "./assets/apps/stock.png",
        liveUrl: "https://stock-profit-loss-siddhi.netlify.app/",
        githubUrl: "https://github.com/siddhigate/stock-profit-loss",
        type: [ALL, WEB],
    },
];

function createElement(className = [], attributes = {}, type = "div") {
    try {
        const el = document.createElement(type);
        className.forEach((name) => el.classList.add(name));

        Object.keys(attributes).forEach((key) =>
            el.setAttribute(key, attributes[key])
        );

        return el;
    } catch (e) {
        console.error("Error in creating element:: ", e);
    }
}

function emptyElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function createProjectCard(project, index) {
    const card = createElement(["project-card"], {}, "section");

    const image = createElement(
        ["project-image"],
        { src: project.imageUrl },
        "img"
    );

    const title = createElement(["project-title", "mt-3"], {}, "h2");
    title.textContent = project.title;

    const subtitle = createElement(["project-subtitle"], {}, "p");
    subtitle.textContent = project.subtitle;

    const liveUrl =
        index % 2 === 0
            ? createElement(
                ["link", "link-primary", "link-pink"],
                {
                    href: project.liveUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                },
                "a"
            )
            : createElement(
                ["link", "link-primary", "link-purple"],
                {
                    href: project.liveUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                },
                "a"
            );
    liveUrl.textContent = "Live Demo";

    const githubUrl =
        index % 2 === 0
            ? createElement(
                ["link", "link-secondary", "link-secondary-pink"],
                {
                    href: project.liveUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                },
                "a"
            )
            : createElement(
                ["link", "link-secondary", "link-secondary-purple"],
                {
                    href: project.liveUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                },
                "a"
            );
    githubUrl.textContent = "View Source";

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(subtitle);
    card.appendChild(liveUrl);
    card.appendChild(githubUrl);

    return card;
}

function markActivePill(pills, category) {
    for(let pill of pills) {
        if(pill.dataset.category === category) {
            pill.classList.add("active");
        } 
        else {
            pill.classList.remove("active");
        }
    }
}

function renderProjects(pills, category) {
    emptyElement(projectsContainer);
    markActivePill(pills, category);
    data.forEach((project, index) => {
        if (project.type.includes(category)) {
            const card = createProjectCard(project, index);
            projectsContainer.appendChild(card);
        }
    });
}

const pills = document.querySelectorAll(".pill");

for (let pill of pills) {
    pill.addEventListener("click", () => renderProjects(pills, pill.dataset.category));
}

// renderProjects(pills, "All");
