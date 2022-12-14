// const rgbToHex = (red, green, blue) => {
//     const redHex = red.toString(16);
//     const greenHex = green.toString(16);
//     const blueHex = blue.toString(16);

//     return pad(redHex) + pad(greenHex) + pad(blueHex);

// };

export function rgbToHex(red, green, blue) {
    const redHex = red.toString(16);
    const greenHex = green.toString(16);
    const blueHex = blue.toString(16);

    return pad(redHex) + pad(greenHex) + pad(blueHex);
};

const pad = (hex) => {return(hex.length === 1 ? "0" + hex : hex)};

export function hexToRgb(hex) {
    const red = parseInt(hex.substring(0, 2), 16);
    const green = parseInt(hex.substring(2, 4), 16);
    const blue = parseInt(hex.substring(4, 6), 16);

    return [red, green, blue];
};