import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const MainLayout = ({ title, children }) => {
    return (
        <Box>
            <AppBar component='nav'>
                <Toolbar>
                    <Typography variant='h6'>{title}</Typography>
                </Toolbar>
            </AppBar>
            <Box component='main' paddingTop={8} paddingBottom={8} paddingX={3}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    )
}

export default MainLayout