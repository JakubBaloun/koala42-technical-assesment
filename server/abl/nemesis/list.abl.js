import nemesisDao from "../../dao/nemesis.dao.js";

const listNemesis = async (req, res) => {
  try {
    const nemesis = await nemesisDao.listNemesis();
    res.json(nemesis);
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
};

export default listNemesis;
