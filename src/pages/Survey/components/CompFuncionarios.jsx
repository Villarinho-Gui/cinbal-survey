import React from 'react'
import { InputList, QuestionInput, QuestionContainer, StyledLabel } from '../styles'
import { useSurveyContext } from '../contexts/SurveyContext'

export const CompFuncionarios = () => {
  const {
    setPergunta1,
    pergunta1,
    pergunta2,
    setPergunta2,
    pergunta3,
    setPergunta3,
    pergunta4,
    setPergunta4,
    pergunta5,
    setPergunta5,
  } = useSurveyContext()

  return (
    <>
      <QuestionContainer className="Pergunta1">
        <div>
          <legend>Eu recomendaria minha empresa como um excelente lugar para se trabalhar;</legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta1"
              value="Discordo"
              id="q1"
              checked={pergunta1 === 'Discordo'}
              onChange={(event) => setPergunta1(event.target.value)}
            />
            <StyledLabel htmlFor="q1">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta1"
              value="Nem concordo nem discordo"
              id="q2"
              checked={pergunta1 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta1(event.target.value)}
            />
            <StyledLabel htmlFor="q2">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta1"
              value="Concordo"
              id="q3"
              checked={pergunta1 === 'Concordo'}
              onChange={(event) => setPergunta1(event.target.value)}
            />
            <StyledLabel htmlFor="q3">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta2">
        <div>
          <legend>Em geral, estou satisfeito com meu trabalho na minha empresa;</legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta2"
              value="Discordo"
              id="q4"
              checked={pergunta2 === 'Discordo'}
              onChange={(event) => setPergunta2(event.target.value)}
            />
            <StyledLabel htmlFor="q4">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta2"
              value="Nem concordo nem discordo"
              id="q5"
              checked={pergunta2 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta2(event.target.value)}
            />
            <StyledLabel htmlFor="q5">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta2"
              value="Concordo"
              id="q6"
              checked={pergunta2 === 'Concordo'}
              onChange={(event) => setPergunta2(event.target.value)}
            />
            <StyledLabel htmlFor="q6">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta3">
        <div>
          <legend>Tenho paixão por contribuir para o sucesso da minha empresa;</legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta3"
              value="Discordo"
              id="q7"
              checked={pergunta3 === 'Discordo'}
              onChange={(event) => setPergunta3(event.target.value)}
            />
            <StyledLabel htmlFor="q7">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta3"
              value="Nem concordo nem discordo"
              id="q8"
              checked={pergunta3 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta3(event.target.value)}
            />
            <StyledLabel htmlFor="q8">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta3"
              value="Concordo"
              id="q9"
              checked={pergunta3 === 'Concordo'}
              onChange={(event) => setPergunta3(event.target.value)}
            />
            <StyledLabel htmlFor="q9">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta4">
        <div>
          <legend>Sinto que minha empresa se importa com o meu bem-estar;</legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta4"
              value="Discordo"
              id="q10"
              checked={pergunta4 === 'Discordo'}
              onChange={(event) => setPergunta4(event.target.value)}
            />
            <StyledLabel htmlFor="q10">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta4"
              value="Nem concordo nem discordo"
              id="q11"
              checked={pergunta4 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta4(event.target.value)}
            />
            <StyledLabel htmlFor="q11">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta4"
              value="Concordo"
              id="q12"
              checked={pergunta4 === 'Concordo'}
              onChange={(event) => setPergunta4(event.target.value)}
            />
            <StyledLabel htmlFor="q12">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta5">
        <div>
          <legend>
            Com relação ao meu trabalho, considero que sou valorizado pela empresa, e meu salário é condizente com meus
            esforços e conhecimentos.{' '}
          </legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta5"
              value="Discordo"
              id="q13"
              checked={pergunta5 === 'Discordo'}
              onChange={(event) => setPergunta5(event.target.value)}
            />
            <StyledLabel htmlFor="q13">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta5"
              value="Nem concordo nem discordo"
              id="q14"
              checked={pergunta5 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta5(event.target.value)}
            />
            <StyledLabel htmlFor="q14">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta5"
              value="Concordo"
              id="q15"
              checked={pergunta5 === 'Concordo'}
              onChange={(event) => setPergunta5(event.target.value)}
            />
            <StyledLabel htmlFor="q15">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
    </>
  )
}
