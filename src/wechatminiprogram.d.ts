/// <reference types="miniprogram-api-typings" />

declare namespace WechatMiniprogram {
  /** 自定义事件 */
  interface CustomEventWithAnyDetail<
    Detail = any,
    Mark extends IAnyObject = IAnyObject,
    CurrentTargetDataset extends IAnyObject = IAnyObject,
    TargetDataset extends IAnyObject = CurrentTargetDataset
  > extends BaseEvent<Mark, CurrentTargetDataset, TargetDataset> {
    /** 额外的信息 */
    detail: Detail
  }
}
