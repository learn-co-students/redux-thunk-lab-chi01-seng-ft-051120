// write your CatList component here
import React from 'react'

const CatList = (props) => {
    const renderCats = () => {
        console.log(props)
        return props.catPics.map(cat => {
            return <img key={cat.id} src={cat.url} width="200px" height="200px" alt="cat"/>
        })
    }

    return (
        <div className="cat-pics">
            {renderCats()}
        </div>
    )
}

export default CatList