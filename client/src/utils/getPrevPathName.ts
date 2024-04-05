import { ROUTES } from "@/businessLogic/constants/routes";
import { transformPathNameToChunks } from "@/utils/transformPathNameToChunks";

export function getPrevPathName(pathname: string): string {
  try {
    if (pathname === ROUTES.main) return pathname;
    const chunks = transformPathNameToChunks(pathname).slice(0, -1);

    return chunks.join("/") || ROUTES.main;
  } catch {
    return ROUTES.main;
  }
}
