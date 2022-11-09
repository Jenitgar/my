import { Outlet } from 'react-router-dom'
import { StatesProvider } from '../contexts/states'

export function Provider() {
  return (
    <StatesProvider>
      <Outlet />
    </StatesProvider>
  )
}
