
const titanData = [
  { episode: 1, titans: 5 },
  { episode: 2, titans: 8 },
  { episode: 3, titans: 4 },
  { episode: 4, titans: 10 },
  { episode: 5, titans: 7 },
];


function fetchEpisodeInfo(episode) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldReject = Math.random() < 0.5; //  random success or failure
      if (shouldReject) {
        reject(`Error fetching episode ${episode}`);
      } else {
        resolve(`Episode ${episode}: Levi encountered some Titans.`);
      }
    }, 1000); // asynchronous operation taking 1 second
  });
}

function logTitanEncounter(episode, titans) {
  console.log(`In Episode ${episode}, ${titans} Titans were killed.`);
}

async function analyzeTitanData() {
  console.log("Analyzing Attack on Titan data...");

  for (const { episode, titans } of titanData) {
    try {
      const episodeInfo = await fetchEpisodeInfo(episode);
      console.log(episodeInfo);
      logTitanEncounter(episode, titans);
    } catch (error) {
      console.error(error);
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay between episodes
    }
  }

  console.log("Analysis complete.");
}

//  analyzing the Attack on Titan data
analyzeTitanData();
