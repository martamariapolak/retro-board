import { createContext, useState  } from "react";
import AddButton from '../add-button/AddButton';

export const CategoryContext= createContext();

function Category(props){
    const [items,setItems]=useState([]);
    return (
        <CategoryContext.Provider value={{items,setItems}}>
            <div className={`RetroCategory RetroCategory-${props.index}`}>
                <h2>{props.title}</h2>
                <AddButton items={items} setItems={setItems}/>
                {items}
            </div>
        </CategoryContext.Provider>
    );
}
export default Category;