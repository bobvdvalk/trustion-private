import type { Request, Response } from "express";

export const catchErrors = (handler: (req: Request, res: Response) => Promise<void> | void) => {
    return async (req: Request, res: Response) => {
        try {
            await handler(req, res);
        } catch (e: any) {
            const errorPayload = {
                errors: [
                    {
                        message: e.message,
                        extensions: {
                            code: e.code
                        },
                        status: e.status
                    }
                ]
            };
            res.header(500);
            res.json(errorPayload);
        }
    };
};
