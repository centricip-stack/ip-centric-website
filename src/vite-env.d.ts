/// <reference types="vite/client" />

declare module "*.css";

interface ImportMetaEnv {
  /** Web3Forms access key. Get a free one at https://web3forms.com */
  readonly VITE_WEB3FORMS_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
