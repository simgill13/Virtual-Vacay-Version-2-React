import {
  FETCH_HOUSES_REQUEST,
  FETCH_HOUSES_SUCCESS,
  POST_LOGIN_DATA

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
  email:""

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
      default:
      return state;
    }
  }
