import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
import { logo } from '../utils/constants.js'
import SearchBar from "./SearchBar.jsx"
export default function Navbar() {
 
  return (
      <Stack
      className="nav-bar-index"
    direction="row"
    alignItems="center"
    p={2}
    sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }} >
    <Link to={`/`}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar/>
 </Stack>
  )
}
