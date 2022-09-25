import { Link,Outlet} from "react-router-dom";
// import {Outlet} from "react-router"
const Home = ()=>{
    // const navigate = useNavigate()
    return (
        <>
            主页
            <div>
                <Link to={'/home/test'}>测试</Link>
                <Link to={'/home/mydata'}>个人中心</Link>
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}
export default Home
