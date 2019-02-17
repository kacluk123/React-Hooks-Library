import React , {useState, useEffect} from 'react';
import firebase from '../../src/firebase';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';



const BookList = () =>{
    const [books, setBooks ] = useState([]),
    [searchValue, setSearchValue] = useState({value : ""}),
     handleChange = () => event =>{
        const newValue = {...searchValue, value : event.target.value }
        setSearchValue(newValue)
        
    }
    const firestore = firebase.firestore()
    const fetchData = async () => {
        const emptyArray = []
        await firestore.collection("books").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                emptyArray.push(doc.data())
                });
        });
        setBooks(emptyArray)
    };
    
    useEffect(  () => {
        fetchData()
    }, [])
    
    const handleDelete = bookTitle => event =>{
        firestore.collection("books").doc(bookTitle).delete().then(function() {
            fetchData()})
    }
  
    
    const filter = Object.values(books).filter((bookItem)=>{
        return bookItem.bookTitle.toLowerCase().indexOf(searchValue.value.toLowerCase()) !== -1 || 
        bookItem.year.toLowerCase().indexOf(searchValue.value.toLowerCase()) !== -1 || 
        bookItem.author.toLowerCase().indexOf(searchValue.value.toLowerCase()) !== -1
    })
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
                    label="Search"
                    onChange={handleChange()}
                   
                  
                  
                />
            </Grid>
        <Grid item xs={12}>
        <ul className="bookList">
            {filter.map((el,i)=> <li key={i}>
            <Paper classList="elo">
               <span className="oneBook">Title: {el.bookTitle} </span>

                <span className="oneBook">Year: {el.year} </span>

                <span className="oneBook">Author: {el.author} </span>
                <CloseIcon onClick={handleDelete(el.bookTitle)} />
                </Paper>
                </li>)}
        </ul>
        </Grid>
 </Grid>
        
        
        
    )
}

export default BookList