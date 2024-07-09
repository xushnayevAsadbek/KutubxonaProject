import { Outlet } from "react-router-dom"
import { Header } from "../../Header"
import Section from "../section/section"

export const Layout = () => {


    return (
<>
<Header />
<Outlet/>
</>    )
}