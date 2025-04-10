import Icons from "../icons/Icons";

interface NavProps {
    toggleMenu: () => void;
}

const Nav = ({ toggleMenu }: NavProps) => (
    <nav className="backdrop-blur-xl bg-gradient-to-tr from-purple-600 to-indigo-900 text-white p-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-2">
            <div className="bg-white p-1 rounded shadow-inner">
                <div className="grid grid-cols-3 gap-px">
                    {Array(9).fill(0).map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-indigo-600"></div>
                    ))}
                </div>
            </div>
            <h1 className="text-2xl font-bold tracking-tight">Pixel Art</h1>
        </div>
        <button
            className="md:hidden text-white bg-indigo-800 hover:bg-indigo-900 px-3 py-2 rounded-full shadow-md flex items-center gap-1 text-sm"
            onClick={toggleMenu}
        >
            <Icons.Menu />
        </button>
    </nav>
);

export default Nav;