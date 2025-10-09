import React from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Tooltip,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

function AdminMainToolBar() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  return (
    <Box sx={{ border: '1px solid red' }}>
      <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
        <Tooltip
          title={<Typography variant="body1">Home</Typography>}
          placement="right"
          arrow
        >
          <Box>🏠</Box>
        </Tooltip>
      </Box>
      <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/game-board')}>
        <Tooltip
          title={<Typography variant="body1">Game Board</Typography>}
          placement="right"
          arrow
        >
          <Box>🗺️</Box>
        </Tooltip>
      </Box>
      <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/whispers')}>
        <Tooltip
          title={<Typography variant="body1">Whispers</Typography>}
          placement="right"
          arrow
        >
          <Box>🗣️</Box>
        </Tooltip>
      </Box>
      <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/curses')}>
        <Tooltip
          title={<Typography variant="body1">Curses</Typography>}
          placement="right"
          arrow
        >
          <Box>🔮</Box>
        </Tooltip>
      </Box>
      <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/enchantments')}>
        <Tooltip
          title={<Typography variant="body1">Enchantments</Typography>}
          placement="right"
          arrow
        >
          <Box>🎉</Box>
        </Tooltip>
      </Box>
      <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/equipment')}>
        <Tooltip
          title={<Typography variant="body1">Equipment</Typography>}
          placement="right"
          arrow
        >
          <Box>💰</Box>
        </Tooltip>
      </Box>
      <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/items')}>
        <Tooltip
          title={<Typography variant="body1">Items</Typography>}
          placement="right"
          arrow
        >
          <Box>🎁</Box>
        </Tooltip>
      </Box>
      <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/characters')}>
        <Tooltip
          title={<Typography variant="body1">Characters</Typography>}
          placement="right"
          arrow
        >
          <Box>👹</Box>
        </Tooltip>
      </Box>
      <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/npcs')}>
        <Tooltip
          title={<Typography variant="body1">NPCs</Typography>}
          placement="right"
          arrow
        >
          <Box>👤</Box>
        </Tooltip>
      </Box>
      <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/companions')}>
        <Tooltip
          title={<Typography variant="body1">Companions</Typography>}
          placement="right"
          arrow
        >
          <Box>🐶</Box>
        </Tooltip>
      </Box>
      <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/players')}>
        <Tooltip
          title={<Typography variant="body1">Players</Typography>}
          placement="right"
          arrow
        >
          <Box>👤</Box>
        </Tooltip>
      </Box>
      <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/quests')}>
        <Tooltip
          title={<Typography variant="body1">Quests</Typography>}
          placement="right"
          arrow
        >
          <Box>🎯</Box>
        </Tooltip>
      </Box>
      <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/books')}>
        <Tooltip
          title={<Typography variant="body1">Books</Typography>}
          placement="right"
          arrow
        >
          <Box>📚</Box>
        </Tooltip>
      </Box>
      <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/spells')}>
        <Tooltip
          title={<Typography variant="body1">Spells</Typography>}
          placement="right"
          arrow
        >
          <Box>🪄</Box>
        </Tooltip>
      </Box>
      <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/game-board')}>
        <Tooltip
          title={<Typography variant="body1">Game Board</Typography>}
          placement="right"
          arrow
        >
          <Box>🕹️</Box>
        </Tooltip>
      </Box>
      <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/game-board')}>
        <Tooltip
          title={<Typography variant="body1">Game Board</Typography>}
          placement="right"
          arrow
        >
          <Box>🕹️</Box>
        </Tooltip>
      </Box>
      <Box sx={{ cursor: 'pointer' }} onClick={() => navigate('/game-board')}>
        <Tooltip
          title={<Typography variant="body1">Game Board</Typography>}
          placement="right"
          arrow
        >
          <Box>🕹️</Box>
        </Tooltip>
      </Box>
    </Box>
  );
}

export function Admin() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  console.log('location.pathname', location.pathname);
  return (
    <Box
      sx={{
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'row',
        gap: '2px',
        alignItems: 'start',
        justifyContent: 'start',
        height: 'calc(100vh - 276px)',
        width: '100%',
        background:
          'linear-gradient(to right,rgba(114, 16, 11, 0.46),rgba(114, 16, 11, 0.47))',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '38px',
          overflow: 'hidden',
        }}
      >
        <AdminMainToolBar />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
          alignItems: 'start',
          justifyContent: 'start',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '2px',
            alignItems: 'start',
            justifyContent: 'space-evenly',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '2px',
              alignItems: 'start',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Box>🕹️</Box>
            <Box>🕹️</Box>
            <Box>🕹️</Box>
            <Box>🕹️</Box>
            <Box>🕹️</Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '2px',
              alignItems: 'start',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Box>🕹️</Box>
            <Box>🕹️</Box>
            <Box>🕹️</Box>
            <Box>🕹️</Box>
            <Box>🕹️</Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '2px',
              alignItems: 'start',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Box>🕹️</Box>
            <Box>🕹️</Box>
            <Box>🕹️</Box>
            <Box>🕹️</Box>
            <Box>🕹️</Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '2px',
              alignItems: 'start',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Box>🕹️</Box>
            <Box>🕹️</Box>
            <Box>🕹️</Box>
            <Box>🕹️</Box>
            <Box>🕹️</Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '2px',
            alignItems: 'center',
            justifyContent: 'start',
            width: '100%',
          }}
        >
          <Typography variant="body1">Search</Typography>
          <TextField variant="outlined" size="small" />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '2px',
              alignItems: 'start',
              justifyContent: 'start',
              width: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '2px',
                alignItems: 'start',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Box>🕹️</Box>
              <Box>🕹️</Box>
              <Box>🕹️</Box>
              <Box>🕹️</Box>
              <Box>🕹️</Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '2px',
                alignItems: 'start',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Box>🕹️</Box>
              <Box>🕹️</Box>
              <Box>🕹️</Box>
              <Box>🕹️</Box>
              <Box>🕹️</Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '2px',
                alignItems: 'start',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Box>🕹️</Box>
              <Box>🕹️</Box>
              <Box>🕹️</Box>
              <Box>🕹️</Box>
              <Box>🕹️</Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '2px',
            alignItems: 'start',
            justifyContent: 'space-evenly',
            width: '100%',
            minHeight: '126px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Typography variant="body1">Game Status 📊</Typography>
            <List size="small">
              <ListItem>
                <ListItemIcon>
                  <Box
                    sx={{
                      borderRadius: '10px',
                      backgroundColor: 'rgba(217, 30, 20, 0.9)',
                      width: '20px',
                      height: '26px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    🕹️
                  </Box>
                </ListItemIcon>
                <ListItemText
                  primary="Inactive"
                  sx={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: 'rgba(217, 30, 20, 0.9)',
                  }}
                />
              </ListItem>
              <ListItem>
                <Button variant="contained" color="success" size="small">
                  Start
                </Button>
                <Button variant="contained" color="error" size="small">
                  End
                </Button>
              </ListItem>
            </List>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Typography variant="body1">Game Board 📝</Typography>
            <List
              size="small"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                alignItems: 'start',
                justifyContent: 'start',
                width: '100%',
                maxHeight: '100px',
                overflow: 'auto',
                scrollbarColor: 'rgba(114, 16, 11, 0.47)',
                '&::-webkit-scrollbar': {
                  width: '10px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: 'rgba(114, 16, 11, 0.47)',
                  borderRadius: '10px',
                },
                '&::-webkit-scrollbar-track': {
                  background: 'transparent',
                },
              }}
            >
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Uptime 0 Seconds" />
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Memory 0 MB" />
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Floors 5" />
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Rooms 50" />
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Dungeons 501" />
              </ListItem>
            </List>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Typography variant="body1">NPCs 📝</Typography>
            <List
              size="small"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                alignItems: 'start',
                justifyContent: 'start',
                width: '100%',
                maxHeight: '100px',
                overflow: 'auto',
                scrollbarColor: 'rgba(114, 16, 11, 0.47)',
                '&::-webkit-scrollbar': {
                  width: '10px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: 'rgba(114, 16, 11, 0.47)',
                  borderRadius: '10px',
                },
                '&::-webkit-scrollbar-track': {
                  background: 'transparent',
                },
              }}
            >
              {Array.from({ length: 10 }).map((_, index) => (
                <ListItem
                  key={index}
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '0px',
                    alignItems: 'start',
                    justifyContent: 'start',
                    padding: '0px',
                  }}
                >
                  <ListItemText secondary="David of Some 0,0,0" />
                </ListItem>
              ))}
            </List>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Typography variant="body1">Players 📝</Typography>
            <List
              size="small"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                alignItems: 'start',
                justifyContent: 'start',
                width: '100%',
                maxHeight: '100px',
                overflow: 'auto',
                scrollbarColor: 'rgba(114, 16, 11, 0.47)',
                '&::-webkit-scrollbar': {
                  width: '10px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: 'rgba(114, 16, 11, 0.47)',
                  borderRadius: '10px',
                },
                '&::-webkit-scrollbar-track': {
                  background: 'transparent',
                },
              }}
            >
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Male 5" />
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Female 50" />
              </ListItem>
            </List>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Typography variant="body1">Enemies 📝</Typography>
            <List
              size="small"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                alignItems: 'start',
                justifyContent: 'start',
                width: '100%',
                maxHeight: '100px',
                overflow: 'auto',
                scrollbarColor: 'rgba(114, 16, 11, 0.47)',
                '&::-webkit-scrollbar': {
                  width: '10px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: 'rgba(114, 16, 11, 0.47)',
                  borderRadius: '10px',
                },
                '&::-webkit-scrollbar-track': {
                  background: 'transparent',
                },
              }}
            >
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Zombies 5" />
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Skeletons 50" />
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Orcs 501" />
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Goblins 501" />
              </ListItem>
            </List>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Typography variant="body1">Items 📝</Typography>
            <List
              size="small"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                alignItems: 'start',
                justifyContent: 'start',
                width: '100%',
                maxHeight: '100px',
                overflow: 'auto',
                scrollbarColor: 'rgba(114, 16, 11, 0.47)',
                '&::-webkit-scrollbar': {
                  width: '10px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: 'rgba(114, 16, 11, 0.47)',
                  borderRadius: '10px',
                },
                '&::-webkit-scrollbar-track': {
                  background: 'transparent',
                },
              }}
            >
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Gold Chests 5" />
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Misc Items 50" />
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Weapons 501" />
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Shields 501" />
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Chestplates 501" />
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Leggings 501" />
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Boots 501" />
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Potions 501" />
              </ListItem>

              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Spells 501" />
              </ListItem>

              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Books 501" />
              </ListItem>

              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Curses 501" />
              </ListItem>

              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Cures 501" />
              </ListItem>

              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Blessings 501" />
              </ListItem>
            </List>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Typography variant="body1">Gold 📝</Typography>
            <List
              size="small"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                alignItems: 'start',
                justifyContent: 'start',
                width: '100%',
                maxHeight: '100px',
                overflow: 'auto',
                scrollbarColor: 'rgba(114, 16, 11, 0.47)',
                '&::-webkit-scrollbar': {
                  width: '10px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: 'rgba(114, 16, 11, 0.47)',
                  borderRadius: '10px',
                },
                '&::-webkit-scrollbar-track': {
                  background: 'transparent',
                },
              }}
            >
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Exchange 500,000,000" />
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Players 500,000,000" />
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Enemies 500,000,000" />
              </ListItem>
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Rooms 500,000,000" />
              </ListItem>

              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Stores 500,000,000" />
              </ListItem>

              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Chests 500,000,000" />
              </ListItem>

              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                }}
              >
                <ListItemText secondary="Items 500,000,000" />
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            alignContent: 'start',
            justifyContent: 'space-evenly',
            height: '100%',
            minHeight: '300px',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '2px',
              alignItems: 'start',
              justifyContent: 'start',
              width: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  padding: '2px',
                  backgroundColor: 'rgba(230, 192, 5, 0.87)',
                  borderRadius: '10px',
                  cursor: 'pointer',
                }}
              >
                1
              </Box>
              <Box
                sx={{
                  padding: '2px',
                  backgroundColor: 'rgba(230, 192, 5, 0.87)',
                  borderRadius: '10px',
                  cursor: 'pointer',
                }}
              >
                2
              </Box>
              <Box
                sx={{
                  padding: '2px',
                  backgroundColor: 'rgba(230, 192, 5, 0.87)',
                  borderRadius: '10px',
                  cursor: 'pointer',
                }}
              >
                3
              </Box>
              <Box
                sx={{
                  padding: '2px',
                  backgroundColor: 'rgba(230, 192, 5, 0.87)',
                  borderRadius: '10px',
                  cursor: 'pointer',
                }}
              >
                4
              </Box>
              <Box
                sx={{
                  padding: '2px',
                  backgroundColor: 'rgba(230, 192, 5, 0.87)',
                  borderRadius: '10px',
                  cursor: 'pointer',
                }}
              >
                5
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  gap: 0.25,
                  rowGap: 0.25,
                  overflow: 'auto',
                  scrollbarColor: 'rgba(114, 16, 11, 0.47)',
                  '&::-webkit-scrollbar': {
                    width: '10px',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: 'rgba(114, 16, 11, 0.47)',
                  },
                  '&::-webkit-scrollbar-track': {
                    background: 'transparent',
                  },
                }}
              >
                {Array.from({ length: 25 }).map((_, index) => (
                  <Box
                    key={index}
                    sx={{
                      padding: '2px',
                      backgroundColor: 'rgba(114, 16, 11, 0.47)',
                      borderRadius: '10px',
                    }}
                  >
                    🏡
                  </Box>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                padding: '12px',
              }}
            >
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 0.25,
                  rowGap: 0.25,
                  scrollbarColor: 'rgba(114, 16, 11, 0.47)',
                  '&::-webkit-scrollbar': {
                    width: '10px',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: 'rgba(114, 16, 11, 0.47)',
                  },
                  '&::-webkit-scrollbar-track': {
                    background: 'transparent',
                  },
                }}
              >
                <Box
                  sx={{
                    padding: '2px',
                    backgroundColor: 'rgba(114, 16, 11, 0.47)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                  }}
                >
                  ⏫
                </Box>
                <Box
                  sx={{
                    padding: '2px',
                    backgroundColor: 'rgba(114, 16, 11, 0.47)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                  }}
                >
                  ⬆️
                </Box>
                <Box
                  sx={{
                    padding: '2px',
                    backgroundColor: 'rgba(114, 16, 11, 0.47)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                  }}
                >
                  🏡
                </Box>
                <Box
                  sx={{
                    padding: '2px',
                    backgroundColor: 'rgba(114, 16, 11, 0.47)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                  }}
                >
                  ⬅️
                </Box>
                <Box
                  sx={{
                    padding: '2px',
                    backgroundColor: 'rgba(114, 16, 11, 0.47)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                  }}
                >
                  🧿
                </Box>
                <Box
                  sx={{
                    padding: '2px',
                    backgroundColor: 'rgba(114, 16, 11, 0.47)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                  }}
                >
                  ➡️
                </Box>
                <Box
                  sx={{
                    padding: '2px',
                    backgroundColor: 'rgba(114, 16, 11, 0.47)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                  }}
                >
                  ⏬
                </Box>
                <Box
                  sx={{
                    padding: '2px',
                    backgroundColor: 'rgba(114, 16, 11, 0.47)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                  }}
                >
                  ⬇️
                </Box>
                <Box
                  sx={{
                    padding: '2px',
                    backgroundColor: 'rgba(114, 16, 11, 0.47)',
                    borderRadius: '10px',
                    cursor: 'pointer',
                  }}
                >
                  🚪
                </Box>
              </Box>
              <Box>X: 0 Y: 0 Z: 0</Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                alignItems: 'start',
                justifyContent: 'start',
                width: '268px',
                height: '100%',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                  maxHeight: '106px',
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                  borderRadius: '10px',
                  border: `1px solid ${theme.palette.primary.main}`,
                }}
              >
                <List
                  sx={{
                    width: '100%',
                    padding: '0px',
                    margin: '0px',
                    overflow: 'auto',
                    gap: '0px',
                    rowGap: '0px',
                    scrollbarColor: 'rgba(114, 16, 11, 0.47)',
                    '&::-webkit-scrollbar': {
                      width: '10px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      background: 'rgba(114, 16, 11, 0.47)',
                    },
                    '&::-webkit-scrollbar-track': {
                      background: 'transparent',
                    },
                  }}
                >
                  {Array.from({ length: 10 }).map((_, index) => (
                    <ListItem key={index} sx={{ paddingLeft: '2px', paddingTop: '0px', paddingBottom: '0px' }} disableGutters>
                      <img
                        src={`..//assets/icons/male player.png`}
                        alt="Character"
                        width={28}
                        height={32}
                      />
                      <ListItemText
                        primary={`Wizard ${new Date().toLocaleTimeString()}`}
                        secondary="lorem ipsum dolor sit amet as in the game"
                        slotProps={{
                          primary: {
                            sx: {
                              fontSize: '10px',
                              fontFamily: 'Irish Grover Bold',
                              color: 'rgba(231, 171, 106, 0.6)',
                            },
                          },
                          secondary: {
                            sx: {
                              fontSize: '12px',
                              fontFamily: 'Irish Grover Bold',
                            },
                          },
                        }}  
                        sx={{
                            padding: '0px 0px 0px 0px',
                            marginTop: '0px',
                            marginBottom: '0px',
                            marginLeft: '0px',
                            marginRight: '0px',
                          
                        }}                
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '1px',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                    alignItems: 'start',
                    justifyContent: 'start',
                  }}
                >
                  <TextField variant="outlined" size="small" fullWidth />
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    fullWidth
                  >
                    Say
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                alignItems: 'start',
                justifyContent: 'start',
                width: '268px',
                height: '100%',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  padding: '0px',
                  maxHeight: '106px',
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                  borderRadius: '10px',
                  border: `1px solid ${theme.palette.primary.main}`,
                }}
              >
                <List
                  sx={{
                    width: '100%',
                    padding: '0px',
                    margin: '0px',
                    overflow: 'auto',
                    gap: '0px',
                    rowGap: '0px',
                    scrollbarColor: 'rgba(114, 16, 11, 0.47)',
                    '&::-webkit-scrollbar': {
                      width: '10px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      background: 'rgba(114, 16, 11, 0.47)',
                    },
                    '&::-webkit-scrollbar-track': {
                      background: 'transparent',
                    },
                  }}
                >
                  {Array.from({ length: 10 }).map((_, index) => (
                    <ListItem key={index} sx={{ paddingLeft: '2px', paddingTop: '0px', paddingBottom: '0px' }} disableGutters>
                      <img
                        src={`..//assets/icons/male player.png`}
                        alt="Character"
                        width={28}
                        height={32}
                      />
                      <ListItemText
                        primary={`Wizard ${new Date().toLocaleTimeString()}`}
                        secondary="lorem ipsum dolor sit amet as in the game"
                        slotProps={{
                          primary: {
                            sx: {
                              fontSize: '10px',
                              fontFamily: 'Irish Grover Bold',
                              color: 'rgba(231, 171, 106, 0.6)',
                            },
                          },
                          secondary: {
                            sx: {
                              fontSize: '12px',
                              fontFamily: 'Irish Grover Bold',
                            },
                          },
                        }}  
                        sx={{
                            padding: '0px 0px 0px 0px',
                            marginTop: '0px',
                            marginBottom: '0px',
                            marginLeft: '0px',
                            marginRight: '0px',
                          
                        }}                
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '1px',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                    alignItems: 'start',
                    justifyContent: 'start',
                  }}
                >
                  <TextField variant="outlined" size="small" fullWidth />
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    fullWidth
                  >
                    Speak
                  </Button>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                alignItems: 'start',
                justifyContent: 'start',
                height: '100%',
                width: '292px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2px',
                  alignItems: 'start',
                  justifyContent: 'start',
                  width: '100%',
                  height: '100%',
                  textAlign: 'left',
                }}
              >
                <Typography variant="body1">The Corporal Palace</Typography>
                <Typography variant="body1">
                  The corporal palace is a large palace with in the world of
                  whispers, they say the zombies are the cursed undead players
                  from gamers past.
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '2px',
                    alignItems: 'center',
                    justifyContent: 'start',
                  }}
                >
                  <Typography variant="body1">Info 👀</Typography>
                  <Typography variant="body1">Dungeon ❌</Typography>
                  <Typography variant="body1">Store ❌</Typography>
                  <Typography variant="body1">Mine ❌</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              alignContent: 'start',
              justifyContent: 'start',
              width: '100%',
              height: '100%',
            }}
          >
            [Content]
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Admin;
