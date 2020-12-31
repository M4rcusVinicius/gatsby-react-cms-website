import React from "react"
import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS

import * as S from "./styled"

const Identity  = () => {

  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name =
    (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.name) || "Sem Nome"

  console.log(JSON.stringify(identity))
  const isLoggedIn = identity && identity.isLoggedIn
  
  return (
    <S.IdentityWrapper>
      <S.IdentityButton onClick={() => setDialog(true)}>
        {isLoggedIn ? `Hello ${name}` : "Login"}
      </S.IdentityButton>
      <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
    </S.IdentityWrapper>
  )
}

export default Identity