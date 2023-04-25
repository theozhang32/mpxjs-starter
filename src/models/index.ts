import { immerable } from 'immer'
import { Template } from './Template'

// 类的immer化
;[Template].forEach((cls) => {
  cls[immerable] = true
})

export {
  Template
}
