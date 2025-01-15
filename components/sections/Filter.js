"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import Select from 'react-select';
import { useId } from 'react';
import { useState, useEffect } from 'react';

let versionsOptions = [
    { value: '', label: 'جميع الإصدارات' },
];

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color: state.isFocused ? 'white' : '#817ea8',
        backgroundColor: state.isFocused ? '#00A78F' : 'white',
    }),
};

export default function Filter({ title, fieldsNumber, versions, handleSubmit }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (versionsOptions.length <= versions.length) {
            versions?.map((version) =>
                versionsOptions.push({ value: version.id, label: version.name })
            );
        }
    }, [versions]);

    const [selectedVersion, setSelectedVersion] = useState(versionsOptions[0].value);
    const [ageFrom, setAgeFrom] = useState('');
    const [ageTo, setAgeTo] = useState('');
    const [error, setError] = useState(null); // For validation errors

    useEffect(() => {
        const version = searchParams.get('version') || '';
        const ageFromParam = searchParams.get('age_from') || '';
        const ageToParam = searchParams.get('age_to') || '';

        setSelectedVersion(version);
        setAgeFrom(ageFromParam);
        setAgeTo(ageToParam);
    }, [searchParams]);

    const validateInputs = () => {
        if (ageFrom && ageTo && Number(ageTo) < Number(ageFrom)) {
            setError('Age To must be greater than or equal to Age From.');
            return false;
        }
        setError(null); // Clear any previous error
        return true;
    };

    const handleFilterApply = () => {
        if (!validateInputs()) return;

        const params = new URLSearchParams();

        if (fieldsNumber === 2) {
            if (selectedVersion) {
                params.set('version', selectedVersion);
            }
            if (ageFrom) {
                params.set('age_from', ageFrom);
            }
            if (ageTo) {
                params.set('age_to', ageTo);
            }
            handleSubmit(ageFrom, ageTo, selectedVersion);
        } else {
            if (ageFrom || ageTo) {
                params.set('age_from', ageFrom);
                params.set('age_to', ageTo);
                handleSubmit(ageFrom, ageTo, "");
            }
        }

        const newUrl = `${window.location.pathname}?${params.toString()}`;
        history.replaceState(null, '', newUrl);
    };

    return (
        <section className='filters-wrapper'>
            <div className='row justify-content-center align-items-center'>
                <div className='col-auto'>
                    <h3 className='filter-title head-blue'>{title}</h3>
                </div>
                <div className={`filters-fields row ${fieldsNumber === 2 ? "col-6" : 'col-3'}`}>
                    {fieldsNumber === 2 && (
                        <>
                            <div className='col-md-6 col-12 mb-3'>
                                <Select
                                    styles={customStyles}
                                    options={versionsOptions}
                                    value={versionsOptions.find(option => option.value === selectedVersion)}
                                    onChange={(option) => setSelectedVersion(option.value)}
                                    instanceId={useId()}
                                />
                            </div>
                            <div className='col-md-6 col-12 mb-3'>
                                <div className='row'>
                                    <div className='col-6 number-wrapper'>
                                        <input
                                            type='number'
                                            className='form-control'
                                            placeholder='العمر من'
                                            min={1}
                                            value={ageFrom}
                                            onChange={(e) => setAgeFrom(e.target.value)}
                                        />
                                    </div>
                                    <div className='col-6 number-wrapper'>
                                        <input
                                            type='number'
                                            className='form-control'
                                            placeholder='العمر الى'
                                            min={1}
                                            value={ageTo}
                                            onChange={(e) => setAgeTo(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    {fieldsNumber === 1 && (
                        <div className='col-12'>
                            <div className='row'>
                                <div className='col-6 number-wrapper'>
                                    <input
                                        type='number'
                                        className='form-control'
                                        placeholder='العمر من'
                                        min={1}
                                        value={ageFrom}
                                        onChange={(e) => setAgeFrom(e.target.value)}
                                    />
                                </div>
                                <div className='col-6 number-wrapper'>
                                    <input
                                        type='number'
                                        className='form-control'
                                        placeholder='العمر الى'
                                        min={1}
                                        value={ageTo}
                                        onChange={(e) => setAgeTo(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                {error && <div className="text-danger">{error}</div>}
                <div className={`filters-action col-auto ${fieldsNumber === 2 ? " mb-3" : ''}`}>
                    <button onClick={handleFilterApply}>صنف</button>
                </div>
            </div>
        </section>
    );
}
