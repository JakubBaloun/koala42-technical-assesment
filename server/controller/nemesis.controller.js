import e from "express";
import listNemesis from "../abl/nemesis/list.abl.js";

const router = e.Router();

router.get("/nemesis", listNemesis);

export default router;
