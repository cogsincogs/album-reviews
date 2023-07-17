import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import RootLayout from './layouts/RootLayout'

import Login from './pages/login'
import Home from './pages/home'
import ProtectedRoutes from './layouts/ProtectedRoutes'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
