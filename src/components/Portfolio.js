import React from "react";

const Portfolio = () => {
    const projects = [
        { name: "Note Taker", url: "https://github.com/norashala/Note-Taker" },
        {
            name: "README Generator",
            url: "https://github.com/norashala/README-generator-",
        },
        {
            name: "Employee Tracker",
            url: "https://github.com/norashala/SQL-Challenge-Employee-Tracker",
        },
        {
            name: "Weather App",
            url: "https://github.com/norashala/Weather-Challenge-",
        },
        {
            name: "Task Board",
            url: "https://github.com/norashala/Task-Board-Project-",
        },
        {
            name: "Our Utopia (coming soon)",
            url: "https://github.com/norashala/Our-Utopia",
        },
    ];

    return (
        <div className="text-lightGold p-8">
            <h2 className="text-3xl font-bold mb-4">
                My Tech Portfolio
            </h2>
            <img
                src="/github.png"
                alt="Profile of Nora"
                className="mx-2 mb-4 w-48 h-48 object-cover rounded-full object-top"
            />

            <ul className="space-y-4">
                {projects.map((project) => (
                    <li key={project.name} className="text-xl hover:text-white">
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            {project.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Portfolio;
