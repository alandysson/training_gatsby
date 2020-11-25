import React from 'react';

import data from '../../data/data.json';
import './styles.css';

export default function Conteudo(){

    return(
        <div className='main-cont'>
            {data.datas.map(item => (
                <article key={item.key}>
                    <img src={item.img} alt=''/>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                </article>
            ))}
        </div>
    )
}