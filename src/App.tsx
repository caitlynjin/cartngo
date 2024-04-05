import './App.css'
import Product from './components/Product'
import { Flex } from "antd";

function App() {
  return (
    <Flex wrap="wrap" justify="space-evenly">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </Flex>
  )
}

export default App
