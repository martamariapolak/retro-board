import { useContext } from "react";
import { CategoryContext  } from "../category/Category";

function RemoveButton(props){
    const context= useContext(CategoryContext);
    function deleteItem(indexToDelete){
        props.setItems(context.items.filter((item,index)=>{
            return `item${indexToDelete}`!=item.key;
        }))
    }
    return(
        <>
        <button type="button" className="button button-delete" title="delete" onClick={()=>deleteItem(props.index)}>
            Delete
        </button>
        </>
    )
}
export default RemoveButton;