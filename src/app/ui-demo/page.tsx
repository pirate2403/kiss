import { memo } from "react";
import MainLogo from "@/components/ui/MainLogo";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import Notification from "@/components/ui/Notification";
import Input from "@/components/ui/Input";
import SearchInput from "@/components/ui/SearchInput";

function Page() {
  return (
    <div className="flex flex-col gap-4 px-24 py-4">
      <MainLogo />
      <Button>Button</Button>
      <Tag type="send" />
      <Notification
        type="info"
        title="Default"
        message="Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius molestias"
      />
      <Input label="Label" placeholder="Example Text" />
      <SearchInput placeholder="Search" />
    </div>
  );
}

export default memo(Page);
