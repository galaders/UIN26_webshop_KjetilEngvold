export default function Todo({title, content, id, setTodoList}){
    const handelClick = () => {
        setTodoList((prev) => prev.filter(item => item.id !== id ))
        console.log(id) 
    }
    return (
        <article className="todo-card">
            <h3>{title}</h3>
            <p>{content}</p>
            <button onClick={handelClick}>Done</button>
        </article>
    )
}