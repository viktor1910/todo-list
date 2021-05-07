import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export const fetchTodos = (): Promise<Todo[]> => {
    const fetchData = api.get('/todos?userId=2');
    return fetchData.then((res) => {
        return Promise.resolve(res.data)
    }).catch((err) => {
        return err
    })
}