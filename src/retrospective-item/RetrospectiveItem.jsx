import { useState } from "react";
import RemoveButton from '../remove-button/RemoveButton';

function RetrospectiveItem(props) {
    const [text,setText]=useState([]);
    return (
        <>
            <div className="RetroCard"aria-label="Retro card">
                <textarea className="textbox" placeholder="enter text here" aria-label="enter text here" row="1"value={text} onChange={(e)=>{
                    setText(e.target.value);
                }}>
                </textarea>
                <div className="button-group">
                    <button type="button" className="button button-left"title="Move left">
                    </button>
                    <RemoveButton index={props.index} items={props.items} setItems={props.setItems}/>
                    
                    <button type="button"className="button button-delete"title="Delete"></button>
                    <button type="button" className="button button-like" title="Like">
                            
                    </button>
                    <button type="button" className="button button-dislike" title="DisLike">
                         
                    </button>
                    <button type="button" className="button button-right"title="Move right">
                                              
                    </button>
                </div>
                </div>
            
        </>
    )

}
export default RetrospectiveItem;