import React from 'react';
import Select from 'react-select';
import styles from './Input.module.scss';
import './DropdownInput.css';

interface Props {
    elementType: string;
    name?: string;
    label: string;
    placeholder?: string;
    onBlur?: any;
    value: any;
    onChange: any;
}

const genreOptions = [
    { value: 'Crime', label: 'Crime' },
    { value: 'Documentary', label: 'Documentary' },
    { value: 'Horror', label: 'Horror' },
    { value: 'Comedy', label: 'Comedy' },
    { value: 'Action', label: 'Action' },
    { value: 'Adventure', label: 'Adventure' },
    { value: 'Science Fiction', label: 'Science Fiction' },
    { value: 'Fantasy', label: 'Fantasy' },
    { value: 'Drama', label: 'Drama' },
    { value: 'Family', label: 'Family' },
    { value: 'Animation', label: 'Animation' },
    { value: 'Romance', label: 'Romance' },
    { value: 'Thriller', label: 'Thriller' },
    { value: 'Music', label: 'Music' },
];

const Input: React.FC<Props> = ({ elementType, name, label, placeholder, onBlur, value, onChange }) => {
    const handleChange = (value: any) => {
        onChange('genres', value);
    };

    const handleBlur = () => {
        onBlur('genres', true);
    };

    let inputElement = null;

    switch (elementType) {
        case 'input':
        case 'date':
        case 'url':
        case 'text':
            inputElement = (
                <input
                    data-type={label}
                    type={elementType}
                    name={name}
                    className={styles.inputElement}
                    placeholder={placeholder}
                    onBlur={onBlur}
                    value={value}
                    onChange={onChange}
                />
            );
            break;
        case 'select':
            inputElement = (
                <Select
                    isMulti
                    options={genreOptions}
                    onBlur={onBlur}
                    value={value}
                    onChange={handleChange}
                    classNamePrefix="react-select"
                    className="react-select-container"
                />
            );
            break;
    }

    return (
        <div className={styles.input}>
            <label className={styles.label}>{label}</label>
            {inputElement}
        </div>
    );
};

export default Input;
