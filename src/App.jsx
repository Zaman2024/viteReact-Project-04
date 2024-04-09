import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrency from './hooks/useCurrency'

import './App.css'

function App() {
  const [data] = useCurrency(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
  console.log(data);

  return (
    <>
      <div>
        <h1>Zaman</h1>
        <h1>Hi Zaman</h1>
      </div>
   
    </>
  )
}

export default App
