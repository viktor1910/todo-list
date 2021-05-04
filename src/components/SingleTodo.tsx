import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, Typography } from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CloseIcon from '@material-ui/icons/Close';

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

interface PropsSingleTodo {
    onDelete: boolean
}
const SingleTodo: React.FC<PropsSingleTodo> = ({ onDelete }) => {
    const classes = useStyles();
    const [done, setDone] = useState(false);
    const handleClickDone = () => {
        setDone(!done)
    }
    const handleSetDelete = () => {
        console.log('delete')
    }
    return (
        <ListItem onClick={onDelete ? handleSetDelete : handleClickDone} divider dense>
            {onDelete ? <CloseIcon className={classes.deleteIcon}/> : (done ? <CheckCircleOutlineIcon className={classes.todoIcon} /> : <RadioButtonUncheckedIcon className={classes.todoIcon} />)}
            <Typography className={classes.text}>something 2</Typography>
        </ListItem>
    )
}

export default SingleTodo;
