import React, { useEffect } from "react"
import netlifyIdentity from "netlify-identity-widget";

import LoginImage from './LoginImage'

import * as S from './styled'

const Login = () => { 

  useEffect(() => {
    netlifyIdentity.init({})
  })

  if (netlifyIdentity.currentUser()) {
    let firstName = ''

    try {
      const fullName = netlifyIdentity.currentUser().user_metadata.full_name.split(" ")
      firstName = fullName[0]
    } catch (e) {
      console.log(e)
      firstName = "Sem Nome"
    }

    return(
      <S.LoginWrapper onClick={() => { netlifyIdentity.open(); }} >
        <LoginImage />
        <S.Name>
          {firstName}
        </S.Name>
      </S.LoginWrapper>
    )} else {

    return(
        <S.Button
          onClick={() => { netlifyIdentity.open(); }}
        >
          Login
        </S.Button>
    )
  }
}

export default Login
