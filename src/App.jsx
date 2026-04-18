import React, { useState } from 'react'
import axios from 'axios'
import ShowData from './components/ShowData'

const App = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    try {
      setLoading(true)
      const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=8')
      setData(response.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      
      
      <div className="text-center mb-8">
        <button 
          onClick={getData}
          className="bg-linear-to-r from-teal-500 to-cyan-500 px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 active:scale-95 transition"
        >
          {loading ? "Loading..." : "Get Images"}
        </button>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <ShowData key={item.id} item={item} />
        ))}
      </div>

    </div>
  )
}

export default App