import { Routes, Route, Link, Outlet } from 'react-router-dom'
import Home from './BrowserRouterComponents/Home';
import About from './BrowserRouterComponents/About';
import Profile from './BrowserRouterComponents/Profile';
import Error from './BrowserRouterComponents/Error';

export default function BrowserRouter() {

    function Output(){
        return (
            <div>
                <nav className='heading'>
                    <ul>
                        <li>
                            <Link to='/'> Main Page </Link>
                        </li>
                        <li>
                            <Link to='/Home'> Home </Link>
                        </li>
                        <li>
                            <Link to='/About'> About </Link>
                        </li>
                        <li>
                            <Link to='/Profile'> Profile </Link>
                        </li>
                    </ul>
                </nav>

                {/* Routes include Route children to direct the Page with different path and component */}
                
                <h1 className='heading'>Footerrrrrrr</h1>
                <hr/>
                <Outlet />
            </div>
        )
    }

    return (
        <div>
            <Routes>
                {/* when one is called with path, Component will render */}
                <Route path="/" element={<Output />}>
                    <Route path='/Home' element={<Home />}/>
                    <Route path='/About' element={<About />}/>

                    {/* Nested Route */}
                    <Route path='/Profile' element={<Profile />}>
                        {/* /:username to get page follow username by useParams */}
                        <Route path='/Profile/:username' element={<Profile />}/>
                        <Route path='/Profile/TaQuangToan' element={<Profile />}/>
                    </Route>
                    {/* this will defined 3 path /Profile, /Profile/:username and /Profile/TaQuangToan */}

                    {/* path="*" for all Page except all childrens setup before */}
                    <Route path='*' element = {<Error />}/>
                </Route>
            </Routes>
        </div>
    )
}


