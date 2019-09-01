import React from 'react';
import ListItem from './ListItem.js';

function ListGenerator({list}) {
    return (
            <ul className='list'>
                {
                    list.map((listItem, i) => {
                        return (
                            <ListItem item={listItem} key={i}/>
                        );
                    })
                }
            </ul>
    );    
}


export default ListGenerator;