import { SET_PLAYLIST, TOGGLE_PLAYLIST_FETCHING_STATE } from './../actionType'
const initialState = {
    playlists: [],
    isVideoFetching: false
}

const playlistReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_PLAYLIST:
            return { ...state, playlists: payload }

        case TOGGLE_PLAYLIST_FETCHING_STATE:
            return { ...state, isVideoFetching: !state.isVideoFetching }

        default: return state;
    }
}

export default playlistReducer;