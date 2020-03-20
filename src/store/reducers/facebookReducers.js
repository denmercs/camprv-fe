import {
  FACEBOOK_WEDDING_ALBUMS_START,
  FACEBOOK_WEDDING_ALBUMS_SUCCESS,
  FACEBOOK_WEDDING_ALBUMS_FAIL,
  FACEBOOK_ENGAGEMENT_ALBUMS_START,
  FACEBOOK_ENGAGEMENT_ALBUMS_SUCCESS,
  FACEBOOK_ENGAGEMENT_ALBUMS_FAIL,
  FACEBOOK_GET_PHOTOS_START,
  FACEBOOK_GET_PHOTOS_SUCCESS,
  FACEBOOK_GET_PHOTOS_FAIL
} from "..";

const initialState = {
  weddingAlbums: [],
  engagementAlbums: [],
  photos: [],
  loading: false,
  success: false,
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FACEBOOK_WEDDING_ALBUMS_START:
      return {
        ...state,
        loading: true
      };
    case FACEBOOK_WEDDING_ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        weddingAlbums: action.payload
      };
    case FACEBOOK_WEDDING_ALBUMS_FAIL:
      return {
        ...state,
        success: false,
        error: action.payload
      };
    case FACEBOOK_ENGAGEMENT_ALBUMS_START:
      return {
        ...state,
        loading: true
      };
    case FACEBOOK_ENGAGEMENT_ALBUMS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        engagementAlbums: action.payload
      };
    case FACEBOOK_ENGAGEMENT_ALBUMS_FAIL:
      return {
        ...state,
        success: false,
        error: action.payload
      };
    case FACEBOOK_GET_PHOTOS_START:
      return {
        ...state,
        loading: true
      };
    case FACEBOOK_GET_PHOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        photos: action.payload
      };
    case FACEBOOK_GET_PHOTOS_FAIL:
      return {
        ...state,
        success: false,
        error: action.payload
      };
    default:
      return state;
  }
}
