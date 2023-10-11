import { NextFunction, Response, Request } from "express";
export declare const validateFields: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
