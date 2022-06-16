import { remote } from 'electron'
import { search } from 'cerebro-tools'
import icon from '../icon.png'

const KEYWORDS = [
  'Contribute',
  'Source',
  'Code'
]

const subtitle = 'Contribute to Cerebro'
const onSelect = () => console.log('TODO: ADD REPO LINK')

/**
 * Plugin to open Cerebro source code
 *
 * @param  {String} options.term
 * @param  {Function} options.display
 */
const fn = ({ term, display }) => {
  const result = search(KEYWORDS, term).map(title => ({
    icon, title, subtitle, onSelect,
    term: title,
  }))
  display(result)
}

export default { fn }