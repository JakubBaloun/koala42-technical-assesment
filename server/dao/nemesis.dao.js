import prisma from "../prisma/prismaClient.js";

class NemesisDao {
  async _loadNemesis() {
    const data = await prisma.nemesis.findMany();
    return data;
  }

  async listNemesis() {
    const nemesis = await this._loadNemesis();
    return nemesis;
  }
}

const nemesisDao = new NemesisDao();
export default nemesisDao;
