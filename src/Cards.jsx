import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';




export default function BasicCard({title , desc}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
       <Typography variant="h5" component="div">
        {title}
        </Typography>
      
        <Typography variant="body2">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}