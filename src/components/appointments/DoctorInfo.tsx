import { useAvailableDoctors } from "@/hooks/use-doctors";
import Image from "next/image";

function DoctorInfo({ doctorId }: { doctorId: string }) {
  const { data: doctors = [] } = useAvailableDoctors();
  const doctor = doctors.find((d) => d.id === doctorId);

  if (!doctor) return null;

  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&background=random&size=128&bold=true&rounded=true`;

  return (
    <div className="flex items-center gap-4">
      <Image
        src={avatarUrl}
        alt={doctor.name}
        width={48}
        height={48}
        className="w-12 h-12 rounded-full object-cover"
        unoptimized
        onError={(e) => {
          e.currentTarget.src = avatarUrl;
        }}
      />
      <div>
        <h3 className="font-medium">{doctor.name}</h3>
        <p className="text-sm text-muted-foreground">{doctor.speciality || "General Doctor"}</p>
      </div>
    </div>
  );
}

export default DoctorInfo;