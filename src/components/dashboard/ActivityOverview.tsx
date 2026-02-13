import HealthOverview from "./DentalHealthOverview";
import NextAppointment from "./NextAppointment";

function ActivityOverview() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
      <HealthOverview />
      <NextAppointment />
    </div>
  );
}
export default ActivityOverview;