import { useEffect, useState } from 'react'

export const Compo = () => {
    useEffect(()=>{
        console.log("comming");
        return () => {
        console.log("going");
        }
    },[])
    return(
        <div> I am Here </div>
    );
}