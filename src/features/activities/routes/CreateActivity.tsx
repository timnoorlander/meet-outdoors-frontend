import { useState } from "react";
import { ContentLayout } from "@/components/layout/ContentLayout";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import styled from "styled-components";
import { TextField, Autocomplete } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import { Button } from "@/components/elements/Button";
import useDebounce from "@/hooks/useDebounce";
import { useGeoCoder } from "../hooks/useGeoCoder";

enum ActivityCategory {
  "Birding",
  "Cycling",
  "Swimming",
  "Hiking",
  "Camping",
}

type Inputs = {
  title: string;
  category: ActivityCategory;
  startTime: string;
  endTime: string;
};

export function CreateActivity() {
  const [locationInput, setLocationInput] = useState("");
  const debouncedLocationInput = useDebounce(locationInput, 1000);

  const { searchResults: suggestedLocations } = useGeoCoder(
    debouncedLocationInput
  );

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (inputs: Inputs) => {
    console.log(inputs);
  };

  return (
    <ContentLayout>
      <NarrowContainer>
        <h1>Create new activity</h1>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="title"
            control={control}
            defaultValue=""
            rules={{ required: "Title is required" }}
            render={({ field }) => (
              <TextField
                label="Title"
                variant="outlined"
                error={!!errors.title}
                helperText={errors.title && errors.title.message}
                {...field}
              />
            )}
          />

          <Autocomplete
            disablePortal
            options={[{ label: "The Shawshank Redemption", year: 1994 }]}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Category" variant="outlined" />
            )}
          />

          <TextField
            label="Description"
            multiline
            rows={3}
            placeholder="A short description about the activity..."
            variant="outlined"
          />

          <DatePicker label="Start date" defaultValue={dayjs()} />

          <TimePicker label="Start time" defaultValue={dayjs()} />

          <Autocomplete
            disablePortal
            options={suggestedLocations}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Location"
                variant="outlined"
                onChange={(e) => {
                  setLocationInput(e.target.value);
                }}
              />
            )}
          />

          <Button type="submit">Create activity</Button>
        </Form>
      </NarrowContainer>
    </ContentLayout>
  );
}

const NarrowContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
