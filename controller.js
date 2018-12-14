const square_root = function(req, res) {
    let s = req.query.s;
    if(!s) {
        res.status(400).json("Send s");
    }
    let rads = sqrt(s);
}

module.exports = {
    square_root
}