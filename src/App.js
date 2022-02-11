import logo from './logo.svg';
import './App.css';


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


function App() {
  const displayRazorpay = async () => {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    const options={
      key: 'rzp_test_vRW5Wib4O9lvaa',
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

  return (
    <div className="App">
      
      <h1>
        Lorem, ipsum dolor.
      </h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus tenetur, dolorem impedit aliquid, minima sequi eveniet quisquam amet, eos nisi facilis repellat. Molestiae fuga facere dolorem, aut blanditiis similique expedita?</p>
      <button id='rzp-button1' onClick={()=>{return displayRazorpay()}} >
            ₹230
      </button>
      <main>

        
      </main>
    </div>
  );
}

export default App;
