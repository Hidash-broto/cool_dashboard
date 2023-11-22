import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import style from '../style'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuizIcon from '@mui/icons-material/Quiz';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

function SideBar() {
    return (
        <>
            <Container sx={style.sideBarContainer}>
                <Box sx={style.sideBarBox}>
                    <img style={style.profileImage} src="/images/CV photo.png" alt="Profile img" />
                    <Typography sx={{ mt: 1, }}>Hidash Calicut <ChevronRightIcon sx={{
                        position: 'absolute !important',
                        color: '#363cff'
                    }} /></Typography>
                    <Typography sx={{ fontSize: '13px', color: '#363636', fontWeight: 'bold' }}>hidash920@gmail.com</Typography>
                </Box>
                <Stack sx={{ mt: 4 }} direction='column' spacing={2}>
                    <Box sx={{
                        ...style.sideBarList,
                        backgroundColor: '#8cceed',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',

                    }}>
                        <DashboardIcon sx={{ color: '#363cff', ml: 1 }} />
                        <Typography sx={{ fontSize: '20px' }}>Dashboard</Typography>
                    </Box>
                    <Box sx={style.sideBarList}>
                        <DashboardIcon sx={{ color: '#363cff', ml: 1 }} />
                        <Typography sx={{ fontSize: '20px' }}>Perks</Typography>
                    </Box>
                    <Box sx={style.sideBarList}>
                        <DashboardIcon sx={{ color: '#363cff', ml: 1 }} />
                        <Typography sx={{ fontSize: '20px' }}>Addons</Typography>
                    </Box>
                    <Box sx={style.sideBarList}>
                        <QuizIcon sx={{ color: '#363cff', ml: 1 }} />
                        <Typography sx={{ fontSize: '20px' }}>FAQ</Typography>
                    </Box>
                    <Box sx={style.sideBarList}>
                        <SupportAgentIcon sx={{ color: '#363cff', ml: 1 }} />
                        <Typography sx={{ fontSize: '20px' }}>Support</Typography>
                    </Box>
                </Stack>
                <Button variant='contained' sx={{
                    backgroundColor: '#b0b2e8',
                    width: '14.5%',
                    borderRadius: '0',
                    bottom: '0',
                    position: 'absolute'
                }}>Logout</Button>
            </Container>
        </>
    )
}

export default SideBar
