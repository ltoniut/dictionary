import router from '../router';
import { Hash } from '../../models';
import {Request, Response} from "express";
import {IError} from '../../domain/IError';


router.route('/hash')
.get(async (req: Request, res: Response) => {
    console.log('accessed fetch endpoint');
    const all = await Hash.find();
    console.log(all);

    const response = await Hash.findOne({ key: req.body.key })
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