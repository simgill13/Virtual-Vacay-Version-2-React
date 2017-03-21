import {
  FETCH_HOUSES_REQUEST,
  FETCH_HOUSES_SUCCESS,
  POST_LOGIN_DATA,
  LOGIN_USER_PAGE,
  FETCH_VACATION_DATA,
  SEARCH_DATA

} from '../actions/action';

const initialState = {
  title: "df",
  loading: false,
  loggedIn: false,
  name:"",
  id:"",
  profilePicURL:"",
  accessToken:"",
  expiresAt:1490074439647,
  email:"",
  country:"",
  description:"",
  videoUrl: "https://www.youtube.com/embed/jEnd8JIMii4?start=16m12s",
  soundUrl:""
};

export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_HOUSES_REQUEST:
        return Object.assign({}, state, {loading: true})

      case FETCH_HOUSES_SUCCESS:
        return Object.assign({}, state, {
          title: action.title,
          url: action.url,
          location: action.location,
          price: action.price,
          description: action.description,
          accomodates: action.accomodates,
          loading: false
        })
        case POST_LOGIN_DATA:
         return Object.assign({},state,{
          name:action.name,
          id:action.id,
          profilePicURL:action.profilePicURL,
          accessToken:action.accessToken,
          expiresAt:action.expiresAt,
          email:action.email
        })
        case LOGIN_USER_PAGE:
         return Object.assign({}, state, {
           loggedIn: true
         })
         case FETCH_VACATION_DATA:
         return Object.assign({},state,{
          country: action.country,
          description: action.description,
          videoUrl: action.videoUrl,
          soundUrl: action.soundUrl
        })
        case SEARCH_DATA:
         return Object.assign({},state,{
           country: action.country,
           description: action.description,
           videoUrl: action.videoUrl,
           soundUrl: action.soundUrl
         })

      default:
      return state;
    }
  }
