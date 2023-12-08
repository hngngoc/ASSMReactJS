import { useProductQuery } from '@/hooks/useProductQuery'
import { IProduct } from '@/common/Type'
import { useParams } from 'react-router-dom'
import NameForm from './NameForm'
import PriceForm from './PriceForm'
import LinkImageForm from './LinkImageForm'
import DescForm from './DescForm'

const ProductEdit = () => {
    const { id } = useParams()
    const { data, isLoading, isError } = useProductQuery(id ? +id : 0)
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error...</div>
    return (
        <>
        <div>
            <h2>Update sản phẩm</h2>
            <div className='grid grid-cols-2 gap-8  mx-auto'>
                <NameForm data={data as IProduct} />
                <PriceForm data={data as IProduct} />
                <LinkImageForm data={data as IProduct} />
                <DescForm data={data as IProduct} />
            </div>
        </div></>
    )
}

export default ProductEdit