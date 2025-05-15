import NavBar from "../components/NavBar";

interface Props {
    children: React.ReactNode;
}
const Layout = ({ children }: Readonly<Props>) => {
    return (
        <main>
            <NavBar/>
            {children}
        </main>
    )
}

export default Layout
