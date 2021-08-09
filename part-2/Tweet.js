function Tweet(props) {
    const { username, name, date, message } = props;
    return (
        <div className="class">
            <p> {message} </p>
            <ul>
                <li>{username}</li>
                <li>{name}</li>
                <li>{date}</li>
            </ul>
        </div>
    )
}