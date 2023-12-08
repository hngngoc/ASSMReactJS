import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { useProductMutation } from '@/hooks/useProductMutation'
import { useNavigate } from 'react-router-dom'

const ProductAdd = () => {
    const { toast } = useToast()
    const navigate = useNavigate()
    const { form, onSubmit } = useProductMutation({
        action: 'CREATE',
        onSuccess: () => {
            toast({
                variant: 'default',
                title: 'Chúc mừng bạn!',
                description: 'Bạn đã thêm sản phẩm thành công'
            })
            form.reset()
            setTimeout(() => {
                navigate('/admin/products')
            }, 2000)
        }
    })
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tên sản phẩm</FormLabel>
                            <FormControl>
                                <Input type='text' placeholder='Tên sản phẩm' {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='price'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Giá sản phẩm</FormLabel>
                            <FormControl>
                                <Input type='number' placeholder='Giá sản phẩm' {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='image'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Link ảnh sản phẩm</FormLabel>
                            <FormControl>
                                <Input type='text' placeholder='Link ảnh sản phẩm' {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='desc'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mô tả</FormLabel>
                            <FormControl>
                                <Input type='text' placeholder='Mô tả sản phẩm' {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type='submit' variant='destructive' className='mt-3'>
                    Thêm sản phẩm
                </Button>
            </form>
        </Form>
    )
}

export default ProductAdd
