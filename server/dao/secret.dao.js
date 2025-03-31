import prisma from "../prisma/prismaClient.js";

class SecretDao {
  async _loadSecrets() {
    const data = await prisma.secret.findMany();
    return data;
  }

  async listSecrets() {
    const secrets = await this._loadSecrets();
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
