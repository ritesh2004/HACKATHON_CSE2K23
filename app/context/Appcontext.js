"use client"
import { createContext, useEffect, useState } from "react";
import { createClient } from '@supabase/supabase-js';
import { useRouter } from "next/navigation";

const supabaseUrl = 'https://frceuzxqwexmrbfvqjvm.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyY2V1enhxd2V4bXJiZnZxanZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI2MjQ3MTQsImV4cCI6MjAwODIwMDcxNH0.a8388biNDvaNsES_tMKi38HDzWi8oHVf0oZsjuqgFwo"
const supabase = createClient(supabaseUrl, supabaseKey)

const Appcontext = createContext();
export default Appcontext;

const AppcontextProvider = ({ children }) => {
    const router = useRouter();
    const [formData, setFormData] = useState({});
    const [image, setImage] = useState();
    const [loading, setLoading] = useState(false);
    const [arr, setArr] = useState([]);
    const [donated, setDonated] = useState()
    const [applicants, setApplicants] = useState()
    const [row, setRow] = useState({})
    const [sent, setSent] = useState(false)
    // console.log(image)
    const time = new Date().getTime()
    // console.log(time)
    // console.log(formData?.upiid)
    const pushTo = (url) => {
        router.push(url)
    }
    const uploadForm = async () => {
        // e.preventDefault()
        setLoading(true)
        const { data, error } = await supabase.storage
            .from('images')
            .upload('public/' + image?.lastModified + time + ".jpg", image)
        let info = data
        if (!error) {
            let { path } = info;
            let image_url = `https://frceuzxqwexmrbfvqjvm.supabase.co/storage/v1/object/public/images/${path}`
            const { data, error } = await supabase
                .from('raiser')
                .insert([
                    {
                        name: formData?.name,
                        email: formData?.email,
                        contact: Number(formData?.contact),
                        address: formData?.address,
                        gender: formData?.gender,
                        age: Number(formData?.age),
                        heading: formData?.heading,
                        reason: formData?.reason,
                        image_url: image_url,
                        urgent: formData?.urgent,
                        amount: Number(formData?.amount),
                        upi_id: formData?.upiid
                    }
                ])
                .select()
            setLoading(false)
            if (!error) {
                alert("Successfully submitted")
                pushTo('/donation')
            } else {

            }

        } else {
            alert(error)
        }
    }

    const getRows = async () => {
        let { data: raiser, error } = await supabase
            .from('raiser')
            .select('*')
        setArr(raiser)
        // console.log(raiser)
        setApplicants(raiser?.length)
    }

    const getRow = async (id) => {
        // console.log(id)
        let { data: raiser, error } = await supabase
            .from('raiser')
            .select('*')
            .eq('id', id)

        setRow(raiser)
        // console.log(raiser)
    }

    const getData = async (id) => {
        let { data: raiser, error } = await supabase
            .from('raiser')
            .select('raised')
            .eq('id', id)

        console.log(raiser[0]?.raised)

        return Number(raiser[0]?.raised)
    }

    const updateRow = async (id, raised) => {
        let preVal = await getData(id);
        console.log("Previous", preVal)
        console.log('Donated', raised)
        console.log("Total", Number(preVal) + Number(raised))
        const { data, error } = await supabase
            .from('raiser')
            .update({ raised: Number(preVal) + Number(raised) })
            .eq('id', id)
            .select()

    }

    const getTotal = async () => {
        const { data: raiser, error } = await supabase
            .from('raiser')
            .select('raised')
        let total = 0;
        // console.log(raiser)
        raiser?.forEach(subTotal => {
            // console.log(subTotal)
            return (
                total += Number(subTotal?.raised)
            )
        })

        setDonated(total)
    }

    getTotal()

    useEffect(() => {
        getRows()
        // console.log(row)
    }, [])

    const postFeedback = async (e) => {
        e.preventDefault()
        setSent(false)
        const { data, error } = await supabase
            .from('user_feedback')
            .insert([
                { email: e.target.email.value, feedback: e.target.feedback.value },
            ])
            .select()
        if (!error) {
            setSent(true)
            alert("Successfully submitted")
        }
    }

    const editForm = async (id) => {
        console.log(formData)
        setLoading(true)
        const { data, error } = await supabase
            .from('raiser')
            .update(
                [{
                    name: formData?.name,
                    email: formData?.email,
                    contact: Number(formData?.contact),
                    address: formData?.address,
                    gender: formData?.gender,
                    age: Number(formData?.age),
                    heading: formData?.heading,
                    reason: formData?.reason,
                    urgent: formData?.urgent,
                    amount: Number(formData?.amount),
                    upi_id: formData?.upiid
                }]
            )
            .eq('id', id)
            .select()
        setLoading(false)
        if (!error) {
            alert("Successfully Updated")
            pushTo('/donation')
        } else {
            alert(error)
        }

    } 

    const deleteRow = async (id)=>{
        const { error } = await supabase
        .from('raiser')
        .delete()
        .eq('id', id)
        if (!error) {
            alert("Item deleted")
        }
    }


let values = {
    setFormData: setFormData,
    uploadForm: uploadForm,
    setImage: setImage,
    loading: loading,
    arr: arr,
    updateRow: updateRow,
    donated: donated,
    applicants: applicants,
    getRow: getRow,
    row: row,
    postFeedback: postFeedback,
    sent: sent,
    editForm: editForm,
    deleteRow:deleteRow
}
return (
    <Appcontext.Provider value={values}>
        {children}
    </Appcontext.Provider>
)
}

export { AppcontextProvider };