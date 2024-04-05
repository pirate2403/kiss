import stores from "@/businessLogic/stores";

type Stores = typeof stores;
type Store = Stores[keyof typeof stores];
type Callback = (controllers: Stores) => Store;

function useStore(cb: Callback): Store {
  return cb(stores);
}

export default useStore;
