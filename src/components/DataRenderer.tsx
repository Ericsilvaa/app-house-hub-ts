import { Spinner } from './ui/Spinner';

type Props = {
  children: React.ReactNode;
  error: string | null;
  isLoading: boolean;
};

const DataRenderer = ({ children, error, isLoading }: Props) => {
  if (isLoading) {
    return (
      <div className='flex justify-center'>
        <Spinner size='xs' />
      </div>
    );
  }

  if (error) {
    return <div className='text-center'>{error}</div>;
  }

  return children;
};

export default DataRenderer;
