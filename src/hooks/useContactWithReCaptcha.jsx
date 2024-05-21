import React from 'react'

import dateFormat from 'dateformat';
const recaptchaRef = React.createRef();
 
const onSubmitWithReCAPTCHA = async (submitFormCallback, errorCallback) => {
    console.log(recaptchaRef.current)
    try{
        const token = await recaptchaRef.current.executeAsync();
        console.log("got recaptcha token")
        if(token){
            submitFormCallback(token)
        }
        else{
            errorCallback()
        }
    } catch(e) {
        errorCallback()
    }
}

const generateTimestamp = () => {
    return dateFormat( new Date(), "mmmm dS, yyyy h:MM TT" )
}

const sendRequestGenerate = (values, afterSubmit) => (token) => {
    fetch("/contact", {
        method: "POST",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        mode: "cors",
        body: JSON.stringify({
            name: values.name,
            email: values.email,
            message: values.message,
            token: token
        })
    }).then(res => {
        console.log('response', res)
        if(!res || res.status != 200){
            afterSubmit("error", generateTimestamp())
        }
        else{
            afterSubmit("submitted", generateTimestamp())
        }
        
    }, (err)=> {
        console.log('err', err)
        afterSubmit("error", generateTimestamp())
    })
}

const useContactWithReCaptcha = () => {
    return [recaptchaRef, onSubmitWithReCAPTCHA, sendRequestGenerate]
}

export default useContactWithReCaptcha