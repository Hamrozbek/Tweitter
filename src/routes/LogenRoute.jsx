import { Route, Routes } from 'react-router-dom'
import { PATH } from '../components'
import Login from '../pages/Auth/Login'
import { Suspense } from 'react'
import PagesLoading from '../components/PagesLoading'

const LogenRoute = () => {
  return (
    <Routes>
        <Route path={PATH.main} element={ <Suspense fallback={<PagesLoading/>}><Login/></Suspense>}/>
    </Routes>
  )
}

export default LogenRoute
