import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, Typography } from '@material-ui/core';
import ListOfTodo from './components/ListOfTodo';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    height: '100vh',
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
          </Paper>
        </Container>
      </div>
    </>
  );
}

export default App;