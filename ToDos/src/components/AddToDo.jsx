export default function AddToDo(){
    return (
        <form>
            <label htmlFor="todotittle">Todo tittel</label>
            <input type="text" id="todotittle" placeholder="Dra på butikken"></input>
            <button>Make todo</button>
        </form>
    )
}