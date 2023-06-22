import React from 'react'
import data from './../../data/brands.json'
import './Chart.css'
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts'
import { Tooltip } from 'react-bootstrap'

const getBrandData = (brandName) => {
  const brand = data.brands.find((brand) => brand.name === brandName)
  if (brand) {
    const brandData = Object.entries(brand.sales).map(([month, sales]) => ({
      month,
      sales,
    }))
    return brandData
  }
  return []
}

function Chart({ selectedBrand }) {
  return (
    <section className='chart'>
      <BarChart width={600} height={400} data={getBrandData(selectedBrand)}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='month' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey='sales' fill='#8884d8' name={selectedBrand} />
      </BarChart>
    </section>
  )
}

export default Chart
