import React from "react";

const About = () => {
    return (
        <div className="text-lightGold p-8">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <img
                src="/pfp.jpeg"
                alt="Profile of Nora"
                className="mx-2 mb-4 w-48 h-48 object-cover rounded-full object-top"
            />

            <p className="text-xl">
                Nora <span className="text-diamond">the Muse</span> is a
                passionate and creative web developer with a knack for building
                responsive and aesthetically pleasing websites. With a
                background in being awesome and several months of experience in
                front-end technologies, Nora excels at transforming ideas into
                beautifully crafted digital experiences. Whether working on
                large-scale web applications or small, dynamic projects, Nora
                brings a detail-oriented approach and a collaborative spirit to
                every team. When not coding, Nora enjoys not camping, traveling,
                eating, being funny, questioning the nature of the universe, and
                getting lost in music.
            </p>
        </div>
    );
};

export default About;
