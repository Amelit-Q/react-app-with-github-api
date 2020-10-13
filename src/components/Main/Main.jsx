import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../reducers/reposReducer'
import { getRepos } from '../actions/repos'
import './Main.scss'
import { Repo } from './repo/Repo'

export const Main = () => {
    const dispatch = useDispatch()
    const repos = useSelector(state => state.repos.items)
    const isFetching = useSelector(state => state.repos.isFetching)
    const currentPage = useSelector(state => state.repos.currentPage)
    const totalCount = useSelector(state => state.repos.totalCount)
    const perPage = useSelector(state => state.repos.perPage)
    const [searchValue, setSearchValue] = React.useState('')

    const pagesCount = Math.ceil(totalCount / perPage)

    const pages = [1,2,3,4,5]

    React.useEffect(()=>{
        dispatch(getRepos(searchValue, currentPage, perPage))
    }, [currentPage])

    const searchHandler = e => {
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchValue))
    }

    return (
        <div>
            <div className="search">
                <input type="text" className="search__input" placeholder="input repo name" value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}/>
                <button className="search__button" onClick={()=>searchHandler()}>Search</button>
            </div>
            {
                isFetching === false ?
            repos.map(repo=> <Repo repo={repo}/>)
            : <div className="fetching">

            </div>
            }

            <div className="pages">
                {pages.map((page, index) => <span  key={index} className={currentPage === page ? "current-page" : "page"} onClick={()=> dispatch(setCurrentPage(page))}>{page}</span>)}
            </div>
        </div>
    )
}
