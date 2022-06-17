import { search } from 'cerebro-tools'
import icon from '../icon.png'

const KEYWORDS = [
  'Contribute',
  'Source',
]

const subtitle = 'Contribute to Cerebro'

/**
 * Plugin to open Cerebro source code
 *
 * @param  {String} options.term
 * @param  {Function} options.display
 * @param  {Object} options.actions
 */
const fn = ({ term, display, actions }) => {
  const onSelect = function () { 
    actions.open(`https://github.com/cerebroapp/cerebro`); 
  }

  const result = search(KEYWORDS, term).map(title => ({
    icon, 
    title, 
    subtitle, 
    onSelect,
    term: title,
  }))

  display(result)
}

export default { fn }