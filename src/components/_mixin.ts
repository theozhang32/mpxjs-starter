export const base: {
  options?: WechatMiniprogram.Component.ComponentOptions
  externalClasses?: string[]
  properties: { [key: string]: any }
} = {
  options: {
    addGlobalClass: true,
    virtualHost: true
  },
  properties: {
    customClass: String,
    customStyle: String
  },
  externalClasses: ['ext-class']
}
