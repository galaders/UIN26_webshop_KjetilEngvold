import Todo from "./Todo";
export default function Todos(){

    const todoItems = [
        {
            id: 0,
            title: "Dra på butikken",
            concent: "Handle spaghetti og dorul",
        },
         {
            id: 1,
            title: "skriv handlemat",
            concent: "gå gjennom klessbutikken",
        },
         {
            id: 2,
            title: "Kjøpe ingredienser",
            concent: "Handle tacoingredienser",
        },
    ]


    
    return (
       <section>
            <h2>Todos</h2>
            <Todo />
       </section>
    )
}