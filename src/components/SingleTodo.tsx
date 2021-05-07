import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, Typography } from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

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

interface TodoProps {
    title: string,
    completed: boolean
}


const SingleTodo: React.FC<TodoProps> = ({ title, completed }) => {
    const classes = useStyles();
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
