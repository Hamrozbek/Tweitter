import { DashboardRoute, LogenRoute } from "./routes"

const App = () => {
  const token = false
  return token ? <DashboardRoute/> : <LogenRoute/>
}

export default App
