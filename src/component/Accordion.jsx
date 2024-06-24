import data from '../data.js';

import { useState } from "react"


export const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const handleSelectOne = (selectedId) => {

    setSelected(selectedId === selected ? null : selectedId);
  }
  return (
    <div className="wrapper">
      {/* <h1>Preguntas de Fórmula 1</h1> */}
      <div className="accordion">
        {data && data.length > 0 ?
          data.map(item =>
            <div className="item" key={item.id}>
              <div className="title" onClick={() => handleSelectOne(item.id)}>
                <h3>{item.question}</h3>
                <span>{selected === item.id ? '-' : '+'}</span>
              </div>

              {selected === item.id ? <div className='content'>{item.answer}</div> : null}

            </div>)
          :
          <div>
            <p>No pasa nada</p>
          </div>}
      </div>
    </div>
  )
}
