interface ColorSwatchProps {
    color: string;
    isSelected: boolean;
    onClick: () => void;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, isSelected, onClick }) => {
    const className = isSelected ? "shadow-sm shadow-slate-900/50" : "";
    const isEmpty = color === "" || color === "transparent";
    const backgroundColor = isEmpty ? "bg-gray-300/60 cursor-not-allowed" : "cursor-pointer";
    return (
        <button
            style={{ background: color }}
            disabled={isEmpty}
            className={`border border-gray-300 w-4 h-4 transition-all duration-200 rounded-md ${className} ${backgroundColor}`}
            onClick={onClick}
        />
    );
};

export default ColorSwatch;