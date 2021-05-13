import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { addTodo } from '../utils/apiHelper'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogTitle, DialogContent, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Todo } from '../utils/todos';

const useStyles = makeStyles((theme) => ({
    buttonAction: {
        marginTop: theme.spacing(2),
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
    }
}))

const AddMoreTodo = () => {
    const classes = useStyles();
    const queryCLient = useQueryClient();
    const mutation = useMutation(addTodo, {
        onSuccess: (data: Todo) => {
            handleCloseModal();
            const oldData: Todo[] = queryCLient.getQueryData('todos') || [];
            const newData = [...oldData, data]
            queryCLient.setQueryData('todos', newData);
            formik.resetForm();
        }
    })
    const formik = useFormik({
        initialValues: {
            title: ''
        },
        onSubmit: (values: { title: string }) => {
            mutation.mutate({
                userId: 2,
                title: values.title,
                completed: false
            })
        },
        validationSchema: Yup.object({
            title: Yup.string().required('This is require')
        })
    })
    const [openModal, setOpenModal] = useState(false)
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    return (
        <div>
            <Button className={classes.buttonAction} variant="outlined" color="primary" onClick={handleOpenModal}>Add Todo</Button>
            <Dialog
                open={openModal}
                onClose={handleCloseModal}
            >
                <DialogTitle>Add Todo</DialogTitle>
                <DialogContent>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField onChange={formik.handleChange} name="title" onBlur={formik.handleBlur} value={formik.values.title} required variant="outlined" />
                        <Button className={classes.buttonAction} fullWidth type="submit" variant="contained" color="primary">Submit</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddMoreTodo
