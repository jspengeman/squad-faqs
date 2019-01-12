import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import language from '../images/language.svg'

const Container = styled.div`
  text-align: right;
  margin-right: 5px;
  margin-top: 5px;
`

const Image = styled.img`
  display: inline-block;
  width: 24px;
  margin-bottom: 0px;
  margin-right: 10px;
`

const Select = styled.select`
  cursor: pointer;
  margin-right: 10px;
  border: 0px;
  background: transparent;
  color: white;
  border: 1px solid white;
`

const LanguagePicker = ({ locales, currentLocale, onChange }) => {
  return (
    <Container>
      <Select onChange={onChange} value={currentLocale}>
        {locales.map(locale => (
          <option value={locale.value} key={locale.value}>
            {locale.displayName}
          </option>
        ))}
      </Select>
      <Image src={language} alt="language-selection" />
    </Container>
  )
}
class StatefulLanguagePicker extends React.Component {
  // I wish hooks would work :(
  constructor(props) {
    super(props)
    this.state = {
      selection: window.location.pathname.replace('/', ''),
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    this.setState({ selection: event.target.value }, () =>
      navigate(this.state.selection)
    )
  }

  render() {
    return (
      <LanguagePicker
        locales={this.props.locales}
        currentLocale={this.state.selection}
        onChange={this.onChange}
      />
    )
  }
}

export default StatefulLanguagePicker
