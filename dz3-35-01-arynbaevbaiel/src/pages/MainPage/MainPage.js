import React from 'react';
import './MainPage.css'
import Description from "../../components/Description/Description";

const MainPage = () => {
    const mainProps = {
        title: "Title",
        description: "Description"
    };

    return (
        <div className="div">
            <h1>Main Page</h1>
            <Description {...mainProps} />
        </div>
    );
};

export default MainPage;