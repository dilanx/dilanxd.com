export interface DisplayLink {
  to: string;
  newTab?: boolean;
  icon?: string;
  sublink?: boolean;
  text: string;
}

export interface DisplayLabel {
  to?: string;
  image: string;
  alt: string;
}

export const lm = (route: string): DisplayLink => ({
  to: route,
  text: 'Learn More',
  icon: 'fas fa-arrow-right',
});

export const gh = (repo: string): DisplayLink => ({
  to: 'https://github.com/' + repo,
  newTab: true,
  icon: 'fab fa-github',
  text: 'View on GitHub',
});

export const ext = (text: string, url: string): DisplayLink => ({
  to: url,
  newTab: true,
  icon: 'fas fa-external-link-alt',
  text,
});

export interface SocialIconLink {
  icon: string;
  url: string;
}

export interface SectionLabel {
  title: string;
  subtitle?: string;
}

export interface ContinueLink {
  to: string;
  text: string;
  icon?: string;
}

export type Ostring = string | undefined;
