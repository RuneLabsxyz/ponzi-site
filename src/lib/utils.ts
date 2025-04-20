import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import data from '$lib/data.json';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const tokens = data.availableTokens.reduce((acc: { [key: string]: typeof token }, token) => {
  acc[token.symbol] = token;
  return acc;
}, {} as { [key: string]: typeof data.availableTokens[0] });