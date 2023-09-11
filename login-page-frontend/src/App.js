import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import { ChakraProvider } from '@chakra-ui/react'

import RootLayout from './layouts/RootLayout'

import HomePage from './pages/homepage'
import Login from './pages/projects/login-page/login'
import Home from './pages/projects/login-page/home'
import ProtectedRoutes from './layouts/ProtectedRoutes'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="projects/login-page" element={<Login />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="projects/login-page/home" element={<Home />} />
      </Route>
    </Route>
  )
)

function App() {

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
