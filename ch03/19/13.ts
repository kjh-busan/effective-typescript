;(() => {
  interface Product {
    id: string
    name: string
    price: number
  }

  function logProduct(product: Product) {
    const id: number = product.id
    // ~~ Type 'string' is not assignable to type 'number'
    const name: string = product.name
    const price: number = product.price
    console.log(id, name, price)
  }
  const elmo: Product = {
    name: 'Tickle Me Elmo',
    id: '048188 627152',
    price: 28.99,
  }
})()
