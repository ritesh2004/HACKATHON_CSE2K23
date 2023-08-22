"use client";
import { createContext,useContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://frceuzxqwexmrbfvqjvm.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyY2V1enhxd2V4bXJiZnZxanZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI2MjQ3MTQsImV4cCI6MjAwODIwMDcxNH0.a8388biNDvaNsES_tMKi38HDzWi8oHVf0oZsjuqgFwo"
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
        const stored_token = localStorage.getItem('accessToken')
        if (stored_token) {   
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
                setToken(data.session.access_token)
                localStorage.setItem("accessToken",data.session.access_token)
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