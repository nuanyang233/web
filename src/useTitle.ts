import { isBrowser } from './util/const';

export function useTitle(title: string, wrapper?: (title: string) => string): void {
  if (isBrowser) {
    document.title = wrapper ? wrapper(title) : title;
  }
}
