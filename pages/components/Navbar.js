import MenuIcon from "@mui/icons-material/Menu"
const Navbar = () => {
    return(
        <div className="justify-end mr-32 pt-2 ">
            <div className="flex justify-between space-x-4 items-center">

                <p className="text-gray-400">Menu</p>
                 <MenuIcon className="text-gray-400 h-24 cursor-pointer"/>

            </div>
        </div>
    )
}

export default Navbar