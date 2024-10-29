const ProjectList = ({ params }) => {
  console.log(params);
  return (
    <main>
      <h1>Project {params.name}</h1>
    </main>
  );
};

export default ProjectList;
