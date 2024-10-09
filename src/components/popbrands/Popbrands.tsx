import { useEffect, useState } from "react"
import { useGetProductWithCategoriesQuery } from "../../redux/api/productsApi"
import Loading from "../../assets/images/loading.gif"
import Card from "../../components/card/Card"

const Popbrands = () => {

    const {data} = useGetProductWithCategoriesQuery("almay")
    const [products, setProducts] = useState(undefined);

    useEffect(() => {
        setProducts(data?.slice(0, 5))
    },[data])
    useEffect(() => {
        console.log(products)
    }, [data])
    if(products === undefined){return <img src={Loading}/>}
    


  return (
    <div>
        <Card  products={products}/>
    </div>
  )
}

export default Popbrands