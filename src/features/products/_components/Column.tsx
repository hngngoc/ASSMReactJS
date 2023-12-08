import { IProduct } from '@/common/Type'
import { ColumnDef } from '@tanstack/react-table'
import { Link } from 'react-router-dom'
import { Button } from '../../../components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider } from '../../../components/ui/tooltip'

export const getColumns = (onRemove: (product: IProduct) => void): ColumnDef<IProduct>[] => [
    {
        accessorKey: 'name',
        header: () => (
            <div className='text-red-500'>
                Tên sản phẩm
                <TooltipProvider>
                    <Tooltip>
                        <TooltipContent>
                            <p>Nội dung</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        )
    },
    {
        accessorKey: 'price',
        header: 'Giá sản phẩm'
    },
    {
        header: 'Ảnh sản phẩm',
        cell: ({ row }) => {
            const product = row?.original
            return (
                <>
                    <img src={product.image} alt="" className='w-20 h-20'/>
                </>
            )
        }
    },
    {
        header: 'Chức năng',
        id: 'action',
        cell: ({ row }) => {
            const product = row?.original
            return (
                <>
                    <Link to={`/admin/products/${product.id}/edit`}>
                        <Button className='mr-1'>Sửa</Button>
                    </Link>
                    <Button 
                        onClick={() => {
                            window.confirm('Bạn có chắc chắn xóa không?') && onRemove(product)
                        }}
                    >
                        Xóa
                    </Button>
                </>
            )
        }
    }
]
