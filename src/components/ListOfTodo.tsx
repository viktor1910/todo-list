import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import SingleTodo from './SingleTodo';
import { useQuery } from 'react-query';
import { fetchTodos } from '../utils/apiHelper';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        width: '100%'
    },
}))

interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const ListOfTodo = () => {
    const classes = useStyles();
    const todos = useQuery<Todo[], Error>('todos', fetchTodos)

    console.log(todos.data)
    return (
        <div className={classes.root}>
            <List>
                {todos.data?.map(todo => <SingleTodo title={todo.title} completed={todo.completed} />)}
            </List>
        </div>
    )
}

export default ListOfTodo
