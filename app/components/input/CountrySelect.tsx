"use client";

import useCountries from '@/app/hooks/useCountries';
import Select from 'react-select';

export type CountySelectValue = {
    flag: string;
    label: string;
    latlng: number[];
    region: string;
    value: string;
}

interface CountrySelectProps {
    value?: CountySelectValue;
    onChange: (value: CountySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ value, onChange }) => {

    const { getAll } = useCountries();
    return (
        <div>
            <Select
                placeholder="Anywhere"
                isClearable
                options={getAll()}
                value={value}
                onChange={(value) => onChange(value as CountySelectValue)}
                formatOptionLabel={(option: any) => (
                    <div className='flex flex-row items-center gap-3'>
                        <div>
                            {/* {option.flag} */}
                            <img src={option.flag} alt={option.label} width="20" height="20" /> {/* Displaying flag as an image */}

                        </div>
                        <div>
                            {option.label},
                            <span className='text-neutral-500 ml-1'>{option.region}</span>
                        </div>
                    </div>
                )}
            />
        </div>
    );
}

export default CountrySelect;