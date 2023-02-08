import React, { useState } from "react";
import styled from 'styled-components';
import Button from "../../UI/Button/Button";
import "./TaskInput.css";

const FormControl = styled.div`

margin: 0.5rem 0;

& label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

& input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
}

& input:focus {
    outline: none;
    background: #c8e1e4;
    border-color: #00358b;
}

&.invalid input {
    border-color: red;
}

&.invalid label {
    color: red;
}
`;

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
            <FormControl className={!isInputValid && 'invalid'}>
                <label>Tasks</label>
                <input type="text" value={inputText} onChange={taskInputChangeHandler} />
            </FormControl>
            <Button type="submit">Add a task</Button>
        </form>
    );
};

export default TaskInput;
