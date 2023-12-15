import { ErrorMessage, useField } from "formik";
import { Input } from "antd";

interface ICInput
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {}
const CInput = ({ name, ...rest }: ICInput) => {
  const [field, meta] = useField(name || "");
  const errorStyles = meta.touched && field && meta?.error ? "error" : "";

  return (
    <div className="text-[red]">
      <Input {...rest} {...field} id={name} name={name} status={errorStyles} />
      <ErrorMessage name={name || ""} id={name} />
    </div>
  );
};

export default CInput;
