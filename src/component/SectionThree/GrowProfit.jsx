import Button from '../UI/Button';
import Table from '../../assets/Table.svg';

const GrowProfit = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center w-fit gap-20 lg:gap-0 lg:w-none mx-auto'>
        <div className='mx-auto text-center lg:text-left'>
          <h3 className='font-bold text-2xl text-white max-w-lg'>
            Grow your profit and track your investments
          </h3>
          <p className='font-extralight text-md text-textLight leading-relaxed 2xl:leading-relaxed mx-auto lg:mx-0 mt-8 mb-12 max-w-sm'>
            Use advanced analytical tools. Clear TradingView charts let you
            track current and historical profit investments.
          </p>
          <Button extraClass='px-6 w-fit'>Learn More</Button>
        </div>
        <img className='mr-20 lg:mr-0' src={Table} alt='Table' />
      </div>
  )
}

export default GrowProfit