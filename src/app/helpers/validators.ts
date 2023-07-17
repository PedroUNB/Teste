/* eslint-disable @typescript-eslint/no-explicit-any */
export const existsOrError = (value: any, msg: string) => {
  if (!value) throw msg;
  if (Array.isArray(value) && value.length === 0) throw msg;
  if (typeof value === 'string' && !value.trim()) throw msg;
};

export const notExistsOrError = (value: any, msg: string) => {
  if (value) throw msg;
  if (Array.isArray(value) && value.length !== 0) throw msg;
  if (typeof value === 'string' && value.trim()) throw msg;
};
