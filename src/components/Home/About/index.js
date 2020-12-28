import React from "react"

import AboutImage from "./AboutImage"

import * as S from "./styled"

const About = () => (
  <S.AboutWrapper to="/sobre">

  <S.AboutInfo >
    <S.AboutTitle>Simplesmente Estudante</S.AboutTitle> 
    <S.AboutCompany>Por Maquina do Mundo</S.AboutCompany> 
    <S.AboutDescription>Este é um projeto criado por Marcus Vinicius para auxiliar no compartilhamento de informações sobre o encino fundamental e médio. Qualquer aluno pode compartilhar seu trabalho, redação ou resumo para ajudar outros alunos e ver o conteúdo de outros alunos.</S.AboutDescription> 
    <S.ButtonContainer>
      <S.ButtonPrimary to="/admin/">Compartilhar</S.ButtonPrimary>
      <S.Button to="/">Cadastrar</S.Button>
    </S.ButtonContainer>
  </S.AboutInfo>

  <AboutImage />
  
  </S.AboutWrapper>

)

export default About