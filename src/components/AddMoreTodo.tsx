import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogTitle, DialogContent, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
    const formik = useFormik({
        initialValues: {
            title: ''
        },
        onSubmit: (values: { title: string }) => console.log(values),
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
                        <TextField onChange={formik.handleChange} name="title" onBlur={formik.handleBlur} required variant="outlined" />
                        <Button className={classes.buttonAction} fullWidth type="submit" variant="contained" color="primary">Submit</Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddMoreTodo
