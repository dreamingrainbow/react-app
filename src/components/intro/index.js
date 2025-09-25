import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import {
  SectionWrapper,
  SectionContainer,
  HeaderSection,
  FooterSection,
  PageSection,
  CopyrightContainer,
  SocialContainer,
  PageToolBar,
  PageRightSide,
  PageLeftSide,
  PageContent,
  PageMenu,
  StyledButton,
} from '../custom/components';

export default function Intro() {
  return (
    <SectionWrapper>
      <SectionContainer>
        <HeaderSection />
        <PageSection>
          <PageContent>
            <PageLeftSide
              sx={{
                alignItems: 'end',
              }}
            >
              <StyledButton
                variant="contained"
                to="/game-board"
                size="large"
                sx={{ fontSize: '2rem' }}
                component={Link}
              >
                Join the Chaos
              </StyledButton>
            </PageLeftSide>
            <PageRightSide>
              <Box></Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  height: '100%',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <PageMenu>
                  <StyledButton
                    variant="contained"
                    to="/game-board"
                    fullWidth
                    sx={{ textTransform: 'none' }}
                    component={Link}
                  >
                    Join the Chaos
                  </StyledButton>

                  <StyledButton
                    variant="contained"
                    to="/whispers"
                    component={Link}
                    fullWidth
                    sx={{ textTransform: 'none' }}
                  >
                    Whispers
                  </StyledButton>

                  <StyledButton
                    variant="contained"
                    to="/gold-exchange"
                    component={Link}
                    fullWidth
                    sx={{ textTransform: 'none' }}
                  >
                    Gold Exchange
                  </StyledButton>

                  <StyledButton
                    variant="contained"
                    to="/enchantments"
                    component={Link}
                    fullWidth
                    sx={{ textTransform: 'none' }}
                  >
                    Enchantments
                  </StyledButton>

                  <StyledButton
                    variant="contained"
                    to="/crafting"
                    component={Link}
                    fullWidth
                    sx={{ textTransform: 'none' }}
                  >
                    Crafting
                  </StyledButton>
                </PageMenu>
              </Box>
              <Box></Box>
            </PageRightSide>
          </PageContent>
          <PageToolBar>
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
        </PageSection>
        <FooterSection>
          <CopyrightContainer>
            <Typography
              sx={{
                color: 'white',
                fontSize: '12px',
              }}
            >
              Copyright © 2025 www.wowdc.online - All Rights Reserved
            </Typography>
          </CopyrightContainer>
          <SocialContainer>
            <Typography
              sx={{
                color: 'white',
                fontSize: '12px',
              }}
            >
              Discord
            </Typography>
            <Typography
              sx={{
                color: 'white',
                fontSize: '12px',
              }}
            >
              Reddit
            </Typography>
            <Typography
              sx={{
                color: 'white',
                fontSize: '12px',
              }}
            >
              Gitbook
            </Typography>
          </SocialContainer>
        </FooterSection>
      </SectionContainer>
    </SectionWrapper>
  );
}
