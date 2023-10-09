import { validationResult } from "express-validator";
import { NextFunction, Response, Request } from "express";
export const validateFields = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errorMsg: errors.mapped(),
        });
    }
    next();
};
