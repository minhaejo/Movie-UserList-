import React ,{useState}from "react";


const Counter = (props) => {
    
    const [count,setCount] = useState( 0)
     
    const increment =(()=>{
      setCount(count + 2)  
    })
    const clickDefault = props.click || "click3"
    
    return ( 
   <button onClick={increment}>
       {clickDefault} {count}
   </button>
    );
}

export default Counter