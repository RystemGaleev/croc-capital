import { useForm, SubmitHandler } from "react-hook-form";
import { UiButton } from "../UI/UiButton/UiButton";
import style from "./Form.module.scss";

type FormValues = {
  Name: string;
  Email: string;
  Text: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormValues>({
    mode: "all",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <div className={style.wrapper}>
        <div className={style.block}>
          <label>
            <input
              type="text"
              placeholder="Your name"
              className={style.input}
              {...register("Name", {
                required: "The field must be filled in",
                maxLength: 30,
              })}
            />

            {errors?.Name && (
              <p className={style.error}>
                {errors?.Name?.message || "Maximum of 30 characters"}
              </p>
            )}
          </label>
        </div>

        <div className={style.block}>
          <label>
            <input
              required
              className={style.input}
              type="email"
              placeholder="Your email"
              {...register("Email", {
                required: "The field must be filled in",
                pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
              })}
            />

            {errors?.Email && (
              <p className={style.error}>
                {errors?.Email?.message || "Enter the correct E-mail"}
              </p>
            )}
          </label>
        </div>
      </div>

      <div className={style.textarea_block}>
        <textarea
          className={style.textarea}
          placeholder="Your message"
          {...register("Text", {
            maxLength: 700,
          })}
        />

        {errors?.Text && (
          <p className={style.error}>
            {errors?.Text?.message || "No more than 700 characters"}
          </p>
        )}
      </div>

      <UiButton variant="outlined" size="md" disabled={!isValid}>
        Send Message
      </UiButton>
    </form>
  );
};
