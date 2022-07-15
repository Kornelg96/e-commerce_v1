import styled from "styled-components";
import { popularProducts } from "../data/data";
import Product from "./Product";
import { useState, useEffect } from "react";
import { device, mobile } from "../responsive";

const Container = styled.div`
  max-width: 85vw;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 1fr;
  justify-items: center;
  justify-content: center;

  @media ${device.laptopL} {
    max-width: 95vw;
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media ${device.tabletS} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${mobile({
    gridTemplateColumns: "repeat(2, 1fr)",
    maxWidth: "96%",
    gridColumnGap: "8px",
    gridRowGap: "5px",
    margin: "5px auto",
  })}
`;

const Products = ({
  cat,
  sort,
  size,
  color,
  style,
  kategoria,
  podkategoria,
  index,
}) => {
  const innerWidth = window.innerWidth;
  if (innerWidth < 450) {
    const mobile = true;
  }
  const [products, setProducts] = useState(popularProducts);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setProducts(popularProducts);
      } catch (err) {}
    };
    getProducts();
  }, [cat, podkategoria, kategoria]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  useEffect(() => {
    cat && setFilteredProducts(products.filter((item) => item.cat === cat));
    kategoria &&
      setFilteredProducts(
        products.filter(
          (item) => item.cat === cat && item.kategoria === kategoria
        )
      );
      podkategoria && setFilteredProducts(products.filter((item)=>item.cat === cat && item.kategoria===kategoria && item.podkategoria===podkategoria))
  }, [cat, products, kategoria, podkategoria]);

  useEffect(() => {
    let indexx = index;
    console.log(indexx);
    size &&
      setFilteredProducts(
        products.filter(
          (item) =>
            item.sizes[index].size === size &&
            item.cat === cat &&
            item.sizes[index].quantity > 0
        )
      );
  }, [size]);

  useEffect(() => {
    color &&
      setFilteredProducts(
        products.filter(
          (item) => item.colors.includes(color) && item.cat === cat
        )
      );
      color && kategoria &&
      setFilteredProducts(
        products.filter(
          (item) => item.colors.includes(color) && item.cat === cat && item.kategoria === kategoria
        )
      );
      color && podkategoria &&
      setFilteredProducts(
        products.filter(
          (item) => item.colors.includes(color) && item.cat === cat && item.podkategoria === podkategoria
        )
      );
  }, [color]);

  useEffect(() => {
    size &&
      setFilteredProducts(
        products.filter(
          (item) =>
            item.sizes[index].size === size &&
            item.cat === cat &&
            item.sizes[index].quantity > 0 &&
            item.colors.includes(color)
        )
      );
  }, [size && color]);
  useEffect(() => {
    color &&
      setFilteredProducts(
        products.filter(
          (item) =>
            item.colors.includes(color) &&
            item.cat === cat &&
            item.sizes[index].size === size &&
            item.sizes[index].quantity > 0
        )
      );
  }, [color && size]);
  return (
    <>
      <Container style={style}>
        {filteredProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Products;
