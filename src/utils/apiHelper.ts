import axios from 'axios';
import {Todo} from './todos';


export const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

export const fetchTodos = (): Promise<Todo[]> => {
    const fetchData = api.get('/todos?userId=2');
    return fetchData.then((res) => {
        return Promise.resolve(res.data)
    }).catch((err) => {
        return err
    })
}

export const addTodo = (todo: Todo) => {
    const postData = api.post('/todos', todo);
    return postData.then((res) => Promise.resolve(res.data)).catch((error) => error)
}