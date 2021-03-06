
export const makePackosphereLink = (packageName: string): string => {
  const path = packageName.includes(':') ? packageName.replace(':', '/') : `meteor/${packageName}`;
  return `https://packosphere.com/${path}`;
};

export const getAgeInYears = (date: Date | undefined): number => {
  if (typeof date !== 'undefined') {
    const diff = new Date(Date.now() - date.getTime());

    return diff.getUTCFullYear() - 1970;
  }
  return 0;
};
