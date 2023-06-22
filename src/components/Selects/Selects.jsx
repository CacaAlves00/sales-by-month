import React, { useEffect, useState } from 'react'
import './Selects.css'
import { Form } from 'react-bootstrap'
import extractBrandsByProduct from '../../utils/extractBrandsByProduct'
import extractAllCategories from '../../utils/extractAllCategories'
import extractProductsByCategory from '../../utils/extractProductsByCategory'

function Selects({ selectedBrand, setSelectedBrand }) {
  const [selectedProduct, setSelectedProduct] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const [categories, setCategories] = useState(extractAllCategories())
  const [products, setProducts] = useState(extractProductsByCategory(selectedCategory))
  const [brands, setBrands] = useState(extractBrandsByProduct(selectedProduct))

  useEffect(() => {
    setSelectedCategory(categories[0])
  }, [categories])

  useEffect(() => {
    setProducts(extractProductsByCategory(selectedCategory))
  }, [selectedCategory])

  useEffect(() => {
    setSelectedProduct(products[0])
  }, [products])

  useEffect(() => {
    setBrands(extractBrandsByProduct(selectedProduct))
  }, [selectedProduct])

  useEffect(() => {
    setSelectedBrand(brands[0])
  }, [brands])

  const handleCategoryChange = (e) => {
    const category = e.target.value
    setSelectedCategory(category)
  }

  const handleProductChange = (e) => {
    const product = e.target.value
    setSelectedProduct(product)
  }

  return (
    <section className='selects'>
      <Form.Select aria-label='Categorias' onChange={handleCategoryChange}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </Form.Select>

      <Form.Select aria-label='Produtos' onChange={handleProductChange}>
        {products.map((prod) => (
          <option key={prod} value={prod}>
            {prod}
          </option>
        ))}
      </Form.Select>

      <Form.Select
        aria-label='Marcas'
        value={selectedBrand}
        onChange={(e) => setSelectedBrand(e.target.value)}
      >
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </Form.Select>
    </section>
  )
}

export default Selects
