import { Link } from "react-router-dom"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import useAuthMutation from '@/hooks/userAuthMutation'
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
  const navigate = useNavigate()
  const { form, onSubmit } = useAuthMutation({
    action: 'SIGN_UP',
    onSuccess: () => {
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
  <h1 className="text-2xl font-semibold mb-4">Register</h1>
  <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <FormField
                        name='name'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tên</FormLabel>
                                <FormControl>
                                    <Input type='text' placeholder='Tên của bạn' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                    <FormField
                        name='confirmPassword'
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Xác nhận mật khẩu</FormLabel>
                                <FormControl>
                                    <Input type='password' placeholder='*****' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button variant='destructive' type='submit' className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full mt-10">
                        Đăng ký
                    </Button>
                </form>
            </Form>
  <div className="mt-6 text-blue-500 text-center">
    <Link to={"/signin"}  className="hover:underline">Sign in Here</Link>
  </div>
</div>
</div>
</>
    )
  }
  
  export default SignUpPage