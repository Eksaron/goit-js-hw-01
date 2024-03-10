function getElementWidth(content, padding, border) {
    //const widht = content + padding * 2 + border;
    //const widht = Number(content) + Number(padding) * 2 + Number(border) * 2;
    //const widht = parseInt(content) + parseInt(padding) * 2 + parseInt(border) * 2;
    const widht = parseFloat(content) + parseFloat(padding) * 2 + parseFloat(border) * 2;
    return widht;
}
console.log('task-2');
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
