import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { ContentLayout } from "@/components/layout/ContentLayout";
import styled from "styled-components";
import { TextField, Autocomplete, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Button } from "@/components/elements/Button";
import useDebounce from "@/hooks/useDebounce";
import { useGeoCoder } from "../hooks/useGeoCoder";
import dayjs from "dayjs";
import { GeoCoderResult } from "../types";

const ACTIVITY_CATEGORIES = [
  "Birding",
  "Cycling",
  "Swimming",
  "Hiking",
  "Camping",
];

type Inputs = {
  title: string;
  category: string;
  description: string;
  startDate: string;
  startTime: string;
  location: GeoCoderResult;
};

export function CreateActivity() {
  const navigate = useNavigate();

  // axios.get(`${import.meta.env.VITE_BASE_URL}/users/me`, {
  //   headers: {
  //     Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  //   },
  // });

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

  const onSubmit: SubmitHandler<Inputs> = async (inputs: Inputs) => {
    const startDateTime = mergeDateAndTimeIntoDateTime(
      inputs.startDate,
      inputs.startTime
    ).toISOString();

    console.log(startDateTime);

    try {
      await axios.post("/create-activity", {
        title: inputs.title,
        category: inputs.category,
        description: inputs.description,
        startDateTime,
        location: inputs.location,
      });

      navigate(-1);
    } catch (error) {
      // TODO: handle error in a pretty way
      console.log(error);
    }
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

          <Controller
            name="category"
            control={control}
            rules={{ required: "Category is required" }}
            render={({ field }) => (
              <>
                <TextField
                  select
                  label="Category"
                  defaultValue=""
                  {...field}
                  value={field.value}
                >
                  {ACTIVITY_CATEGORIES.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </TextField>
              </>
            )}
          />

          <Controller
            name="description"
            control={control}
            defaultValue=""
            rules={{ required: "Description is required" }}
            render={({ field }) => (
              <TextField
                label="Description"
                multiline
                rows={3}
                placeholder="A short description about the activity..."
                variant="outlined"
                error={!!errors.description}
                helperText={errors.description && errors.description.message}
                {...field}
              />
            )}
          />

          <Controller
            name="startDate"
            control={control}
            rules={{ required: "Start date is required" }}
            render={({ field }) => (
              <DatePicker
                label="Start date"
                value={field.value}
                inputRef={field.ref}
                onChange={field.onChange}
                minDate={dayjs()}
              />
            )}
          />

          <Controller
            name="startTime"
            control={control}
            rules={{ required: "Start time is required" }}
            render={({ field }) => (
              <TimePicker
                label="Start time"
                onChange={field.onChange}
                value={field.value}
                inputRef={field.ref}
              />
            )}
          />

          <Controller
            name="location"
            control={control}
            rules={{ required: "Location is required" }}
            render={({ field }) => (
              <Autocomplete
                disablePortal
                options={suggestedLocations}
                getOptionLabel={(option) => option.label}
                loading={locationInput.length === 0}
                clearOnBlur={false}
                clearOnEscape={false}
                disableClearable={true}
                loadingText="Type an address..."
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Location"
                    variant="outlined"
                    onChange={(e) => {
                      setLocationInput(e.target.value);
                    }}
                    error={!!errors.location}
                    helperText={errors.location && errors.location.message}
                  />
                )}
                {...field}
                value={field.value || null}
                onChange={(_, value) => {
                  field.onChange(value);
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

function mergeDateAndTimeIntoDateTime(date: string, time: string) {
  return dayjs(
    `${dayjs(date).format("YYYY-MM-DD")} ${dayjs(time).format("HH:mm:ss")}`
  );
}
