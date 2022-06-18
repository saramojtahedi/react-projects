import React, { useState } from 'react'
import Select from 'react-select'
import { useProductsActions } from './ProductsProvider'

const Sort = () => {
    const dispatch = useProductsActions()
    const [sort, setSort] = useState('')
    const sortOptions = [
        { value: 'high', label: 'بیشترین' },
        { value: 'low', label: 'کمترین' },
      ];

    const sortHandler = (selectedOption) => {
        dispatch({type: "SORT", event: selectedOption})
        setSort(selectedOption)
    }

    return (
        <Select
            value={sort}
            onChange={sortHandler}
            options={sortOptions}
        />
    )
}

export default Sort
