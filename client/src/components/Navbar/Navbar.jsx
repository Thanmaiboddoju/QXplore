import React, {useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import {useSelector , useDispatch} from 'react-redux'
import decode from 'jwt-decode'

import search from "../../assets/search.svg"
import qxlogof from '../../assets/qxlogof.png'
import Avatar from '../../components/Avatar/Avatar'

import './Navbar.css';
import { setCurrentUser } from "../../actions/currentUser";
function Navbar() {
    const dispatch = useDispatch()
    var user=useSelector((state) => (state.currentUserReducer))
    const navigate= useNavigate()

    useEffect(() =>{
        const token = user?.token
        if(token){
            const decodedToken = decode(token)
            if(decodedToken.exp * 1000 < new Date().getTime()){
                handleLogout()  
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])

    const handleLogout = () => {
        dispatch({type: 'LOGOUT'});
        navigate('/')
        dispatch(setCurrentUser(null))
    }
    return(
        <nav className="main-nav">
            <div className="navbar">
                <Link to="/" className="nav-item nav-logo ">
                <form>
                    <img src={qxlogof} className="mainicon " alt="logo" height="30px" weight="30px"/>
                    <p>QXplore</p>
                </form>
                </Link>
                <Link to="/" className="nav-item nav-btn" > About </Link>
                <Link to="/" className="nav-item nav-btn" > Products </Link>
                <Link to="/" className="nav-item nav-btn" > For Teams </Link>
                <form>
                    <input type="text" placeholder="Search..."/>
                    <img src={search} alt="search" className="searchicon" height="18px" width="18px"/>
                </form>
                {user === null ? 
                    <Link to="/Auth" className="nav-item nav-links">Log in</Link>:
                    <>
                        <Link to={`/Users/${user.result._id}`} className="" style={{color:"white", textDecoration:"none"}} ><Avatar backgroundColor="pink" px="10px" py="5px" borderRadius="50%" >{user.result.name.charAt(0).toUpperCase()}</Avatar></Link>
                        <button className="nav-item nav-links" onClick={handleLogout}>Log out</button>
                    </>
                }
            </div>
        </nav>
    );
}
export default Navbar;