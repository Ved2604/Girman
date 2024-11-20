import { User } from "@/constants/users_list";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ContactCard = ({ contact }: { contact: User }) => {
  return (
    <Card className="w-[340px] h-[274px] rounded-tl-2xl rounded-tr-none rounded-br-none rounded-bl-none p-6 flex flex-col">
      <CardHeader className="flex flex-row items-center gap-4 p-0 mb-4">
        <div className="rounded-full h-16 w-16 bg-gray-100 flex items-center justify-center text-gray-500 text-2xl font-semibold">
          {contact?.first_name?.[0]}
        </div>
        <div>
          <h3 className="text-xl font-semibold">{`${contact?.first_name} ${contact?.last_name}`}</h3>
          <p className="text-sm text-gray-500">{contact?.city}</p>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <p className="text-sm text-gray-500">Available on phone</p>
        <p className="text-lg font-medium mt-1">{contact?.contact_number}</p>
      </CardContent>

      <CardFooter className="mt-auto p-0">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="w-full bg-black hover:bg-gray-800 text-white"
              variant="default"
            >
              Fetch Details
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md p-6">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">
                Fetch Details
              </DialogTitle>
              <p className="text-gray-500 text-sm mt-2">
                Here are the details of following employee.
              </p>
            </DialogHeader>

            <div className="space-y-4 mt-6">
              <div>
                <p>
                  <span className="font-medium">Name:</span>{" "}
                  {contact?.first_name} {contact?.last_name}
                </p>
                <p>
                  <span className="font-medium">Location:</span> {contact?.city}
                </p>
                <p>
                  <span className="font-medium">Contact Number:</span>{" "}
                  {contact?.contact_number}
                </p>
              </div>

              <div>
                <p className="font-medium mb-2">Profile Image:</p>
                <img
                  src="/api/placeholder/400/320"
                  alt="Profile"
                  className="rounded-lg w-full max-w-[200px]"
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <DialogTrigger asChild>
                <Button variant="outline" className="px-8">
                  Close
                </Button>
              </DialogTrigger>
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default ContactCard;
