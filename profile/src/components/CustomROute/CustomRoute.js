import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// https://rickandmortyapi.com/api/character
const CustomRoute = ()=>{
const { userId } = useParams()
const params = useParams()
const [data, setData] = useState([])


useEffect(()=>{
    //API call
    console.log(userId)
        fetch(`https://rickandmortyapi.com/api/${userId}`)
            .then((res) => res.json())
            .then((data) => setData(data.results))
},[])
    return(
        <div>
            <h1>{userId} Page</h1>
            {data?.length > 0 &&
            data.map((item,index) =>(
                <div key={item.name+index}>
                    <p>{item.name}</p>
                    <img src={item.image} alt=""/>
                </div>
            ))}
        </div>
    )
}

export default CustomRoute;
