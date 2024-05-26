import { Suspense } from "react"
import { RouterProvider } from 'react-router-dom'

import './index.css'
import router from '../config/router'

export default function App() {
    return (
        <Suspense fallback={'Loading....'}>
            <RouterProvider router={router} />
        </Suspense>
    )
}
