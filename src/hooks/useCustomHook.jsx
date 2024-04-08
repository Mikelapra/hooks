import { useState, useEffect } from "react";

const useCustomHook = (url) => {
    const [data, setData] = useState(null)


    useEffect (() => {
        fetch(url)
            .then((response)=> response.json())
            .then((data) => {
                setData(data)
    })
},[url]);

    return {data, setData}
}

export default useCustomHook