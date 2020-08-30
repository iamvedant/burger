import axios from 'axios'

const instance = axios.create(
    {
        baseURL: 'https://react-my-burger-50edc.firebaseio.com/'
    }
)

export default instance;