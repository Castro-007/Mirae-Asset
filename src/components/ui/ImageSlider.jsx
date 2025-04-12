import React, { useState } from 'react'
import {motion} from 'framer-motion'
import DishImg from '../../lib/utils'
const ImageSlider = () => {
    const [positionIndex, setPositionIndex ] = useState([0, 1, 2, 3, 4, 5 ])

    const handleNext = () => {
        setPositionIndex((prevIndexes) => {
            const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 6)
            return updatedIndexes
        })
    }

    const positions = [
        'center',
        'left1',
        'left',
        'right',
        'right1'
    ]

    return (
        <div className='flex  overflow-x-scroll scrolly w-full px-4 gap-4 '>
            {
                DishImg.map((Img, Index) => (
                    <motion.img 
                    key={Img.id}
                    className={`h-[200px] w-[250px] ${positions[positionIndex[Index]]}`}
                    src={Img.img}
                    alt='Dish'
                    animate= {positions[positionIndex[Index]]}
                    transition= {{duration: 0.5, ease: 'easeLinear'}}
                    />
                ))
            }
        </div>
    )
}

export default ImageSlider