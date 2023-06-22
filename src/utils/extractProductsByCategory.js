import data from './../data/brands.json'

function extractProductsByCategory(category) {
    const products = []
    for (const brand of data.brands) {
        if (brand.category === category && !products.includes(brand.product)) {
            products.push(brand.product)
        }
    }
    
    return products
}

export default extractProductsByCategory