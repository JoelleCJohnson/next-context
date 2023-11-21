"use client"
import { AuthContext } from "@/context/AuthContext"
import { useRouter, usePathname } from "next/navigation"
import { useContext, useEffect } from "react"

export default function CheckAuth() {
    const { user, setUser } = useContext(AuthContext)

    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (!user && pathname.startsWith('/dashboard')) {
            const _user = sessionStorage.getItem('user')
            if (_user) {
                setUser(JSON.parse(_user))
            } else {
                router.push('/login')
            }
        }
        if (user && pathname.startsWith('/login')) {
            router.push('/dashboard')
        }
    }, [user, pathname])//if user changes, we want to kick them off the dashboard

    return null
}