const SET_REPOS = 'SET_REPOS'
const SET_IS_FETCHING = "SET_IS_FETCHING"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

const defaultState = {
    items: [],
    isFetching: true,
    currentPage: 1,
    perPage: 10,
    totalCount: 0
}

export default function reposReducer(state = defaultState, action) {
    if (action.type === SET_REPOS) {
        return {
            ...state,
            items: action.payload.items,
            totalCount: action.payload.total_count,
            isFetching: false
        }
    } else if (action.type === SET_IS_FETCHING){
        return {
            ...state,
            isFetching: action.payload
        }
    } else if (action.type === SET_CURRENT_PAGE) {
        return {
            ...state,
            currentPage: action.payload
        }
    }
    return state;
    
}


//action creators которые принимают те параметры которые отражают то, что мы хотим получить (для удобства используются обозначания вроде repos, bool для isFetching)
export const setRepos = (repos) => ({type: SET_REPOS, payload: repos})
export const setFetching = (bool) => ({type: SET_IS_FETCHING, payload: bool})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, payload: page})
//isFetching true - когда данные подгружаются, false когда уже загрузились

