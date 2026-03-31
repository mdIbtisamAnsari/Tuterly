type StudentCardProps = {
  id: number;
  name: string;
  subject: string[];
  rate: number;
};

const StudentCard = ({ name="Name", subject=["Subject1","Subject2"], rate=0 }: StudentCardProps) => {
  return (
    
  );
};

export default StudentCard;