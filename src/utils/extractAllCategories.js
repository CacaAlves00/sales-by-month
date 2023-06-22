function extractAllCategories() {
  const categories = []
  for (const brand of data.brands) {
    if (!categories.includes(brand.category)) {
      categories.push(brand.category)
    }
  }
  return categories
}

export default extractAllCategories