//SYNC ACTIONS

//this action will therotically update my entire user intial state

export const USER_DATA = 'USER_DATA';
export const userData = (name, email, googleId, profilePicURL, accessToken,favoriteVacations) => ({
  type: USER_DATA,
  name,
  email,
  googleId,
  profilePicURL,
  accessToken,
  favoriteVacations
})



export const HIDE_LOGIN = 'HIDE_LOGIN';
export const hideLogin = () =>({
  type: HIDE_LOGIN,
})

export const TOGGLE_HEDDING = 'TOGGLE_HEDDING';
export const toogleHeadding = () =>({
  type: TOGGLE_HEDDING,
})

export const TOGGLE_NAV = 'TOGGLE_NAV';
export const toogleNav = () =>({
  type: TOGGLE_NAV,
})


export const TOGGLE_G_NAV = 'TOGGLE_G_NAV';
export const toogleGNav = () =>({
  type: TOGGLE_G_NAV,
})

export const TOGGLE_G_NAV_OFF = 'TOGGLE_G_NAV_OFF';
export const toogleGNavOff = () =>({
  type: TOGGLE_G_NAV_OFF,
})


export const TOGGLE_NAV_OFF = 'TOGGLE_NAV_OFF ';
export const toogleNavOff = () =>({
  type: TOGGLE_NAV_OFF ,
})

export const TOGGLE_SEARCH = 'TOGGLE_SEARCH';
export const toogleSearch = () =>({
  type: TOGGLE_SEARCH,
})
export const TOGGLE_G_SEARCH = 'TOGGLE_G_SEARCH';
export const toogleGSearch = () =>({
  type: TOGGLE_G_SEARCH,
})
export const TOGGLE_G_SEARCH_OFF = 'TOGGLE_G_SEARCH_OFF';
export const toogleGSearchOff = () =>({
  type: TOGGLE_G_SEARCH_OFF,
})
export const TOGGLE_SEARCH_OFF = 'TOGGLE_SEARCH_OFF';
export const toogleSearchOff = () =>({
  type: TOGGLE_SEARCH_OFF,
})













// ASYNC ACTIONS

export const fetchUser = (googleId,name,email,profilePicURL,accessToken,expiresAt) => dispatch => {
    console.log("fetching user data...");
    fetch(`/api/user/${googleId}`)
    .then(response => response.json())
    .then(json => {
	    if (json == null) {
	      	console.log(`Sorry, no document in DB relates to ${name}`);
	      	console.log('soo,going to post a new user to the DB now ...');
	    	fetch('/api/user', {
        		method: 'POST',
        		headers: {
            	'Content-Type': 'application/json'
        		},
        		body: JSON.stringify({googleId,name,email,profilePicURL,accessToken,expiresAt})
    		})
    		.then(response => response.json())
    		.then(json => {
    			console.log('I have posted this user')
      			console.log(json)
      			dispatch(userData(json.name,json.email,json.googleId,json.profilePicURL,json.accessToken,json.favoriteVacations))
      		})
	    }
      	else if (json !== null){
      		console.log(`User ${name} was found in the USER DB`)
      		console.log(json)
      		dispatch(userData(json.name,json.email,json.googleId,json.profilePicURL,json.accessToken,json.favoriteVacations))
      	}
    })
}












//===============BREAK

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

export const LOGIN_USER_PAGE = 'LOGIN_USER_PAGE';
export const loginUserPage = (userType) => ({
  type: LOGIN_USER_PAGE,
  userType
})

export const FETCH_VACATION_DATA = 'FETCH_VACATION_DATA';
export const fetchvacationdata = (country, description, videoUrl, soundUrl) => ({
  type: FETCH_VACATION_DATA,
  country,
  description,
  videoUrl,
  soundUrl
})

export const SEARCH_DATA = 'SEARCH_DATA';
export const searchData = (country, description, videoUrl, soundUrl) => ({
  type: SEARCH_DATA,
  country,
  description,
  videoUrl,
  soundUrl
})
export const SOUND_CLOUD_ICON = 'SOUND_CLOUD_ICON';
export const soundCloudIcon = () => ({
  type: SOUND_CLOUD_ICON,
})
export const G_SOUND_CLOUD_ICON = 'G_SOUND_CLOUD_ICON';
export const GsoundCloudIcon = () => ({
  type: G_SOUND_CLOUD_ICON,
})

export const POST_VACATION_FORM = 'POST_VACATION_FORM';
export const postVacationForm = () => ({
  type: POST_VACATION_FORM,
})
export const EXPOSE_POST_FORM = 'EXPOSE_POST_FORM';
export const exposePostForm = () => ({
  type: EXPOSE_POST_FORM,
})




// Async ACTIONS

export const postUserData = (name,id,profilePicURL,accessToken,expiresAt,email) => {

  return (dispatch) => {
    fetch('/api/user', {
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


export const fetchvacations = () => dispatch => {
    console.log("fetching vacation data...");
    fetch('/api/vacation')
    .then(response => response.json())
    .then(json => {
      console.log(json[0].country)//look at the console before dispatching the action.

      dispatch(fetchvacationdata(json[0].country,json[0].description,json[0].videoUrl,json[0].soundUrl));
    })
}
export const ARRAY_OF_VACAYS = 'ARRAY_OF_VACAYS';
export const arrayOfVacays = (array) => ({
  type: ARRAY_OF_VACAYS,
  array
})
export const allVacationsCall = () => dispatch => {
    console.log("fetching vacation data...");
    fetch('/api/vacation')
    .then(response => response.json())
    .then(json => {
      console.log('LOOK HERE', json)//look at the console before dispatching the action.

      dispatch(arrayOfVacays(json));
    })
}


export const searchRequest = (data) => dispatch => {
    console.log("fetching search data...");
    fetch(`/api/vacation/${data}`)
    .then(response => response.json())
    .then(json => dispatch(searchData(json[0].country,json[0].description,json[0].videoUrl,json[0].soundUrl)))
}





//================wed's work=======================
//sync action

export const VACAY_HISTORY = 'VACAY_HISTORY';
export const vacayhistory = (vdata) => ({
  type: VACAY_HISTORY,
  vdata
})

// async action
export const fetchinghistory = (accessToken) => (dispatch, getState) => {
    const state = getState();
    console.log("fetching vacation history");
    fetch('/api/vacation', {
      headers:{
        authorization: `bearer ${state.accessToken}`
      }
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      dispatch(vacayhistory(json));
    })
}





export const POST_VACATION_DATA_SUCCESS = 'POST_VACATION_DATA_SUCCESS';
export const postVacationDataSuccess = () => ({
  type: POST_VACATION_DATA_SUCCESS,

})
export const  ADDING_VACAY_OBJ_TO_HISTORY = 'ADDING_VACAY_OBJ_TO_HISTORY';
export const addingVacayObjToHistory = (vacayObj) => ({
  type: ADDING_VACAY_OBJ_TO_HISTORY,
  vacayObj
})




export const postVacationData = (country,city,description,videoUrl,soundUrl) => {

  return (dispatch) => {
    fetch('/api/vacation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({country,city,description,videoUrl,soundUrl})
    })
    .then(response => response.json({country,city,description,videoUrl,soundUrl}))
    .then(json => {
      console.log(json)
      dispatch(postVacationDataSuccess())
      dispatch(addingVacayObjToHistory(json))
    })
  }
}
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const logoutSuccess = () =>({
  type: LOGOUT_SUCCESS,
})

// Vacations component




export const SHOW_VACAY_LIST = 'SHOW_VACAY_LIST';
export const showVacayList = () => ({
  type: SHOW_VACAY_LIST,

})

export const SHOW_G_VACAY_LIST = 'SHOW_G_VACAY_LIST';
export const showGVacayList = () => ({
  type: SHOW_G_VACAY_LIST,

})
export const HIDE_SHOW_G_VACAY_LIST = 'HIDE_SHOW_G_VACAY_LIST';
export const hideShowGVacayList = () => ({
  type: HIDE_SHOW_G_VACAY_LIST,

})

export const HIDE_VACAY_LIST = 'HIDE_VACAY_LIST';
export const hideVacayList = () => ({
  type: HIDE_VACAY_LIST,

})











