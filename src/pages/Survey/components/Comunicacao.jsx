import React from 'react'
import { InputList, QuestionInput, QuestionContainer, StyledLabel } from '../styles'
import { useSurveyContext } from '../contexts/SurveyContext'

export const Comunicacao = () => {
  const {
    pergunta16,
    pergunta17,
    pergunta18,
    pergunta19,
    pergunta20,
    setPergunta16,
    setPergunta17,
    setPergunta18,
    setPergunta19,
    setPergunta20,
  } = useSurveyContext()

  return (
    <>
      <QuestionContainer className="Pergunta16">
        <div>
          <legend>
            A empresa lida de forma eficaz com as demandas e sugestões dos colaboradores através dos canais de
            comunicação
          </legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta16"
              value="Discordo"
              id="q1"
              checked={pergunta16 === 'Discordo'}
              onChange={(event) => setPergunta16(event.target.value)}
            />
            <StyledLabel htmlFor="q1">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="p66"
              value="Nem concordo nem discordo"
              id="q2"
              checked={pergunta16 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta16(event.target.value)}
            />
            <StyledLabel htmlFor="q2">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta16"
              value="Concordo"
              id="q3"
              checked={pergunta16 === 'Concordo'}
              onChange={(event) => setPergunta16(event.target.value)}
            />
            <StyledLabel htmlFor="q3">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta17">
        <div>
          <legend>
            Ao buscar informações com outros setores em situações inesperadas, o retorno é satisfatório para garantir a
            continuidade do trabalho.
          </legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta17"
              value="Discordo"
              id="q4"
              checked={pergunta17 === 'Discordo'}
              onChange={(event) => setPergunta17(event.target.value)}
            />
            <StyledLabel htmlFor="q4">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta17"
              value="Nem concordo nem discordo"
              id="q5"
              checked={pergunta17 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta17(event.target.value)}
            />
            <StyledLabel htmlFor="q5">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta17"
              value="Concordo"
              id="q6"
              checked={pergunta17 === 'Concordo'}
              onChange={(event) => setPergunta17(event.target.value)}
            />
            <StyledLabel htmlFor="q6">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta18">
        <div>
          <legend>
            Considero a qualidade e a pontualidade da comunicação interna na empresa como aspectos satisfatórios.
          </legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta18"
              value="Discordo"
              id="q7"
              checked={pergunta18 === 'Discordo'}
              onChange={(event) => setPergunta18(event.target.value)}
            />
            <StyledLabel htmlFor="q7">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta18"
              value="Nem concordo nem discordo"
              id="q8"
              checked={pergunta18 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta18(event.target.value)}
            />
            <StyledLabel htmlFor="q8">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta18"
              value="Concordo"
              id="q9"
              checked={pergunta18 === 'Concordo'}
              onChange={(event) => setPergunta18(event.target.value)}
            />
            <StyledLabel htmlFor="q9">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta19">
        <div>
          <legend>Onde eu trabalho, existe comunicação aberta e honesta nos dois sentidos;</legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta19"
              value="Discordo"
              id="q10"
              checked={pergunta19 === 'Discordo'}
              onChange={(event) => setPergunta19(event.target.value)}
            />
            <StyledLabel htmlFor="q10">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta19"
              value="Nem concordo nem discordo"
              id="q11"
              checked={pergunta19 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta19(event.target.value)}
            />
            <StyledLabel htmlFor="q11">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta19"
              value="Concordo"
              id="q12"
              checked={pergunta19 === 'Concordo'}
              onChange={(event) => setPergunta19(event.target.value)}
            />
            <StyledLabel htmlFor="q12">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta20">
        <div>
          <legend>
            Tenho orgulho da contribuição da minha empresa para nossas comunidades (ações sociais, incentive à esporte e
            etc);
          </legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta20"
              value="Discordo"
              id="q13"
              checked={pergunta20 === 'Discordo'}
              onChange={(event) => setPergunta20(event.target.value)}
            />
            <StyledLabel htmlFor="q13">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta20"
              value="Nem concordo nem discordo"
              id="q14"
              checked={pergunta20 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta20(event.target.value)}
            />
            <StyledLabel htmlFor="q14">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta20"
              value="Concordo"
              id="q15"
              checked={pergunta20 === 'Concordo'}
              onChange={(event) => setPergunta20(event.target.value)}
            />
            <StyledLabel htmlFor="q15">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
    </>
  )
}
