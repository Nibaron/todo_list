const Showtask = ({taskList, setTaskList, task, setTask}) => {

    const handleEdit =(id)=>{
        const selectedTask = taskList.find( todo => todo.id === id);
        //console.log(selectedTask);
        setTask(selectedTask);
    }

    const handleDelete=(id)=>{
        const updatedtaskList = taskList.filter( todo=> todo.id !== id );
        setTaskList(updatedtaskList);
    }

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
                    <button
                        onClick={() => setTaskList([])}
                        style={{ marginLeft: "auto" }}
                        className="clearAll"
                    >
                        Clear All
                    </button>
                </div>
            </div>
            <ul>
                {taskList.map((todo) => {
                    return (
                        <li key={todo.id}>
                            <p>
                                <span className="name"> {todo.name}</span>
                                <span className="time"> {todo.time}</span>
                            </p>
                            <i
                                onClick={() => handleEdit(todo.id)}
                                className="bi bi-pencil-square"
                            ></i>
                            <i
                                onClick={() => handleDelete(todo.id)}
                                className="bi bi-trash"
                            ></i>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Showtask;
