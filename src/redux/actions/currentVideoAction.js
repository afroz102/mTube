import { SET_CURRENT_VIDEO, TOGGLE_CURRENT_VIDEO_FETCHING_STATE, SET_COMMENTS } from '../actionType';
import axios from 'axios';
import { keys } from '../../config'

export const fetchVideo = (videoId) => async (dispatch) => {
    try {
        dispatch({ type: TOGGLE_CURRENT_VIDEO_FETCHING_STATE });

        const { data } = await axios.get(`${keys.BASE_URL}/videos?part=snippet,contentDetails,statistics&key=${keys.API_KEY}&id=${videoId}`);

        // console.log("response data: ", data);

        dispatch({
            type: SET_CURRENT_VIDEO,
            payload: data
        });

    } catch (error) {
        console.error("Error while fetching videos: ", error);
    } finally {
        dispatch({ type: TOGGLE_CURRENT_VIDEO_FETCHING_STATE })
    }
}

export const fetchComments = (videoId) => async (dispatch) => {
    try {
        dispatch({ type: TOGGLE_CURRENT_VIDEO_FETCHING_STATE });

        const { data } = await axios.get(`${keys.BASE_URL}/commentThreads?part=snippet,replies&key=${keys.API_KEY}&videoId=${videoId}`);

        // console.log("response data(comments): ", data);

        dispatch({
            type: SET_COMMENTS,
            payload: data
        });

    } catch (error) {
        console.error("Error while fetching comments: ", error);
    } finally {
        dispatch({ type: TOGGLE_CURRENT_VIDEO_FETCHING_STATE })
    }

}