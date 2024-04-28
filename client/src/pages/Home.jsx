import Navbar from './../components/Navbar'
import Bottle from "./../assets/img/bottle_img.jpg"
import Footer from '../components/Footer'

function Herosection() {
  return (
    <main>
      <section>
        <Navbar />
      </section>
      <section className='flex justify-center align-middle my-14'>
        <div className="w-[90vw] mobile:h-fit laptop:w-[60vw] laptop:h-fit bg-gradient-to-br from-20% from-blue-700 via-60% via-[color:#B1C7FF] to-96% to-blue-900 roun rounded-2xl">
          <img className='flex ml-auto mr-auto mt-9 laptop:w-[650px] mobile:w-[80vw] mobile:rounded-[10px]' src={Bottle} alt="Bottle-Image.jpg" />
          <div className='relative -top-[30px] laptop:left-12 laptop:-top-[70px] left-4 ml-auto mr-auto px-4 bg-[color:#2770CC] bg-opacity-80 rounded-[10px] laptop:w-[26vw] laptop:p-8 laptop:leading-10 mobile:w-[65vw] h-fit p-1'>
            <span className="text-white mobile:text-2xl tablet:text-3xl laptop:text-[2.8rem] desktop:text-[3.0rem] font-bold font-['Kalam'] capitalize">Uplift Lives with Every Sip</span>
          </div>

          <div className='m-5 font-["Inter"] laptop:w-[70%] mobile:w-[90%] mr-auto ml-auto font-extrabold bg-white bg-opacity-15 p-2 rounded-[10px]'>
            <div className='my-4 text-white laptop:text-[30px]'>
              Tired of traditional advertising that's wasteful and expensive?
            </div>
            <div className='text-black laptop:text-[20px]'>
              Advertise Insight offers a revolutionary new way to reach your target audience in cost effective way.
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='mobile:h-fit laptop:h-fit laptop:py-20 bg-[color:#B1C7FF]'>
          <div className='p-10'>
            <div className='mobile:flex-col flex gap-10 justify-center'>
              <div>
                <div className='text-xl'>Features</div>
                <div className='text-4xl'>Innovative Features of Advertise Insight</div>
              </div>
              <div className='mobile:flex-col laptop:flex-row flex justify-center gap-10'>
                <div className='border laptop:w-[33%] desktop:w-[33%] tablet:w-[33%] bg-blue-400 bg-opacity-30 rounded-sm border-transparent p-6'>
                  <div className='text-2xl my-1'>Cost Effective Advertising</div>
                  <div className='text-sm'>Reach a wide audience at a fraction of the cost of traditional advertising methods.</div>
                </div>
                <div className='border laptop:w-[33%] desktop:w-[33%] tablet:w-[33%] bg-blue-400 bg-opacity-30 rounded-sm border-transparent p-6'>
                  <div className='text-2xl my-1'>Customizable Designs</div>
                  <div className='text-sm'>Tailor your ad campaigns to suit your brand with our flexible design options.</div>
                </div>
                <div className='border laptop:w-[33%] desktop:w-[33%] tablet:w-[33%] bg-blue-400 bg-opacity-30 rounded-sm border-transparent p-6'>
                  <div className='text-2xl my-1'>Targeted Marketing</div>
                  <div className='text-sm'>Reach your desired demographic by strategically placing ads on water bottles in specific locations.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='p-10 flex-col laptop:py-36'>
          <div className='flex justify-center desktop::text-6xl laptop:text-5xl mobile:text-3xl tablet:2xl'>
            Why Choose Advertise Insight for Your Advertising Needs?
          </div>
          <div className='laptop:flex mobile:block mobile:m-5 laptop:ml-auto laptop:mr-auto mt-10 text-center w-[80%]'>
            Advertise Insight offers a unique and innovative way to promote your brand through water bottles. Our cost-effective advertising
            solutions ensure maximum visibility for your business without breaking the bank. With Advertise Insight, you can reach a wide audience
            while staying environmentally friendly. Join us in revolutionizing the advertising industry today!
          </div>
        </div>
      </section>

      <section>
        <div className='flex border bg-blue-100 justify-between mobile:block laptop:flex tablet:flex desktop:flex gap-5 p-10'>
          <div className='laptop:w-[30%] tablet:w-[30%] desktop:w-[30%]'>
            <div className='mobile:block laptop:flex-col tablet:flex-col desktop:flex-col flex m-10'>
              <div className='text-xs'>
                FAQ
              </div>
              <div className='text-6xl'>
                Common
              </div>
              <div className='text-6xl'>
                Ques/Ans
              </div>
              <div className='my-5'>
                Here are some of the most common questions that we get.
              </div>
            </div>
          </div>
          <div className='laptop:w-[65%] tablet:w-[65%] desktop:w-[65%]'>
            <div className='mx-10'>
              <h3 className='text-2xl font-semibold'>How does Advertise Insight provide ads through water bottles?</h3>
              <div className='my-5'>
                Advertise Insight partners with water bottle manufacturers to print ads on their bottles, offering a cost-effective advertising solution.
              </div>
            </div>
            <div className='mx-10'>
              <h3 className='text-2xl font-semibold'>What are the benefits of advertising through water bottles?</h3>
              <div className='my-5'>
                Advertising through water bottles provides a unique and eco-friendly way to reach a wide audience while also promoting sustainability.
              </div>
            </div>
            <div className='mx-10'>
              <h3 className='text-2xl font-semibold'>Can I customize the ads on the water bottles?</h3>
              <div className='my-5'>
                Yes, Advertise Insight offers customization options for the ads on water bottles to suit the specific needs and branding of each client.
              </div>
            </div>
            <div className='mx-10'>
              <h3 className='text-2xl font-semibold'>How cost-effective is advertising through water bottles compared to traditional methods?</h3>
              <div className='my-5'>
                Advertising through water bottles is often more cost-effective than traditional methods like TV or print ads, offering a high return on investment.
              </div>
            </div>
            <div className='mx-10'>
              <h3 className='text-2xl font-semibold'>What is the reach of advertising through water bottles?</h3>
              Advertising through water bottles can reach a diverse audience in various settings such as gyms, offices, events, and more, maximizing exposure for your brand.
            </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}

export default Herosection;
