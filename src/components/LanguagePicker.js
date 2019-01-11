import React from 'react'
import { Link } from 'gatsby'

const LanguagePicker = ({ locales }) => (
  <ul>
    {locales.map(locale => (
      <li>
        <Link to={locale.value}> {locale.displayName} </Link>
      </li>
    ))}
  </ul>
)

export default LanguagePicker
