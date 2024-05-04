class LocalStorageService {
  public get(key: string): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }
    return null;
  }

  public set(key: string, value: string): void {
    if (typeof window !== "undefined") {
      return localStorage.setItem(key, value);
    }
  }

  public remove(key: string): void {
    if (typeof window !== "undefined") {
      return localStorage.removeItem(key);
    }
  }
}

const localStorageService = new LocalStorageService();
export default localStorageService;
