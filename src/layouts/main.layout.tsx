import { Outlet } from "react-router";
import { Drawers } from "../widgets";

export default function MainLayout() {
    return (
        <Drawers.MiniDrawer>
            <Outlet />
        </Drawers.MiniDrawer>
    )
}
