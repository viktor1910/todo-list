import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SaveIcon from '@material-ui/icons/Save';
import SingleTodo from './SingleTodo'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        width: '100%'
    },
    iconAction: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: theme.spacing(2),
        color: theme.palette.info.main
    }
}))

const ListOfTodo = () => {
    const classes = useStyles();
    const [onDelete, setOnDelete] = useState(false);
    const handleSetDelete = () => {
        setOnDelete(true)
    }

    const handleSave = () => {
        setOnDelete(false)
    }
    return (
        <div className={classes.root}>
            <div>{onDelete ? <SaveIcon className={classes.iconAction} onClick={handleSave}/> : <DeleteForeverIcon className={classes.iconAction} onClick={handleSetDelete}/>}</div>
            <List>
                <SingleTodo onDelete={onDelete} />
            </List>
        </div>
    )
}

export default ListOfTodo
