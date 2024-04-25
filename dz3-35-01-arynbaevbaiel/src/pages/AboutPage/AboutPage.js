import React from 'react';
import './AboutPage.css'
import Description from "../../components/Description/Description";

const AboutPage = () => {
    const aboutProps = {
        title: "Title 2",
        description: "Description 2"
    };

    return (
        <div className="div">
            <div className="grandLine"></div>
            <h1>About Page</h1>
            <Description {...aboutProps} />
            <div className="sticks"></div>
        </div>
    );
};

export default AboutPage;