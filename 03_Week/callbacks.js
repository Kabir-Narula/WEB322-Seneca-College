
const titanData = [
  { episode: 1, titans: 5 },
  { episode: 2, titans: 8 },
  { episode: 3, titans: 4 },
  { episode: 4, titans: 10 },
  { episode: 5, titans: 7 },
];


function fetchEpisodeInfo(episode) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Episode ${episode}: Levi encountered more Titans.`);
    }, 1000); 
  });
}

function logTitanEncounter(episode, titans) {
  console.log(`In Episode ${episode}, ${titans} Titans were killed.`);
}

async function analyzeTitanData() {
  console.log("Analyzing Attack on Titan data...");

  for (const { episode, titans } of titanData) {
    const episodeInfo = await fetchEpisodeInfo(episode);
    console.log(episodeInfo);
    logTitanEncounter(episode, titans);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay between episodes
  }

  console.log("Analysis complete.");
}


analyzeTitanData();



