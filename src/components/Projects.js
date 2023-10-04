import React, {useState} from 'react'
import data from '../data/data.json'
import './projects.css'
function Projects() {

  const [info,setInfo] = useState([])

  const moreInfo = (index) => {
    if (info.includes(index) ){
      setInfo(info.filter((item) => item !==index))
    }else
      setInfo([...info, index])
  }

  return (
    <div>

        {
            data.map((item, key) => (
                <div className='news_wrapper'>
                  <img src={item.img} alt="image"/>
                  <div>
                    <h2> {item.title} </h2>
                    <p> {item.description} </p>
                    {info.includes(key) && <p>{item.moreInfo}</p>}
                    <button onClick={()=> moreInfo(key)}>
                      {info.includes(key) ? 'скрыть' : 'читать полностью'}
                    </button>
                  </div>
                </div>
            ))
        }


        {/*<img alt='1'></img>*/}
        {/*<div>*/}
        {/*    <h2>*/}
        {/*    Проект «Учет интересов местных сообществ Жогорку Кенешем при обсуждении законопроектов»*/}
        {/*    </h2>*/}
        {/*    <p>Проект «Учет интересов местных сообществ Жогорку Кенешем при обсуждении законопроектов»</p>*/}
        {/*</div>*/}
    </div>
  )
}

export default Projects