function Header(props){
    const requiredLayout= props.layout=="row" ? "Column" : "Row";
    return (
        <>
            <h1>Retro Board</h1>
            <div>
                Layout &nbsp;<button onClick={()=>{
                    if(requiredLayout=="Column")
                    {
                        props.setLayout("column");
                    }
                    else
                    {
                        props.setLayout("row");
                    }
                }} className="button button-default">Change to: {requiredLayout}</button>
            </div>
        </>
    );
}
export default Header;