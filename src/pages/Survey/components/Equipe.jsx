import React from 'react'
import { InputList, QuestionInput, QuestionContainer, StyledLabel } from '../styles'
import { useSurveyContext } from '../contexts/SurveyContext'

export const Equipe = () => {
  const { pergunta12, pergunta13, pergunta14, pergunta15, setPergunta12, setPergunta13, setPergunta14, setPergunta15 } =
    useSurveyContext()

  return (
    <>
      <QuestionContainer className="Pergunta12">
        <div>
          <legend>Em minha equipe, nossas tarefas de trabalho são bem organizadas;</legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta12"
              value="Discordo"
              id="q1"
              checked={pergunta12 === 'Discordo'}
              onChange={(event) => setPergunta12(event.target.value)}
            />
            <StyledLabel htmlFor="q1">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta12"
              value="Nem concordo nem discordo"
              id="q2"
              checked={pergunta12 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta12(event.target.value)}
            />
            <StyledLabel htmlFor="q2">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta12"
              value="Concordo"
              id="q3"
              checked={pergunta12 === 'Concordo'}
              onChange={(event) => setPergunta12(event.target.value)}
            />
            <StyledLabel htmlFor="q3">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta13">
        <div>
          <legend>Em minha equipe, buscamos melhorar a cada dia.</legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta13"
              value="Discordo"
              id="q4"
              checked={pergunta13 === 'Discordo'}
              onChange={(event) => setPergunta13(event.target.value)}
            />
            <StyledLabel htmlFor="q4">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta13"
              value="Nem concordo nem discordo"
              id="q5"
              checked={pergunta13 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta13(event.target.value)}
            />
            <StyledLabel htmlFor="q5">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta13"
              value="Concordo"
              id="q6"
              checked={pergunta13 === 'Concordo'}
              onChange={(event) => setPergunta13(event.target.value)}
            />
            <StyledLabel htmlFor="q6">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta14">
        <div>
          <legend>
            O compartilhamento de conhecimento entre os colaboradores da empresa é efetivo e promove a colaboração.
          </legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta14"
              value="Discordo"
              id="q7"
              checked={pergunta14 === 'Discordo'}
              onChange={(event) => setPergunta14(event.target.value)}
            />
            <StyledLabel htmlFor="q7">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta14"
              value="Nem concordo nem discordo"
              id="q8"
              checked={pergunta14 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta14(event.target.value)}
            />
            <StyledLabel htmlFor="q8">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta14"
              value="Concordo"
              id="q9"
              checked={pergunta14 === 'Concordo'}
              onChange={(event) => setPergunta14(event.target.value)}
            />
            <StyledLabel htmlFor="q9">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta15">
        <div>
          <legend>
            Os membros da equipe colaboram efetivamente para alcançar objetivos comuns, mesmo em situações desafiadoras.
          </legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta15"
              value="Discordo"
              id="q10"
              checked={pergunta15 === 'Discordo'}
              onChange={(event) => setPergunta15(event.target.value)}
            />
            <StyledLabel htmlFor="q10">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta15"
              value="Nem concordo nem discordo"
              id="q11"
              checked={pergunta15 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta15(event.target.value)}
            />
            <StyledLabel htmlFor="q11">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta15"
              value="Concordo"
              id="q12"
              checked={pergunta15 === 'Concordo'}
              onChange={(event) => setPergunta15(event.target.value)}
            />
            <StyledLabel htmlFor="q12">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
    </>
  )
}
