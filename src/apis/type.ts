export interface BusiResponse<T> {
  ret: 0 | 1,
  msg: string,
  errorcode: number,
  data?: T
}
