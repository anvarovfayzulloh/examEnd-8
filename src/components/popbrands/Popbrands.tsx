import { useEffect, useState } from "react"
import { useGetProductWithBrandsQuery } from "../../redux/api/productsApi"
import Loading from "../../assets/images/loading.gif"
import Card from "../../components/card/Card"

const Popbrands = () => {

    const {data} = useGetProductWithBrandsQuery("dior")
    const [products, setProducts] = useState(undefined);

    useEffect(() => {
        setProducts(data)
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