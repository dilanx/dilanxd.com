// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Locals {}
  // interface Platform {}
  // interface PrivateEnv {}
  // interface PublicEnv {}
  // interface Session {}
  // interface Stuff {}
}

declare type O<T> = T | undefined;

declare interface LinkData {
  to: string;
  text: string;
  icon?: string;
}

declare namespace KB {
  interface Article {
    id: string;
    title: string;
  }

  interface Category {
    category: string;
    col: number;
    articles: Article[];
  }

  interface Outline {
    kb: Category[];
  }
}
