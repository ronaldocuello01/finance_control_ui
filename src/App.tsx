import './App.css'
import { HomeComponent } from './pages/Home'

import { useRoutes, BrowserRouter } from 'react-router-dom'
import { SettingsComponent } from './pages/Settings';
import { DataComponent } from './pages/Data';
import { PlanningComponent } from './pages/Planning';
import { WishlistComponent } from './pages/Wishlist';
import { DuesComponent } from './pages/Dues';
import { SavingsComponent } from './pages/Savings';
import { NotfoundComponent } from './pages/NotFound';
import { NavbarComponent } from './components/Navbar';
import { LoginComponent } from './pages/Login';


const AppRoutes = () => {

  let routes = useRoutes([
    { path: '/', element: <HomeComponent /> },
    { path: '/settings', element: <SettingsComponent /> },
    { path: '/data', element: <DataComponent /> },
    { path: '/planning', element: <PlanningComponent /> },
    { path: '/wishlist', element: <WishlistComponent /> },
    { path: '/dues', element: <DuesComponent /> },
    { path: '/savings', element: <SavingsComponent /> },
    { path: '/login', element: <LoginComponent /> },
    { path: '/*', element: <NotfoundComponent /> }
  ]);

  return routes;

}


function App() {

  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
