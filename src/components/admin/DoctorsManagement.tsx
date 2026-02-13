import { useGetDoctors, useDeleteDoctor } from "@/hooks/use-doctors";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  EditIcon,
  MailIcon,
  PhoneIcon,
  PlusIcon,
  StethoscopeIcon,
  TrashIcon,
  Search,
  Filter,
} from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Badge } from "../ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import toast from "react-hot-toast";
import { Doctor } from "@prisma/client";
import AddDoctorDialog from "./AddDoctorDialog";
import EditDoctorDialog from "./EditDoctorDialog";
import { Input } from "../ui/input";

// Type for doctor with appointment count
type DoctorWithCount = Doctor & {
  appointmentCount: number;
};

function DoctorsManagement() {
  const { data: doctors = [] } = useGetDoctors();
  const { mutate: deleteDoctor, isPending: isDeleting } = useDeleteDoctor();

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorWithCount | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [doctorToDelete, setDoctorToDelete] = useState<DoctorWithCount | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterActive, setFilterActive] = useState<"all" | "active" | "inactive">("all");

  const handleEditDoctor = (doctor: DoctorWithCount) => {
    setSelectedDoctor(doctor);
    setIsEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setIsEditDialogOpen(false);
    setSelectedDoctor(null);
  };

  const handleDeleteClick = (doctor: DoctorWithCount) => {
    setDoctorToDelete(doctor);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (!doctorToDelete) return;

    deleteDoctor(doctorToDelete.id, {
      onSuccess: () => {
        toast.success("Doctor deleted successfully");
        setDeleteDialogOpen(false);
        setDoctorToDelete(null);
      },
      onError: (error: any) => {
        toast.error("Failed to delete doctor");
      },
    });
  };

  // Filter doctors based on search and active status
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch = 
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.speciality.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = 
      filterActive === "all" ||
      (filterActive === "active" && doctor.isActive) ||
      (filterActive === "inactive" && !doctor.isActive);

    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <Card className="mb-8 sm:mb-10 md:mb-12 hover:shadow-lg transition-shadow">
        <CardHeader className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <StethoscopeIcon className="size-4 sm:size-5 text-primary" />
                Doctors Management
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm mt-1">
                Manage and oversee all doctors in your practice
              </CardDescription>
            </div>

            <Button
              onClick={() => setIsAddDialogOpen(true)}
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/100 w-full sm:w-auto text-sm"
              size="sm"
            >
              <PlusIcon className="mr-2 size-4" />
              Add Doctor
            </Button>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-4 text-muted-foreground" />
              <Input
                placeholder="Search doctors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 text-sm"
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterActive === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterActive("all")}
                className="flex-1 sm:flex-none text-xs sm:text-sm"
              >
                All ({doctors.length})
              </Button>
              <Button
                variant={filterActive === "active" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterActive("active")}
                className="flex-1 sm:flex-none text-xs sm:text-sm"
              >
                Active ({doctors.filter(d => d.isActive).length})
              </Button>
              <Button
                variant={filterActive === "inactive" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilterActive("inactive")}
                className="flex-1 sm:flex-none text-xs sm:text-sm"
              >
                Inactive ({doctors.filter(d => !d.isActive).length})
              </Button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-4 sm:p-6 pt-0">
          <div className="space-y-3 sm:space-y-4">
            {filteredDoctors.map((doctor) => {
              const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(doctor.name)}&background=random&size=128&bold=true&rounded=true`;
              
              return (
                <div
                  key={doctor.id}
                  className="flex flex-col lg:flex-row lg:items-center justify-between p-3 sm:p-4 bg-muted/30 rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all gap-4"
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
                    <Image
                      src={doctor.imageUrl || avatarUrl}
                      alt={doctor.name}
                      width={48}
                      height={48}
                      className="size-10 sm:size-12 rounded-full object-cover ring-2 ring-background shrink-0"
                      unoptimized
                      onError={(e) => {
                        e.currentTarget.src = avatarUrl;
                      }}
                    />

                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm sm:text-base truncate">{doctor.name}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground flex flex-wrap items-center gap-2">
                        <span className="truncate">{doctor.speciality}</span>
                        <span className="px-2 py-0.5 bg-muted rounded text-xs shrink-0">
                          {doctor.gender === "MALE" ? "Male" : "Female"}
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground truncate">
                          <MailIcon className="h-3 w-3 shrink-0" />
                          <span className="truncate">{doctor.email}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <PhoneIcon className="h-3 w-3 shrink-0" />
                          {doctor.phone}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between lg:justify-end gap-2 sm:gap-3 flex-wrap">
                    <div className="text-center order-first lg:order-none">
                      <div className="font-semibold text-primary text-sm sm:text-base">
                        {doctor.appointmentCount}
                      </div>
                      <div className="text-xs text-muted-foreground whitespace-nowrap">
                        Appointments
                      </div>
                    </div>

                    {doctor.isActive ? (
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 text-xs">
                        Active
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="text-xs">Inactive</Badge>
                    )}
                    
                    <div className="flex gap-2 w-full lg:w-auto">
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 px-2 sm:px-3 flex-1 lg:flex-none text-xs sm:text-sm"
                        onClick={() => handleEditDoctor(doctor)}
                      >
                        <EditIcon className="size-3 sm:size-4 sm:mr-1" />
                        <span className="hidden sm:inline">Edit</span>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 px-2 sm:px-3 flex-1 lg:flex-none text-destructive hover:text-destructive hover:bg-destructive/10 text-xs sm:text-sm"
                        onClick={() => handleDeleteClick(doctor)}
                        disabled={isDeleting}
                      >
                        <TrashIcon className="size-3 sm:size-4 sm:mr-1" />
                        <span className="hidden sm:inline">Delete</span>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}

            {filteredDoctors.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <StethoscopeIcon className="size-12 mx-auto mb-3 opacity-20" />
                <p className="text-sm">
                  {searchTerm || filterActive !== "all" 
                    ? "No doctors match your filters" 
                    : "No doctors added yet"}
                </p>
                {!searchTerm && filterActive === "all" && (
                  <Button
                    onClick={() => setIsAddDialogOpen(true)}
                    variant="outline"
                    size="sm"
                    className="mt-4"
                  >
                    <PlusIcon className="mr-2 size-4" />
                    Add Your First Doctor
                  </Button>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <AddDoctorDialog
        isOpen={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
      />

      <EditDoctorDialog
        key={selectedDoctor?.id}
        isOpen={isEditDialogOpen}
        onClose={handleCloseEditDialog}
        doctor={selectedDoctor}
      />

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent className="max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete Dr. {doctorToDelete?.name}.
              {doctorToDelete && doctorToDelete.appointmentCount > 0 && (
                <span className="block mt-2 text-destructive font-medium">
                  Warning: This doctor has {doctorToDelete.appointmentCount}{" "}
                  appointment(s). Consider deactivating instead.
                </span>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setDoctorToDelete(null)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              className="bg-destructive hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
export default DoctorsManagement;