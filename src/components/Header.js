import React from "react";
import Navigation from "./Navigation"; // Make sure the import path is correct

const Header = () => {
    return (
        <header className="bg-magenta text-gold p-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold">
                The Muse
            </h1>
            <div className="flex-grow pl-20 text-center">
                <Navigation />
            </div>
        </header>
    );
};

export default Header;
