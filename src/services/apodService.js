import { AppState } from "../AppState"
import { nasaApi } from "./AxiosService"

class ApodService {
    async getPicture(query){
        const res = await nasaApi.get('apod?api_key=zkBzNqIvBPExLctUBHMqN8RJ8Tgmsjfbiw7F43rG&start_date=' + query)
        AppState.apod = res.data[1]
        console.log(AppState.apod)
    }
}
export const apodService = new ApodService()