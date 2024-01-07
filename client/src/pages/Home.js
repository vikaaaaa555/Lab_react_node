import React, { useState, useEffect } from 'react'
import '../site.css'
import TimeZone from '../components/TimeZone'
import { observer } from "mobx-react-lite"

const Home = observer(() => {
    const [imageUrl, setImageUrl] = useState('')
    const [fact, setFact] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const imageResponse = await fetch('https://dog.ceo/api/breeds/image/random')
                const imageData = await imageResponse.json()
                setImageUrl(imageData.message);

                const factResponse = await fetch('https://catfact.ninja/fact')
                const factData = await factResponse.json()
                setFact(factData.fact)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        };
        fetchData();
    }, [])

    return (
        <div align='center'>
            <div style={{margin: '50px'}}>
                {
                    <TimeZone />
                }
                <h3 style={{margin: '20px', fontSize: '20px', color: '#555555'}}>{fact}</h3>
                <img src={imageUrl} alt="Random Dog" />
            </div>
        </div>
    )
})

export default Home