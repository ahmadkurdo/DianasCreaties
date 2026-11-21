/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SANITY_PROJECT_ID?: string
  readonly VITE_SANITY_DATASET?: string
}

declare module '*.module.scss' {
  const styles: Record<string, string>
  export default styles
}
