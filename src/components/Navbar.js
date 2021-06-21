import { Link } from 'react-router-dom'
import { useParams } from "react-router";

const Navbar = () => {
    const id  = useParams ();
    return ( 
        <nav className="navbar">
            <h1>this is a navbar</h1>
            <div className="links">
                <Link to ="/" style={{color:'white', backgroundColor:'#f1356d', borderRadius:'8px'}} >home</Link>
                <Link to={`/blogs/1`}  style={{color:'white', backgroundColor:'#f1356d', borderRadius:'8px'}}>page1</Link>
                <Link to={`/blogs/2`} style={{color:'white', backgroundColor:'#f1356d', borderRadius:'8px'}} > page 2</Link>
            </div>
        </nav>
     )
}
 
export default Navbar;