import React from "react"
import MyPhoto from './MyPhoto'

import * as S from './styled'

const Myself = () => (
    <S.MyselfWrapper>
      <S.MyselfLink to="https://www.linkedin.com/in/marcus-vinicius-almeida-pires-b194691b6/">
        <MyPhoto />
        <S.MyselfTextContent>
          <S.MyselfText>Marcus Vinicius</S.MyselfText>
          <S.MyselfCompany>Full stack developer</S.MyselfCompany>
        </S.MyselfTextContent>
      </S.MyselfLink>
    </S.MyselfWrapper>
  )

export default Myself