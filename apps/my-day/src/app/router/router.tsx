import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import SignRoot from '../components/auth/SignRoot'
import SignIn from '../components/auth/SignIn'
import SignUp from '../components/auth/SignUp'
import Log from '../components/Log'
import SignPage from '../pages/SignPage'
import Main from '../routes/Main'
import { Provider } from '../routes/Provider'
import ErrorPage from './error'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Provider />}>
      <Route path="" element={<Main />} errorElement={<ErrorPage />}>
        <Route path="log" element={<Log />}></Route>
      </Route>
      <Route path="sign" element={<SignPage />}>
        <Route path="" element={<SignRoot />} />
        <Route path="in" element={<SignIn />} />
        <Route path="up" element={<SignUp />} />
      </Route>
    </Route>,
  ),
)
