import type { Metadata } from "next";
import SearchInput from "@/ui-kit/SearchInput";
import Button from "@/ui-kit/Button";

export const metadata: Metadata = {
  title: "Dashboard | KISS",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-4">
        <SearchInput
          labelClassName="w-full md:w-[60%] lg:w-[60%]"
          placeholder="Search"
        />
        <Button>Create</Button>
      </div>
      <div className="border-t-2 border-gray-40-25 py-4">Dashboard</div>
    </div>
  );
}
