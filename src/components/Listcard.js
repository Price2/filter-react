import React, { useCallback } from 'react';
import Card from './Card';
import Filter from './Filter';

const Listcard = () => {

  const [allCardData, setAllCardData] = React.useState([
    {
      id: 1,
      Img: 'photosnap',
      company: 'Photosnap',
      post: 'NEW!',
      featured: 'FEATURED',
      jobtitle: 'Senior Frontend Developer',
      time: '1d ago',
      contract: 'Full Time',
      location: 'USA only',
      skill: ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript'],
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos autem animi dicta cumque optio earum temporibus. Voluptate, nobis! Quas asperiores consectetur provident qui necessitatibus hic repellat nisi dignissimos dicta odit, ratione ullam expedita culpa quo vitae fugit cumque excepturi beatae?'
    },
    {
      id: 2,
      Img: 'manage',
      company: 'Manage',
      post: 'NEW!',
      featured: 'FEATURED',
      jobtitle: 'Fullstack Developer',
      time: '1d ago',
      contract: 'Part Time',
      location: 'Remote',
      skill: ['Fullstack', 'Midweight', 'Python', 'React'],
    },
    {
      id: 3,
      Img: 'account',
      company: 'Account',
      post: 'NEW!',
      jobtitle: 'Junior Frontend Developer',
      time: '2d ago',
      contract: 'Part Time',
      location: 'USA only',
      skill: ['Frontend', 'Junior', 'React', 'Sass', 'JavaScript'],
    },
    {
      id: 4,
      Img: 'myhome',
      company: 'MyHome',
      jobtitle: 'Junior Frontend Developer',
      time: '5d ago',
      contract: 'Contract',
      location: 'USA only',
      skill: ['Frontend', 'Junior', 'CSS', 'Javascript'],
    },
    {
      id: 5,
      Img: 'loop-studios',
      company: 'Loop Studios',
      jobtitle: 'Software Engineer',
      time: '1w ago',
      contract: 'Full Time',
      location: 'Worldwide',
      skill: ['Fullstack', 'Midweight', 'Javascript', 'Sass', 'Ruby'],
    },
    {
      id: 6,
      Img: 'faceit',
      company: 'FaceIt',
      jobtitle: 'Junior Backend Developer',
      time: '2w ago',
      contract: 'Full Time',
      location: 'UK only',
      skill: ['Backend', 'Junior', 'Ruby', 'RoR'],
    },
    {
      id: 7,
      Img: 'shortly',
      company: 'Shortly',
      jobtitle: 'Junior Developer',
      time: '2w ago',
      contract: 'Full Time',
      location: 'Worldwide',
      skill: ['Frontend', 'Junior', 'HTML', 'Sass', 'JavaScript'],
    },
    {
      id: 8,
      Img: 'insure',
      company: 'Insure',
      jobtitle: 'Junior Frontend Developer',
      time: '2w ago',
      contract: 'Full Time',
      location: 'USA only',
      skill: ['Frontend', 'Junior', 'Vue', 'JavaScript', 'Sass'],
    },
    {
      id: 9,
      Img: 'eyecam-co',
      company: 'Eyecam Co.',
      jobtitle: 'Full Stack Engineer',
      time: '3w ago',
      contract: 'Full Time',
      location: 'Worldwide',
      skill: ['Fullstack', 'Midweight', 'Javascript', 'Django', 'Python'],
    },
    {
      id: 10,
      Img: 'the-air-filter-company',
      company: 'The Air Filter Company',
      jobtitle: 'Front-end Dev',
      time: '1mo ago',
      contract: 'Part Time',
      location: 'Worldwide',
      skill: ['Frontend', 'Junior', 'React', 'Sass', 'Javascript'],
    },
  ])
  const [filteredCards, setFilteredCards] = React.useState([])
  const [filterTags, setfilterTags] = React.useState([])

  const handleTag = (tag) => {
    const tags = tag.map((filtertag) => {
      return (Object.keys(filtertag)[0])
    })[0]
    setfilterTags((prevTags) => [...filterTags, tags])
  }


  const filterByTag = () => {
    const cardsFiltered = filterCards()
    setFilteredCards(cardsFiltered)
  }


  const filterCards = (cards) => {
    if (filterTags.length && filterTags.length > 1) {
      const unduplicateTags = [...new Set(filterTags)];
      const cardsAfterFilter = allCardData.filter((card) => {
        const cardTag = card.skill.filter((tag) => {

          if (unduplicateTags.includes(tag.toLocaleLowerCase())) {
            return true
          }
          else return false
        })


        if (cardTag.length == unduplicateTags.length) {
          return card
        }
        return false
      })
      return cardsAfterFilter

    }
    else {

      const cardsAfterFilter = allCardData.filter((card) => {
        const cardTag = card.skill.filter((tag) => {

          if (filterTags.includes(tag.toLocaleLowerCase())) {
            return true
          }
          else return false
        })


        if (cardTag.length) {
          return card
        }
        return false
      })
      return cardsAfterFilter
    }
  }

  const removeTagFilter = (tag) => {
    const tags = [...filterTags].filter((tagElem) => {
      return tagElem !== tag

    })
    setfilterTags(tags)

  }
  const clearAllTags = () => {
    setfilterTags([])
  }

  React.useEffect(() => {
    filterByTag()
  }, [filterTags]);

  return (
    <>
      <main>
        <div className="container mt-5">
          <div className="row">
            <Filter tagsOfFilter={filterTags} removeTag={removeTagFilter} clearTags={clearAllTags} />

          </div>
          <div className="row">
            <ul className="col-12" id="job-list">

              {filteredCards.length ?

                filteredCards.map((card, idx) => {

                  return <Card key={idx} allCards={card} filteredCards={card} tagHandler={handleTag} />
                })
                : allCardData.map((card, idx) => {

                  return <Card key={idx} allCards={card} filteredCards={filteredCards} tagHandler={handleTag} />
                }

                )}




            </ul>
          </div>
        </div>
      </main>



    </>
  );
}

export default Listcard;
