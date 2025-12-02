import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Account from './modules/Account/Account'
import Dashboard from './modules/Dashboard/Dashboard'
import Settings from './modules/Settings/Settings'

import './App.css'

const App = (): React.ReactElement => {
  return (
    <>
      <h1>React + TypeScript + Vite + TailwindCSS + React Router Template</h1>
      <BrowserRouter>
        <div className="flex flex-col gap-4">
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Account />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
