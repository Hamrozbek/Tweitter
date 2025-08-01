import { DashboardRoute, LogenRoute } from "./routes"
import { useCookies } from "react-cookie";

const App = () => {
  const [cookies] = useCookies(['token'])

  return cookies?.token ? <DashboardRoute/> : <LogenRoute/>
}

export default App
