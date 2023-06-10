import Nav from "./Nav"

export default function Layout({mode, setMode, children}) {
    return (<div className="flex min-h-screen justify-center items-center flex-col">
        <Nav mode={mode} setMode={setMode}></Nav>
        <div className="w-[90vw] sm:w-3/4 lg:w-1/2 m-auto p-4 flex-grow flex flex-col items-center justify-center">
            {children}
        </div>
    </div>)
}