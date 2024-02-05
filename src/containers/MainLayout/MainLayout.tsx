import React from 'react'
import { Outlet } from 'react-router-dom'
import {
    AppBar,
    Typography,
    Button,
    Toolbar
} from "@mui/material";

import MContainer from "../../components/MUI/MContainer/MContainer";

const MainLayout: React.FC = () => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        LiveChart
                    </Typography>
                    <Button color="inherit">
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
            <MContainer>
                <Outlet />
            </MContainer>
        </>
    )
}
export default MainLayout