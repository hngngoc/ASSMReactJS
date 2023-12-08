import { Link } from "react-router-dom"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import useAuthMutation from '@/hooks/userAuthMutation'
import { useNavigate } from 'react-router-dom'

const SigninPage = () => {
  const { toast } = useToast()
    const navigate = useNavigate()
    const { form, onSubmit } = useAuthMutation({
        action: 'SIGN_IN',
        onSuccess: () => {
            toast({
                title: 'Đăng nhập thành công',
                variant: 'success',
                description: 'Chào mừng bạn đến với website của chúng tôi'
            })
            setTimeout(() => navigate('/'))
        }
    })
  return (
    <>
    <div className="bg-gray-100 flex justify-center items-center h-screen">
  <div className="w-1/2 h-screen hidden lg:block">
    <img src="https://kingshoes.vn/data/upload/files/bannersitebar01.jpg" alt="Placeholder Image" className="object-cover w-full h-full"/>
  </div>
<div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 className="text-2xl font-semibold mb-4">Login</h1>
  <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        name='email'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type='email' placeholder='xxx@gmail.com' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name='password'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mật khẩu</FormLabel>
                                <FormControl>
                                    <Input type='password' placeholder='*****' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button variant='destructive' type='submit' className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full mt-10">
                        Đăng nhập
                    </Button>
                </form>
            </Form>
 
  <div className="mt-6 text-blue-500 text-center">
    <Link to={"/signup"} className="hover:underline">Sign up Here</Link>
  </div>
</div>
</div></>
  )
}

export default SigninPage