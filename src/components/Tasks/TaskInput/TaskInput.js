import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import styles from "./TaskInput.module.css";

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
            return;
        } else {
            props.onAddTask(inputText);
            setIsInputValid(true);
            setInputText('');
        }
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`${styles['form-control']} ${!isInputValid && styles.invalid}`}>
                <label>Tasks</label>
                <input type="text" value={inputText} onChange={taskInputChangeHandler} />
            </div>
            <Button type="submit">Add a task</Button>
        </form>
    );
};

export default TaskInput;
