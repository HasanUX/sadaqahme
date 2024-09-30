import React, { useEffect } from "react";
import giftOneDelivered from "../img/giftOneDelivered.jpeg";
import giftTwoDelivered from "../img/giftTwoDelivered.jpeg";
import giftWalkSupportDhaka from "../img/giftWalkSupportDhaka.jpeg";
import giftWalkSupportCtg from "../img/giftWalkSupportCtg.jpeg";
//import giftWaterFilter from "../img/giftWaterFilter.jpeg";

//import { useSpring, animated } from "react-spring";
import ReactGA from "react-ga";

function GiftStore() {
  //  google analytics code starts
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  //  google analytics code ends

  return (
    <div className="giftStore">
      {/*<Helmet>
        <title>{"Gift Store / মানবতার দেয়াল by SME"} </title>
        <meta
          name="description"
          content="Authentic Sadaqah Projects, Altogether"
        />
        <meta
          name="keywords"
          content="Non-profit, charity, donation, donate, sadaqah, projects, fundraise"
        />
      </Helmet>*/}
      <div className="giftStore__header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="giftStore__intro-message animate__animated animate__fadeInRight">
                {/*<h1 className="giftStore__messageOne">
                  Someone is waiting{""}
                  <p className="highlight">for your gift.</p>
                </h1>*/}

                <h1 className="giftStore__messageOne">
                  Someone has just put{""}
                  <p className="highlight">something for you.</p>
                </h1>

                <h4 className="learn animated bounceInUp">
                  Let's experience{" "}
                  <a
                    href="https://www.facebook.com/sadaqahmadeeasy/posts/150596097478916"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <u>Online Manobotar Dewal</u>
                  </a>
                </h4>
                {/*<i className="arrow animated infinite pulse fa fa-angle-down icon fa-2x"></i>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="giftStore__itemFlex mt-5">
          <div className="giftStore__flexPill p-3">
            <div className="row">
              <div className="col-12">
                <h3 className="d-inline-block mb-2 text-dark giftStore__itemTitle">
                  হাঁটার লাঠি / Hand crutch - 1 (Dhaka)
                </h3>

                <div className="mt-2 mb-1 text-primary">
                  Uploaded on: <b className="text-dark">March 2022</b>
                </div>
                <h4 className="mt-3 text-dark giftStore__itemDetails">
                  পাশের ছবিতে দেখতে পাচ্ছেন একটি হাঁটার লাঠি / Hand crutch।
                  লাঠিটি মাত্র দুই সপ্তাহ +- ব্যবহার করা হয়েছে, এর মধ্যেই
                  চেয়ারটির ব্যবহারকারী সুস্থ হয়ে উঠেছেন আলহামদুলিল্লাহ্।
                  ব্যবহারকারীর পরিবার চাচ্ছেন লাঠিটি আল্লাহ তা'আলার সন্তুষ্টির
                  উদ্দেশ্যে সাদাকাহ করে দিতে।
                </h4>

                <h5 className="text-dark mt-3 giftStore__itemDetails">
                  আপনি যদি নিজেই লাঠিটি ব্যবহার করার যোগ্য হয়ে থাকেন অথবা, আপনার
                  পরিচিত কেউ যদি থেকে থাকে যার কেনার সামর্থ্য নেই কিন্তু একটি
                  হাঁটার লাঠি খুবই দরকার তাহলে আমাদের মেইলে অথবা, ফেসবুক পেইজে
                  যোগাযোগ করতে পারেন। আমরা যথাযথ উপায়ে যাচাই করে হাঁটার লাঠিটির
                  দায়িত্বশীলদের সাথে যোগাযোগ করিয়ে দিব ইনশাআল্লাহ।
                </h5>
                <h5 className="text-secondary fw-bold mt-4 giftStore__itemDetails">
                  বিঃদ্রঃ হাঁটার লাঠিটির বর্তমান অবস্থান ঢাকার রামপুরা,
                  বনশ্রীতে। তাই ঢাকায় থাকেন এমন কাউকে নিতে হবে।{" "}
                </h5>
                <h5 className="text-dark mt-3 giftStore__itemDetails">
                  আমাদের মেইলঃ sadaqahmadeeasy@gmail.com
                </h5>
                <h5 className="text-dark mt-3 giftStore__itemDetails">
                  ফেসবুক পেইজঃ{" "}
                  <a
                    href="https://www.facebook.com/sadaqahmadeeasy"
                    className="text-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sadaqah Made Easy - SME
                  </a>
                </h5>
                <p className="text-success mt-auto">
                  আল্লাহ আযযা ওয়া জাল এই লাঠিটির ব্যবহারকারীকে কবুল করে নিন,
                  আমিন। তাঁর পরিবারকে রহমত দান করুন, মাফ করে দিন।{" "}
                </p>
              </div>

              <div className="col-12 p-2">
                <img
                  src={giftWalkSupportDhaka}
                  className="giftStore__giftImg w-100"
                  alt="giftStore-img"
                />
              </div>
            </div>
          </div>

          {/*<div className="giftStore__flexPill border rounded shadow-sm p-3">
            <div className="row">
              <div className="col-12">
                <h3 className="d-inline-block mb-2 text-dark giftStore__itemTitle">
                  পানির ফিল্টার - Water filter
                </h3>

                <div className="mt-2 mb-1 text-primary">
                  Uploaded on: <b className="text-dark">April 2022</b>
                </div>
                <h4 className="mt-3 text-dark giftStore__itemDetails">
                  নিচের ছবিতে দেখতে পাচ্ছেন একটি পানির ফিল্টার যেটির Ceramic
                  dome এবং Filter cartridge পরিবর্তন করে নিয়মিত ব্যবহার করা
                  যাবে। তাছাড়া, ফিল্টারটি সব দিক থেকে কার্যকর আছে। এর
                  ব্যবহারকারী চাচ্ছেন আল্লাহ তা'আলার সন্তুষ্টির উদ্দেশ্যে
                  সাদাকাহ করে দিতে।
                </h4>

                <h5 className="text-dark mt-3 giftStore__itemDetails">
                  আপনি যদি নিজেই ফিল্টারটি নিতে চান অথবা, আপনার পরিচিত কেউ যদি
                  থেকে থাকে যার/যাদের (যেমন, মাদরাসা, এতিমখানা) কেনার সামর্থ্য
                  নেই কিন্তু একটি ফিল্টার খুবই দরকার তাহলে আমাদের মেইলে অথবা,
                  ফেসবুক পেইজে যোগাযোগ করতে পারেন। আমরা যথাযথ উপায়ে যাচাই করে
                  ফিল্টারটির দায়িত্বশীলদের সাথে যোগাযোগ করিয়ে দিব ইনশাআল্লাহ।
                </h5>
                <h5 className="text-secondary fw-bold mt-4 giftStore__itemDetails">
                  বিঃদ্রঃ ফিল্টারটির বর্তমান অবস্থান ঢাকা শহরে, তাই ঢাকায় থাকেন
                  এমন কাউকে নিতে হবে।{" "}
                </h5>
                <h5 className="text-dark mt- giftStore__itemDetails">
                  আমাদের মেইলঃ sadaqahmadeeasy@gmail.com
                </h5>
                <h5 className="text-dark mt-3 giftStore__itemDetails">
                  ফেসবুক পেইজঃ{" "}
                  <a
                    href="https://www.facebook.com/sadaqahmadeeasy"
                    className="text-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sadaqah Made Easy - SME
                  </a>
                </h5>
                <p className="text-success mt-auto">
                  আল্লাহ আযযা ওয়া জাল এই লাঠিটির ব্যবহারকারীকে কবুল করে নিন,
                  আমিন। তাঁর পরিবারকে রহমত দান করুন, মাফ করে দিন।{" "}
                </p>
              </div>

              <div className="col-12 p-2">
                <img
                  src={giftWaterFilter}
                  className="giftStore__giftImg w-100"
                  alt="giftStore-img"
                />
              </div>
            </div>
          </div>*/}

          <div className="giftStore__flexPill p-3">
            <div className="row">
              <div className="col-12">
                <h3 className="d-inline-block mb-2 text-dark giftStore__itemTitle">
                  হাঁটার লাঠি / Hand crutch - 2 (Chittagong)
                </h3>

                <div className="mt-2 mb-1 text-primary">
                  Uploaded on: <b className="text-dark">April 2022</b>
                </div>
                <h4 className="mt-3 text-dark giftStore__itemDetails">
                  নিচের ছবিতে দেখতে পাচ্ছেন একটি হাঁটার লাঠি / Hand crutch।
                  লাঠিটি সর্বোচ্চ এক সপ্তাহ ব্যবহার করা হয়েছে বাসার ভেতরেই, এর
                  মধ্যেই চেয়ারটির ব্যবহারকারী সুস্থ হয়ে উঠেছেন আলহামদুলিল্লাহ্।
                  ব্যবহারকারী চাচ্ছেন লাঠিটি আল্লাহ তা'আলার সন্তুষ্টির উদ্দেশ্যে
                  সাদাকাহ করে দিতে।
                </h4>

                <h5 className="text-dark mt-3 giftStore__itemDetails">
                  আপনি যদি নিজেই লাঠিটি ব্যবহার করার যোগ্য হয়ে থাকেন অথবা, আপনার
                  পরিচিত কেউ যদি থেকে থাকে যার কেনার সামর্থ্য নেই কিন্তু একটি
                  হাঁটার লাঠি খুবই দরকার তাহলে আমাদের মেইলে অথবা, ফেসবুক পেইজে
                  যোগাযোগ করতে পারেন। আমরা যথাযথ উপায়ে যাচাই করে হাঁটার লাঠিটির
                  দায়িত্বশীলদের সাথে যোগাযোগ করিয়ে দিব ইনশাআল্লাহ।
                </h5>
                <h5 className="text-secondary fw-bold mt-4 giftStore__itemDetails">
                  বিঃদ্রঃ হাঁটার লাঠিটির বর্তমান অবস্থান চট্টগ্রাম শহর, তাই
                  চট্টগ্রামে থাকেন এমন কাউকে নিতে হবে।{" "}
                </h5>
                <h5 className="text-dark mt-3 giftStore__itemDetails">
                  আমাদের মেইলঃ sadaqahmadeeasy@gmail.com
                </h5>
                <h5 className="text-dark mt-3 giftStore__itemDetails">
                  ফেসবুক পেইজঃ{" "}
                  <a
                    href="https://www.facebook.com/sadaqahmadeeasy"
                    className="text-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sadaqah Made Easy - SME
                  </a>
                </h5>
                <p className="text-success mt-auto">
                  আল্লাহ আযযা ওয়া জাল এই লাঠিটির ব্যবহারকারীকে কবুল করে নিন,
                  আমিন। তাঁর পরিবারকে রহমত দান করুন, মাফ করে দিন।{" "}
                </p>
              </div>

              <div className="col-12 p-2">
                <img
                  src={giftWalkSupportCtg}
                  className="giftStore__giftImg w-100"
                  alt="giftStore-img"
                />
              </div>
            </div>
          </div>
        </div>

        {/*Gift delivered section starts*/}

        <div className="row ">
          <h2 className="text-center mt-2 mb-5">Gifts we delivered</h2>
          <div className="col-lg-6 text-center">
            <img
              src={giftOneDelivered}
              className="giftStore__giftImg shadow-lg mb-4"
              alt="giftStore-img"
            />
            <a
              className="btn btn-success"
              href="https://www.facebook.com/sadaqahmadeeasy/posts/137087188829807"
              target="_blank"
              rel="noreferrer"
            >
              See Details
            </a>
          </div>

          <div className="col-lg-6 text-center">
            <img
              src={giftTwoDelivered}
              className="giftStore__giftImg shadow-lg mb-4"
              alt="giftStore-img"
            />
            <a
              className="btn btn-success"
              href="https://www.facebook.com/sadaqahmadeeasy/photos/a.121482903723569/164763346062191/"
              target="_blank"
              rel="noreferrer"
            >
              See Details
            </a>
          </div>
        </div>

        <div className="col-lg-12 d-lg-block text-center mt-5">
          <h4 className="mb-3 text-dark">
            আমাদের স্টোরে আপনিও উপহার রাখতে চাইলে (যেমনঃ রিকশা, সেলাই মেশিন
            অথবা, ভ্যান, ল্যাপটপ ইত্যাদি) যোগাযোগ করুন।
          </h4>
          <h4 className="mb-5 text-dark">
            Email us to place your gift like Rickshaw, Sewing machine, Van,
            Laptop etc.
          </h4>
        </div>

        <div className="col-lg-12 d-lg-block text-center mb-5">
          <p className="d-inline border text-success fw-bold rounded p-2 shadow mb-5">
            sadaqahmadeeasy@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default GiftStore;
