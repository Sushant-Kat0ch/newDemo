import Image from "next/image";
import Header from "./homeComponent/Header";
import Footer from "./homeComponent/Footer";
import FloatingWindow from "./homeComponent/floating-window";

export default function Home() {
  return (
    <div>
      <Header />
      <section>
      <div className="container mx-auto bg-black">
            <div className="flex items-center py-10 px-10 relative">
                <div className='px-10 flex-1'>
                    <h1 className='text-white text-5xl pt-10 font-bold'>We Do Everything Related <br /> to Real Estate</h1>
                    <h6 className='text-white text-2xl mt-10'>Among the most trusted in the region</h6>
                    <p className='text-white pt-2'>Our agents and staff are rated 4.5 stars on Google and have <br />
                        operated in the market for over a decade
                    </p>
                    <h6 className='text-white text-2xl mt-10'>
                        We move fast
                    </h6>
                    <p className='text-white pt-2 '>If you're buying and need to close quickly, look no further.<br />
                        Your dedicated agent and conveyance team can close deals <br />
                        in as fast as 24 hours
                    </p>
                </div>
                <img src="https://media.macphun.com/img/uploads/customer/how-to/608/15542038745ca344e267fb80.28757312.jpg?q=85&w" alt="Image" className="w-1/4 rounded-lg mr-8 mt-8 transition-transform hover:scale-105 absolute right-10 -bottom-20" />

            </div>
        </div>
      </section>
      <section>
    <div className="container mx-auto bg-white">
  <div className="flex items-center">
    <div className='w-1/2 px-10'>
      <h1 className='text-black text-5xl pt-10 font-bold mb-6'>Relocation Services</h1>
      <p className="mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
      <p className="mb-3">But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p>But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <div className="w-1/2 h-500">
      <img src="https://www.gharjunction.com/img/blog/282.jpg" alt="Image" className="w-full h-full object-cover" />
    </div>
  </div>
</div>

      </section>
      <section className="mb-10">
    <div className="container mx-auto bg-white">
  <div className="flex items-center">

    <div className="w-1/2 h-500">
      <img src="https://www.gharjunction.com/img/blog/282.jpg" alt="Image" className="w-full h-full object-cover" />
    </div>
    <div className='w-1/2 px-10'>
      <h1 className='text-black text-5xl pt-10 font-bold mb-6'>Property management</h1>
      <p className="mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
      <p className="mb-3">But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <p>But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  </div>
</div>

      </section>
      {/* <section className="top-indian-call-giral-section py-5">
        <div className="container mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
              <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl"></h3>
              </a>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
              <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl"></h3>
              </a>
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl"></h3>
                </a>
                <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                  <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl"></h3>
                </a>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
              <a href="" className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl"></h3>
              </a>
            </div>
          </div>
        </div>
      </section> */}
<FloatingWindow/>
      <Footer />
    </div>
  );
}
