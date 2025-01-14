const SectionTitle = ({ title, subHeading }) => {
  return (
    <div className="mt-12">
      <h1 className="text-5xl font-bold text-center">{title}</h1>
      <p className="lg:text-base text-medium lg:w-full w-3/4 mx-auto font-bold text-textSecColor text-center mt-2">
        {subHeading}
      </p>
    </div>
  );
};

export default SectionTitle;
