import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { useState } from "react";
import ErrorModal from '../UI/ErrorModules';


const AddUser = (props) =>{
const [enteredUsername, setEnteredUsername] = useState('');
const [enteredAge, setEnteredAge] = useState('');
const [error,setError] = useState();


const usernameChangeHandler = (event) =>{
    setEnteredUsername(event.target.value);
}

const ageChangeHandlr  = (event) =>{
    setEnteredAge(event.target.value);
}


    const addUserHandler = (event) =>{
        event.preventDefault();

        if(enteredUsername.trim().length === 0 || enteredAge.trim().length===0)
        {
            setError({
                title: 'Ivvalid input',
                message: 'please enter a valid name and age'
            })
            return;
        }
        if(+enteredAge < 0) 
        {
            setError(
                {
                    title: 'Ivvalid input',
                    message: 'please enter a valid  age(>0)'
                }
            )
            return;
            
        }
        props.onAddUser(enteredUsername, enteredAge);

        console.log(enteredUsername, enteredAge)

        setEnteredAge('');
        setEnteredUsername('');

    };

    const errorHandler=()=>
    {
        setError(null);
    }

    return(
        <div>
        { error && (
        <ErrorModal 
        title={error.title} 
        message={error.message} 
        onConfirm={errorHandler}/>
        )}

        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text"  onChange={usernameChangeHandler} value={enteredUsername}/>

            <label htmlFor="age">Age (year)</label>
            <input id="age" type="number" onChange={ageChangeHandlr} value={enteredAge}/>

            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </div>
    );
};

export default AddUser;