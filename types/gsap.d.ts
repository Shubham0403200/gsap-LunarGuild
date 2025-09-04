declare module "gsap/SplitText" {
  export default class SplitText {
    constructor(target: gsap.TweenTarget, vars?: { type?: string });
    words: HTMLElement[];
    chars: HTMLElement[];
    lines: HTMLElement[];
  }
}
