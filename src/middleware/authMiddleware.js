const authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (authHeader && authHeader === 'Bearer valid-token') {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

const authorization = (roles) => {
    return (req, res, next) => {
        const userRole = req.headers['role'];
        if (roles.includes(userRole)) {
            next();
        } else {
            res.status(403).json({ message: 'Forbidden' });
        }
    };
}


module.exports = { authenticate, authorization };