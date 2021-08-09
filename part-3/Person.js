function Person(props) {
    let { name, age, hobbies } = props;
    let message;

    if (age > 18) {
        message = "Please go vote";
    } else {
        message = "You must be 18";
    }

    if (name.length > 8) {
        name = name.slice(0, 6);
    }

    return (
        <div>
            <p>Learn more information about this person</p>
            <p>{name}</p>
            <p>{message}</p>
            <ul>{hobbies.map(hobby => <li>{hobby}</li>)}</ul>
        </div>
        
    )
}