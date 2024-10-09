import { useParams } from "react-router-dom"
import { useGetProductWithCategoriesQuery } from "../../redux/api/productsApi"
import { useEffect, useState } from "react"
import Banner_1 from "../../components/banners/Banner_1"
import Banner_2 from "../../components/banners/Banner_2"
import Nav from "../../components/nav/Nav"
import Menu from "../../components/menu/Menu"


const Categories = () => {
    const {category} = useParams()
   const {data} = useGetProductWithCategoriesQuery(category);
   const [products, setProducts] = useState([])
   useEffect(()=> {
       setProducts(data)
       console.log(data)
   }, [data])

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
        <Nav/>
        <Menu/>
        
    </div>
  )
}

export default Categories