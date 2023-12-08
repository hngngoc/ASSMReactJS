import { Button } from "@/components/ui/button"
import ProductList from "@/features/products/_components/TableListProduct"
import { Link } from "react-router-dom"

const ProductAdminPage = () => {
    return (
      <>
      <Link to={"add"}>
        <Button variant="outline" className="mb-5">Thêm sản phẩm</Button>
      </Link>
      <ProductList/></>
    )
  }
  
  export default ProductAdminPage