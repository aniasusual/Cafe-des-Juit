
import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.scss"
import { Link, useNavigate } from 'react-router-dom';
// import user from "../../assets/user.jpeg"
// import Search from "../search/Search";
import Badge from 'react-bootstrap/Badge'
import Model from "../../Model";
import Cart from "../../pages/cart/Cart"
import { useCart } from "../ContextReducer";

function Navbar() {

	const [cartview, setCartView] = useState(false);

	let data = useCart();
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};


	const navigate = useNavigate();
	const handleLogout = ()=>{
		localStorage.removeItem("authToken");
		navigate("/login");
	}

	return (
		<header>
			<h3>Cafe des Juit</h3>
			{/* <Search/> */}
			<nav ref={navRef}>
                
                <h3>Cafe des Juit</h3>
				<img src="https://source.unsplash.com/random/900×700/?restaurant" alt=""  cover="true"/>
				{/* <Search/> */}

				{(localStorage.getItem("authToken"))?
				<Link to="/myOrders" style={{textDecoration:"none"}}>
                         <span>My orders</span>
                </Link>
				:""}


				{(!localStorage.getItem("authToken"))?
					<Link to="/Login" style={{textDecoration:"none"}}>
							<span>Login</span>
					</Link>
				
				:
				
				<div>
					<div className='btn btn-outline-warning' onClick={()=>{setCartView(true)}}>
						My cart{" "}
						<Badge pill bg="danger" badge-primary="true">{data.length}</Badge>
					</div>

					{cartview? <Model onClose={()=>setCartView(false)}><Cart/></Model> : null}

					<div className='btn btn-outline-danger' onClick={handleLogout}>
						Logout
					</div>

				</div>
				
				}

				{(!localStorage.getItem("authToken"))?
					
					<Link to="/Register" style={{textDecoration:"none"}}>
						<span>Register</span>
					</Link>				
				
				:""}


                {/* <div id="user">
                   <img src={user} alt="user Image" center/>
                    <span>Animesh Dhillon</span>
                 </div> */}
				<button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;