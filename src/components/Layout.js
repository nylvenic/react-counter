import Nav from "./Nav"

export default function Layout({children}) {
    return (<>
        <Nav></Nav>
        <div className="w-[90vw] sm:w-3/4 lg:w-1/2 m-auto">
            {children}
        </div>
    </>)
}