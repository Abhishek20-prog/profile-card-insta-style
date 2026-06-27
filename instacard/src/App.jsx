import Card from './components/Card.jsx';

const App = () => {
  let job = [{
  id: 1,
  company: "Amazon",
  logo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
  postedAt: "5 days ago",
  title: "Senior UI/UX Designer",
  jobType: "Part-time",
  level: "Senior Role",
  salary: "$120/hr",
  location: "Mumbai, India",
  buttonText: "Apply Now",
},
{
  id: 2,
  company: "Google",
  logo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
  postedAt: "6 days ago",
  title: "Senior Developer",
  jobType: "Part-time",
  level: "Senior Role",
  salary: "$200/hr",
  location: "Bengaluru, India",
  buttonText: "Apply Now",
},
{
  id: 3,
  company: "Microsoft",
  logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
  postedAt: "2 days ago",
  title: "Frontend Developer",
  jobType: "Full-time",
  level: "Junior Role",
  salary: "$90/hr",
  location: "Hyderabad, India",
  buttonText: "Apply Now",
},
{
  id: 4,
  company: "Netflix",
  logo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
  postedAt: "1 day ago",
  title: "React Developer",
  jobType: "Remote",
  level: "Mid Role",
  salary: "$150/hr",
  location: "Remote",
  buttonText: "Apply Now",
},
{
  id: 5,
  company: "Adobe",
  logo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
  postedAt: "3 days ago",
  title: "Web Designer",
  jobType: "Part-time",
  level: "Mid Role",
  salary: "$110/hr",
  location: "Noida, India",
  buttonText: "Apply Now",
},
{
  id: 6,
  company: "Spotify",
  logo: "https://cdn.simpleicons.org/spotify",
  postedAt: "7 days ago",
  title: "Product Designer",
  jobType: "Full-time",
  level: "Senior Role",
  salary: "$180/hr",
  location: "Mumbai, India",
  buttonText: "Apply Now",
},
{
  id: 7,
  company: "Airbnb",
  logo: "https://cdn.simpleicons.org/airbnb",
  postedAt: "4 days ago",
  title: "UI Developer",
  jobType: "Remote",
  level: "Junior Role",
  salary: "$95/hr",
  location: "Pune, India",
  buttonText: "Apply Now",
},
{
  id: 8,
  company: "Meta",
  logo: "https://cdn.simpleicons.org/meta",
  postedAt: "8 days ago",
  title: "Software Engineer",
  jobType: "Full-time",
  level: "Senior Role",
  salary: "$220/hr",
  location: "Gurugram, India",
  buttonText: "Apply Now",
},
{
  id: 9,
  company: "Swiggy",
  logo: "https://cdn.simpleicons.org/swiggy",
  postedAt: "2 weeks ago",
  title: "Frontend Intern",
  jobType: "Internship",
  level: "Fresher Role",
  salary: "$40/hr",
  location: "Bengaluru, India",
  buttonText: "Apply Now",
},
{
  id: 10,
  company: "Zomato",
  logo: "https://cdn.simpleicons.org/zomato",
  postedAt: "9 days ago",
  title: "Junior Web Developer",
  jobType: "Full-time",
  level: "Junior Role",
  salary: "$70/hr",
  location: "Delhi, India",
  buttonText: "Apply Now",
}
];
  

  return (
    <div className="parent">
      {job.map((elem) => (
        <Card
          key={elem.id}
          img={elem.logo}
          name={elem.company}
          days={elem.postedAt}
          position={elem.title}
          timing={elem.jobType}
          others={elem.level}
          salary={elem.salary}
          location={elem.location}
          btn={elem.buttonText}
        />
      ))}
    </div>
  );
};

export default App;