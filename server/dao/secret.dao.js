import prisma from "../prisma/prismaClient.js";

class SecretDao {
  async listSecrets() {
    const secrets = await prisma.secret.findMany();
    //Je potřeba převést BigInt na number nebo string
    const serializedSecrets = secrets.map((secret) => ({
      ...secret,
      secret_code: Number(secret.secret_code),
    }));
    return serializedSecrets;
  }
}

const secretDao = new SecretDao();
export default secretDao;
