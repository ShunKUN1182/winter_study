const Header = () => {
    return (
        <div className="headers">
            <div className="header">
                <h1>ToDo Tasks</h1>
                <div className="border">
                    <p></p>
                </div>
            </div>
            <div className="search-task">
                <label htmlFor="search-task">
                    <span class="material-symbols-outlined">search</span>
                    <input type="text" placeholder="タスクを検索" />
                </label>
            </div>
        </div>
    );
};

export default Header;
