import React, { useEffect, useState } from 'react'
import Neww from '../Neww/Neww';

const MiddleNav = () => {

    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    return (
        <div>
            <h2 className='font-semibold text-xl mb-8'>Dragon News Home</h2>

            <div>
                {
                    news.map(neww => <Neww neww={neww} />)
                }
            </div>

        </div>
    )
}

export default MiddleNav