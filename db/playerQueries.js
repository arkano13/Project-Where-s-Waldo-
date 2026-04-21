import { prisma } from "../lib/prisma.js";

async function getAllPlayers() {
  try {
    return await prisma.player.findMany({
      where: {
        completed: true,
      },
    });
  } catch (err) {
    console.error("Error getting players:", err);
    throw err;
  }
}

async function postInitTime() {
  try {
    const time = await prisma.player.create({
      data: {},
    });
    return time;
  } catch (err) {
    console.error("Error posting init time:", err);
    throw err;
  }
}

async function postFinalTime(userdata) {
  try {
    const { id: gameId, username } = userdata;

    const player = await prisma.player.findUnique({
      where: { id: gameId },
    });

    const initTimeDate =  player.initTime.getTime();
    const finishTimeDate = Date.now()
    const timeDifference = finishTimeDate - initTimeDate;


    const finalTime = await prisma.player.update({
      where: { id: gameId },
      data: {
        username,
        completed:true,
        finishTime: timeDifference  
      },
    });
    return finalTime;
  } catch (err) {
    console.error("Error posting final time:", err);
    throw err;
  }
}

export { getAllPlayers, postInitTime, postFinalTime };
