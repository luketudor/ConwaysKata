function range(start, end) {
    return start === end ? [start] : [start, ...range(start + 1, end)];
}

module.exports.range = range;