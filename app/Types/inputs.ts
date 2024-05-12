import type { Key } from 'react-aria-components'

import type { Option } from '@/Components/option'

export type BaseSelectProps <T extends Key> = {
  className?: string
  label?: string
  options: Array<Option<T>>
  placeholder?: string
}
