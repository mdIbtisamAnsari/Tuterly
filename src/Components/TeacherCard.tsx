type TeacherCardProps = {
  id: number;
  profile: string;
  name: string;
  subject: string[];
  rate: number;
  experience: number;
  rating: number;
};

const TeacherCard = ({ profile="../logo.svg", name="Name", subject=["Subject1","Subject2"], rate=0, experience=0,rating=4 }: TeacherCardProps) => {
  return (
    <div className='bg-secondary rounded p-5 flex gap-4 w-full'>
      <img
        src={profile}
        alt={name}
        className='w-14 h-14 rounded-full object-cover shrink-0'
      />
      <div className='flex flex-col gap-1 flex-1 min-w-0'>
        <div className='flex items-start justify-between gap-2'>
          <h2 className='font-body font-semibold text-accent text-base truncate'>{name}</h2>
          <span className='text-sm font-medium text-tersary shrink-0'>${rate}<span className='text-xs font-normal'>/hr</span></span>
        </div>
        <span className='text-xs text-tersary flex gap-1 flex-wrap mt-1'>
          {subject.map((sub) => (
            <span className="text-xs text-accent bg-accent/40 px-2 py-0.5 rounded-full w-fit">{sub}</span>
          ))}
        </span>
        <div className='flex items-center justify-between mt-1'>
          <p className='text-xs text-tersary'>{experience} yr{experience !== 1 ? 's' : ''} experience</p>
          <span className='text-xs text-tersary flex items-center gap-0.5'>⭐ {rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;