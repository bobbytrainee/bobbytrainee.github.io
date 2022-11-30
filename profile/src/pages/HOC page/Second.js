

const Second = ({counter, setCounter}) => {

    return (
        <>
            <div style={{backgroundColor: "aqua"}}>
                Counter second {counter}
            </div>
            <button onClick={()=>setCounter((prevState) => prevState+1)}>increase</button>

        </>
    )
}

export default Second
