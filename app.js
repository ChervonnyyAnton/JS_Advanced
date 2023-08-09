"use strict";

/*
function getMyCoordinates() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
}
*/

async function getMyCity() {
  try {
    //const { latitude, longitude } = await getMyCoordinates();
	const response = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=48.210033&longitude=16.363449`
  );
	if(!response){
		throw new Error(response.status);
	}
	const data = await response.json();
	console.log(data.city);
  } catch (e) {
    console.error(e);
  }
}

getMyCity();
