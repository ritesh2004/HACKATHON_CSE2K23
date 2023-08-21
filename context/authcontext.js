"use client";
import { createContext,useContext } from "react";

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://frceuzxqwexmrbfvqjvm.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyY2V1enhxd2V4bXJiZnZxanZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI2MjQ3MTQsImV4cCI6MjAwODIwMDcxNH0.a8388biNDvaNsES_tMKi38HDzWi8oHVf0oZsjuqgFwo"
const supabase = createClient(supabaseUrl, supabaseKey,{
    auth: {persistSession:false}
})

const Authcontext = createContext()

export default Authcontext;

const Authprovider = ({children}) =>{
    let value = {
        "name":"Ritesh"
    }
    return (
        <Authcontext.Provider value={value}>
            {children}
        </Authcontext.Provider>
    )
}

export {Authprovider}