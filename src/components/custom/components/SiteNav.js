import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { StyledButton as Button } from './StyledButton';

export const SiteNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/' && <Button onClick={() => navigate('/')}>Home</Button>}
      <Button onClick={() => navigate('/sign-in')}>Sign In</Button>
      <Button onClick={() => navigate('/admin')}>Admin</Button>
      <Button onClick={() => navigate('/profile')}>Profile</Button>
      <Button onClick={() => navigate('/register')}>Register</Button>
      <Button onClick={() => navigate('/forgot-password')}>
        Forgot Password
      </Button>
      <Button onClick={() => navigate('/reset-password')}>
        Reset Password
      </Button>
      <Button onClick={() => navigate('/verify-email')}>Verify Email</Button>
      <Button onClick={() => navigate('/identity')}>Identity</Button>
      <Button onClick={() => navigate('/mfa')}>
        Multi Step Authentication
      </Button>
      <Button onClick={() => navigate('/dashboard')}>Dashboard</Button>
      <Button onClick={() => navigate('/agent-manager')}>Agent Manager</Button>
      <Button onClick={() => navigate('/blessings')}>Blessings</Button>
      <Button onClick={() => navigate('/board-editor')}>Board Editor</Button>
      <Button onClick={() => navigate('/books')}>Books</Button>
      <Button onClick={() => navigate('/character-editor')}>
        Character Editor
      </Button>
      <Button onClick={() => navigate('/crafting')}>Crafting</Button>
      <Button onClick={() => navigate('/cures')}>Cures</Button>
      <Button onClick={() => navigate('/curses')}>Curses</Button>
      <Button onClick={() => navigate('/enchantments')}>Enchantments</Button>
      <Button onClick={() => navigate('/equipment')}>Equipment</Button>
      <Button onClick={() => navigate('/game-board')}>Game Board</Button>
      <Button onClick={() => navigate('/gold-exchange')}>Gold Exchange</Button>
      <Button onClick={() => navigate('/item-manager')}>Item Manager</Button>
      <Button onClick={() => navigate('/items')}>Items</Button>
      <Button onClick={() => navigate('/potions')}>Potions</Button>
      <Button onClick={() => navigate('/room-editor')}>Room Editor</Button>
      <Button onClick={() => navigate('/spells')}>Spells</Button>
      <Button onClick={() => navigate('/whispers')}>Whispers</Button>
    </>
  );
};
