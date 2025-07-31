import { Route, Routes } from "react-router-dom"
import { routList } from "../components"

const DashboardRoute = () => {
    return (
        <Routes>
            {routList.map(item => <Route key={item.id} path={item.path} element={item.element} />)}
        </Routes>
    )
}

export default DashboardRoute
