import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Switch from '@mui/material/Switch';
import MuiSpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { useNavigate } from 'react-router-dom';
import { Dashboard, Logout, Settings, People } from '@mui/icons-material';
import { useSpeedDial } from '../../../hooks/useSpeedDial';

const StyledSpeedDial = styled(MuiSpeedDial)(({ theme }) => ({
  position: 'fixed',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: `${theme.spacing(2.5)}`,
    right: `${theme.spacing(2)}`,
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: `${theme.spacing(2)}`,
    left: `${theme.spacing(2)}`,
  },
}));

export function PlaygroundSpeedDial() {
  const {
    open,
    hidden,
    direction,
    actions,
    setDirectionSpeedDial,
    setHiddenSpeedDial,
    setActionsSpeedDial,
    setOpenSpeedDial,
  } = useSpeedDial();

  const navigate = useNavigate();

  const _actions = [
    { icon: <Logout />, name: 'Logout', onClick: () => removeAuth() },
    {
      icon: <Settings />,
      name: 'Settings',
      onClick: () => navigate('/settings'),
    },
    {
      icon: <People />,
      name: 'Users',
      onClick: () => navigate('/users'),
    },
    {
      icon: <Dashboard />,
      name: 'Dashboard',
      onClick: () => navigate('/dashboard'),
    },
  ];

  const handleDirectionChange = (event) => {
    setDirectionSpeedDial(event.target.value);
  };

  const handleHiddenChange = (event) => {
    setHiddenSpeedDial(event.target.checked);
  };

  const renderForm = () => {
    return (
      <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
        <FormControlLabel
          control={
            <Switch
              checked={hidden}
              onChange={handleHiddenChange}
              color="primary"
            />
          }
          label="Hidden"
        />
        <FormControl component="fieldset" sx={{ mt: 1, display: 'flex' }}>
          <FormLabel component="legend">Direction</FormLabel>
          <RadioGroup
            aria-label="direction"
            name="direction"
            value={direction}
            onChange={handleDirectionChange}
            row
          >
            <FormControlLabel value="up" control={<Radio />} label="Up" />
            <FormControlLabel value="right" control={<Radio />} label="Right" />
            <FormControlLabel value="down" control={<Radio />} label="Down" />
            <FormControlLabel value="left" control={<Radio />} label="Left" />
          </RadioGroup>
        </FormControl>
      </Box>
    );
  };

  React.useEffect(() => {
    if (actions.length === 0) {
      setActionsSpeedDial(_actions);
    }
  }, [actions]);

  return (
    <StyledSpeedDial
      ariaLabel="Application SpeedDial"
      hidden={hidden}
      icon={<SpeedDialIcon />}
      direction={direction}
      open={open}
      onClick={() => setOpenSpeedDial(!open)}
      onClose={() => setOpenSpeedDial(false)}
      onOpen={() => setOpenSpeedDial(true)}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.onClick}
        />
      ))}
    </StyledSpeedDial>
  );
}

const SpeedDial = () => {
  return <PlaygroundSpeedDial />;
};

export default SpeedDial;
