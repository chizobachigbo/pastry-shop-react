import ShopPastry from "../components/ShopPastry";

export default function Shop({
  cartSelection,
  setCartSelection,
  wishlistSelection,
  setWishlistSelection,
}) {
  return (

    <div>
      <ShopPastry 
      cartSelection={cartSelection}
      setCartSelection={setCartSelection}
      wishlistSelection={wishlistSelection}
      setWishlistSelection={setWishlistSelection}
      />
    </div>
  );
}
