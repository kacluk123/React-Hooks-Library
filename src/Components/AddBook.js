import React, { useState }  from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import firebase from '../../src/firebase'

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    }
});

const AddBook = ({classes}) =>{
    const [field, setValue ] = useState({bookTitle : '', author: '', year: ''}),
        handleChange = inputField => event => {
        const newInput = {...field, [inputField] : event.target.value,}
        setValue(newInput)
    },
    firestore = firebase.firestore(),
    
    sendData = () => event => {
        firestore.collection("books").doc(field.bookTitle).set(field);
    }
    
   
   

    return(
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Grid item xs={12}>
                <TextField
                    id="standard-dense"
                    label="Book title"
                    margin="dense"
                    onChange={handleChange('bookTitle')}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="standard-dense"
                    label="Author"
                    margin="dense"
                    onChange={handleChange('author')}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="standard-dense"
                    label="Year"
                    margin="dense"
                    onChange={handleChange('year')}

                />
            </Grid>
            <Grid item xs={12}>
                <Button onClick={sendData()} variant="contained" color="primary" className={classes.button}>
                    ADD BOOK
                </Button>
            </Grid>
            </Grid>
    )
}


export default withStyles(styles)(AddBook);
