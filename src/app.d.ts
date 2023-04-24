export {}

declare global {
  type Dictionary<T = any> = { [key: string]: T }
  const __wxConfig: {
    envVersion: 'release' | 'trial' | 'develop'
  }
  const __APP_ID__: string
}
