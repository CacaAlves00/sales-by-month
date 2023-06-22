import data from './../data/brands.json'

function extractBrandsByProduct(product) {
    const brands = []
    for (const brand of data.brands) {
        if (brand.product === product) {
            brands.push(brand.name)
        }
    }

    return brands
}

export default extractBrandsByProduct