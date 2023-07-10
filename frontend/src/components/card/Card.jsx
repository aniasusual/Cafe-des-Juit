import React, {useState, useEffect, useRef} from 'react'
import { useDispatchCart, useCart } from '../ContextReducer';
const Card = (props) => {

    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();
    let options = props.options;
    let priceOptions = Object.keys(options || {});
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");

    
    // let finalPrice = qty * parseInt(priceOptions[size]);
    
    const handleAddToCart = async ()=>{

        // let food = []
        // for(const item of data){
        //     if(item.id === props.id){
        //         food = item;
        //         break;
        //     }
        // }

        // if(food!==[]){
        //     if(food.size === size){
        //         await dispatch({type:"UPDATE", id:props.id, price: options[size] * qty, qty:qty})
        //         return
        //     }
        //     else if(food.size!==size){
        //         await dispatch({type:"ADD" , id : props.id, name: props.foodName,img:props.imgSrc, price: options[size] * qty, qty: qty, size:size})
        //         return
        //     }
        // }

        await dispatch({type:"ADD" , id : props.id, name: props.foodName,img:props.imgSrc, price: options[size] * qty, qty: qty, size:size})
        return
    }

    
    
    // let finalPrice = qty * options[size];
    
    useEffect(()=>{
        setSize(priceRef.current.value)
    },[])
    
    return (
        <div id="cards">
                <div className="card m-3 rounded bg-dark" style={{"width": "18rem"}}>
                    <img className="card-img-top" src={props.imgSrc} alt="Card image cap" style={{height:"200px", objectFit:"fill"}} />
                    <div className="card-body">
                        <h5 className="card-title text-light">{props.foodName}</h5>
                        <p className="card-text text-light">{props.desc}</p>
                        <div className="container w-100">
                            <select className="h-100 w-50 btn-outline-warning bg-dark" onChange={(e)=>setQty(e.target.value)}>
                                {Array.from(Array(6), (e,i)=>{
                                    return(
                                        <option key={i+1} value={i+1} > {i+1} </option>
                                    )
                                })}
                            </select>

                            <select className="h-100 w-50 btn btn-outline-warning" ref={priceRef} onChange={ (e) => setSize(e.target.value)}>
                                {priceOptions.map((data)=>{
                                    return <option key={data} value={data}>{data}</option>
                                })}
                            </select>

                            <div className="fs-5 text-light">
                                {/* ₹{finalPrice}/- */}
                            </div>
                            <hr/>
                            <button className={`btn justify-center ms-2 text-light btn-outline-warning`} onClick={handleAddToCart}>Add to cart</button>
                        </div>
                    </div> 
                </div>
                
            </div>
    )
}

export default Card
