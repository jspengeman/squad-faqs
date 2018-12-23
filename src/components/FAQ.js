import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  text-align: justify;
  text-justify: inter-word;
`

const Question = ({ question }) => <h2> { question } </h2>

const Answer = ({ answer }) => <p> { answer } </p>

const FAQ = ({ faq }) => {
  return (
    <Section>
      <Question question={faq.question} />
      {faq.answers.map(answer => <Answer key={answer} answer={answer} />)}
    </Section>
  )
}

export default FAQ