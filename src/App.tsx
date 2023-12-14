import { useState } from "react";
import { Modal } from "./components/modal";
import { api } from "./services/api";

export function App() {
  const [openModal, setOpenModal] = useState(false);

  async function handleChangeNPS(value: string){
    if( value === '0') {
      alert('Você precisa escolher um valor')
      return
    }
    await api.post('/survey', { average: value }).then(() => setOpenModal(true))
  }

  return (
    <div className="App">
      <h1>Survey</h1>

      <Modal openModal={openModal} handleClose={() => setOpenModal(false)}/>
      <ul>
        <li>
          <button onClick={() => handleChangeNPS('1')}>
           Péssimo
          </button>
        </li>
        <li> 
          <button onClick={() => handleChangeNPS('2')}>
           Regular
          </button>
        </li>
        <li> 
          <button onClick={() => handleChangeNPS('3')}>
           Ótimo
          </button>
        </li>
      </ul>
    </div>
  )
}

export default App
