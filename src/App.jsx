import { DashboardRoute, LogenRoute } from "./routes"

const App = () => {
  const token = true
  return token ? <DashboardRoute/> : <LogenRoute/>
}

export default App
