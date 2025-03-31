import characterDao from "../../dao/character.dao.js";

const listCharacters = async (req, res) => {
  try {
    const characters = await characterDao.listCharacters();
    res.json(characters);
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
};

export default listCharacters;
