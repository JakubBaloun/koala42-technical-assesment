import prisma from "../prisma/prismaClient.js";

class NemesisDao {
  async listNemesis() {
    const nemesis = await prisma.nemesis.findMany();
    return nemesis;
  }
}

const nemesisDao = new NemesisDao();
export default nemesisDao;
