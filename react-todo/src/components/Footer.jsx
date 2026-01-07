import { useState } from "react";

const Footer = () => {
    const [entaredList, setEntaredList] = useState("");
    const addList = (e) => {
        e.preventDefault();
        const newList = {
            name: entaredList,
            tag: "task",
        };
        setEntaredList("");
    };
    return (
        <div className="footer">
            <div className="search-task">
                <label htmlFor="">
                    <span class="material-symbols-outlined">search</span>
                    <input type="text" value={entaredList} />
                </label>
            </div>
            <button type="button" id="add_btn" onClick={addList}>
                ぼたんだよ
            </button>
        </div>
    );
};

export default Footer;
