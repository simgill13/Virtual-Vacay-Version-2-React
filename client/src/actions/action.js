
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
//NEW ADD BY SIM
// WORKING ON ADDING USER TO A COLLECTION
//CREATING AN ACTION FOR POSTING DATA
//this action will take the data i get back from google signup and update my innital state

export const POST_LOGIN_DATA = 'POST_LOGIN_DATA';
export const postData = (name,id,profilePicURL,accessToken,expiresAt,email) => ({
  type: POST_LOGIN_DATA,
  name,
  id,
  profilePicURL,
  accessToken,
  expiresAt,
  email
})


//NEW ADD BY SIM
export const postUserData = (name,id,profilePicURL,accessToken,expiresAt,email) => {

  return (dispatch) => {
    fetch('http://localhost:8080/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name,id,profilePicURL,accessToken,expiresAt,email})
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      // console.log(json);
      dispatch(postData(json.name,json.id,json.profilePicURL,json.accessToken,json.expiresAt,json.email))})
  }
}
//this action will changed loggedIn from false to true to display the search component
export const LOGIN_USER_PAGE = 'LOGIN_USER_PAGE';
export const loginUserPage = () => ({
  type: LOGIN_USER_PAGE
})
