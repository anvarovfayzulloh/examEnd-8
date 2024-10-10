import { useParams } from "react-router-dom"
import { useGetProductWithCategoriesQuery } from "../../redux/api/productsApi"
import { useEffect, useState } from "react"
import Nav from "../../components/nav/Nav"
import Menu from "../../components/menu/Menu"
import Banner from "../../components/banners/Banner"


const Categories = () => {
    const {category} = useParams()
   const {data} = useGetProductWithCategoriesQuery(category);
   const [products, setProducts] = useState([])
   useEffect(()=> {
       setProducts(data)
       console.log(data, products)
   }, [data])

   

    return (
    <div>
        <Banner/>
        <Nav/>
        <Menu/>
        
    </div>
  )
}

export default Categories