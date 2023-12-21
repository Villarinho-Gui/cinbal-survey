import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`

export const HomeContainer = styled.div`
  display: flex;
  overflow: auto;
  gap: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: start;
`

export const Form = styled.form`
  width: 700px;
  display: flex;
  flex-direction: column;
`

export const SectorInput = styled.input`
  height: 40px;
  border: none;
  border-radius: 8px;
  padding: 4px;
  margin-bottom: 5px;

  &:focus {
    outline: none;
  }
`

export const CurrentComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 600px;
  overflow: auto;
  gap: 10px;
  border-radius: 10px;
`

export const QuestionContainer = styled.fieldset`
  display: flex;
  height: max-content;
  width: 600px;
  padding: 20px;
  gap: 5px;
  flex-direction: column;
  background-color: #f5f5f5;
  border-radius: 10px;
  border: none;
`

export const InputList = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

export const QuestionInput = styled.input`
  display: none;
  &:checked {
  }
`

export const StyledLabel = styled.label`
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease; /* Transição suave */

  &:hover {
    background-color: #3a89e6;
    color: white;
  }

  ${QuestionInput}:checked + & {
    background-color: #3a89e6;
    color: white;
  }
`

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-top: 10px;
`

export const ActionButton = styled.button`
  height: 45px;
  width: 200px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &.enviar {
    background-color: #3a89e6;
    color: #fff;
  }
`
