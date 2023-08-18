const Showtask = ({taskList, setTask}) => {

    return (
        <section className="showTask">
            <div className="head">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <span className="title">Todo</span>
                    <span className="count">{taskList.length}</span>
                    <button onClick={()=>setTask([])} style={{ marginLeft: "auto" }} className="clearAll">
                        Clear All
                    </button>
                </div>
            </div>
            <ul>
                {taskList.map((task) => {
                    return (
                        <li key={task.id}>
                            <p>
                                <span className="name"> {task.name}</span>
                                <span className="time"> {task.time}</span>
                            </p>
                            <i className="bi bi-pencil-square"></i>
                            <i className="bi bi-trash"></i>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Showtask;
