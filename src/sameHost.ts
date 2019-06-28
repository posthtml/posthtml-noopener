function sameHost(href: string) {
  return href.startsWith('.') || href.startsWith('/');
}

export { sameHost };
