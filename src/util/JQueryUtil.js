import $ from "jquery";

const getId = (id) => "#" + id;
const getClass = (className) => "." + className;
const getProperty = (property, value) => "[" + property + "='" + value + "']";
const setInFront = (range, label, value) => {
    $(getId(label)).text(value);
    $(getId(range)).val(value);
};

export { getId, getClass, getProperty, setInFront };