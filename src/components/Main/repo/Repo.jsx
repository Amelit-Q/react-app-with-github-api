import React from 'react'
import './Repo.scss'

export const Repo = ({repo}) => {

    return (
        <div className="repo">
            <div className="repo__header">
    <div className="repo__header-name">{repo.name}</div>
    <div className="repo__header-stars">{repo.stargazers_count}</div>
            </div>
    <div className="repo__last-commit">{repo.updated_at}</div>
    <a href={repo.html_url} className="repo__link">Ссылка на репозиторий: {repo.html_url}</a>
        </div>
    )
}
