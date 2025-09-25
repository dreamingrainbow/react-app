import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PageToolBar, StyledButton } from './index';

export const GameFooterMenu = () => {
  const navigate = useNavigate();
  return (
    <PageToolBar>
      <StyledButton
        variant="contained"
        // to="/items"
        // component={Link}
        size="small"
        sx={{ textTransform: 'none' }}
        onClick={() => {
          console.log('clicked');
          navigate('/items');
        }}
        
      >
        Items
      </StyledButton>
      <StyledButton
        variant="contained"
        to="/equipment"
        component={Link}
        size="small"
        sx={{ textTransform: 'none' }}
        onClick={() => navigate('/equipment')}
      >
        Equipment
      </StyledButton>
      <StyledButton
        variant="contained"
        to="/potions"
        component={Link}
        size="small"
        sx={{ textTransform: 'none' }}
        onClick={() => navigate('/potions')}
      >
        Potions
      </StyledButton>
      <StyledButton
        variant="contained"
        to="/spells"
        component={Link}
        size="small"
        sx={{ textTransform: 'none' }}
        onClick={() => navigate('/spells')}
      >
        Spells
      </StyledButton>
      <StyledButton
        variant="contained"
        to="/curses"
        component={Link}
        size="small"
        sx={{ textTransform: 'none' }}
        onClick={() => navigate('/curses')}
      >
        Curses
      </StyledButton>
      <StyledButton
        variant="contained"
        to="/blessings"
        component={Link}
        size="small"
        sx={{ textTransform: 'none' }}
        onClick={() => navigate('/blessings')}
      >
        Blessings
      </StyledButton>
      <StyledButton
        variant="contained"
        to="/books"
        component={Link}
        size="small"
        sx={{ textTransform: 'none' }}
        onClick={() => navigate('/books')}
      >
        Books
      </StyledButton>
      <StyledButton
        variant="contained"
        to="/admin"
        component={Link}
        size="small"
        sx={{ textTransform: 'none' }}
        onClick={() => navigate('/admin')}
      >
        Admin
      </StyledButton>
    </PageToolBar>
  );
};

export default GameFooterMenu;