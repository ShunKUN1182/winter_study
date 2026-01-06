import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import TaskSeatch from "./components/TaskSeatch";
import Tasks from "./components/Tasks";

const Main = () => {
    return (
        <>
            <Header />
            <TaskSeatch />
            <Tasks />
        </>
    );
};

export default Main;
