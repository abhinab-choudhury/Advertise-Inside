import Navbar from './../components/Navbar';
import Bottle from "./../assets/bottle_img.jpg";

function Herosection() {
  return (
    <main>
      <section>
        <Navbar />
      </section>
      <section className='flex justify-center align-middle my-24 '>
        <div className="w-[90vw] mobile:h-fit laptop:w-fit laptop:h-fit bg-gradient-to-br from-20% from-blue-700 via-60% via-[color:#B1C7FF] to-96% to-blue-900 rounded-2xl">
          <img className='flex ml-auto mr-auto mt-9 laptop:w-[550px] mobile:w-[80vw] mobile:rounded-[10px]' src={Bottle} alt="Bottle-Image.jpg" />
          <div className='relative -top-[30px] laptop:left-12 laptop:-top-[70px] left-4 ml-auto mr-auto px-4 bg-[color:#2770CC] bg-opacity-80 rounded-[10px] laptop:w-[26vw] laptop:p-8 laptop:leading-10 mobile:w-[65vw] h-fit p-1'>
            <span class="text-white mobile:text-2xl tablet:text-3xl laptop:text-[2.8rem] desktop:text-[3.0rem] font-bold font-['Kalam'] capitalize">Uplift Lives with Every Sip</span>
          </div>

          <div className='m-5 font-["Inter"] laptop:w-[70%] mobile:w-[90%] mr-auto ml-auto font-extrabold bg-white bg-opacity-15 p-2 rounded-[10px]'>
            <div className='my-4 text-white laptop:text-[30px]'>
              Tired of traditional advertising that's wasteful and expensive?
            </div>
            <div className='text-black laptop:text-[20px]'>
              Advertise Inside offers a revolutionary new way to reach your target audience in cost effective way.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Herosection;
