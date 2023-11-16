import './styles.css';
import Select from 'react-select';
import { FilterData, Store } from '../../types';
import { useEffect, useState } from 'react';
import { makeRequest } from '../../utils/requests';
import { Controller, useForm } from 'react-hook-form';

type Props = {
    onFilterChange: (filter: FilterData) => void;
}

const Filter = ({onFilterChange} : Props) => {

    const {
        handleSubmit,
        setValue,
        control,
    } = useForm<FilterData>();

    const onSubmit = (formData: FilterData) => {
        onFilterChange(formData);
    }

    const [stores, setStores] = useState<Store[]>([]);

    const OnChangeStore = (value: Store) => {
        
        if(value === null){
            const obj : Store = {
                id: 0,
                name: 'Selecionar Loja'
            }
            setValue('store', obj);
        }
        else{
            setValue('store', value);
        }

        handleSubmit(onSubmit)();
    };

    useEffect(() => {
        makeRequest.get<Store[]>('/stores')
        .then((response) => {
            setStores(response.data as Store[]);
        })
        .catch((error) => {
            console.error(error);
        })
    }, []);

    return(
        <form className='base-card filter-container'>
            <Controller
                name='store'
                control={control}
                render={({field}) => (

                    <Select {...field}
                    options={stores}
                    isClearable
                    placeholder="Selecionar Loja"
                    classNamePrefix="filter-select-citys"

                    onChange={value => OnChangeStore(value as Store)}

                    getOptionLabel={(str: Store) => str.name}
                    getOptionValue={(str: Store) => String(str.id)}
                    />
                )}
            />
        </form>
    )
};

export default Filter;