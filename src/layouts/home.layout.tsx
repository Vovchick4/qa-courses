import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { Headers } from "../widgets";

export default function HomeLayout() {
    return (
        <Fragment>
            <Headers.ResponsiveHeader />
            <Outlet />
        </Fragment>
    )
}
