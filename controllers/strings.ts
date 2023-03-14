import {Request, Response, Router} from "express";

const router: Router = Router();

router.get("/hello-world", (req: Request, res: Response) => {
    res.send("Hello world at " + new Date())
});

router.get("/hello-variable/:nimi", (req: Request, res: Response) => {
    res.send("Hello " + req.params.nimi)
});

router.get("/add/:nr1/:nr2", (req: Request, res: Response) => {
    res.send(req.params.nr1 + req.params.nr2)
});

router.get("/multiply/:nr1/:nr2", (req: Request, res: Response) => {
    const nr1 = Number(req.params.nr1);
    const nr2 = Number(req.params.nr2);
    res.send((nr1 * nr2).toString());
});

router.get("/do-logs/:arv", (req: Request, res: Response) => {
    for (let index = 0; index < Number(req.params.arv); index++) {
        console.log("See on logi nr " + index);
    }
    res.send();
});


//Iseseisev töö #1 Juhuslik number
router.get("/randombetween/:nr1/:nr2", (req: Request, res: Response) => {
    const nr1 = Number(req.params.nr1); //smaller number
    const nr2 = Number(req.params.nr2); //bigger number
    let randomnumber = Math.floor(Math.random() * (nr2 - nr1 + 1) + nr1);
    res.send(randomnumber.toString());
});
//Iseseisev töö #2 Vanuse tagastus
router.get("/vanus/:aasta/:kuu/:p2ev", (req: Request, res: Response) => {
    const hetkeneDate = new Date();
    const aasta = Number(req.params.aasta);
    const kuu = Number(req.params.kuu);
    const p2ev = Number(req.params.p2ev);
    let vanus = 0
    if ((hetkeneDate.getMonth() + 1) > kuu) {
        vanus = (hetkeneDate.getFullYear() - aasta)
    }
    if ((hetkeneDate.getMonth() + 1) == kuu) {
        if (hetkeneDate.getDay() >= p2ev) {
            vanus = (hetkeneDate.getFullYear() - aasta)
        }
    } else {
        vanus = (hetkeneDate.getFullYear() - aasta - 1)
    }
    console.log(kuu)
    console.log(hetkeneDate.getMonth() >= kuu)
    res.send(vanus.toString());
})


export default router;