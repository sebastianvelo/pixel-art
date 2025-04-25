export const emptyCanvas = (width: number, height: number) =>
    Array.from({ length: height }, () => Array.from({ length: width }, () => ""));
