import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import SingleTodo from './SingleTodo'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        width: '100%'
    },
}))

const ListOfTodo = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List>
                <SingleTodo />
            </List>
        </div>
    )
}

export default ListOfTodo
