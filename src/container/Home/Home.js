import React from "react";
import "../../App.css";

function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="w-full h-screen mb-20 bg-red-100"></div>
        </section>
        <section className="most_recent">
          <div className="container mx-auto mb-20">
            <div className="heading mb-10 text-3xl">Most Recent</div>
            <div className="grid grid-cols-4 gap-12 max-[480px]:grid-cols-1 mb-20">
              <div className="relative main_cards">
                <div className="bg-slate-400 w-full h-[36rem]"></div>
                <p className="w-[150px] bg-blue-300 text-center px-5 py-4 cursor-pointer font-semibold absolute bottom-0 translate-y-14 translate-x-[50%]">
                  View More
                </p>
              </div>
              <div className="relative main_cards">
                <div className="bg-slate-400 w-full h-[36rem]"></div>
                <p className="w-[150px] bg-blue-300 text-center px-5 py-4 cursor-pointer font-semibold absolute bottom-0 translate-y-14 translate-x-[50%]">
                  View More
                </p>
              </div>
              <div className="relative main_cards">
                <div className="bg-slate-400 w-full h-[36rem]"></div>
                <p className="w-[150px] bg-blue-300 text-center px-5 py-4 cursor-pointer font-semibold absolute bottom-0 translate-y-14 translate-x-[50%]">
                  View More
                </p>
              </div>
              <div className="relative main_cards">
                <div className="bg-slate-400 w-full h-[36rem]"></div>
                <p className="w-[150px] bg-blue-300 text-center px-5 py-4 cursor-pointer font-semibold absolute bottom-0 translate-y-14 translate-x-[50%]">
                  View More
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="most_loved">
          <div className="container mx-auto mb-20">
            <div className="heading mb-10 text-3xl">Most Loved</div>
            <div className="grid grid-cols-4 gap-12 max-[480px]:grid-cols-1 mb-20">
              <div className="relative main_cards">
                <div className="bg-slate-400 w-full h-[36rem]"></div>
              </div>
              <div className="relative main_cards">
                <div className="bg-slate-400 w-full h-[36rem]"></div>
              </div>
              <div className="relative main_cards">
                <div className="bg-slate-400 w-full h-[36rem]"></div>
              </div>
              <div className="relative main_cards">
                <div className="bg-slate-400 w-full h-[36rem]"></div>
              </div>
            </div>
            <div className="view_more_btn w-full flex justify-center">
              <p className="w-[150px] h-full bg-red-300 text-center px-5 py-4 cursor-pointer font-semibold">
                View More
              </p>
            </div>
          </div>
        </section>

        <section className="most_stay">
          <div className="container mx-auto mb-20">
            <div className="grid grid-cols-2 gap-5">
              <img
                src="https://kymee-jewellery.myshopify.com/cdn/shop/files/Group_1000004141.png?v=1709553734"
                className="w-full h-full"
              />
              <div className="bg-orange-400 p-10 space-y-6">
                <h1 className="text-issue">New Style</h1>
                <p>
                  If you have a legitimate need for accessing similar data or
                  functionality, consider reaching out to the competitor to
                  inquire about potential partnerships, licensing agreements
                </p>
                <p>
                  If you have a legitimate need for accessing similar data or
                  functionality, consider reaching out to the competitor to
                  inquire about potential partnerships, licensing agreements
                </p>
                <button className="border-2 border-black px-5 py-2 hover:border-[orange-400] hover:bg-black hover:text-white">
                  View More
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20 flex items-center bg-[url('https://cdn.shopify.com/s/files/1/0857/2085/8938/files/Frame_1000004952new.jpg?v=1709616432')] w-full bg-cover h-screen bg-no-repeat">
          <div className="container mx-auto">
            <div className="grid grid-cols-2">
              <div>
                <img src="https://kymee-jewellery.myshopify.com/cdn/shop/files/Rectangle_40.png?v=1709618208" />
              </div>
              <div className="flex justify-center items-center w-full h-full">
                <div>
                  <div className="bg-slate-400 w-[300px] h-[300px]"></div>
                  <h1 className="text-2xl">Compass Rose Pendant Necklace</h1>
                  <p className="text-xl flex gap-6 items-center">
                    Rs. 1,364.00<span className="line-through text-sm text-[#808080]">Rs. 2,064.00</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> 
      </main>
    </>
  );
}

export default Home;
