import {

  USER_DATA,
  HIDE_LOGIN,
  TOGGLE_HEDDING,
  TOGGLE_NAV,
  TOGGLE_SEARCH,
  POST_LOGIN_DATA,
  LOGIN_USER_PAGE,
  FETCH_VACATION_DATA,
  SEARCH_DATA,
  SOUND_CLOUD_ICON,
  VACAY_HISTORY,
  POST_VACATION_FORM,
  EXPOSE_POST_FORM,
  POST_VACATION_DATA_SUCCESS,
  ADDING_VACAY_OBJ_TO_HISTORY,
  LOGOUT_SUCCESS,
  SHOW_VACAY_LIST,
  TOGGLE_NAV_OFF,
  HIDE_VACAY_LIST,
  TOGGLE_SEARCH_OFF,
  ARRAY_OF_VACAYS,
  TOGGLE_G_SEARCH,
  G_SOUND_CLOUD_ICON,
  TOGGLE_G_NAV,
  SHOW_G_VACAY_LIST,
  TOGGLE_G_SEARCH_OFF,
  TOGGLE_G_NAV_OFF,
  HIDE_SHOW_G_VACAY_LIST

} from '../actions/action';

const initialState = {
  videoUrl: "https://www.youtube.com/embed/HFIEwpbOWak",
  showHeading: false,
  login:false,
  nav:false,
  search:false,
  name: "",
  email:"",
  googleAccountId: "",
  profilePicURL: "",
  accessToken:"",
  favoriteVacations:[],
  soundShowing: false,
  country:"",
  description:"",
  soundUrl:"",
  vacations:false,
  arrayofVacays:[],
  Gsearch:false,
  GsoundShowing:false,
  Gnav:false,
  Gvacations:false


};







export default (state = initialState, action) => {
	switch(action.type) {
      
	case USER_DATA:
		return Object.assign({}, state, {
		    name: action.name,
		  	email:action.email,
		  	googleId:action.googleId,
		  	profilePicURL:action.profilePicURL,
		  	accessToken:action.accessToken,
		  	favoriteVacations:action.favoriteVacations
		})
	        
    case HIDE_LOGIN:
		return Object.assign({}, state, {
		    login:true
		})   
    
    case TOGGLE_HEDDING:
		return Object.assign({}, state, {
		    showHeading:true
		}) 

	case TOGGLE_NAV:
		return Object.assign({}, state, {
		    nav:true
		})

  case TOGGLE_G_NAV:
    return Object.assign({}, state, {
        Gnav:true
    })
  case TOGGLE_G_NAV_OFF:
    return Object.assign({}, state, {
        Gnav:false
    })

  case TOGGLE_NAV_OFF:
    return Object.assign({}, state, {
        nav:false
    })

  case ARRAY_OF_VACAYS:
    return Object.assign({}, state, {
        arrayofVacays:action.array
    })

	case TOGGLE_SEARCH:
		return Object.assign({}, state, {
		    search:true
		})


  case TOGGLE_G_SEARCH:
    return Object.assign({}, state, {
        Gsearch:true
    })
  case TOGGLE_G_SEARCH_OFF:
    return Object.assign({}, state, {
        Gsearch:false
    })  

  case TOGGLE_SEARCH_OFF:
    return Object.assign({}, state, {
        search:false
    })
    case SHOW_VACAY_LIST:
    return Object.assign({}, state, {
        vacations:true
    })
    case SHOW_G_VACAY_LIST:
    return Object.assign({}, state, {
        Gvacations:true
    })

    case HIDE_SHOW_G_VACAY_LIST:
    return Object.assign({}, state, {
        Gvacations:false
    })
     case HIDE_VACAY_LIST:
    return Object.assign({}, state, {
        vacations:false
    })
  case SEARCH_DATA:
    return Object.assign({},state,{
      country: action.country,
      description: action.description,
      videoUrl: action.videoUrl,
      soundUrl: action.soundUrl
    })
   case SOUND_CLOUD_ICON:
      return Object.assign({},state,{
        soundShowing: true
      })
    case G_SOUND_CLOUD_ICON:
      return Object.assign({},state,{
        GsoundShowing: true
      })      


		default:
	    return state;
	}
}
