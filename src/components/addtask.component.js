const Addtask = ({ taskList, setTaskList, task, setTask }) => {
    const handleSubmit = (event) => {
        //create id, task, date
        event.preventDefault();

        if (task.id) {
            const date = new Date();
            const updatedtaskList = taskList.map((todo) =>
                todo.id === task.id
                    ? {
                          id: task.id,
                          name: task.name,
                          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
                      }
                    : todo
            );
            setTaskList(updatedtaskList);
            setTask({});
        } else {
            const date = new Date();
            const newTask = {
                id: date.getTime(),
                name: task.name,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            };
            setTaskList([...taskList, newTask]);
            setTask({});
        }
    };

    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="task"
                    value={task.name || ""}
                    autoComplete="off"
                    placeholder="add task"
                    maxLength={25}
                    onChange={ event => setTask({ ...task, name: event.target.value }) }
                />
                <button type="submit">Add</button>
            </form>
        </section>
    );
};

export default Addtask;
