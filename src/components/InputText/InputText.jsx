import React, { useState } from 'react'
import * as S from './inputText.style'

export default function InputText({ ...props }) {
  const [focus, setFocus] = useState(false)
  return (
    <S.FormControl foucus={focus}>
      <input {...props} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
    </S.FormControl>
  )
}
