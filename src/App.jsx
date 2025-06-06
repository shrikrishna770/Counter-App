import { useState } from "react"

const App = () => {

  const [value, setValue] = useState(10)
  const valueDecrease = () => {
    if (value) {
      setValue(value - 1)
    }
  }
  const valueIncrease = () => {
    if (value < 30) {
      setValue(value + 1)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
      <div className="bg-white text-gray-800 p-8 rounded-xl shadow-lg w-72 text-center">
        <h1 className="text-2xl font-bold  text-purple-600">Counter App</h1>
        <div>
          <p className="text-sm mb-2">The count range betwenn 0 to 30</p>
          <h3 className="text-xl font-semibold">{value}</h3>
        </div>
        <div className="flex items-center justify-center gap-3 mt-2">
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all duration-200" onClick={valueDecrease}>
            Decrease
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all duration-200" onClick={valueIncrease}>
            Increase
          </button>
        </div>
      </div>
    </div>
  )
}


export default App