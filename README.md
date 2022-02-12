
## Learning about integrating web application with [`Razorpay`](https://razorpay.com/)

> Accept payment from sources like **UPI/Credit Cards/ Debit Cards/ Netbanking and other resources...**



## [`1: Getting Razorpay API key's`](https://razorpay.com/docs/payments/dashboard/settings/api-keys/)

 

 - Head towards [`Razorpay`](https://razorpay.com/docs/payments/dashboard/settings/api-keys/) website and get you free keys...
 - After getting your CODE EDITOR on with a [`npx create-react-app`](https://reactjs.org/docs/create-a-new-react-app.html) /  [`npx create-next-app`](https://nextjs.org/docs/api-reference/create-next-app)
- Next head toward's your root key folder on client side which may be app.js/ index.js.
- And now simple make a `button` with any amount and make a  `onClick function`  to linking to function


`JSX`
```javascript
<button onClick={()=>(displayRazorpay)}>Buy now for ₹500 <button>
```

- as it is displaying razorpay it's displayRazorpay function is called.

```javascript
const displayRazorpay = async () => {}
```

-above this we have to make a function which which will call razorpay's
```javascript
<script><script>
```
```javascript

const loadScript = (src) =>{
  return  new Promise((resolve, reject) =>{
    const script = document.createElement('script')
    console.log(script)
    script.src = src
    script.onload = () => resolve(true)
    script.onerror = () => reject(false)

    document.body.appendChild(script)
  })
}

```

```javascript
  const displayRazorpay = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    const options={
      key: YOUR_KEY, {'//todo: Make sure to change this. and put your own test / Production key's'}
      currency: 'INR',
      amount: 1*100,
      name: 'Abhay"s Razorpay',
      description: 'Abhay"s Razorpay"',
      handler: function(response){
        return alert(response.razorpay_payment_id),
        alert("Payment succesfull")
      },
      prefill: {
        name: 'Abhay',

      }
    }
    const  paymenobje = new window.Razorpay(options)
    paymenobje.open()
  }

```

**Done with final payment now you can now you can Accept payment but there more**
