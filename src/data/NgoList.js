import crpLogo from "../img/crpLogo.jpeg";

//last serial: 27

export const NgoList = [
  {
    _ID: "sdqmengo001",
    name: "CRP HEAR Project",
    slug: "crp-hear",
    img: crpLogo,
    type: "NGO",
    tag: "প্রতিবন্ধী, Disability",
    founded: "1979",
    contact: "+88 01730-059561",
    details: (
      <div>
        <h4>CRP: Center for the rehabilitation of the paralysed</h4>
        <h4 className="mb-5">
          HEAR: Harmonization, Empowerment and Accountability for the Persons
          with Disabilities (HEAR) project
        </h4>
        <p>
          <h5>Core values</h5>
          <ul className="list-group mt-4 mb-4">
            <li className="list-group-item">Sensitivity </li>
            <li className="list-group-item">Compassion</li>
            <li className="list-group-item">Respect</li>
            <li className="list-group-item">Collaboration</li>
            <li className="list-group-item">Commitment to Excellence</li>
            <li className="list-group-item">Cleanliness</li>
          </ul>
        </p>
      </div>
    ),
    orgWeb: "https://www.crp-bangladesh.org/",
    orgSocial: "https://www.facebook.com/CRP.org",
  },
];

export function getNgos() {
  return NgoList.filter((o) => o);
}
