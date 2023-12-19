import React from 'react'
import { InputList, QuestionInput, QuestionContainer, StyledLabel } from '../styles'
import { useSurveyContext } from '../contexts/SurveyContext'

export const Valores = () => {
  const {
    pergunta37,
    pergunta38,
    pergunta39,
    pergunta40,
    pergunta41,
    setPergunta37,
    setPergunta38,
    setPergunta39,
    setPergunta40,
    setPergunta41,
  } = useSurveyContext()

  return (
    <>
      <QuestionContainer className="Pergunta37">
        <div>
          <legend>
            Minha empresa promove a diversidade e um ambiente inclusivo onde os funcionários se sentem aceitos);
          </legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta37"
              value="Discordo"
              id="q1"
              checked={pergunta37 === 'Discordo'}
              onChange={(event) => setPergunta37(event.target.value)}
            />
            <StyledLabel htmlFor="q1">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta37"
              value="Nem concordo nem discordo"
              id="q2"
              checked={pergunta37 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta37(event.target.value)}
            />
            <StyledLabel htmlFor="q2">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta37"
              value="Concordo"
              id="q3"
              checked={pergunta37 === 'Concordo'}
              onChange={(event) => setPergunta37(event.target.value)}
            />
            <StyledLabel htmlFor="q3">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta38">
        <div>
          <legend>Onde eu trabalho, tratamos uns aos outros com respeito;</legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta38"
              value="Discordo"
              id="q4"
              checked={pergunta38 === 'Discordo'}
              onChange={(event) => setPergunta38(event.target.value)}
            />
            <StyledLabel htmlFor="q4">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta38"
              value="Nem concordo nem discordo"
              id="q5"
              checked={pergunta38 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta38(event.target.value)}
            />
            <StyledLabel htmlFor="q5">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta38"
              value="Concordo"
              id="q6"
              checked={pergunta38 === 'Concordo'}
              onChange={(event) => setPergunta38(event.target.value)}
            />
            <StyledLabel htmlFor="q6">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta39">
        <div>
          <legend>Onde eu trabalho, somos responsáveis por nossas ações e decisões;</legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta39"
              value="Discordo"
              id="q7"
              checked={pergunta39 === 'Discordo'}
              onChange={(event) => setPergunta39(event.target.value)}
            />
            <StyledLabel htmlFor="q7">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta39"
              value="Nem concordo nem discordo"
              id="q8"
              checked={pergunta39 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta39(event.target.value)}
            />
            <StyledLabel htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta39"
              value="Concordo"
              id="q9"
              checked={pergunta39 === 'Concordo'}
              onChange={(event) => setPergunta39(event.target.value)}
            />
            <StyledLabel htmlFor="q9">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta40">
        <div>
          <legend>Minha empresa tem um compromisso firme com a ética nos negócios em todas as nossas operações.</legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta40"
              value="Discordo"
              id="q10"
              checked={pergunta40 === 'Discordo'}
              onChange={(event) => setPergunta40(event.target.value)}
            />
            <StyledLabel htmlFor="q10">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta40"
              value="Nem concordo nem discordo"
              id="q11"
              checked={pergunta40 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta40(event.target.value)}
            />
            <StyledLabel htmlFor="q11">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta40"
              value="Concordo"
              id="q12"
              checked={pergunta40 === 'Concordo'}
              onChange={(event) => setPergunta40(event.target.value)}
            />
            <StyledLabel htmlFor="q12">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta41">
        <div>
          <legend>
            Na nossa cultura organizacional, incentivamos a iniciativa e valorizamos a inovação para impulsionar o
            crescimento
          </legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta41"
              value="Discordo"
              id="q13"
              checked={pergunta41 === 'Discordo'}
              onChange={(event) => setPergunta41(event.target.value)}
            />
            <StyledLabel htmlFor="q13">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta41"
              value="Nem concordo nem discordo"
              id="q14"
              checked={pergunta41 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta41(event.target.value)}
            />
            <StyledLabel htmlFor="q14">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta41"
              value="Concordo"
              id="q15"
              checked={pergunta41 === 'Concordo'}
              onChange={(event) => setPergunta41(event.target.value)}
            />
            <StyledLabel htmlFor="q15">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
    </>
  )
}
