/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_APPNAME: string;
  }
}

declare module '*.module.css' {
  const classes: Record<string, string>;
  export default classes;
}
