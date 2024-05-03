import Navbar from './../components/Navbar'
import Bottle from "./../assets/img/bottle_img.jpg"
import Footer from './../components/Footer'
import Target from './../assets/img/target.png'
import Cube from './../assets/img/cube.png'
import Coin from './../assets/img/coin.png'

import { LazyLoadImage } from "react-lazy-load-image-component";

function Herosection() {
  return (
    <>
      <main>
        <section>
          <Navbar />
        </section>
        <section className='flex justify-center align-middle my-20'>
          <div className="w-[90vw] mobile:h-fit laptop:w-[60vw] laptop:h-fit bg-gradient-to-br from-20% from-blue-700 via-60% via-[color:#B1C7FF] to-96% to-blue-900 roun rounded-2xl">
            <LazyLoadImage className='flex ml-auto mr-auto mt-9 laptop:w-[650px] mobile:w-[80vw] mobile:rounded-[10px]' src={Bottle} alt="Bottle-Image.jpg" />
            <div className='relative -top-[30px] laptop:left-12 laptop:-top-[70px] left-4 ml-auto mr-auto px-4 bg-[color:#2770CC] bg-opacity-80 rounded-[10px] laptop:w-[26vw] laptop:p-8 laptop:leading-10 mobile:w-[65vw] h-fit p-1'>
              <span className="text-white mobile:text-2xl tablet:text-3xl laptop:text-[2.8rem] desktop:text-[3.0rem] font-bold font-['Kalam'] capitalize leading-snug">Uplift Lives with Every Sip</span>
            </div>

            <div className='mb-10 font-["Inter"] laptop:w-[70%] mobile:w-[90%] mr-auto ml-auto font-extrabold bg-white bg-opacity-15 p-4 rounded-[10px]'>
              <div className='mt-3 mb-5 text-white laptop:text-[30px] leading-tight'>
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
                  <h1 className='text-xl'>Features</h1>
                  <div className='text-4xl'>Innovative Features of Advertise Insight</div>
                </div>
                <div className='mobile:flex-col laptop:flex-row flex justify-center gap-10'>
                  <div className='border laptop:w-[33%] desktop:w-[33%] tablet:w-[33%] bg-blue-400 bg-opacity-30 rounded-sm border-transparent p-6'>
                    <div className='text-2xl my-1 flex'>
                      <img className='mobile:w-[70px] mobile:h-[70px]' src={Coin} alt="Coin GIF" />
                      <span className='mt-auto mb-auto mx-4'>Cost Effective Advertising</span>
                    </div>
                    <div className='text-sm'>Reach a wide audience at a fraction of the cost of traditional advertising methods.</div>
                  </div>
                  <div className='border laptop:w-[33%] desktop:w-[33%] tablet:w-[33%] bg-blue-400 bg-opacity-30 rounded-sm border-transparent p-6'>
                    <div className='text-2xl my-1 flex'>
                      <img src={Cube} alt="Customizable Designs" />
                      <span className='mt-auto mb-auto mx-4'>Customizable Designs</span>
                    </div>
                    <div className='text-sm'>Tailor your ad campaigns to suit your brand with our flexible design options.</div>
                  </div>
                  <div className='border laptop:w-[33%] desktop:w-[33%] tablet:w-[33%] bg-blue-400 bg-opacity-30 rounded-sm border-transparent p-6'>
                    <div className='text-2xl my-1 flex'>
                      <img src={Target} alt="Targeted Marketing" />
                      <span className='mt-auto mb-auto mx-4'>Targeted Marketing</span>
                    </div>
                    <div className='text-sm'>Reach your desired demographic by strategically placing ads on water bottles in specific locations.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className='p-10 flex-col laptop:py-36'>
            <h1 className='flex justify-center desktop::text-6xl laptop:text-5xl mobile:text-3xl tablet:2xl'>
              Why Choose Advertise Insight for Your Advertising Needs?
            </h1>
            <div className='laptop:flex mobile:block mobile:m-5 laptop:ml-auto laptop:mr-auto mt-10 text-center w-[80%]'>
              Advertise Insight offers a unique and innovative way to promote your brand through water bottles. Our cost-effective advertising
              solutions ensure maximum visibility for your business without breaking the bank. With Advertise Insight, you can reach a wide audience
              while staying environmentally friendly. Join us in revolutionizing the advertising industry today!
            </div>
          </div>
        </section>

        <section className='bg-sky-500 mobile:w-fit '>
          <div className='flex flex-col justify-center align-middle'>
            <h1 className='mobile:mx-4 text-center text-3xl flex justify-center my-4 font-semibold text-white'>Step into a new age with us</h1>
            <p className='text-center w-[70%] flex ml-auto mr-auto mb-10 '>
              At Advertise Insight, we're revolutionizing advertising by clean Drinking water bottles, all while championing philanthropy and
              sustainability. With every sip, 10 paisa goes towards supporting the Indian homeless fund. Just a 10% adoption rate from our Indian community is all it takes to ensure a
              lasting solution to India's water crisis
            </p>
          </div>
        </section>

        <section>
          <div className='flex border p-10 bg-blue-100 justify-between mobile:block laptop:flex tablet:flex desktop:flex mx-auto'>
            <div className='laptop:flex laptop:gap-36 laptop:w-[70vw] laptop:mx-auto'>
              <div className='laptop:w-[30%] tablet:w-[30%] desktop:w-[30%]'>
                <div className='mobile:block laptop:flex-col tablet:flex-col desktop:flex-col flex laptop:mx-10 tablet:mx-10 desktop:mx-10'>
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
                <div className='mobile:w-full mobile:flex-col mobile:mx-auto'>
                  <h3 className='text-2xl font-semibold'>How does Advertise Insight provide ads through water bottles?</h3>
                  <div className='my-5'>
                    Advertise Insight partners with water bottle manufacturers to print ads on their bottles, offering a cost-effective advertising solution.
                  </div>
                </div>
                <div className='mobile:w-full mobile:flex-col mobile:mx-auto'>
                  <h3 className='text-2xl font-semibold'>What are the benefits of advertising through water bottles?</h3>
                  <div className='my-5'>
                    Advertising through water bottles provides a unique and eco-friendly way to reach a wide audience while also promoting sustainability.
                  </div>
                </div>
                <div className='mobile:w-full mobile:flex-col mobile:mx-auto'>
                  <h3 className='text-2xl font-semibold'>Can I customize the ads on the water bottles?</h3>
                  <div className='my-5'>
                    Yes, Advertise Insight offers customization options for the ads on water bottles to suit the specific needs and branding of each client.
                  </div>
                </div>
                <div className='mobile:w-full mobile:flex-col mobile:mx-auto'>
                  <h3 className='text-2xl font-semibold'>How cost-effective is advertising through water bottles compared to traditional methods?</h3>
                  <div className='my-5'>
                    Advertising through water bottles is often more cost-effective than traditional methods like TV or print ads, offering a high return on investment.
                  </div>
                </div>
                <div className='mobile:w-full mobile:flex-col mobile:mx-auto'>
                  <h3 className='text-2xl font-semibold'>What is the reach of advertising through water bottles?</h3>
                  Advertising through water bottles can reach a diverse audience in various settings such as gyms, offices, events, and more, maximizing exposure for your brand.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </main>
    </>
  );
}

export default Herosection;
