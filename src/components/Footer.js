import React from "react";

const Footer = () => {
    return (
        <footer className="text-lightGold p-4 text-center">
            <div className="flex justify-center items-center space-x-6">
                <a
                    href="https://github.com/norashala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-diamond"
                >
                    <i className="fab fa-github"></i> GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/nora-shala-82bb72225/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-diamond"
                >
                    <i className="fab fa-linkedin-in"></i> LinkedIn
                </a>
                <a
                    href="https://twitter.com/theAMuseMint"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-diamond"
                >
                    <i className="fab fa-twitter"></i> Twitter
                </a>
            </div>
        </footer>
    );
};

export default Footer;
