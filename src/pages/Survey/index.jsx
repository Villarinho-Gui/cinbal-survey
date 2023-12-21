/* eslint-disable react/jsx-key */
import { useState } from 'react'
import { Modal } from '../../components/Modal'
import { api } from '../../services/api'
import { ActionButton, ActionButtons, CurrentComponent, Form, Header, HomeContainer, SectorInput } from './styles'
import { CompFuncionarios } from './components/CompFuncionarios'
import { Equipe } from './components/Equipe'
import { FuturoEstInovacao } from './components/FuturoEstInovacao'
import { Lideranca } from './components/Lideranca'
import { Motivacao } from './components/Motivacao'
import { Valores } from './components/Valores'
import { Cultura } from './components/Cultura'
import { Steps } from './components/Steps'
import { Comunicacao } from './components/Comunicacao'

// Hooks
import { useForm } from '../../hooks/useForm'
import { useSurveyContext } from './contexts/SurveyContext'

export const Survey = () => {
  const [openModal, setOpenModal] = useState(false)
  const {
    pergunta1,
    pergunta2,
    pergunta3,
    pergunta4,
    pergunta5,
    pergunta6,
    pergunta7,
    pergunta8,
    pergunta9,
    pergunta10,
    pergunta11,
    pergunta12,
    pergunta13,
    pergunta14,
    pergunta15,
    pergunta16,
    pergunta17,
    pergunta18,
    pergunta19,
    pergunta20,
    pergunta21,
    pergunta22,
    pergunta23,
    pergunta24,
    pergunta25,
    pergunta26,
    pergunta27,
    pergunta28,
    pergunta29,
    pergunta30,
    pergunta31,
    pergunta32,
    pergunta33,
    pergunta34,
    pergunta35,
    pergunta36,
    pergunta37,
    pergunta38,
    pergunta39,
    pergunta40,
    pergunta41,
    toggleIsFinished,
    isFinished,
  } = useSurveyContext()

  const [setor, setSetor] = useState('')

  async function handleChangeNPS() {
    event?.preventDefault()
    try {
      await api
        .post('/survey', {
          setor,
          pergunta1,
          pergunta2,
          pergunta3,
          pergunta4,
          pergunta5,
          pergunta6,
          pergunta7,
          pergunta8,
          pergunta9,
          pergunta10,
          pergunta11,
          pergunta12,
          pergunta13,
          pergunta14,
          pergunta15,
          pergunta16,
          pergunta17,
          pergunta18,
          pergunta19,
          pergunta20,
          pergunta21,
          pergunta22,
          pergunta23,
          pergunta24,
          pergunta25,
          pergunta26,
          pergunta27,
          pergunta28,
          pergunta29,
          pergunta30,
          pergunta31,
          pergunta32,
          pergunta33,
          pergunta34,
          pergunta35,
          pergunta36,
          pergunta37,
          pergunta38,
          pergunta39,
          pergunta40,
          pergunta41,
        })
        .then(() => {
          setOpenModal(true)
          toggleIsFinished()
        })
    } catch (error) {
      console.error(error)
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const formComponents = [
    <CompFuncionarios />,
    <Lideranca />,
    <Equipe />,
    <Comunicacao />,
    <Motivacao />,
    <Cultura />,
    <FuturoEstInovacao />,
    <Valores />,
  ]

  const { currentStep, currenComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents)

  return (
    <>
      <Header>
        <h1>Pesquisa de satisfação Cinbal</h1>
      </Header>
      <HomeContainer>
        <Steps currentStep={currentStep} />
        <Form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <SectorInput
            required
            type="text"
            placeholder="Setor"
            name="setor"
            value={setor}
            onChange={(event) => setSetor(event.target.value)}
          />
          <Modal openModal={openModal} handleClose={() => setOpenModal(false)} />

          {isFinished ? '' : <CurrentComponent>{currenComponent}</CurrentComponent>}

          {isFinished ? (
            ''
          ) : (
            <ActionButtons className="actions">
              {!isFirstStep && (
                <ActionButton type="button" onClick={() => changeStep(currentStep - 1)}>
                  Voltar
                </ActionButton>
              )}
              {isLastStep ? (
                <ActionButton onClick={() => handleChangeNPS()} type="submit" className="enviar">
                  Enviar resposta
                </ActionButton>
              ) : (
                <ActionButton type="submit">Avançar</ActionButton>
              )}
            </ActionButtons>
          )}
        </Form>
      </HomeContainer>
    </>
  )
}
