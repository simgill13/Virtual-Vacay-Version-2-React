
export const FETCH_HOUSES_REQUEST = 'FETCH_HOUSES_REQUEST';
export const fetchHousesRequest = () => ({
  type: FETCH_HOUSES_REQUEST,
})

export const FETCH_HOUSES_SUCCESS = 'FETCH_HOUSES_SUCCESS';
export const fetchHousesSuccess = (title, url, location, price, description, accomodates) => ({
  type: FETCH_HOUSES_SUCCESS,
  title,
  url,
  location,
  price,
  description,
  accomodates
})


export const fetchHouses = () => dispatch => {
    dispatch(fetchHousesRequest());
    console.log("hi");
    fetch('http://localhost:8080/api/houses')
    .then(response => response.json())
    .then(json => {
      console.log(json[0])
      dispatch(fetchHousesSuccess(json[0].title,json[0].url,json[0].location,json[0].price,json[0].description,json[0].accomodates));
    })
}
