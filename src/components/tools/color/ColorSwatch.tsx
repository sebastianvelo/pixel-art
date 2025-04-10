interface ColorSwatchProps {
    color: string;
    isSelected: boolean;
    onClick: () => void;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, isSelected, onClick }) => {
    return (
        <div
            style={{ background: color }}
            className={`border border-gray-300 w-4 h-4 transition-all duration-200 rounded-md cursor-pointer ${isSelected ? "shadow-sm shadow-indigo-500" : ""}`}
            onClick={onClick}
        />
    );
};

export default ColorSwatch;