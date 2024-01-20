import React from 'react'
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginTop: '5px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  }));



  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    
    color: 'white',
    height: '60px',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  return (
    <div style={{backgroundColor: 'black', height: '100px'}}>
      <div className='container py-3'>
      <Grid container spacing={2}>
        <Grid item xs={3}>
        <h3 style={{
          fontFamily: "Blackletter",
          fontWeight: "bold",
          backgroundColor: "black", 
          color: "white", 
          fontSize: "60px",
        }}>
          Inke<span style={{ color: "red" }}>d</span>
        </h3>
        </Grid>
        <Grid item xs={5}>
          <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
              />
          </Search>
        </Grid>
      </Grid>    
      </div>
    </div>
  )
}
