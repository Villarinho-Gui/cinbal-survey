import React from 'react'
import { InputList, QuestionInput, QuestionContainer, StyledLabel } from '../styles'
import { useSurveyContext } from '../contexts/SurveyContext'

export const Motivacao = () => {
  const {
    pergunta21,
    pergunta22,
    pergunta23,
    pergunta24,
    pergunta25,
    setPergunta21,
    setPergunta22,
    setPergunta23,
    setPergunta24,
    setPergunta25,
  } = useSurveyContext()

  return (
    <>
      <QuestionContainer className="Pergunta21">
        <div>
          <legend>
            O equilíbrio pessoal e profissional é uma preocupação da empresa, e considero as ações de Qualidade de Vida
            (Palestras, Apoio às Atividades Esportivas etc.) como eficazes e benéficas.
          </legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta21"
              value="Discordo"
              id="q1"
              checked={pergunta21 === 'Discordo'}
              onChange={(event) => setPergunta21(event.target.value)}
            />
            <StyledLabel htmlFor="q1">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta21"
              value="Nem concordo nem discordo"
              id="q2"
              checked={pergunta21 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta21(event.target.value)}
            />
            <StyledLabel htmlFor="q2">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta21"
              value="Concordo"
              id="q3"
              checked={pergunta21 === 'Concordo'}
              onChange={(event) => setPergunta21(event.target.value)}
            />
            <StyledLabel htmlFor="q3">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta22">
        <div>
          <legend>
            Considero os recursos materiais e infraestrutura oferecidos pelo Grupo Incoflandres necessários e
            suficientes para a realização das minhas atividades, avaliando-os como adequados.
          </legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta22"
              value="Discordo"
              id="q4"
              checked={pergunta22 === 'Discordo'}
              onChange={(event) => setPergunta22(event.target.value)}
            />
            <StyledLabel htmlFor="q4">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta22"
              value="Nem concordo nem discordo"
              id="q5"
              checked={pergunta22 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta22(event.target.value)}
            />
            <StyledLabel htmlFor="q5">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta22"
              value="Concordo"
              id="q6"
              checked={pergunta22 === 'Concordo'}
              onChange={(event) => setPergunta22(event.target.value)}
            />
            <StyledLabel htmlFor="q6">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta23">
        <div>
          <legend>
            Consigo entender como as minhas atividades impactam no resultado da empresa, e considero que essa relação
            entre execução das atividades e metas estabelecidas é clara e relevante.
          </legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta23"
              value="Discordo"
              id="q7"
              checked={pergunta23 === 'Discordo'}
              onChange={(event) => setPergunta23(event.target.value)}
            />
            <StyledLabel htmlFor="q7">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta23"
              value="Nem concordo nem discordo"
              id="q8"
              checked={pergunta23 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta23(event.target.value)}
            />
            <StyledLabel htmlFor="q8">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta23"
              value="Concordo"
              id="q9"
              checked={pergunta23 === 'Concordo'}
              onChange={(event) => setPergunta23(event.target.value)}
            />
            <StyledLabel htmlFor="q9">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta24">
        <div>
          <legend>
            Considero o Grupo Incoflandres uma empresa moderna e com regras flexíveis para trabalhar, avaliando
            positivamente essa característica.
          </legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta24"
              value="Discordo"
              id="q10"
              checked={pergunta24 === 'Discordo'}
              onChange={(event) => setPergunta24(event.target.value)}
            />
            <StyledLabel htmlFor="q10">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta24"
              value="Nem concordo nem discordo"
              id="q11"
              checked={pergunta24 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta24(event.target.value)}
            />
            <StyledLabel htmlFor="q11">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta24"
              value="Concordo"
              id="q12"
              checked={pergunta24 === 'Concordo'}
              onChange={(event) => setPergunta24(event.target.value)}
            />
            <StyledLabel htmlFor="q12">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta25">
        <div>
          <legend>
            A satisfação por participar dos eventos promovidos pela empresa, como Aniversariantes do mês, Treinamentos,
            Palestras etc., é alta e positiva.
          </legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta25"
              value="Discordo"
              id="q13"
              checked={pergunta25 === 'Discordo'}
              onChange={(event) => setPergunta25(event.target.value)}
            />
            <StyledLabel htmlFor="q13">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta25"
              value="Nem concordo nem discordo"
              id="q14"
              checked={pergunta25 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta25(event.target.value)}
            />
            <StyledLabel htmlFor="q14">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta25"
              value="Concordo"
              id="q15"
              checked={pergunta25 === 'Concordo'}
              onChange={(event) => setPergunta25(event.target.value)}
            />
            <StyledLabel htmlFor="q15">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
    </>
  )
}
