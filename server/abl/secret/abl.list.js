import secretDao from "../../dao/secret.dao.js";

const listSecrets = async (req, res) => {
  try {
    const secrets = await secretDao.listSecrets();
    res.send(secrets);
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
};

export default listSecrets;
