import experiences from "../data/ExperienceItems";

const ExperienceList = () => {
    return (
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 ml-4">
        <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
        <div className="overflow-y-auto max-h-96 pr-2">
          {experiences.map((job, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <h3 className="text-lg font-medium">{job.title}</h3>
              <p className="text-sm text-gray-600">{job.company}</p>
              <p className="text-sm text-gray-500">{job.date}</p>
              <ul className="list-disc list-inside mt-2">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm text-gray-700">{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ExperienceList;
  