import classes from './ReduxFormComponents.module.css'

const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;

    return (
      <div className={classes.reduxFormComponent + " " + (hasError ? classes.error : "")}>
        <Element {...input} {...props} />
        {hasError && <span className={classes.reduxFormComponent}>{meta.error}</span>}
      </div>
    );
  };
  
export const TextArea = Element("textarea");

export const Input = Element("input");
