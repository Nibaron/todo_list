const Showtask = () => {
    const tasks=[
        {id:1001, name:"Wake Up Early", time:"6:00:00 AM 8/19/2023"},
        {id:2001, name:"Practice Leetcode Daily",time:"7:22:19 AM 8/17/2023"},
        {id:3001, name:"Complete REACT project",time:"12:09:58 PM 8/12/2023"}
    ]
    
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
                    <span className="count">3</span>
                    <button style={{ marginLeft: "auto" }} className="clearAll">
                        Clear All
                    </button>
                </div>
            </div>
            <ul>
                {tasks.map((task) => {
                    return (
                        <li>
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
