import { useState, useCallback } from "react";

export const useHttp = () => {
    const [process, setProcess] = useState('waiting')

    const request = useCallback(
    async(
        url, 
        method = 'GET',
        body = null,
        headers
      ) => {
            
            setProcess('loading')

            try{
                const response = await fetch(url,
                    {
                        method,
                        body,
                        headers: {
                            "Content-Type": 'application/json',
                             "X-API-KEY": '9KWQ7WJ-Q0E41WA-P1SBPF7-MCFWNET'


                            // "X-API-KEY": 'J3398TC-FWE4PYC-PY1W405-06TQ1W1'
                            // "X-API-KEY": 'HC8GGHE-2BYMKNH-JJ0B48W-T2AJY0H'
                            //  "X-API-KEY": '8SZWD2J-QREMTZG-KDXNCA2-YP16791' //alex
                            //"X-API-KEY": '1NSAF29-XK3MWNN-QTD61HP-FR42JQ6'
                        }
                    })
                if(!response.ok) throw new Error("ERROR")

                const data = await response.json()
                return data

            } catch(e){
                setProcess('error')
                throw e
            }

        }, [])

        const clearError = useCallback(() => {
            setProcess('loading')
        }, [])

        return{
            process,
            request,
            setProcess,
            clearError
        }
}