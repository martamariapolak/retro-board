import RetrospectiveItem from "../retrospective-item/RetrospectiveItem";

function AddButton(props){
    return(
    <>
        <button type="button"className="ButtonAdd button button-default" aria-label="Add new card" onClick={()=>{
            const key=`item${props.items.length}`;
            props.setItems([...props.items, <RetrospectiveItem key={key} index={props.items.length} items={props.items}setItems={props.setItems}/>]);
        }}>
        +
        </button>
    </>
    );
}
export default AddButton;