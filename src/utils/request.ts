import axios from 'axios';

const ApiClient = () => {
    const defaultOptions: any = {
        baseUrl: 'http://localhost:3000/v1/'
    };
    const instance = axios.create(defaultOptions);
    instance.interceptors.request.use((response) => {
        return response;
    },
        (error) => {
            console.log('err api', error);
        }
    )
}