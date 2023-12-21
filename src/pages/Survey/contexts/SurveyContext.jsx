import { useCallback, useContext, useState, createContext } from 'react'

const SurveyContext = createContext({})

export const useSurveyContext = () => {
  return useContext(SurveyContext)
}

export const SurveyProvider = ({ children }) => {
  const [pergunta1, setPergunta1] = useState('Não concordo nem descordo')
  const [pergunta2, setPergunta2] = useState('Não concordo nem descordo')
  const [pergunta3, setPergunta3] = useState('Não concordo nem descordo')
  const [pergunta4, setPergunta4] = useState('Não concordo nem descordo')
  const [pergunta5, setPergunta5] = useState('Não concordo nem descordo')
  const [pergunta6, setPergunta6] = useState('Não concordo nem descordo')
  const [pergunta7, setPergunta7] = useState('Não concordo nem descordo')
  const [pergunta8, setPergunta8] = useState('Não concordo nem descordo')
  const [pergunta9, setPergunta9] = useState('Não concordo nem descordo')
  const [pergunta10, setPergunta10] = useState('Não concordo nem descordo')
  const [pergunta11, setPergunta11] = useState('Não concordo nem descordo')
  const [pergunta12, setPergunta12] = useState('Não concordo nem descordo')
  const [pergunta13, setPergunta13] = useState('Não concordo nem descordo')
  const [pergunta14, setPergunta14] = useState('Não concordo nem descordo')
  const [pergunta15, setPergunta15] = useState('Não concordo nem descordo')
  const [pergunta16, setPergunta16] = useState('Não concordo nem descordo')
  const [pergunta17, setPergunta17] = useState('Não concordo nem descordo')
  const [pergunta18, setPergunta18] = useState('Não concordo nem descordo')
  const [pergunta19, setPergunta19] = useState('Não concordo nem descordo')
  const [pergunta20, setPergunta20] = useState('Não concordo nem descordo')
  const [pergunta21, setPergunta21] = useState('Não concordo nem descordo')
  const [pergunta22, setPergunta22] = useState('Não concordo nem descordo')
  const [pergunta23, setPergunta23] = useState('Não concordo nem descordo')
  const [pergunta24, setPergunta24] = useState('Não concordo nem descordo')
  const [pergunta25, setPergunta25] = useState('Não concordo nem descordo')
  const [pergunta26, setPergunta26] = useState('Não concordo nem descordo')
  const [pergunta27, setPergunta27] = useState('Não concordo nem descordo')
  const [pergunta28, setPergunta28] = useState('Não concordo nem descordo')
  const [pergunta29, setPergunta29] = useState('Não concordo nem descordo')
  const [pergunta30, setPergunta30] = useState('Não concordo nem descordo')
  const [pergunta31, setPergunta31] = useState('Não concordo nem descordo')
  const [pergunta32, setPergunta32] = useState('Não concordo nem descordo')
  const [pergunta33, setPergunta33] = useState('Não concordo nem descordo')
  const [pergunta34, setPergunta34] = useState('Não concordo nem descordo')
  const [pergunta35, setPergunta35] = useState('Não concordo nem descordo')
  const [pergunta36, setPergunta36] = useState('Não concordo nem descordo')
  const [pergunta37, setPergunta37] = useState('Não concordo nem descordo')
  const [pergunta38, setPergunta38] = useState('Não concordo nem descordo')
  const [pergunta39, setPergunta39] = useState('Não concordo nem descordo')
  const [pergunta40, setPergunta40] = useState('Não concordo nem descordo')
  const [pergunta41, setPergunta41] = useState('Não concordo nem descordo')
  const [isFinished, setIsFinished] = useState(false)

  const toggleIsFinished = useCallback(() => {
    setIsFinished((oldIsFinished) => !oldIsFinished)
  }, [])

  return (
    <SurveyContext.Provider
      value={{
        isFinished,
        toggleIsFinished,
        pergunta1,
        pergunta2,
        pergunta3,
        pergunta4,
        pergunta5,
        pergunta6,
        pergunta7,
        pergunta8,
        pergunta9,
        pergunta10,
        pergunta11,
        pergunta12,
        pergunta13,
        pergunta14,
        pergunta15,
        pergunta16,
        pergunta17,
        pergunta18,
        pergunta19,
        pergunta20,
        pergunta21,
        pergunta22,
        pergunta23,
        pergunta24,
        pergunta25,
        pergunta26,
        pergunta27,
        pergunta28,
        pergunta29,
        pergunta30,
        pergunta31,
        pergunta32,
        pergunta33,
        pergunta34,
        pergunta35,
        pergunta36,
        pergunta37,
        pergunta38,
        pergunta39,
        pergunta40,
        pergunta41,
        setPergunta1,
        setPergunta2,
        setPergunta3,
        setPergunta4,
        setPergunta5,
        setPergunta6,
        setPergunta7,
        setPergunta8,
        setPergunta9,
        setPergunta10,
        setPergunta11,
        setPergunta12,
        setPergunta13,
        setPergunta14,
        setPergunta15,
        setPergunta16,
        setPergunta17,
        setPergunta18,
        setPergunta19,
        setPergunta20,
        setPergunta21,
        setPergunta22,
        setPergunta23,
        setPergunta24,
        setPergunta25,
        setPergunta26,
        setPergunta27,
        setPergunta28,
        setPergunta29,
        setPergunta30,
        setPergunta31,
        setPergunta32,
        setPergunta33,
        setPergunta34,
        setPergunta35,
        setPergunta36,
        setPergunta37,
        setPergunta38,
        setPergunta39,
        setPergunta40,
        setPergunta41,
      }}
    >
      {children}
    </SurveyContext.Provider>
  )
}
