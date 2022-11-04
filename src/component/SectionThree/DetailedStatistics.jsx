import Button from '../UI/Button';
import Statistic from '../../assets/Statistic.svg';

const DetailedStatistics = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row items-center justify-center mx-auto gap-20 w-fit lg:w-none my-32'>
        <img src={Statistic} alt='Statistic' />
        <div className=' mx-auto text-center lg:text-left xl:pr-40'>
          <h3 className='font-bold text-2xl text-white'>Detailed Statistics</h3>
          <p className='font-extralight text-md text-textLight leading-relaxed 2xl:leading-relaxed mt-6 mb-10 max-w-[25rem] mx-auto'>
            View all mining related information in realtime, at any point at any
            location and decide which polls you want to mine in.
          </p>
          <Button extraClass='px-6 w-fit'>Learn More</Button>
        </div>
      </div>
  )
}

export default DetailedStatistics