import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BookList from './Components/BookList'
import AddBook from './Components/AddBook'


import Navigation from './Components/Navigation'


const styles = theme => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: `${theme.spacing.unit * 3}px`,
    },
    demo: {
        height: 240,
        marginTop :50,
        [theme.breakpoints.up("lg")]: {
            width: 1170
        }
    },
    paper: {
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing.unit,
    },
    divider: {
        margin: `${theme.spacing.unit * 2}px 0`,
    },
});


const Library = ({classes}) =>{
    return(
        <Router>
            <Grid container justify="center">
                <Grid container  className={classes.demo} spacing={40}>
                    <Grid item xs={12}>
                        <Navigation/>
                    </Grid>
                    <Grid item xs={12}>
                        <Switch>
                            <Route component={BookList} exact path="/allbooks/"/>
                            <Route component={AddBook} exact path="/addbook/"/>
                        </Switch>
                    </Grid>
                </Grid>
            </Grid>
        </Router>
    )
}


export default withStyles(styles)(Library);
