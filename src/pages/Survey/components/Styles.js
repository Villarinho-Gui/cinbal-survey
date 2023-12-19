import styled from 'styled-components'

export const StepsContainer = styled.div`
  display: flex;
  width: max-content;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  align-items: center;
  margin-right: 100px;
  border: 1px solid #bababa;
  border-radius: 10px;
`

export const Step = styled.div`
  text-align: center;
  width: max-content;
  min-width: 100px;
  z-index: 1;

  border-radius: 8px;
  padding: 0.5rem;
  font-size: 11px;

  &.active {
    color: #3a89e6;
    font-size: 11px;
    font-weight: bold;
  }

  &.disabled {
    display: none;
  }
  /* 
  &:not(.active) {
    display: none;
  } */
`
