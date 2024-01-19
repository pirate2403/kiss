import { memo } from "react";
import MainLogo from "@/components/ui/MainLogo";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import Notification from "@/components/ui/Notification";
import Input from "@/components/ui/Input";
import GridBlock from "@/components/ui/GridBlock";
import GridContainer from "@/components/ui/GridContainer";

function Page() {
  return (
    <GridContainer className="gap-y-4">
      <GridBlock sm={2} md={5} lg={8}>
        <MainLogo />
      </GridBlock>
      <GridBlock sm={4} md={5} lg={8}>
        <Notification
          type="info"
          title="Default"
          message="Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius molestias"
        />
      </GridBlock>
      <GridBlock sm={3} md={5} lg={12}>
        <Input label="Label" placeholder="Example Text" />
      </GridBlock>
      <GridBlock sm={3} md={5} lg={8}>
        <Button>Button</Button>
      </GridBlock>
      <GridBlock sm={3} md={5} lg={8}>
        <Tag type="send" />
      </GridBlock>
    </GridContainer>
  );
}

export default memo(Page);
