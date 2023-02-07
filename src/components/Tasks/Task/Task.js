import React from "react";

import "./Task.css";

const Task = (props) => {
    // const [deleteText, setDeleteText] = useState('');

    const deleteHandler = () => {
        // setDeleteText('(Deleted!)');
        props.onDelete(props.id);
    };

    return (
        <li className="task-item">
            <div>
                {props.children}
            </div>
            <div className="del-btn" onClick={deleteHandler}>X</div>
        </li>
    );
};

export default Task;
