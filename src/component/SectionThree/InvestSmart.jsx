import Button from '../UI/Button';
import Chart from '../../assets/Chart.svg';

const InvestSmart = () => {
  return (
    <div className='flex flex-col lg:flex-row item-center lg:items-start justify-center gap-20 lg:gap-32 w-fit lg:w-none mx-auto'>
      <div className='pt-12 mx-auto text-center lg:text-left'>
        <h3 className='font-bold text-2xl text-white'>Invest Smart</h3>
        <p className='font-extralight text-md text-textLight leading-relaxed 2xl:leading-relaxed mt-6 mb-10 max-w-sm mx-auto'>
          Get full statistic information about the behaviour of buyers and
          sellers will help you to make the decision.
        </p>
        <Button extraClass='px-6 w-fit'>Learn More</Button>
      </div>
      <img src={Chart} alt='Chart' />
    </div>
  );
};

export default InvestSmart;
