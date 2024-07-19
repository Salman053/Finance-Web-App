import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react"
import animatedImg from '../../../../public/assets/software tester.gif'
import Image from "next/image";
export default function Page() {

  return (
    <div className="min-h-screen grid grid-cols-1  lg:grid-cols-2">
      <div className="h-full lg:flex justify-center  px-4 items-center  flex-col">
        <div className="text-center  pt-8">
          <h3 className="text-3xl text-[#2e2a47] font-bold capitalize">Welcome Back!</h3>
          <p className="text-base text-[#7E8CA0]">
            Log in or Create account to get back to your dashboard!
          </p>
        </div>
        <div className="justify-center p-3 bg-gray-200 bg-opacity-35 rounded-xl flex items-center mt-4">
          <ClerkLoaded>

            <SignIn path="/sign-in" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full hidden lg:flex justify-center items-center  ">
        <Image src={animatedImg} alt="logo" className="h-[90%] hover:animate-pulse"/>
        {/* <Image  src="/assets/logo.png" height={100} width={100} alt="" /> */}
      </div>
    </div>
  )
}