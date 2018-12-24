import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  text-align: justify;
  text-justify: inter-word;
`

const Question = ({ question }) => (
  <h2> { question.question } </h2>
)

const Answer = ({ answer }) => (
  <div dangerouslySetInnerHTML={{__html:answer.childMarkdownRemark.html}} />
) 

const FAQ = ({ faq: {question, answer} }) => (
  <Section>
    <Question question={question} />
    <Answer answer={answer} />
  </Section>
)

export default FAQ