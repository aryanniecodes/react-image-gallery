import React from 'react'

const ShowData = ({ item }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300">
      
      
      <img 
        src={item.download_url} 
        alt={item.author}
        className="w-full h-48 object-cover"
      />

      
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white">
          {item.author}
        </h2>

        <p className="text-sm text-gray-400 mt-1">
          ID: {item.id}
        </p>

        <a 
          href={item.url}
          target="_blank"
          className="inline-block mt-3 text-sm text-cyan-400 hover:underline"
        >
          View Profile →
        </a>
      </div>

    </div>
  )
}

export default ShowData