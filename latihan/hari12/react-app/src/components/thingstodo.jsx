function ToDo(props){
    return (
        // <div className="card">
        //     <h1 style={{color:props.color}}>Hello, {props.name}</h1>
        // </div>
        <div className="checkbox">
                <input type="checkbox" id={props.name} name={props.name} value={props.name} />
                <label for={props.name}>{props.name}</label> <br/>
        </div>
    )
}

export default ToDo
