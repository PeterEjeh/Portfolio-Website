import React from 'react';
import type { SkillCategory, Service, Project } from './types';

// Icons
export const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#64ffda]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

export const DataIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#64ffda]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);

export const CloudIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#64ffda]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
);

export const SocialIcons = {
    github: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    ),
    linkedin: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
    ),
};


// Data
export const SKILLS_DATA: SkillCategory[] = [
    {
        category: "Programming Languages",
        skills: [
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
            { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-plain.svg" },
            { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
            { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        ],
    },
    {
        category: "Frameworks & Tools",
        skills: [
            { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
            { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
            { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
            { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
            { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
            { name: "AWS Amplify", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aws/aws-original.svg" },
            { name: "API Gateway", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aws/aws-original.svg" },
            { name: "Lambda", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aws/aws-original.svg" },
        ],
    },
    {
        category: "Data Tools",
        skills: [
            { name: "Excel", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path fill='%231D6C41' d='M85.3,9.5H14.7C11.8,9.5,9.5,11.8,9.5,14.7v70.6c0,2.9,2.3,5.2,5.2,5.2h70.6c2.9,0,5.2-2.3,5.2-5.2V14.7 C90.5,11.8,88.2,9.5,85.3,9.5z M50,82.2h-12V65h12V82.2z M50,59.8h-12V42.6h12V59.8z M50,37.4h-12V20.2h12V37.4z M76.8,82.2H52.4 V65h24.3V82.2z M76.8,59.8H52.4V42.6h24.3V59.8z M76.8,37.4H52.4V20.2h24.3V37.4z'/></svg>" },
            { name: "Power BI", icon: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path fill='%23F2C811' d='M10.5,82.2V17.8h30.1v64.5H10.5z M45.8,82.2V46.7h20.1v35.5H45.8z M71.1,82.2V17.8h18.4v64.5H71.1z'/></svg>" },
            { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
            { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
            { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" },
            { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
        ],
    },
    {
        category: "Cloud & Deployment",
        skills: [
            { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
            { name: "Heroku", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/heroku/heroku-original.svg" },
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        ],
    },
    {
        category: "Soft Skills",
        skills: [
            { name: "Analytical thinking", icon: "" },
            { name: "Teamwork", icon: "" },
            { name: "Problem-solving", icon: "" },
            { name: "Communication", icon: "" },
            { name: "Teaching", icon: "" },
        ],
    },
];

export const SERVICES_DATA: Service[] = [
    {
        icon: <CodeIcon />,
        title: 'Web Development',
        description: 'Building dynamic, user-friendly, and scalable web applications using Django, Flutter, and AWS. Includes full-stack development, API design, authentication, and deployment.'
    },
    {
        icon: <DataIcon />,
        title: 'Data Analytics & Machine Learning',
        description: 'Turning raw data into actionable insights using Python, Power BI, and Excel. From exploratory data analysis and predictive modeling to data visualization and business reports.'
    },
    {
        icon: <CloudIcon />,
        title: 'Cloud & Automation',
        description: 'Leveraging cloud services to build secure, scalable, and cost-effective systems. Specializing in AWS serverless setup, workflow automation, and CI/CD integration.'
    }
];

export const PROJECTS_DATA: Project[] = [
    {
        image: 'https://picsum.photos/seed/project1/400/300.webp',
        title: 'Retail Sales Data Analysis',
        description: 'Performed exploratory data analysis on retail transactions to uncover sales trends and customer purchase patterns.',
        tags: ['Python', 'Pandas', 'Matplotlib'],
        liveUrl: '#',
        codeUrl: '#'
    },
    {
        image: 'https://picsum.photos/seed/project2/400/300.webp',
        title: 'Wine Quality Prediction',
        description: 'Developed a machine learning model to predict wine quality based on physicochemical properties.',
        tags: ['Python', 'Scikit-learn', 'Pandas'],
        liveUrl: '#',
        codeUrl: '#'
    },
    {
        image: 'https://picsum.photos/seed/project3/400/300.webp',
        title: 'Fraud Detection System',
        description: 'Built a classification model to detect fraudulent financial transactions using anomaly detection techniques.',
        tags: ['Python', 'Scikit-learn'],
        liveUrl: '#',
        codeUrl: '#'
    },
    {
        image: 'https://picsum.photos/seed/project4/400/300.webp',
        title: 'PetesGram',
        description: 'A multimedia sharing web platform similar to Instagram, built with Django and Flutter for frontend.',
        tags: ['Django', 'Flutter', 'Bootstrap', 'AWS S3'],
        liveUrl: '#',
        codeUrl: '#'
    },
    {
        image: 'https://picsum.photos/seed/project5/400/300.webp',
        title: 'PoliGrain',
        description: 'A serverless agri-investment platform enabling investors and farmers to collaborate via smart contracts and AWS backend.',
        tags: ['Flutter', 'AWS Lambda', 'DynamoDB', 'API Gateway'],
        liveUrl: '#',
        codeUrl: '#'
    },
    {
        image: 'https://picsum.photos/seed/project6/400/300.webp',
        title: 'GreenBloc',
        description: 'A blockchain-based crowdfunding suite promoting transparency in environmental and sustainability projects.',
        tags: ['Solidity', 'AWS', 'Python', 'Django'],
        liveUrl: '#',
        codeUrl: '#'
    }
];