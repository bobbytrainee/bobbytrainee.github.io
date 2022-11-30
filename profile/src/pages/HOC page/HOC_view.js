import First from "./First";
import Second from "./Second";
import { useState } from "react";

const HOCview = ({data, counter, setCounter}) => {

    return (
        <>
            <First counter={counter} setCounter={setCounter}/>
            <Second counter={counter} setCounter={setCounter}/>
            {data?.length > 0 &&
                data.map((item, index) => (
                    <div key={item.name}>
                        <p>{item.name}</p>
                        <img src={item.image} alt=""/>
                    </div>
                ))}
        </>
    )
}

export default HOCview
