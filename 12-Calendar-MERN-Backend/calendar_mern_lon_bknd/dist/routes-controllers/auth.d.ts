import { Request, Response } from "express";
export declare const authGet: (req: Request, res: Response) => Promise<void>;
export declare const authPost: (req: Request, res: Response) => Promise<void>;
export declare const authPostNew: (req: Request, res: Response) => Promise<void>;
export declare const authPostRenew: (req: Request, res: Response) => Promise<void>;
