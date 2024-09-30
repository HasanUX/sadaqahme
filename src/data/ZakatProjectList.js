//import zakatsanabil from "../img/zakatsanabil.jpeg";
import zakatthalassemia from "../img/zakatthalassemia.jpeg";
import zakatmarkaztaqwa from "../img/zakatmarkaztaqwa.jpeg";
//import zakatgaza from "../img/zakatgaza.jpeg";

//serial: 4

const ZakatProjectList = [
  //  {
  //    _ID: "sdqmez003.1",
  //    projectImg: zakatsanabil,
  //    projectHeading: "যাকাত প্রজেক্ট ২০২৩",
  //    slug: "zakat-sanabil",
  //    projectDetails: (
  //      <div>
  //        <h2>
  //          একটা অটো রিক্সার ব্যবস্থা হলে পুরো পরিবারের দায়িত্ব বড় সন্তান নিতে
  //          পারবেন ইনশাআল্লাহ
  //        </h2>
  //        <p>
  //          ১. মধ্যবিত্ত পরিবারের এক বয়ষ্কা ক্যান্সার আক্রান্ত মা এসেছিলেন আমাদের
  //          কাছে সাহায্যের জন্য। কথা প্রসঙ্গে বললাম যেহেতু আমাদের ফান্ড খুব সীমিত
  //          চিকিৎসার জন্য সাহায্য করার সুযোগ আসলেই কম। উনাকে বললাম এলাকার অন্য
  //          প্রভাবশালী ব্যক্তিদের কাছে গিয়ে বুঝানোর জন্য। মহিলাটি কেদে দিয়ে বললেন
  //          আপনাদের কাছে এসে ত নিজের কষ্টের কথা গুলো বলার সুযোগ পেয়েছি অন্যরা সে
  //          সুযোগটিও দেই নি।
  //        </p>

  //        <p>
  //          ২. রংপুরের এক বিধবা মা। স্বামী মারা যাবার পর ছেলে সন্তানরা আর কেউ এখন
  //          ফিরে তাকায় না। যার যার সংসার নিয়ে ছেলেরা ব্যস্ত অথচ এক সময় সহায় সম্পদ
  //          ভালই ছিল। স্বামী মারা যাবার ছেলেদের নামে সম্পদ লিখে দিয়ে যান কিন্তু
  //          সেই ছেলেই এখন তার কোন খোজ নেয় না। ৬০-৭০বছরের এই বৃদ্ধা এখন কায়িক শ্রম
  //          করে উপার্জন করে নিজের জন্য।
  //        </p>
  //        <p>
  //          ৩. বাবাহীন রমাদান কাটাচ্ছেন অনেক অসহায় মাজলুম পরিবার। এই যাকাতের
  //          অর্থতে ঈদে বাবা না থাকা এই পরিবার গুলোর দুশ্চিন্তা ও কষ্ট কিছুটা হলেও
  //          কমতে পারে ইন শা আল্লাহ।
  //        </p>
  //        <p>
  //          ৪. বাবা বজ্রপাতে মারা গেছেন। রেখে গেছেন এতিম তিন সন্তান। বাবা মারা
  //          যাবার একদিন পরে সুখ সইতে না পেরে মা ও মারা যান। আর রেখে জান তিন
  //          সন্তান।‌ বড় সন্তানের পড়াশোনায় কোন মনোযোগ নেই তবে অটো রিক্সা চালাতে
  //          খুব পছন্দ করেন। একটা অটো রিক্সার ব্যবস্থা হলে পুরো পরিবারের দায়িত্ব
  //          বড় সন্তান নিতে পারবেন ইনশাআল্লাহ।
  //        </p>
  //        <p>
  //          ঘটনাগুলো প্রতিটি বাস্তব। প্রতিটি ঘটনার একটা সহজ সমাধান হচ্ছে যাকাত
  //          যেটিকে ইসলামের ফরজ ইবাদত হিসেবে গণ্য করা হয়। ‌
  //        </p>
  //        <p>
  //          আমরা আমাদের সকল ভাই বোনদের উতসাহিত করব যদি আপনি নিজে যাকাত আদায় করতে
  //          না পারেন তবে কোন দ্বিনী প্রতিষ্ঠান বা শর‍য়ী ব্যপারে যারা সচেতন তাদের
  //          মাধ্যমে আপনারা যাকাত আদায় করুন।
  //        </p>
  //        <p>
  //          অনেক বিভিন্ন নামী দামি প্রতিষ্ঠানের ব্র‍্যান্ডিং দেখে যাকাতের টাকা
  //          দিয়ে দিচ্ছেন অথচ আলেমদের মতে সেই সকল প্রতিষ্ঠানে যাকাত আদায় করলে হবে
  //          না। তাই এধরনের নামধারী প্রতিষ্ঠান থেকে নিজে সচেতন হোন অন্যদের ও সচেতন
  //          করুন।
  //        </p>
  //        <div>
  //          <p>
  //            যেসব পরিবার বর্তমানে আমাদের যাকাত ফান্ড এর মাধ্যমে উপকৃত হচ্ছেন
  //            তাদের একটি লিস্ট দেয়া যাক:
  //          </p>
  //          <p>১. দ্বীনদার এতিম, অসহায় অথবা বিধবা পরিবার </p>
  //          <p> ২. পাহাড়ি নওমুসলিম </p>
  //          <p>৩. ঈসায়ী খ্রিষ্টান থেকে রিভার্টেড মুসলিম </p>
  //          <p>৪. আমাদের মাদ্রাসার দরিদ্র শিক্ষক </p>
  //          <p>৫. দ্বীনদার দরিদ্র ফ্যামিলি</p>
  //          <p>
  //            {" "}
  //            ৬. যে সকল দ্বীনী পরিবারে তাদের বাবারা সাথে থাকতে পারছে না।
  //          </p>{" "}
  //          <p>৭. ঋণগ্রস্ত মুসলিম পরিবার </p>
  //          <p>৮. হালাল রিজিকের চেষ্টারত প্রাক্টিসিং মুসলিম </p>
  //        </div>
  //        <p>
  //          #নোট: যাকাতের অর্থ কাউকে দেওয়ার আগে প্রতিটি ব্যক্তিকে আমাদের শরয়ী
  //          কনসালটেন্ট এর মাধ্যমে ভেরিফাই করা হয় আসলেই সে যাকাত নেবার উপযুক্ত
  //          কিনা। সিলেটের আম্বরখানা মসজিদের খতিব মুফতি জিয়াউর রহমান হাফিযাহুল্লাহ
  //          বর্তমানে আমাদের ফাউন্ডেশনে যাকাত এলিজিবিলিটি কনসালটেন্ট হিসেবে
  //          সহযোগিতা করছেন।
  //        </p>
  //        <p>
  //          এছাড়া যাকাতের অর্থ দিয়েই আমাদের কাজ শেষ হয়ে যায় না যে কাউকে
  //          যাকাতের অর্থ দেওয়ার আগে তার ব্যাকগ্রাউন্ড চেক করা থেকে শুরু করে
  //          প্রতিটি পর্যায়ে তাকে সাহায্য করা সকল কাজ আমাদেরই করতে হয়।
  //        </p>
  //        <p>
  //          "আল্লাহ যাকে সম্পদ দান করেছেন, অথচ সে তার যাকাত আদায় করেনি, ক্বিয়ামতের
  //          দিন তার সেই সম্পদকে টেকো মাথা বিষাক্ত সাপে রূপান্তরিত করা হবে। যার
  //          দু’চোখে দু’টি কালো বিন্দু থাকবে। ক্বিয়ামতের দিন ঐ সাপ তার গলা পেঁচিয়ে
  //          ধরবে এবং দু’চোয়াল কামড়ে ধরে বলতে থাকবে, আমি তোমার সঞ্চিত ধন। আমি তোমার
  //          সঞ্চিত ধন" (বুখারী, মিশকাত হা/১৭৭৪ ‘যাকাত’ অধ্যায়)।
  //        </p>
  //      </div>
  //    ),
  //    projectContact: (
  //      <div>
  //        <hr />
  //        <h4 className="mb-4">যাকাত ফান্ডের একাউন্ট নাম্বারঃ</h4>
  //        <p>Bank: Islami Bank Bangladesh Ltd. </p>
  //        <p>A/C No(Current): 20506990200112218 </p>
  //        <p>A/C Name: Saba Sanabil Zakat Fund</p>
  //        <p> Branch: Bhurungamari, Kurigram. </p>
  //        <p className="mb-4"> Routing: 125490108</p>
  //        <hr />
  //        <p>bKash Personal: Removed </p>
  //        <p> Rocket personal: 01778418210-4 </p>
  //        <p>Nagad Personal: 01778-418210</p>
  //      </div>
  //    ),
  //    projectFbProfile: `https://www.facebook.com/mohammadnahidhasanrony`,
  //    projectOrgName: "Sab'a Sanabil Foundation",
  //    projectOrg: { _ID: "sdqmez003", name: "Sab'a Sanabil Foundation" },
  //    projectCreated: "March 2023",
  //    projectTag: "যাকাত, Zakat",
  //    projectLink:
  //      "https://www.facebook.com/SabaSanabilFoundation/posts/pfbid02sB8sv1nMRjbwB5BQY79aPsfzv613CYUQT1HLarGpstCGGiU8dCQAids5uadrEfS9l",
  //  },

  {
    _ID: "sdqmez003.2",
    projectImg: zakatthalassemia,
    projectHeading: "Zakah Based Thalassemia Research",
    slug: "zakat-thsemia",
    projectDetails: (
      <div>
        <h2>জাকাত-ভিত্তিক থ্যালাসেমিয়া রিসার্চে অংশগ্রহণ করার সুযোগ!</h2>
        <p>
          গত ৩ বছর ধরে জামালপুর জেলায় হত-দরিদ্র থ্যালাসেমিয়া রোগীদের রক্ত
          পরিচাঞ্চালনের জন্য প্রতিমাসে আর্থিক সহযোগিতা (২০+ হাজার টাকা) করার
          প্রচেষ্টা চালাতে আল্লাহ তৌফিক দিয়েছেন।
        </p>

        <p>
          কমিউনিটিক ভিত্তিক রক্তের সমস্যা সমাধানে আমরা গত ৩ বছরের অধিক সময় ধরে
          মাদ্রাসা-ভিত্তিক মোবাইল ব্লাড ব্যাংকের গবেষণামূলক প্রজেক্টের পাইলটিং
          চলছে। এই লক্ষ্যে গবেষণাপত্র প্রকাশ করে গ্যাপ চিহ্নিত করা হয় ( রিসার্চ
          পেপারের লিংক কমেন্টে) এবং এরপর ২০০০ মাদ্রাসা শিক্ষার্থীদের ব্লাড
          গ্রুপিং করা হয়।
        </p>

        <p>
          রক্তদাতার ডোনার বেইজ সিস্টেম তৈরী হলে থ্যালাসেমিয়াসহ অন্যান্য সব রোগীর
          সিস্টেম্যাটিক রক্তের সংস্থান হবে।
        </p>
        <p>
          এই সিস্টেম দাঁড়িয়ে গেলে প্রতিটি জেলায় কপি করা যাবে। সবকিছু রিসার্চের
          থিমের করা হয়েচ্ছে। যারা সরাসরি রিসার্চে জড়িত আমরা সবাই স্বেচ্ছাসেবী
          কাজ করছি গত ৭ বছর ধরে। ব্যক্তিগতভাবে অনেক সময় দেয়ার পাশাপাশি
          আর্থিকভাবে এই প্রজেক্টে দান করার ভাগ্য হয়েছে।
        </p>
        <p>
          এ বিষয়ে কয়েকজন শ্রদ্ধেয় মুফতির সাথে পরামর্শ করা হয়েছে। মাঠ পর্যায়ে
          কিছু লোক (জাকাতযোগ্য) করতে চাচ্ছি যাদেরকে স্কলারশীপ হিসেবে ছোট সন্মানী
          প্রদান হবে।
        </p>
        <p>
          ফান্ড ম্যানেজমেন্ট করার জন্য জামালপুরে একটি যৌথ একাউন্ট খোলা হয়েছে।
          স্থানীয় টিম এই কাজটি গত ৩ বছর ধরে ম্যানেজ করে আসছে। এই কাজ পরিচালনা
          করার জন্য স্থানী মেডিকেল কলেজের শিক্ষার্থীদের নিয়ে টিম বানানো হয়েছে গত
          দুই বছর পরিশ্রম করে।
        </p>
        <p>
          আপনারা জাকাতের টাকার মাধ্যমে জাকাত আদায় হবে, আবার রোগীর সেবাও হবে। তাই
          এটা ডবল মোটিভেশন হতে পারে।
        </p>
        <p>
          আপনার পরিচিত সার্কেলেও এই পজিটিভ কাজে জড়িত হতে উতসাহিত করতে পারেন।
        </p>
      </div>
    ),
    projectContact: (
      <div>
        <hr />
        <h4 className="mb-4">
          যারা আগ্রহী তারা কন্ট্রিবিউট করতে পারেন ব্যাংক বা বিকাশের মাধ্যমে।
        </h4>
        <p>Bank: Social Islamic Bank Ltd (SIBL) </p>
        <p>A/C No: 1141 33000 6224 </p>
        <p>A/C Name: Poor Patient Support Fund</p>
        <p> Branch: Jamalpur Branch, Jamalpur Sadar, Bangladesh </p>
        <p className="mb-4"> Routing: 125490108</p>
        <hr />
        <p>bKash Personal: Removed </p>
        <p>Contact: 01927 04 18 83 (Amzad Hossain) </p>
        {/*<p>
          বিকাশ করার পর মেসেজে আমজাদ ভাইকে জানাবেন। তিনি ডকুমেন্টেশন করবেন।{" "}
        </p>*/}
      </div>
    ),
    projectFbProfile: `https://www.facebook.com/mohammad.hossain.182`,
    projectOrgName: "Mohammad Sorowar Hossain",
    projectOrg: { _ID: "sdqmez002", name: "Mohammad Sorowar Hossain" },
    projectCreated: "April 2023",
    projectTag: "Research, Zakat",
    projectLink:
      "https://www.facebook.com/mohammad.hossain.182/posts/pfbid02qorPB43UdU6t9btEfJZxzs4jLQXkBR453pr1vainK1biMcseC5tVjsxN3DEWcm1kl",
  },

  //  {
  //    _ID: "sdqmez004.1",
  //    projectImg: zakatgaza,
  //    projectHeading: "Zakat Fund for Gaza",
  //    metaTitle: "Zakat Fund for Gaza",
  //    slug: "zakat-gaza",
  //    projectDetails: (
  //      <div>
  //        <h3>
  //          Zakat Fund for Gaza - আপনার যাকাতের একটা অংশ ফিলিস্তিনের জন্য পাঠান।।
  //        </h3>
  //        <p>
  //          ফিলিস্তিনের গাযাতে প্রায় ১৫লক্ষের বেশি ভাই বোনের ঘর বাড়ি গুড়িয়ে দেয়া
  //          হয়েছে এবং ১০ হাজারের বেশি শিশু বাচ্চাকে এতিম করা হয়েছে যাদের মধ্যে
  //          কারো বাবা-মা উভয়েই শহীদ হয়েছে ইনশাআল্লাহ। এরকম পরিস্থিতিতে সারা
  //          বিশ্বের মুসলিমদের মাল অর্থের উপর আমাদের ফিলিস্তিনের ভাই-বোনদের একটি হক
  //          এসে দাঁড়ায়। তাই আমরা সিদ্ধান্ত নিয়েছি ফাউন্ডেশন এই রমাদান মাসে
  //          আপনাদের কাছ থেকে যাকাতের অর্থ বাবদ যত টাকা আসবে তার ৫০ ভাগ অর্থ
  //          ফিলিস্তিনের মুসলিম ভাই-বোনদের পেছনে খরচ করা হবে ইনশাআল্লাহ।{" "}
  //        </p>{" "}
  //        <p>
  //          উল্লেখ্য ফিলিস্তিনের ভাইবোন ছাড়াও এদেশের অনেক মজলুম পরিবার রয়েছে
  //          যাদের জন্য এই যাকাতের অর্থ খুব বেশি প্রয়োজন।{" "}
  //        </p>{" "}
  //        <ol>
  //          <li>
  //            {" "}
  //            অসহায়-এতিম পরিবারদেরকে যাকাতের অর্থ দিয়ে স্বাবলম্বী করা হয়।
  //          </li>{" "}
  //          <li>
  //            {" "}
  //            রিভারটেড মুসলিম পরিবারদের চিকিৎসা এবং স্বাবলম্বীকরণের জন্য এই অর্থ
  //            খরচ করা হয়
  //          </li>{" "}
  //          <li> মাজলুম পরিবারের সাহায্যার্থে</li>{" "}
  //          <li>
  //            {" "}
  //            সূরা তাওবার ৬০ নম্বর আয়াতে উল্লেখিত খাতে এই যাকাতের অর্থ খরচ করা
  //            হয়।{" "}
  //          </li>{" "}
  //        </ol>{" "}
  //        <p>
  //          {" "}
  //          শুধুমাত্র এবছর আমরা উপরের উল্লেখিত খাত ছাড়াও ফিলিস্তিনের গাজা মুসলিম
  //          ভাই বোনদের জন্য যাকাতের ৫০ ভাগ ফান্ড পাঠানোর সিদ্ধান্ত নিয়েছে
  //          ইনশাআল্লাহ।{" "}
  //          <b>
  //            {" "}
  //            এক্ষেত্রে পূর্বের মতই One Nation UK এর মাধ্যমে এই যাকাতের অর্থ
  //            প্রদান করা হবে যারা মাঠ পর্যায়ে দীর্ঘদিন যাবত ফিলিস্তিন বিশেষভাবে
  //            গাজায় কাজ করে যাচ্ছে।
  //          </b>{" "}
  //        </p>{" "}
  //        <p>
  //          নোট: সবাইকে অনুরোধ করব যাকাতের অর্থ পাঠানোর সময় শুধুমাত্র গাজা তে
  //          পাঠানোর জন্য কেউ মেসেজ দিবেন না আপনাদের কাছ থেকে এই সারা মাসে যত টাকা
  //          আসবে সমস্ত টাকার ৫০ ভাগ আমরা এমনিতেই গাজাতে পাঠিয়ে দিব ইনশাআল্লাহ।
  //          এভাবে দেশের অসহায় ও মাজলুম মুসলিম পরিবারদের যেমন উপকৃত করা সম্ভব ঠিক
  //          তেমনি সারা বিশ্বের মজলুম পরিবার দের পাশে দাঁড়ানো সম্ভব তাই সবাইকে
  //          আমাদেরকে সহযোগিতা করার জন্য অনুরোধ থাকবে ইনশাআল্লাহ।{" "}
  //        </p>{" "}
  //        <h3>
  //          {" "}
  //          "It is permissible to transfer Zakat from one place to another out of
  //          necessity and need, as seen in the current situation in Palestine. The
  //          entire world is uniting today to besiege and boycott them. Hence, they
  //          hold a collective right to the wealth of Muslims." - Shaykh Muhammad
  //          Ould Dedew, Shinqiti.
  //        </h3>
  //      </div>
  //    ),
  //    projectContact: (
  //      <div>
  //        <hr />
  //        <h4 className="mb-4">যাকাত ফান্ডের একাউন্ট নাম্বারঃ</h4>
  //        <p>Bank: Islami Bank Bangladesh Ltd. </p>
  //        <p>A/C No(Current): 20506990200112218 </p>
  //        <p>A/C Name: Saba Sanabil Zakat Fund</p>
  //        <p> Branch: Bhurungamari, Kurigram. </p>
  //        <p className="mb-4"> Routing: 125490108</p>
  //        <hr />

  //        <p> Rocket personal: 01778418210-4 </p>
  //        <p>Nagad Personal: 01778418210</p>
  //      </div>
  //    ),
  //    projectFbProfile: `https://www.facebook.com/mohammadnahidhasanrony`,
  //    projectOrgName: "Sab'a Sanabil Foundation",
  //    projectOrg: { _ID: "sdqmez004", name: "Sab'a Sanabil Foundation" },
  //    projectCreated: "March 2024",
  //    projectTag: "গাযা, Zakat",
  //    projectLink:
  //      "https://www.facebook.com/SabaSanabilFoundation/posts/pfbid02Z45ZEHHaDnenh4kzMCRAC1Vbgc6RBqQ1EAtg9qjdomLFf4CTxAS93UHHdxhV9Njjl",
  //    get getURL() {
  //      return `https://sadaqahmadeeasy.com/zakat/${this.slug}`;
  //    },
  //  },

  {
    _ID: "sdqmez003.3",
    projectImg: zakatmarkaztaqwa,
    projectHeading: "মারকাযুত তাক্বওয়া মাদরাসা",
    slug: "zakat-markaztaqwa",
    projectDetails: (
      <div>
        <h2>
          গত বছর সেপ্টেম্বরে যার ভিত্তি প্রস্তর স্থাপিত হয়েছিল এবং এই বছর - ২০২৩
          সালে মাদরাসায় নূরানী বিভাগ চালুর পরিকল্পনা করা হয়েছিল।
        </h2>
        <p>
          সকল প্রশংসা সেই মহান স্বত্তা আল্লাহ রব্বুল 'আলামীনের জন্য,যিনি আমাদের
          একমাত্র প্রতিপালনকারী এবং সৃষ্টিজগতের প্রতিটি ভালো কাজের পূর্ণতা
          দানকারী। হাজারো দরুদ আমাদের প্রিয় নবী হযরত মুহাম্মাদ ﷺ এর প্রতি।
        </p>

        <p>
          আপনাদের নিশ্চয়ই মনে আছে গাইবান্ধা জেলার সাদুল্লাপুর উপজেলার সেই
          প্রত্যন্ত অঞ্চলের মাদরাসা - "মারকাযুত তাক্বওয়া" এর কথা। গত বছর
          সেপ্টেম্বরে যার ভিত্তি প্রস্তর স্থাপিত হয়েছিল এবং এই বছর - ২০২৩ সালে
          মাদরাসায় নূরানী বিভাগ চালুর পরিকল্পনা করা হয়েছিল।
        </p>

        <p>
          আলহামদুলিল্লাহ, ছুম্মা আলহামদুলিল্লাহ। গত জানুয়ারী'২০২৩ থেকে মুহতামীম
          সাহেব, দুইজন শিক্ষক ও একজন অফিস স্টাফ সহ মোট ৪ জনকে নিয়ে মাদরাসার
          নুরাণী বিভাগ চালু এবং একই সাথে অ্যাকাডেমিক কার্যক্রম শুরু হয়। বর্তমানে
          মাদরাসায় নার্সারী ও ক্লাস ওয়ান - এই দুই ক্লাস মিলিয়ে মোট শিক্ষার্থীর
          সংখ্যা ৯৮ জন আলহামদুলিল্লাহ।
        </p>
        <p>
          এছাড়াও পরিকল্পনা অনুযায়ী ঈদের পর পরই শাওয়াল মাসে মাদরাসায় হিফজ বিভাগও
          চালু করা হবে ইন শা আল্লাহ। এই লক্ষ্যে ইতিমধ্যে হিফজ বিভাগে ছাত্র ভর্তি
          কার্যক্রম শুরু হয়েছে আলহামদুলিল্লাহ । কিন্তু আলাদা করে এই মুহুর্তে
          হিফজ বিভাগের ক্লাসরুম তৈরি করা সম্ভব না হওয়ায়, পুর্ব নির্মিত অফিস রুম
          ও গেস্টরুম হিফজ ক্লাসের জন্য ব্যবহার করা হবে।
        </p>
        <p>
          শুরুতে মাদরাসার কাঠামোগত কাজ ও অন্যান্য খাতে প্রায় ১০ লক্ষ টাকার
          প্রয়োজন হয়েছিল । অর্থ সংকট সহ মাদরাসা চালুর শত প্রতিবন্ধকতা থাকা
          সত্ত্বেও সকলের অদম্য ইচ্ছাশক্তি, সহযোগিতায় এবং কিছু ঋণ করে আল্লাহর
          ইচ্ছায় মাদরাসার কার্যক্রম চালু করা সম্ভব হয়েছে। কিন্ত ক্লাস চালু হলেও
          মাদরাসা বিল্ডিং এর জানালার কাজ, বারান্দা, প্লাস্টার হিফজ বিভাগের নতুন
          ক্লাসরুম, টয়লেট ও পানির ব্যবস্থা সহ আরো বেশ কিছু কাজ অর্থের অভাবে
          বর্তমানে থেমে আছে। এছাড়াও পুর্বের কাজগুলোর জন্য মাদরাসার ঋণও রয়েছে
          প্রায় ৩ লক্ষ টাকা।
        </p>
        <p>
          এমতাবস্থায় "মারকাযুত তাক্বওয়া মাদরাসা" এর লক্ষ্য পূরণে ও আল্লাহর
          ইচ্ছায় এর কাজকে বেগবান করতে আমাদের সকলেরই সাদাকায় জারিয়ার নিয়্যাতে
          এগিয়ে আসা উচিত। আর সাদাকার জন্য রমাদান মাসের চেয়ে উত্তম সময় আর কখন হতে
          পারে? এই রমাদানে আল্লাহ তার বান্দাকে সীমাহীন পুরস্কারের কথা বলেছেন।
          বান্দার প্রতিটি আমলকে এই রমাদানেই দশগুণ থেকে সাতশত গুণ পর্যন্ত বৃদ্ধির
          কথা বলা হয়েছে। আর সাদাকাহ হলো জাহান্নামের আগুন থেকে নিরাপত্তা। আদী
          ইবনে হাতেম রাদিয়াল্লাহু আনহু থেকে বর্ণিত এক হাদীসে নবী ﷺ বলেন, “তোমরা
          জাহান্নাম থেকে বাঁচো; যদিও খেজুরের এক টুকরো সাদাকাহ করে হয়!”
          [সহীহ-মুসলিম]
        </p>
        <p>
          তাই এই রমাদান মাসকে কাজে লাগিয়ে আমরা সকলেই সাদাকার হাত প্রশস্ত করি এবং
          এই পোস্ট নিজেদের আত্মীয় স্বজন সহ পরিচিত সকল গ্রুপে ছড়িয়ে দিয়ে সবাইকে
          সাদাকায় জারিয়াতে অংশগ্রহণের সুযোগ করে দেই ইন শা আল্লাহ।
        </p>
        <p>
          {" "}
          আমাদের উচিত জীবনের প্রতিটি ক্ষেত্রে ইসলামকে আঁকড়ে ধরা এবং যেভাবেই
          সম্ভব হোক ইসলামের দাওয়াহ এবং দ্বীন প্রতিষ্ঠার লক্ষ্যে সর্বাত্মক কাজ
          করা ও একে অপরকে সহযোগিতা করা। আল্লাহ আমাদের সকলের সকল ভালো কাজ ও
          চেষ্টা গুলোকে কবুল করুক। আমিন।
        </p>
      </div>
    ),
    projectContact: (
      <div>
        <hr />
        <h4 className="mb-4"> যাকাত পাঠানোর মাধ্যমঃ</h4>
        <p>Bank: Islami Bank Bangladesh </p>
        <p>A/C No: 2050 342 02 01296400 </p>
        <p>A/C Name: Md. Rakib chowdhury</p>
        <p> Branch: Baridhara </p>

        <hr />
        <p>নগদ/রকেট: 01740-247877</p>
        <p>নগদ/রকেট: 01301-456346</p>
        <p>
          বি: দ্র: যাকাত জন্য অবশ্যই রেফারেন্স যাকাত লিখবেন। অন্যথায় সাধারন
          সাদাকা হিসেবে গন্য হবে। যাকাতের অর্থ মাদ্রাসার যাকাত খাতে ব্যয়ের পর
          অতিরিক্ত অর্থ থাকলে মাদ্রসার বাহিরে যাকাতের খাত সমূহে ব্যয় হবে ইন শা
          আল্লাহ।
        </p>
        <p>
          যে কোনো প্রকার তথ্যের জন্য যোগাযোগ করুনঃ অফিস 01755091047- WhatsApp
        </p>
      </div>
    ),
    projectFbProfile: `https://www.facebook.com/nahiankhan.jisan`,
    projectOrgName: "মারকাযুত তাক্বওয়া মাদরাসা",
    projectOrg: { _ID: "sdqmez003", name: "মারকাযুত তাক্বওয়া মাদরাসা" },
    projectCreated: "April 2023",
    projectTag: "Madrasa, Zakat",
    projectLink:
      "https://www.facebook.com/nahiankhan.jisan/posts/pfbid02fE6Rrhun4zfxDJYsbBjidEUKwaufhe96oi2Ag4nJRgbDbgTaC6pttTnrxYx83bTgl",
  },
];

export function getZakatProjectList() {
  return ZakatProjectList;
}
