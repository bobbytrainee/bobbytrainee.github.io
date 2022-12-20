import First from "./First";
import Second from "./Second";
import {RMData} from "../../common/types";

interface Props {
    counter: number,
    setCounter: (n:number)=>void,
    data: RMData[]
}
const HOCview = ({counter, setCounter, data}:Props) => (
        <>
            <First counter={counter} setCounter={setCounter}/>
            <Second counter={counter} setCounter={setCounter}/>
            {data?.length > 0 &&
                data?.map((item, index) => (
                    <div key={item.name}>
                        <p>{item.name}</p>
                        <img src={item.image} alt=""/>
                    </div>
                ))}
        </>
);

export default HOCview
