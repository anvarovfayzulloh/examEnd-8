import { useEffect, useState } from "react"
import { useGetProductWithBrandsQuery } from "../../redux/api/productsApi"
import Loading from "../../assets/images/loading.gif"
import Card from "../../components/card/Card"

const Popbrands = () => {

    const {data} = useGetProductWithBrandsQuery("dior")
    const [products, setProducts] = useState(undefined);

    useEffect(() => {
        setProducts(data?.slice(0, 20))
    },[data])
    if(products === undefined){return <div className="flex justify-center items-center h-screen" ><img src={Loading}/></div>}
    


  return (
    <div>
        <Card products={products}/>
    </div>
  )
}

export default Popbrands