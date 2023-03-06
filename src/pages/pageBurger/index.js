import React, { useEffect, useState } from 'react'
import axios from 'axios'

// URL API
import { URL } from '../../utils/constantes/urls.js'

function Burger(){
  const [burger,setBurger] = useState([])

  useEffect(() => {
    const fetchBurgers = async () => {
      try{
        const { data } = await axios.get(URL.fetchBurger)
        setBurger(data)
      }catch(error){
        console.log(error.message())
      }
    }
    fetchBurgers()
  }, [])

  return(
    <>
      <h1>Nos Burgers 🍔</h1>
      <div>
      {burger.map((item, index) => {
        return(
          <div key={index}>
           <p className=''>{item.name} </p>
           <img src={item.image} alt={item.name} />
           <p>{item.price.$numberDecimal}</p>
           <p>{item.description}</p>
          </div>
        )
      })}
      </div>
    </>
  )
}
export default Burger