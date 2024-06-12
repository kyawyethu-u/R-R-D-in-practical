import { useNavigate, useParams } from "react-router-dom"


const ProductDetails = () => {
    const {title} = useParams();
    const navigate =useNavigate();
    const navigateHandler = () =>{
        navigate("/products")
    }

  return (
    <>
    <div>ProductDetailPage </div>
    <h1>Product title - {title} </h1>
    <button onClick={navigateHandler}>Go back to products</button>
    </>
  )
}

export default ProductDetails