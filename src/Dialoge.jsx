import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { Fab} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


export default function FormDialog(props) {

    
    const handleonClick = () => {
        props.setNotes((oldNotes) => {
        const newArray =  [...oldNotes, {title: title, desc:desc}]
          return newArray
        
        });
        
        handleClose()
      };
      
  
    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const [title, setTitle] = useState();
const handleChangeTitle = (event) => {
  setTitle(event.target.value);
};
const [desc, setdesc] = useState();
const handleChangeDesc = (event) => {
  setdesc(event.target.value);
};

  const handleClose = () => {
    setOpen(false);
    setTitle("")
    setdesc("")
  };

  return (
    <div>
     <Fab color="primary" aria-label="add" sx={{ position:"fixed",bottom: 16 , right:16}}
onClick={handleClickOpen}
>
  <AddIcon />
</Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
          autoFocus
        id="outlined-name"
        label="Title"
        value={title}
        onChange={handleChangeTitle}
      />      <TextField
      id="outlined-name"
      label="Desc"
      value={desc}
      onChange={handleChangeDesc}
    />   
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleonClick}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}