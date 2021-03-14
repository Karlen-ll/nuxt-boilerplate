/**
 * Inject Variables in Vue, context and store.
 * @see https://nuxtjs.org/docs/2.x/directory-structure/plugins#inject-in-root--context */

/**
 * Client configuration */
const clientWidthSymbol = Symbol("CLIENT_WIDTH_SYMBOL");

const clientScreen = {
    [clientWidthSymbol]: 1280,

    get width() { return this[clientWidthSymbol]; },
    set width(value) { this[clientWidthSymbol] = value; }
};

export default ({ app }, inject) => {
  inject('clientScreen', clientScreen)
}
