import { useState } from "react";
import { Modal } from "../../components/Modal"
import { api } from "../../services/api";
import { Layout, InputList, QuestionContainer, QuestionButton, DivContainer } from "./styles";
export const Survey = () => {
    const [openModal, setOpenModal] = useState(false);
    const [pergunta1, setPergunta1] = useState('Nem concordo nem discordo');
    const [pergunta2, setPergunta2] = useState('Nem concordo nem discordo');
    const [pergunta3, setPergunta3] = useState('Nem concordo nem discordo');
    const [pergunta4, setPergunta4] = useState('Nem concordo nem discordo');
    const [pergunta5, setPergunta5] = useState('Nem concordo nem discordo');
    const [pergunta6, setPergunta6] = useState('Nem concordo nem discordo');
    const [pergunta7, setPergunta7] = useState('Nem concordo nem discordo');
    const [pergunta8, setPergunta8] = useState('Nem concordo nem discordo');
    const [pergunta9, setPergunta9] = useState('Nem concordo nem discordo');
    const [pergunta10, setPergunta10] = useState('Nem concordo nem discordo');
    const [pergunta11, setPergunta11] = useState('Nem concordo nem discordo');
    const [pergunta12, setPergunta12] = useState('Nem concordo nem discordo');
    const [pergunta13, setPergunta13] = useState('Nem concordo nem discordo');
    const [pergunta14, setPergunta14] = useState('Nem concordo nem discordo');
    const [pergunta15, setPergunta15] = useState('Nem concordo nem discordo');


    async function handleChangeNPS(){
        event?.preventDefault()
      try {
        await api.post('/survey', {pergunta1, pergunta2, pergunta3, pergunta4, pergunta5, pergunta6, pergunta7, pergunta8, pergunta9, pergunta10, pergunta11, pergunta12, pergunta13, pergunta14, pergunta15}).then(() => {
            setOpenModal(true)
        })
      } catch (error) {
        console.error(error)
      }
    }
  
    return (
            <Layout onSubmit={() => handleChangeNPS()}>
                <h1>Pesquisa de satisfação Cinbal</h1>
                <Modal openModal={openModal} handleClose={() => setOpenModal(false)}/>
                <QuestionContainer className="Pergunta1">
                    <DivContainer>
                    <legend>Eu recomendaria minha empresa como um excelente lugar para se trabalhar;</legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta1" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta1 === 'Discordo'}
                                onChange={(event) => setPergunta1(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta1" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta1 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta1(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta1" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta1 === 'Concordo'}
                                onChange={(event) => setPergunta1(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </DivContainer>
                </QuestionContainer>
                <QuestionContainer className="Pergunta2">
                    <div>
                        <legend>Em geral, estou satisfeito com meu trabalho na minha empresa;</legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta2" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta2 === 'Discordo'}
                                onChange={(event) => setPergunta2(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta2" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta2 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta2(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta2" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta2 === 'Concordo'}
                                onChange={(event) => setPergunta2(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta3">
                    <div>
                    <legend>Tenho paixão por contribuir para o sucesso da minha empresa;</legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta3" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta3 === 'Discordo'}
                                onChange={(event) => setPergunta3(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta3" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta3 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta3(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta3" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta3 === 'Concordo'}
                                onChange={(event) => setPergunta3(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta4">
                    <div>
                    <legend>Sinto que minha empresa se importa com o meu bem-estar;</legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta4" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta4 === 'Discordo'}
                                onChange={(event) => setPergunta4(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta4" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta4 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta4(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta4" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta4 === 'Concordo'}
                                onChange={(event) => setPergunta4(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta5">
                    <div>
                    <legend>Com relação ao meu trabalho, considero que sou valorizado pela empresa, e meu salário é condizente com meus esforços e conhecimentos. </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta5" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta5 === 'Discordo'}
                                onChange={(event) => setPergunta5(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta5" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta5 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta5(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta5" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta5 === 'Concordo'}
                                onChange={(event) => setPergunta5(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta6">
                    <div>
                    <legend>Confio no meu gestor direto para honrar os compromissos feitos;</legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta6" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta6 === 'Discordo'}
                                onChange={(event) => setPergunta6(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta6" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta6 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta6(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta6" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta6 === 'Concordo'}
                                onChange={(event) => setPergunta6(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta7">
                    <div>
                    <legend>Meu gestor direto me ajuda a entender minha contribuição individual para o sucesso da nossa empresa;</legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta7" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta7 === 'Discordo'}
                                onChange={(event) => setPergunta7(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta7" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta7 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta7(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta7" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta7 === 'Concordo'}
                                onChange={(event) => setPergunta7(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta8">
                    <div>
                    <legend>A forma como os assuntos importantes são debatidos em equipe e como o gestor recebe sugestões é eficaz</legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta8" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta8 === 'Discordo'}
                                onChange={(event) => setPergunta8(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta8" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta8 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta8(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta8" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta8 === 'Concordo'}
                                onChange={(event) => setPergunta8(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta9">
                    <div>
                    <legend>Considero a estrutura hierárquica à qual estou vinculado para tratar e resolver problemas ou necessidades de melhorias como adequada.</legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta9" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta9 === 'Discordo'}
                                onChange={(event) => setPergunta9(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta9" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta9 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta9(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta9" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta9 === 'Concordo'}
                                onChange={(event) => setPergunta9(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta10">
                    <div>
                    <legend>Meu gestor direto me apoia para que eu me adapte às mudanças;</legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta10" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta10 === 'Discordo'}
                                onChange={(event) => setPergunta10(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta10" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta10 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta10(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta10" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta10 === 'Concordo'}
                                onChange={(event) => setPergunta10(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta11">
                    <div>
                    <legend>Em minha equipe, buscamos melhorar a cada dia.</legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta11" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta11 === 'Discordo'}
                                onChange={(event) => setPergunta11(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta11" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta11 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta11(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta11" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta11 === 'Concordo'}
                                onChange={(event) => setPergunta11(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta12">
                    <div>
                    <legend>Em minha equipe, nossas tarefas de trabalho são bem organizadas;</legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta12" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta12 === 'Discordo'}
                                onChange={(event) => setPergunta12(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta12" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta12 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta12(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta12" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta12 === 'Concordo'}
                                onChange={(event) => setPergunta12(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta13">
                    <div>
                    <legend>Em minha equipe, buscamos melhorar a cada dia.</legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta13" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta13 === 'Discordo'}
                                onChange={(event) => setPergunta13(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta13" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta13 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta13(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta13" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta13 === 'Concordo'}
                                onChange={(event) => setPergunta13(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta14">
                    <div>
                    <legend>O compartilhamento de conhecimento entre os colaboradores da empresa é efetivo e promove a colaboração.</legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta14" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta14 === 'Discordo'}
                                onChange={(event) => setPergunta14(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta14" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta14 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta14(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta14" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta14 === 'Concordo'}
                                onChange={(event) => setPergunta14(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta15">
                    <div>
                    <legend>Os membros da equipe colaboram efetivamente para alcançar objetivos comuns, mesmo em situações desafiadoras.</legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta15" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta15 === 'Discordo'}
                                onChange={(event) => setPergunta15(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta15" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta15 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta15(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta15" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta15 === 'Concordo'}
                                onChange={(event) => setPergunta15(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <div>
                    <button onClick={() => handleChangeNPS()} type="submit">
                        Enviar resposta
                    </button>
                </div>
            </Layout>
    )
}