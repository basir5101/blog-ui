import React from 'react'

export default function Title({ title, className = "" }) {
    return (
        <h1 className={`text-2xl first-letter:text-purple-400 first-letter:font-semibold ${className}`}> {title || ""} </h1>
    )
}
