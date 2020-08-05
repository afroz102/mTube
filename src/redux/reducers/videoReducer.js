import { SET_VIDEOS, TOGGLE_VIDEO_FETCHING_STATE } from './../actionType'
const initialState = {
    videos: [],
    isVideoFetching: false
}

const videoReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_VIDEOS:
            return { ...state, videos: payload }

        case TOGGLE_VIDEO_FETCHING_STATE:
            return { ...state, isVideoFetching: !state.isVideoFetching }

        default: return state;
    }
}

export default videoReducer;