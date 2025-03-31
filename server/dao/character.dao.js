import prisma from "../prisma/prismaClient.js";

class CharacterDao {
  async listCharacters() {
    return await prisma.character.findMany();
  }

  async listCharactersWithRealtions() {
    return await prisma.character.findMany({
      include: {
        nemesis: {
          include: {
            secret: true,
          },
        },
      },
    });
  }
}

const characterDao = new CharacterDao();
export default characterDao;
