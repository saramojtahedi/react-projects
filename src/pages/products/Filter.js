import React, { useState } from 'react'
import Select from 'react-select'
import { useProductsActions } from './ProductsProvider'

const Filter = () => {
    const dispatch = useProductsActions()
    const [filter, setFilter] = useState('')
    const filterOptions = [
        { value: '', label: 'همه' },
        { value: 's', label: 'سایز s' },
        { value: 'm', label: 'سایز m' },
        { value: 'l', label: 'سایز l' },
      ];

    const filterHandler = (selectedOption) => {
        dispatch({type: "FILTER", event: selectedOption})
        setFilter(selectedOption)
    }

    return (
        <Select
            value={filter}
            onChange={filterHandler}
            options={filterOptions}
        />
    )
}

export default Filter
