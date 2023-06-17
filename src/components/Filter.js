import React from 'react';

const Filter = ({tagsOfFilter, removeTag, clearTags}) => {

    const handleRemoveTag = (e) => {
        removeTag(e.target.previousSibling.innerText)
    }

    const clearAllTags = () => {
        clearTags()
   }
    return (<>
        {tagsOfFilter.length ?
            <div className="col-12">
                <div className="filter-tags-c">
                    <ul id="filter-tags-list">
                        {tagsOfFilter.map((tag, idx) => {
                            return (
                                <li key={idx} className='tag-filter'><p>{tag}</p><span onClick={handleRemoveTag} className='close-span'>×</span></li>                             
                            )


                        })}
                    </ul>
                    <p className="clear-tags" id="js-clear-tags" onClick={clearAllTags}>Clear</p>
                </div>
            </div> : ""}
    </>);
}

export default Filter;
