import buildTree from "../../service/buildTree.js";

const getStats = async (req, res) => {
  try {
    const tree = await buildTree();
    res.json(tree);
  } catch (err) {
    res.status(err.status ?? 500).json({ error: err.message });
  }
};

export default getStats;
