import { words, capitalize } from 'lodash'

export const titleize = (text) => {
  return words(text, /[^_]+/g)
    .map((word) => capitalize(word))
    .join(' ')
}
