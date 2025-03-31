import e from "express";
import listSecrets from "../abl/secret/abl.list.js";

const router = e.Router();

router.use("/secret", listSecrets);

export default router;
