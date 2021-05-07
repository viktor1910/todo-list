import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, Typography } from '@material-ui/core';
import ListOfTodo from './components/ListOfTodo';
import AddMoreTodo from './components/AddMoreTodo';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.grey[300],
  },
  mainContent: {
    paddingTop: theme.spacing(8)
  },
  paper: {
    padding: theme.spacing(3, 4)
  }
}))

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Container maxWidth='md' component="main" className={classes.mainContent}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h2">Todo List</Typography>
            <ListOfTodo />
            <AddMoreTodo />
          </Paper>
        </Container>
      </div>
    </>
  );
}

export default App;
