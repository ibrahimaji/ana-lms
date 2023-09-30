import { Login } from "@/components/Auth/components/Login"
import { Register } from "@/components/Auth/components/Register"
export default function Page() {
  return (
    <div className="flex justify-center gap-8">
      <Login />
      <Register />
    </div>
  )
}
