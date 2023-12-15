import styled from 'styled-components'

export const Layout = styled.form`
    width: 100%;
    overflow: auto;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const QuestionContainer = styled.fieldset`
    display: flex;
    height: 100px;
    width: 600px;
    padding: 20px;
    gap: 5px;
    flex-direction: column;
    background-color: #F5F5F5;
    border-radius: 10px;
    border: none;
`
export const DivContainer = styled.div`
    
`

export const InputList = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    padding: 10px;
`
// export const Item = styled.li`
//     display: flex;
//     height: 0;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
// `
export const QuestionButton = styled.input`
    cursor: pointer;
`