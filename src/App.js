import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import RootLayout from './layouts/RootLayout'

import Login from './pages/login'
import Home from './pages/home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Login />} />
      <Route path="home" element={<Home />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App;
