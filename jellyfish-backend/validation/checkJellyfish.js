const checkName = (req, res, next) => {
    if (req.body.name) {
      next();
    }
    else {
        res.status(400).json({ error: "Name is required" });
    }
}

const checkBoolean = (req, res, next) => {
    const { is_venomous } = req.body;
    if (["true", "false", true, false, undefined].includes(is_venomous)) {
        next();
    }
    else {
        res.status(400).json({ error: "is_venomous must be a boolean value" });
    }
}

const checkWebsite = (req, res, next) => {
    if (req.body.website) {
        next();
    }
    else {
        res.status(400).json({ error: "Website is required" });
    }
}

module.exports = { checkName, checkBoolean, checkWebsite };
