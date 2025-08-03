import { Route, Routes } from "react-router-dom"
import { routList } from "../components"
import { Navbar, Sitebar } from "../modules"

const DashboardRoute = () => {
    return (
        <div className="flex containers justify-between">
            <Navbar />
            <div className="w-[909px] h-[100vh] overflow-y-auto border-x-[1px] border-[#D8D8D8]">
                <Routes>
                    {routList.map(item => <Route key={item.id} path={item.path} element={item.element} />)}
                </Routes>
            </div>
            <Sitebar />
        </div>
    )
}

export default DashboardRoute
