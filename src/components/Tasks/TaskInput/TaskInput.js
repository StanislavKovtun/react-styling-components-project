import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";

const TaskInput = (props) => {
    const [inputText, setInputText] = useState("");
    const [isInputValid, setIsInputValid] = useState(true);

    const taskInputChangeHandler = (event) => {
        const value = event.target.value;
        setInputText(value);
        if (value.trim()) {
            setIsInputValid(true);
        }
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (!inputText.trim()) {
            setIsInputValid(false);
            //console.log(isInputValid);
            return;
        } else {
            props.onAddTask(inputText);
            setIsInputValid(true);
            setInputText('');
        }
        //console.log(isInputValid);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`form-control ${!isInputValid ? 'invalid' : ''}`}>
                <label>Tasks</label>
                <input type="text" value={inputText} onChange={taskInputChangeHandler} />
            </div>
            <Button type="submit">Add a task</Button>
        </form>
    );
};

export default TaskInput;
