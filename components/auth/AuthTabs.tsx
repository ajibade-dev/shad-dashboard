import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"


const AuthTabs = () => {
  return (
    <Tabs defaultValue="login" className="w-[400px] m-2 md:m-0">
  <TabsList className="grid w-full grid-cols-2">
    <TabsTrigger value="login">Login</TabsTrigger>
    <TabsTrigger value="register">Register</TabsTrigger>
  </TabsList>
  <TabsContent value="login">
<LoginForm />
  </TabsContent>
  <TabsContent value="register"><RegisterForm /></TabsContent>
</Tabs>

  )
}

export default AuthTabs