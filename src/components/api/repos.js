import axios from 'axios'
import { setFetching, setRepos } from '../../reducers/reposReducer'

export const getRepos = (searchQuery = "stars:%3E1", currentPage, perPage) => {

    //т.к. это ассинхронное действие, то используется замыкание, дабы можно было использовать диспетчер (dispatch)
    if(searchQuery === '') {
        searchQuery = "stars:%3E1"
    }
    return async(dispatch) => {
        dispatch(setFetching(true))
        const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&current_page=${currentPage}`)
        dispatch(setRepos(response.data))
    }
}

//в axios ответ от сервера хранится в data потому и response.data который отрпавляется в reducer
//в этой файле хранятся action creators ассинхронные
//с помощью первого action получаем data из API Guthib в частности репозитории со звёздочками (наибольшим количеством)
//далее в диспетчер передаётся action setRepos и внутрь помещается response.data, который будет помещён в items
// в переменной response хранится ответ от сервера