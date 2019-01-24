import React from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import { PRIMARY_COLOR } from '../utils/theme'

const slugify = text =>
  text
    .replace(/[^\w\s]|_/g, '')
    .toLowerCase()
    .split(/ +/)
    .join('-')

const Anchor = styled.a`
  color: ${PRIMARY_COLOR};
  text-decoration: none;

  &:hover {
    color: ${darken(0.1, PRIMARY_COLOR)};
  }
`

const Question = ({ question }) => {
  const slug = slugify(question.question)
  return (
    <h2 id={slug}>
      <Anchor href={`#${slug}`}>{question.question}</Anchor>
    </h2>
  )
}

const Answer = ({ answer }) => (
  <div dangerouslySetInnerHTML={{ __html: answer.childMarkdownRemark.html }} />
)

const FAQ = ({ faq: { question, answer } }) => (
  <div>
    <Question question={question} />
    <Answer answer={answer} />
  </div>
)

export default FAQ
