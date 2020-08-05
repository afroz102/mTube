import axios from 'axios';
import { SET_PLAYLIST, TOGGLE_PLAYLIST_FETCHING_STATE } from './../actionType';

import { keys } from '../../config'

export const fetchPlaylists = (pageToken = "") => async (dispatch, getState) => {
    const accessToken = getState().userState.user.access_token;

    try {

        dispatch({
            type: SET_PLAYLIST,
            payload: null
        });

        dispatch({
            type: TOGGLE_PLAYLIST_FETCHING_STATE
        });

        const { data } = await axios(
            `${keys.BASE_URL}/playlists?part=snippet&key=${
            keys.API_KEY
            }&mine=true&maxResults=20${
            pageToken.length !== 0 ? "&pageToken=" + pageToken : ""
            }`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    Accept: "application/json"
                }
            }
        );

        console.log("palylist data: ", data);

        dispatch({
            type: SET_PLAYLIST,
            payload: data
        });

    } catch (error) {
        console.error("Error while fetching videos: ", error);
    } finally {
        dispatch({
            type: TOGGLE_PLAYLIST_FETCHING_STATE,
            payload: null
        })
    }
}

export const createPlaylist = playlist => async (dispatch, getState) => {
    const accessToken = getState().userState.user.access_token;

    try {
        dispatch({ type: TOGGLE_PLAYLIST_FETCHING_STATE });

        const { data } = await axios.post(
            `${keys.BASE_URL}/playlists?part=snippet,status&key=${keys.API_KEY}`,
            playlist,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    Accept: "application/json"
                }
            }
        );

        const playlistObj = getState().playlistState.playlists;
        playlistObj.items.push(data);
        // console.log("playlist created: ", playlistObj);
        dispatch({
            type: SET_PLAYLIST,
            payload: { ...playlistObj }
        });

    } catch (err) {
        console.error(err);
    } finally {
        dispatch({ type: TOGGLE_PLAYLIST_FETCHING_STATE });
    }
};