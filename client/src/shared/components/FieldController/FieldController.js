import { ErrorMessage } from '@hookform/error-message';
import { useController } from 'react-hook-form';

const FieldController = ({
  formGroup = true,
  options = [],
  label,
  control,
  name,
  placeholder,
  type = 'text',
  defaultValue,
  disabled = false,
  ...rest
}) => {
  const {
    field: { ref, ...inputProps },
    formState: { errors },
  } = useController({
    name,
    control,
    defaultValue,
  });

  return (
    <div className={`${formGroup ? 'mb-3' : ''}`}>
      {label && <label className="form-label m-0 mb-1">{label}</label>}

      {type === 'textarea' ? (
        <textarea placeholder={placeholder} {...inputProps} ref={ref} className="form-control" {...rest} />
      ) : type === 'select' ? (
        <select placeholder={placeholder} {...inputProps} ref={ref} className="form-control">
          <option value="">Select</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === 'file' ? (
        <input
          placeholder={placeholder}
          onChange={(e) => {
            const newFile = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(newFile);
            reader.onloadend = () => {
              inputProps.onChange(reader.result);
            };
          }}
          disabled={disabled}
          ref={ref}
          className="form-control"
          type="file"
        />
      ) : (
        <input
          placeholder={placeholder}
          {...inputProps}
          disabled={disabled}
          ref={ref}
          type={type}
          className="form-control"
        />
      )}
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p className="text-[red] text-[12px] mt-1 mb-0">{message}</p>}
      />
    </div>
  );
};

export default FieldController;
