import { useLocation } from "react-router-dom";
import { rootRouter } from "@/routers/index";
import { searchRoute } from "@/utils/utils";

/**
 * @description 路由守卫组件
 * */
const AuthRouter = (props) =>{
    const { pathname } = useLocation();
    const route = searchRoute(pathname, rootRouter);
    // * 判断当前路由是否需要访问权限(不需要权限直接放行)
    if (!route.meta?.requiresAuth) return props.children;
    return props.children;
}
export default AuthRouter;
