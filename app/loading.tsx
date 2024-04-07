'use client'

import { Logo } from '@/Components/logo'

export const Loading: React.FC = () => (
  <div className='loader'>
    <div className='loader__logo'>
      <Logo size='large' />
    </div>
  </div>
)

export default Loading
