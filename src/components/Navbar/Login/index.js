import React, { useEffect } from "react"
import netlifyIdentity from "netlify-identity-widget";

import * as S from './styled'

const Login = () => { 

  useEffect(() => {
    netlifyIdentity.init({})
  })

  if (netlifyIdentity.currentUser()) {
    return(
      <S.Button
        onClick={() => { netlifyIdentity.open(); }}
      >
        Funciona
      </S.Button>
  )
  }

  return(
      <S.Button
        onClick={() => { netlifyIdentity.open(); }}
      >
        Login
      </S.Button>
  )
}

export default Login