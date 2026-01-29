import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //quotes (array)
  //selectedStatus (string)
  //filteredQuotes (computed list) (array?)
  return (
	<>
	  <div className='filter flex'>
		<form action="" className='max-w-sm mx-auto'>
		  <label for="status-select" className='block mb-1 text-sm font-medium text-gray-300'>Select a status</label>
		  <select name="status" id="status-select" className='block w-full
    rounded-md
    border border-gray-300
    bg-white
    px-3 py-2
    text-sm text-gray-900
    shadow-sm
    focus:border-blue-500
    focus:outline-none
    focus:ring-1
    focus:ring-blue-500'>
			<option value="all" selected>--Please choose a status--</option>
			<option value="submitted">Submitted</option>
			<option value="quoted">Quoted</option>
			<option value="expired">Expired</option>
		  </select>
		</form>
	  </div>
	  <div className='quote__wrapper'>

	  </div>
	  {/* <div>
		<a href="https://vite.dev" target="_blank">
		  <img src={viteLogo} className="logo" alt="Vite logo" />
		</a>
		<a href="https://react.dev" target="_blank">
		  <img src={reactLogo} className="logo react" alt="React logo" />
		</a>
	  </div>
	  <h1>Vite + React</h1>
	  <div className="card">
		<button onClick={() => setCount((count) => count + 1)}>
		  count is {count}
		</button>
		<p>
		  Edit <code>src/App.jsx</code> and save to test HMR
		</p>
	  </div>
	  <p className="read-the-docs">
		Click on the Vite and React logos to learn more
	  </p> */}
	</>
  )
}

export default App
