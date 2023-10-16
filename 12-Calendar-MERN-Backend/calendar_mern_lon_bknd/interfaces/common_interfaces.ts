import { Request } from "express";
export interface IGetSetPropsInfoRequest extends Request {

    // uid?: string // or any other type
    // name?: string // or any other type
    uid?: any // or any other type
    name?: string // or any other type
}