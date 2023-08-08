import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="flex justify-between items-center bg-slate-200">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCrtmEN9vahUD5tHWmx8MXdQycacsG0bfNg&usqp=CAU" alt="" className="w-24" />

            <div className=" flex list-none me-10 ">
                <Link to = "/home"><li className="mx-2 hover:cursor-pointer">Home</li> </Link>
                <Link to="/about"><li className="mx-2 hover:cursor-pointer">About</li> </Link>
                <Link to = "/contact">
                    <li className="mx-2 hover:cursor-pointer">Contact</li>
                </Link>
            </div>
                
        </div>
    )
}

export default Header;