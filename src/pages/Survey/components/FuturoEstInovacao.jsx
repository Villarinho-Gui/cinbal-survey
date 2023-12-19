import React from 'react'
import { InputList, QuestionInput, QuestionContainer, StyledLabel } from '../styles'
import { useSurveyContext } from '../contexts/SurveyContext'

export const FuturoEstInovacao = () => {
  const {
    pergunta32,
    pergunta33,
    pergunta34,
    pergunta35,
    pergunta36,
    setPergunta32,
    setPergunta33,
    setPergunta34,
    setPergunta35,
    setPergunta36,
  } = useSurveyContext()

  return (
    <>
      <QuestionContainer className="Pergunta32">
        <div>
          <legend>Estou familiarizado com o Código de Conduta da Cinbal Grupo Incoflandres;</legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta32"
              value="Discordo"
              id="q1"
              checked={pergunta32 === 'Discordo'}
              onChange={(event) => setPergunta32(event.target.value)}
            />
            <StyledLabel htmlFor="q1">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta32"
              value="Nem concordo nem discordo"
              id="q2"
              checked={pergunta32 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta32(event.target.value)}
            />
            <StyledLabel htmlFor="q2">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta32"
              value="Concordo"
              id="q3"
              checked={pergunta32 === 'Concordo'}
              onChange={(event) => setPergunta32(event.target.value)}
            />
            <StyledLabel htmlFor="q3">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta33">
        <div>
          <legend>
            Onde eu trabalho, estamos comprometidos com as práticas comerciais de conformidade (com base no Código de
            Conduta da CINBAL);
          </legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta33"
              value="Discordo"
              id="q4"
              checked={pergunta33 === 'Discordo'}
              onChange={(event) => setPergunta33(event.target.value)}
            />
            <StyledLabel htmlFor="q4">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta33"
              value="Nem concordo nem discordo"
              id="q5"
              checked={pergunta33 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta33(event.target.value)}
            />
            <StyledLabel htmlFor="q5">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta33"
              value="Concordo"
              id="q6"
              checked={pergunta33 === 'Concordo'}
              onChange={(event) => setPergunta33(event.target.value)}
            />
            <StyledLabel htmlFor="q6">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta34">
        <div>
          <legend>Eu apoio totalmente a estratégia e a visão da minha empresa.</legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta34"
              value="Discordo"
              id="q7"
              checked={pergunta34 === 'Discordo'}
              onChange={(event) => setPergunta34(event.target.value)}
            />
            <StyledLabel htmlFor="q7">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta34"
              value="Nem concordo nem discordo"
              id="q8"
              checked={pergunta34 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta34(event.target.value)}
            />
            <StyledLabel htmlFor="q8">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta34"
              value="Concordo"
              id="q9"
              checked={pergunta34 === 'Concordo'}
              onChange={(event) => setPergunta34(event.target.value)}
            />
            <StyledLabel htmlFor="q9">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta35">
        <div>
          <legend>Onde eu trabalho, aproveitamos as novas tecnologias e a digitalização;</legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta35"
              value="Discordo"
              id="q10"
              checked={pergunta35 === 'Discordo'}
              onChange={(event) => setPergunta35(event.target.value)}
            />
            <StyledLabel htmlFor="q10">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta35"
              value="Nem concordo nem discordo"
              id="q11"
              checked={pergunta35 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta35(event.target.value)}
            />
            <StyledLabel htmlFor="q11">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta35"
              value="Concordo"
              id="q12"
              checked={pergunta35 === 'Concordo'}
              onChange={(event) => setPergunta35(event.target.value)}
            />
            <StyledLabel htmlFor="q12">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta36">
        <div>
          <legend>Tenho o suporte necessário para aproveitar a digitalização;</legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta36"
              value="Discordo"
              id="q13"
              checked={pergunta36 === 'Discordo'}
              onChange={(event) => setPergunta36(event.target.value)}
            />
            <StyledLabel htmlFor="q13">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta36"
              value="Nem concordo nem discordo"
              id="q14"
              checked={pergunta36 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta36(event.target.value)}
            />
            <StyledLabel htmlFor="q14">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta36"
              value="Concordo"
              id="q15"
              checked={pergunta36 === 'Concordo'}
              onChange={(event) => setPergunta36(event.target.value)}
            />
            <StyledLabel htmlFor="q15">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
    </>
  )
}
