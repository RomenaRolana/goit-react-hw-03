import css from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  const handleClick = () => {
    onDelete(id);
  };
  return (
    <li className={css.itemContact}>
      <p className={css.itemContactName}>
        <b>{name}</b>
      </p>

      <p className={css.itemContactName}>
        <b>{number}</b>
      </p>
      <button type='button' onClick={handleClick}>
        ❌ Delete
      </button>
    </li>
  );
};

export default Contact;
