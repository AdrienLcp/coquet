import type { Key } from 'react-aria-components'

import type { Option } from '@/Components/option'

export type BaseSelectProps <T extends Key> = {
  options: Array<Option<T>>
  label?: string
  isRequired?: boolean
  isDisabled?: boolean
  placeholder?: string
}
