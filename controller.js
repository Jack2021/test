const square_root = function(req, res) {
    let s = req.query.s;
    if(!s) {
        res.status(400).json("Send the number");
        return;
    }
    let rads = Math.sqrt(s);
    res.status(200).json(rads);
    return;
}

module.exports = {
    square_root
}