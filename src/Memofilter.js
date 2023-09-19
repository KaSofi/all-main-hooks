import { useMemo, useState } from "react";

const fruits = [
    {
        id: '1',
        item: 'apple'
    },
    {
        id: '2',
        item: 'plum'
    },
    {
        id: '3',
        item: 'pineapple'
    },
    {
        id: '4',
        item: 'banana'
    },
    {
        id: '5',
        item: 'orange'
    },
]


function MemoFilter() {
    
    const [text, setText] = useState('');
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        setSearch(text)
    }
/* используя просто метод filter() - фильтрация будет при нажатии на каждую букву(это не оптимально, так как много раз вызывавется render(перезагрузка страницы) ) */
    /*
    const filteredFruits = fruits.filter((fruit => {
        console.log('FILL')
        return(
            fruit.item.toLowerCase().includes(search.toLowerCase())
        )
    }))
*/
/* useMemo() - для фильтрации при нажатии на кнопку */
    const filteredFruits = useMemo( () => fruits.filter((fruit) => {
    return fruit.item.toLowerCase().includes(search.toLowerCase())
    }), [search]) 


    const hookColor = {
        color: 'white'
    }

    return(
        <div className="UseMemoFilteringStyle">
            <h3>Finder</h3>
            <h4 style={hookColor}>useMemo()</h4>
            <div className="MemoSeacher">
                <input type="text"
                        placeholder="search..."
                        value={text}
                        onChange={ (e) => setText(e.target.value) }
                />
                <button onClick={handleSearch}>SEARCH</button>
            </div>
            <div>
                {
                    filteredFruits.map((filteredFruits) => (
                        <p key={filteredFruits.id}>{filteredFruits.item}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default MemoFilter;