import {  Grid } from '@mui/material';
import './App.css';
import Button from '@mui/material/Button';
import Bar from './appbar';
import Note from './Cards';
import Dialog from './Dialoge'
import { useState , useEffect } from 'react';



function App() {
  
  
  const [notes, setNotes]  = useState([ ]);
useEffect(() => {
  const notes = window.localStorage.getItem("notes");
    if(notes){
       setNotes(JSON.parse(notes))
    }
}, [])
useEffect(() => {
  if(notes.length > 0){

    window.localStorage.setItem("notes", JSON.stringify(notes))
  }

},[notes])


const handledeleteitem = (item) => {
setNotes((oldnotes) => oldnotes.filter(n => n !== item)


)}



const [search, setSearch] = useState("");
  return (

    <>
    <Bar setSearch = {setSearch} search = {search}>

    </Bar>
  <Grid sx={{ pt : 3}} container spacing={2}>
  {notes.filter(n => n.title.includes(search) || n.desc.includes(search)).map((item) => (
  <Grid item xs={12} sm={6} md={4}>
    
  <Note title={item.title} desc={item.desc} />
  <Button onClick={() => {handledeleteitem(item)}}>Delete</Button>
  </Grid>
  ))}
   

</Grid>


<Dialog setNotes={setNotes} />

    </>
  );
}

export default App;


