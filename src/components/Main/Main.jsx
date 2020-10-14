import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../../reducers/reposReducer'
import { getRepos } from '../api/repos'
import './Main.scss'
import { Repo } from './repo/Repo'

export const Main = () => {

    //c помощью хуков useDispatch (главный для того что работать с redux в компоненте)
    //и useSelector в каждом конкретном случае, вытаскиваем из reposReducer те значения, которые записанны в определённых переменных state
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
        //здесь в диспетчер передаются параметры, которые принимает в api getRepos
        //запрос к серверам принято делать до подгрузки компонентов в хуке useEffect
        dispatch(getRepos(searchValue, currentPage, perPage))
    }, [currentPage])

    const searchHandler = e => {
        //здесь происходит поиск по кнопке
        //первое это текущая страница, второй диспатчер это получение репозитиория аргументом которого будет searchValue
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

//код Выше: если isFetching true, то подгружается анимация загрузки, если же значение false (получен ответ от сервера с репозиториями) код идёт дальше

//функция map обрабатывает каждый элемент массива
//Компонент Main содерждит в себе все репозитории
// Из Main идёт передача данных в Repo 
