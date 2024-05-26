import { Outlet } from "react-router";
import { Box, Card, CardContent } from "@mui/material";

export default function AuthLayout() {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100dvh',
            }}
        >
            <Card variant="elevation">
                <CardContent>
                    <Outlet />
                </CardContent>
            </Card>
        </Box>
    )
}
