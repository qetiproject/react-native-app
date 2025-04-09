import axios from "axios";

const apiUrl: string = "https://jsonplaceholder.typicode.com";

export const DataService = async () => {
    try {
        const response = await axios.get(`${apiUrl}/todos`);
        return response.data.slice(0, 10);
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; 
    }
}

// https://jsonplaceholder.typicode.com/comments

export const CommentService = async () => {
    try{
        const response = await axios.get(`${apiUrl}/comments`)
        return response.data.slice(0, 10)
    }catch(error) {
        console.log("error", error)
        throw(error);
    }
}

export const test = async (): Promise<any> => {
    const response = fetch(`${apiUrl}/todos`)
    return (await response).json()
}

export const addTask = async(data: any) => {
    try {
        const response = axios.post(`${apiUrl}`, data, {
            headers: {
                'Content-Type': 'application/json'
            },
        })
        console.log(response, "response")
    }catch(error) {

    }
}