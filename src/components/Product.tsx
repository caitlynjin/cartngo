import "../App.css";
import { Rate } from "antd";

interface Props {
  price: number;
  rating: number;
  thumbnail: string;
  title: string;
}

const Product = ({ price, rating, thumbnail, title }: Props) => {
  return (
    <div className="product">
      <div
        style={{
          backgroundColor: "#F2F2F2",
          height: 200,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={thumbnail}
          alt="image"
          style={{ maxWidth: 188, maxHeight: 188, padding: 16 }}
        />
      </div>
      <h3 style={{ marginTop: 4, marginBottom: 0 }}>{title}</h3>
      <h4 style={{ marginTop: 0, marginBottom: 0,  color: "#52AB98" }}>${price}</h4>
      <Rate allowHalf disabled defaultValue={rating} style={{ fontSize: 16 }} />
    </div>
  );
};

export default Product;
