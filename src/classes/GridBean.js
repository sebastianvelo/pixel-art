class GridBean {
    constructor(rows, columns, size, border) {
        this.rows = rows;
        this.columns = columns;
        this.size = size;
        this.border = border;
    }

    toString() {
        return "Rows: " + this.rows + " | " +
        "Columns: " + this.columns + " | " +
        "Size: " + this.size + " | " +
        "Border: " + this.border + " | ";
    }
}
export default GridBean;