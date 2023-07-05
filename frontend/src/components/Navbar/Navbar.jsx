
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.scss"
import { Link, useNavigate } from 'react-router-dom';
import user from "../../assets/user.jpeg"
import Search from "../search/Search";

function Navbar() {
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
			<Search/>
			<nav ref={navRef}>
                
                <h3>Cafe des Juit</h3>
				<img src="https://source.unsplash.com/random/900×700/?restaurant" alt=""  cover/>
				<Search/>

				{(localStorage.getItem("authToken"))?
				<Link to="/" style={{textDecoration:"none"}}>
                         <span>My orders</span>
                </Link>
				:""}


				{(!localStorage.getItem("authToken"))?
					<Link to="/Login" style={{textDecoration:"none"}}>
							<span>Login</span>
					</Link>
				
				:
				
				<div>
					<div className='btn btn-outline-warning'>
						My cart
					</div>
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