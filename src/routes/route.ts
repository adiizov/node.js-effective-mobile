import express, {Router} from "express";

const router = Router();

router.get('/', async (_, res: express.Response) => {
    res.send("Hello world")
})

export default router;