import { all } from "redux-saga/effects";
import maincategorySaga from "./MaincategorySaga";
import subcategorySaga from "./SubcategorySaga";
import brandSaga from "./BrandSaga";
import productSaga from "./ProductSaga";
import testimonialSaga from "./TestimonialSaga";
import cartSaga from "./CartSaga";
import wishlistSaga from "./WishlistSaga";
import checkoutSaga from "./CheckoutSaga"
import contactusSaga from "./ContactusSaga"
import newsletterSaga from "./NewsletterSaga"


export default function* RootSaga() {
  yield all([
    maincategorySaga(),
    subcategorySaga(),
    brandSaga(),
    productSaga(),
    testimonialSaga(),
    cartSaga(),
    wishlistSaga(),
    checkoutSaga(),
    contactusSaga(),
    newsletterSaga()

  ]);
}
