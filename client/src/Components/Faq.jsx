import React from "react";
import { Link } from "react-router-dom";

export default function Faq() {
  return (
    <>
      {/* <!-- Single Page Header start --> */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">Contact</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <Link to="/">Home  /</Link>
          </li>

          <li className="breadcrumb-item active text-white">FAQ's</li>
        </ol>
      </div>
      {/* <!-- Single Page Header End --> */}
      <div className="container-fluid mar">
        <div>
          <h2>Top Queries</h2>
          <p>You can track your orders in 'My Orders.</p>
          <hr />
          <p className=" tb">
            Why are there different prices for the same product? Is it legal?{" "}
          </p>
          <p className=" tb">
            I saw the product at Rs. 1000 but post clicking on the product,
            there are multiple prices and <br />
            the size which I want is being sold for Rs. 1600. Why is there a
            change in price in the product description page?
          </p>
          <p className=" tb">
            {" "}
            How will I detect fraudulent emails/calls seeking sensitive personal
            and confidential information?{" "}
          </p>
          <p className=" tb">
            {" "}
            How will I identify a genuine appointment letter?{" "}
          </p>
          <p className=" tb">
            {" "}
            Why will 'My Cashback' not be available on E-Krt?
          </p>
          <p className=" tb">
            {" "}
            How do I cancel the order, I have placed? How do I create a Return
            Request?{" "}
          </p>
          <p className=" tb">
            I have created a Return request. When will the product be picked up?{" "}
          </p>
          <p className=" tb">
            I have created a Return request. When will I get the refund?{" "}
          </p>
          <p className=" tb">Where should I self-ship the Returns? </p>
          <p className=" tb">
            I have accumulated E-Krt Points in my account. How can I redeem
            them?
          </p>
          <h2> Terms and Conditions</h2>
          <p> You can view the Terms and Conditions here.</p>
          <hr />
          <br />
          <br />
          <br />
          <h3>Social Carnival Event</h3>
          <p className=" tb"> What is E-Krt Social Carnival? </p>
          <p className=" tb">
            {" "}
            What is E-Krt Studio, and how can I shop through E-Krt Studio ?{" "}
          </p>
          <p className=" tb">
            {" "}
            What is E-Krt Live, and how do I shop through E-Krt Live?{" "}
          </p>
          <p className=" tb">
            How can you sign up to be an influencer on E-Krt Studio or E-Krt
            Live?{" "}
          </p>
          <p className=" tb">
            How do I redeem the MLive Coupons which I saw Influencers calling
            out in live streaming?
          </p>
          <h2>Shipping, Order Tracking & Delivery </h2>
          <p> You can track your orders in MyE-Krt</p>
          <hr />
          <p className=" tb">What is E-Krt's Platform Fee? </p>
          <p className=" tb">
            Refund of Platform Fee What is E-Krt's Shipping Fee? Refund of
            Shipping Fee What is Myntra’s Fair Usage Policy?{" "}
          </p>
          <p className=" tb">
            {" "}
            I am an Insider. Why am I seeing the shipping fee?{" "}
          </p>
          <p className=" tb">How do I check the status of my order? </p>
          <p className=" tb">
            How can I check if E-Krt delivers to my PIN Code? How are orders
            placed on E-Krt delivered to me?{" "}
          </p>
          <p className=" tb">Does E-Krt deliver products outside India? </p>
          <p className=" tb">How can I get my order delivered faster? </p>
          <p className=" tb">
            I have received a partial item/partial order or an Untenanted/Void
            packet?
          </p>
          <h2> Cancellations and Modifications</h2>
          <p> You can cancel your orders under MyE-Krt</p>
          <p className=" tb"> What is E-Krt's Cancellation Policy? </p>
          <p className=" tb">
            Can I modify the shipping address of my order after it has been
            placed?{" "}
          </p>
          <p className=" tb">How do I cancel my Order? </p>
          <p className=" tb">
            I just cancelled my order. When will I receive my refund?
          </p>
          <h2>Returns and Exchange</h2>
          <p>You can return/exchange your orders in MyE-Krt</p>
          <p className=" tb">What is E-Krt's Return and Exchange Policy? </p>
          <p className=" tb">How does it work? </p>
          <p className=" tb">
            To return a product to E-Krt, please follow these steps:{" "}
          </p>
          <p className=" tb">
            How do I place an exchange request on E-Krt? What is No Questions
            Asked Returns?{" "}
          </p>
          <p className=" tb">
            Why has my return been put on hold despite No Questions Asked
            Returns Policy?{" "}
          </p>
          <p className=" tb">
            {" "}
            What is Instant Refunds? Why have I not received my Refund despite
            Instant Refunds policy?{" "}
          </p>
          <p className=" tb">
            {" "}
            How long would it take me to receive the refund of the returned
            product?{" "}
          </p>
          <p className=" tb">
            How do I return multiple products from a single order?{" "}
          </p>
          <p className=" tb">
            Does E-Krt pick up the product I want to return from my location?{" "}
          </p>
          <p className=" tb"> How can I Self-Ship the product to E-Krt? </p>
          <p className=" tb">Where should I self-ship the Returns? </p>
          <p className=" tb"> Why has my return request been declined? </p>
          <p className=" tb">
            Why did the pick up of my product fail? Why is my returned product
            re-shipped?{" "}
          </p>
          <h2>Sign Up and Login </h2>
          <p className=" tb">How do I create an account on E-Krt?</p>
          <p className=" tb">
            {" "}
            How do I login on E-Krt? I used to login with email, Google/Facebook
            login.
          </p>
          <p className=" tb">
            {" "}
            Why am I asked for password after entering OTP while trying to
            login?{" "}
          </p>
          <p className=" tb"> Can I still login with password on E-Krt? </p>
          <p className=" tb">
            What if I don't receive an OTP due to poor network connectivity?
            What is an alternate mobile number?{" "}
          </p>
          <p className=" tb">
            {" "}
            Why does E-Krt ask for it? Do I need to provide email to create an
            account on E-Krt?{" "}
          </p>
          <p className=" tb">
            I have given my mobile number in my last order?{" "}
          </p>
          <p className=" tb">
            {" "}
            Can I use that number to log in to E-Krt? What is account recovery
            on E-Krt?{" "}
          </p>
          <p className=" tb">
            Why am I asked for my credit card details to access my account?{" "}
          </p>
          <p className=" tb">
            {" "}
            What happens if my mobile number is given to someone else by the
            telecom operator. Is my E-Krt account still safe?
          </p>{" "}
          <p className=" tb">
            How can i change my mobile number that I use to login on E-Krt?
          </p>
          <p className=" tb">I do not have my old mobile number?</p>
          <p className=" tb">
            How can I log into my account and change mobile number?
          </p>
          <p className=" tb">Does E-Krt read my SMSes?</p>
          <p className=" tb">Why is my account locked?</p>
          <h2> Payments </h2>
          <p> You can check refund status of your returns in MyMyntra</p>
          <hr />
          <p className=" tb">How can I pay for my order at E-Krt?</p>
          <p className=" tb">
            How does the COD (Cash on Delivery) payment option work?
          </p>
          <p className=" tb">
            Does E-Krt accept Rs. 2,000 currency notes for Cash on Delivery
            (COD) payments?
          </p>
          <p className=" tb">
            I have placed a Cash on Delivery (COD) order and intended to pay
            with Rs. 2,000 notes, but the Delivery Associate is not accepting
            them. What should I do in this situation?
          </p>
          <p className=" tb">
            Why can't I see the COD option on my payment page?
          </p>
          <p className=" tb">What is COD limit?</p>
          <p className=" tb">
            I want to know about EMI (credit card) payment option?
          </p>
          <p className=" tb">
            How do I make payment using EMI (Credit Card) option?
          </p>
          <p className=" tb">
            What is the eligibility criteria to avail EMI option?
          </p>
          <p className=" tb">
            Why is sum total of EMI’s more than the order value?
          </p>
          <p className=" tb">What happens if bank rejects EMI conversion?</p>
          <p className=" tb">
            Why is the transaction amount not converted into EMI in 7 working
            days?
          </p>
          <p className=" tb">What should I do if my payment fails?</p>
          <p className=" tb">
            I am being charged GST amount on my order. What is GST?
          </p>
          <p className=" tb">How is the GST amount decided?</p>
          <p className=" tb">
            If I return/cancel the purchased product will the GST/VAT amount
            charged be refunded?
          </p>
          <h2>E-Krt Credit </h2>
          <br />
          <p className=" tb">How can I add money into E-Krt Credit?</p>
          <p className=" tb">
            What Payment Methods can I use to top up my E-Krt Credit?
          </p>
          <p className=" tb">How much money can I add in my E-Krt Credit?</p>
          <p className=" tb">How do I check balance in my E-Krt Credit?</p>
          <p className=" tb">
            How do I use E-Krt Credit to buy items on E-Krt App/Website?
          </p>
          <p className=" tb">Can I redeem E-Krt Credit to Cash?</p>
          <p className=" tb">
            Can I buy items on other e-commerce websites with E-Krt Credit?
          </p>
          <p className=" tb">
            Do I need to have an account on E-Krt App/Website to use E-Krt
            Credit?
          </p>
          <p className=" tb">
            Can I transfer my E-Krt Credits to another E-Krt Account?
          </p>
          <p className=" tb">
            Can my E-Krt Credit account be suspended/closed?
          </p>
          <p className=" tb">
            What happens to my E-Krt Credit if I Uninstall the E-Krt App?
          </p>
          <p className=" tb">
            What happens to my E-Krt Credit if I am not able to access my E-Krt
            Account?
          </p>
          <p className=" tb">
            What happens to my E-Krt Credit if I don’t use E-Krt App for over 1
            year?
          </p>
          <p className=" tb">
            What happens if someone uses E-Krt Credit from my E-Krt account
            without my permission?
          </p>
          <p className=" tb">
            What happens if I return the Items which I have bought with E-Krt
            Credit?
          </p>
          <p className=" tb">
            Can I pay for an Item partially from E-Krt Credit and Partially from
            other payment options?
          </p>
          <p className=" tb">
            {" "}
            Can I decide the amount which I can pay from the E-Krt Credit and
            the rest from other payment options?
          </p>
          <p className=" tb">
            Can I decide to not pay through E-Krt Credit, even though I might
            have amount available?
          </p>
          <p className=" tb">
            Is there any maintenance charge for keeping E-Krt Credit?
          </p>
          <p className=" tb">What is the maximum validity of E-Krt Credit?</p>
          <p className=" tb">
            Is there any minimum amount to be maintained in E-Krt Credit
            Account?
          </p>
          <p className=" tb">
            What are the benefits of taking refund to E-Krt Credit?
          </p>
          <h2>Coupons and “My Cashback” </h2>
          <p>You can access your coupons and “My Cashback” in MyMyntra</p>
          <hr />
          <br />
          <br />
          <p className=" tb">How do I apply a coupon on my order?</p>
          <p className=" tb">
            Why will 'My Cashback' not be available on E-Krt?
          </p>
          <p className=" tb">
            How can I access 'My Cashback' balance transferred to PhonePe
            wallet?
          </p>
          <p className=" tb">
            As 'My cashback' is no more a payment option, what will happen to
            'My Cashback' balance?
          </p>
          <p className=" tb">
            I have not received ‘My Cashback’ balance into the PhonePe wallet,
            what should I do?
          </p>
          <p className=" tb">
            I was given a coupon when you cancelled my last order. How can I use
            it?
          </p>
          <p className=" tb">What is discount capping on coupons?</p>
          <p className=" tb">
            I have accumulated E-Krt Points in my account. How can I redeem
            them?
          </p>
          <br />
          <h2> PhonePe Wallet </h2>
          <hr />
          <br />
          <p className=" tb">What is PhonePe wallet?</p>
          <p className=" tb">
            Do I need to have a PhonePe account to shop on E-Krt?
          </p>
          <p className=" tb">
            What will happen to my money, if an order placed using PhonePe
            wallet fails or is rejected?
          </p>
          <p className=" tb">
            I am a PhonePe user, how can I link my PhonePe account on E-Krt?
          </p>
          <p className=" tb">
            Can I link multiple E-Krt accounts to the same PhonePe account?
          </p>
          <p className=" tb">
            What is the maximum balance that I can have in PhonePe wallet and
            How do I check my balance?
          </p>
          <p className=" tb">
            How can I transfer PhonePe wallet balance to my bank account?
          </p>
          <p className=" tb">How do I use PhonePe wallet to make a payment?</p>
          <p className=" tb">
            How soon will refund reflect in PhonePe wallet post order
            cancellation/return?
          </p>
          <p className=" tb">
            What happens when I return an item purchased using the PhonePe
            wallet?
          </p>
          <br />
          <h2> Gift Cards</h2>
          <hr />
          <br />
          <p className=" tb">How can I purchase E-Krt Gift Card?</p>
          <p className=" tb">
            I just received a E-Krt Gift Card. How do I use it?
          </p>
          <p className=" tb">
            How do I check the available balance or expiry date on my Gift Card?
          </p>
          <p className=" tb">
            What should I do if, I have not received the e-mail that had Gift
            Card details?
          </p>
          <p className=" tb">Does E-Krt Gift Cards expire?</p>
          <p className=" tb">
            When is the E-Krt issued Gift Card sent to the recipient?
          </p>
          <p className=" tb">
            What can my Gift Card not be used for or to purchase?
          </p>
          <p className=" tb">How do I cancel a Gift Card?</p>
          <p className=" tb">
            What exactly does the recipient receive when I send a E-Krt issued
            Gift Card?
          </p>
          <p className=" tb">
            What can I do to ensure that the Gift Card is delivered to the
            recipient?
          </p>
          <p className=" tb">
            What happens if I need to return something I purchased with my Gift
            Card?
          </p>
          <p className=" tb">Who is the issuer of E-Krt Gift Cards?</p>
          <p className=" tb">
            How many Gift Cards can be used in one transaction?
          </p>
          <br />
          <h2> Gift Wrapping</h2>
          <hr />
          <br />
          <p className=" tb">Can I use E-Krt to send gifts to others?</p>
          <p className=" tb">
            What payment methods can I use to pay for a gift order?
          </p>
          <p className=" tb">
            Will the pricing, discount and payment information be displayed on
            the package sent to the recipient?
          </p>
          <p className=" tb">
            Can I apply a coupon or discount on the gift wrapping charge?
          </p>
          <br />
          <h2>E-mail verification policy </h2>
          <hr />
          <br />
          <p className=" tb">What is E-Krt's E-mail verification policy?</p>
          <br />
          <h2>Donations</h2>
          <hr />
          <br />
          <p className=" tb">How will the donation amount be used?</p>
          <p className=" tb">How much amount can I donate?</p>
          <p className=" tb">Shall I get a receipt for the donation amount?</p>
          <p className=" tb">Can the donation amount be refunded?</p>
          <p className=" tb">
            Can I make a donation in a Cash On Delivery Order?
          </p>
          <p className=" tb">Do I have to submit my PAN?</p>
          <p className=" tb">
            Where can I see the FAQs, T&Cs and Privacy Policy of GiveIndia?
          </p>
          <br />
          <h2>Enable Ecom Transactions</h2>
          <hr />
          <br />
          <p className=" tb">How to unblock my SBI Bank Credit Card?</p>
          <p className=" tb">How to unblock my SBI Bank Debit Card?</p>
          <p className=" tb">How to unblock my ICICI Bank Debit Card?</p>
          <p className=" tb">How to unblock my ICICI Bank Credit Card?</p>
          <p className=" tb">How to unblock my Axis Bank Credit Card?</p>
          <p className=" tb">How to unblock my Axis Bank Debit Card?</p>
          <p className=" tb">How to unblock my HDFC Bank Credit Card?</p>
          <br />
          <h2>Card Tokenization</h2>
          <hr />
          <br />
          <p className=" tb">What are the new RBI guidelines?</p>
          <p className=" tb">What does this mean to me as a E-Krt customer?</p>
          <p className=" tb">
            Does this mean I have to enter my card details everytime I transact
            on E-Krt?
          </p>
          <p className=" tb">What is tokenization?</p>
          <p className=" tb">What is the benefit of tokenization?</p>
          <p className=" tb">What happens if I don't tokenize my card?</p>
          <p className=" tb">
            Do I need to tokenize every card I have separately?
          </p>
          <p className=" tb">
            I have already tokenized my card on another website/platform. Do I
            still need to tokenize on E-Krt?
          </p>
          <p className=" tb">What is de-tokenization?</p>
          <br />
          <h2>E-Krt Kotak Credit Card </h2>
          <hr />
          <br />
          <p className=" tb">
            What are the benefits a cardholder can avail on E-Krt Kotak Bank
            Credit Card?
          </p>
          <p className=" tb">
            Is there any capping or limit on instant discounts on E-Krt?
          </p>
          <p className=" tb">
            Is there any capping or limit on instant cashbacks on Preferred
            Partners?
          </p>
          <p className=" tb">
            Is 1.25% cashback applicable on all other spends?
          </p>
          <p className=" tb">
            Are there any Joining and/or Annual Fees associated with the E-Krt x
            Kotak Bank Credit Card?
          </p>
          <p className=" tb">What are `Preferred Partners`?</p>
          <p className=" tb">
            What are the Activation Benefits associated with E-Krt x Kotak Bank
            Credit Card?
          </p>
          <p className=" tb">
            How will the customer receive the E-Krt e-Gift Voucher?
          </p>
          <p className=" tb">
            Are there any milestones benefits that cardholders get with E-Krt x
            Kotak Bank Co-branded Credit Card?
          </p>
          <p className=" tb">
            How will the cardholder receive the instant discounts and cashback
            earned on transactions?
          </p>
          <p className=" tb">Are any transactions excluded from cashback?</p>
          <p className=" tb">How can I apply my card?</p>
          <p className=" tb">What is E-Krt Insider Program?</p>
          <p className=" tb">Is there any fuel surcharge waiver?</p>
          <p className=" tb">Who can apply for this card?</p>
          <br />
          <h2>Instant Cashback Recovery </h2>
          <hr />
          <br />
          <p className=" tb">What is Instant Cashback?</p>
          <p className=" tb">What is Instant Cashback Recovery?</p>
          <p className=" tb">
            Why are you deducting this amount from my refund?
          </p>
          <p className=" tb">
            Why are you deducting only when I transfer to source & not to E-Krt
            Credits?
          </p>
          <p className=" tb">
            Why has the item value been changed in my order?
          </p>
          <br />
          <h2>Fine Jewellery</h2>
          <hr />
          <br />
          <p className=" tb">
            What is the timeframe for returning a Fine Jewellery product?
          </p>
          <p className=" tb">
            What is the procedure for returning a Fine Jewellery product?
          </p>
          <p className=" tb">
            When will I get my refund after returning my Fine Jewellery product?
          </p>
          <p className=" tb">
            Which packaging material will be used for the product's delivery?
          </p>
          <p className=" tb">
            How is the selling price of the product determined?
          </p>
          <p className=" tb">How do I know this is a genuine product?</p>
          <br />
          <h2>Open Box Delivery</h2>
          <hr />
          <br />
          <p className=" tb">What is Open Box Delivery?</p>
          <p className=" tb">Is this Service available everywhere?</p>
          <p className=" tb">Is Open box delivery a free service?</p>
          <p className=" tb">In the case of COD, when should I make payment?</p>
          <p className=" tb">Before or After Open Box Delivery?</p>
          <p className=" tb">
            What will happen if the product is found to be missing/damaged/wrong
            (Completely different from what I ordered) at the time of the
            delivery?
          </p>
          <p className=" tb">
            Can I try the product to check size and fit issue?
          </p>
          <p className=" tb">
            Can I get a replacement instead of a refund in case of wrong/
            damaged/ Missing product is found at the time of delivery?
          </p>
          <p className=" tb">
            What if I found that my product is wrong/damaged or a component is
            missing after delivery will I have an option to return the product?
          </p>
          <p className=" tb">
            For Electronics what if the device is not working?
          </p>
          <p>You can get in touch with us for such issues.</p>
        </div>
      </div>
    </>
  );
}
