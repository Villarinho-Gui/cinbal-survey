import React from 'react'
import { Step, StepsContainer } from './Styles'

export const Steps = ({ currentStep }) => {
  return (
    <StepsContainer className="steps">
      <Step className="step active">
        <p>Comprometimento dos Funcionários</p>
      </Step>
      <Step className={`step ${currentStep >= 1 ? 'active' : ''}`}>
        <p>Liderança</p>
      </Step>
      <Step className={`step ${currentStep >= 2 ? 'active' : ''}`}>
        <p>Equipe</p>
      </Step>
      <Step className={`step ${currentStep >= 3 ? 'active' : ''}`}>
        <p>Comunicação</p>
      </Step>
      <Step className={`step ${currentStep >= 4 ? 'active' : ''}`}>
        <p>Motivação</p>
      </Step>
      <Step className={`step ${currentStep >= 5 ? 'active' : ''}`}>
        <p>Cultura</p>
      </Step>
      <Step className={`step ${currentStep >= 6 ? 'active' : ''}`}>
        <p>Futuro, Estratégia e Inovação</p>
      </Step>
      <Step className={`step ${currentStep >= 7 ? 'active' : ''}`}>
        <p>Valores</p>
      </Step>
    </StepsContainer>
  )
}
