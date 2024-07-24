import React from 'react'

function FillTheForm () {
  return (
    <div>
        <div className='lgForm w-[80%] m-auto pt-[90px]'>
            <h2 className='font-bold text-[30px] tracking-[1px]'>Fill The Form</h2>
          <form
            action="https://formsubmit.co/dorinelrushi8@gmail.com"
            method="POST"
            className='mt-[19px]'
          >
        <label>Name of Business /  Emri i bisnesit</label>
            <div className='flex gap-[15px]'>
           
            <input className='mb-[22px] mt-[10px]' type='text' name='Name of Business'  placeholder='e.g GreenLeaf' required />
            <input className='mb-[22px] mt-[10px]' type='Email' name='Email'  placeholder='name@gmail.com' required />
            </div>
            <label>Location / Vendndodhja</label>
            <input className='mb-[22px] mt-[10px]' type='text' name='Location'  placeholder='e.g Korce Albania' required />
            <label>Do you have website? / Keni Website?</label>
          <div className='flex gap-[20px] mt-[15px]'>
          <div className='flex gap-[15px]'>
          <p>Yes</p><input type='radio' className='mt-[6px]'  name='Websites' value='yes' required/>
          </div>
          <div className='flex gap-[15px]'>
         <p>no</p><input type='radio' className='mt-[6px]' name='Websites'  value='no' required/>
         </div>
          </div>
            <input className='mb-[22px] mt-[10px]'  type='text' name='Website'  placeholder='e.g www.website.com' required/>

            <label>Are you using any social media platforms? If so, which ones? / A po përdorni ndonjë platformë të mediave sociale? Nëse po, cilat? </label>
            <textarea
                placeholder="Social media platforms "
                className='mb-[22px] mt-[10px]' 
                name='social media platforms?'
                rows="5"
                required
              ></textarea>
            <label>What challenges are you currently facing in your business? / Me cilat sfida po përballeni aktualisht në biznesin tuaj? </label>
            <textarea
                placeholder="Challenges are you currently facing"
                className='mb-[22px] mt-[10px]' 
                name='Challenges'
                rows="5"
                required
              ></textarea>
               <label>Are you using any specific tools or software for marketing, sales, or customer relationship management (CRM) /A po përdorni ndonjë mjet ose softuer specifik për marketing, shitje ose menaxhim të marrëdhënieve me klientët (CRM) </label>
            <textarea
                placeholder="Specific tools or software"
                className='mb-[22px] mt-[10px]' 
                name='specific tools or software'
                rows="5"
                required
              ></textarea>
               <label>Can you provide an overview of your current sales process? / A mund të jepni një përmbledhje të procesit aktual të shitjes?</label>
            <textarea
                placeholder="Current sales"
                className='mb-[22px] mt-[10px]' 
                name='current sales'
                rows="5"
                required
              ></textarea>
                  <label>What makes your products or services unique compared to your competitors? / Çfarë i bën produktet ose shërbimet tuaja unike në krahasim me konkurrentët tuaj?</label>
            <textarea
                placeholder="products or services"
                className='mb-[22px] mt-[10px]' 
                name='products or services'
                rows="5"
                required
              ></textarea>

            <label>Do you have an in-house team, or do you work with external agencies and consultants? / A keni një ekip të brendshëm, apo punoni me agjenci dhe konsulentë të jashtëm?</label>
            <textarea
                placeholder="team , external agencies and consultants "
                className='mb-[22px] mt-[10px]' 
                name='team , external agencies and consultants'
                rows="5"
                required
              ></textarea>
            {/*button */}
            <button type="submit" className="btn btn-lg btn-dark btn-block mb-[35px]">
              Submit Form
            </button>
            </form>
        </div>
    </div>
  )
}

export default FillTheForm