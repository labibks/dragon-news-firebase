
import { Link, NavLink } from 'react-router';
import Icon from '../../assets/user.png'
import { AuthContext } from '../../Provider/AuthProvider';
import { use } from 'react';

const Navbar = () => {
    const {logOut,user}=use(AuthContext)
    const handleLogOut=()=>{
        console.log("log out clicked")

        logOut()
          .then(() => {
            alert("Sign Out Succesfully")
          })
          .catch((error) => {
            // An error happened.
            console.log(error)
          });


    }
    return (
      <div className="flex justify-between items-center mt-6">
        <div className=""></div>
        <div className="flex gap-3 text-accent">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>
        <div className="flex gap-2">
          <img src={Icon} alt="" />
          {user ? (
            <button onClick={handleLogOut} className="btn btn-primary px-10">Logout</button>
          ) : (
            <Link to="/auth/login" className="btn btn-primary px-10">
              Login
            </Link>
          )}
        </div>
      </div>
    );
};

export default Navbar;