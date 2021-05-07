import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, Typography } from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { Todo } from '../utils/todos'

const useStyles = makeStyles((theme) => ({
    todoIcon: {
        marginRight: theme.spacing(1),
        color: theme.palette.info.main
    },
    deleteIcon: {
        marginRight: theme.spacing(1),
        color: theme.palette.error.main
    },
    text: {
        cursor: 'pointer',
        flexGrow: 1
    }
}))

type TodoProps = {
    todo: Todo
}


const SingleTodo: React.FC<TodoProps> = ({ todo }) => {
    const classes = useStyles();
    const { title, completed } = todo
    const [done, setDone] = useState(false);
    const handleClickDone = () => {
        setDone(!done)
    }
    return (
        <ListItem onClick={handleClickDone} divider dense>
            {completed ? <CheckCircleOutlineIcon className={classes.todoIcon} /> : <RadioButtonUncheckedIcon className={classes.todoIcon} />}
            <Typography className={classes.text}>{title}</Typography>
        </ListItem>
    )
}

export default SingleTodo;
