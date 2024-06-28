"use client";
import { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey,{
    auth: {persistSession:false}
})

const Authcontext = createContext()

export default Authcontext;

const Authprovider = ({children}) =>{
    const [loading,setLoading] = useState(false)
    const [sent,setSent] = useState(false)
    const [err,setErr] = useState(false)
    const [token,setToken] = useState();
    const [userInfo,setUserInfo] = useState({})

    useEffect(()=>{
        getUserInfo()
    },[token])

    const getUserInfo = ()=>{
        console.log('called')
        const stored_token = localStorage.getItem('accessToken') || null
        if (stored_token !== 'undefined' && stored_token !== null) {   
            let decoded = jwtDecode(stored_token)
            setUserInfo(decoded)
        }
    }

    const signUp = async (e)=>{
        e.preventDefault()
        setLoading(true)
        console.log("Triggered")
        setSent(false)
        // console.log(e.target.email.value)
        try{
            let { data, error } = await supabase.auth.signUp({
                email: e.target.email.value,
                password: e.target.password.value
            })
            setLoading(false)
            if (error) {
                alert(error)
                setErr(true)
                setSent(false)
            }else {
                setErr(false)
                setSent(true)
                // alert(error)
                console.log(error)
                // setUserInfo(data)
                setToken(data?.session?.access_token)
                localStorage.setItem("accessToken",data?.session?.access_token)
            }
        }catch(error){
            alert(error)
        }
    }

    const logIn = async (e) =>{
        e.preventDefault()
        setLoading(true)
        console.log("Triggered")
        setSent(false)
        // console.log(e.target.email.value)
        try{
            let { data, error } = await supabase.auth.signInWithPassword({
                email: e.target.email.value,
                password: e.target.password.value
            })
            setLoading(false)
            if (error) {
                alert(error)
                setErr(true)
                setSent(false)
            }else{
                setErr(false)
                setSent(true)
                // alert(error)
                console.log(error)
                // setUserInfo(data)
                setToken(data.session.access_token)
                localStorage.setItem("accessToken",data.session.access_token)
            }
        }catch(error){
            alert(error)
        }
    }

    const logOut = async()=>{   
        let { error } = await supabase.auth.signOut()
        if (error) {
            alert(error)
        }else{
            localStorage.removeItem('accessToken')
            setUserInfo({})
        }
    }

    let values = {
        signUp:signUp,
        loading:loading,
        sent:sent,
        err:err,
        logIn:logIn,
        userInfo:userInfo,
        logOut:logOut,
        setSent:setSent
    }
    return (
        <Authcontext.Provider value={values}>
            {children}
        </Authcontext.Provider>
    )
}

export {Authprovider}