import React, { useState, useEffect } from 'react';
import { useQueryClient, useMutation } from 'react-query';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, Typography } from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { Todo } from '../utils/todos'
import { changeTodo } from '../utils/apiHelper'

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
    const queryClient = useQueryClient();
    const { title, completed } = todo
    const [done, setDone] = useState(completed);
    const mutation = useMutation(changeTodo, {
        onSuccess: (data: Todo) => {
            queryClient.setQueryData(['todo', data.id], data);
            setDone(data.completed)
        }
    })
    const handleClickDone = () => {
        const newTodo = {
            ...todo,
            completed: !done
        }
        mutation.mutate(newTodo);
    }
    useEffect(() => {
        queryClient.setQueryData(['todo', todo.id], todo);
    }, [])

    return (
        <ListItem onClick={handleClickDone} divider dense>
            {done ? <CheckCircleOutlineIcon className={classes.todoIcon} /> : <RadioButtonUncheckedIcon className={classes.todoIcon} />}
            <Typography className={classes.text}>{title}</Typography>
        </ListItem>
    )
}

export default SingleTodo;
