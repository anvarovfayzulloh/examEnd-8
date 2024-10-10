import { useEffect, useState } from "react"
import Banner_1 from "../../components/banners/Banner_1"
import Banner_2 from "../../components/banners/Banner_2"


const Banner = () => {

    const [number, setNumber] = useState(0)


   useEffect(()=> {
       const randomNumber = Math.floor(Math.random() * 2) + 1
       setNumber(randomNumber)
   }, [])

  return (
    <div>
        {
           number === 1 ? <Banner_1 /> : <Banner_2 /> 
        }
    </div>
  )
}

export default Banner