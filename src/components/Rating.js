import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import StarIcon from '@mui/icons-material/Star';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
  6: 'Excellent+',
  8: 'Excellent+',
  9: 'Excellent+',
  7: 'Excellent+',
  10: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  return (
    <Stack
    sx={{
      width: 200,
      display: 'inline',
      alignItems: 'center',
      
      
    }}
  >
      
      
      <Rating sx={{ display: 'flex' }}
        name="customized-10" defaultValue={2} max={10}
        
        precision={1}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
      <Alert severity="info" >Rate this Website in development</Alert>
    </Stack>
  );
}