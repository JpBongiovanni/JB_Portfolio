import React, { useState } from 'react';
import Entries from './Entries';
import Categories from './Categories';
import items from './data';

const allCategories = ['all',...new Set(items.map((item) => item.category))];

function BlogApp() {
    const [entryItems, setEntryItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if(category === 'all'){
            setEntryItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category)
            setEntryItems(newItems)
    };

    return <main>
        <section className="menu section">
            <div className="title">
                <h2>Entries</h2>
                <Categories categories={categories}filterItems={filterItems}/>
            </div>
            <div>
                <Entries items={entryItems}/>
            </div>
        </section>
    </main>
} 

export default BlogApp;