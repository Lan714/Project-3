import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {makeStyles} from '@mui/styles';


const useStyles = makeStyles({
  root: {
    background: 'blue',
  },
});

const Navbar = () => {

return (
  <AppBar className= "appbar">
    <Toolbar className= "toolbar">
      <Typography variant="h4" >
          Cryptomaster
      </Typography>
      <Avatar src="https://upload.wikimedia.org/wikipedia/en/d/d1/Toad_3D_Land.png"/>
    </Toolbar>
  </AppBar>

)  

}

export default Navbar