import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrency'

// import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('USD')
  const [to, setTo] = useState('INR')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyData = useCurrencyInfo(from)
  const options = object.keys(currencyData)

  const swap =()=>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }
  
  const convert =()=>{
    setConvertedAmount(amount*currencyData[to])
  }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage:`url('assets/bg.jpg')`}}
    >
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <from onSubmit = {(e) => {
            e.preventDefault();
          }}>
              <div className='w-full mb-1'>
                <InputBox 
                  label = "from"
                  amount ={amount}
                  currencyOption ={options}
                  onCurrencyChange ={(currency) => setAmount(amount)}
                  selectCurrency = {from}
                />
              </div>
              <div className='relative w-full h-0.5'>
                <button type='button' className='bg-blue-500 text-white' onClick={swap}>
                  Swap
                </button>
              </div>
              <div className='w-full mb-1'>
                <InputBox 
                  label = "To"
                  amount ={convertedAmount}
                  currencyOption ={options}
                  onCurrencyChange ={(currency) => setTo(currency)}
                  selectCurrency = {to}
                  amountDisable
                />
              </div>
              <button type="submit" onClick={convert} className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
                convert {from.toUpperCase()} to {to.toUpperCase()}

              </button>
          </from>
        </div>
      </div>
    </div>
  )
}

export default App
