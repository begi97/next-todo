// import React from 'react'
import Link from "next/link";

export const Navbar = ({categories}) => {

    // console.log(categories);

    const renderCategories = () => {
        return categories.length > 0 && categories.map((category, index) => {
            return <Link href={`/products/${category.name}-${category.id}`} key={category.id}>
                {category.name}
            </Link>
        })
    }

    return (
        <div>
            {renderCategories()}
        </div>
    )
}
