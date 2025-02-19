import React from 'react'
import './App.css'
import { Header } from "./components/header/heaeder"
import { Swiper } from "./components/body/swipper/Swiper"

function App() {
  const listOfItems = [
    {
      src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0MDE1NTg2Ng&ixlib=rb-1.2.1&q=85",
      description: "DESCRIPTION",
    },
    {
      src: "https://cdn.sanity.io/images/0v989dzu/production/2a8558e264efa0fed078173860de9588fe27c643-2880x1134.jpg?w=2000&crop=center",
      description: "DESCRIPTION",
    },
    {
      src: "https://cdn.sanity.io/images/0v989dzu/production/5c7234bdb5d7c9026fe8768f5fc4a3017961dfb1-2880x1134.jpg?w=2000&crop=center",
      description: "DESCRIPTION",
    }
  ]

  return (
    <>  
      <Header />
      <Swiper images={listOfItems} />
    </>
  )
}

export default App
