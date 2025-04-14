export const Skills = () => {
  return (
    <div className="flex flex-col gap-y-6 px-4 py-4 w-full items-center">
      <h1 className="text-3xl text-green-500 font-medium px-10 py-2">
        My Skills
      </h1>
      <div className="md:flex-row flex flex-col gap-y-6 md:gap-x-6">
        <div className="flex gap-x-4 items-center border-2 border-gray-700">
          <img className="w-15" src="/images/node.svg" alt="node" />
          <img className="w-15" src="/images/typescript.svg" alt="typescript" />
          <img className="w-15" src="/images/postgresql.svg" alt="postgres" />
          <img className="w-15" src="/images/react.svg" alt="react" />
          <img className="w-15" src="/images/tailwind.svg" alt="tailwind" />
        </div>
        <ul className="px-6 py-4 border-gray-600 border-2 rounded-md list-disc text-white flex flex-col gap-y-6">
          <li>
            <span className="text-green-500 font-medium underline px-2 py-1 text-xl">
              Front-End :
            </span>
            HTML, CSS, JavaScript, Typescript, React, Next.js
          </li>
          <li>
            <span className="text-green-500 font-medium underline px-2 py-1 text-xl">
              Back-End :
            </span>
            Express.js, Node.js, Golang, C#
          </li>
          <li>
            <span className="text-green-500 font-medium underline px-2 py-1 text-xl">
              Database :
            </span>
            MongoDb, PostgreSQL
          </li>
          <li>
            <span className="text-green-500 font-medium underline px-2 py-1 text-xl">
              Other technologies :
            </span>
            Docker, Git, CI/CD
          </li>
        </ul>
      </div>
    </div>
  );
};
