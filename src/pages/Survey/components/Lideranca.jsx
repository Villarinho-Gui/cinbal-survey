import React from 'react'
import { InputList, QuestionInput, QuestionContainer, StyledLabel } from '../styles'
import { useSurveyContext } from '../contexts/SurveyContext'

export const Lideranca = () => {
  const {
    pergunta6,
    pergunta7,
    pergunta8,
    pergunta9,
    pergunta10,
    pergunta11,
    setPergunta6,
    setPergunta7,
    setPergunta8,
    setPergunta9,
    setPergunta10,
    setPergunta11,
  } = useSurveyContext()

  return (
    <>
      <QuestionContainer className="Pergunta6">
        <div>
          <legend>Confio no meu gestor direto para honrar os compromissos feitos;</legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta6"
              value="Discordo"
              id="q1"
              checked={pergunta6 === 'Discordo'}
              onChange={(event) => setPergunta6(event.target.value)}
            />
            <StyledLabel htmlFor="q1">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta6"
              value="Nem concordo nem discordo"
              id="q2"
              checked={pergunta6 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta6(event.target.value)}
            />
            <StyledLabel htmlFor="q2">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta6"
              value="Concordo"
              id="q3"
              checked={pergunta6 === 'Concordo'}
              onChange={(event) => setPergunta6(event.target.value)}
            />
            <StyledLabel htmlFor="q3">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta7">
        <div>
          <legend>
            Meu gestor direto me ajuda a entender minha contribuição individual para o sucesso da nossa empresa;
          </legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta7"
              value="Discordo"
              id="q4"
              checked={pergunta7 === 'Discordo'}
              onChange={(event) => setPergunta7(event.target.value)}
            />
            <StyledLabel htmlFor="q4">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta7"
              value="Nem concordo nem discordo"
              id="q5"
              checked={pergunta7 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta7(event.target.value)}
            />
            <StyledLabel htmlFor="q5">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta7"
              value="Concordo"
              id="q6"
              checked={pergunta7 === 'Concordo'}
              onChange={(event) => setPergunta7(event.target.value)}
            />
            <StyledLabel htmlFor="q6">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta8">
        <div>
          <legend>
            A forma como os assuntos importantes são debatidos em equipe e como o gestor recebe sugestões é eficaz
          </legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta8"
              value="Discordo"
              id="q7"
              checked={pergunta8 === 'Discordo'}
              onChange={(event) => setPergunta8(event.target.value)}
            />
            <StyledLabel htmlFor="q7">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta8"
              value="Nem concordo nem discordo"
              id="q8"
              checked={pergunta8 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta8(event.target.value)}
            />
            <StyledLabel htmlFor="q8">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta8"
              value="Concordo"
              id="q9"
              checked={pergunta8 === 'Concordo'}
              onChange={(event) => setPergunta8(event.target.value)}
            />
            <StyledLabel htmlFor="q9">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta9">
        <div>
          <legend>
            Considero a estrutura hierárquica à qual estou vinculado para tratar e resolver problemas ou necessidades de
            melhorias como adequada.
          </legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta9"
              value="Discordo"
              id="q10"
              checked={pergunta9 === 'Discordo'}
              onChange={(event) => setPergunta9(event.target.value)}
            />
            <StyledLabel htmlFor="q10">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta9"
              value="Nem concordo nem discordo"
              id="q11"
              checked={pergunta9 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta9(event.target.value)}
            />
            <StyledLabel htmlFor="q11">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta9"
              value="Concordo"
              id="q12"
              checked={pergunta9 === 'Concordo'}
              onChange={(event) => setPergunta9(event.target.value)}
            />
            <StyledLabel htmlFor="q12">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta10">
        <div>
          <legend>
            A forma como recebo do gestor os esclarecimentos e orientações necessários para realizar minhas tarefas é
            satisfatória.
          </legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta10"
              value="Discordo"
              id="q13"
              checked={pergunta10 === 'Discordo'}
              onChange={(event) => setPergunta10(event.target.value)}
            />
            <StyledLabel htmlFor="q13">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta10"
              value="Nem concordo nem discordo"
              id="q14"
              checked={pergunta10 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta10(event.target.value)}
            />
            <StyledLabel htmlFor="q14">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta10"
              value="Concordo"
              id="q15"
              checked={pergunta10 === 'Concordo'}
              onChange={(event) => setPergunta10(event.target.value)}
            />
            <StyledLabel htmlFor="q15">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
      <QuestionContainer className="Pergunta11">
        <div>
          <legend>Meu gestor direto me apoia para que eu me adapte às mudanças;</legend>
          <InputList>
            <QuestionInput
              type="radio"
              name="pergunta11"
              value="Discordo"
              id="q16"
              checked={pergunta11 === 'Discordo'}
              onChange={(event) => setPergunta11(event.target.value)}
            />
            <StyledLabel htmlFor="q16">Discordo 😒</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta11"
              value="Nem concordo nem discordo"
              id="q17"
              checked={pergunta11 === 'Nem concordo nem discordo'}
              onChange={(event) => setPergunta11(event.target.value)}
            />
            <StyledLabel htmlFor="q17">Nem concordo nem discordo 🙂</StyledLabel>

            <QuestionInput
              type="radio"
              name="pergunta11"
              value="Concordo"
              id="q18"
              checked={pergunta11 === 'Concordo'}
              onChange={(event) => setPergunta11(event.target.value)}
            />
            <StyledLabel htmlFor="q18">Concordo 😃</StyledLabel>
          </InputList>
        </div>
      </QuestionContainer>
    </>
  )
}
