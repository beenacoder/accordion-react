import { useState } from "react";
import data from '../data.js';



export const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelect, setMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSelectOne = (selectedId) => {
    setSelected(selectedId === selected ? null : selectedId);
  }

  const handleMultiple = (selectedId) => {
    let clonMultiple = [...multiple];
    const findIndexOfSelectedId = clonMultiple.indexOf(selectedId);
    if (findIndexOfSelectedId === -1) {
      clonMultiple.push(selectedId);
    } else {
      clonMultiple.splice(findIndexOfSelectedId, 1);
    }
    setMultiple(clonMultiple);
  }

  // console.log(selected, multiple);

  return (
    <div className="wrapper">
      <h1>Preguntas de Fórmula 1</h1>
      <button onClick={() => { setMultiSelect(!multiSelect) }}>{multiSelect ? 'Selección múltiple' : 'Selección simple'}</button>
      <div className="accordion">
        {data && data.length > 0 ?
          data.map(item =>
            <div className="item" key={item.id}>
              <div
                className="title"
                onClick={multiSelect ?
                  () => handleMultiple(item.id) :
                  () => handleSelectOne(item.id)}
              >
                <h3>{item.question}</h3>
                <span>{selected === item.id ? '-' : '+'}</span>
              </div>

              {
                multiSelect ?
                  multiple.indexOf(item.id) !== -1 && (
                    <div className='content'>{item.answer}</div>
                  ) :
                  selected === item.id && (
                    <div className='content'>{item.answer}</div>
                  )
              }
              {/* {selected === item.id || multiple.indexOf(item.id !== -1) ?
               <div className='content'>{item.answer}</div> 
               : 
               null} */}

            </div>)
          :
          <div>
            <p>No pasa nada</p>
          </div>}
      </div>
    </div>
  )
}
