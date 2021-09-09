import React from 'react';
import { Link } from 'react-router-dom';

const Entries = ({items}) => {

    return <div className="section-center">{items.map((entryItem)=>{
        const {id, title, img, url, desc, date} = entryItem;
        return <article key={id} className="entry-item">
            <Link to={`/${url}`}><img src={img} alt={title} className="photo" /></Link>
            <div className="entry-info">
                    <h4>{title}</h4>
                    <h4 className="date">{date}</h4>
                <div className="entry-text">{desc}</div>
            </div>
        </article>
    })}
    </div>
}

export default Entries;