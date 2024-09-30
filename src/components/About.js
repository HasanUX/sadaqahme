import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavLogoLight from "../img/nav-logo-light.png";
import ReactGA from "react-ga";

const About = () => {
  //  google analytics code starts
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);
  //  google analytics code ends
  return (
    <div className="about" id="about">
      {/*<Helmet>
        <title>{"About SME"} </title>
        <meta
          name="description"
          content="Authentic Sadaqah Projects, Altogether"
        />
        <meta
          name="keywords"
          content="Non-profit, charity, donation, donate, sadaqah, projects, fundraise"
        />
      </Helmet>*/}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7 col-12 mx-auto text-center">
            <Link to="/">
              <span className="about_logo">
                <img
                  src={NavLogoLight}
                  alt="about-logo"
                  className="about_logo-img"
                />
              </span>
            </Link>

            <div className="about__card">
              <div className="d-flex justify-content-center">
                <Link to="/">
                  <span className="btn btn-primary">Back to home</span>{" "}
                </Link>
                <Link to="/announcements">
                  <span className="btn btn-secondary ms-3">
                    Check our announcements
                  </span>{" "}
                </Link>
              </div>
              <div className="about__banglaDiv">
                <p className="mt-5 mb-2">
                  <b>চিত্র ১ঃ</b> ২০১৩ সালের জুলাই মাসে The Huffington post UK
                  এর বরাতে একটি খবর প্রকাশিত হয়েছিল, যেখানে বলা হয়েছে দানশীলতার
                  দিক থেকে মুসলিমরা অন্যান্য ধর্মের অনুসারীদের থেকে এগিয়ে আছে।
                  এখন সাল ২০২২। তথ্য আদান-প্রদানের প্রক্রিয়া আরো বেগবান হয়েছে,
                  বেগবান হয়েছে প্রতারকদের প্রতারণার চিন্তা। আর এই সুযোগে
                  প্রতারকরা বেছে নিয়েছে "দারিদ্র্য-অসহায়-মজলুম" সেজে বিকাশে
                  ফান্ড রেইসিং এর পথকে। যার ফলে সরলমনা দানশীল মুসলিম ভাই-বোনদের
                  দান-সাদাকার টাকা চলে যাচ্ছে নকল ভিক্টিমদের কাছে।
                </p>

                <p className="mb-2">
                  <b>চিত্র ২ঃ</b> ফেসবুককে নিজের জীবনের সাথে আমরা এতোটাই সংযোগ
                  করে ফেলেছি যার কারণে অন্য একটি বিকল্প প্ল্যাটফর্মের চিন্তা
                  মাথায় আনতে পারি না। এমনকি দান-সাদাকাহ অথবা, যাকাত দিতে আমাদের
                  "সাহায্য চেয়ে" পোস্টগুলোর শরণাপন্ন হতে হয়। পোস্টগুলো কি আদৌ
                  নির্ভরযোগ্য? কাছের এক ভাই দান করেছে দেখে আমিও দান করবো?
                  নির্ভরযোগ্য সাদাকাহ / ডোনেশান ভিত্তিক প্রজেক্টগুলোকে একত্রে
                  অন্য এক প্ল্যাটফর্মে পেলে আমরা কি আদৌ সে প্ল্যাটফর্মে গিয়ে
                  খোঁজ নেব? সমাজে প্রকৃত মিসকিনদের খুঁজে বের করতে কি আমার আদেশ
                  দেয়া হয় নি?
                </p>

                <p className="mb-2">
                  <b>চিত্র ৩ঃ</b> ফেসবুক ডাউন! আগামী ৩দিন ফেসবুক ডাউন থাকবে।
                  আচ্ছা, এই অবস্থায় আবদুল্লাহ ভাইয়ের শেয়ার করা "এক মুসলিম বোনের
                  সন্তানের অপারেশানের জন্য আর্জেন্ট ৫০ হাজার টাকা লাগবে" পোষ্টটি
                  কেউ দেখবে আর? বাচ্চাটির অবস্থা জানতে কোথায় যাবো? আমার উদ্যোগে
                  পোষ্ট করা "গ্রামের নওমুসলিম ভাইয়ের জন্য রিকশা হাদিয়া"
                  প্রজেক্টটিকে এখন কেমনে এগিয়ে নিয়ে যাব? নওমুসলিম ভাইটিকে কী
                  জবাব দিব?{" "}
                </p>
                <p>
                  উপরোক্ত তিনটি চিত্রে ফুঁটে এসেছে ৩টি সমস্যা যা এখনো কেউ না কেউ
                  প্রত্যক্ষ বা, পরোক্ষভাবে ফেইস করছেন। কেমন হয় যদি এই তিনটি
                  সমস্যাসহ প্রাসঙ্গিক অন্যান্য সমস্যাগুলো সমাধানে আলাদা একটি
                  প্ল্যাটফর্ম থাকে? তাহলে চলুন জেনে আসি Sadaqah Made Easy - SME
                  প্ল্যাটফর্মের উদ্দেশ্য...{" "}
                </p>
                <ul class="list-group text-start">
                  <li class="list-group-item">
                    • এই প্ল্যাটফর্মটি মূলত যাকাত, সাদাকাহ, কর্যে হাসানা ভিত্তিক
                    Crowdfunding বা, ফান্ড রেইসিং প্রজেক্টগুলোর সাথে ডোনারদের
                    সংযুক্ত করে দিতে কাজ করছে।
                  </li>
                  <li class="list-group-item">
                    • সামাজিক যোগাযোগ মাধ্যমগুলোতে বিক্ষিপ্ত আকারে ছড়িয়ে থাকা
                    "সাহায্য চেয়ে" পোষ্টগুলো যাচাই করতে যে বেগ পোহাতে হয়, তা
                    সমাধানে SME চেষ্টা করছে।
                  </li>
                  <li class="list-group-item">
                    • অনেকে নিজ উদ্যোগে প্রোফাইল থেকে নিয়মিত ভিক্টিমদের হয়ে
                    সাদাকাহ চেয়ে পোষ্ট করে থাকেন। যেহেতু উনারা বেশিরভাগ অথেনটিক
                    ভিক্টিমদের হয়ে কাজ করেন তাই উনাদের Referrer হিসেবে এক
                    প্ল্যাটফর্মে নিয়ে আনতে SME চেষ্টা করছি।{" "}
                  </li>
                  <li class="list-group-item">
                    • কর্যে হাসানা প্রজেক্ট, হুইল চেয়ার কিংবা, সেলাই মেশিন /
                    রিকশা-ভ্যান ইত্যাদি দান করা সহজ করতে “হাদিয়া স্টোর” হিসেবে
                    শীঘ্রই একটি ফিচার চালু করা হবে।{" "}
                  </li>
                  <li class="list-group-item">
                    • প্ল্যাটফর্মে প্রজেক্ট যুক্ত করার আগে যথাযথভাবে
                    নির্ভরযোগ্যতা যাচাই করা হয়।{" "}
                  </li>
                  <li class="list-group-item">
                    • SME'র মাধ্যমে যারা উপকৃত হয়েছেন, উনাদের মন্তব্য খুব শীঘ্রই
                    যুক্ত করা হবে।
                  </li>
                </ul>
                <hr />
              </div>
              <h4 className="about__sub-title">
                <p>Get to know us (abstract in english)</p>
                Nowadays, people are used to search for donation projects to
                donate whether on facebook or, twitter. Sometimes, they do
                notice emergency donation or, charity based projects in the news
                feed, once in a way. which is not enough considering the
                condition of emergency donation projects. In the end, the funds
                are not collected as per the target and thus,{" "}
                <b> Victims remain victims </b>.
                <br />
                <br />
                The problem we identified based on the context described above
                is whenever social media like facebook servers go down, up and
                running donation projects start scrambling to raise funds for
                the victims. Sometimes, due to internal chaos in a certain
                country, facebook server may shut down. In such situation,
                SADAQAHMADEEASY.COM would be of great benefit to the charities
                or, any kind of donation projects.
              </h4>
              <span>
                <i className="fa fa-envelope"></i> Contact us:
                <b> sadaqahmadeeasy@gmail.com</b>
              </span>
            </div>

            <div className="about__about-disclaimer">
              <p className="about__about-disclaimer-header">
                <u>Disclaimer</u>
              </p>
              <p>
                We don't collect money (sadaqah) and we aren't connected with
                any organization/party/group.
              </p>
              <p>We just showcase authentic donation projects of any type.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
