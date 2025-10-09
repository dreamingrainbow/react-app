import React from 'react';
import { PageMenu, StyledButton } from './index';
import { Link, useLocation } from 'react-router-dom';

export const MainMenu = () => {
  const location = useLocation();
  return (
    <PageMenu>
      {location.pathname !== '/' && (
      <StyledButton
        variant="contained"
        to="/"
        fullWidth
        sx={{ textTransform: 'none' }}
        component={Link}
      >
        Home
      </StyledButton>
      )}
      {location.pathname !== '/game-board' && (

      <StyledButton
        variant="contained"
        to="/game-board"
        fullWidth
        sx={{ textTransform: 'none' }}
        component={Link}
      >
        Join the Chaos
      </StyledButton>
      )}
      {location.pathname !== '/whispers' && (
      <StyledButton
        variant="contained"
        to="/whispers"
        component={Link}
        fullWidth
        sx={{ textTransform: 'none' }}
      >
        Whispers
      </StyledButton>
      )}
      {location.pathname !== '/gold-exchange' && (
      <StyledButton
        variant="contained"
        to="/gold-exchange"
        component={Link}
        fullWidth
        sx={{ textTransform: 'none' }}
      >
        Gold Exchange
      </StyledButton>
      )}
      {location.pathname !== '/enchantments' && (
      <StyledButton
        variant="contained"
        to="/enchantments"
        component={Link}
        fullWidth
        sx={{ textTransform: 'none' }}
      >
        Enchantments
      </StyledButton>
      )}
      {location.pathname !== '/crafting' && (
      <StyledButton
        variant="contained"
        to="/crafting"
        component={Link}
        fullWidth
        sx={{ textTransform: 'none' }}
      >
        Crafting
      </StyledButton>
      )}
    </PageMenu>
  );
};
