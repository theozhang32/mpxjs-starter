export class Template {
  name: string
  constructor(n: string) {
    this.name = n
  }

  showMyName() {
    console.log(this.name)
  }
}
