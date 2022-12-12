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
  text: 'Learn more',
  icon: 'fas fa-arrow-right',
});

export const gh = (repo: string): DisplayLink => ({
  to: 'https://github.com/' + repo,
  newTab: true,
  icon: 'fab fa-github',
  text: 'GitHub',
});

export const ext = (text: string, url: string): DisplayLink => ({
  to: url,
  newTab: true,
  icon: 'fas fa-external-link-alt',
  text,
});

export const blog = (post: string): DisplayLink => ({
  to: 'https://dilan.blog/' + post,
  newTab: true,
  icon: 'fas fa-book-open',
  text: 'Read',
});

export interface SocialIconLink {
  icon: string;
  url: string;
}

export interface SectionLabel {
  title: string;
  subtitle?: string;
}

export interface LinkAttributes {
  href: string;
  target?: string;
  rel?: string;
}

export const linkAttributes = (to: string): LinkAttributes => {
  if (to.startsWith('https://') || to.startsWith('http://')) {
    return {
      href: to,
      target: '_blank',
      rel: 'noreferrer',
    };
  }
  return {
    href: to,
  };
};
