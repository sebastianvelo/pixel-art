import { useEffect, useState } from "react";
import Canvas from "./components/canvas/Canvas";
import Nav from "./components/layout/Nav";
import Toolbar from "./components/layout/Toolbar";
import Modal from "./components/modal/EraseConfirmationModal";
import usePixels from "./hooks/usePixels";
import "./index.css";

export default function Home() {
    const app = usePixels();
    const [showModal, setShowModal] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        app.handleResize();
        window.addEventListener("resize", app.handleResize);
        return () => window.removeEventListener("resize", app.handleResize);
    }, []);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const handleConfirmErase = () => {
        app.canvas.erase();
        closeModal();
    };

    return (
        <div className="h-screen w-screen flex flex-col bg-purple-300 overflow-hidden text-white">
            <Nav toggleMenu={toggleMenu} />
            <Toolbar
                isMenuOpen={isMenuOpen}
                app={app}
                openEraseConfirmationModal={openModal}
            />
            <div className="flex-1 flex justify-center items-center p-4 overflow-hidden">
                <Canvas app={app} />
            </div>
            <Modal
                isOpen={showModal}
                handleConfirmErase={handleConfirmErase}
                handleCancelErase={closeModal}
            />
        </div>
    );
}