import Category from '../category/Category';

function Board(props){
    return (
        <>
        <div className={`RetroApp ${props.layout}`}>
            <Category title="Went Well" index="1"/>
            <Category title="To improve" index="2"/>
            <Category title="Action items" index="3"/>
        </div>
        </>
    )
}
export default Board;