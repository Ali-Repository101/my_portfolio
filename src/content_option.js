import images_portfolio from "./assets/images/arshad_port2.png";
import resume_url from "./assets/pdfs/arshad_ali_cv .pdf";
const logotext = "Arshad";
const meta = {
    title: "Arshad Ali",
    description: "I’m Arshad Ali Full stack devloper,currently working in Mohali, India. I love to create beautiful and scalable web applications using React, Node.js, and MongoDB.",
};

const introdata = {
    title: "I’m Arshad Ali",
    animated: {
        "first": "I am a skilled MERN stack developer",
        "second": "I build high-performance web applications",
        "third": "I develop scalable and responsive web solutions",
    },
    description: "MERN Stack developer with 2+ years in building fast, user-friendly web applications. Proficient in creating UI components managing state, and optimizing performance. Skilled in collaborating with teams to deliver high-quality solutions.",
    your_img_url: images_portfolio || "https://photos.fife.usercontent.google.com/pw/AP1GczOW0tZyhXDgl71IVCM0-0w0nNWFjkdpfc08K4YUuBbeG7UEx6F7VqB2oQ=w699-h932-s-no-gm?authuser=0",
    your_resume_url: resume_url,
};

const dataabout = {
    title: "About Me",
    aboutme: "I am a MERN Stack Developer with experience in building scalable web applications using MongoDB, Express.js, React, and Node.js. Passionate about clean code, RESTful APIs, and real-time applications using WebSockets. Always eager to learn and explore new technologies."
};

const worktimeline = [
    {
        jobtitle: "MERN Stack Developer",
        where: "Myspy Security",
        date: "2023 - Present",
    },
    {
        jobtitle: "React.js Developer",
        where: "Freelance",
        date: "2022 - 2023",
    },
    {
        jobtitle: "Frontend Developer Intern",
        where: "Startup Company",
        date: "2021 - 2022",
    },
];


const skills = [
    {
        name: "JavaScript",
        value: 90,
    },
    {
        name: "TypeScript",
        value: 80,
    },
    {
        name: "React.js",
        value: 85,
    },
    {
        name: "Node.js",
        value: 80,
    },
    {
        name: "Express.js",
        value: 75,
    },
    {
        name: "MongoDB",
        value: 80,
    },
    {
        name: "Git",
        value: 85,
    },
    {
        name: "AWS (S3, EC2)",
        value: 60,
    }
];


const services = [
    {
        title: "Web Development",
        description: "Building scalable and high-performance web applications using MERN stack (MongoDB, Express.js, React.js, Node.js).",
    },
    {
        title: "Frontend Development",
        description: "Creating modern, responsive, and interactive UI/UX designs using React.js, Tailwind CSS, and Bootstrap.",
    },
    {
        title: "Backend Development",
        description: "Developing robust REST APIs and real-time applications using Node.js, Express.js, MongoDB, and AWS.",
    },
    {
        title: "Cloud & DevOps",
        description: "Deploying and managing applications on AWS (S3, EC2, Lambda) with CI/CD pipelines and Docker.",
    },
    {
        title: "Version Control & Collaboration",
        description: "Ensuring smooth team collaboration and code management with Git, GitHub, and Bitbucket.",
    }
];


const dataportfolio = [
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "A full-stack MERN application with user authentication and dashboard.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/800/?grayscale",
        description: "An e-commerce platform using React, Redux, Node.js, and MongoDB.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "A real-time chat application with Socket.IO and React.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "A project management tool with Kanban boards and task tracking.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "A social media platform with JWT authentication and MongoDB.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "A video streaming app using React and Node.js with AWS S3 integration.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale",
        description: "A SaaS-based invoicing system with payment gateway integration.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale",
        description: "A fitness tracking web app built with React and Express.js.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "A blog website with markdown support and MongoDB backend.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale",
        description: "An AI-powered chatbot using MERN and OpenAI API.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/?grayscale",
        description: "A job board platform with filtering and search functionality.",
        link: "#",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale",
        description: "An IoT dashboard for monitoring real-time data from sensors.",
        link: "#",
    },
];

export default dataportfolio;


const contactConfig = {
    YOUR_EMAIL: "arshadalik526@gmail.com",
    YOUR_FONE: "(+91) 781476-7071",
    description: "Hello, I am interested in the job opening. Please review my resume and get back to me.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_ddxk1yg",
    YOUR_TEMPLATE_ID: "template_xkk48mk",
    YOUR_USER_ID: "POn6wPz0f8nnCT2V-",
};

const socialprofils = {
    github: "https://github.com/Ali-Repository101",
    instagram: "https://www.instagram.com/mr._ali_101?igsh=NTZyMnJmdmYzYWFz",
    linkedin: "https://www.linkedin.com/in/arshad-ali-682729250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};