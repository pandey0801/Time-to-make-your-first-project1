import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UserList  = (props) =>{

    console.log(props)
    // const key = props.id;
    return (
        <Card className={classes.Users}>
            <ul>
                {props.users.map((user)=>(
                    <li key= {user.id}>
                        {user.name} {user.age} 
                    </li>
                ))}
            </ul>

        </Card>
    );
};

export default UserList;