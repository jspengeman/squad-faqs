import React from 'react'
import styled, { createGlobalStyle } from "styled-components"
import { Link } from 'gatsby'
import FAQ from '../components/FAQ'
import Header from '../components/Header'
import SEO from '../components/seo'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
  }
`

export const Container = styled.section`
  margin-right: auto;
  margin-left: auto;
  padding: 10px;

  @media (min-width: 768px) {
    width: 720px;
  }
  @media (min-width:  992px) {
    width: 720px;
  }
  @media (min-width: 1200px) {
    width: 720px;
  }
`

const faqs = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor ac nisl non feugiat. Nullam sem neque, pretium id bibendum quis, rhoncus ut elit?", 
    answers: ["Proin bibendum sit amet diam eget placerat. Vivamus libero ipsum, venenatis eu egestas vitae, suscipit in nunc. Nunc mattis id ipsum mollis facilisis. Morbi ut mauris ut dolor faucibus laoreet at ac dolor. Quisque mattis tincidunt mauris, nec hendrerit urna ullamcorper ac. Suspendisse nec velit eu risus porta posuere vitae eget massa."]
  },
  {
    id: 2,
    question: "Nunc iaculis mattis congue. Donec vel nibh sodales, malesuada lacus nec, tincidunt ex. Integer interdum pretium dolor, venenatis lacinia purus ullamcorper nec?", 
    answers: [
      "Option 1: Maecenas rutrum, justo at maximus placerat, lorem magna vestibulum odio, sed pellentesque tellus neque vel augue. Etiam consequat tortor et porta ultrices.", 
      "Option 2: Fusce bibendum nunc vitae tortor interdum pretium. Quisque bibendum est eu gravida malesuada.", 
      "Option 3: Sed at massa ultricies, rhoncus elit quis, tempor felis. Ut tincidunt, ex ac egestas consectetur, ligula nisl luctus dui, vel ullamcorper purus mi sed elit. Donec tincidunt, velit a mollis pharetra, mi lectus accumsan leo, at porta odio velit eget velit. Nullam interdum nisi id dolor suscipit, sed posuere justo vehicula."
    ]
  },
  {
    id: 3,
    question: "Donec pharetra mauris a purus tristique dictum. Nam egestas blandit scelerisque?", 
    answers: ["Proin bibendum sit amet diam eget placerat. Vivamus libero ipsum, venenatis eu egestas vitae, suscipit in nunc. Nunc mattis id ipsum mollis facilisis. Morbi ut mauris ut dolor faucibus laoreet at ac dolor. Quisque mattis tincidunt mauris."]
  },
  {
    id: 4,
    question: "Suspendisse tristique pretium nisl, in malesuada lorem rhoncus a. Pellentesque interdum cursus quam, vitae finibus metus. Donec tincidunt ipsum lorem, sed pulvinar?", 
    answers: ["Sed at massa ultricies, rhoncus elit quis, tempor felis. Ut tincidunt, ex ac egestas consectetur, ligula nisl luctus dui, vel ullamcorper purus mi sed elit. Donec tincidunt, velit a mollis pharetra, mi lectus accumsan leo, at porta odio velit eget velit. Nullam interdum nisi id dolor suscipit, sed posuere justo vehicula."]
  }
]

const IndexPage = () => (
  <div>
    <GlobalStyle />
    <Container>
      <SEO title="Squad FAQs" keywords={[`squad`, `squad-faqs`]} />
      <Header />
      {faqs.map(faq => <FAQ faq={faq} />)}
      <Link to="/blah/">Go to blah</Link>
    </Container>
  </div>
)

export default IndexPage