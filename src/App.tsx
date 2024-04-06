import "./App.css";
import Product from "./components/Product";
import { useState, useEffect } from "react";
import { Flex } from "antd";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products);
        setProducts(data.products);
      });
  }, []);

  return (
    <Flex wrap="wrap" justify="space-evenly">
      {products.length > 0
        ? products.map((product) => (
            <Product
              price={product.price}
              rating={product.rating}
              thumbnail={product.thumbnail}
              title={product.title}
            />
          ))
        : "No products available."}
    </Flex>
  );
}

export default App;
