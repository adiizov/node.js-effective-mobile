import express, {Router} from "express";

const router = Router();

router.get('/', (_, res: express.Response) => {
    res.send("hello world")
})

export default router;