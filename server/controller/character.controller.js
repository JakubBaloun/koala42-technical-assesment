import e from "express";
import listCharacters from "../abl/character/list.abl.js";
import getStats from "../abl/character/stats.abl.js";

const router = e.Router();

router.get("/character", listCharacters);

router.get("/character/stats", getStats);

export default router;
