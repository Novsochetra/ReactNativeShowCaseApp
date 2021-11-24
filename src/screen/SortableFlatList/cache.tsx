// TODO: can write the optimize for cache logic in this class
// instead of using raw plan new Map()
export class Cache {
  #cache;

  constructor() {
    this.#cache = new Map();
  }

  add(k: string, v: unknown): void {
    this.#cache.set(k, v);
  }

  remove(k: string): void {
    this.#cache.delete(k);
  }

  reset(): void {
    this.#cache.clear();
  }

  getItems(): Map<string, unknown> {
    return this.#cache;
  }
}
