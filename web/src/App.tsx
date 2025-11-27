import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { ThemeProvider } from './components/ui/theme-provider'

function App() {
  const [count, setCount] = useState(0)
  const [apiResponse, setApiResponse] = useState(null)

  useEffect(() => {
    fetch("/api/hello").then((response) => {
      return response.json()
    }).then((json) => setApiResponse(json))

  }, [])

  return (
    <ThemeProvider defaultTheme='dark' storageKey='ui-theme'>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='text-red-500'>Vite + REACT</h1 >
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
        GO API RESPONSE: {JSON.stringify(apiResponse, null, 2)}
      </p>
      <p>
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button className='bg-blue-300 text-gray-700 rounded-none font-bold'>Button with custom style</Button>
      </p>
    </ThemeProvider >
  )
}

export default App
