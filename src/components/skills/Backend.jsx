import React from 'react'

const Backend = () => {
  return (
    <>
    <div className='skills__content'>
     <h3 className="skills__title">Backend developer</h3>
     <div className="skills__box">
         <div className="skills__group">
             <div className="skills__data">
             <box-icon name='badge-check'></box-icon>
             </div>
             <div>
                 <h3 className="skills__name">PHP</h3>
                 <span className="skills__level">Basic</span>
             </div>
         </div>
         <div className="skills__group">
             <div className="skills__data">
             <box-icon name='badge-check'></box-icon>
             </div>
             <div>
                 <h3 className="skills__name">Liquid</h3>
                 <span className="skills__level">Intermediate</span>
             </div>
         </div>
         <div className="skills__group">
             <div className="skills__data">
             <box-icon name='badge-check'></box-icon>
             </div>
             <div>
                 <h3 className="skills__name">MySQL</h3>
                 <span className="skills__level">Intermediate</span>
             </div>
         </div>
         <div className="skills__group">
             <div className="skills__data">
             <box-icon name='badge-check'></box-icon>
             </div>
             <div>
                 <h3 className="skills__name">Firebase</h3>
                 <span className="skills__level">Intermediate</span>
             </div>
         </div>
     </div>
    </div>
    </>
  )
}

export default Backend