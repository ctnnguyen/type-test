import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { useFilePicker } from 'use-file-picker'
import { TextContext } from './providers'

const Wrapper = styled.footer`
  text-align: center;
  position: fixed;
  bottom: 1.2rem;
  left: 0;
  right: 0;
`

const CTA = styled.span`
  cursor: pointer;
`

export const Footer = () => {
  const { setCustomText } = useContext(TextContext)
  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    accept: '.txt',
    readAs: 'Text',
    multiple: false,
    limitFilesConfig: { max: 1 }
  })

  useEffect(() => {
    if (!loading && !errors.length && filesContent.length) {
      setCustomText(filesContent[0].content)
    }
  }, [filesContent, loading])

  return (
    <Wrapper>
      <CTA onClick={() => openFileSelector()}>import</CTA>
    </Wrapper>
  )
}
