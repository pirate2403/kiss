export default function checkClientSideRender(): boolean {
  if (typeof window !== "undefined") {
    return true;
  }
  return false;
}
