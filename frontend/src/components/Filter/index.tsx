
import Select from 'react-select';
import './styles.css';
import { FilterData, SalesByStore, Store } from '../../types';
import { useEffect, useState } from 'react';
import { makeRequest } from '../../utils/requests';

const options = [
    {value: 'Araguari', label: 'Araguari'},
    {value: 'Alpinópolis', label: 'Alpinópolis'},
    {value: 'Passos', label: 'Passos'}
]

function createStoreFromValue(valueSelected: string): Store {
    return {
        value: valueSelected,
        label: valueSelected,
    };
}

type Props = {
    onFilterChange: (filter: FilterData) => void;
}

const Filter = ({onFilterChange} : Props) => {

    const [store, setStore] = useState<Store>();

    const OnChangeStore = (value: Store) => {

        if (value) {
            const selectedStore = createStoreFromValue(value.value);
            setStore(selectedStore);
            onFilterChange({ store: selectedStore });
            console.log(selectedStore);
        }

    };

    useEffect( () => {

        makeRequest.get<SalesByStore[]>('/sales/by-store')
        .then((response: any) => {
            setStore(response.storeName);
        
        })
        .catch(() => {
            console.log("error");
        })
    }, []);

    return(
        <main>
            <div className='base-card filter-container'>
                <Select
                    options={options}
                    value={store}
                    onChange={ value => OnChangeStore(value as Store)}
                    classNamePrefix="filter-select-citys"
                    placeholder="Selecionar Loja"
                />
            </div>
        </main>
    )
};

export default Filter;