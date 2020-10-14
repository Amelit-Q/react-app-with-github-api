import React from 'react'

export const Card = ({history}) => {
    return (
        <div>
            <button className="button-back" onClick={() => history.goBack()}>Back</button>
        </div>
    )
}

//здесь хранится более подробная информация о репозитории