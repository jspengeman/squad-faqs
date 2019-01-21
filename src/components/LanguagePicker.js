import React from 'react'
import styled from 'styled-components'
import { transparentize, darken } from 'polished'
import { navigate } from 'gatsby'
import { PRIMARY_COLOR } from '../utils/theme'

const Container = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;

  @media (max-width: 950px) {
    position: relative;
    display: inline-block;
    float: right;
    right: 15px;
  }
`

const LanguageBox = styled.div`
  display: inline-block;
  border: 1.25px solid ${darken(0.2, PRIMARY_COLOR)};
  border-radius: 3px;
  background-color: ${transparentize(0.8, PRIMARY_COLOR)};

  padding: 5px;
  margin-left: 10px;

  &:hover {
    cursor: pointer;
  }
`

const LanguageOption = styled(LanguageBox)`
  display: ${props => (props.isOpen ? 'inline-block' : 'none')};
  &:hover {
    border-color: ${PRIMARY_COLOR};
  }
`

const Text = styled.p`
  font-size: 12px;
  font-weight: ${props => props.bold};
  margin: 0;
`

const LanguagePicker = ({
  isOpen,
  locales,
  currentLocale,
  onSelection,
  onToggleOpen,
}) => {
  return (
    <Container
      onMouseEnter={() => onToggleOpen(true)}
      onMouseLeave={() => onToggleOpen(false)}
    >
      {locales
        .filter(locale => locale.value !== currentLocale)
        .map(locale => (
          <LanguageOption
            isOpen={isOpen}
            key={locale.value}
            onClick={() => onSelection(locale.value)}
          >
            <Text> {locale.value} </Text>
          </LanguageOption>
        ))}
      <LanguageBox onClick={() => onToggleOpen(!isOpen)}>
        <Text>
          Language: <b>{currentLocale}</b>
        </Text>
      </LanguageBox>
    </Container>
  )
}

class StatefulLanguagePicker extends React.Component {
  // I wish hooks would work :(
  constructor(props) {
    super(props)
    this.state = { selection: this.props.currentLocale, isOpen: false }
    this.onSelection = this.onSelection.bind(this)
    this.onToggleOpen = this.onToggleOpen.bind(this)
  }

  onSelection(locale) {
    this.setState({ selection: locale }, () => navigate(this.state.selection))
  }

  onToggleOpen(value) {
    this.setState({ isOpen: value })
  }

  render() {
    return (
      <LanguagePicker
        isOpen={this.state.isOpen}
        locales={this.props.locales}
        currentLocale={this.state.selection}
        onSelection={this.onSelection}
        onToggleOpen={this.onToggleOpen}
      />
    )
  }
}

export default StatefulLanguagePicker
