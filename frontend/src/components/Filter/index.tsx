
import Select from 'react-select';
import './styles.css';

const options = [
    {value: 'Araguari', label: 'Araguari'},
    {value: 'Alpinópolis', label: 'Alpinópolis'},
    {value: 'Passos', label: 'Passos'}
]

const Filter = () => {
    return(
        <main>
            <div className='base-card filter-container'>
                <Select
                    options={options}
                    classNamePrefix="filter-select-citys"
                    isMulti
                    placeholder="Selecionar Cidade(s)"
                />
            </div>
        </main>
    )
};

export default Filter;