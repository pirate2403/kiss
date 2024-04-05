export default class LocalStorageService {
  public static get(key: string): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }
    return null;
  }

  public static set(key: string, value: string): void {
    if (typeof window !== "undefined") {
      return localStorage.setItem(key, value);
    }
  }

  public static remove(key: string): void {
    if (typeof window !== "undefined") {
      return localStorage.removeItem(key);
    }
  }
}
