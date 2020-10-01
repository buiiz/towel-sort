// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    const arr = [];
    matrix.forEach((item, i) => {
        if (i % 2) {
            item.reverse();
        }
        arr.push(...item);
    });
    return arr;
};
