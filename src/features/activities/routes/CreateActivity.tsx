import { ContentLayout } from "@/components/layout/ContentLayout";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DatePicker,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Input,
  Item,
  Label,
  Popover,
} from "react-aria-components";
import styled from "styled-components";
import { AutoComplete } from "@/components/elements/form/AutoComplete";

enum ActivityCategory {
  "Birding",
  "Cycling",
  "Swimming",
  "Hiking",
  "Camping",
}

type Inputs = {
  name: string;
  category: ActivityCategory;
  startTime: string;
  endTime: string;
};

export function CreateActivity() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (inputs: Inputs) => {
    console.log(inputs);
  };

  return (
    <ContentLayout>
      <NarrowContainer>
        <h1>Create new activity</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TwoColumns>
            <Column>
              <Label>Name</Label>
              <Input type="text" {...register("name", { required: true })} />
            </Column>
            <Column>
              <AutoComplete />
            </Column>
          </TwoColumns>

          <DatePicker granularity="minute">
            <Label>Date</Label>
            <Group>
              <DateInput>
                {(segment) => <DateSegment segment={segment} />}
              </DateInput>
              <Button>▼</Button>
            </Group>
            <Popover>
              <Dialog>
                <Calendar>
                  <header>
                    <Button slot="previous">◀</Button>
                    <Heading />
                    <Button slot="next">▶</Button>
                  </header>
                  <CalendarGrid>
                    {(date) => <CalendarCell date={date} />}
                  </CalendarGrid>
                </Calendar>
              </Dialog>
            </Popover>
          </DatePicker>

          <button type="submit">Create activity</button>
        </form>
      </NarrowContainer>
    </ContentLayout>
  );
}

const InputField = styled(Input)`
  width: 100%;
`;

const NarrowContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 10px;
`;

const TwoColumns = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

// const Column = styled.div`
//   flex: 1;
// `;
