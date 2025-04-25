interface ColorPickerProps {
    color: string;
    onChange: (color: string) => void;
}

const ColorPicker = ({ color, onChange }: ColorPickerProps) => (
    <div className="flex items-center gap-3 relative">
        <div className="flex flex-col">
            <div className="flex items-center gap-2">
                <div
                    className="w-8 h-8 rounded-full shadow-inner border-2 border-white outline outline-1 outline-gray-300"
                    style={{ backgroundColor: color }}
                />
                <input
                    type="color"
                    value={color}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-8 h-8 cursor-pointer opacity-0 absolute"
                />
            </div>
        </div>
    </div>
);

export default ColorPicker;