import React from 'react';

const Entries = ({items}) => {

    return <div className="section-center">{items.map((entryItem)=>{
        const {id, title, img, desc, date} = entryItem;
        return <article key={id} className="entry-item">
            <img src={img} alt={title} className="photo" />
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