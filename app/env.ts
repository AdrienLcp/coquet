import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    FORM_SPREE_KEY: z.string()
  },
  experimental__runtimeEnv: {}
})
