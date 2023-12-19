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
    const [pergunta16, setPergunta16] = useState('Nem concordo nem discordo');
    const [pergunta17, setPergunta17] = useState('Nem concordo nem discordo');
    const [pergunta18, setPergunta18] = useState('Nem concordo nem discordo');
    const [pergunta19, setPergunta19] = useState('Nem concordo nem discordo');
    const [pergunta20, setPergunta20] = useState('Nem concordo nem discordo');
    const [pergunta21, setPergunta21] = useState('Nem concordo nem discordo');
    const [pergunta22, setPergunta22] = useState('Nem concordo nem discordo');
    const [pergunta23, setPergunta23] = useState('Nem concordo nem discordo');
    const [pergunta24, setPergunta24] = useState('Nem concordo nem discordo');
    const [pergunta25, setPergunta25] = useState('Nem concordo nem discordo');
    const [pergunta26, setPergunta26] = useState('Nem concordo nem discordo');
    const [pergunta27, setPergunta27] = useState('Nem concordo nem discordo');
    const [pergunta28, setPergunta28] = useState('Nem concordo nem discordo');
    const [pergunta29, setPergunta29] = useState('Nem concordo nem discordo');
    const [pergunta30, setPergunta30] = useState('Nem concordo nem discordo');
    const [pergunta31, setPergunta31] = useState('Nem concordo nem discordo');
    const [pergunta32, setPergunta32] = useState('Nem concordo nem discordo');
    const [pergunta33, setPergunta33] = useState('Nem concordo nem discordo');
    const [pergunta34, setPergunta34] = useState('Nem concordo nem discordo');
    const [pergunta35, setPergunta35] = useState('Nem concordo nem discordo');
    const [pergunta36, setPergunta36] = useState('Nem concordo nem discordo');
    const [pergunta37, setPergunta37] = useState('Nem concordo nem discordo');
    const [pergunta38, setPergunta38] = useState('Nem concordo nem discordo');
    const [pergunta39, setPergunta39] = useState('Nem concordo nem discordo');
    const [pergunta40, setPergunta40] = useState('Nem concordo nem discordo');
    const [pergunta41, setPergunta41] = useState('Nem concordo nem discordo');
    
    
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
                <QuestionContainer className="Pergunta16">
                    <DivContainer>
                    <legend>A empresa lida de forma eficaz com as demandas e sugestões dos colaboradores através dos canais de comunicação
                    </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta16" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta16 === 'Discordo'}
                                onChange={(event) => setPergunta16(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="p66" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta16 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta16(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta16" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta16 === 'Concordo'}
                                onChange={(event) => setPergunta16(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </DivContainer>
                </QuestionContainer>
                <QuestionContainer className="Pergunta17">
                    <DivContainer>
                    <legend>Ao buscar informações com outros setores em situações inesperadas, o retorno é satisfatório para garantir a continuidade do trabalho.
                    </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta17" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta17 === 'Discordo'}
                                onChange={(event) => setPergunta17(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta17" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta17 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta17(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta17" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta17 === 'Concordo'}
                                onChange={(event) => setPergunta17(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </DivContainer>
                </QuestionContainer>
                <QuestionContainer className="Pergunta18">
                    <div>
                        <legend>Considero a qualidade e a pontualidade da comunicação interna na empresa como aspectos satisfatórios.
                        </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta18" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta18 === 'Discordo'}
                                onChange={(event) => setPergunta18(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta18" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta18 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta18(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta18" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta18 === 'Concordo'}
                                onChange={(event) => setPergunta18(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta19">
                    <div>
                    <legend>Onde eu trabalho, existe comunicação aberta e honesta nos dois sentidos;
                    </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta19" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta19 === 'Discordo'}
                                onChange={(event) => setPergunta19(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta19" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta19 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta19(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta19" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta19 === 'Concordo'}
                                onChange={(event) => setPergunta19(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta20">
                    <div>
                    <legend>Tenho orgulho da contribuição da minha empresa para nossas comunidades (ações sociais, incentive à esporte e etc);
                    </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta20" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta20 === 'Discordo'}
                                onChange={(event) => setPergunta20(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta20" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta20 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta20(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta20" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta20 === 'Concordo'}
                                onChange={(event) => setPergunta20(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta21">
                    <div>
                    <legend>O equilíbrio pessoal e profissional é uma preocupação da empresa, e considero as ações de Qualidade de Vida (Palestras, Apoio às Atividades Esportivas etc.) como eficazes e benéficas.
                    </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta21" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta21 === 'Discordo'}
                                onChange={(event) => setPergunta21(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta21" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta21 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta21(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta21" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta21 === 'Concordo'}
                                onChange={(event) => setPergunta21(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta22">
                    <div>
                    <legend>Considero os recursos materiais e infraestrutura oferecidos pelo Grupo Incoflandres necessários e suficientes para a realização das minhas atividades, avaliando-os como adequados.
                    </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta22" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta22 === 'Discordo'}
                                onChange={(event) => setPergunta22(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta22" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta22 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta22(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta22" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta22 === 'Concordo'}
                                onChange={(event) => setPergunta22(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta23">
                    <div>
                    <legend>Consigo entender como as minhas atividades impactam no resultado da empresa, e considero que essa relação entre execução das atividades e metas estabelecidas é clara e relevante.
                    </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta23" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta23 === 'Discordo'}
                                onChange={(event) => setPergunta23(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta23" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta23 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta23(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta23" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta23 === 'Concordo'}
                                onChange={(event) => setPergunta23(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta24">
                    <div>
                    <legend>Considero o Grupo Incoflandres uma empresa moderna e com regras flexíveis para trabalhar, avaliando positivamente essa característica.
                    </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta24" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta24 === 'Discordo'}
                                onChange={(event) => setPergunta24(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta24" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta24 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta24(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta24" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta24 === 'Concordo'}
                                onChange={(event) => setPergunta24(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta25">
                    <div>
                    <legend>A satisfação por participar dos eventos promovidos pela empresa, como Aniversariantes do mês, Treinamentos, Palestras etc., é alta e positiva.
                    </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta25" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta25 === 'Discordo'}
                                onChange={(event) => setPergunta25(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta25" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta25 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta25(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta25" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta25 === 'Concordo'}
                                onChange={(event) => setPergunta25(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta26">
                    <div>
                    <legend>Onde eu trabalho, tenho acesso a oportunidades de treinamento e aprendizagem;
                    </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta26" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta26 === 'Discordo'}
                                onChange={(event) => setPergunta26(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta26" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta26 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta26(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta26" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta26 === 'Concordo'}
                                onChange={(event) => setPergunta26(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta27">
                    <div>
                    <legend>Onde eu trabalho, eu vi mudanças positivas ocorrendo como resultado do meu feedback;
                    </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta27" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta27 === 'Discordo'}
                                onChange={(event) => setPergunta27(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta27" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta27 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta27(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta27" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta27 === 'Concordo'}
                                onChange={(event) => setPergunta27(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta28">
                    <div>
                    <legend>Onde eu trabalho, estamos comprometidos com a saúde e a segurança.
                    </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta28" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta28 === 'Discordo'}
                                onChange={(event) => setPergunta28(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta28" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta28 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta28(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta28" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta28 === 'Concordo'}
                                onChange={(event) => setPergunta28(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta29">
                    <div>
                    <legend>Minha empresa age de forma ambientalmente responsável (por exemplo, temos coleta seletiva, ações ambientais)
                    </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta29" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta29 === 'Discordo'}
                                onChange={(event) => setPergunta29(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta29" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta29 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta29(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta29" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta29 === 'Concordo'}
                                onChange={(event) => setPergunta29(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta30">
                    <div>
                    <legend>Onde eu trabalho,aplicamos constantemente as ferramentas de ser a Primeira Escolha para incentivar a melhoria contínua e qualidade;
                    </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta30" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta30 === 'Discordo'}
                                onChange={(event) => setPergunta30(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta30" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta30 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta30(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta30" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta30 === 'Concordo'}
                                onChange={(event) => setPergunta30(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta31">
                    <div>
                    <legend>Onde eu trabalho, encontramos soluções rápidas e flexíveis.
                    </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta31" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta31 === 'Discordo'}
                                onChange={(event) => setPergunta31(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta31" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta31 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta31(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta31" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta31 === 'Concordo'}
                                onChange={(event) => setPergunta31(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta32">
                    <div>
                    <legend>Estou familiarizado com o Código de Conduta da Cinbal Grupo Incoflandres;
                    </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta32" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta32 === 'Discordo'}
                                onChange={(event) => setPergunta32(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta32" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta32 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta32(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta32" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta32 === 'Concordo'}
                                onChange={(event) => setPergunta32(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta33">
                    <div>
                    <legend>Onde eu trabalho, estamos comprometidos com as práticas comerciais de conformidade (com base no Código de Conduta da CINBAL);
                    </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta33" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta33 === 'Discordo'}
                                onChange={(event) => setPergunta33(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta33" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta33 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta33(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta33" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta33 === 'Concordo'}
                                onChange={(event) => setPergunta33(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta34">
                    <div>
                    <legend>Eu apoio totalmente a estratégia e a visão da minha empresa.
                    </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta34" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta34 === 'Discordo'}
                                onChange={(event) => setPergunta34(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta34" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta34 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta34(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta34" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta34 === 'Concordo'}
                                onChange={(event) => setPergunta34(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta35">
                    <div>
                    <legend>Onde eu trabalho, aproveitamos as novas tecnologias e a digitalização;
                    </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta35" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta35 === 'Discordo'}
                                onChange={(event) => setPergunta35(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta35" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta35 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta35(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta35" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta35 === 'Concordo'}
                                onChange={(event) => setPergunta35(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta36">
                    <div>
                    <legend>Tenho o suporte necessário para aproveitar a digitalização;
                    </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta36" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta36 === 'Discordo'}
                                onChange={(event) => setPergunta36(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta36" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta36 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta36(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta36" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta36 === 'Concordo'}
                                onChange={(event) => setPergunta36(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta37">
                    <div>
                    <legend>Minha empresa promove a diversidade e um ambiente inclusivo onde os funcionários se sentem aceitos);

                    </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta37" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta37 === 'Discordo'}
                                onChange={(event) => setPergunta37(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta37" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta37 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta37(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta37" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta37 === 'Concordo'}
                                onChange={(event) => setPergunta37(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta38">
                    <div>
                    <legend>Onde eu trabalho, tratamos uns aos outros com respeito;
                    </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta38" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta38 === 'Discordo'}
                                onChange={(event) => setPergunta38(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta38" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta38 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta38(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta38" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta38 === 'Concordo'}
                                onChange={(event) => setPergunta38(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta39">
                    <div>
                    <legend>Onde eu trabalho, somos responsáveis por nossas ações e decisões;
                    </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta39" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta39 === 'Discordo'}
                                onChange={(event) => setPergunta39(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta39" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta39 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta39(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta39" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta39 === 'Concordo'}
                                onChange={(event) => setPergunta39(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta40">
                    <div>
                    <legend>Minha empresa tem um compromisso firme com a ética nos negócios em todas as nossas operações.
                    </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta40" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta40 === 'Discordo'}
                                onChange={(event) => setPergunta40(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta40" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta40 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta40(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta40" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta40 === 'Concordo'}
                                onChange={(event) => setPergunta40(event.target.value)}
                            />
                            <label htmlFor="Concordo">Concordo 😃</label>
                        </InputList>
                    </div>
                </QuestionContainer>
                <QuestionContainer className="Pergunta41">
                    <div>
                    <legend>Na nossa cultura organizacional, incentivamos a iniciativa e valorizamos a inovação para impulsionar o crescimento
                    </legend>
                        <InputList>
                            <QuestionButton 
                                type="radio" 
                                name="pergunta41" 
                                value="Discordo" 
                                id="Discordo" 
                                checked={pergunta41 === 'Discordo'}
                                onChange={(event) => setPergunta41(event.target.value)}
                            />
                            <label htmlFor="Discordo">Discordo 😒</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta41" 
                                value="Nem concordo nem discordo" 
                                id="Nem concordo nem discordo" 
                                checked={pergunta41 === 'Nem concordo nem discordo'}
                                onChange={(event) => setPergunta41(event.target.value)}
                            />
                            <label htmlFor="Nem concordo nem discordo">Nem concordo nem discordo 🙂</label>

                            <QuestionButton 
                                type="radio" 
                                name="pergunta41" 
                                value="Concordo" 
                                id="Concordo" 
                                checked={pergunta41 === 'Concordo'}
                                onChange={(event) => setPergunta41(event.target.value)}
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