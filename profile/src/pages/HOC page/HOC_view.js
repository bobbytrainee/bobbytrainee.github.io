import First from "./First";
import Second from "./Second";
import { useState } from "react";
import { useSelector } from "react-redux";
import store from "../../redux/store";

const HOCview = ({counter, setCounter}) => {
const data = useSelector(store => store.rickMorty.characters)
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
