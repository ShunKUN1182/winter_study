const Tasks = () => {
    return (
        <div className="todo_lists">
            <div className="todo_list">
                <div className="task_name">
                    <h2>カレーの食材を購入</h2>
                    <div className="tags">
                        <span className="task_tag">タスク</span>
                    </div>
                </div>
                <div className="task_check">
                    <input type="checkbox" />
                </div>
            </div>
        </div>
    );
};

export default Tasks;
