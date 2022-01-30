import router from '../router';
import { Hash } from '../../models';
import {Request, Response} from "express";
import {IError} from '../../domain/IError';
import { getHash } from '../../functions/getHash';


router.route('/hash')
.get(async (req: Request, res: Response) => {
    console.log('accessed fetch endpoint');

    const response = await getHash(req.body.key);
    if (!response) {
        const error : IError = {
            status: 404,
            message: `Value for key ${ req.body.key } not found`
        }
        res.status(error.status).json(error);
    }
    res.json({ response });
});

export default router;