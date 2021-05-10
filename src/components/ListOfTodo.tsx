import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import SingleTodo from './SingleTodo';
import { useQuery } from 'react-query';
import { fetchTodos } from '../utils/apiHelper';
import {Todo } from '../utils/todos'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        width: '100%'
    },
}))

const ListOfTodo = () => {
    const classes = useStyles();
    const todos = useQuery<Todo[], Error>('todos', fetchTodos, {
        staleTime: 5000
    })
    return (
        <div className={classes.root}>
            <List>
                {todos.data?.map(todo => <SingleTodo todo={todo} />)}
            </List>
        </div>
    )
}

export default ListOfTodo
