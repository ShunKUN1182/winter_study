import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import TaskSeatch from "./components/TaskSeatch";

const Main = () => {
    return (
        <>
            <Header />
            <TaskSeatch />
        </>
    );
};

export default Main;
