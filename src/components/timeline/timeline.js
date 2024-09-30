import React from "react";

const timelineData = [
  {
    text: "Started accumulating non-profit orgs",
    date: "26 November, 2021",

    link: {
      url: "https://www.facebook.com/sadaqahmadeeasy/videos/372021888055002",
      text: "Check how we presented this",
    },
  },
  {
    text: "Bismillah",
    date: "December 4, 2021",

    link: {
      url: "https://www.facebook.com/photo/?fbid=100318665839993&set=a.166914219327319",
      text: "Check it out here",
    },
  },
  {
    text: "App Launched",
    date: "January 17, 2024",

    link: {
      url: "https://www.youtube.com/watch?v=wVMbjl3-OG8",
      text: "App launching video",
    },
  },
  {
    text: "1k+ installs",
    date: "March 16, 2024",

    link: {
      url: "https://play.google.com/store/apps/details?id=com.sadaqahmadeeasy.app",
      text: "Google play store",
    },
  },
];

const TimelineItem = ({ data }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <time>{data.date}</time>
        <p>{data.text}</p>
        {data.link && (
          <a href={data.link.url} target="_blank" rel="noopener noreferrer">
            {data.link.text}
          </a>
        )}
        <span className="circle" />
      </div>
    </div>
  );
};

const Timeline = () =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );

export default Timeline;
