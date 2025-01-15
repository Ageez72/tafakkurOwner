"use client"
import { useState, useEffect } from 'react';
import Select from 'react-select';
import { useId } from 'react';
import Pagination from './Pagination';
import { getUrlParams } from '@/helpers';
const countryOptions = [
    { value: '', label: 'جميع الدول' },
]
const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isFocused ? 'white' : '#817ea8',
        backgroundColor: state.isFocused ? '#00A78F' : 'white',
    }),
};

export default function CountryFilterTable({ title, data, countries, handleSubmit, links, handlePagination }) {
    const [filteredData, setFilteredData] = useState(data);
    const [urlParams, setUrlParams] = useState("");
    
    useEffect(() => {
        
        const storedParams = getUrlParams();
        setUrlParams(storedParams || "");
    }, []);
    
    useEffect(() => {
        if (countryOptions.length <= countries.length) {
            countries?.map((country) => (
                countryOptions.push({ value: country.id, label: country.name })
            ))
        }
    });

    const handleCountryChange = (selectedOption) => {
        const value = selectedOption.value;
        setFilteredData(value);
        handleSubmit(value)
    };

    const getPagination = (num)=> {
        handlePagination(num)
    }

    return (
        <section className='filters-wrapper country-filter'>
            <div className='container custom-container'>
                <div className='row align-items-center'>
                    <div className='col-auto'>
                        <h3 className='filter-title head-blue'>{title}</h3>
                    </div>
                    <div className={`col-auto filters-fields row`}>
                        <div className='filter-wrap'>
                            <Select styles={customStyles} options={countryOptions} defaultValue={countryOptions[0]} onChange={handleCountryChange} instanceId={useId()}/>
                        </div>
                    </div>
                </div>
                <div className='table-container custom-container mt-5'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">اسم المؤسسة </th>
                                <th scope="col">الدولة </th>
                                <th scope="col">الولاية/ المدينة</th>
                                <th scope="col">المنطقة</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((school, i) => (
                                    <tr key={school.id}>
                                        <th scope="row">{school?.name}</th>
                                        <td>{school?.country?.name}</td>
                                        <td>{school?.city?.name}</td>
                                        <td>{school?.region}</td>
                                        {
                                            i === 0 ? (<td>
                                                <a href={`#${urlParams}`} className='near-place'>الأقرب إليك!</a>
                                                </td>) : 
                                                (<td></td>)
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <Pagination handlePagination={getPagination} links={links}/>
            </div>
        </section>
    )
}
