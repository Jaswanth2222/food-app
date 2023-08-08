import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="flex justify-between items-center bg-slate-200">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCrtmEN9vahUD5tHWmx8MXdQycacsG0bfNg&usqp=CAU" alt="" className="w-24" />

            <div className=" flex list-none me-10 ">
                <Link to = "/home"><li className="mx-2 hover:cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-orange-500 hover:decoration-2 hover:decoration-solid">Home</li> </Link>
                <Link to="/about"><li className="mx-2 hover:cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-orange-500 hover:decoration-2 hover:decoration-solid">About</li> </Link>
                <Link to = "/contact">
                    <li className="mx-2 hover:cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-orange-500 hover:decoration-2 hover:decoration-solid">Contact</li>
                </Link>
            </div>
                
        </div>
    )
}

export default Header;