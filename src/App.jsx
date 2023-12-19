import { Survey } from './pages/Survey'
import { SurveyProvider } from './pages/Survey/contexts/SurveyContext'
import GlobalStyles from './styles/GlobalStyles'

export function App() {
  return (
    <div className="App">
      <SurveyProvider>
        <Survey />
      </SurveyProvider>
      <GlobalStyles />
    </div>
  )
}

export default App
