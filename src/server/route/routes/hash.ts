import router from '../router';
import { Hash } from '../../models';
import {Request, Response} from "express";
import {IError} from '../../domain/IError';


router.route('/hash/:key')
.get(async (req: Request, res: Response) => {
    console.log('accessed fetch endpoint');
    const response = await Hash.findOne({ key: req.params.key })
    if (!response) {
        const error : IError = {
            status: 404,
            message: `Value for key ${ req.params.key } not found`
        }
        res.status(error.status).json(error);
    }
    res.json({ response });
});