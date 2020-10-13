import axios from 'axios'
import { setFetching, setRepos } from '../../reducers/reposReducer'

export const getRepos = (searchQuery = "stars:%3E1", currentPage, perPage) => {
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