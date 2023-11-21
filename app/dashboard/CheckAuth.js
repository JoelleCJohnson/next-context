"use client"
import { AuthContext } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import { useContext, useEffect } from "react"

export default function CheckAuth() {
    const { user } = useContext(AuthContext)
 
    const router = useRouter()
    
    useEffect(() => {
        if(!user){
            router.push('/login')
        }
    },[user])//if user changes, we want to kick them off the dashboard

    return null
}