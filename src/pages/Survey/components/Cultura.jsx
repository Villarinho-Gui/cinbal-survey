import React from 'react'
import { InputList, QuestionInput, QuestionContainer, StyledLabel } from '../styles'
import { useSurveyContext } from '../contexts/SurveyContext'

export const Cultura = () => {
  const {
    pergunta26,
    pergunta27,
    pergunta28,
    pergunta29,
    pergunta30,
    pergunta31,
    setPergunta26,
    setPergunta27,
    setPergunta28,
    setPergunta29,
    setPergunta30,
    setPergunta31,
  } = useSurveyContext()

  return (
    <>
      <QuestionContainer className="Pergunta26">
        <div>
          <legend>Onde eu trabalho, tenho acesso a oportunidades de treinamento e aprendizagem;</legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta26"
              value="Discordo"
              id="q1"
              checked={pergunta26 === 'Discordo'}
              onChange={(event) => setPergunta26(event.target.value)}
            />
            <StyledLabel htmlFor="q1">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta26"
              value="Nem concordo nem discordo"
              id="q2"
              checked={pergunta26 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta26(event.target.value)}
            />
            <StyledLabel htmlFor="q2">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta26"
              value="Concordo"
              id="q3"
              checked={pergunta26 === 'Concordo'}
              onChange={(event) => setPergunta26(event.target.value)}
            />
            <StyledLabel htmlFor="q3">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta27">
        <div>
          <legend>Onde eu trabalho, eu vi mudanças positivas ocorrendo como resultado do meu feedback;</legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta27"
              value="Discordo"
              id="q4"
              checked={pergunta27 === 'Discordo'}
              onChange={(event) => setPergunta27(event.target.value)}
            />
            <StyledLabel htmlFor="q4">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta27"
              value="Nem concordo nem discordo"
              id="q5"
              checked={pergunta27 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta27(event.target.value)}
            />
            <StyledLabel htmlFor="q5">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta27"
              value="Concordo"
              id="q6"
              checked={pergunta27 === 'Concordo'}
              onChange={(event) => setPergunta27(event.target.value)}
            />
            <StyledLabel htmlFor="q6">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta28">
        <div>
          <legend>Onde eu trabalho, estamos comprometidos com a saúde e a segurança.</legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta28"
              value="Discordo"
              id="q7"
              checked={pergunta28 === 'Discordo'}
              onChange={(event) => setPergunta28(event.target.value)}
            />
            <StyledLabel htmlFor="q7">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta28"
              value="Nem concordo nem discordo"
              id="q8"
              checked={pergunta28 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta28(event.target.value)}
            />
            <StyledLabel htmlFor="q8">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta28"
              value="Concordo"
              id="q9"
              checked={pergunta28 === 'Concordo'}
              onChange={(event) => setPergunta28(event.target.value)}
            />
            <StyledLabel htmlFor="q9">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta29">
        <div>
          <legend>
            Minha empresa age de forma ambientalmente responsável (por exemplo, temos coleta seletiva, ações ambientais)
          </legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta29"
              value="Discordo"
              id="q10"
              checked={pergunta29 === 'Discordo'}
              onChange={(event) => setPergunta29(event.target.value)}
            />
            <StyledLabel htmlFor="q10">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta29"
              value="Nem concordo nem discordo"
              id="q11"
              checked={pergunta29 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta29(event.target.value)}
            />
            <StyledLabel htmlFor="q11">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta29"
              value="Concordo"
              id="q12"
              checked={pergunta29 === 'Concordo'}
              onChange={(event) => setPergunta29(event.target.value)}
            />
            <StyledLabel htmlFor="q12">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta30">
        <div>
          <legend>
            Onde eu trabalho,aplicamos constantemente as ferramentas de ser a Primeira Escolha para incentivar a
            melhoria contínua e qualidade;
          </legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta30"
              value="Discordo"
              id="q13"
              checked={pergunta30 === 'Discordo'}
              onChange={(event) => setPergunta30(event.target.value)}
            />
            <StyledLabel htmlFor="q13">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta30"
              value="Nem concordo nem discordo"
              id="q14"
              checked={pergunta30 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta30(event.target.value)}
            />
            <StyledLabel htmlFor="q14">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta30"
              value="Concordo"
              id="q15"
              checked={pergunta30 === 'Concordo'}
              onChange={(event) => setPergunta30(event.target.value)}
            />
            <StyledLabel htmlFor="q15">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta31">
        <div>
          <legend>Onde eu trabalho, encontramos soluções rápidas e flexíveis.</legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta31"
              value="Discordo"
              id="q16"
              checked={pergunta31 === 'Discordo'}
              onChange={(event) => setPergunta31(event.target.value)}
            />
            <StyledLabel htmlFor="q16">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta31"
              value="Nem concordo nem discordo"
              id="q17"
              checked={pergunta31 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta31(event.target.value)}
            />
            <StyledLabel htmlFor="q17">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta31"
              value="Concordo"
              id="q18"
              checked={pergunta31 === 'Concordo'}
              onChange={(event) => setPergunta31(event.target.value)}
            />
            <StyledLabel htmlFor="q18">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
    </>
  )
}
