//import ramadansanabil from "../img/ramadansanabil.jpeg";
//import ramadansadaqahtc from "../img/ramadansadaqahtc.jpeg";
//import ramadanovijatrik from "../img/ramadanovijatrik.jpeg";
//import mosharaloiftar from "../img/mosharaloiftar.jpeg";

//serial: 4

const RamadanProjects = [
  //  {
  //    _ID: "sdqmer001.1",
  //    projectImg: ramadanovijatrik,
  //    projectHeading: "রমাদ্বন ফুড প্রজেক্ট - ২০২৪",
  //    metaTitle: "Ramadan Project by Ovijatrik",
  //    slug: "ramadan-ovijatrik",
  //    projectDetails: (
  //      <div>
  //        <h3>
  //          লক্ষ্য: ১০০০ সিয়ামরত মানুষের জন্য পুরো রমাদ্বন জুড়ে ফুড প্যাকেজের
  //          ব্যবস্থা করা।
  //        </h3>
  //        <p>
  //          ''যে ব্যক্তি কোনো রোজাদারকে ইফতার করাবে সে ওই রোজাদারের সমপরিমাণ
  //          সওয়াব পাবে এবং রোজাদারের সওয়াব এর কোন কমতি হবে না। '' আপনি যদি
  //          সারামাস একজন দরিদ্র, অভাবী মানুষকে ইফতারি ও সেহরি করাতে চান,
  //          ইনশাআল্লাহ অভিযাত্রিক Ovijatrik এর রমাদ্বন ফুড প্রজেক্টে অংশ নিতে
  //          পারেন। সামর্থ্য অনুযায়ী ১ জন, ২জন, ৫ জন, ১০ জন, ১০০ জন বা তারো বেশি
  //          মানুষের জন্য ফুড প্যাকেজের ব্যবস্থা করে দিতে পারেন।
  //        </p>
  //        <p>দরিদ্র অসহায় রোজাদারদের জন্য ইফতার প্যাকেজ—</p>
  //        <ul>
  //          <li>চাল</li>
  //          <li>তেল</li>
  //          <li>মসুর</li>
  //          <li>ডাল</li>
  //          <li>লবন</li>
  //          <li>ছোলা </li>
  //          <li>বুট</li>
  //          <li>খেজুর</li>
  //        </ul>
  //        <p>১০০০/- টাকায় ১ জনের পুরো রমাদ্বনের ইফতার ও সেহরি</p>
  //        <h4>
  //          <b>লাস্ট ডেট: ৮/৩/২০২৪</b>
  //        </h4>
  //      </div>
  //    ),
  //    projectContact: (
  //      <div>
  //        <hr />
  //        <h4 className="mb-4">টাকা পাঠানোর একাউন্ট নাম্বারঃ</h4>
  //        <p>নগদ / রকেট: </p>
  //        <p>01717017645</p>
  //        <p>Reference: RFP-24 (Sadaqah Made Easy)</p>
  //        <br />
  //        <h4 className="mb-4">ব্যাংক একাউন্ট নাম্বারঃ </h4>
  //        <p>Bank: South Bangla Agriculture & Commerce Bank Limited (SBAC)</p>
  //        <p>A/C Name: Ovijatrik Somaj Kollyan Sangsthan</p>
  //        <p>A/C No: 0054131000018 </p>
  //        <p>Routing Number: 270280676 </p>
  //        <p>Branch: Dinajpur </p>
  //        <hr />
  //        <h4 className="mb-4">PayPal: </h4>
  //        <p>ovijatrik.dinajpur@yahoo.com</p>
  //      </div>
  //    ),
  //    projectFbProfile: `https://www.facebook.com/md.arifulhuq`,
  //    projectOrgName: "অভিযাত্রিক Ovijatrik",
  //    projectOrg: { _ID: "sdqmer001", name: "অভিযাত্রিক Ovijatrik" },
  //    projectCreated: "Feb 2024",
  //    projectTag: "Ramadan, ইফতার",
  //    projectLink:
  //      "https://www.facebook.com/photo?fbid=778226607666369&set=a.617138323775199",
  //  },
  //{
  //  _ID: "sdqmer002.1",
  //  projectImg: ramadansadaqahtc,
  //  projectHeading: "চলুন শরীক হই, একটি পরিবারের রামাদানে",
  //  metaTitle: "Sadaqah (সাদাকা)",
  //  slug: "ramadan-sadaqahtc",
  //  projectDetails: (
  //    <div>
  //      <h4>
  //        আমরা চাইছি, আপনারা-আমরা সবাই মিলে এমন শত শত রোজাদারের সাওয়াবের ভাগিদার
  //        হতে।
  //      </h4>
  //      <p>
  //        আসসালামু আলাইকুম বছরঘুরে আবারও দরজার কড়া নাড়ছে পবিত্র মাস রমাদান।
  //        প্রতিবারের ন্যায় এইবারও সাদাকা-র পক্ষ থেকে আমরা রমাদানের মাসব্যাপী
  //        খাদ্যসামগ্রী নিয়ে সুবিধাবঞ্চিত কিছু পরিবারের পাশে দাঁড়াতে চাইছি।
  //        আল্লাহ্‌র অশেষ মেহেরবানিতে বিগত কয়েক বছরের প্রজেক্টের মাধ্যমে আমরা
  //        প্রায় আট শতাধিক (৮০০+) পরিবারের সাথে রমাদানের খাবার ভাগ করে নিয়েছি।
  //        তারই ধারাবাহিকতায় এবার আমাদের লক্ষ্য তিনশটি (৩০০) পরিবারের পাশে
  //        দাঁড়ানো।
  //      </p>
  //      <p>
  //        আমাদের এই প্রজেক্টের উদ্দেশ্য কী? খুবই সহজ। আমরা সুবিধাবঞ্চিত, দরিদ্র
  //        ও অসহায় কিছু পরিবারকে পুরো একমাসের খাবারের ব্যবস্থা করতে চাই। হ্যাঁ,
  //        আমরা হয়তো কোন পরিবারের জন্যই পেটভরা খাবারের ব্যবস্থা করতে পারবো না।
  //        সেটা সম্ভবও নয়। কিন্তু আমরা চেষ্টা করি যাতে এই রামাদানে তাদের কেউ
  //        সাহরি ছাড়া রোজা না রাখে, কেবল পানি দিয়ে ইফতার না করে। রাসূল
  //        সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম বলেছেন, “যে ব্যক্তি কোন রোজাদারকে ইফতার
  //        করাবে, সে (রোজাদারের) সমান সাওয়াব পাবে। আর তাতে রোজাদারের সাওয়াবের
  //        কিছুই কমবে না।”
  //      </p>
  //      <p>
  //        তাই আমরা চাইছি, আপনারা-আমরা সবাই মিলে এমন শত শত রোজাদারের সাওয়াবের
  //        ভাগিদার হতে। কে জানে, এটাই হয়তো আমাদের জীবনের শেষ রামাদান? আল্লাহই
  //        ভালো জানেন। একটি পরিবারের জন্য আমাদের রামাদান প্যাকেজে যা থাকছে
  //      </p>
  //      <p>একটি পরিবারের জন্য আমাদের রামাদান প্যাকেজে যা থাকছে:</p>
  //      <ol>১. চাল – ১০ কেজি</ol>
  //      <ol> ২. আলু – ৫ কেজি</ol>
  //      <ol>৩. ডাল – ২ কেজি </ol>
  //      <ol>৪. তেল – ২ লিটার</ol>
  //      <ol>৫. ছোলা – ২ কেজি</ol>
  //      <p>
  //        <b>পুরো প্যাকেজের মূল্য ১৬০০ টাকা।</b>
  //      </p>
  //      <p>
  //        আমরা চাইলেই কেবল ইফতারের আইটেম দিয়েই সেরে ফেলতে পারতাম। কিন্তু
  //        দুর্মূল্যের এই সময়টাতে যেখানে মানুষের দুই বেলা খাবারই অনিশ্চিত, সেখানে
  //        ইফতারের আলাদা আইটেম অনেকের কাছেই বিলাসিতা ঠেকতে পারে। আমরা চাই, সাহরি
  //        হোক আর ইফতার, সবাই যেন পুরো মাসটা কোন বেলা অভুক্ত না থাকে।
  //      </p>
  //      <p>
  //        আপনি চাইলে একটি পুরো প্যাকেজের পরিমাণ সাদাকা করে একটি পরিবারের পাশে
  //        সারা মাসের জন্য দাঁড়াতে পারেন, অথবা আপনার সাধ্যানুযায়ী সাদাকা করে
  //        আমাদের এই প্রজেক্টে অংশ নিতে পারেন। আল্লাহ প্রতিটি সাদাকাকে কবুল করে
  //        নেবেন ইন শা আল্লাহ।
  //      </p>
  //    </div>
  //  ),
  //  projectContact: (
  //    <div>
  //      <div>
  //        <hr />
  //        <h4 className="mb-4">টাকা পাঠানোর একাউন্ট নাম্বারঃ</h4>
  //        <p>নগদ / রকেট (Personal): </p>
  //        <p>01919639791</p>
  //        <p>Reference: Sadaqah Made Easy</p>
  //        <p>নগদ (Personal): </p>
  //        <p>01822268474</p>
  //        <p>Reference: Sadaqah Made Easy</p>
  //        <br />
  //        <h4 className="mb-4">ব্যাংক একাউন্ট নাম্বারঃ </h4>
  //        <p>Bank: Islami Bank Bangladesh.</p>
  //        <p>A/C Name: MISBAH UDDIN AHMAD</p>
  //        <p>A/C No: 20501930203364301 </p>
  //        <p>Routing Number: 270280676 </p>
  //        <p>Branch: CDA Avenue Brunch, Chattogram.</p>
  //      </div>
  //    </div>
  //  ),
  //  projectFbProfile: `https://www.facebook.com/abirbinayubkhan`,
  //  projectOrgName: "সাদাকা Sadaqah The Charity",
  //  projectOrg: { _ID: "sdqmer002", name: "সাদাকা Sadaqah The Charity" },
  //  projectCreated: "Feb 2024",
  //  projectTag: "Ramadan, রমাদান",
  //  projectLink:
  //    "https://www.facebook.com/sadaqahthecharity/posts/pfbid02NZf38vq1FNnN95Vasp5TKLQ5Y2HwWYutPf9N2hYoqMfFHoERF5zusW5V9DyTBUANl",
  //},
  //  {
  //    _ID: "sdqmer001.1",
  //    projectImg: ramadansanabil,
  //    projectHeading: "রমাদান প্রজেক্ট ২০২৩",
  //    metaTitle: "Sab'a Sanabil Foundation",
  //    slug: "ramadan-sanabil",
  //    projectDetails: (
  //      <div>
  //        <h4 className="mb-3">
  //          অন্তত একটি রমাদান প্যাকেজ দিয়ে হলেও এই রমাদানে অংশ নিনঃ
  //        </h4>
  //        <p>
  //          যখন এই পোস্ট টি লিখতে বসেছি তখন ও ভাবছিলাম আল্লাহ যেন সেই মানুষগুলোর
  //          জন্য ইফতার ও সেহরীর ব্যবস্থা করে দেন যারা সারাবছর অপেক্ষায় থাকে আমাদের
  //          মাধ্যমে অল্প হলেও যেন কিছু ইফতার সামগ্রীর ব্যবস্থা থাকে। ইতিমধ্যে
  //          পাহাড় ও অন্যান্য জায়গা থেকে ইফতার সামগ্রীর আবেদন এসেছে কিন্তু বেশ কিছু
  //          দিন ফেসবুক আমাদের পেইজের পোস্টগুলোর রিচ কমিয়ে দিয়েছে ফলে ফান্ড ও আগের
  //          তুলনায় অনেক কমে গিয়েছে। কেবলমাত্র আল্লাহর উপর ভরসা। প্রয়োজন অনেক তবে
  //          সামর্থ্য সীমিত।
  //        </p>
  //        <br />
  //        <p>যে সমস্ত জায়গায় ইফতার সামগ্রীর প্রয়োজনঃ</p>
  //        <ol>১. বান্দরবান ও অন্যান্য পাহাড়ী এলাকার নওমুসলিম পরিবার।</ol>
  //        <ol> ২. চা বাগানের নতুন মসজিদকে কেন্দ্র করে গড়ে ওঠা মুসলিম সমাজ</ol>
  //        <ol>৩. উত্তরবঙ্গের বেশ কিছু এতিম-বিধবা সহ দরিদ্র পরিবার </ol>
  //        <ol>
  //          ৪. প্রত্যন্ত এলাকায় নির্মিত আমাদের মসজিদ ভিত্তিক মাদ্রাসা ও আর ও বেশ
  //          কিছু জায়গার নাম আছে এ লিস্টে।
  //        </ol>
  //        <b>
  //          এ বছর প্রতিটি প্যাকেজের দাম রাখা হয়েছে ৬৫০টাকা। আইটেম ও দাম প্রয়োজনে
  //          কিছুটা বাড়তে বা কমতে পারে। এছাড়া প্যাকেজে কিছু আইটেম রাখা হবে যা দিয়ে
  //          ইফতারীর পাশে সেহরীর প্রয়োজন ও মেটানো যাবে ইনশাআল্লাহ।{" "}
  //        </b>
  //        <br />
  //        <br />
  //        <p>প্যাকেজ এ যা থাকছেঃ</p>
  //        <ul>চাল - ৩ কেজি </ul>
  //        <ul>ডাল - হাফ কেজি </ul>
  //        <ul>খেজুর - আধা কেজি </ul>
  //        <ul>ছোলা - ১ কেজি </ul>
  //        <ul>মুড়ি - হাফ কেজি </ul>
  //        <ul>তেল - হাফ লিটার</ul>
  //        <br />
  //        <b>
  //          এ বছর আমাদের টার্গেট ৮০০টি প্যাকেজ। সবাই মিলে এগিয়ে আসলে ইন শা আল্লাহ
  //          এই টার্গেট পূর্ণ করা সম্ভব ইন শা আল্লাহ।{" "}
  //        </b>
  //        <br />
  //        <br />
  //        <p>
  //          “যে ব্যক্তি কোন রোজাদারকে ইফতার করাবে সে রোজাদারের সম পরিমাণ সওয়াব
  //          পাবে; রোজাদারের সওয়াব থেকে একটুও কমানো হবে না।” (সুনানে তিরমিযি ৮০৭)
  //        </p>
  //      </div>
  //    ),
  //    projectContact: (
  //      <div>
  //        <hr />
  //        <div className="mb-1">
  //          <h4>Donation closed</h4>
  //          <hr />
  //        </div>
  //      </div>
  //    ),
  //    projectFbProfile: `https://www.facebook.com/mohammadnahidhasanrony`,
  //    projectOrgName: "Sab'a Sanabil Foundation",
  //    projectOrg: { _ID: "sdqme001", name: "Sab'a Sanabil Foundation" },
  //    projectCreated: "March 2023",
  //    projectTag: "রমাদানআপিল, RAMADAN",
  //    projectLink:
  //      "https://www.facebook.com/SabaSanabilFoundation/posts/pfbid0CgeqLx7sTk4ixq8kja1CQVNkoV94u5BNyh49iymmXi4ZBnYKQDNvvvSuc7KD8Mqgl",
  //  },
  //  {
  //    _ID: "sdqme004.1",
  //    projectImg: mosharaloiftar,
  //    projectHeading: "Project Iftar - 24",
  //    metaTitle: "Moshal Alo",
  //    slug: "mosharalo-iftar",
  //    projectDetails: (
  //      <div>
  //        <h4 className="mb-3">
  //          দরিদ্র মানুষের ইফতারের প্লেটের বেশির ভাগ অংশ ক্ষুধার হাহাকার আর
  //          অস্বচ্ছলতার ছোঁয়া দিয়েই পূর্ণ থাকে। রমাদানে দ্রব্যমূল্যের ঊর্ধ্বগতি
  //          কিছুটা স্বাভাবিক ঘটনা হলেও, এ বছর জিনিসপত্রের দাম কয়েক গুণে বেড়ে
  //          গিয়েছে।
  //        </h4>
  //        <p>
  //          এক বৃদ্ধা মায়ের কথা মনে পড়ে, যিনি রাস্তার পাশের জঙ্গল থেকে শাকপাতা
  //          তুলে ইফতারের প্রস্তুতি নিচ্ছিলেন। অভাবের তীব্রতা কতটা হলে মানুষ এতটা
  //          অসহায় হয়ে পড়ে? এমন চিত্র সারাদেশে খুঁজলে অহরহ পাওয়া যাবে। হয়তো
  //          আমাদের আশেপাশেই এমন অনেকে আছেন যারা চক্ষু লজ্জায় কিছু বলতে পারছেন না।
  //        </p>
  //        <p>
  //          মশাল আলো সবসময় প্রান্তিক মানুষের পাশে দাঁড়ানোর চেষ্টা করেছে। আপনাদের
  //          সহায়তায় এ বছর রমাদানের শেষ ভাগে দরিদ্র কিছু পরিবারের হাতে প্যাকেজ
  //          আকারে ইফতারের বাজার সামগ্রী উপহার দেয়ার উদ্যোগ নিতে যাচ্ছি,
  //          ইনশাআল্লাহ। এই আত্মশুদ্ধি ও ত্যাগের মাসকে আরও বেশি বরকতময় করতে এবং
  //          প্রান্তিক মানুষের পাশে দাঁড়াতে এগিয়ে আসুন।
  //        </p>
  //        <p>• ইভেন্ট লোকেশন: শৈলজানা কুড়ালিয়া পাড়া, মির্জাপুর, টাংগাইল।</p>
  //        <p>• ইফতার প্যাকেজে যা যা থাকছে: (পরিবর্তন হতে পারে)</p>
  //        <ol>
  //          <li>চাল</li>
  //          <li>ডাল</li>
  //          <li>আলু</li>
  //          <li>পেঁয়াজ</li>
  //          <li>তেল</li>
  //          <li>চিনি</li>
  //          <li>লবণ</li>
  //          <li>চিড়া</li>
  //        </ol>
  //        <p>
  //          -ফান্ড কালেকশনের উপর নির্ভর করে প্যাকেজ এবং উপদানের পরিমাণ নির্ধারণ
  //          করা হবে, ইনশাআল্লাহ্‌।{" "}
  //        </p>
  //        <p></p>
  //        <b>
  //          এ বছর আমাদের টার্গেট ৮০০টি প্যাকেজ। সবাই মিলে এগিয়ে আসলে ইন শা আল্লাহ
  //          এই টার্গেট পূর্ণ করা সম্ভব ইন শা আল্লাহ।{" "}
  //        </b>
  //        <br />
  //        <br />
  //        <p>
  //          “যে ব্যক্তি কোন রোজাদারকে ইফতার করাবে সে রোজাদারের সম পরিমাণ সওয়াব
  //          পাবে; রোজাদারের সওয়াব থেকে একটুও কমানো হবে না।” (সুনানে তিরমিযি ৮০৭)
  //        </p>
  //        <p>‘Join Hands, Spread Hope’ </p>
  //        <b>- 𝗨𝗡𝗜𝗧𝗘𝗗 ∣ 𝗜𝗡𝗩𝗜𝗡𝗖𝗜𝗕𝗟𝗘</b>
  //      </div>
  //    ),
  //    projectContact: (
  //      <div>
  //        <hr />
  //        <div className="mb-1">
  //          <h4 className="mb-4">মোবাইল ব্যাংকিং একাউন্ট নাম্বারঃ</h4>
  //          <h4 className="mb-4 fw-bold">CLOSED</h4>
  //          {/*<h4>নগদ: 01742-296887 </h4>
  //          <p>Reference: Sadaqah Made Easy, 99</p>
  //          <br />
  //          <h4 className="mb-4">ব্যাংক একাউন্ট নাম্বারঃ </h4>
  //          <p>Bank: Agrani Bank</p>
  //          <p>A/C Name: Moshal Alo Trust</p>
  //          <p>A/C No: 0200021485744 </p>
  //          <p>Branch: Karatia, Tangail</p>*/}
  //        </div>
  //      </div>
  //    ),
  //    projectFbProfile: `https://www.facebook.com/tanzil.sshuvo`,
  //    projectOrgName: "Moshal Alo",
  //    projectOrg: { _ID: "sdqme004", name: "Moshal Alo" },
  //    projectCreated: "March 2024",
  //    projectTag: "ইফতার, Ramadan",
  //    projectLink: "https://fb.me/e/6WfJxjhds",
  //  },
];

export function getRamadanProjects() {
  return RamadanProjects;
}
