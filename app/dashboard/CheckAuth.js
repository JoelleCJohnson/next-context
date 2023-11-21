"use client"
import { AuthContext } from "@/context/AuthContext"
import { useRouter, usePathname } from "next/navigation"
import { useContext, useEffect } from "react"

export default function CheckAuth() {
    const { user } = useContext(AuthContext)
 
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if(!user && pathname.startsWith('/dashboard')){
            router.push('/login')
        }
        if(user && pathname.startsWith('/login')){
            router.push('/dashboard')
        }
    },[user, pathname])//if user changes, we want to kick them off the dashboard

    return null
}