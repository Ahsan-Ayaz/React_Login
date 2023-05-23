import React from 'react'
import ProgressBarSimple from './ProgressBarSimple'

const ContentProjects = () => {
    const dataProgress = [
        {title: 'Server Migration', value: '20', color: 'danger'},
        {title: 'Sales Tracking', value: '40', color: 'warning'},
        {title: 'Customer Database', value: '60', color: ''},
        {title: 'Payout Details', value: '80', color: 'info'},
        {title: 'Account Setup', value: '100', color: 'success'},
    ];
  return (
    <>
    {dataProgress.map((item, index) => (
        <ProgressBarSimple key={index} title={item.title} value={item.value} colorClass={item.color} />
    ))}
    </>
  )
}

export default ContentProjects