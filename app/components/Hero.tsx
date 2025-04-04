export const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-x-8 gap-y-6 px-4 py-4 justify-between w-full bg-black-700 rounded-md shadow-green-500 shadow-md">
      <div className="hidden md:block w-[30vw] aspect-square bg-black-700 clip-polygon relative overflow-hidden rounded-lg">
        <img
          src="/images/pic_ayush.jpg"
          alt="Pentagon Image"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="md:hidden w-full flex justify-center">
        <img
          src="/images/pic_ayush.jpg"
          alt="Pentagon Image"
          className="md:hidden w-[25%] h-[25%] aspect-square object-cover rounded-[50%]"
        />
      </div>
      <div className="text-white font-medium flex items-start px-6 py-4 flex-col justify-center gap-y-6 md:w-[50vw] w-full">
        <code>{`<span> Hey, I'm Ayush </span>`} </code>
        <h1 className="text-2xl md:text-5xl font-medium">
          <span className="text-green-500">{`{Full Stack}`}</span> Developer
        </h1>
        <p className="text-wrap">
          I have knowlege in cutting edge technologies such as{" "}
          <span className="text-red-500">NodeJS</span>,{" "}
          <span className="text-red-500">ExpressJS</span>,{" "}
          <span className="text-red-500">Typescript</span>,{" "}
          <span className="text-red-500">ReactJS</span>,{" "}
          <span className="text-red-500">Docker</span>,{" "}
          <span className="text-red-500">C#</span>,{" "}
          <span className="text-red-500">SQL</span> and{" "}
          <span className="text-red-500">Golang</span>... I deliver projects
          that are both robust and innovative.
        </p>
        <div className="flex gap-x-4 items-center">
          <img className="w-10" src="/images/node.svg" alt="node" />
          <img className="w-10" src="/images/typescript.svg" alt="typescript" />
          <img className="w-10" src="/images/postgresql.svg" alt="postgres" />
          <img className="w-10" src="/images/react.svg" alt="react" />
          <img className="w-10" src="/images/tailwind.svg" alt="tailwind" />
        </div>
        <span className="text-sm">... and more</span>
      </div>
    </div>
  );
};
