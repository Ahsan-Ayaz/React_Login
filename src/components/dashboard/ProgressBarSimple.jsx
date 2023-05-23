import React from 'react'

const ProgressBarSimple = (props) => {
  return (
    <>
    <h4 class="small font-weight-bold">{props.title} <span class="float-right">{props.value+"%"}</span></h4>
    <div class="progress mb-4">
        <div class={`progress-bar bg-${props.colorClass}`} role="progressbar" style={{width: props.value +"%"}} aria-valuenow={props.value} aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    </>
  )
}

export default ProgressBarSimple