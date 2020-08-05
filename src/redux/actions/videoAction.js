import { SET_VIDEOS, TOGGLE_VIDEO_FETCHING_STATE } from '../actionType';
import axios from 'axios';
import { keys } from './../../config'

export const fetchTrendingVideos = (pageToken = "") => async (dispatch) => {
    try {

        // to get previous data back
        dispatch({ type: SET_VIDEOS, payload: null });

        dispatch({ type: TOGGLE_VIDEO_FETCHING_STATE });

        const { data } = await axios.get(`${keys.BASE_URL}/videos?part=snippet&key=${keys.API_KEY}&maxResults=20&regionCode=IN&chart=mostPopular${pageToken.length !== 0 ? "&pageToken=" + pageToken : ""}`);

        // console.log("response data: ", data);

        dispatch({
            type: SET_VIDEOS,
            payload: data
        });

    } catch (error) {
        console.error("Error while fetching videos: ", error);
    } finally {
        dispatch({ type: TOGGLE_VIDEO_FETCHING_STATE })
    }

}

export const fetchSearchVideos = (searchQuery, pageToken = "") => async (dispatch) => {
    try {
        // to get previous data back
        dispatch({ type: SET_VIDEOS, payload: null });

        dispatch({ type: TOGGLE_VIDEO_FETCHING_STATE });

        const { data } = await axios.get(`${keys.BASE_URL}/search?part=snippet&type=video&key=${keys.API_KEY}&maxResults=20&q=${searchQuery}${pageToken.length !== 0 ? "&pageToken=" + pageToken : ""}`);

        console.log("response data(searched result): ", data);

        dispatch({
            type: SET_VIDEOS,
            payload: data
        });

    } catch (error) {
        console.error("Error while fetching videos: ", error);
    } finally {
        dispatch({ type: TOGGLE_VIDEO_FETCHING_STATE })
    }

}