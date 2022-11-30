
const First = ({counter, setCounter}) => {
    console.log('counter', counter)
    return (
        <>
            <div style={{backgroundColor: "yellow"}}>
            Counter first {counter}
            </div>
            <button onClick={()=>setCounter((prevState) => prevState-1)}>decrease</button>

        </>
    )
}

export default First
