import Image from 'next/image';

const HeaderTitle = ({ title }: { title: string }) => (
  <div className="flex items-center py-4 mb-1 cursor-pointer">
    <p className="text-xl ml-2">{title}</p>

    <div className="ml-auto pl-4 flex items-center">
      <Image src="/icons/right-arrow.svg" alt="right-arrow" height="16" width="16" />
    </div>
  </div>
);

export default HeaderTitle;
