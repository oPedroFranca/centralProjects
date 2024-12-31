"use client";

import { useEffect, useState } from 'react';
import { mockCategories } from './mockCategories';

interface categoriosType {
  id: number
  color: string
  nameCategorie: string
  isSelected: boolean
}

export const MainLeftBarContent = () => {
  const [categories, setCategories] = useState<categoriosType[]>([]);

  const loadData = () => {
    setCategories(mockCategories);
    console.log(categories)
  }

  useEffect(() => {
    loadData();
  },[mockCategories])

  return (
    <div 
      className=" pt-4 pb-4 pl-2 pr-2"
    >
      <p className='text-gray-400'>Categories</p>

      <div className='flex flex-col w-full mt-4 cursor-pointer'>
        {categories.map((categorie) => (
          <div 
            key={categorie.id} 
            className={`
              flex mb-3 items-center 
              ${categorie.isSelected ? 'ml-1.5 font-semibold' : 'hover:font-semibold hover:ml-1.5'}
              rounded 
              group 
              transition-all 
              duration-300`}
             >
            
            <div 
              className='w-[18px] h-[18px] mr-3.5 p-0.5 flex rounded-full transition-all duration-300'
              style={{ backgroundColor: categorie.isSelected ? categorie.color : 'transparent' }}
            >
              <span 
                className='w-full h-full rounded-full transition-all duration-300 border-2 border-gray-800' 
                style={{ backgroundColor: categorie.color }}
              />
            </div>

            <p className={`
              ${categorie.isSelected ? 'text-gray-100' : 'group-hover:text-gray-200'} 
              transition-all 
              duration-300
            `}>
              {categorie.nameCategorie}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}