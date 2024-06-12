import { Link } from "react-router-dom"

const PRODUCTS = [
  {
    id: 1,
    title: "Apple",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatem repellendus sequi, omnis ad corrupti ipsam? Adipisci doloremque ullam dolorum nisi, aliquam cum illo! Molestias dignissimos reiciendis minima exercitationem unde."
  },
  {
    id: 2,
    title: "Mangoe",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatem repellendus sequi, omnis ad corrupti ipsam? Adipisci doloremque ullam dolorum nisi, aliquam cum illo! Molestias dignissimos reiciendis minima exercitationem unde."
  },
  {
  id: 3,
  title: "Orange",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatem repellendus sequi, omnis ad corrupti ipsam? Adipisci doloremque ullam dolorum nisi, aliquam cum illo! Molestias dignissimos reiciendis minima exercitationem unde."
},
]

const Products = () => {
  
  return (
    <> 
    { PRODUCTS.map((product) => (
      <Link to ={`/product/${product.title}`}>
        <div key={product.id} className="card">
      <p className="title">{product.title}</p>
      <p>{product.description}</p>
    </div>
      </Link>
  )
  )}
</>
  )
}

export default Products