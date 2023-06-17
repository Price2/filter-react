import React from 'react';

const Card = ({ allCards, filteredCards, tagHandler, handleFilteredCards }) => {
    const [cardTag, setcardTag] = React.useState([])
    const {
        id,
        Img,
        company,
        post,
        featured,
        jobtitle,
        time,
        contract,
        location,
        skill
    } = allCards

    const handleTag = (e) => {
        setcardTag((prevTags) => { return [{ [e.target.innerText.toLowerCase()]: true }] })
    }

    React.useEffect(() => {
        if (cardTag.length) {
            tagHandler(cardTag)
        }

    }, [cardTag]);


    return (

        <>
            {filteredCards.length ?

                <li className="job-card new featured">
                    <div className="job-card__info">
                        <div className="d-md-flex align-items-center">
                            <div className="img-c"><img
                                src={require("../Images/" + filteredCards.Img + ".svg")} alt="card-img" />
                            </div>

                            <div className="w-100">
                                <div className="justify-content-between d-flex w-100 align-items-center">
                                    <div className="d-flex align-items-center">
                                        <p>{filteredCards.company}</p>
                                        <p className="tag-new">{filteredCards.post}</p>
                                        {filteredCards.featured ? <p className="tag-featured">{filteredCards.featured}</p> : ""}
                                    </div>

                                    <ul className="job-card__tags">
                                        {filteredCards.skill.map((tag, idx) => {

                                            return <li key={idx} onClick={handleTag}>{tag}</li>
                                        }
                                        )}
                                    </ul>

                                </div>

                                <a href="" style={{ textDecoration: 'none' }}>
                                    <h6>{filteredCards.jobtitle}</h6>
                                </a>

                                {filteredCards.description ? <p style={{ color: '#939c9b', fontSize: '12px', fontWeight: 'normal' }}>Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Dignissimos autem animi dicta cumque optio earum temporibus. Voluptate, nobis!
                                    Quas asperiores consectetur provident qui necessitatibus hic repellat nisi dignissimos dicta odit,
                                    ratione ullam expedita culpa quo vitae fugit cumque excepturi beatae?</p> : ""}

                                <ul>
                                    <li>{filteredCards.time}</li>
                                    <li>{filteredCards.contract}</li>
                                    <li>{filteredCards.location}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </li>




                :
                <li className="job-card new featured">
                    <div className="job-card__info">
                        <div className="d-md-flex align-items-center">
                            <div className="img-c"><img
                                src={require("../Images/" + Img + ".svg")} alt="card-img" />
                            </div>

                            <div className="w-100">
                                <div className="justify-content-between d-flex w-100 align-items-center">
                                    <div className="d-flex align-items-center">
                                        <p>{company}</p>
                                        <p className="tag-new">{post}</p>
                                        {featured ? <p className="tag-featured">{featured}</p> : ""}
                                    </div>

                                    <ul className="job-card__tags">
                                        {skill.map((tag, idx) => {

                                            return <li key={idx} onClick={handleTag}>{tag}</li>
                                        }
                                        )}
                                    </ul>

                                </div>

                                <a href="" style={{ textDecoration: 'none' }}>
                                    <h6>{jobtitle}</h6>
                                </a>

                                {allCards.description ? <p style={{ color: '#939c9b', fontSize: '12px', fontWeight: 'normal' }}>Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Dignissimos autem animi dicta cumque optio earum temporibus. Voluptate, nobis!
                                    Quas asperiores consectetur provident qui necessitatibus hic repellat nisi dignissimos dicta odit,
                                    ratione ullam expedita culpa quo vitae fugit cumque excepturi beatae?</p> : ""}

                                <ul>
                                    <li>{time}</li>
                                    <li>{contract}</li>
                                    <li>{location}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </li>
            }
        </>
    );
}

export default Card;
