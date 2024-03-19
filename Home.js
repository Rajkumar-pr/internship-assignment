import React, { useState, useEffect } from 'react';

function Home() {
    const [da, setDa] = useState([]);
    const [adde, setAdde] = useState([]);
const [count,setCount]=useState(0);
   
        const fetchData = async () => {
            try {
                const resp = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await resp.json();
                if (!resp.ok) {
                    console.log('Data not fetched successfully');
                } else {
                    setDa(data);
                }
            } catch (error) {
                console.error('Error in fetching data:', error);
            }
        };
        fetchData();
    
    const addToWindow = (re) => {
        setAdde((prev) => [...prev, { ...re, ct: {count}}]);
        setCount(count+1);
    };

    
const ghy=(idx)=>{
setAdde((prev)=>prev.filter((re)=> re.ct!==idx));
}
  

    return (
        <div>
            {da.map((re, index) => (
                <div key={index}>
                    <div style={{ border: 'solid black', color: 'blue' }}>
                        ID is: {index}
                        <br />
                        name is: {re.name};
                        <br />
                        username is: {re.username}
                        <br />
                        <button onClick={() => addToWindow(re)}>Add to the window</button>
                        
                    </div>
                </div>
            ))}
            {adde.map((rt, index) => (
                <div key={index}>
                    id: {rt.name}, quantity: {rt.quantity}
                    <button onClick={()=>ghy(rt.ct)}>remove from window</button>
                </div>
            ))}
        </div>
    );
}

export default Home;
