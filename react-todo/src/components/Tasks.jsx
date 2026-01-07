const Tasks = () => {
    const lists = [
        {
            name: "カレーの食材を購入",
            tag: "task",
        },
        {
            name: "カレーの食材を購入",
            tag: "event",
        },
        {
            name: "カレーの食材を購入",
            tag: "others",
        },
    ];

    return (
        <div className="todo_lists">
            {lists.map((list) => {
                return (
                    <div className="todo_list">
                        <div className="task_name">
                            <h2>{list.name}</h2>
                            <div className="tags">
                                <span className={`${list.tag}_tag`}>タスク</span>
                            </div>
                        </div>
                        <div className="task_check">
                            <input type="checkbox" />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Tasks;
