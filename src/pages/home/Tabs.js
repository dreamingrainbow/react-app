import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CustomTabs = styled(Tabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    height: '3px',
  },
}));

const CustomTab = styled((props) => <Tab {...props} />)(
  ({ theme, rightAlign }) => ({
    textTransform: 'none',
    minWidth: 0,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    marginLeft: rightAlign ? 'auto' : 0,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }),
);

export default function CustomizedTabs({ value, onChange, tabs }) {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ bgcolor: '#fff' }}>
        <CustomTabs 
          value={value} 
          onChange={onChange} 
          aria-label="custom tabs"
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: tabs[value]?.indicatorColor || '#1890ff',
            },
          }}
        >
          {tabs.map((tab, index) => (
            <CustomTab 
              key={index}
              rightAlign={(index === tabs.length - 1) && tab.rightAlign}
              label={
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: tab.color || '#2e1534',
                    '&.Mui-selected': {
                      color: tab.indicatorColor || '#1890ff'
                    }
                  }}
                >
                  {tab.label}
                </Typography>
              }
            />
          ))}
        </CustomTabs>
        <Box sx={{ p: 1 }} />
      </Box>
    </Box>
  );
}