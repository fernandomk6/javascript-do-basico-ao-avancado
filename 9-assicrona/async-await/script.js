function bestRockBand(band){
  return new Promise((resolve, reject) => {
    if (band == "Queen") {
      resolve({
        success: true,
        bandName: band,
        msg: `${band} is the best rock band ever!`
      });
    } else {
      reject({
        sucess: false,
        msg: "I\'m not sure!"
      });
    }
  });
}

function bestRockSong(response){
  return new Promise((resolve, reject) => {
    if (response.success) {
      resolve(`Bohemian Rhapsody by ${response.bandName}`);
    } else {
      reject("Do you now Queen?");
    }
  });
}
/*
bestRockBand("Queen")
  .then(response => {
    console.log("Cheking the answer...");
    return bestRockSong(response);
  })
  .then(response => {
    console.log("Finding the best song");
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });
*/

/**
 * O await é usado antes da chamada de uma promise
 * So que so pode ser usada dentro de uma função
 * com async
 */

async function doTheJob() {
  try {
    const bestRockBandResponse = await bestRockBand("Queen");
    console.log(bestRockBandResponse);
    const bestRockSongResponse = await bestRockSong(bestRockBandResponse);
    console.log(bestRockSongResponse);
  } catch (error) {
    console.log(error);
  }

}

doTheJob();