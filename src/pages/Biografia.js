import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import AdolfoBezerra from '../img/bezerrademenezes.jpg';
import AlencarBraga from '../img/alencarbraga.gif';
import Image from "react-bootstrap/Image";
import {useState} from "react";

export default function Biografia() {

    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] =useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <div id="margem_container">
            <Container>
                <h3 id="cabecalho_page">Biografias</h3>
                <Row className="mt-3">
                    <Col xs={2}>
                        <Image id="imagem_arredondada" src={AdolfoBezerra} alt="Foto de Adolfo Bezerra de Menezes"/>
                    </Col>
                    <Col>
                        <h6>Adolfo Beerra de Menezes</h6>
                        <p>
                            Adolfo Bezerra de Menezes Cavalcanti nasceu no dia 29 de agosto de 1831, na fazenda Santa Bárbara, antiga Freguesia do município de Riacho do Sangue (hoje Jaguaretama), no...
                            {values.map((v, idx) => (
                                <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)} variant="link">Leia mais
                                </Button>
                            ))}
                            <Modal  style={{ backgroundColor: '#80bde1'}} show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Adolfo Bezerra de Menezes</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Container>
                                        <Row>
                                            <Col>
                                                <p className="text_justify">
                                                    Adolfo Bezerra de Menezes Cavalcanti nasceu no dia 29 de agosto de 1831, na fazenda Santa Bárbara, antiga Freguesia do município de Riacho do Sangue (hoje Jaguaretama), no Estado do Ceará. Descendia de antiga família, das primeiras a povoar o território cearense, filho de Antônio Bezerra de Menezes, capitão das antigas milícias e tenente-coronel da Guarda Nacional, e Fabiana Cavalcanti de Alburquerque.

                                                    Conheceu as primeiras letras, em 1838, no interior do Ceará, na escola pública da Vila do Frade, onde, em dez meses apenas, preparou-se, suficientemente, a ponto de ministrar os conhecimentos do professor que dirigia a primeira fase de sua educação. Em 1842, mudou-se com a família para Serra dos Martins, no Rio Grande do Norte, por motivo de perseguições políticas, onde aprendeu latim em dois anos, substituindo o professor.

                                                    Em 1846, já em Fortaleza, sob as vistas do irmão mais velho, o Dr. Manoel Soares da Silva Bezerra, conceituado intelectual e líder católico, efetuou os estudos preparatórios destacando-se entre os primeiros alunos do tradicional Liceu do Ceará.

                                                    Seu pai era um homem relativamente abastado. Porém, por causa de seu bom coração, comprometeu a fortuna, dando abonos em favor de parentes e amigos que o procuravam, a fim de explorarem os seus sentimentos de caridade. Percebendo, então, que seus débitos igualavam seus haveres, procurou os credores e lhes propôs entregar suas fazendas de criação e tudo o mais que fosse suficiente para integralizar a dívida.

                                                    Os seus credores recusaram a proposta, dizendo-lhe que pagasse quando e como pudesse. A família, que passou da abundância às privações, perde o patriarca, que desencarnou em Maranguape, no dia 29 de setembro de 1851, de febre amarela. Foi nessa fase que Adolfo Bezerra de Menezes, com minguada quantia de 400 mil réis ofertada por seus parentes, partiu para o Rio de Janeiro, a então Capital do Império, a fim de seguir a carreira que sua vocação lhe inspirava: a Medicina.

                                                    Em novembro de 1852, ingressou como praticante interno no Hospital da Santa Casa de Misericórdia no Rio de Janeiro. Para poder estudar, dava aula de Filosofia e Matemática. Doutorou-se em 1856, pela Faculdade de Medicina do Rio de Janeiro. Em março de 1857, solicitou sua admissão no Corpo de Saúde do Exército, sentando praça em 20 de fevereiro de 1858 como cirurgião tenente.

                                                    Ainda em 1857, candidatou-se ao quadro dos membros titulares da Academia Imperial de Medicina com a memória “Algumas considerações sobre o cancro, encarado pelo lado do seu tratamento”, sendo empossado em sessão de 1º de junho. Nesse mesmo ano, passou a colaborar na Revista da Sociedade Físico-química.

                                                    Casou-se com a Srª. Maria Cândida de Lacerda em 6 de novembro de 1858, que desencarnou no início de 1863, deixando-lhe um casal de filhos. Em 1859, passou a atuar como redator dos Anais Brasilienses de Medicina, da Academia Imperial de Medicina, atividade que exerceu até 1861.

                                                    Em 21 de janeiro de 1865, casou-se, em segunda núpcia, com Dona Cândida Augusta de Lacerda Machado, irmã materna de sua primeira esposa, com quem teve sete filhos.

                                                    Já em franca atividade médica, Bezerra de Menezes demonstrava o grande coração que iria semear, até o fim do século, sobretudo, entre os menos favorecidos da fortuna, o carinho, a dedicação e o alto valor profissional.

                                                    Foi justamente o respeito e o reconhecimento de numerosos amigos que o levaram à política, que ele, em mensagem ao deputado Freitas Nobre, seu conterrâneo e admirador, definiu-a como “a ciência de criar o bem de todos”. Elegeu-se vereador para Câmara Municipal do Rio de janeiro em 1860, pelo Partido Liberal.

                                                    Quando o chefe conservador Haddock Lobo tentou impugnar a candidatura de Bezerra, sob a alegação de este ser médico militar, o mesmo demitiu-se do Corpo de Saúde do Exército. Na Câmara Municipal, desenvolveu grande trabalho em favor do “Município Neutro” e na defesa dos humildes e necessitados. Foi reeleito com simpatia geral para o período de 1864-1868. Não se candidatou ao exercício de 1869-1872.

                                                    Em 1867, foi eleito deputado-geral (correspondente, hoje, a deputado federal) pelo Rio de Janeiro. Dissolvida a Câmara dos Deputados em 1868, com a subida dos conservadores ao poder, Bezerra dirigiu suas atividades para outras realizações que beneficiassem a cidade.

                                                    Em 1873, após quatro anos afastados da política, retomou suas atividades, novamente como vereador. Em 1878, com a volta dos liberais ao poder, foi novamente eleito à Câmara dos Deputados, representando o Rio de Janeiro, cargo que exerceu até 1885.

                                                    Neste período, criou a Companhia de Estrada de Ferro Macaé a Campos, que veio proporcionar-lhe pequena fortuna, mas que, por sua vez, foi também o sorvedouro dos seus bens, deixando-o completamente arruinado.

                                                    Sua mãe, Dona Fabiana, desencarnou em 5 de agosto de 1882, em Fortaleza, aos 91 anos de idade, perfeitamente lúcida.



                                                    DA POLÍTICA AO ESPIRITISMO

                                                    Após 30 anos de atividade parlamentar, em 1885, Bezerra de Menezes encerra suas atividades políticas. Outra missão o aguardava - esta mais nobre ainda, aquela de que o incumbira Ismael: o Espiritismo.

                                                    Em 1875, logo que apareceu a primeira tradução brasileira de O Livro dos Espíritos, um exemplar foi oferecido a Bezerra de Menezes pelo tradutor, Dr. Joaquim Carlos Travassos, que se ocultou sob o pseudônimo de ‘Fortúnio’.

                                                    Foram palavras do próprio Bezerra de Menezes, ao proceder a leitura da obra: “Lia, mas não encontrava nada que fosse novo para meu espírito, entretanto tudo aquilo era novo para mim [...]. Eu já tinha lido ou ouvido tudo o que se achava no Livro dos Espíritos [...]. Preocupei-me seriamente com este fato maravilhoso e a mim mesmo dizia: parece que eu era espírita inconsciente, ou mesmo, como se diz vulgarmente, de nascença”.

                                                    Contribuíram, também, para torná-lo um adepto consciente, as extraordinárias curas que ele conseguiu, em 1882, do famoso médium receitista João Gonçalves do Nascimento.

                                                    Mais que um adepto, Bezerra de Menezes foi um defensor e um divulgador da Doutrina Espírita. Em 1883, intensificou-se um movimento contrário ao Espiritismo e, naquele mesmo ano, fora lançado por Augusto Elias da Silva o Reformador, órgão oficial da Federação Espírita Brasileira (FEB).

                                                    Silva, ao consultar Bezerra de Menezes sobre as melhores diretrizes a seguir em defesa dos ideais espíritas, ouviu do venerável médico o conselho de contrapor-se ao ódio, o amor, e a agir com discrição, paciência e harmonia. Com as iniciais A. M., Bezerra passou a colaborar com o Reformador, emitindo comentários judiciosos sobre o Catolicismo.

                                                    Embora a sua participação na FEB tivesse sido marcante até então, somente em 16 de agosto de 1886, aos 55 anos de idade, Bezerra de Menezes, perante grande público, em torno de 1.500 a 2.000 pessoas, no salão de Conferência da Guarda Velha, em longo discurso, justificou a sua opção definitiva de abraçar os princípios da consoladora Doutrina.

                                                    Daí por diante, Bezerra de Menezes foi o catalisador de todo o movimento espírita na Pátria do Cruzeiro, exatamente como preconizara Ismael. Foi Presidente da FEB em 1889, sendo reconduzido ao cargo em 1895 - quando mais se agigantava a maré da discórdia e das radicalizações no meio espírita -, nele permanecendo até 1900.



                                                    DESENCARNE E POSTULADO

                                                    Bezerra de Menezes desencarnou em 11 de abril de 1900, às 11h30, tendo ao lado a dedicada companheira de tantos anos, Cândida Augusta. Morreu pobre, embora seu consultório estivesse cheio de uma clientela que nenhum médico queria: pessoas pobres, sem dinheiro para pagar consultas. Foi preciso constituir-se uma comissão, presidida por Quintino Bocayuva, para angariar donativos visando a possibilitar a manutenção da família.

                                                    Por ocasião de sua morte, assim se pronunciou Léon Denis, um dos maiores discípulos de Kardec: “Quando tais homens deixam de existir, enluta-se não somente o Brasil, mas os espíritas de todo o mundo”.

                                                    O Dr. Bezerra de Menezes foi membro da Sociedade de Geografia de Lisboa, da Sociedade Auxiliadora da Indústria Nacional, da Sociedade Físico-química, sócio e benfeitor da Sociedade Propagadora das Belas-Artes, membro do Conselho do Liceu de Artes e presidente da Sociedade Beneficente Cearense.

                                                    Escreveu em jornais como O Paiz, redigiu Sentinela da Liberdade, os Anais Brasilienses de Medicina, colaborou na Reforma, na Revista da Sociedade Físico-química e no Reformador. Utilizava os pseudônimos de ‘Max’ e ‘Frei Gil’.

                                                    O dicionarista J. F. Velho Sobrinho alinha extensa bibliografia de Bezerra de Menezes, relacionando para mais de quarenta obras escritas e publicadas. São teses, romances, biografias, artigos, estudos, relatórios, etc.



                                                    Fonte: Coleção “Bezerra de Menezes”, Federação Espírita Brasileira (FEB).

                                                    ACERVO da campanha "BEZERRA DE MENEZES - 190 ANOS"
                                                </p>
                                            </Col>
                                            <Col xs={4}>
                                                <Image width={350} src={AdolfoBezerra} alt="Foto de Adalfo Bezerra de Menezes" />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Modal.Body>
                            </Modal>
                        </p>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={2}>
                        <Image id="imagem_arredondada" src={AlencarBraga} alt="Foto de Adolfo Bezerra de Menezes"/>
                    </Col>
                    <Col>
                        <h6>Alencar Braga</h6>
                        <p>
                            Alencar de Paula Braga nasceu no antigo distrito de Rio Pomba (atual Guarani, pequena cidade da Zona da Mata, Minas Gerais) no ano de 1901. Foi o quinto filho, de uma prole de...
                            {values.map((v, idx) => (
                                <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)} variant="link">Leia mais
                                </Button>
                            ))}
                            <Modal  style={{ backgroundColor: '#80bde1'}} show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Alencar Braga</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Container>
                                        <Row>
                                            <Col>
                                                <p className="text_justify">
                                                    Alencar de Paula Braga nasceu no antigo distrito de Rio Pomba (atual Guarani, pequena cidade da Zona da Mata, Minas Gerais) no ano de 1901. Foi o quinto filho, de uma prole de dez, do casal João Evangelista Braga e Jovita de Paula Braga.

                                                    Seu pai, proprietário do Hotel Guarani e escrivão da Coletoria Estadual, coadjuvado por sua esposa, proporcionou aos filhos sólida formação moral, alicerçada nos valores da ética, do trabalho e do respeito ao próximo.

                                                    Dessa forma, tão logo concluiu o curso primário, o menino Alencar iniciou-se na atividade mercantil, transportando em seu cavalo, para propriedades vizinhas, pães frescos encomendados por várias famílias, e de lá trazendo, ao retornar, ovos e frangos para atender à sua sempre crescente clientela na cidade.

                                                    Em 1920, com os recursos que conseguiu amealhar, instalou, com apenas 19 anos, o estabelecimento comercial denominado “Lojas Brasileiras”, que alcançaria grande progresso, alinhando-se entre os mais conceituados da região.

                                                    Foi nessa época que Alencar teve os primeiros contatos com a Doutrina Espírita. Sua mãe, Dona Jovita, apresentou sintomas de influenciação espiritual, que só puderam ser explicados e solucionados por três adeptos do Espiritismo: Sr. Josué, pequeno comerciante, Sr. Nicola, imigrante italiano, e o Sr. Moisés Silva, guarda-livros.

                                                    A partir daí, passou a ler O Livro dos Espíritos e O Evangelho Segundo o Espiritismo, que foram sua primeira fonte de estudos doutrinários.

                                                    Em 1923, casou-se com a jovem Martha de Campos Alvim, natural da localidade vizinha de Descoberto. Da união nasceram os filhos:  Adalberto, Maria Aparecida, Terezinha de Jesus, George e Jandir, espíritas desde o berço. Por volta de 1932, a família muda-se para a Capital Mineira, a fim de terem melhor qualidade de vida e perspectivas mais amplas aos filhos. Em Belo Horizonte, estabelecem-se no ramo de armarinho com as lojas “A Principal”, localizadas na Rua Rio de Janeiro e na Avenida Afonso Pena.

                                                    Neste período, Alencar Braga aproximou-se ainda mais da Doutrina Espírita, passando a frequentar assiduamente reuniões na União Espírita Mineira e no Centro Espírita Oriente. Além de dedicar-se ao estudo de obras espíritas, realizava, semanalmente, em sua residência na Rua Eurita, 37, bairro Santa Tereza, o Culto do Evangelho no Lar congregando toda a família.

                                                    Numa dessas reuniões domésticas, após a leitura da mensagem “A Beneficência”, ditada por Adolfo, bispo de Argel, inserta no item 11 do capítulo XIII de O Evangelho Segundo o Espiritismo, ele e a esposa Martha muito se emocionaram, nascendo ali a inspiração de criarem uma instituição destinada a amparar as “pobres criancinhas sem família”. A ideia que lhes fecundara os corações fê-los procurar companheiros idealistas com quem pudessem irmanar-se para a concretização do objetivo acalentado.

                                                    Os primeiros a serem procurados foram seus vizinhos espíritas da rua em que moravam, Leonardo e Delmitina Baumgratz, que acolheram com entusiasmo o convite. Era o dia 31 de janeiro de 1937.

                                                    Procurados por Alencar e Leonardo, dirigentes e colaboradores da União Espírita Mineira, entre os quais Rodrigo Agnelo Antunes, Oscar Coelho dos Santos, Geraldo Benício Rocha, Noraldino de Mello Castro, Rubens Costa Romanelli, Cícero Pereira, Osório de Moraes, Francisco Cândido Xavier e Antônio Loreto Flores, mostraram-se receptivos à ideia de criação de um abrigo para acolher, em nome de Jesus, crianças órfãs de amparo.

                                                    A União Espírita Mineira serviu de útero abençoado àquele embrião fecundado pelo legítimo amor ao próximo e realizou-se, a 7 de fevereiro de 1937, a escolha do nome – Abrigo Jesus – e da diretoria provisória da futura entidade, cujo nascimento se deu no dia 25 de julho do mesmo ano, quando foi realizada a Assembleia Geral de Constituição. Elaborado por Noraldino de Mello Castro, o Estatuto Social somente dois meses depois, em 22 de setembro de 1937, sob nº. 249, obteve registro no Cartório das Pessoas Jurídicas. Era a certidão de nascimento ansiosamente esperada.

                                                    A primeira diretoria da, à época, novel instituição, teve a presidência confiada a Rodrigo Agnelo Antunes, então presidente da UEM, ficando Alencar Braga e Leonardo Baumgratz como tesoureiro e secretário.

                                                    Alencar acompanhou, atento e diligente, as etapas que marcaram a vida do Abrigo Jesus – hoje, modelar  instituição de amparo à criança e ao adolescente –, como a compra do terreno em janeiro de 1940, o lançamento da pedra fundamental em 7 de fevereiro de 1940, a inauguração do prédio em 23 de junho de 1944 e o acolhimento das primeiras crianças em 31 de março de 1946.

                                                    Embora residindo em Belo Horizonte, Alencar nunca perdeu o contato com a terra natal. Em uma de suas visitas a Guarani, fundou, com amigos espíritas que lá deixara, o Centro Espírita João de Freitas, nome escolhido para homenagear o benfeitor espiritual que orientava as atividades mediúnicas de sua querida mãe, Dona Jovita de Paula Braga. O Abrigo Jesus tornou-se, além da família, a razão de ser de sua existência de espírita consciente e dedicado ao serviço do Cristo.

                                                    Alencar Braga desencarnou em 18 de novembro de 1972 em Belo Horizonte. Compareceram ao sepultamento de seu corpo, no cemitério do Bonfim, os amigos que soube granjear com sua honradez, trabalho e amor ao semelhante, no que se constituiu exemplo vivo de ação cristã “sem que a mão esquerda saiba o que faz a direita”.  Até sua desencarnação, participou de todas as diretorias do Abrigo Jesus, mas não chegou a completar seu primeiro mandato como presidente da Casa que tanto amou.



                                                    Fonte:  Jornal “O Espírita Mineiro”,  nº 297.
                                                </p>
                                            </Col>
                                            <Col xs={4}>
                                                <Image width={350} src={AlencarBraga} alt="Foto de Adalfo Bezerra de Menezes" />
                                            </Col>
                                        </Row>
                                    </Container>
                                </Modal.Body>
                            </Modal>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}