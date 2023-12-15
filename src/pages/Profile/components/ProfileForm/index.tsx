import { withFormik, FormikValues, Form, Field } from "formik";
import { FormEvent, useState } from "react";
import * as yup from "yup";

import { IoIosArrowForward } from "react-icons/io";

import { IProfileFormState } from "./profile-form-state.interface";
import { formItems } from "./profile.data";
import { phoneRegExp } from "./utils/index";

import CInput from "ui/CInput";
import { CUpload } from "ui/СUpload/index";
import { Button } from "antd";

const initialValues: IProfileFormState = {
  email: "dasdadfad@das.das",
  country: "dasfas",
  phone: "89103225310",
  surname: "dsddasdasd",
  name: "dasddsadasdas",
  file: "",
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Неверный формат email")
    .required("Email - обязательное поле!"),
  country: yup.string(),
  phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
  surname: yup.string().required("Surname - обязательное поле!"),
  name: yup.string().required("Name - обязательное поле!"),
});

const ProfileForm = withFormik<FormikValues, IProfileFormState>({
  handleSubmit: () => null,
  validateOnMount: true,
  mapPropsToValues: () => initialValues,
  validationSchema: validationSchema,
  enableReinitialize: true,
})(({ values, isValid, isSubmitting, errors, setFieldValue }) => {
  // const fileReader = new FileReader();

  // const setImageFile = () => {
  //   return (fileReader.onloadend = () => {
  //     setFieldValue("file", fileReader.result);
  //   });
  // };

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isEdit) return setIsEdit((prev) => !prev);
    setIsEdit(false);
    alert(JSON.stringify(values));
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off" className="w-[500px]">
      <div className="p-8 bg-white rounded-2xl">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-5">Основная информация</div>
          <CUpload />
        </div>
        {/* <input
          id="file"
          name="file"
          type="file"
          onChange={(event: any) => {
            event.preventDefault();
            const file = event.currentTarget?.files[0];
            fileReader.readAsDataURL(file);
          }}
        /> */}
        {formItems.map(({ name, title }) => (
          <div key={name} className="my-5">
            <span className="flex items-center gap-1">
              {title}
              <IoIosArrowForward color="#20e8e8" size={14} />
            </span>
            {isEdit ? (
              <Field id={name} name={name} as={CInput} />
            ) : (
              <span>{values[name]}</span>
            )}
          </div>
        ))}
        <div>Вы зарегестрировались 01.12.2023</div>
        <Button
          disabled={!isValid || isSubmitting}
          htmlType="submit"
          className="w-full mt-2"
        >
          {isEdit ? "Отправить" : "Редактировать"}
        </Button>
      </div>
    </Form>
  );
});

export default ProfileForm;
