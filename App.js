import './App.css';
import React from 'react';
import { Button } from '@material-ui/core';
import SendIcon from '@mui/icons-material/Send'
import IconButton from '@mui/material/IconButton';
import { Fingerprint } from '@mui/icons-material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { ButtonGroup } from '@mui/material';
// import  Button from '@mui/material/Button';


import ResponsiveAppBar from './components/nav.js';

import RecipeReviewCard from './components/card';
export function App()
{
  return(
    
    
    <div className='App'>
       <ResponsiveAppBar />
       <RecipeReviewCard /> 

      <ButtonGroup>
       <Button color='warning' size='medium' variant='contained'>Send Money</Button>
      <br /><br />
      <Button color='success' size='large' variant='contained'>Scan QR/upi</Button>
      <br /><br />
      <Button color="info" size='large' variant='contained'>Transaction History</Button>
  
     
   <Button color='info' variant="outlined" startIcon={<AccountBalanceIcon />}>
  AccountBalance
</Button>
<Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
</ButtonGroup>  
 <IconButton aria-label="fingerprint" color="secondary">
  <Fingerprint />
</IconButton>
<IconButton aria-label="fingerprint" color="success">
  <Fingerprint />
</IconButton>   


   <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>One</Button>
      <br />
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
        


    </div>
  
  );
}
export default App;