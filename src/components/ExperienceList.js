import experiences from "../data/ExperienceItems";

const ExperienceList = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6 mt-8 lg:mt-0">
      <h2 className="text-3xl font-semibold mb-6">Work Experience</h2>
      <div className="overflow-y-auto max-h-[calc(100vh-300px)] pr-2">
        {experiences.map((job, index) => (
          <div key={index} className="mb-8 last:mb-0">
            <h3 className="text-xl font-medium">{job.title}</h3>
            <p className="text-lg text-gray-600">{job.company}</p>
            <p className="text-md text-gray-500 mb-2">{job.date}</p>
            <ul className="list-disc list-inside">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-md text-gray-700 mb-1">{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
  };
  
  export default ExperienceList;
  