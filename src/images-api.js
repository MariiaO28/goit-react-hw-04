import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com"
const myId = "OH9SRebkNECiFOw7Ax0d-qkbLdWdfVS1_TVBOyPMyT8";

export async function fetchPhotos(searchQuery, currentPage) {
    const response = await axios.get("/search/photos/",{
        params: {
            client_id: myId,
            query: searchQuery,
            per_page: 12,
            page: currentPage,
            orientation: 'landscape',
        }
    })
    return response.data;
}