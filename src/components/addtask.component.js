const Addtask = ({taskList, setTask}) => {

    const handleSubmit = (event) => {
        //create id, task, date
        
        event.preventDefault();
        const date = new Date();
        const task = {
            id: date.getTime(),
            name: event.target.task.value,
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
        };
        setTask([...taskList, task]);
        event.target.task.value="";
    };
    
    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="task"
                    autoComplete="off"
                    placeholder="add task"
                    maxLength={25}
                />
                <button type="submit">Add</button>
            </form>
        </section>
    );
}       
 
export default Addtask;
