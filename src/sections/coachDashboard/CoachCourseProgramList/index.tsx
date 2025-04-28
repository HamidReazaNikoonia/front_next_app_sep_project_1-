const CoursesPage = ({ programs }: { programs: CoachCourseProgram[] }) => {
  return (
    <div className="mx-4 flex flex-col flex-wrap justify-center gap-4 md:mx-0 md:flex-row md:justify-start">
      {programs.map(program => (
        <div key={program._id} className="h-96 w-full  md:w-[48%]">
          <CoachCourseCard program={program} />
        </div>
      ))}
    </div>
  );
};

export default CoursePage;