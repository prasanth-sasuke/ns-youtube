import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material'
import {Navbar,Feed,VideoDetial,ChannelDetial,SearchFeed} from "./components";

const App = () => (
    <BrowserRouter>
        <Box sx={{backgroundColor: '#000'}}>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Feed />}/>
                <Route path="/video/:id" exact element={<VideoDetial />}/>
                <Route path="/channel/:id" exact element={<ChannelDetial />}/>
                <Route path="/search/:searchTerm" exact element={<SearchFeed />}/>
            </Routes>
        </Box>
    </BrowserRouter>
)

export default App