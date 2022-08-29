import axios from "axios";

const KEY = "AIzaSyBvZtsoIq-60VXffGmjrIVBCB2t9aOdlz0";
const baseURL = "https://www.googleapis.com/youtube/v3"

export const YoutubeService = {
    getVideos : function(search, maxResults) {
        return axios.get(`${baseURL}/search`,{
            params: {
                q: search, 
                part: 'snippet',
                type: 'video', 
                maxResults,
                key: KEY
            }
        })
    }
}