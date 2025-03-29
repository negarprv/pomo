import { FormControl, InputLabel, Input, Button } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  title: string;
  time: string;
};

const Form = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<Inputs>({
    defaultValues: {
      title: "",
      time: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <FormControl {...field}>
            <InputLabel htmlFor="title">Task title</InputLabel>
            <Input id="title" placeholder="Do Homework..." />
            <p>{errors.title?.message}</p>
          </FormControl>
        )}
      />

      <Controller
        name="time"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <FormControl {...field}>
            <TimePicker label="time" />
            <p>{errors.time?.message}</p>
          </FormControl>
        )}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
