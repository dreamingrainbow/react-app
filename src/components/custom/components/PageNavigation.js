import React from 'react';
import { PageToolBar, StyledButton } from './index';
import { Link, useLocation } from 'react-router-dom';

export const PageNavigation = () => {
  const location = useLocation();
  return (
    <PageToolBar>
      {location.pathname !== '/' && (
        <StyledButton
          variant="contained"
          to="/"
          component={Link}
          size="small"
          sx={{ textTransform: 'none' }}
        >
          Home
        </StyledButton>
      )}
      <StyledButton
        variant="contained"
        to="/items"
        component={Link}
        size="small"
        sx={{ textTransform: 'none' }}
      >
        Items
      </StyledButton>
      <StyledButton
        variant="contained"
        to="/equipment"
        component={Link}
        size="small"
        sx={{ textTransform: 'none' }}
      >
        Equipment
      </StyledButton>
      <StyledButton
        variant="contained"
        to="/potions"
        component={Link}
        size="small"
        sx={{ textTransform: 'none' }}
      >
        Potions
      </StyledButton>
      <StyledButton
        variant="contained"
        to="/spells"
        component={Link}
        size="small"
        sx={{ textTransform: 'none' }}
      >
        Spells
      </StyledButton>
      <StyledButton
        variant="contained"
        to="/curses"
        component={Link}
        size="small"
        sx={{ textTransform: 'none' }}
      >
        Curses
      </StyledButton>
      <StyledButton
        variant="contained"
        to="/cures"
        component={Link}
        size="small"
        sx={{ textTransform: 'none' }}
      >
        Cures
      </StyledButton>
      <StyledButton
        variant="contained"
        to="/blessings"
        component={Link}
        size="small"
        sx={{ textTransform: 'none' }}
      >
        Blessings
      </StyledButton>
      <StyledButton
        variant="contained"
        to="/books"
        component={Link}
        size="small"
        sx={{ textTransform: 'none' }}
      >
        Books
      </StyledButton>
      <StyledButton
        variant="contained"
        to="/admin"
        component={Link}
        size="small"
        sx={{ textTransform: 'none' }}
      >
        Admin
      </StyledButton>
    </PageToolBar>
  );
};
