import axios  from "axios"

const apiUrl: string = "https://domain.com";

export const GetUsers = async () => {
    try {
        const response = await axios.get(`${apiUrl}/users`)
        return response.data.slice(0,10)
    }catch(error) {
        throw error
    }
}