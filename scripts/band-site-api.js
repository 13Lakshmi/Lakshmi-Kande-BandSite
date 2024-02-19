class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    }

    async getComments() {
        try {
            const response = await axios.get(`${this.baseUrl}comments?api_key=${this.apiKey}`);
            let response1=response.data
            response1.sort((a, b) => b.timestamp - a.timestamp);
            return response1;
        }
        catch (e) {
            console.log("error:", e);
        }

    }


    async postComments(newConversation) {
        try {
            const response = await axios.post(`${this.baseUrl}comments?api_key=${this.apiKey}`,newConversation);
            return response;
        } catch (e) {
            console.log("error:", e);
        }
    }


async getShows(){
    try{
        const response = await axios.get(`${this.baseUrl}showdates?api_key=${this.apiKey}`);
        return response;
    } catch(e){
        console.log("error:", e);
    }
}

}



export default BandSiteApi;
