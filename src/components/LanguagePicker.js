import React from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import language from '../images/language.svg'

const Container = styled.div`
  text-align: right;
  margin-right: 10px;
  margin-top: 10px;
`

const Image = styled.img`
  display: inline-block;
  height: 32px;
  margin-bottom: -10px;
`

const Select = styled.select`
  cursor: pointer;
  margin-right: 10px;
  background: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
  min-width: 90px;
`

const LanguagePicker = ({ locales, currentLocale, onChange }) => {
  return (
    <Container>
      <Select
        onChange={onChange}
        value={currentLocale}
        aria-label="language selection"
      >
        {locales.map(locale => (
          <option value={locale.value} key={locale.value}>
            {locale.displayName}
          </option>
        ))}
      </Select>
      <Image src={language} alt="language selection image" />
    </Container>
  )
}
class StatefulLanguagePicker extends React.Component {
  // I wish hooks would work :(
  constructor(props) {
    super(props)
    this.state = { selection: '' }
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    this.setState({ selection: window.location.pathname.replace(/\//g, '') })
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
