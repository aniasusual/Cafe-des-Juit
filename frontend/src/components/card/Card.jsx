import React from 'react'

const Card = (props) => {

    let options = props.options;
    let priceOptions = Object.keys(options || {});
    const handleAddToCart=()=>{
        
    }

    return (
        <div id="cards">
                <div class="card m-3 rounded" style={{"width": "18rem"}}>
                    <img class="card-img-top" src={props.imgSrc} alt="Card image cap" style={{height:"200px", objectFit:"fill"}} />
                    <div class="card-body">
                        <h5 class="card-title">{props.foodName}</h5>
                        <p class="card-text">{props.desc}</p>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        <div className="container w-100">
                            <select className="h-100 w-50 btn-outline-warning">
                                {Array.from(Array(6), (e,i)=>{
                                    return(
                                        <option key={i+1} value={i+1} > {i+1} </option>
                                    )
                                })}
                            </select>

                            <select className="h-100 w-50 btn btn-outline-warning">
                                {priceOptions.map((data)=>{
                                    return <option key={data} value={data}>{data}</option>
                                })}
                            </select>

                            <div className="fs-5">
                                Total Price
                            </div>
                            <hr/>
                            <button className={`btn justify-center ms-2`} onClick={handleAddToCart}>Add to cart</button>
                        </div>
                    </div> 
                </div>
                
            </div>
    )
}

export default Card
