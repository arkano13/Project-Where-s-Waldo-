import {
  postInitTime,
  postFinalTime,
  getAllPlayers,
} from "../db/playerQueries.js";

const playersGet = async (req, res) => {
  try {
    const players = await getAllPlayers();
    res.status(200).json(players);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const postInitTimeController = async (req, res) => {
  try {
    const player = await postInitTime();
    res.cookie("gameId", player.id, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(201).json(player);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

const postFinalTimeController = async (req, res) => {
  try {
    const { username } = req.body;
    const id = req.cookies.gameId;

    if (!id) return res.status(400).json({ message: "No active game session" });

    const finalTime = await postFinalTime({ id, username });
    res.clearCookie("gameId");
    res.status(200).json({
      ...finalTime,
      finishTime: Number(finalTime.finishTime)
    });
  } catch (err) {
    console.error("Error en postFinalTimeController:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export { postInitTimeController, postFinalTimeController, playersGet };
