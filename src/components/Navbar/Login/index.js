import React, { useEffect } from "react"
import netlifyIdentity from "netlify-identity-widget";

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
      <S.Name>
        {firstName}
      </S.Name>
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