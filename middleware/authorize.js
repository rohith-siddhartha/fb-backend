import { verifyToken } from "../utils/jwt.js";

function authorize(req, res, next) {

    const token = req.cookies.AuthToken;

    if(!token) {
        res.status(400).json({
            error:{
                message:"Token Not Present"
            }
        });
        return;
    }

    try{
        const payload = verifyToken(token);
        req.userDetails = payload.userDetails;
        next();

    } catch (error) {
        res.status(400).json({
            error:{
                message:error.message
            }
        });
    }
}

export default authorize;