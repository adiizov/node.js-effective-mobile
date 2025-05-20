import express, {Router} from "express";

const router = Router();

router.get('/', (_, res: express.Response) => {
    res.status(200).json("hello world")
})

export default router;